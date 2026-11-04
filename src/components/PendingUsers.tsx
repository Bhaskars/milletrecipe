"use client";

import { useCallback, useEffect, useState } from "react";
import { useT } from "@/components/LanguageProvider";

interface PendingUser {
  email: string;
  createdAt: string;
}

/** Lists sign-up requests waiting for approval, with approve and reject buttons. */
export function PendingUsers() {
  const { t, lang } = useT();
  const [users, setUsers] = useState<PendingUser[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyEmail, setBusyEmail] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/users?status=pending", { cache: "no-store" });
      if (response.status === 503) {
        setError(t("admin.pendingUnavailable"));
        setUsers([]);
        return;
      }
      if (!response.ok) throw new Error("load failed");
      const body = (await response.json()) as { users: PendingUser[] };
      setUsers(body.users);
      setError(null);
    } catch {
      setError(t("admin.pendingFailed"));
    }
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  async function decide(email: string, action: "approve" | "reject") {
    setBusyEmail(email);
    setError(null);
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, action }),
      });
      if (!response.ok) throw new Error("update failed");
      await load();
    } catch {
      setError(t("admin.pendingFailed"));
    } finally {
      setBusyEmail(null);
    }
  }

  return (
    <section aria-labelledby="pending-heading">
      <h2 id="pending-heading">{t("admin.pendingTitle")}</h2>
      <p>{t("admin.pendingText")}</p>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      {users && users.length === 0 && !error && <p>{t("admin.pendingEmpty")}</p>}
      {users && users.length > 0 && (
        <table className="roles-table">
          <tbody>
            {users.map((u) => (
              <tr key={u.email}>
                <th scope="row">{u.email}</th>
                <td>{new Date(u.createdAt).toLocaleDateString(lang === "en" ? "en-GB" : lang)}</td>
                <td className="pending-actions">
                  <button type="button" className="button" disabled={busyEmail === u.email} onClick={() => decide(u.email, "approve")}>
                    {t("admin.approve")}
                  </button>{" "}
                  <button type="button" className="button" disabled={busyEmail === u.email} onClick={() => decide(u.email, "reject")}>
                    {t("admin.reject")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
