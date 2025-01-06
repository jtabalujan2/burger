import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, Mock } from "vitest";
import MenuItemDetailPage, { MenuItemDetailPageProps } from "../page";
import { getMenuItem } from "@/lib/getMenuItem";
import { getBlurImage } from "@/lib/getBlurImage";

vi.mock("@/lib/getMenuItem");
vi.mock("@/lib/getBlurImage");

describe("MenuItemDetailPage", () => {
  it("renders the menu item details correctly", async () => {
    const mockParams: MenuItemDetailPageProps = {
      params: Promise.resolve({ menuItemSlug: "test-slug" }),
    };

    const mockMenuItem = {
      image: "test-image.jpg",
      name: "Test Item",
      price: 10,
      description: "Test Description",
      calorie: 200,
    };

    const mockBlurImage = {
      base64: "test-base64",
    };

    (getMenuItem as Mock).mockReturnValue(mockMenuItem);
    (getBlurImage as Mock).mockResolvedValue(mockBlurImage);

    render(<MenuItemDetailPage {...mockParams} />);

    waitFor(async () => {
      expect(await screen.queryByText("Test Item")).toBeInTheDocument();

      expect(screen.findByText("Test Description")).toBeInTheDocument();
      expect(screen.findByText("$10")).toBeInTheDocument();
      expect(screen.findByText("200 calories")).toBeInTheDocument();
    });
  });

  it("throws an error if the menu item is missing", async () => {
    const mockParams: MenuItemDetailPageProps = {
      params: Promise.resolve({ menuItemSlug: "missing-slug" }),
    };

    (getMenuItem as Mock).mockReturnValue(null);

    render(<MenuItemDetailPage {...mockParams} />);

    await expect(MenuItemDetailPage(mockParams)).rejects.toThrow("Missing Item: missing-slug");
  });
});
