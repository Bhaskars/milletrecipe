import { describe, it, expect } from "vitest";
import { DEFAULT_LANGUAGE, LANGUAGES, translate, dictionaryKeys } from "@/lib/i18n";
import { RECIPE_TRANSLATIONS } from "@/data/recipe-translations";
import { MILLETS } from "@/data/millets";
import { RECIPES } from "@/data";

describe("languages", () => {
  it("preselects English", () => {
    expect(DEFAULT_LANGUAGE).toBe("en");
  });

  it("offers English, Hindi and Tamil", () => {
    expect(LANGUAGES.map((l) => l.code)).toEqual(["en", "hi", "ta"]);
  });

  it("translates the interface into the chosen language", () => {
    expect(translate("en", "nav.allRecipes")).toBe("All recipes");
    expect(translate("hi", "nav.allRecipes")).not.toBe("All recipes");
    expect(translate("ta", "nav.allRecipes")).not.toBe("All recipes");
  });

  it("falls back to English for a missing key", () => {
    expect(translate("ta", "no.such.key")).toBe("no.such.key");
  });

  it("fills in {placeholders}", () => {
    expect(translate("en", "browser.showing", { shown: 3, total: 15 })).toBe("Showing 3 of 15 recipes");
  });

  it("has every interface string in every language", () => {
    const keys = dictionaryKeys();
    for (const lang of ["hi", "ta"] as const) {
      for (const key of keys) {
        expect(translate(lang, key), `${lang}:${key}`).not.toBe(key);
      }
    }
  });
});

describe("content translations", () => {
  it("translates every millet name into Hindi and Tamil", () => {
    for (const m of MILLETS) {
      expect(translate("hi", `millet.name.${m.id}`)).not.toBe(`millet.name.${m.id}`);
      expect(translate("ta", `millet.name.${m.id}`)).not.toBe(`millet.name.${m.id}`);
    }
  });

  it("translates every recipe title and description into Hindi and Tamil", () => {
    for (const r of RECIPES) {
      for (const lang of ["hi", "ta"] as const) {
        const t = RECIPE_TRANSLATIONS[r.id]?.[lang];
        expect(t, `${lang} translation for ${r.id}`).toBeDefined();
        expect(t!.title.length).toBeGreaterThan(2);
        expect(t!.description.length).toBeGreaterThan(20);
      }
    }
  });
});
