"use client";

import Link from "next/link";
import { MILLETS } from "@/data/millets";
import { RECIPES } from "@/data";
import { getRecipesByMillet } from "@/lib/recipes";
import { REGIONS, DIETS } from "@/types/recipe";
import { useT } from "@/components/LanguageProvider";

export function HomeView() {
  const { t } = useT();
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">{t("home.eyebrow")}</p>
        <h1>{t("home.title")}</h1>
        <p className="hero-text">{t("home.text", { recipes: RECIPES.length, millets: MILLETS.length })}</p>
        <Link className="button" href="/recipes">
          {t("home.browseAll")}
        </Link>
      </section>

      <section aria-labelledby="millets-heading">
        <h2 id="millets-heading">{t("home.chooseMillet")}</h2>
        <div className="millet-grid">
          {MILLETS.map((millet) => (
            <Link key={millet.id} href={`/millets/${millet.id}`} className="millet-card">
              <h3>{t(`millet.name.${millet.id}`)}</h3>
              <p className="local-names">{millet.localNames.join(" · ")}</p>
              <p>{t(`millet.desc.${millet.id}`)}</p>
              <span className="millet-count">{t("millet.count", { n: getRecipesByMillet(millet.id).length })}</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="style-heading">
        <h2 id="style-heading">{t("home.browseByStyle")}</h2>
        <div className="style-links">
          {REGIONS.map((region) => (
            <Link key={region} href={`/recipes?region=${encodeURIComponent(region)}`} className="chip">
              {t(`region.${region}`)}
            </Link>
          ))}
          {DIETS.map((diet) => (
            <Link key={diet} href={`/recipes?diet=${encodeURIComponent(diet)}`} className="chip">
              {t(`diet.${diet}`)}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
