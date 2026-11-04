"use client";

import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { useT } from "@/components/LanguageProvider";

export function LoginPage() {
  const { t } = useT();
  return (
    <main className="container narrow">
      <section className="login-card">
        <h1>{t("login.title")}</h1>
        <p className="hero-text">{t("login.text")}</p>
        <LoginForm />
        <p>
          {t("login.registerPrompt")} <Link href="/register">{t("login.registerLink")}</Link>
        </p>
      </section>
    </main>
  );
}
