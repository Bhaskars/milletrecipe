export const REGIONS = ["South Indian", "North Indian", "West Indian", "East Indian"] as const;
export type Region = (typeof REGIONS)[number];

export const DIETS = ["Vegetarian", "Non-Vegetarian"] as const;
export type Diet = (typeof DIETS)[number];

export const COURSES = ["Breakfast", "Main Course", "Snack", "Accompaniment", "Dessert", "Drink"] as const;
export type Course = (typeof COURSES)[number];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export type MilletId =
  | "sorghum"
  | "pearl-millet"
  | "finger-millet"
  | "foxtail-millet"
  | "little-millet"
  | "kodo-millet"
  | "barnyard-millet"
  | "proso-millet"
  | "browntop-millet";

export interface Millet {
  id: MilletId;
  name: string;
  /** Common regional names, e.g. Jowar (Hindi), Cholam (Tamil). */
  localNames: string[];
  scientificName: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  milletId: MilletId;
  region: Region;
  diet: Diet;
  course: Course;
  description: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: Difficulty;
  ingredients: string[];
  steps: string[];
}

export interface RecipeFilters {
  region?: Region;
  diet?: Diet;
  course?: Course;
}
