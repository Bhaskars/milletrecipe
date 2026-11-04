import { describe, it, expect } from "vitest";
import { RICE_VARIETIES } from "@/data/rice";
import { RICE_GROUPS } from "@/types/rice";
import { getRiceById, riceMenu } from "@/lib/rice";

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
});
