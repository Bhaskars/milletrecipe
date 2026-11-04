import credits from "@/data/photo-credits.json";
import type { IngredientCategory } from "@/lib/ingredients";

/** One licensed photo. Every entry must name its source, author and licence. */
export interface PhotoCredit {
  /** File name under public/images, e.g. "dishes/sorghum-01.jpg". */
  file: string;
  /** Title or caption of the original image. */
  title: string;
  author: string;
  /** Short licence name, e.g. "CC BY-SA 4.0", "CC0", "Unsplash License". */
  license: string;
  licenseUrl: string;
  /** Page where the original image can be found. */
  sourceUrl: string;
}

export interface PhotoCreditsFile {
  dishes: Record<string, PhotoCredit>;
  ingredients: Record<string, PhotoCredit>;
}

const data = credits as PhotoCreditsFile;

export function dishPhoto(recipeId: string): { src: string; credit: PhotoCredit } | undefined {
  const credit = data.dishes[recipeId];
  return credit ? { src: `/images/${credit.file}`, credit } : undefined;
}

export function ingredientPhoto(category: IngredientCategory): { src: string; credit: PhotoCredit } | undefined {
  const credit = data.ingredients[category];
  return credit ? { src: `/images/${credit.file}`, credit } : undefined;
}

/** Every credited photo, dishes first, for the attribution page. */
export function allPhotoCredits(): { kind: "dish" | "ingredient"; key: string; credit: PhotoCredit }[] {
  return [
    ...Object.entries(data.dishes).map(([key, credit]) => ({ kind: "dish" as const, key, credit })),
    ...Object.entries(data.ingredients).map(([key, credit]) => ({ kind: "ingredient" as const, key, credit })),
  ];
}
