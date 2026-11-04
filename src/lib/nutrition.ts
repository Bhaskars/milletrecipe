import type { PlateInfo, VegetableDish } from "@/types/plate";

/** One serving of each vegetable dish on the plate, in grams. */
export const RAW_SERVING_G = 100; // 1 cup of raw vegetable
export const COOKED_SERVING_G = 80; // ½ cup of each cooked vegetable

interface VegEstimate {
  kcal: number;
  carbsG: number;
  gi: number;
}

/**
 * Typical values for one serving of a vegetable dish, chosen by its type.
 * These are category averages, not measurements of each dish.
 */
export function vegetableEstimate(dish: VegetableDish): VegEstimate {
  if (dish.kind === "raw") return { kcal: 30, carbsG: 6, gi: 30 };
  const name = dish.name.toLowerCase();
  if (/chutney|raita/.test(name)) return { kcal: 60, carbsG: 6, gi: 30 };
  if (/dal|sambar|kootu|kurma|rasam/.test(name)) return { kcal: 120, carbsG: 14, gi: 35 };
  if (/pumpkin|potato|aloo|peas|carrot|beetroot/.test(name)) return { kcal: 100, carbsG: 15, gi: 55 };
  return { kcal: 80, carbsG: 8, gi: 40 };
}

/** Glycemic load = GI × grams of carbohydrate ÷ 100. */
export function glycemicLoad(gi: number, carbsG: number): number {
  return Math.round(((gi * carbsG) / 100) * 10) / 10;
}

/** Sugar equivalent in teaspoons, as in the reference table: glycemic load ÷ 4. */
export function sugarTeaspoons(glycemicLoad: number): number {
  return Math.round((glycemicLoad / 4) * 10) / 10;
}

export interface PlateRow {
  kcal: number;
  gi: number;
  glycemicLoad: number;
  sugarTsp: number;
}

function rowFor(kcal: number, carbsG: number, gi: number): PlateRow {
  const gl = glycemicLoad(gi, carbsG);
  return { kcal, gi, glycemicLoad: gl, sugarTsp: sugarTeaspoons(gl) };
}

/** Nutrition for the recipe itself, one serving. */
export function recipeRow(info: PlateInfo): PlateRow {
  return rowFor(info.kcal, info.carbsG, info.gi);
}

/** Nutrition for one serving of a vegetable dish, by its type. */
export function vegetableRow(dish: VegetableDish): PlateRow {
  const e = vegetableEstimate(dish);
  return rowFor(e.kcal, e.carbsG, e.gi);
}

/** Totals for the whole plate: this recipe plus one raw and two cooked vegetable dishes. */
export function plateTotals(info: PlateInfo): PlateRow {
  const rows = [recipeRow(info), vegetableRow(info.raw), ...info.sides.map(vegetableRow)];
  const kcal = rows.reduce((sum, r) => sum + r.kcal, 0);
  const gl = Math.round(rows.reduce((sum, r) => sum + r.glycemicLoad, 0) * 10) / 10;
  return { kcal, gi: 0, glycemicLoad: gl, sugarTsp: sugarTeaspoons(gl) };
}
