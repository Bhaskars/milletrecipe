"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/components/LanguageProvider";

/** Only same-site relative paths are allowed as a post-login destination. */
export function safeNextPath(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export function LoginForm() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const next = safeNextPath(new URLSearchParams(window.location.search).get("next"));
        window.location.assign(next);
        return;
      }
      if (response.status === 403) setError(t("login.pending"));
      else if (response.status === 401) setError(t("login.error"));
      else if (response.status === 500) setError(t("login.notConfigured"));
      else setError(t("login.failed"));
    } catch {
      setError(t("login.failed"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>{t("login.email")}</span>
        <input
          type="email"
          name="email"
          autoComplete="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>{t("login.password")}</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <button type="submit" className="button" disabled={busy}>
        {busy ? t("login.working") : t("login.submit")}
      </button>
    </form>
  );
}
