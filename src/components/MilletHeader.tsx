"use client";

import { useT } from "@/components/LanguageProvider";

export function MilletHeader({
  milletId,
  scientificName,
  localNames,
}: {
  milletId: string;
  scientificName: string;
  localNames: string;
}) {
  const { t } = useT();
  const name = t(`millet.name.${milletId}`);
  return (
    <header className="page-header">
      <p className="eyebrow">{scientificName}</p>
      <h1>{name}</h1>
      <p className="local-names">{localNames}</p>
      <p className="hero-text">{t(`millet.desc.${milletId}`)}</p>
    </header>
  );
}
