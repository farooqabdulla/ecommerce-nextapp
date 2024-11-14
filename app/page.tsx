import { ShoppingBag, TrendingUp, Truck, RefreshCw, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data";

export default function Home() {
  const trendingProducts = products.slice(0, 4);
  const saleProducts = products.filter(product => product.originalPrice).slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center container1">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070"
          alt="Hero fashion"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="container relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Your Style</h1>
            <p className="text-lg mb-6">Explore our curated collection of premium fashion pieces designed for the modern individual.</p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 container1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
              { icon: ShoppingBag, title: "Secure Shopping", desc: "Protected payments" },
              { icon: TrendingUp, title: "Trending Styles", desc: "Updated daily" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <feature.icon className="w-8 h-8 mb-4 text-gray-800" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 container1">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Link href="/trending" className="text-gray-600 hover:text-black flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 bg-red-50 container1">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-red-600">Flash Sale</h2>
            <Link href="/sale" className="text-red-600 hover:text-red-700 flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container1">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Women", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071" },
              { name: "Men", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965" },
            ].map((category, index) => (
              <Link href={`/${category.name.toLowerCase()}`} key={index}>
                <div className="relative h-[400px] group cursor-pointer overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive offers and style updates.</p>
          <div className="flex md:gap-4 md:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}