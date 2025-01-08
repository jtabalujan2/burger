import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BaseHeaderSearch } from "./BaseHeaderSearch";

describe("BaseHeaderSearch", () => {
  it("renders without crashing", () => {
    render(<BaseHeaderSearch />);
    expect(screen.getByPlaceholderText("Type to search.")).toBeInTheDocument();
  });

  it("displays search items correctly", async () => {
    render(<BaseHeaderSearch />);

    const input = screen.getByPlaceholderText("Type to search.");
    fireEvent.change(input, { target: { value: "Bur" } });

    expect(await screen.findByText("Suggestions")).toBeInTheDocument();
  });
});
