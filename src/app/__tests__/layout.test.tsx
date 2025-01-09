import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import RootLayout from "../layout";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    waitFor(() => {
      expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
  });
});
