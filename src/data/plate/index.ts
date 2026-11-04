import type { PlateInfo } from "@/types/plate";
import { EXTRA_PLATE } from "@/data/extra";
import { SORGHUM_PLATE } from "@/data/plate/sorghum";
import { PEARL_MILLET_PLATE } from "@/data/plate/pearl-millet";
import { FINGER_MILLET_PLATE } from "@/data/plate/finger-millet";
import { FOXTAIL_MILLET_PLATE } from "@/data/plate/foxtail-millet";
import { LITTLE_MILLET_PLATE } from "@/data/plate/little-millet";
import { KODO_MILLET_PLATE } from "@/data/plate/kodo-millet";
import { BARNYARD_MILLET_PLATE } from "@/data/plate/barnyard-millet";
import { PROSO_MILLET_PLATE } from "@/data/plate/proso-millet";
import { BROWNTOP_MILLET_PLATE } from "@/data/plate/browntop-millet";

/** Nutrition estimates and full-plate pairings for every recipe, keyed by recipe id. */
export const PLATE_INFO: Record<string, PlateInfo> = {
  ...SORGHUM_PLATE,
  ...PEARL_MILLET_PLATE,
  ...FINGER_MILLET_PLATE,
  ...FOXTAIL_MILLET_PLATE,
  ...LITTLE_MILLET_PLATE,
  ...KODO_MILLET_PLATE,
  ...BARNYARD_MILLET_PLATE,
  ...PROSO_MILLET_PLATE,
  ...BROWNTOP_MILLET_PLATE,
  ...EXTRA_PLATE,
};

export function plateInfoFor(recipeId: string): PlateInfo | undefined {
  return PLATE_INFO[recipeId];
}
