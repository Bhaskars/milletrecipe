"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/components/LanguageProvider";
import { MIN_PASSWORD_LENGTH } from "@/lib/registration-rules";

/** Submits a sign-up request. The account stays pending until an admin approves it. */
export function RegisterForm() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 202) {
        setDone(true);
        return;
      }
      if (response.status === 409) setError(t("register.exists"));
      else if (response.status === 503) setError(t("register.unavailable"));
      else if (response.status === 400) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setError(body.error === "weak_password" ? t("register.weakPassword") : t("register.invalidEmail"));
      } else setError(t("register.failed"));
    } catch {
      setError(t("register.failed"));
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <p role="status" className="form-success">
        {t("register.success")}
      </p>
    );
  }

  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>{t("login.email")}</span>
        <input type="email" name="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>{t("login.password")}</span>
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={MIN_PASSWORD_LENGTH}
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
        {busy ? t("register.working") : t("register.submit")}
      </button>
    </form>
  );
}
