import { render, screen, fireEvent } from "@testing-library/react";
import { CartAddButton } from "./CartAddButton";
import { CartContext } from "@/providers/CartProvider/CartProvider";
import { Product } from "../MenuItemCardList/MenuItemCardList";
import { vi } from "vitest";

describe("CartAddButton", () => {
  const mockAddToCart = vi.fn();
  const mockProduct: Product = {
    id: "1",
    name: "Test Product",
    price: 10,
    description: "Test Description",
    image: "/test-image.jpg",
    calorie: 100,
    slug: "test-product",
  };

  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  const renderComponent = () =>
    render(
      <CartContext.Provider value={{ addToCart: mockAddToCart, cart: {}, quantity: 0 }}>
        <CartAddButton item={mockProduct} />
      </CartContext.Provider>
    );

  it("renders the button", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

  it("calls addToCart with the correct arguments when clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(mockAddToCart).toHaveBeenCalledWith({ item: mockProduct, quantity: 1 });
  });

  it("does not call addToCart when button is not clicked", () => {
    renderComponent();
    expect(mockAddToCart).not.toHaveBeenCalled();
  });
});
