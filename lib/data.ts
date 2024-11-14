import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Tee",
    price: 29.99,
    originalPrice: 39.99,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780"],
    category: "Men",
    description: "Essential white t-shirt made from premium cotton."
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89.99,
    images: ["https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=1964"],
    category: "Women",
    description: "Vintage-inspired denim jacket with modern details."
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 129.99,
    originalPrice: 159.99,
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1769"],
    category: "Accessories",
    description: "Elegant leather crossbody bag with gold hardware."
  },
  {
    id: "4",
    name: "Wool Blend Sweater",
    price: 79.99,
    images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005"],
    category: "Women",
    description: "Cozy wool-blend sweater perfect for layering."
  }
];