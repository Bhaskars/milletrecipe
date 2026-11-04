import { NextResponse, type NextRequest } from "next/server";
import { decideAccess } from "@/lib/access";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

/** Every page requires a signed-in session; /admin requires the admin role. */
export function proxy(request: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const session = secret ? verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value, secret) : null;
  const { pathname } = request.nextUrl;

  const decision = decideAccess(pathname, session);
  if (decision === "login") {
    const url = new URL("/login", request.url);
    if (pathname !== "/") url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  if (decision === "forbidden") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
