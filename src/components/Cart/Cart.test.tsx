import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./Cart";
import { CartContext } from "@/providers/CartProvider/CartProvider";
import { ROUTES } from "@/constants/routes";
import { vi } from "vitest";

const mockCart = {
  "1": {
    id: "1",
    name: "Burger",
    price: 500,
    quantity: 2,
    image: "/burger.jpg",
    slug: "burger",
    description: "A delicious burger",
    calorie: 500,
  },
  "2": {
    id: "2",
    name: "Fries",
    price: 300,
    quantity: 1,
    image: "/fries.jpg",
    slug: "fries",
    description: "A delicious fries",
    calorie: 300,
  },
};

const mockAddToCart = vi.fn();
const mockRemoveFromCart = vi.fn();
const mockClearCart = vi.fn();

const renderCart = (cart = mockCart, isEmpty?: boolean) => {
  if (isEmpty) {
    render(
      <CartContext.Provider
        value={{
          cart: {},
          removeFromCart: mockRemoveFromCart,
          clearCart: mockClearCart,
          addToCart: mockAddToCart,
          quantity: Object.keys(cart).length,
        }}
      >
        <Cart />
      </CartContext.Provider>
    );
  }

  render(
    <CartContext.Provider
      value={{
        cart,
        removeFromCart: mockRemoveFromCart,
        clearCart: mockClearCart,
        addToCart: mockAddToCart,
        quantity: Object.keys(cart).length,
      }}
    >
      <Cart />
    </CartContext.Provider>
  );
};

describe("Cart", () => {
  it("renders cart items", () => {
    renderCart();

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("Burger (2)")).toBeInTheDocument();
    expect(screen.getByText("Fries (1)")).toBeInTheDocument();
  });

  it("displays the total price for each item", () => {
    renderCart();

    expect(screen.getByText("$10.00")).toBeInTheDocument();
    expect(screen.getByText("$3.00")).toBeInTheDocument();
  });

  it("calls removeFromCart when trash icon is clicked", async () => {
    renderCart();
    screen.debug();

    const trashIcons = await screen.getAllByTestId("empty-icon");
    fireEvent.click(trashIcons[0]);

    expect(mockRemoveFromCart).toHaveBeenCalledWith("1");
  });

  it("calls clearCart when Empty Cart button is clicked", () => {
    renderCart();

    const emptyCartButton = screen.getByText("Empty Cart");
    fireEvent.click(emptyCartButton);

    expect(mockClearCart).toHaveBeenCalled();
  });

  it("displays a message when the cart is empty", () => {
    renderCart(undefined, true);

    expect(screen.getByText("Your cart is empty! Let's add some food!")).toBeInTheDocument();
  });

  it("renders links to the product pages", () => {
    renderCart();

    const burgerLink = screen.getByText("Burger (2)").closest("a");
    const friesLink = screen.getByText("Fries (1)").closest("a");

    expect(burgerLink).toHaveAttribute("href", `${ROUTES.MENU}burger`);
    expect(friesLink).toHaveAttribute("href", `${ROUTES.MENU}fries`);
  });
});
