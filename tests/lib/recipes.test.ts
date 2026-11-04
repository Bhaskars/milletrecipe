import { describe, it, expect } from "vitest";
import { RECIPES } from "@/data";
import {
  filterRecipes,
  findRecipeBySlug,
  getMilletById,
  getRecipesByMillet,
  recipeSlug,
  slugify,
} from "@/lib/recipes";
import type { Recipe } from "@/types/recipe";

describe("slugify", () => {
  it("lowercases, strips punctuation and joins words with hyphens", () => {
    expect(slugify("Ragi Mudde (Balls)!")).toBe("ragi-mudde-balls");
  });

  it("collapses repeated separators and trims the ends", () => {
    expect(slugify("  Foxtail   &  Rice -- Pulao ")).toBe("foxtail-rice-pulao");
  });
});

describe("getMilletById", () => {
  it("returns the millet for a known id", () => {
    expect(getMilletById("finger-millet")?.name).toBe("Finger Millet");
  });

  it("returns undefined for an unknown id", () => {
    expect(getMilletById("rice")).toBeUndefined();
  });
});

describe("getRecipesByMillet", () => {
  it("returns only recipes that belong to the requested millet", () => {
    const recipes = getRecipesByMillet("pearl-millet", RECIPES);
    expect(recipes.length).toBe(15);
    expect(recipes.every((r) => r.milletId === "pearl-millet")).toBe(true);
  });

  it("returns an empty list for an unknown millet", () => {
    expect(getRecipesByMillet("unknown", RECIPES)).toEqual([]);
  });
});

describe("filterRecipes", () => {
  const sample: Recipe[] = [
    { ...RECIPES[0], id: "a", region: "South Indian", diet: "Vegetarian", course: "Breakfast" },
    { ...RECIPES[0], id: "b", region: "North Indian", diet: "Vegetarian", course: "Main Course" },
    { ...RECIPES[0], id: "c", region: "South Indian", diet: "Non-Vegetarian", course: "Main Course" },
  ];

  it("returns everything when no criteria are given", () => {
    expect(filterRecipes(sample, {})).toHaveLength(3);
  });

  it("filters by region", () => {
    expect(filterRecipes(sample, { region: "South Indian" }).map((r) => r.id)).toEqual(["a", "c"]);
  });

  it("filters by diet", () => {
    expect(filterRecipes(sample, { diet: "Vegetarian" }).map((r) => r.id)).toEqual(["a", "b"]);
  });

  it("combines region, diet and course criteria", () => {
    expect(
      filterRecipes(sample, { region: "South Indian", diet: "Vegetarian", course: "Breakfast" }).map(
        (r) => r.id,
      ),
    ).toEqual(["a"]);
  });

  it("treats an undefined criterion as no filter", () => {
    expect(filterRecipes(sample, { region: undefined, diet: undefined })).toHaveLength(3);
  });
});

describe("recipe slugs", () => {
  it("builds a slug from the millet id and the title", () => {
    const recipe = RECIPES[0];
    expect(recipeSlug(recipe)).toBe(`${recipe.milletId}-${slugify(recipe.title)}`);
  });

  it("finds a recipe by its slug", () => {
    const recipe = RECIPES[7];
    expect(findRecipeBySlug(recipeSlug(recipe))).toEqual(recipe);
  });

  it("returns undefined for an unknown slug", () => {
    expect(findRecipeBySlug("no-such-recipe")).toBeUndefined();
  });
});
