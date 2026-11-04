# MilletRecipe

A Next.js (App Router) + TypeScript website of traditional Indian millet recipes.

- **9 millets** (Sorghum, Pearl, Finger, Foxtail, Little, Kodo, Barnyard, Proso, Browntop), each with **15 recipes**: 135 in total.
- Every recipe is classified by **region** (South Indian, North Indian, West Indian, East Indian), **diet** (Vegetarian, Non-Vegetarian) and **course** (Breakfast, Main Course, Snack, Accompaniment, Dessert, Drink).
- Each recipe has an ingredient list with quantities and numbered, step-by-step instructions written for a standard home kitchen (stovetop, tawa, kadhai, pressure cooker or steamer).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # run the test suite (Vitest + Testing Library)
npm run typecheck  # TypeScript strict check
npm run build      # production build (pre-renders all 148 pages)
npm start
```

## Routes

| Route | What it shows |
| --- | --- |
| `/` | Millet index and "browse by style" shortcuts |
| `/millets/[milletId]` | The 15 recipes for one millet, filterable by region and diet |
| `/recipes` | All 135 recipes, filterable (also via `?region=` and `?diet=` query params) |
| `/recipes/[slug]` | Full recipe: ingredients and numbered instructions |

## Project structure

```
src/
  app/                  App Router pages and global styles
  components/           RecipeBrowser (filters), RecipeCard, RecipeDetail, SiteHeader
  data/
    millets.ts          The nine millets: names, regional names, descriptions
    recipes/*.ts        One file per millet, 15 recipes each
    index.ts            Combines every recipe into RECIPES
  lib/recipes.ts        Slugs, lookups and filtering (pure functions)
  types/recipe.ts       Domain types and the allowed region, diet, course and difficulty values
tests/
  data/                 Catalogue rules: 15 per millet, classification, detailed steps, veg/non-veg consistency
  lib/                  Pure logic: slugify, lookups, filters
  components/           UI behaviour: filters, aria-pressed state, ingredient and step lists
  app/                  Static route generation
```

## Test-driven development

The tests were written before the code they cover. The data tests enforce the content rules:

- Every millet has exactly 15 recipes, with unique ids and slugs.
- Every recipe has a valid region, diet, course and difficulty, at least 5 ingredients and at least 5 instructions, and each instruction is a real sentence, not a placeholder.
- Each millet has at least one South Indian, one North Indian and one non-vegetarian recipe.
- Vegetarian recipes contain no meat, fish or egg ingredients. Non-vegetarian recipes name at least one.

## Adding a recipe

1. Add an entry to the millet's file in `src/data/recipes/`. Keep `id` unique and set `milletId`, `region`, `diet`, `course` and `difficulty` from the allowed values in `src/types/recipe.ts`.
2. Run `npm test`. The data tests will tell you if the recipe breaks a rule.
3. If you add a recipe to a millet, that millet will then have 16 recipes and the "exactly 15" test will fail. Update the test along with the change, or remove a recipe to keep the set at 15.

## Notes

- Recipes are for a standard kitchen. Quantities are for 3-6 servings unless the recipe says otherwise. Adjust salt and spice to taste.
- Regional names for millets are common usage and vary between communities. The catalogue lists the most widely used names.
