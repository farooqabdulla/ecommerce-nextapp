import CategoryPage from "@/components/category-page";
import { products } from "@/lib/data";

export default function SalePage() {
  const saleProducts = products.filter(product => product.originalPrice);
  
  return (
    <CategoryPage
      title="Sale"
      description="Don't miss out on our limited-time offers on premium fashion items."
      products={saleProducts}
    />
  );
}