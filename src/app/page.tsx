import { MenuItemCardList } from "@/components/MenuItemCardList/MenuItemCardList";
import { getMenuItems } from "@/lib/getMenuItems";

export default async function Home() {
  const items = await getMenuItems();

  return (
    <section className="grid grid-cols-4">
      <MenuItemCardList items={items.products} />
    </section>
  );
}
