import { render } from "@testing-library/react";
import CartPage from "../page";
import { describe, it, expect } from "vitest";

describe("CartPage", () => {
  it("renders without crashing", () => {
    const { container } = render(<CartPage />);
    expect(container).toBeInTheDocument();
  });

  it("contains the Cart component", () => {
    const { getByTestId } = render(<CartPage />);
    expect(getByTestId("cart-component")).toBeInTheDocument();
  });
});
