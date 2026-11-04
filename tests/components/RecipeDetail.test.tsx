import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { RECIPES } from "@/data";
import { RecipeDetail } from "@/components/RecipeDetail";

describe("RecipeDetail", () => {
  const recipe = RECIPES[0];

  it("shows the title, classification and time information", () => {
    render(<RecipeDetail recipe={recipe} />);
    expect(screen.getByRole("heading", { level: 1, name: recipe.title })).toBeInTheDocument();
    expect(screen.getByText(recipe.region)).toBeInTheDocument();
    expect(screen.getByText(recipe.diet)).toBeInTheDocument();
  });

  it("lists every ingredient", () => {
    render(<RecipeDetail recipe={recipe} />);
    const list = screen.getByRole("list", { name: /ingredients/i });
    expect(within(list).getAllByRole("listitem")).toHaveLength(recipe.ingredients.length);
  });

  it("lists every instruction as an ordered step in sequence", () => {
    render(<RecipeDetail recipe={recipe} />);
    const steps = screen.getByRole("list", { name: /instructions/i });
    const items = within(steps).getAllByRole("listitem");
    expect(items).toHaveLength(recipe.steps.length);
    expect(items[0]).toHaveTextContent(recipe.steps[0]);
    expect(steps.tagName).toBe("OL");
  });
});
