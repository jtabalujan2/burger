import { describe, it, expect, vi } from "vitest";
import { getMenuItems } from "../getMenuItems";
import { items } from "@/fixtures/mock_items";

describe("getMenuItems", () => {
  it("should fetch menu items successfully", async () => {
    const data = await getMenuItems();
    expect(data).toStrictEqual(items);
  });

  it("should log an error if fetching fails", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    global.fetch = vi.fn(() => Promise.reject("API is down"));

    await getMenuItems();
    expect(consoleErrorSpy).toHaveBeenCalledWith("Problem fetching menu items", "API is down");
    consoleErrorSpy.mockRestore();
  });
});
