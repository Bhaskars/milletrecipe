/** Rice menu groups, shown as sections in the rice sidebar and index. */
export const RICE_GROUPS = ["Everyday", "Aromatic", "Heritage", "Whole grain"] as const;
export type RiceGroup = (typeof RICE_GROUPS)[number];

/** Typical values for 100 g of cooked rice. Estimates from typical composition, not lab analysis. */
export interface RiceNutrition {
  kcal: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
  fibreG: number;
  /** Estimated glycemic index (glucose = 100). */
  gi: number;
  minerals: string[];
}

/** One rice variety with its traditional uses and commonly claimed benefits. */
export interface RiceVariety {
  id: string;
  name: string;
  /** Names used in different languages and regions. */
  localNames: string[];
  group: RiceGroup;
  region: string;
  /** Colour, shape and texture of the uncooked grain. */
  appearance: string;
  description: string;
  traditionalUses: string[];
  /** Benefits that are traditionally believed or commonly claimed. Not established medical facts. */
  traditionalBenefits: string[];
  /** What is known about the grain's nutrients, based on its colour and milling. */
  nutritionNote: string;
  nutrition: RiceNutrition;
  cookingNote: string;
}
