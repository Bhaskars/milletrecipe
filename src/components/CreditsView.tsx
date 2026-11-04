"use client";

import { useT } from "@/components/LanguageProvider";
import { allPhotoCredits, type PhotoCredit } from "@/lib/photos";
import { RECIPES } from "@/data";
import { INGREDIENT_CATEGORIES } from "@/lib/ingredients";

/** Attribution page: lists the source, author and licence of every photo on the site. */
export function CreditsView() {
  const { t } = useT();
  const credits = allPhotoCredits();
  const dishes = credits.filter((c) => c.kind === "dish");
  const ingredients = credits.filter((c) => c.kind === "ingredient");

  const dishName = (id: string) => RECIPES.find((r) => r.id === id)?.title ?? id;
  const ingredientName = (category: string) =>
    INGREDIENT_CATEGORIES.includes(category as (typeof INGREDIENT_CATEGORIES)[number])
      ? t(`category.${category}`)
      : category;

  return (
    <main className="container narrow">
      <h1>{t("credits.title")}</h1>
      <p>{t("credits.intro")}</p>
      {credits.length === 0 ? (
        <p>{t("credits.none")}</p>
      ) : (
        <>
          {dishes.length > 0 && (
            <section>
              <h2>{t("credits.dishes")}</h2>
              <ul className="credits-list">
                {dishes.map(({ key, credit }) => (
                  <li key={key}>
                    <strong>{dishName(key)}</strong>
                    <CreditLine credit={credit} />
                  </li>
                ))}
              </ul>
            </section>
          )}
          {ingredients.length > 0 && (
            <section>
              <h2>{t("credits.ingredients")}</h2>
              <ul className="credits-list">
                {ingredients.map(({ key, credit }) => (
                  <li key={key}>
                    <strong>{ingredientName(key)}</strong>
                    <CreditLine credit={credit} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </main>
  );
}

function CreditLine({ credit }: { credit: PhotoCredit }) {
  const { t } = useT();
  return (
    <div className="credit-detail">
      <div>{credit.title}</div>
      <div>
        {t("credits.author")}: {credit.author} · {t("credits.license")}:{" "}
        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
          {credit.license}
        </a>
      </div>
      <div>
        {t("credits.source")}:{" "}
        <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">
          {credit.sourceUrl}
        </a>
      </div>
    </div>
  );
}
