import { render, screen, waitFor } from "@testing-library/react";
import { MenuItemCardList } from "./MenuItemCardList";
import { getBlurImage } from "@/lib/getBlurImage";
import { Mock } from "vitest";

vi.mock("@/lib/getBlurImage");

const items = [
  {
    id: "1",
    name: "Burger",
    price: 5.99,
    image: "/images/burger.jpg",
    description: "Delicious burger",
    calorie: 500,
    slug: "burger",
  },
  {
    id: "2",
    name: "Fries",
    price: 2.99,
    image: "/images/fries.jpg",
    description: "Crispy fries",
    calorie: 300,
    slug: "fries",
  },
];

describe("MenuItemCardList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders a list of menu items", async () => {
    (getBlurImage as Mock).mockResolvedValue({ base64: "blurredImage" });

    render(<MenuItemCardList items={items} />);

    waitFor(async () => {
      for (const item of items) {
        expect(await screen.findByText(item.name)).toBeInTheDocument();
        expect(await screen.findByText(item.description)).toBeInTheDocument();
        expect(await screen.findByText(`$${item.price.toFixed(2)}`)).toBeInTheDocument();
      }
    });
  });

  it("links to the correct menu item page", async () => {
    (getBlurImage as Mock).mockResolvedValue({ base64: "blurredImage" });

    render(<MenuItemCardList items={items} />);

    waitFor(async () => {
      for (const item of items) {
        const link = await screen.findByRole("link", { name: item.name });
        expect(link).toHaveAttribute("href", `/menu/${item.slug}`);
      }
    });
  });
});
