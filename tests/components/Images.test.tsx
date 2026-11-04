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
    expect(screen.getByText("Calories")).toBeInTheDocument();
    expect(screen.getByText("Fibre")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /build a full plate/i })).toBeInTheDocument();
    expect(screen.getByText("Raw vegetable")).toBeInTheDocument();
  });
});
