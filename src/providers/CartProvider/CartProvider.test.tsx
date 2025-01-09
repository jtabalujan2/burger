import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CartProvider, CartContext } from "./CartProvider";
import { Product } from "@/lib/getMenuItems";

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

  it("should provide default values", async () => {
    await act(() =>
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
      )
    );

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should handle default functions gracefully", async () => {
    await act(() =>
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <>
                <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add to Cart</button>
                <button onClick={() => value.removeFromCart(product.id)}>Remove from Cart</button>
                <button onClick={value.clearCart}>Clear Cart</button>
                <span data-testid="cart">{JSON.stringify(value.cart)}</span>
                <span data-testid="quantity">{value.quantity}</span>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      )
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    fireEvent.click(screen.getByText("Remove from Cart"));
    fireEvent.click(screen.getByText("Clear Cart"));

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should add item to cart", async () => {
    await act(() =>
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
      )
    );

    fireEvent.click(screen.getByText("Add to Cart"));

    expect(screen.getByTestId("cart").textContent).toContain(product.id);
    expect(screen.getByTestId("quantity").textContent).toBe("1");
  });

  it("should remove item from cart", async () => {
    await act(() =>
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
      )
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    fireEvent.click(screen.getByText("Remove from Cart"));

    expect(screen.getByTestId("cart").textContent).not.toContain(product.id);
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should clear the cart", async () => {
    await act(() =>
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
      )
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    fireEvent.click(screen.getByText("Clear Cart"));

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
  });

  it("should increase item quantity in cart", async () => {
    await act(() =>
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <>
                <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add to Cart</button>
                <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add Another</button>
                <span data-testid="cart">{JSON.stringify(value.cart)}</span>
                <span data-testid="quantity">{value.quantity}</span>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      )
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    fireEvent.click(screen.getByText("Add Another"));

    expect(screen.getByTestId("cart").textContent).toContain(product.id);
    expect(screen.getByTestId("cart").textContent).toContain('"quantity":2');
    expect(screen.getByTestId("quantity").textContent).toBe("2");
  });

  it("should handle adding multiple different items to cart", async () => {
    const anotherProduct: Product = {
      id: "2",
      image: "https://test.com/fries.jpg",
      calorie: 300,
      slug: "fries",
      name: "Fries",
      price: 3,
      description: "Crispy fries",
    };

    await act(() =>
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <>
                <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add Burger</button>
                <button onClick={() => value.addToCart({ item: anotherProduct, quantity: 1 })}>Add Fries</button>
                <span data-testid="cart">{JSON.stringify(value.cart)}</span>
                <span data-testid="quantity">{value.quantity}</span>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      )
    );

    await fireEvent.click(screen.getByText("Add Burger"));
    await fireEvent.click(screen.getByText("Add Fries"));

    waitFor(() => {
      expect(screen.getByTestId("cart").textContent).toContain(product.id);
      expect(screen.getByTestId("cart").textContent).toContain(anotherProduct.id);
      expect(screen.getByTestId("quantity").textContent).toBe("2");
    });
  });

  it("should have functions that do nothing on initialization", () => {
    render(
      <>
        <CartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart({ item: product, quantity: 1 })}>Add Burger</button>
              <button onClick={() => value.removeFromCart(product.id)}>Remove Burger</button>
              <button onClick={() => value.clearCart()}>Remove Cart</button>
              <span data-testid="cart">{JSON.stringify(value.cart)}</span>
              <span data-testid="quantity">{value.quantity}</span>
            </>
          )}
        </CartContext.Consumer>
      </>
    );

    expect(screen.getByTestId("cart").textContent).toBe("{}");
    expect(screen.getByTestId("quantity").textContent).toBe("0");
    expect(() => screen.getByText("Add Burger").click()).not.toThrow();
    expect(() => screen.getByText("Remove Burger").click()).not.toThrow();
    expect(() => screen.getByText("Remove Cart").click()).not.toThrow();
  });
});
