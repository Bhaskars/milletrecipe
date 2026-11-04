/** A cooked or raw vegetable dish with a short way to make it. */
export interface VegetableDish {
  /** "raw" for uncooked salads and sticks; "cooked" for anything cooked. */
  kind: "raw" | "cooked";
  name: string;
  how: string;
}

/**
 * Nutrition estimate and plate pairing for one recipe.
 * Values are estimates per serving, based on typical portions, not lab analysis.
 */
export interface PlateInfo {
  /** Estimated calories (kcal) per serving. */
  kcal: number;
  /** Estimated carbohydrate (g) per serving; used for glycemic load. */
  carbsG: number;
  /** Estimated dietary fibre (g) per serving. */
  fibreG: number;
  /** Estimated glycemic index of the dish (glucose = 100). */
  gi: number;
  /** Main minerals the dish provides meaningfully. */
  minerals: string[];
  /** One raw vegetable to serve alongside. */
  raw: VegetableDish;
  /** Two cooked vegetable dishes that complete the plate. */
  sides: [VegetableDish, VegetableDish];
}

export function giBand(gi: number): "low" | "medium" | "high" {
  if (gi <= 55) return "low";
  if (gi <= 69) return "medium";
  return "high";
}
