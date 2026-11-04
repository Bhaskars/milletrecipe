"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="site-footer">
      <div className="container">
        <div>{t("footer.tagline")}</div>
        <div>
          <Link href="/credits">{t("footer.credits")}</Link>
        </div>
      </div>
    </footer>
  );
}
