import CategoryPage from "@/components/category-page";
import { products } from "@/lib/data";

export default function MenPage() {
  const menProducts = products.filter(product => product.category === "Men");
  
  return (
    <div className="container1">
    <CategoryPage
      title="Men's Collection"
      description="Explore our curated selection of men's fashion for every occasion."
      products={menProducts}
    />
    </div>
  );
}