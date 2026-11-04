"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";
import { DISCLAIMER_SHORT } from "@/data/disclaimer";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="site-footer">
      <div className="container">
        <div>{t("footer.tagline")}</div>
        <div className="footer-disclaimer">{DISCLAIMER_SHORT}</div>
        <div>
          <Link href="/disclaimer">Disclaimer</Link> · <Link href="/credits">{t("footer.credits")}</Link>
        </div>
      </div>
    </footer>
  );
}
