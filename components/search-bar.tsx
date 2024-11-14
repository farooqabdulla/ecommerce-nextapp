"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useSearch } from "@/lib/context/search-context";
import SearchResults from "./search-results";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const { setSearchQuery } = useSearch();

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-10 w-[300px]"
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {isFocused && <SearchResults />}
    </div>
  );
}