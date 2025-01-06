import { describe, it, expect } from "vitest";
import { getMenuItem } from "../getMenuItem";
import { items } from "../mock_data";

describe("getMenuItem", () => {
  it("should return the correct menu item when a valid slug is provided", () => {
    const slug = items.products[0].slug;
    const result = getMenuItem(slug);
    expect(result).toEqual(items.products[0]);
  });

  it("should return null when an invalid slug is provided", () => {
    const result = getMenuItem("invalid-slug");
    expect(result).toBeNull();
  });

  it("should return null when no slug is provided", () => {
    const result = getMenuItem("");
    expect(result).toBeNull();
  });
});
