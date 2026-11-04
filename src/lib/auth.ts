import { createHmac, timingSafeEqual } from "node:crypto";

export type Role = "admin" | "user";

export interface Account {
  email: string;
  password: string;
  role: Role;
}

export interface AuthConfig {
  secret: string;
  accounts: Account[];
}

export interface Session {
  email: string;
  role: Role;
}

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function normaliseEmail(email: string): string {
  return email.trim().toLowerCase();
}

function safeEqual(a: string, b: string): boolean {
  const ha = createHmac("sha256", "compare").update(a).digest();
  const hb = createHmac("sha256", "compare").update(b).digest();
  return timingSafeEqual(ha, hb) && a.length === b.length;
}

/**
 * Builds the account list from environment variables:
 * - AUTH_SECRET: signs session cookies (required)
 * - ADMIN_EMAIL / ADMIN_PASSWORD: the administrator account
 * - USERS: optional JSON array of {"email","password"} regular user accounts
 */
export function readAuthConfig(env: Record<string, string | undefined> = process.env): AuthConfig {
  // Values pasted into hosting dashboards often carry a trailing newline or space.
  const clean = (value: string | undefined) => value?.trim() ?? "";

  const secret = clean(env.AUTH_SECRET);
  if (!secret) {
    throw new Error("AUTH_SECRET is not set. Add it to the environment to enable login.");
  }

  const accounts: Account[] = [];
  const adminEmail = clean(env.ADMIN_EMAIL);
  const adminPassword = clean(env.ADMIN_PASSWORD);
  if (adminEmail && adminPassword) {
    accounts.push({ email: adminEmail, password: adminPassword, role: "admin" });
  }

  const users = clean(env.USERS);
  if (users) {
    let list: { email: string; password: string }[];
    try {
      list = JSON.parse(users);
    } catch {
      throw new Error("USERS must be a JSON array of {\"email\", \"password\"} objects.");
    }
    for (const u of list) {
      accounts.push({ email: String(u.email).trim(), password: String(u.password).trim(), role: "user" });
    }
  }

  if (accounts.length === 0) {
    throw new Error("No login accounts are configured. Set ADMIN_EMAIL and ADMIN_PASSWORD (and optionally USERS).");
  }

  return { secret, accounts };
}

/** Returns the signed-in identity if the email and password match an account. */
export function authenticate(email: string, password: string, accounts: Account[]): Session | null {
  const wanted = normaliseEmail(email);
  const account = accounts.find((a) => normaliseEmail(a.email) === wanted);
  if (!account) return null;
  return safeEqual(password, account.password) ? { email: account.email, role: account.role } : null;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createSessionToken(
  session: Session,
  secret: string,
  now: number = Date.now(),
  ttlMs: number = SESSION_TTL_MS,
): string {
  const payload = Buffer.from(
    JSON.stringify({ email: session.email, role: session.role, exp: now + ttlMs }),
  ).toString("base64url");
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySessionToken(
  token: string | undefined,
  secret: string,
  now: number = Date.now(),
): Session | null {
  if (!token) return null;
  const dot = token.lastIndexOf(".");
  if (dot < 0) return null;
  const payload = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  if (!safeEqual(signature, sign(payload, secret))) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      email: string;
      role: Role;
      exp: number;
    };
    if (typeof data.exp !== "number" || data.exp <= now) return null;
    if (data.role !== "admin" && data.role !== "user") return null;
    return { email: data.email, role: data.role };
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = "mr_session";
export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;
