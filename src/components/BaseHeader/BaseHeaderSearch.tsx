import { items } from "@/lib/mock_data";
import { BaseSearch } from "../BaseSearch/BaseSearch";

export const BaseHeaderSearch = () => {
  const searchList = items.products.map((item) => {
    return { name: item.name, id: item.id, slug: item.slug };
  });

  return (
    <aside data-testid="base-header-search">
      <BaseSearch placeholder="Type to search." searchList={searchList} />
    </aside>
  );
};
