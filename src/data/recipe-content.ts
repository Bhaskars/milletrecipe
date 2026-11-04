import type { LineContent } from "@/data/i18n-content/sorghum";
import { RECIPE_TRANSLATIONS } from "@/data/recipe-translations";
import { SORGHUM_CONTENT } from "@/data/i18n-content/sorghum";
import { PEARL_MILLET_CONTENT } from "@/data/i18n-content/pearl-millet";
import { FINGER_MILLET_CONTENT } from "@/data/i18n-content/finger-millet";
import { FOXTAIL_MILLET_CONTENT } from "@/data/i18n-content/foxtail-millet";
import { LITTLE_MILLET_CONTENT } from "@/data/i18n-content/little-millet";
import { KODO_MILLET_CONTENT } from "@/data/i18n-content/kodo-millet";
import { BARNYARD_MILLET_CONTENT } from "@/data/i18n-content/barnyard-millet";
import { PROSO_MILLET_CONTENT } from "@/data/i18n-content/proso-millet";
import { BROWNTOP_MILLET_CONTENT } from "@/data/i18n-content/browntop-millet";

export type { LineContent };

/** Ingredient and step translations for every recipe, keyed by recipe id. */
export const RECIPE_CONTENT: Record<string, { hi: LineContent; ta: LineContent }> = {
  ...SORGHUM_CONTENT,
  ...PEARL_MILLET_CONTENT,
  ...FINGER_MILLET_CONTENT,
  ...FOXTAIL_MILLET_CONTENT,
  ...LITTLE_MILLET_CONTENT,
  ...KODO_MILLET_CONTENT,
  ...BARNYARD_MILLET_CONTENT,
  ...PROSO_MILLET_CONTENT,
  ...BROWNTOP_MILLET_CONTENT,
};

export { RECIPE_TRANSLATIONS };
