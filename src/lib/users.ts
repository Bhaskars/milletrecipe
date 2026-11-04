import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

export { MIN_PASSWORD_LENGTH, isValidEmail } from "@/lib/registration-rules";

const scrypt = promisify(scryptCb) as (password: string, salt: Buffer, keylen: number) => Promise<Buffer>;

export type UserStatus = "pending" | "approved" | "rejected";

export interface UserRecord {
  email: string;
  passwordHash: string;
  status: UserStatus;
  createdAt: string;
}

/** Storage for self-registered users. Implemented by Postgres in production and memory in tests. */
export interface UserStore {
  findByEmail(email: string): Promise<UserRecord | null>;
  /** Returns false if the email is already registered. */
  create(record: UserRecord): Promise<boolean>;
  setStatus(email: string, status: UserStatus): Promise<boolean>;
  list(status: UserStatus): Promise<UserRecord[]>;
}

export function normaliseEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scrypt(password, salt, 64);
  return `scrypt$${salt.toString("base64")}$${key.toString("base64")}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [scheme, saltB64, keyB64] = stored.split("$");
  if (scheme !== "scrypt" || !saltB64 || !keyB64) return false;
  const expected = Buffer.from(keyB64, "base64");
  const actual = await scrypt(password, Buffer.from(saltB64, "base64"), expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export class MemoryUserStore implements UserStore {
  private users = new Map<string, UserRecord>();

  async findByEmail(email: string) {
    return this.users.get(normaliseEmail(email)) ?? null;
  }

  async create(record: UserRecord) {
    const key = normaliseEmail(record.email);
    if (this.users.has(key)) return false;
    this.users.set(key, { ...record, email: key });
    return true;
  }

  async setStatus(email: string, status: UserStatus) {
    const user = this.users.get(normaliseEmail(email));
    if (!user) return false;
    user.status = status;
    return true;
  }

  async list(status: UserStatus) {
    return [...this.users.values()].filter((u) => u.status === status);
  }
}

type PgPool = {
  query: (text: string, values?: unknown[]) => Promise<{ rows: Record<string, unknown>[]; rowCount: number | null }>;
};

function toRecord(row: Record<string, unknown>): UserRecord {
  return {
    email: String(row.email),
    passwordHash: String(row.password_hash),
    status: row.status as UserStatus,
    createdAt: new Date(row.created_at as string | Date).toISOString(),
  };
}

/** Postgres-backed store. The table is created on first use. */
export class PostgresUserStore implements UserStore {
  private ready: Promise<void> | null = null;

  constructor(private pool: PgPool) {}

  private ensureSchema() {
    this.ready ??= this.pool
      .query(`CREATE TABLE IF NOT EXISTS app_users (
        email text PRIMARY KEY,
        password_hash text NOT NULL,
        status text NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
        created_at timestamptz NOT NULL DEFAULT now()
      )`)
      .then(() => undefined);
    return this.ready;
  }

  async findByEmail(email: string) {
    await this.ensureSchema();
    const { rows } = await this.pool.query("SELECT email, password_hash, status, created_at FROM app_users WHERE email = $1", [
      normaliseEmail(email),
    ]);
    return rows[0] ? toRecord(rows[0]) : null;
  }

  async create(record: UserRecord) {
    await this.ensureSchema();
    const { rowCount } = await this.pool.query(
      "INSERT INTO app_users (email, password_hash, status) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING",
      [normaliseEmail(record.email), record.passwordHash, record.status],
    );
    return rowCount === 1;
  }

  async setStatus(email: string, status: UserStatus) {
    await this.ensureSchema();
    const { rowCount } = await this.pool.query("UPDATE app_users SET status = $2 WHERE email = $1", [normaliseEmail(email), status]);
    return rowCount === 1;
  }

  async list(status: UserStatus) {
    await this.ensureSchema();
    const { rows } = await this.pool.query(
      "SELECT email, password_hash, status, created_at FROM app_users WHERE status = $1 ORDER BY created_at",
      [status],
    );
    return rows.map(toRecord);
  }
}

let override: UserStore | null | undefined;
let production: UserStore | null = null;

/** Tests inject an in-memory store here. Pass null to simulate "no database". */
export function setUserStoreForTesting(store: UserStore | null | undefined) {
  override = store;
}

/** Returns the registration store, or null when DATABASE_URL is not configured. */
export async function getUserStore(env: Record<string, string | undefined> = process.env): Promise<UserStore | null> {
  if (override !== undefined) return override;
  const url = env.DATABASE_URL?.trim();
  if (!url) return null;
  if (!production) {
    const { Pool } = await import("pg");
    const pool = new Pool({ connectionString: url, max: 3 });
    production = new PostgresUserStore(pool);
  }
  return production;
}
