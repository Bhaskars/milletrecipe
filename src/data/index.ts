import type { Recipe } from "@/types/recipe";
import { EXTRA_RECIPES } from "@/data/extra";
import { sorghumRecipes } from "@/data/recipes/sorghum";
import { pearlMilletRecipes } from "@/data/recipes/pearl-millet";
import { fingerMilletRecipes } from "@/data/recipes/finger-millet";
import { foxtailMilletRecipes } from "@/data/recipes/foxtail-millet";
import { littleMilletRecipes } from "@/data/recipes/little-millet";
import { kodoMilletRecipes } from "@/data/recipes/kodo-millet";
import { barnyardMilletRecipes } from "@/data/recipes/barnyard-millet";
import { prosoMilletRecipes } from "@/data/recipes/proso-millet";
import { browntopMilletRecipes } from "@/data/recipes/browntop-millet";

export const RECIPES: Recipe[] = [
  ...sorghumRecipes,
  ...pearlMilletRecipes,
  ...fingerMilletRecipes,
  ...foxtailMilletRecipes,
  ...littleMilletRecipes,
  ...kodoMilletRecipes,
  ...barnyardMilletRecipes,
  ...prosoMilletRecipes,
  ...browntopMilletRecipes,
  ...EXTRA_RECIPES,
];
