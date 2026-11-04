# MilletRecipe

A Next.js (App Router) + TypeScript website of traditional Indian millet recipes.

- **9 millets** (Sorghum, Pearl, Finger, Foxtail, Little, Kodo, Barnyard, Proso, Browntop), each with **15 recipes**: 135 in total.
- Every recipe is classified by **region** (South Indian, North Indian, West Indian, East Indian), **diet** (Vegetarian, Non-Vegetarian) and **course** (Breakfast, Main Course, Snack, Accompaniment, Dessert, Drink).
- Each recipe has an ingredient list with quantities and numbered, step-by-step instructions written for a standard home kitchen (stovetop, tawa, kadhai, pressure cooker or steamer).

## Login and roles

Every page requires sign-in. `src/proxy.ts` redirects anonymous visitors to `/login`.

| Role | Can do |
| --- | --- |
| Admin | Browse everything, and open the `/admin` dashboard |
| User | Browse all recipes. Cannot open `/admin` |

Accounts come from environment variables, so no passwords are stored in the repository:

- `AUTH_SECRET`: signs the session cookie (required)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD`: the admin account
- `USERS`: optional JSON array of regular user accounts, e.g. `[{"email":"a@b.c","password":"..."}]`

Copy `.env.example` to `.env.local` for local development. On Vercel, add the same variables under Project Settings → Environment Variables, then redeploy.

There is no self-service sign-up. Accounts are managed through these variables. Adding a database is the next step if you need users to register.

## Languages

English is the default. Hindi and Tamil are also available from the language selector in the header, and the choice is remembered in the browser. The interface and recipe titles and descriptions are translated. Ingredient names and cooking steps stay in English.

## Images

Each ingredient has a small icon, chosen from its ingredient family (grain, lentil, vegetable, spice, dairy and so on). Each recipe has a drawing of its final dish. These are illustrations, not photographs. Real photos can replace them by editing `src/components/IngredientIcon.tsx` and `src/components/DishImage.tsx`.

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
  components/           RecipeBrowser, RecipeCard, RecipeDetail, LoginForm, AdminDashboard, LanguageProvider, images
  data/
    recipe-translations.ts  Hindi and Tamil titles and descriptions
    millets.ts          The nine millets: names, regional names, descriptions
    recipes/*.ts        One file per millet, 15 recipes each
    index.ts            Combines every recipe into RECIPES
  lib/recipes.ts        Slugs, lookups and filtering (pure functions)
  lib/auth.ts           Account lookup, signed session tokens
  lib/access.ts         Who may open which path
  lib/i18n.ts           Interface translations (English, Hindi, Tamil)
  lib/ingredients.ts    Ingredient families and dish drawings
  proxy.ts              Login gate for every page
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
- Hindi and Tamil translations were written without review by a native speaker. A reviewer should check them before publishing.
