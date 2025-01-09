import { HomeIcon } from "lucide-react";
import Link from "next/link";

import { BaseHeaderSearch } from "./BaseHeaderSearch";
import { BaseHeaderCart } from "./BaseHeaderCart";

export const BaseHeader = () => {
  return (
    <div className="w-full inline-flex justify-between pb-6">
      <section className="flex items-center">
        <h1 className="pr-4">BURGER</h1>
        <Link href={"/"}>
          <HomeIcon data-testid="home-icon" />
        </Link>
      </section>
      <section className="flex justify-between items-center">
        <div className="flex justify-center items-center mr-4">
          <BaseHeaderSearch />
        </div>
        <Link href={"/cart"}>
          <BaseHeaderCart />
        </Link>
      </section>
    </div>
  );
};
