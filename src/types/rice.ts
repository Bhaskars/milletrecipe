/** Rice menu groups, shown as sections in the rice sidebar and index. */
export const RICE_GROUPS = ["Everyday", "Aromatic", "Heritage", "Whole grain"] as const;
export type RiceGroup = (typeof RICE_GROUPS)[number];

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
  cookingNote: string;
}
