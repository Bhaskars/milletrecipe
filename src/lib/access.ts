import type { Session } from "@/lib/auth";

export type AccessDecision = "allow" | "login" | "forbidden";

const PUBLIC_PATHS = ["/login", "/register", "/api/login", "/api/logout", "/api/register"];

/** Decides what a request may do, given the signed-in session (or null). */
export function decideAccess(pathname: string, session: Session | null): AccessDecision {
  if (PUBLIC_PATHS.some((p) => pathname === p)) return "allow";
  if (!session) return "login";
  if (pathname === "/admin" || pathname.startsWith("/admin/") || pathname.startsWith("/api/admin/")) {
    return session.role === "admin" ? "allow" : "forbidden";
  }
  return "allow";
}
