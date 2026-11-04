import type { Recipe } from "@/types/recipe";
import type { PlateInfo } from "@/types/plate";
import type { LineContent } from "@/data/i18n-content/sorghum";
import { SORGHUM_BATCH_1 } from "@/data/extra/sorghum-batch-1";
import { SORGHUM_BATCH_2 } from "@/data/extra/sorghum-batch-2";
import { SORGHUM_BATCH_3 } from "@/data/extra/sorghum-batch-3";

/** Recipes added after the original 135, one batch file per group of recipes. */
const BATCHES = [SORGHUM_BATCH_1, SORGHUM_BATCH_2, SORGHUM_BATCH_3];

export const EXTRA_RECIPES: Recipe[] = BATCHES.flatMap((b) => b.recipes);
export const EXTRA_CONTENT: Record<string, { hi: LineContent; ta: LineContent }> = Object.assign({}, ...BATCHES.map((b) => b.content));
export const EXTRA_TRANSLATIONS: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }> =
  Object.assign({}, ...BATCHES.map((b) => b.translations));
export const EXTRA_PLATE: Record<string, PlateInfo> = Object.assign({}, ...BATCHES.map((b) => b.plate));
