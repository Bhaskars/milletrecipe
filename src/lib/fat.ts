import type { Recipe } from "@/types/recipe";

/**
 * Estimates total, saturated and unsaturated fat per serving from a recipe's ingredient list.
 *
 * Each ingredient is matched to a food with a known fat content (per 100 g) and the share of that
 * fat that is saturated. Quantities are converted to grams with typical unit weights. Items with
 * no match (vegetables, spices, sugar, water) are counted as zero fat. The result is an estimate
 * for a typical portion, not a laboratory analysis.
 */
export interface FatEstimate {
  totalG: number;
  saturatedG: number;
  unsaturatedG: number;
}

interface Food {
  match: RegExp;
  /** Grams of fat per 100 g of the food. */
  fatPer100: number;
  /** Share of the fat that is saturated, from 0 to 1. */
  satFrac: number;
  /** Grams for one unit: tsp, tbsp, cup (volume or typical cup), ml, or piece (a whole item such as an egg). */
  tsp?: number;
  tbsp?: number;
  cup?: number;
  piece?: number;
  /** Grams used when there is no unit, or the unit is unknown. */
  defaultG: number;
}

// Order matters: the first matching entry wins, so specific foods come before general ones.
const FOODS: Food[] = [
  { match: /\bcoconut milk\b/, fatPer100: 21, satFrac: 0.9, tbsp: 15, cup: 240, defaultG: 100 },
  { match: /\bcoconut oil\b/, fatPer100: 100, satFrac: 0.87, tsp: 4.5, tbsp: 13.6, cup: 218, defaultG: 13.6 },
  { match: /\b(dried|desiccated) coconut\b/, fatPer100: 65, satFrac: 0.9, tbsp: 5, cup: 80, defaultG: 10 },
  { match: /\bcoconut\b/, fatPer100: 35, satFrac: 0.9, tbsp: 5, cup: 80, defaultG: 10 },
  { match: /\bghee\b/, fatPer100: 99.5, satFrac: 0.62, tsp: 4.5, tbsp: 13.6, cup: 205, defaultG: 13.6 },
  { match: /\bbutter\b/, fatPer100: 81, satFrac: 0.51, tsp: 4.7, tbsp: 14, cup: 227, defaultG: 14 },
  { match: /\boil\b/, fatPer100: 100, satFrac: 0.15, tsp: 4.5, tbsp: 13.6, cup: 218, defaultG: 13.6 },
  { match: /\bsesame( seeds?)?\b|\btil\b/, fatPer100: 50, satFrac: 0.14, tsp: 3, tbsp: 9, cup: 140, defaultG: 9 },
  { match: /\b(peanuts?|groundnuts?)\b/, fatPer100: 49, satFrac: 0.16, tbsp: 9, cup: 146, defaultG: 10 },
  { match: /\balmonds?\b/, fatPer100: 50, satFrac: 0.07, tbsp: 9, cup: 143, defaultG: 10 },
  { match: /\bcashews?\b/, fatPer100: 44, satFrac: 0.2, tbsp: 9, cup: 137, defaultG: 10 },
  { match: /\bpaneer\b/, fatPer100: 20, satFrac: 0.62, cup: 150, defaultG: 100 },
  { match: /\bcream\b/, fatPer100: 36, satFrac: 0.62, tbsp: 15, cup: 240, defaultG: 15 },
  { match: /\bbuttermilk\b/, fatPer100: 1, satFrac: 0.6, cup: 245, defaultG: 100 },
  { match: /\bmilk\b/, fatPer100: 3.3, satFrac: 0.62, tbsp: 15, cup: 240, defaultG: 240 },
  { match: /\b(curd|yoghurt|yogurt)\b/, fatPer100: 3.3, satFrac: 0.62, tbsp: 15, cup: 245, defaultG: 100 },
  { match: /\beggs?\b/, fatPer100: 10, satFrac: 0.3, piece: 50, defaultG: 50 },
  { match: /\bchicken\b/, fatPer100: 8, satFrac: 0.3, defaultG: 100 },
  { match: /\b(mutton|lamb|goat|keema|kheema)\b/, fatPer100: 12, satFrac: 0.5, defaultG: 100 },
  { match: /\b(fish|pomfret|mackerel|sardine|anchovy|tuna|salmon)\b/, fatPer100: 4, satFrac: 0.25, defaultG: 100 },
  { match: /\b(prawns?|shrimps?)\b/, fatPer100: 1.5, satFrac: 0.25, defaultG: 100 },
  { match: /\b(besan|chickpea flour|gram flour)\b/, fatPer100: 6.7, satFrac: 0.12, tbsp: 8, cup: 92, defaultG: 100 },
  { match: /\b(dal|dals|lentils?|moong|toor|urad|chana|masoor|rajma|chickpeas?)\b/, fatPer100: 1.5, satFrac: 0.2, cup: 200, defaultG: 100 },
  {
    match: /\b(rice|jowar|sorghum|millets?|bajra|ragi|flour|grits|rava|semolina|wheat|poha|atta|sooji|oats|sago)\b/,
    fatPer100: 2.5,
    satFrac: 0.2,
    tbsp: 10,
    cup: 150,
    defaultG: 100,
  },
];

const FRACTIONS: Record<string, number> = { "1/2": 0.5, "1/3": 1 / 3, "2/3": 2 / 3, "1/4": 0.25, "3/4": 0.75 };

/** Reads a leading quantity such as "2", "1/2", "1 1/2" or "1.5". Returns null when there is none. */
function leadingQuantity(line: string): { qty: number; rest: string } | null {
  const mixed = /^(\d+)\s+(\d+\/\d+)\b\s*/.exec(line);
  if (mixed) {
    const frac = FRACTIONS[mixed[2]] ?? eval2(mixed[2]);
    return { qty: Number(mixed[1]) + frac, rest: line.slice(mixed[0].length) };
  }
  const frac = /^(\d+\/\d+)\b\s*/.exec(line);
  if (frac) return { qty: FRACTIONS[frac[1]] ?? eval2(frac[1]), rest: line.slice(frac[0].length) };
  const num = /^(\d+(?:\.\d+)?)\s*/.exec(line);
  if (num) return { qty: Number(num[1]), rest: line.slice(num[0].length) };
  return null;
}

function eval2(fraction: string): number {
  const [a, b] = fraction.split("/").map(Number);
  return b ? a / b : 0;
}

/** Grams of the ingredient in this line, or null if the food is not recognised. */
function gramsFor(line: string, food: Food): number {
  const q = leadingQuantity(line);
  const qty = q?.qty ?? 1;
  const rest = q?.rest ?? line;
  const unit = /^(tablespoons?|tbsp|teaspoons?|tsp|cups?|grams?|g|kg|ml|pieces?|pcs)\b/.exec(rest)?.[1];

  if (!unit) return qty * (food.piece ?? food.defaultG);
  if (/^(tablespoons?|tbsp)$/.test(unit)) return qty * (food.tbsp ?? food.defaultG);
  if (/^(teaspoons?|tsp)$/.test(unit)) return qty * (food.tsp ?? food.defaultG / 3);
  if (/^cups?$/.test(unit)) return qty * (food.cup ?? food.defaultG);
  if (/^(grams?|g)$/.test(unit)) return qty;
  if (unit === "kg") return qty * 1000;
  if (unit === "ml") return qty;
  if (/^(pieces?|pcs)$/.test(unit)) return qty * (food.piece ?? food.defaultG);
  return qty * food.defaultG;
}

/** Estimated fat per serving for one recipe, split into saturated and unsaturated. */
export function fatPerServing(recipe: Pick<Recipe, "ingredients" | "servings">): FatEstimate {
  let total = 0;
  let saturated = 0;
  for (const line of recipe.ingredients) {
    const lower = line.toLowerCase();
    const food = FOODS.find((f) => f.match.test(lower));
    if (!food) continue;
    const grams = gramsFor(lower, food);
    const fat = (grams * food.fatPer100) / 100;
    total += fat;
    saturated += fat * food.satFrac;
  }
  const servings = Math.max(1, recipe.servings);
  const totalG = round1(total / servings);
  const saturatedG = round1(saturated / servings);
  return { totalG, saturatedG, unsaturatedG: round1(totalG - saturatedG) };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
