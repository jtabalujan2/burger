import { MenuItemCardListItem } from "@/components/MenuItemCardListItem/MenuItemCardListItem";
import Link from "next/link";

// Move this to an api file later
interface Product {
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
  return items.map((item) => (
    <Link className="p-6" key={item.slug} href={`/menu/${item.slug}`}>
      <MenuItemCardListItem imageUrl={item.image} title={item.name} description={item.description} price={item.price} />
    </Link>
  ));
};
