import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { getUserStore, type UserStatus } from "@/lib/users";

export const dynamic = "force-dynamic";

const STATUSES: UserStatus[] = ["pending", "approved", "rejected"];

function requireAdmin(request: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const session = secret ? verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value, secret) : null;
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  if (session.role !== "admin") return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  return null;
}

/** Lists self-registered users by status. Admins only. */
export async function GET(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const store = await getUserStore();
  if (!store) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  const requested = request.nextUrl.searchParams.get("status") ?? "pending";
  if (!STATUSES.includes(requested as UserStatus)) {
    return NextResponse.json({ error: "invalid_status" }, { status: 400 });
  }
  const users = await store.list(requested as UserStatus);
  return NextResponse.json({
    users: users.map((u) => ({ email: u.email, status: u.status, createdAt: u.createdAt })),
  });
}

/** Approves or rejects a pending registration. Admins only. */
export async function POST(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const store = await getUserStore();
  if (!store) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  let body: { email?: unknown; action?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email : "";
  const status: UserStatus | null = body.action === "approve" ? "approved" : body.action === "reject" ? "rejected" : null;
  if (!email || !status) return NextResponse.json({ error: "invalid_request" }, { status: 400 });

  const updated = await store.setStatus(email, status);
  if (!updated) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json({ email: email.trim().toLowerCase(), status });
}
