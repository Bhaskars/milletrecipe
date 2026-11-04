"use client";

import { useT } from "@/components/LanguageProvider";

export function AllRecipesHeader({ count }: { count: number }) {
  const { t } = useT();
  return (
    <header className="page-header">
      <p className="eyebrow">{t("all.eyebrow", { n: count })}</p>
      <h1>{t("all.title")}</h1>
      <p className="hero-text">{t("all.text")}</p>
    </header>
  );
}
