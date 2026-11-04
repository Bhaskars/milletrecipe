"use client";

import Link from "next/link";
import { RegisterForm } from "@/components/RegisterForm";
import { useT } from "@/components/LanguageProvider";

export function RegisterPage() {
  const { t } = useT();
  return (
    <main className="container narrow">
      <section className="login-card">
        <h1>{t("register.title")}</h1>
        <p className="hero-text">{t("register.text")}</p>
        <RegisterForm />
        <p>
          <Link href="/login">{t("register.loginLink")}</Link>
        </p>
      </section>
    </main>
  );
}
