import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** finger-millet recipes finger-millet-21 to finger-millet-25. Not yet written: stub so the index compiles. */
export const FINGER_MILLET_BATCH_2 = {
  recipes: [] as Recipe[],
  content: {} as Record<string, { hi: LineContent; ta: LineContent }>,
  translations: {} as Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>,
  plate: {} as Record<string, PlateInfo>,
};
