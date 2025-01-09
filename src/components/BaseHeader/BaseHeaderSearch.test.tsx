import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BaseHeaderSearch } from "./BaseHeaderSearch";

describe("BaseHeaderSearch", () => {
  it("renders without crashing", () => {
    render(<BaseHeaderSearch />);
    waitFor(() => {
      expect(screen.getByPlaceholderText("Type to search.")).toBeInTheDocument();
    });
  });

  it("displays search items correctly", () => {
    render(<BaseHeaderSearch />);

    waitFor(() => {
      const input = screen.getByPlaceholderText("Type to search.");
      fireEvent.change(input, { target: { value: "Bur" } });

      expect(screen.findByText("Suggestions")).toBeInTheDocument();
    });
  });
});
