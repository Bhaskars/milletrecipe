"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher, useT } from "@/components/LanguageProvider";
import type { Role } from "@/lib/auth";

interface SessionInfo {
  email: string;
  role: Role;
}

export function SiteHeader() {
  const { t } = useT();
  const [session, setSession] = useState<SessionInfo | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/session")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active) setSession(data?.session ?? null);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.assign("/login");
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          {t("site.name")}
        </Link>
        <nav aria-label="Main" className="site-nav">
          <Link href="/recipes">{t("nav.allRecipes")}</Link>
          {session?.role === "admin" && <Link href="/admin">{t("nav.admin")}</Link>}
          {session && (
            <button type="button" className="link-button" onClick={logout}>
              {t("nav.logout")}
            </button>
          )}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
