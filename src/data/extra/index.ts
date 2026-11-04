import type { Recipe } from "@/types/recipe";
import type { PlateInfo } from "@/types/plate";
import type { LineContent } from "@/data/i18n-content/sorghum";
import { SORGHUM_BATCH_1 } from "@/data/extra/sorghum-batch-1";
import { SORGHUM_BATCH_2 } from "@/data/extra/sorghum-batch-2";
import { SORGHUM_BATCH_3 } from "@/data/extra/sorghum-batch-3";
import { SORGHUM_BATCH_4 } from "@/data/extra/sorghum-batch-4";
import { SORGHUM_BATCH_5 } from "@/data/extra/sorghum-batch-5";
import { SORGHUM_BATCH_6 } from "@/data/extra/sorghum-batch-6";
import { SORGHUM_BATCH_7 } from "@/data/extra/sorghum-batch-7";
import { PEARL_MILLET_BATCH_1 } from "@/data/extra/pearl-millet-batch-1";
import { PEARL_MILLET_BATCH_2 } from "@/data/extra/pearl-millet-batch-2";
import { PEARL_MILLET_BATCH_3 } from "@/data/extra/pearl-millet-batch-3";
import { PEARL_MILLET_BATCH_4 } from "@/data/extra/pearl-millet-batch-4";
import { FINGER_MILLET_BATCH_1 } from "@/data/extra/finger-millet-batch-1";
import { FINGER_MILLET_BATCH_2 } from "@/data/extra/finger-millet-batch-2";
import { FINGER_MILLET_BATCH_3 } from "@/data/extra/finger-millet-batch-3";
import { FINGER_MILLET_BATCH_4 } from "@/data/extra/finger-millet-batch-4";
import { FOXTAIL_MILLET_BATCH_1 } from "@/data/extra/foxtail-millet-batch-1";
import { FOXTAIL_MILLET_BATCH_2 } from "@/data/extra/foxtail-millet-batch-2";
import { FOXTAIL_MILLET_BATCH_3 } from "@/data/extra/foxtail-millet-batch-3";
import { FOXTAIL_MILLET_BATCH_4 } from "@/data/extra/foxtail-millet-batch-4";
import { LITTLE_MILLET_BATCH_1 } from "@/data/extra/little-millet-batch-1";
import { LITTLE_MILLET_BATCH_2 } from "@/data/extra/little-millet-batch-2";
import { LITTLE_MILLET_BATCH_3 } from "@/data/extra/little-millet-batch-3";
import { LITTLE_MILLET_BATCH_4 } from "@/data/extra/little-millet-batch-4";
import { KODO_MILLET_BATCH_1 } from "@/data/extra/kodo-millet-batch-1";
import { KODO_MILLET_BATCH_2 } from "@/data/extra/kodo-millet-batch-2";
import { KODO_MILLET_BATCH_3 } from "@/data/extra/kodo-millet-batch-3";
import { KODO_MILLET_BATCH_4 } from "@/data/extra/kodo-millet-batch-4";
import { BARNYARD_MILLET_BATCH_1 } from "@/data/extra/barnyard-millet-batch-1";
import { BARNYARD_MILLET_BATCH_2 } from "@/data/extra/barnyard-millet-batch-2";
import { BARNYARD_MILLET_BATCH_3 } from "@/data/extra/barnyard-millet-batch-3";
import { BARNYARD_MILLET_BATCH_4 } from "@/data/extra/barnyard-millet-batch-4";
import { PROSO_MILLET_BATCH_1 } from "@/data/extra/proso-millet-batch-1";
import { PROSO_MILLET_BATCH_2 } from "@/data/extra/proso-millet-batch-2";
import { PROSO_MILLET_BATCH_3 } from "@/data/extra/proso-millet-batch-3";
import { PROSO_MILLET_BATCH_4 } from "@/data/extra/proso-millet-batch-4";
import { BROWNTOP_MILLET_BATCH_1 } from "@/data/extra/browntop-millet-batch-1";
import { BROWNTOP_MILLET_BATCH_2 } from "@/data/extra/browntop-millet-batch-2";
import { BROWNTOP_MILLET_BATCH_3 } from "@/data/extra/browntop-millet-batch-3";
import { BROWNTOP_MILLET_BATCH_4 } from "@/data/extra/browntop-millet-batch-4";

/** Recipes added after the original 135, one batch file per group of five recipes. Each batch file is owned by one millet. */
const BATCHES = [
  SORGHUM_BATCH_1,
  SORGHUM_BATCH_2,
  SORGHUM_BATCH_3,
  SORGHUM_BATCH_4,
  SORGHUM_BATCH_5,
  SORGHUM_BATCH_6,
  SORGHUM_BATCH_7,
  PEARL_MILLET_BATCH_1,
  PEARL_MILLET_BATCH_2,
  PEARL_MILLET_BATCH_3,
  PEARL_MILLET_BATCH_4,
  FINGER_MILLET_BATCH_1,
  FINGER_MILLET_BATCH_2,
  FINGER_MILLET_BATCH_3,
  FINGER_MILLET_BATCH_4,
  FOXTAIL_MILLET_BATCH_1,
  FOXTAIL_MILLET_BATCH_2,
  FOXTAIL_MILLET_BATCH_3,
  FOXTAIL_MILLET_BATCH_4,
  LITTLE_MILLET_BATCH_1,
  LITTLE_MILLET_BATCH_2,
  LITTLE_MILLET_BATCH_3,
  LITTLE_MILLET_BATCH_4,
  KODO_MILLET_BATCH_1,
  KODO_MILLET_BATCH_2,
  KODO_MILLET_BATCH_3,
  KODO_MILLET_BATCH_4,
  BARNYARD_MILLET_BATCH_1,
  BARNYARD_MILLET_BATCH_2,
  BARNYARD_MILLET_BATCH_3,
  BARNYARD_MILLET_BATCH_4,
  PROSO_MILLET_BATCH_1,
  PROSO_MILLET_BATCH_2,
  PROSO_MILLET_BATCH_3,
  PROSO_MILLET_BATCH_4,
  BROWNTOP_MILLET_BATCH_1,
  BROWNTOP_MILLET_BATCH_2,
  BROWNTOP_MILLET_BATCH_3,
  BROWNTOP_MILLET_BATCH_4,
];

export const EXTRA_RECIPES: Recipe[] = BATCHES.flatMap((b) => b.recipes);
export const EXTRA_CONTENT: Record<string, { hi: LineContent; ta: LineContent }> = Object.assign({}, ...BATCHES.map((b) => b.content));
export const EXTRA_TRANSLATIONS: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }> =
  Object.assign({}, ...BATCHES.map((b) => b.translations));
export const EXTRA_PLATE: Record<string, PlateInfo> = Object.assign({}, ...BATCHES.map((b) => b.plate));
