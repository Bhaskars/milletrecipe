import type { Metadata } from "next";
import { RECIPES } from "@/data";
import { DIETS, REGIONS, type Diet, type Region } from "@/types/recipe";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import { AllRecipesHeader } from "@/components/AllRecipesHeader";

export const metadata: Metadata = { title: "All Recipes" };

type SearchParams = Promise<{ region?: string; diet?: string }>;

function pick<T extends string>(value: string | undefined, allowed: readonly T[]): T | undefined {
  return allowed.find((a) => a === value);
}

export default async function AllRecipesPage({ searchParams }: { searchParams: SearchParams }) {
  const { region, diet } = await searchParams;

  return (
    <main className="browse-content">
      <AllRecipesHeader count={RECIPES.length} />
      <RecipeBrowser
        recipes={RECIPES}
        initialRegion={pick<Region>(region, REGIONS)}
        initialDiet={pick<Diet>(diet, DIETS)}
      />
    </main>
  );
}
