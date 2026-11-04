import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { DishImage } from "@/components/DishImage";
import { IngredientIcon } from "@/components/IngredientIcon";

const credit = {
  file: "dishes/sorghum-01.jpg",
  title: "Sample",
  author: "Someone",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Sample.jpg",
};

vi.mock("@/lib/photos", () => ({
  dishPhoto: (id: string) => (id === "sorghum-01" ? { src: "/images/dishes/sorghum-01.jpg", credit } : undefined),
  ingredientPhoto: (category: string) =>
    category === "grain" ? { src: "/images/ingredients/grain.jpg", credit } : undefined,
}));

describe("photo first, SVG fallback", () => {
  it("uses the dish photo with its accessible label when one is credited", () => {
    const { container } = render(<DishImage kind="flatbread" title="Jolada Rotti" milletId="sorghum" recipeId="sorghum-01" />);
    const img = screen.getByRole("img", { name: /final dish: jolada rotti/i });
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", "/images/dishes/sorghum-01.jpg");
    expect(container.querySelector("svg")).toBeNull();
  });

  it("falls back to the SVG dish illustration when no photo is credited", () => {
    const { container } = render(<DishImage kind="flatbread" title="Other" milletId="sorghum" recipeId="unknown-01" />);
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("uses the ingredient photo when one is credited, and the SVG otherwise", () => {
    const { unmount } = render(<IngredientIcon category="grain" />);
    expect(screen.getByRole("img", { name: "Grain or flour" }).tagName).toBe("IMG");
    unmount();
    const { container } = render(<IngredientIcon category="salt" />);
    expect(container.querySelector("svg")).not.toBeNull();
    expect(screen.getByRole("img", { name: "Salt" })).toBeInTheDocument();
  });
});
