import { NextResponse } from "next/server";
import { readAuthConfig } from "@/lib/auth";
import { getUserStore, hashPassword, normaliseEmail } from "@/lib/users";
import { isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/registration-rules";

export const dynamic = "force-dynamic";

/** Creates a pending account. The user cannot sign in until an admin approves it. */
export async function POST(request: Request) {
  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json({ error: "weak_password" }, { status: 400 });
  }

  const store = await getUserStore();
  if (!store) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const wanted = normaliseEmail(email);
  try {
    const config = readAuthConfig();
    if (config.accounts.some((a) => normaliseEmail(a.email) === wanted)) {
      return NextResponse.json({ error: "exists" }, { status: 409 });
    }
  } catch {
    // Login is not configured; registration can still proceed.
  }

  const created = await store.create({
    email: wanted,
    passwordHash: await hashPassword(password),
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  if (!created) {
    return NextResponse.json({ error: "exists" }, { status: 409 });
  }
  return NextResponse.json({ status: "pending" }, { status: 202 });
}
