import type { Metadata } from "next";
import { LoginPage } from "@/components/LoginPage";

export const metadata: Metadata = { title: "Log in" };

export default function Page() {
  return <LoginPage />;
}
