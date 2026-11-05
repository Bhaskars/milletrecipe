import { describe, it, expect } from "vitest";
import { RICE_VARIETIES } from "@/data/rice";
import { RICE_GROUPS } from "@/types/rice";
import { getRiceById, riceLoad, riceMenu } from "@/lib/rice";
import { RICE_ART } from "@/data/rice-art";

describe("rice catalogue", () => {
  it("includes the named heritage varieties", () => {
    const names = RICE_VARIETIES.map((r) => r.name);
    expect(names).toEqual(expect.arrayContaining(["Mappillai Samba", "Karuppu Kavuni", "Navara", "Seeraga Samba", "Brown Rice"]));
  });

  it("gives every variety a unique id and the required content", () => {
    const ids = RICE_VARIETIES.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const rice of RICE_VARIETIES) {
      expect(rice.name.length, rice.id).toBeGreaterThan(2);
      expect(RICE_GROUPS, rice.id).toContain(rice.group);
      expect(rice.region.length, rice.id).toBeGreaterThan(3);
      expect(rice.appearance.length, rice.id).toBeGreaterThan(10);
      expect(rice.description.length, rice.id).toBeGreaterThan(40);
      expect(rice.traditionalUses.length, rice.id).toBeGreaterThan(0);
      expect(rice.traditionalBenefits.length, rice.id).toBeGreaterThan(0);
      expect(rice.nutritionNote.length, rice.id).toBeGreaterThan(20);
      expect(rice.cookingNote.length, rice.id).toBeGreaterThan(20);
    }
  });

  it("finds a variety by id and groups them in menu order", () => {
    expect(getRiceById("karuppu-kavuni")?.name).toBe("Karuppu Kavuni");
    expect(getRiceById("nope")).toBeUndefined();
    const menu = riceMenu();
    expect(menu.map((g) => g.group)).toEqual(RICE_GROUPS.filter((g) => menu.some((m) => m.group === g)));
    expect(menu.reduce((n, g) => n + g.varieties.length, 0)).toBe(RICE_VARIETIES.length);
  });

  it("writes benefits as traditional claims, not as guaranteed cures", () => {
    const banned = /\b(cures?|treats? diabetes|guaranteed|prevents? cancer|heals?)\b/i;
    for (const rice of RICE_VARIETIES) {
      for (const benefit of rice.traditionalBenefits) {
        expect(banned.test(benefit), `${rice.id}: ${benefit}`).toBe(false);
      }
    }
  });

  it("gives every variety plausible per-100 g nutrition and a derived glycemic load", () => {
    for (const rice of RICE_VARIETIES) {
      const n = rice.nutrition;
      expect(n.kcal, rice.id).toBeGreaterThanOrEqual(80);
      expect(n.kcal, rice.id).toBeLessThanOrEqual(180);
      expect(n.carbsG, rice.id).toBeGreaterThan(15);
      expect(n.carbsG, rice.id).toBeLessThan(35);
      expect(n.fibreG, rice.id).toBeGreaterThan(0);
      expect(n.fibreG, rice.id).toBeLessThan(10);
      expect(n.gi, rice.id).toBeGreaterThanOrEqual(30);
      expect(n.gi, rice.id).toBeLessThanOrEqual(100);
      expect(n.minerals.length, rice.id).toBeGreaterThan(0);
      const load = riceLoad(rice);
      expect(load.glycemicLoad, rice.id).toBeCloseTo((n.gi * n.carbsG) / 100, 0);
      expect(load.sugarTsp, rice.id).toBeCloseTo(load.glycemicLoad / 4, 0);
    }
  });

  it("has an identification illustration spec for every variety", () => {
    for (const rice of RICE_VARIETIES) {
      const art = RICE_ART[rice.id];
      expect(art, rice.id).toBeDefined();
      expect(art.fill, rice.id).toMatch(/^#[0-9a-f]{6}$/i);
      expect(art.edge, rice.id).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });
});
