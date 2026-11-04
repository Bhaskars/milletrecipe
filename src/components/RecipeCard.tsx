import Link from "next/link";
import type { Recipe } from "@/types/recipe";
import { recipeSlug } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <article className="recipe-card" data-diet={recipe.diet === "Vegetarian" ? "veg" : "non-veg"}>
      <p className="tags">
        <span className="tag tag-region">{recipe.region}</span>
        <span className="tag tag-diet">{recipe.diet}</span>
      </p>
      <h3 className="recipe-card-title">
        <Link href={`/recipes/${recipeSlug(recipe)}`}>{recipe.title}</Link>
      </h3>
      <p className="recipe-card-description">{recipe.description}</p>
      <p className="meta">
        {totalMinutes} min · {recipe.difficulty} · Serves {recipe.servings}
      </p>
    </article>
  );
}
