"use client";

import { useSearch } from "@/lib/context/search-context";
import ProductCard from "./product-card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function SearchResults() {
  const { searchResults, isSearching, searchQuery, setSearchQuery } = useSearch();

  if (!isSearching) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg border rounded-b-lg z-50">
      <div className="p-4 border-b flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {searchResults.length} results for "{searchQuery}"
        </p>
        <Button variant="ghost" size="sm" onClick={() => setSearchQuery("")}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[60vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No products found</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}