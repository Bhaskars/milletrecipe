import { describe, it, expect } from "vitest";
import { fatPerServing } from "@/lib/fat";
import { RECIPES } from "@/data";

describe("fat estimate", () => {
  it("gives a high saturated share for ghee and coconut oil", () => {
    const ghee = fatPerServing({ servings: 1, ingredients: ["2 tbsp ghee"] });
    expect(ghee.totalG).toBeCloseTo(27.2, 0);
    expect(ghee.saturatedG / ghee.totalG).toBeGreaterThan(0.55);

    const coconut = fatPerServing({ servings: 1, ingredients: ["1 tbsp coconut oil"] });
    expect(coconut.saturatedG / coconut.totalG).toBeGreaterThan(0.8);
  });

  it("gives mostly unsaturated fat for mustard or groundnut oil", () => {
    const oil = fatPerServing({ servings: 1, ingredients: ["2 tbsp oil"] });
    expect(oil.saturatedG / oil.totalG).toBeLessThan(0.25);
  });

  it("divides by servings and ignores vegetables and water", () => {
    const one = fatPerServing({ servings: 4, ingredients: ["4 tbsp ghee", "1 onion", "2 cups water"] });
    expect(one.totalG).toBeCloseTo(13.6, 0);
  });

  it("keeps the saturated and unsaturated parts consistent for every recipe", () => {
    for (const recipe of RECIPES) {
      const fat = fatPerServing(recipe);
      expect(fat.totalG, recipe.id).toBeGreaterThanOrEqual(0);
      expect(fat.saturatedG, recipe.id).toBeGreaterThanOrEqual(0);
      expect(fat.saturatedG, recipe.id).toBeLessThanOrEqual(fat.totalG + 0.1);
    }
  });
});
