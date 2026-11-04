import { describe, it, expect } from "vitest";
import { RECIPES } from "@/data";
import { MILLETS } from "@/data/millets";
import { RECIPE_CONTENT } from "@/data/recipe-content";
import { localizeRecipe } from "@/lib/content";
import { translate } from "@/lib/i18n";

const NON_ASCII = /[^\x00-\x7F]/;

describe("full recipe translations", () => {
  it.each(RECIPES.map((r) => [r.id, r] as const))("%s has Hindi and Tamil ingredients and steps", (_id, r) => {
    for (const lang of ["hi", "ta"] as const) {
      const t = RECIPE_CONTENT[r.id]?.[lang];
      expect(t?.ingredients, `${lang} ingredients`).toHaveLength(r.ingredients.length);
      expect(t?.steps, `${lang} steps`).toHaveLength(r.steps.length);
      for (const line of [...t!.ingredients, ...t!.steps]) {
        expect(line.trim().length, `${lang} empty line in ${r.id}`).toBeGreaterThan(3);
        expect(NON_ASCII.test(line), `${lang} line not translated in ${r.id}: ${line}`).toBe(true);
      }
    }
  });

  it("returns the translated ingredients and steps for Tamil", () => {
    const r = RECIPES[0];
    const local = localizeRecipe(r, "ta");
    expect(local.ingredients).toEqual(RECIPE_CONTENT[r.id].ta.ingredients);
    expect(local.steps).toEqual(RECIPE_CONTENT[r.id].ta.steps);
  });

  it("keeps the English source for English", () => {
    const r = RECIPES[0];
    const local = localizeRecipe(r, "en");
    expect(local.ingredients).toEqual(r.ingredients);
    expect(local.steps).toEqual(r.steps);
  });
});

describe("remaining interface text", () => {
  it("translates minute units and millet descriptions", () => {
    expect(translate("ta", "unit.minutes", { n: 5 })).toBe("5 நிமிடம்");
    for (const m of MILLETS) {
      expect(translate("hi", `millet.desc.${m.id}`)).not.toBe(`millet.desc.${m.id}`);
      expect(translate("ta", `millet.desc.${m.id}`)).not.toBe(`millet.desc.${m.id}`);
    }
  });
});
