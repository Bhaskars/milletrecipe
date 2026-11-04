export const INGREDIENT_CATEGORIES = [
  "grain",
  "lentil",
  "vegetable",
  "spice",
  "dairy",
  "fat",
  "nut",
  "sweetener",
  "meat",
  "fish",
  "herb",
  "liquid",
  "salt",
  "other",
] as const;

export type IngredientCategory = (typeof INGREDIENT_CATEGORIES)[number];

/** Ordered rules: the first matching rule wins, so specific words come first. */
const RULES: [RegExp, IngredientCategory][] = [
  [/\b(chicken|mutton|keema|kheema|lamb|meat|kodi)\b/i, "meat"],
  [/\b(fish|pomfret|seer)\b/i, "fish"],
  [/\b(ghee|oil|butter)\b/i, "fat"],
  [/\b(salt|sendha namak)\b/i, "salt"],
  [/\b(water)\b/i, "liquid"],
  [/\b(milk|curd|yoghurt|yogurt|buttermilk|cream)\b/i, "dairy"],
  [/\b(jaggery|sugar|gur)\b/i, "sweetener"],
  [/\b(dal|urad|toor|moong|chana|besan|chickpea|lentils?)\b/i, "lentil"],
  [
    /\b(jowar|sorghum|ragi|nachni|bajra|kambu|millet|kangni|thinai|samai|kutki|kodo|varagu|sanwa|kuthiraivali|chena|panivaragu|korle|rice|flour|grits|poha|rava|wheat|maida|atta|semolina|sattu|mandua|oats)\b/i,
    "grain",
  ],
  [/\b(cashews?|almonds?|peanuts?|pistachios?|raisins?|sesame|coconut|walnuts?)\b/i, "nut"],
  [/\b(curry leaves|coriander leaves|mint|methi|fenugreek leaves|spinach|bathua|greens|spring onion|leaves)\b/i, "herb"],
  [/\b(onions?|tomatoes?|carrots?|peas|beans|brinjal|potatoes?|vegetables?|drumsticks?|garlic|ginger|green chill(?:i|ies)|cabbage|cauliflower|capsicum)\b/i, "vegetable"],
  [/\b(cardamom|cinnamon|cloves?|pepper|chill(?:i|ies)|turmeric|cumin|mustard|asafoetida|ajwain|coriander|masala|garam|powder|seeds?|bay leaf|saffron|nutmeg|spice)\b/i, "spice"],
];

export function ingredientCategory(text: string): IngredientCategory {
  for (const [pattern, category] of RULES) {
    if (pattern.test(text)) return category;
  }
  return "other";
}

export const DISH_KINDS = ["flatbread", "pancake", "bowl", "sweet", "fritter", "drink"] as const;
export type DishKind = (typeof DISH_KINDS)[number];

/** Picks the drawing used for the final dish, from its name and course. */
export function dishKind(recipe: { title: string; course: string }): DishKind {
  const t = recipe.title;
  if (recipe.course === "Drink" || /koozh|\bmalt\b/i.test(t)) return "drink";
  if (/roti|rotti|bhakri|paratha|thepla|puri|chapati/i.test(t)) return "flatbread";
  if (/laddoo|ladoo|halwa|holige|chikki|kesari|kozhukattai/i.test(t)) return "sweet";
  if (/vada|vadai|pakoda|pakora|tikki|murukku|chakli|dhokla|paniyaram/i.test(t)) return "fritter";
  if (/dosa|dosai|idli|adai|chilla|uthappam|thalipeeth|pancake/i.test(t)) return "pancake";
  return "bowl";
}
