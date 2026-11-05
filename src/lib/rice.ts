import { glycemicLoad, sugarTeaspoons } from "@/lib/nutrition";
import { RICE_VARIETIES } from "@/data/rice";
import { RICE_GROUPS, type RiceGroup, type RiceVariety } from "@/types/rice";

export function getRiceById(id: string): RiceVariety | undefined {
  return RICE_VARIETIES.find((r) => r.id === id);
}

/** Varieties in the given group, in catalogue order. */
export function riceByGroup(group: RiceGroup): RiceVariety[] {
  return RICE_VARIETIES.filter((r) => r.group === group);
}

/** Groups in display order, each with its varieties. Empty groups are left out. */
export function riceMenu(): { group: RiceGroup; varieties: RiceVariety[] }[] {
  return RICE_GROUPS.map((group) => ({ group, varieties: riceByGroup(group) })).filter((g) => g.varieties.length > 0);
}

/** Glycemic load and sugar equivalent for 100 g of cooked rice, from its GI and carbohydrate. */
export function riceLoad(rice: RiceVariety): { glycemicLoad: number; sugarTsp: number } {
  const gl = glycemicLoad(rice.nutrition.gi, rice.nutrition.carbsG);
  return { glycemicLoad: gl, sugarTsp: sugarTeaspoons(gl) };
}
