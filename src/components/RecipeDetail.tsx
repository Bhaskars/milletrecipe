import Link from "next/link";
import type { Recipe } from "@/types/recipe";
import { getMilletById } from "@/lib/recipes";

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const millet = getMilletById(recipe.milletId);

  return (
    <article className="recipe-detail">
      {millet && (
        <p className="back-link">
          <Link href={`/millets/${millet.id}`}>← All {millet.name} recipes</Link>
        </p>
      )}

      <p className="tags">
        <span className="tag tag-region">{recipe.region}</span>
        <span className="tag tag-diet">{recipe.diet}</span>
        <span className="tag tag-course">{recipe.course}</span>
      </p>

      <h1>{recipe.title}</h1>
      <p className="lead">{recipe.description}</p>

      <dl className="facts">
        <div>
          <dt>Millet</dt>
          <dd>{millet?.name ?? "Millet"}</dd>
        </div>
        <div>
          <dt>Prep</dt>
          <dd>{recipe.prepTimeMinutes} min</dd>
        </div>
        <div>
          <dt>Cook</dt>
          <dd>{recipe.cookTimeMinutes} min</dd>
        </div>
        <div>
          <dt>Serves</dt>
          <dd>{recipe.servings}</dd>
        </div>
        <div>
          <dt>Level</dt>
          <dd>{recipe.difficulty}</dd>
        </div>
      </dl>

      <section className="detail-section" aria-labelledby="ingredients-heading">
        <h2 id="ingredients-heading">Ingredients</h2>
        <ul className="ingredients" aria-label="Ingredients">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section" aria-labelledby="instructions-heading">
        <h2 id="instructions-heading">Instructions</h2>
        <ol className="steps" aria-label="Instructions">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
