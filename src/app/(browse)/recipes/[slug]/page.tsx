import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RECIPES } from "@/data";
import { findRecipeBySlug, recipeSlug } from "@/lib/recipes";
import { RecipeDetail } from "@/components/RecipeDetail";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return RECIPES.map((r) => ({ slug: recipeSlug(r) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = findRecipeBySlug(slug);
  return { title: recipe?.title ?? "Recipe not found", description: recipe?.description };
}

export default async function RecipePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const recipe = findRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <main className="browse-content narrow">
      <RecipeDetail recipe={recipe} />
    </main>
  );
}
