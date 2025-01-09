import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider, CartContext } from "./CartProvider";
import { Product } from "@/components/MenuItemCardList/MenuItemCardList";

describe("CartProvider", () => {
  const product: Product = {
    id: "1",
    image: "https://test.com/burger.jpg",
    calorie: 500,
    slug: "burger",
    name: "Burger",
    price: 5,
    description: "Delicious burger",
  };

  it("should provide default values", () => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {(value) => (
            <>
              <span data-testid="cart">{JSON.stringify(value.cart)}</span>
              <span data-testid="quantity">{value.quantity}</span>
            </>
          )}
        </CartContext.Consumer>
      </CartProvider>
    );

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should add item to cart", () => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add to Cart</button>
              <span data-testid="cart">{JSON.stringify(value.cart)}</span>
              <span data-testid="quantity">{value.quantity}</span>
            </>
          )}
        </CartContext.Consumer>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add to Cart"));

    expect(screen.getByTestId("cart").textContent).toContain(product.id);
    expect(screen.getByTestId("quantity").textContent).toBe("1");
  });

  it("should remove item from cart", () => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add to Cart</button>
              <button onClick={() => value.removeFromCart(product.id)}>Remove from Cart</button>
              <span data-testid="cart">{JSON.stringify(value.cart)}</span>
              <span data-testid="quantity">{value.quantity}</span>
            </>
          )}
        </CartContext.Consumer>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    fireEvent.click(screen.getByText("Remove from Cart"));

    expect(screen.getByTestId("cart").textContent).not.toContain(product.id);
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should clear the cart", () => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add to Cart</button>
              <button onClick={value.clearCart}>Clear Cart</button>
              <span data-testid="cart">{JSON.stringify(value.cart)}</span>
              <span data-testid="quantity">{value.quantity}</span>
            </>
          )}
        </CartContext.Consumer>
      </CartProvider>
    );

    screen.getByText("Add to Cart").click();
    screen.getByText("Clear Cart").click();

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });
});
