import { NextResponse } from "next/server";
import {
  authenticate,
  createSessionToken,
  readAuthConfig,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  type Session,
} from "@/lib/auth";
import { getUserStore, verifyPassword } from "@/lib/users";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";

  let config;
  try {
    config = readAuthConfig();
  } catch {
    return NextResponse.json({ error: "Login is not configured." }, { status: 500 });
  }

  let session: Session | null = authenticate(email, password, config.accounts);
  if (!session) {
    // Self-registered users can sign in only once an admin has approved them.
    const store = await getUserStore();
    const user = store ? await store.findByEmail(email) : null;
    if (store && user && (await verifyPassword(password, user.passwordHash))) {
      if (user.status === "pending") {
        return NextResponse.json({ error: "pending" }, { status: 403 });
      }
      if (user.status === "approved") session = { email: user.email, role: "user" };
    }
  }
  if (!session) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ email: session.email, role: session.role });
  response.cookies.set(SESSION_COOKIE, createSessionToken(session, config.secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
