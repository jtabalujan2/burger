import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import RootLayout from "../layout";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
