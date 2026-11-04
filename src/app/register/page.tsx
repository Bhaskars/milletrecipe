import type { Metadata } from "next";
import { RegisterPage } from "@/components/RegisterPage";

export const metadata: Metadata = { title: "Request an account" };

export default function Page() {
  return <RegisterPage />;
}
