import { describe, it, expect } from "vitest";
import { glycemicLoad, sugarTeaspoons, vegetableEstimate, plateTotals, recipeRow } from "@/lib/nutrition";
import { plateInfoFor } from "@/data/plate";
import { RECIPES } from "@/data";

describe("sugar equivalent", () => {
  it("matches the reference table: GL 5.7 is 1.4 tsp, GL 4.0 is 1.0 tsp", () => {
    expect(sugarTeaspoons(5.7)).toBe(1.4);
    expect(sugarTeaspoons(4.0)).toBe(1.0);
  });

  it("computes glycemic load as GI × carbs ÷ 100", () => {
    expect(glycemicLoad(62, 9.2)).toBe(5.7);
    expect(glycemicLoad(50, 8)).toBe(4);
  });
});

describe("plate totals", () => {
  it("adds the recipe and its vegetables to give the full-plate calories", () => {
    const info = plateInfoFor(RECIPES[0].id)!;
    const totals = plateTotals(info);
    const expected = info.kcal + vegetableEstimate(info.raw).kcal + info.sides.reduce((s, d) => s + vegetableEstimate(d).kcal, 0);
    expect(totals.kcal).toBe(expected);
    expect(totals.kcal).toBeGreaterThan(info.kcal);
  });

  it("gives every recipe a sugar equivalent consistent with its glycemic load", () => {
    for (const r of RECIPES) {
      const row = recipeRow(plateInfoFor(r.id)!);
      expect(Math.abs(row.sugarTsp - row.glycemicLoad / 4)).toBeLessThanOrEqual(0.05 + 1e-9);
    }
  });
});
