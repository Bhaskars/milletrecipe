import { describe, it, expect } from "vitest";
import {
  authenticate,
  createSessionToken,
  readAuthConfig,
  verifySessionToken,
} from "@/lib/auth";

const config = {
  secret: "test-secret-value-of-sufficient-length",
  accounts: [
    { email: "admin@example.com", password: "AdminPass1", role: "admin" as const },
    { email: "reader@example.com", password: "ReaderPass1", role: "user" as const },
  ],
};

describe("authenticate", () => {
  it("returns the admin role for the admin account", () => {
    expect(authenticate("admin@example.com", "AdminPass1", config.accounts)).toEqual({
      email: "admin@example.com",
      role: "admin",
    });
  });

  it("returns the user role for a regular account", () => {
    expect(authenticate("reader@example.com", "ReaderPass1", config.accounts)?.role).toBe("user");
  });

  it("matches the email regardless of case and surrounding spaces", () => {
    expect(authenticate("  Admin@Example.com ", "AdminPass1", config.accounts)?.role).toBe("admin");
  });

  it("rejects a wrong password", () => {
    expect(authenticate("admin@example.com", "wrong", config.accounts)).toBeNull();
  });

  it("rejects an unknown email", () => {
    expect(authenticate("nobody@example.com", "AdminPass1", config.accounts)).toBeNull();
  });
});

describe("readAuthConfig", () => {
  it("builds an admin account from ADMIN_EMAIL and ADMIN_PASSWORD", () => {
    const cfg = readAuthConfig({
      AUTH_SECRET: "s".repeat(32),
      ADMIN_EMAIL: "boss@example.com",
      ADMIN_PASSWORD: "pw",
    });
    expect(cfg.accounts).toEqual([{ email: "boss@example.com", password: "pw", role: "admin" }]);
  });

  it("adds user accounts from the USERS JSON list", () => {
    const cfg = readAuthConfig({
      AUTH_SECRET: "s".repeat(32),
      ADMIN_EMAIL: "boss@example.com",
      ADMIN_PASSWORD: "pw",
      USERS: JSON.stringify([{ email: "u@example.com", password: "up" }]),
    });
    expect(cfg.accounts.map((a) => a.role)).toEqual(["admin", "user"]);
  });

  it("refuses to run without a session secret", () => {
    expect(() => readAuthConfig({ ADMIN_EMAIL: "a@b.c", ADMIN_PASSWORD: "x" })).toThrow(/AUTH_SECRET/);
  });
});

describe("session tokens", () => {
  const now = 1_700_000_000_000;

  it("round-trips the email and role", () => {
    const token = createSessionToken({ email: "a@b.c", role: "user" }, config.secret, now);
    expect(verifySessionToken(token, config.secret, now)).toEqual({ email: "a@b.c", role: "user" });
  });

  it("rejects a token signed with a different secret", () => {
    const token = createSessionToken({ email: "a@b.c", role: "admin" }, config.secret, now);
    expect(verifySessionToken(token, "another-secret-value-of-length", now)).toBeNull();
  });

  it("rejects a token whose payload was altered to escalate the role", () => {
    const token = createSessionToken({ email: "a@b.c", role: "user" }, config.secret, now);
    const [payload, sig] = token.split(".");
    const forged = Buffer.from(
      JSON.stringify({ email: "a@b.c", role: "admin", exp: now + 1_000_000 }),
    ).toString("base64url");
    expect(verifySessionToken(`${forged}.${sig}`, config.secret, now)).toBeNull();
    expect(payload).toBeTruthy();
  });

  it("rejects an expired token", () => {
    const token = createSessionToken({ email: "a@b.c", role: "user" }, config.secret, now, 1000);
    expect(verifySessionToken(token, config.secret, now + 2000)).toBeNull();
  });

  it("rejects garbage input", () => {
    expect(verifySessionToken("not-a-token", config.secret, now)).toBeNull();
    expect(verifySessionToken(undefined, config.secret, now)).toBeNull();
  });
});

describe("configuration problems are reported clearly", () => {
  it("trims stray whitespace and newlines pasted into environment values", () => {
    const cfg = readAuthConfig({
      AUTH_SECRET: "s".repeat(32) + "\n",
      ADMIN_EMAIL: " bhaskar.sundarraj@gmail.com\n",
      ADMIN_PASSWORD: "Denver@2027\n",
    });
    expect(cfg.secret).toBe("s".repeat(32));
    expect(authenticate("bhaskar.sundarraj@gmail.com", "Denver@2027", cfg.accounts)?.role).toBe("admin");
  });

  it("names the missing variables when no account is configured", () => {
    expect(() => readAuthConfig({ AUTH_SECRET: "s".repeat(32) })).toThrow(/ADMIN_EMAIL.*ADMIN_PASSWORD/);
  });
});
