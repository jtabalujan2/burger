import { getMenuItems } from "@/lib/getMenuItems";
import { BaseSearch } from "../BaseSearch/BaseSearch";

export const BaseHeaderSearch = async () => {
  const items = await getMenuItems();

  const searchList = items.products.map((item) => {
    return { name: item.name, id: item.id, slug: item.slug };
  });

  return (
    <aside data-testid="base-header-search">
      <BaseSearch placeholder="Type to search." searchList={searchList} />
    </aside>
  );
};
