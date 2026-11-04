import { describe, it, expect, vi, afterEach } from "vitest";
import { POST } from "@/app/api/login/route";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

const ENV = {
  AUTH_SECRET: "s".repeat(40),
  ADMIN_EMAIL: "bhaskar.sundarraj@gmail.com",
  ADMIN_PASSWORD: "Denver@2027",
};

function login(body: unknown) {
  return POST(
    new Request("http://localhost/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  );
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("POST /api/login", () => {
  it("signs the admin in with the configured credentials", async () => {
    Object.entries(ENV).forEach(([k, v]) => vi.stubEnv(k, v));
    const res = await login({ email: ENV.ADMIN_EMAIL, password: ENV.ADMIN_PASSWORD });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ email: ENV.ADMIN_EMAIL, role: "admin" });
    const cookie = res.headers.get("set-cookie") ?? "";
    const token = cookie.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`))?.[1];
    expect(verifySessionToken(token, ENV.AUTH_SECRET)?.role).toBe("admin");
  });

  it("rejects a wrong password with 401", async () => {
    Object.entries(ENV).forEach(([k, v]) => vi.stubEnv(k, v));
    const res = await login({ email: ENV.ADMIN_EMAIL, password: "wrong" });
    expect(res.status).toBe(401);
  });

  it("reports a server configuration problem as 500 instead of a wrong password", async () => {
    vi.stubEnv("AUTH_SECRET", "");
    vi.stubEnv("ADMIN_EMAIL", "");
    vi.stubEnv("ADMIN_PASSWORD", "");
    const res = await login({ email: ENV.ADMIN_EMAIL, password: ENV.ADMIN_PASSWORD });
    expect(res.status).toBe(500);
    expect((await res.json()).error).toMatch(/not configured/i);
  });
});
