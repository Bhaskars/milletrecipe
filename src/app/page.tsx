import Link from "next/link";
import { MILLETS } from "@/data/millets";
import { RECIPES } from "@/data";
import { getRecipesByMillet } from "@/lib/recipes";
import { REGIONS, DIETS } from "@/types/recipe";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Ancient grains, everyday kitchens</p>
        <h1>Traditional Indian Millet Recipes</h1>
        <p className="hero-text">
          {RECIPES.length} recipes across {MILLETS.length} millets, with step-by-step instructions you can cook in any
          standard kitchen. Filter by South or North Indian style, vegetarian or non-vegetarian.
        </p>
        <Link className="button" href="/recipes">
          Browse all recipes
        </Link>
      </section>

      <section aria-labelledby="millets-heading">
        <h2 id="millets-heading">Choose a millet</h2>
        <div className="millet-grid">
          {MILLETS.map((millet) => (
            <Link key={millet.id} href={`/millets/${millet.id}`} className="millet-card">
              <h3>{millet.name}</h3>
              <p className="local-names">{millet.localNames.join(" · ")}</p>
              <p>{millet.description}</p>
              <span className="millet-count">{getRecipesByMillet(millet.id).length} recipes →</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="style-heading">
        <h2 id="style-heading">Browse by style</h2>
        <div className="style-links">
          {REGIONS.map((region) => (
            <Link key={region} href={`/recipes?region=${encodeURIComponent(region)}`} className="chip">
              {region}
            </Link>
          ))}
          {DIETS.map((diet) => (
            <Link key={diet} href={`/recipes?diet=${encodeURIComponent(diet)}`} className="chip">
              {diet}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
