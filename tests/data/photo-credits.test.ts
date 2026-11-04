import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import credits from "@/data/photo-credits.json";
import { allPhotoCredits } from "@/lib/photos";
import { RECIPES } from "@/data";

const ALLOWED = /^(CC0|CC BY( \d\.\d)?|CC BY-SA( \d\.\d)?|Public domain|Unsplash License|Pexels License|Pixabay Content License)$/;

describe("photo credits", () => {
  const entries = allPhotoCredits();

  it("only refers to recipes and ingredient categories that exist", () => {
    const recipeIds = new Set(RECIPES.map((r) => r.id));
    for (const id of Object.keys(credits.dishes)) expect(recipeIds.has(id), id).toBe(true);
  });

  it.each(entries.map((e) => [e.kind, e.key, e.credit] as const))("%s %s has a complete, free licence", (_kind, _key, credit) => {
    expect(credit.title.trim()).not.toBe("");
    expect(credit.author.trim()).not.toBe("");
    expect(credit.license).toMatch(ALLOWED);
    expect(credit.license).not.toMatch(/NC|ND/);
    expect(credit.licenseUrl).toMatch(/^https:\/\//);
    expect(credit.sourceUrl).toMatch(/^https:\/\//);
  });

  it.each(entries.map((e) => [e.kind, e.key, e.credit.file] as const))("%s %s points to a file in public/images", (_kind, _key, file) => {
    expect(existsSync(path.join(process.cwd(), "public", "images", file)), file).toBe(true);
  });
});
