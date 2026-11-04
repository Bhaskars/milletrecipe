import { describe, it, expect } from "vitest";
import { RECIPES } from "@/data";
import { MILLETS } from "@/data/millets";
import { COURSES, DIETS, DIFFICULTIES, REGIONS } from "@/types/recipe";
import { getRecipesByMillet, recipeSlug } from "@/lib/recipes";

// Words that make a dish non-vegetarian. Used to keep the Vegetarian /
// Non-Vegetarian classification honest.
const NON_VEG_WORD =
  /\b(chicken|mutton|lamb|goat|fish|prawn|prawns|shrimp|crab|egg|eggs|keema|kheema|beef|pork|bacon|meat|kodi|pomfret|mackerel|sardine|anchovy)\b/i;

describe("millet catalogue", () => {
  it("covers the nine traditional Indian millets", () => {
    expect(MILLETS.map((m) => m.id).sort()).toEqual(
      [
        "barnyard-millet",
        "browntop-millet",
        "finger-millet",
        "foxtail-millet",
        "kodo-millet",
        "little-millet",
        "pearl-millet",
        "proso-millet",
        "sorghum",
      ].sort(),
    );
  });

  it("gives every millet a name and a description", () => {
    for (const millet of MILLETS) {
      expect(millet.name.length).toBeGreaterThan(2);
      expect(millet.description.length).toBeGreaterThan(40);
    }
  });
});

describe("recipe coverage", () => {
  it("has exactly 15 recipes for every millet", () => {
    for (const millet of MILLETS) {
      const count = getRecipesByMillet(millet.id, RECIPES).length;
      expect(count, `recipes for ${millet.id}`).toBe(15);
    }
  });

  it("has 135 recipes in total (9 millets x 15)", () => {
    expect(RECIPES).toHaveLength(MILLETS.length * 15);
  });

  it("uses unique ids and unique slugs", () => {
    const ids = RECIPES.map((r) => r.id);
    const slugs = RECIPES.map((r) => recipeSlug(r));
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives each millet at least one South Indian, one North Indian and one Non-Vegetarian recipe", () => {
    for (const millet of MILLETS) {
      const recipes = getRecipesByMillet(millet.id, RECIPES);
      expect(recipes.some((r) => r.region === "South Indian"), millet.id).toBe(true);
      expect(recipes.some((r) => r.region === "North Indian"), millet.id).toBe(true);
      expect(recipes.some((r) => r.diet === "Non-Vegetarian"), millet.id).toBe(true);
    }
  });
});

describe("recipe content", () => {
  const milletIds = new Set(MILLETS.map((m) => m.id));

  it.each(RECIPES.map((r) => [r.id, r] as const))(
    "%s is complete and well-classified",
    (_id, recipe) => {
      expect(milletIds.has(recipe.milletId)).toBe(true);
      expect(REGIONS).toContain(recipe.region);
      expect(DIETS).toContain(recipe.diet);
      expect(COURSES).toContain(recipe.course);
      expect(DIFFICULTIES).toContain(recipe.difficulty);

      expect(recipe.title.length).toBeGreaterThan(3);
      expect(recipe.description.length).toBeGreaterThan(30);
      expect(Number.isInteger(recipe.servings) && recipe.servings >= 1).toBe(true);
      expect(recipe.prepTimeMinutes).toBeGreaterThanOrEqual(0);
      expect(recipe.cookTimeMinutes).toBeGreaterThan(0);

      // Every ingredient list has real quantities and is not padded with duplicates.
      expect(recipe.ingredients.length).toBeGreaterThanOrEqual(5);
      expect(new Set(recipe.ingredients).size).toBe(recipe.ingredients.length);
      for (const ingredient of recipe.ingredients) {
        expect(ingredient.trim().length).toBeGreaterThan(2);
      }

      // Instructions must be detailed enough to cook from, step by step.
      expect(recipe.steps.length).toBeGreaterThanOrEqual(5);
      for (const step of recipe.steps) {
        expect(step.length, `short step in ${recipe.id}`).toBeGreaterThan(25);
      }
    },
  );

  it.each(RECIPES.filter((r) => r.diet === "Vegetarian").map((r) => [r.id, r] as const))(
    "%s contains no meat, fish or egg ingredients",
    (_id, recipe) => {
      const text = [recipe.title, ...recipe.ingredients].join(" ");
      expect(NON_VEG_WORD.test(text), text).toBe(false);
    },
  );

  it.each(RECIPES.filter((r) => r.diet === "Non-Vegetarian").map((r) => [r.id, r] as const))(
    "%s names at least one non-vegetarian ingredient",
    (_id, recipe) => {
      const text = [recipe.title, ...recipe.ingredients].join(" ");
      expect(NON_VEG_WORD.test(text), text).toBe(true);
    },
  );
});
