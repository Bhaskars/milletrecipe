import { RECIPE_TRANSLATIONS } from "@/data/recipe-translations";
import type { Lang } from "@/lib/i18n";
import type { Recipe } from "@/types/recipe";

/** Returns the recipe's title and description in the chosen language (English when none exists). */
export function localizeRecipe(recipe: Recipe, lang: Lang): { title: string; description: string } {
  if (lang === "en") return { title: recipe.title, description: recipe.description };
  const text = RECIPE_TRANSLATIONS[recipe.id]?.[lang];
  return text ?? { title: recipe.title, description: recipe.description };
}
