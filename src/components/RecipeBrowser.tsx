"use client";

import { useMemo, useState } from "react";
import { DIETS, REGIONS, type Diet, type Recipe, type Region } from "@/types/recipe";
import { filterRecipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";

interface RecipeBrowserProps {
  recipes: Recipe[];
  initialRegion?: Region;
  initialDiet?: Diet;
}

interface FilterGroupProps<T extends string> {
  label: string;
  allLabel: string;
  options: readonly T[];
  value: T | undefined;
  onChange: (value: T | undefined) => void;
}

function FilterGroup<T extends string>({ label, allLabel, options, value, onChange }: FilterGroupProps<T>) {
  return (
    <div role="group" aria-label={label} className="filter-group">
      <span className="filter-label" aria-hidden="true">
        {label}
      </span>
      <div className="filter-buttons">
        <button type="button" aria-pressed={value === undefined} onClick={() => onChange(undefined)}>
          {allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function RecipeBrowser({ recipes, initialRegion, initialDiet }: RecipeBrowserProps) {
  const [region, setRegion] = useState<Region | undefined>(initialRegion);
  const [diet, setDiet] = useState<Diet | undefined>(initialDiet);

  const visible = useMemo(() => filterRecipes(recipes, { region, diet }), [recipes, region, diet]);

  return (
    <div className="browser">
      <div className="filters">
        <FilterGroup label="Region" allLabel="All regions" options={REGIONS} value={region} onChange={setRegion} />
        <FilterGroup label="Diet" allLabel="All diets" options={DIETS} value={diet} onChange={setDiet} />
      </div>

      <p className="count" aria-live="polite">
        Showing {visible.length} of {recipes.length} recipes
      </p>

      {visible.length === 0 ? (
        <p className="empty">No recipes match these filters. Try a different combination.</p>
      ) : (
        <div className="recipe-grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
