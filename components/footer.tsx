import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 container1">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About LUXE</h3>
            <p className="text-sm">
              Premium fashion destination offering curated collections for the modern individual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm hover:text-white">
                Contact
              </Link>
              <Link href="/blog" className="block text-sm hover:text-white">
                Blog
              </Link>
              <Link href="/faq" className="block text-sm hover:text-white">
                FAQs
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/shipping" className="block text-sm hover:text-white">
                Shipping Information
              </Link>
              <Link href="/returns" className="block text-sm hover:text-white">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="block text-sm hover:text-white">
                Size Guide
              </Link>
              <Link href="/privacy" className="block text-sm hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}