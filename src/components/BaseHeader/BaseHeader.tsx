import { HomeIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { BaseSearch } from "../BaseSearch/BaseSearch";
import { items } from "@/lib/mock_data";

const searchList = items.products.map((item) => {
  return { name: item.name, id: item.id, slug: item.slug };
});

export const BaseHeader = () => {
  return (
    <div className="w-full inline-flex justify-between pb-6">
      <section className="flex items-center">
        <h1 className="pr-4">BURGER</h1>
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </section>
      <section className="flex justify-between items-center">
        <div className="flex justify-center items-center mr-4">
          <BaseSearch placeholder="Type to search." searchList={searchList} />
        </div>
        <ShoppingCartIcon />
      </section>
    </div>
  );
};
