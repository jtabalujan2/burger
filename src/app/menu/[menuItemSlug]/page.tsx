import { MenuItemDetail } from "@/components/MenuItemDetail/MenuItemDetail";
import { getBlurImage } from "@/lib/getBlurImage";
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

  const { base64 } = await getBlurImage(menuItem.image);

  return (
    <MenuItemDetail
      id={menuItem.id}
      slug={menuItem.slug}
      image={menuItem.image}
      name={menuItem.name}
      price={menuItem.price}
      description={menuItem.description}
      calorie={menuItem.calorie}
      blurredImage={base64}
    />
  );
}
