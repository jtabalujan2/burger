import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuItemCardList } from "./MenuItemCardList";

describe("MenuItemCardList", () => {
  const items = [
    {
      id: "1",
      name: "Burger",
      price: 5.99,
      image: "/images/burger.jpg",
      description: "Delicious beef burger",
      calorie: 500,
      slug: "burger",
    },
    {
      id: "2",
      name: "Fries",
      price: 2.99,
      image: "/images/fries.jpg",
      description: "Crispy french fries",
      calorie: 300,
      slug: "fries",
    },
  ];

  it("renders correctly with given items", () => {
    const { getByText } = render(<MenuItemCardList items={items} />);

    expect(getByText("Burger")).toBeInTheDocument();
    expect(getByText("Delicious beef burger")).toBeInTheDocument();
    expect(getByText("Fries")).toBeInTheDocument();
    expect(getByText("Crispy french fries")).toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    const { container } = render(<MenuItemCardList items={items} />);
    const itemElements = container.querySelectorAll("span.p-6");

    expect(itemElements.length).toBe(items.length);
  });
});
