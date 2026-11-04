import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MILLETS } from "@/data/millets";
import { getMilletById, getRecipesByMillet } from "@/lib/recipes";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import { MilletHeader } from "@/components/MilletHeader";

type Params = { milletId: string };

export function generateStaticParams(): Params[] {
  return MILLETS.map((m) => ({ milletId: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { milletId } = await params;
  const millet = getMilletById(milletId);
  return { title: millet ? `${millet.name} Recipes` : "Millet not found" };
}

export default async function MilletPage({ params }: { params: Promise<Params> }) {
  const { milletId } = await params;
  const millet = getMilletById(milletId);
  if (!millet) notFound();

  const recipes = getRecipesByMillet(millet.id);

  return (
    <main className="container">
      <MilletHeader milletId={millet.id} scientificName={millet.scientificName} localNames={millet.localNames.join(" · ")} />
      <RecipeBrowser recipes={recipes} />
    </main>
  );
}
