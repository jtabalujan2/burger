import { items } from "../fixtures/mock_items";

export const getMenuItem = (slug: string) => {
  const menuItem = items.products.find((item) => item.slug === slug);

  if (!menuItem) {
    return null;
  }

  return menuItem;
};
