import { MenuItemDetail } from "@/components/MenuItemDetail/MenuItemDetail";
import { getMenuItem } from "@/lib/getMenuItem";

export interface MenuItemDetailPageParams {
  menuItemSlug: string;
}

export interface MenuItemDetailPageProps {
  params: Promise<MenuItemDetailPageParams>;
}

export default async function MenuItemDetailPage({ params }: MenuItemDetailPageProps) {
  const slug = (await params).menuItemSlug;
  const menuItem = getMenuItem(slug);

  if (!menuItem) throw new Error(`Missing Item: ${slug}`);

  return (
    <MenuItemDetail
      image={menuItem.image}
      name={menuItem.name}
      price={menuItem.price}
      description={menuItem.description}
      calories={menuItem.calorie}
    />
  );
}
