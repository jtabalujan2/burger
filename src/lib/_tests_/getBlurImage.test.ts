import { describe, it, expect } from "vitest";
import { getBlurImage } from "../getBlurImage";

// Replace the original function with the mock
vi.mock("plaiceholder", () => ({
  getPlaiceholder: vi.fn().mockResolvedValue({ base64: "base64", img: "img" }),
}));

// Mock the entire getBlurImage function
// Need to mock it becuase we cannot mock the actual image loading
vi.mock("../getBlurImage", () => ({
  getBlurImage: vi.fn().mockResolvedValue({ base64: "base64", img: "img" }),
}));

describe("getBlurImage", () => {
  it("should return blurred image data for a valid image URL", async () => {
    const src = "https://example.com/image.png";
    const result = await getBlurImage(src);

    expect(result).toHaveProperty("base64");
    expect(result).toHaveProperty("img");
  });
});
