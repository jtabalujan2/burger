import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../card";

describe("Card Component", () => {
  it("renders Card component correctly", () => {
    const { container } = render(<Card className="custom-class">Card Content</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Card Content");
  });

  it("renders CardHeader component correctly", () => {
    const { container } = render(<CardHeader className="custom-class">Header Content</CardHeader>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Header Content");
  });

  it("renders CardTitle component correctly", () => {
    const { container } = render(<CardTitle className="custom-class">Title Content</CardTitle>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Title Content");
  });

  it("renders CardDescription component correctly", () => {
    const { container } = render(<CardDescription className="custom-class">Description Content</CardDescription>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Description Content");
  });

  it("renders CardContent component correctly", () => {
    const { container } = render(<CardContent className="custom-class">Content</CardContent>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Content");
  });

  it("renders CardFooter component correctly", () => {
    const { container } = render(<CardFooter className="custom-class">Footer Content</CardFooter>);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveTextContent("Footer Content");
  });
});
