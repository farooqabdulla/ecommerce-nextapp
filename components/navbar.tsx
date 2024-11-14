"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./search-bar";
import CartDrawer from "./cart-drawer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 container1">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/women" className="text-gray-600 hover:text-black">
              Women
            </Link>
            <Link href="/men" className="text-gray-600 hover:text-black">
              Men
            </Link>
            <Link href="/accessories" className="text-gray-600 hover:text-black">
              Accessories
            </Link>
            <Link href="/sale" className="text-red-600 hover:text-red-700">
              Sale
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <CartDrawer />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <SearchBar />
            <div className="flex flex-col space-y-2">
              <Link href="/women" className="text-gray-600 hover:text-black py-2">
                Women
              </Link>
              <Link href="/men" className="text-gray-600 hover:text-black py-2">
                Men
              </Link>
              <Link href="/accessories" className="text-gray-600 hover:text-black py-2">
                Accessories
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 py-2">
                Sale
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}