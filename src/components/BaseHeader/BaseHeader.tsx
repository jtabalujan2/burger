import { Input } from "@ui/input";
import { HomeIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

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
        <div className="flex justify-center items-center pr-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-muted-foreground" />
              </div>
              <Input type="search" id="search" placeholder="Search..." className="w-full pl-8 rounded-md bg-muted" />
            </div>
          </div>
        </div>
        <ShoppingCartIcon />
      </section>
    </div>
  );
};
