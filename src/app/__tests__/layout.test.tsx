import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import RootLayout from "../layout";

describe("RootLayout", () => {
  it("renders children correctly", async () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(await getByText("Test Child")).toBeInTheDocument();
  });
});
