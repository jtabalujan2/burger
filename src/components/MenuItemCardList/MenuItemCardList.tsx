import { MenuItemCard } from "@/components/MenuItemCard/MenuItemCard";

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
    <span className="p-6" key={item.slug}>
      <MenuItemCard imageUrl={item.image} title={item.name} description={item.description} price={item.price} />
    </span>
  ));
};
