import { expect, it, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MenuItemCardListItem } from "@/components/MenuItemCardListItem/MenuItemCardListItem";

describe("MenuItemCardListItem", () => {
  it("renders MenuItemCard with all props", () => {
    render(
      <MenuItemCardListItem
        imageUrl="https://example.com/image.jpg"
        title="Burger"
        description="Delicious beef burger"
        price={999}
        blurredImage={"something"}
      />
    );

    waitFor(() => {
      expect(screen.queryByRole("img")).toBeInTheDocument();
      expect(screen.getByText("Burger")).toBeInTheDocument();
      expect(screen.getByText("$9.99")).toBeInTheDocument();
      expect(screen.getByText("Delicious beef burger")).toBeInTheDocument();
    });
  });
});
