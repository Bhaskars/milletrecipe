import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = { title: "Admin" };

export default async function AdminPage() {
  const secret = process.env.AUTH_SECRET;
  const cookieStore = await cookies();
  const session = secret ? verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value, secret) : null;
  if (!session || session.role !== "admin") redirect("/");
  return <AdminDashboard email={session.email} />;
}
