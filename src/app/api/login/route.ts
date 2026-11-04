import { NextResponse } from "next/server";
import {
  authenticate,
  createSessionToken,
  readAuthConfig,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth";

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

  const session = authenticate(email, password, config.accounts);
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
