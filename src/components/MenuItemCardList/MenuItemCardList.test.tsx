import { render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuItemCardList } from "./MenuItemCardList";
import { act } from "react";

describe("MenuItemCardList", () => {
  const items = [
    {
      id: "1",
      name: "Burger",
      price: 5.99,
      image: "https://fake.com/images/burger.jpg",
      description: "Delicious beef burger",
      calorie: 500,
      slug: "burger",
    },
    {
      id: "2",
      name: "Fries",
      price: 2.99,
      image: "https://fake.com/images/fries.jpg",
      description: "Crispy french fries",
      calorie: 300,
      slug: "fries",
    },
  ];

  vi.mock("../../utils/getBlurImage", () => ({
    getBlurImage: vi.fn().mockResolvedValue({ base64: "mockedBlurImage" }),
  }));

  it("renders correctly with given items", async () => {
    const { getByText } = await act(() => render(<MenuItemCardList items={items} />));

    waitFor(() => {
      expect(getByText("Burger")).toBeInTheDocument();
      expect(getByText("Delicious beef burger")).toBeInTheDocument();
      expect(getByText("Fries")).toBeInTheDocument();
      expect(getByText("Crispy french fries")).toBeInTheDocument();
    });
  });

  it("renders the correct number of items", async () => {
    const { container } = await act(() => render(<MenuItemCardList items={items} />));

    waitFor(() => {
      const itemElements = container.querySelectorAll("span.p-6");
      expect(itemElements.length).toBe(items.length);
    });
  });
});
