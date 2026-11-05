import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** proso-millet recipes proso-millet-41 to proso-millet-45. Not yet written: stub so the index compiles. */
export const PROSO_MILLET_BATCH_6 = {
  recipes: [] as Recipe[],
  content: {} as Record<string, { hi: LineContent; ta: LineContent }>,
  translations: {} as Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>,
  plate: {} as Record<string, PlateInfo>,
};
