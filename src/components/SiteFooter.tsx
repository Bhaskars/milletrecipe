"use client";

import { useT } from "@/components/LanguageProvider";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="site-footer">
      <div className="container">{t("footer.tagline")}</div>
    </footer>
  );
}
