import { MILLETS } from "@/data/millets";
import { RECIPES as ALL_RECIPES } from "@/data";
import type { Millet, MilletId, Recipe, RecipeFilters } from "@/types/recipe";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function recipeSlug(recipe: Pick<Recipe, "milletId" | "title">): string {
  return `${recipe.milletId}-${slugify(recipe.title)}`;
}

export function getMilletById(id: string): Millet | undefined {
  return MILLETS.find((m) => m.id === id);
}

export function getRecipesByMillet(milletId: MilletId | string, recipes: Recipe[] = ALL_RECIPES): Recipe[] {
  return recipes.filter((r) => r.milletId === milletId);
}

export function filterRecipes(recipes: Recipe[], filters: RecipeFilters): Recipe[] {
  return recipes.filter(
    (r) =>
      (filters.region === undefined || r.region === filters.region) &&
      (filters.diet === undefined || r.diet === filters.diet) &&
      (filters.course === undefined || r.course === filters.course),
  );
}

export function findRecipeBySlug(slug: string, recipes: Recipe[] = ALL_RECIPES): Recipe | undefined {
  return recipes.find((r) => recipeSlug(r) === slug);
}
