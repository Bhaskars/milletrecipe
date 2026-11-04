"use client";

import Link from "next/link";
import type { Recipe } from "@/types/recipe";
import { recipeSlug } from "@/lib/recipes";
import { localizeRecipe } from "@/lib/content";
import { dishKind } from "@/lib/ingredients";
import { useT } from "@/components/LanguageProvider";
import { DishImage } from "@/components/DishImage";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t, lang } = useT();
  const text = localizeRecipe(recipe, lang);
  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <article className="recipe-card" data-diet={recipe.diet === "Vegetarian" ? "veg" : "non-veg"}>
      <DishImage kind={dishKind(recipe)} title={text.title} milletId={recipe.milletId} recipeId={recipe.id} />
      <p className="tags">
        <span className="tag tag-region">{t(`region.${recipe.region}`)}</span>
        <span className="tag tag-diet">{t(`diet.${recipe.diet}`)}</span>
      </p>
      <h3 className="recipe-card-title">
        <Link href={`/recipes/${recipeSlug(recipe)}`}>{text.title}</Link>
      </h3>
      <p className="recipe-card-description">{text.description}</p>
      <p className="meta">
        {t("card.meta", {
          minutes: totalMinutes,
          difficulty: t(`difficulty.${recipe.difficulty}`),
          servings: recipe.servings,
        })}
      </p>
    </article>
  );
}
