import { describe, it, expect } from "vitest";
import { getFormattedPrice } from "../getFormattedPrice";

describe("getFormattedPrice", () => {
  it("should format the price correctly for USD", () => {
    const result = getFormattedPrice({ price: 12345, currency: "USD" });
    expect(result).toBe("$123.45");
  });

  it("should format the price correctly for EUR", () => {
    const result = getFormattedPrice({ price: 12345, currency: "EUR" });
    expect(result).toBe("€123.45");
  });

  it("should format the price correctly for JPY", () => {
    const result = getFormattedPrice({ price: 12345, currency: "JPY" });
    expect(result).toBe("¥123");
  });

  it("should handle zero price", () => {
    const result = getFormattedPrice({ price: 0, currency: "USD" });
    expect(result).toBe("$0.00");
  });

  it("should handle negative price", () => {
    const result = getFormattedPrice({ price: -12345, currency: "USD" });
    expect(result).toBe("-$123.45");
  });
});
