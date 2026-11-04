import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { POST as login } from "@/app/api/login/route";
import { POST as register } from "@/app/api/register/route";
import { GET as listUsers, POST as decideUser } from "@/app/api/admin/users/route";
import { createSessionToken, SESSION_COOKIE } from "@/lib/auth";
import { MemoryUserStore, setUserStoreForTesting } from "@/lib/users";
import { decideAccess } from "@/lib/access";

const SECRET = "s".repeat(40);
const ADMIN = { email: "admin@example.com", password: "Admin-pass-1" };
const USER = { email: "Reader@Example.com", password: "Reader-pass-1" };

function json(url: string, body: unknown) {
  return new Request(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
}

function asRole(role: "admin" | "user", url: string, init: { method?: string; body?: unknown } = {}) {
  const token = createSessionToken({ email: ADMIN.email, role }, SECRET);
  return new NextRequest(url, {
    method: init.method ?? "GET",
    headers: { cookie: `${SESSION_COOKIE}=${token}`, "Content-Type": "application/json" },
    body: init.body ? JSON.stringify(init.body) : undefined,
  });
}

beforeEach(() => {
  setUserStoreForTesting(new MemoryUserStore());
  vi.stubEnv("AUTH_SECRET", SECRET);
  vi.stubEnv("ADMIN_EMAIL", ADMIN.email);
  vi.stubEnv("ADMIN_PASSWORD", ADMIN.password);
  vi.stubEnv("USERS", "[]");
});

afterEach(() => {
  setUserStoreForTesting(undefined);
  vi.unstubAllEnvs();
});

describe("self-registration with admin approval", () => {
  it("creates a pending account that cannot sign in", async () => {
    const res = await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    expect(res.status).toBe(202);
    expect(await res.json()).toEqual({ status: "pending" });

    const attempt = await login(json("http://x/api/login", { email: USER.email, password: USER.password }));
    expect(attempt.status).toBe(403);
    expect(await attempt.json()).toEqual({ error: "pending" });
    expect(attempt.headers.get("set-cookie")).toBeNull();
  });

  it("lets the user sign in after an admin approves them", async () => {
    await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    const approve = await decideUser(asRole("admin", "http://x/api/admin/users", { method: "POST", body: { email: USER.email, action: "approve" } }));
    expect(approve.status).toBe(200);

    const res = await login(json("http://x/api/login", { email: USER.email, password: USER.password }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ email: "reader@example.com", role: "user" });
    expect(res.headers.get("set-cookie")).toContain(SESSION_COOKIE);
  });

  it("refuses sign-in for a rejected account, with the generic error", async () => {
    await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    await decideUser(asRole("admin", "http://x/api/admin/users", { method: "POST", body: { email: USER.email, action: "reject" } }));
    const res = await login(json("http://x/api/login", { email: USER.email, password: USER.password }));
    expect(res.status).toBe(401);
  });

  it("rejects a wrong password for a pending account with the generic error", async () => {
    await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    const res = await login(json("http://x/api/login", { email: USER.email, password: "wrong-password" }));
    expect(res.status).toBe(401);
  });

  it("does not let a sign-up overwrite an existing account", async () => {
    const dup = await register(json("http://x/api/register", { email: ADMIN.email, password: "another-pass" }));
    expect(dup.status).toBe(409);
    await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    const again = await register(json("http://x/api/register", { email: USER.email, password: "other-password" }));
    expect(again.status).toBe(409);
  });

  it("validates email and password length", async () => {
    expect((await register(json("http://x/api/register", { email: "not-an-email", password: "long-enough" }))).status).toBe(400);
    expect((await register(json("http://x/api/register", { email: USER.email, password: "short" }))).status).toBe(400);
  });

  it("reports registration as unavailable when no database is configured", async () => {
    setUserStoreForTesting(null);
    const res = await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    expect(res.status).toBe(503);
  });
});

describe("admin approval endpoints", () => {
  it("lists pending requests for an admin", async () => {
    await register(json("http://x/api/register", { email: USER.email, password: USER.password }));
    const res = await listUsers(asRole("admin", "http://x/api/admin/users?status=pending"));
    const body = (await res.json()) as { users: { email: string }[] };
    expect(body.users.map((u) => u.email)).toEqual(["reader@example.com"]);
  });

  it("refuses non-admin users", async () => {
    const res = await listUsers(asRole("user", "http://x/api/admin/users?status=pending"));
    expect(res.status).toBe(403);
    const write = await decideUser(asRole("user", "http://x/api/admin/users", { method: "POST", body: { email: USER.email, action: "approve" } }));
    expect(write.status).toBe(403);
  });

  it("refuses requests with no session", async () => {
    const res = await listUsers(new NextRequest("http://x/api/admin/users?status=pending"));
    expect(res.status).toBe(401);
  });

  it("returns 404 when approving an unknown email", async () => {
    const res = await decideUser(asRole("admin", "http://x/api/admin/users", { method: "POST", body: { email: "nobody@example.com", action: "approve" } }));
    expect(res.status).toBe(404);
  });
});

describe("access rules for registration", () => {
  it("keeps the register page public and blocks the admin API for users", () => {
    expect(decideAccess("/register", null)).toBe("allow");
    expect(decideAccess("/api/register", null)).toBe("allow");
    expect(decideAccess("/api/admin/users", null)).toBe("login");
    expect(decideAccess("/api/admin/users", { email: "u@x.y", role: "user" })).toBe("forbidden");
    expect(decideAccess("/api/admin/users", { email: "a@x.y", role: "admin" })).toBe("allow");
  });
});

describe("configuration with a database and no env accounts", () => {
  it("accepts a database-only setup, so approved sign-ups can log in", async () => {
    const { readAuthConfig } = await import("@/lib/auth");
    expect(() => readAuthConfig({ AUTH_SECRET: SECRET, DATABASE_URL: "postgres://example" })).not.toThrow();
    expect(() => readAuthConfig({ AUTH_SECRET: SECRET })).toThrow(/ADMIN_EMAIL/);
  });
});
