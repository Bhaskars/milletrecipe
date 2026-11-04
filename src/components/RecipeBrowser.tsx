"use client";

import { useMemo, useState } from "react";
import { DIETS, REGIONS, type Diet, type Recipe, type Region } from "@/types/recipe";
import { filterRecipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { useT } from "@/components/LanguageProvider";

interface RecipeBrowserProps {
  recipes: Recipe[];
  initialRegion?: Region;
  initialDiet?: Diet;
}

interface FilterGroupProps<T extends string> {
  label: string;
  allLabel: string;
  options: readonly T[];
  optionLabel: (value: T) => string;
  value: T | undefined;
  onChange: (value: T | undefined) => void;
}

function FilterGroup<T extends string>({ label, allLabel, options, optionLabel, value, onChange }: FilterGroupProps<T>) {
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
            {optionLabel(option)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function RecipeBrowser({ recipes, initialRegion, initialDiet }: RecipeBrowserProps) {
  const { t } = useT();
  const [region, setRegion] = useState<Region | undefined>(initialRegion);
  const [diet, setDiet] = useState<Diet | undefined>(initialDiet);

  const visible = useMemo(() => filterRecipes(recipes, { region, diet }), [recipes, region, diet]);

  return (
    <div className="browser">
      <div className="filters">
        <FilterGroup
          label={t("filter.region")}
          allLabel={t("filter.allRegions")}
          options={REGIONS}
          optionLabel={(r) => t(`region.${r}`)}
          value={region}
          onChange={setRegion}
        />
        <FilterGroup
          label={t("filter.diet")}
          allLabel={t("filter.allDiets")}
          options={DIETS}
          optionLabel={(d) => t(`diet.${d}`)}
          value={diet}
          onChange={setDiet}
        />
      </div>

      <p className="count" aria-live="polite">
        {t("browser.showing", { shown: visible.length, total: recipes.length })}
      </p>

      {visible.length === 0 ? (
        <p className="empty">{t("browser.empty")}</p>
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
