import { describe, it, expect } from "vitest";
import { RECIPES } from "@/data";
import { PLATE_INFO, plateInfoFor } from "@/data/plate";
import { giBand } from "@/types/plate";

describe("nutrition and full-plate data", () => {
  it("has an entry for every recipe and nothing for unknown ids", () => {
    for (const r of RECIPES) expect(plateInfoFor(r.id), r.id).toBeDefined();
    expect(Object.keys(PLATE_INFO)).toHaveLength(RECIPES.length);
  });

  it.each(RECIPES.map((r) => [r.id, r] as const))("%s has plausible values and a complete plate", (id) => {
    const info = plateInfoFor(id)!;
    expect(info.kcal).toBeGreaterThanOrEqual(100);
    expect(info.kcal).toBeLessThanOrEqual(800);
    expect(info.fibreG).toBeGreaterThanOrEqual(1);
    expect(info.fibreG).toBeLessThanOrEqual(20);
    expect(info.gi).toBeGreaterThanOrEqual(30);
    expect(info.gi).toBeLessThanOrEqual(100);
    expect(info.minerals.length).toBeGreaterThanOrEqual(2);
    expect(info.raw.name.trim()).not.toBe("");
    expect(info.raw.how.trim()).not.toBe("");
    expect(info.sides).toHaveLength(2);
    for (const side of info.sides) {
      expect(side.name.trim()).not.toBe("");
      expect(side.how.trim()).not.toBe("");
    }
  });

  it("classifies glycemic index into low, medium and high bands", () => {
    expect(giBand(55)).toBe("low");
    expect(giBand(56)).toBe("medium");
    expect(giBand(69)).toBe("medium");
    expect(giBand(70)).toBe("high");
  });
});
