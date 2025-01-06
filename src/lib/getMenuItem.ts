import { items } from "./mock_data";

export const getMenuItem = (slug: string) => {
  const menuItem = items.products.find((item) => item.slug === slug);

  if (!menuItem) {
    return null;
  }

  return menuItem;
};
