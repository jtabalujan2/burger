import { MenuItemCardList } from "@/components/MenuItemCardList/MenuItemCardList";
import { items } from "@/lib/mock_data";

export default function Home() {
  return (
    <section className="grid grid-cols-4">
      <MenuItemCardList items={items.products} />
    </section>
  );
}
