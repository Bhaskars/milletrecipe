import { describe, it, expect } from "vitest";
import { generateStaticParams as milletParams } from "@/app/(browse)/millets/[milletId]/page";
import { generateStaticParams as recipeParams } from "@/app/(browse)/recipes/[slug]/page";
import { MILLETS } from "@/data/millets";
import { RECIPES } from "@/data";
import { recipeSlug } from "@/lib/recipes";

describe("static route generation", () => {
  it("pre-renders one millet page per millet", () => {
    const params = milletParams();
    expect(params).toHaveLength(MILLETS.length);
    expect(params.map((p) => p.milletId)).toContain("pearl-millet");
  });

  it("pre-renders one recipe page per recipe, keyed by slug", () => {
    const params = recipeParams();
    expect(params).toHaveLength(RECIPES.length);
    expect(params.map((p) => p.slug)).toContain(recipeSlug(RECIPES[0]));
  });
});
