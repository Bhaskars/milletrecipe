import { RECIPE_TRANSLATIONS } from "@/data/recipe-translations";
import { RECIPE_CONTENT } from "@/data/recipe-content";
import type { Lang } from "@/lib/i18n";
import type { Recipe } from "@/types/recipe";

export interface LocalRecipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

/** Returns everything a visitor reads for a recipe, in the chosen language (English when none exists). */
export function localizeRecipe(recipe: Recipe, lang: Lang): LocalRecipe {
  const english: LocalRecipe = {
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
  };
  if (lang === "en") return english;
  const text = RECIPE_TRANSLATIONS[recipe.id]?.[lang];
  const content = RECIPE_CONTENT[recipe.id]?.[lang];
  return {
    title: text?.title ?? english.title,
    description: text?.description ?? english.description,
    ingredients: content?.ingredients ?? english.ingredients,
    steps: content?.steps ?? english.steps,
  };
}
