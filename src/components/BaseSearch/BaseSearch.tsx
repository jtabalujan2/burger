"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ui/command";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BaseSearchList {
  name: string;
  id: string;
  slug: string;
}

interface BaseSearchProps {
  placeholder?: string;
  searchList?: BaseSearchList[];
  handleSelect?: (slug: string) => void;
}

export const BaseSearch = ({ placeholder, searchList }: BaseSearchProps) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSelect = (slug: string) => {
    router.push(`/menu/${slug}`);
  };

  return (
    <div className="relative">
      <Command>
        <CommandInput placeholder={placeholder} value={search} onValueChange={setSearch} />
        {search && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-lg border shadow-lg">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {searchList?.map((item) => (
                  <CommandItem key={item.slug} onSelect={() => handleSelect(item.slug)} value={item.name}>
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
};
