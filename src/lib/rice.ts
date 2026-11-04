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
