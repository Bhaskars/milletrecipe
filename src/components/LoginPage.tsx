"use client";

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
      </section>
    </main>
  );
}
