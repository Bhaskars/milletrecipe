import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { RECIPES } from "@/data";
import { RecipeDetail } from "@/components/RecipeDetail";
import { RecipeCard } from "@/components/RecipeCard";

describe("recipe images", () => {
  const recipe = RECIPES[0];

  it("shows an image for every ingredient", () => {
    render(<RecipeDetail recipe={recipe} />);
    const list = screen.getByRole("list", { name: /ingredients/i });
    expect(within(list).getAllByRole("img")).toHaveLength(recipe.ingredients.length);
  });

  it("shows the final dish image on the recipe page", () => {
    render(<RecipeDetail recipe={recipe} />);
    expect(screen.getByRole("img", { name: new RegExp(`final dish.*${recipe.title}`, "i") })).toBeInTheDocument();
  });

  it("shows the dish image on recipe cards", () => {
    render(<RecipeCard recipe={recipe} />);
    expect(screen.getByRole("img", { name: /final dish/i })).toBeInTheDocument();
  });
});

describe("nutrition and full plate on the recipe page", () => {
  it("shows calories, fibre, glycemic index and the plate pairing", () => {
    render(<RecipeDetail recipe={RECIPES[0]} />);
    expect(screen.getByRole("heading", { name: /nutrition per serving/i })).toBeInTheDocument();
    expect(screen.getAllByText("Calories").length).toBeGreaterThan(0);
    expect(screen.getByText("Fibre")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /build a full plate/i })).toBeInTheDocument();
  });

  it("lists the plate per serving with amounts, sugar equivalent and full-plate total", () => {
    render(<RecipeDetail recipe={RECIPES[0]} />);
    const table = screen.getByRole("table");
    expect(within(table).getByRole("columnheader", { name: "Sugar equivalent" })).toBeInTheDocument();
    expect(within(table).getByRole("cell", { name: "1 cup (100 g)" })).toBeInTheDocument();
    expect(within(table).getAllByRole("cell", { name: "½ cup (80 g)" })).toHaveLength(2);
    expect(within(table).getByRole("rowheader", { name: /full plate total/i })).toBeInTheDocument();
  });
});
