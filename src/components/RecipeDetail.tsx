"use client";

import Link from "next/link";
import type { Recipe } from "@/types/recipe";
import { getMilletById } from "@/lib/recipes";
import { localizeRecipe } from "@/lib/content";
import { dishKind, ingredientCategory } from "@/lib/ingredients";
import { useT } from "@/components/LanguageProvider";
import { DishImage } from "@/components/DishImage";
import { IngredientIcon } from "@/components/IngredientIcon";

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const { t, lang } = useT();
  const text = localizeRecipe(recipe, lang);
  const millet = getMilletById(recipe.milletId);
  const milletName = millet ? t(`millet.name.${millet.id}`) : t("detail.millet");

  return (
    <article className="recipe-detail">
      {millet && (
        <p className="back-link">
          <Link href={`/millets/${millet.id}`}>{t("detail.back", { name: milletName })}</Link>
        </p>
      )}

      <p className="tags">
        <span className="tag tag-region">{t(`region.${recipe.region}`)}</span>
        <span className="tag tag-diet">{t(`diet.${recipe.diet}`)}</span>
        <span className="tag tag-course">{t(`course.${recipe.course}`)}</span>
      </p>

      <h1>{text.title}</h1>
      <p className="lead">{text.description}</p>

      <section className="final-dish" aria-label={t("detail.finalDish")}>
        <DishImage kind={dishKind(recipe)} title={text.title} milletId={recipe.milletId} />
      </section>

      <dl className="facts">
        <div>
          <dt>{t("detail.millet")}</dt>
          <dd>{milletName}</dd>
        </div>
        <div>
          <dt>{t("detail.prep")}</dt>
          <dd>{recipe.prepTimeMinutes} min</dd>
        </div>
        <div>
          <dt>{t("detail.cook")}</dt>
          <dd>{recipe.cookTimeMinutes} min</dd>
        </div>
        <div>
          <dt>{t("detail.serves")}</dt>
          <dd>{recipe.servings}</dd>
        </div>
        <div>
          <dt>{t("detail.level")}</dt>
          <dd>{t(`difficulty.${recipe.difficulty}`)}</dd>
        </div>
      </dl>

      <section className="detail-section" aria-labelledby="ingredients-heading">
        <h2 id="ingredients-heading">{t("detail.ingredients")}</h2>
        <ul className="ingredients" aria-label={t("detail.ingredients")}>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>
              <IngredientIcon category={ingredientCategory(ingredient)} />
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-section" aria-labelledby="instructions-heading">
        <h2 id="instructions-heading">{t("detail.instructions")}</h2>
        <ol className="steps" aria-label={t("detail.instructions")}>
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
