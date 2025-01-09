import { MenuItemCardListItem } from "@/components/MenuItemCardListItem/MenuItemCardListItem";
import { ROUTES } from "@/constants/routes";
import { getBlurImage } from "@/lib/getBlurImage";
import Link from "next/link";

// Move this to an api file later
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
  slug: string;
}

interface MenuItemCardListProps {
  items: Product[];
}

export const MenuItemCardList = ({ items }: MenuItemCardListProps) => {
  return items.map(async (item) => {
    const { base64 } = await getBlurImage(item.image);

    return (
      <Link className="p-6 max-w-" key={item.slug} href={`${ROUTES.MENU}${item.slug}`}>
        <MenuItemCardListItem
          imageUrl={item.image}
          title={item.name}
          description={item.description}
          price={item.price}
          blurredImage={base64}
        />
      </Link>
    );
  });
};
