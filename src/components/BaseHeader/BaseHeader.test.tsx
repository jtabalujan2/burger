import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BaseHeader } from "./BaseHeader";

describe("BaseHeader", () => {
  it("renders the header title", () => {
    render(<BaseHeader />);

    waitFor(() => {
      expect(screen.getByText("BURGER")).toBeInTheDocument();
    });
  });

  it("renders the Home icon link", () => {
    render(<BaseHeader />);
    waitFor(() => {
      expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    });
  });

  it("renders the ShoppingCart icon", () => {
    render(<BaseHeader />);
    waitFor(() => {
      expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
    });
  });

  it("renders the BaseHeaderSearch component", () => {
    render(<BaseHeader />);
    waitFor(() => {
      expect(screen.getByTestId("base-header-search")).toBeInTheDocument();
    });
  });
});
