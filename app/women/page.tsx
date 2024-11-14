import CategoryPage from "@/components/category-page";
import { products } from "@/lib/data";

export default function WomenPage() {
  const womenProducts = products.filter(product => product.category === "Women");
  
  return (
    <div className="container1">
    <CategoryPage
      title="Women's Collection"
      description="Discover our latest women's fashion featuring elegant designs and premium materials."
      products={womenProducts}
    />
    </div>
  );
}