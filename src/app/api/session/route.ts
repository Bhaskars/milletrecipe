import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

/** Lets the page know who is signed in. The cookie itself is httpOnly and never read by scripts. */
export async function GET(request: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const session = secret ? verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value, secret) : null;
  if (!session) return NextResponse.json({ session: null }, { status: 401 });
  return NextResponse.json({ session });
}
