import { describe, it, expect } from "vitest";
import { ingredientCategory, INGREDIENT_CATEGORIES, dishKind, DISH_KINDS } from "@/lib/ingredients";
import { RECIPES } from "@/data";

describe("ingredient categories", () => {
  it.each([
    ["2 cups jowar (sorghum) flour", "grain"],
    ["1 cup toor dal, washed", "lentil"],
    ["2 tbsp ghee or oil", "fat"],
    ["1 cup grated jaggery", "sweetener"],
    ["2 tomatoes, chopped", "vegetable"],
    ["1 tsp mustard seeds", "spice"],
    ["8 curry leaves", "herb"],
    ["1 cup full-fat milk", "dairy"],
    ["1 cup water", "liquid"],
    ["500 g chicken, bone-in", "meat"],
    ["500 g pomfret", "fish"],
    ["1/2 cup cashews", "nut"],
    ["1/2 tsp salt", "salt"],
  ])("classifies %s as %s", (text, category) => {
    expect(ingredientCategory(text)).toBe(category);
  });

  it("only uses known categories", () => {
    for (const r of RECIPES) {
      for (const i of r.ingredients) {
        expect(INGREDIENT_CATEGORIES).toContain(ingredientCategory(i));
      }
    }
  });

  it("leaves very few ingredients uncategorised", () => {
    const all = RECIPES.flatMap((r) => r.ingredients);
    const other = all.filter((i) => ingredientCategory(i) === "other");
    expect(other.length / all.length).toBeLessThan(0.15);
  });
});

describe("dish kinds", () => {
  it("picks a known kind for every recipe", () => {
    for (const r of RECIPES) {
      expect(DISH_KINDS).toContain(dishKind(r));
    }
  });

  it.each([
    ["Jolada Rotti with Ennegayi", "flatbread"],
    ["Jowar Dosa", "pancake"],
    ["Jowar Kheer", "bowl"],
    ["Jowar Gur Laddoo", "sweet"],
    ["Kambu Koozh", "drink"],
    ["Sarson ka Saag with Jowar Roti", "flatbread"],
  ])("%s is drawn as %s", (title, kind) => {
    expect(dishKind({ title, course: "Main Course" } as never)).toBe(kind);
  });
});
