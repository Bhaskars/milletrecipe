import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RECIPES } from "@/data";
import { getRecipesByMillet } from "@/lib/recipes";
import { RecipeBrowser } from "@/components/RecipeBrowser";

const pearl = getRecipesByMillet("pearl-millet", RECIPES);
const count = (recipes: typeof pearl, pred: (r: (typeof pearl)[number]) => boolean) =>
  recipes.filter(pred).length;

describe("RecipeBrowser", () => {
  it("renders one card per recipe", () => {
    render(<RecipeBrowser recipes={pearl} />);
    expect(screen.getAllByRole("article")).toHaveLength(15);
  });

  it("links each card to its recipe page", () => {
    render(<RecipeBrowser recipes={pearl} />);
    const link = within(screen.getAllByRole("article")[0]).getByRole("link");
    expect(link.getAttribute("href")).toMatch(/^\/recipes\/pearl-millet-/);
  });

  it("filters to vegetarian recipes", async () => {
    const user = userEvent.setup();
    render(<RecipeBrowser recipes={pearl} />);
    await user.click(screen.getByRole("button", { name: "Vegetarian" }));
    expect(screen.getAllByRole("article")).toHaveLength(
      count(pearl, (r) => r.diet === "Vegetarian"),
    );
  });

  it("filters to non-vegetarian recipes", async () => {
    const user = userEvent.setup();
    render(<RecipeBrowser recipes={pearl} />);
    await user.click(screen.getByRole("button", { name: "Non-Vegetarian" }));
    expect(screen.getAllByRole("article")).toHaveLength(
      count(pearl, (r) => r.diet === "Non-Vegetarian"),
    );
  });

  it("filters by region within the diet filter", async () => {
    const user = userEvent.setup();
    render(<RecipeBrowser recipes={pearl} />);
    await user.click(screen.getByRole("button", { name: "Vegetarian" }));
    await user.click(
      within(screen.getByRole("group", { name: "Region" })).getByRole("button", {
        name: "South Indian",
      }),
    );
    expect(screen.getAllByRole("article")).toHaveLength(
      count(pearl, (r) => r.diet === "Vegetarian" && r.region === "South Indian"),
    );
  });

  it("marks the active filter with aria-pressed and restores all recipes on 'All diets'", async () => {
    const user = userEvent.setup();
    render(<RecipeBrowser recipes={pearl} />);
    const veg = screen.getByRole("button", { name: "Vegetarian" });
    await user.click(veg);
    expect(veg).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "All diets" }));
    expect(screen.getAllByRole("article")).toHaveLength(15);
  });

  it("shows an empty state when nothing matches", () => {
    render(<RecipeBrowser recipes={[]} />);
    expect(screen.getByText(/no recipes match/i)).toBeInTheDocument();
  });
});

describe("RecipeBrowser initial filters", () => {
  it("starts with the given region and diet already applied", () => {
    const all = RECIPES;
    render(<RecipeBrowser recipes={all} initialRegion="North Indian" initialDiet="Vegetarian" />);
    expect(screen.getAllByRole("article")).toHaveLength(
      count(all, (r) => r.region === "North Indian" && r.diet === "Vegetarian"),
    );
    expect(screen.getByRole("button", { name: "Vegetarian" })).toHaveAttribute("aria-pressed", "true");
  });
});
