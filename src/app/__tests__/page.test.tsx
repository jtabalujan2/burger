import { render, screen } from "@testing-library/react";
import Home from "../page";
import { describe, it, expect } from "vitest";

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Burger A")).toBeInTheDocument();
  });

  it("displays all menu items", () => {
    render(<Home />);
    const items = ["Burger A", "Black Burger", "Fries with Ketchup", "Bacon & Egg", "Mushroom", "Chicken Sandwich"];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("displays the correct descriptions for menu items", () => {
    render(<Home />);
    const descriptions = [
      "A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.",
      "Featuring a unique black bun, this burger comes with a juicy Angus beef patty, melted cheddar, and caramelized onions.",
      "Crispy golden fries served with a side of our signature tangy ketchup.",
      "A hearty burger featuring a fried egg, crispy bacon, and melted cheese, all on a toasted brioche bun.",
      "Loaded with sautéed mushrooms and Swiss cheese, this burger is a mushroom lover's delight.",
      "A juicy grilled chicken breast topped with lettuce, tomato, and mayo, served on a whole wheat bun.",
    ];
    descriptions.forEach((description) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
