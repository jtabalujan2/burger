import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuItemCard } from "@/components/MenuItemCard/MenuItemCard";

describe("MenuItemCard", () => {
  test("renders MenuItemCard with all props", () => {
    render(<MenuItemCard imageUrl="https://example.com/image.jpg" title="Burger" description="Delicious beef burger" price={999} />);

    expect(screen.queryByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByText("Delicious beef burger")).toBeInTheDocument();
  });

  test("renders MenuItemCard without image", () => {
    render(<MenuItemCard title="Ketchup" description="Delicious Ketchup" price={1299} />);

    screen.debug();

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Ketchup")).toBeInTheDocument();
    expect(screen.getByText("$12.99")).toBeInTheDocument();
    expect(screen.getByText("Delicious Ketchup")).toBeInTheDocument();
  });
});
