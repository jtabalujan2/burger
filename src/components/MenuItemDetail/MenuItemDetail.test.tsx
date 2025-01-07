import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuItemDetail } from "./MenuItemDetail";

describe("MenuItemDetail", () => {
  const props = {
    image: "/test-image.jpg",
    blurredImage: "/test-blurred-image.jpg",
    name: "Test Burger",
    price: 9.99,
    description: "A delicious test burger",
    calories: 500,
  };

  it("renders the menu item details correctly", () => {
    const { findByText } = render(<MenuItemDetail {...props} />);

    waitFor(() => {
      expect(findByText("Test Burger")).toBeInTheDocument();
      expect(findByText("$9.99")).toBeInTheDocument();
      expect(findByText("A delicious test burger")).toBeInTheDocument();
      expect(findByText("Nutrition: 500 calories")).toBeInTheDocument();
    });
  });

  it("renders the Go Back link", () => {
    render(<MenuItemDetail {...props} />);

    waitFor(() => {
      expect(screen.findByText("Go Back")).toBeInTheDocument();
    });
  });

  it("renders the image with correct attributes", () => {
    render(<MenuItemDetail {...props} />);

    waitFor(() => {
      const image = screen.findByAltText("Test Burger");

      expect(image).toHaveAttribute("src", "/test-image.jpg");
      expect(image).toHaveAttribute("alt", "Test Burger");
    });
  });
});