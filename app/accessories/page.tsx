import CategoryPage from "@/components/category-page";
import { products } from "@/lib/data";

export default function AccessoriesPage() {
  const accessoryProducts = products.filter(product => product.category === "Accessories");
  
  return (
    <div className="container1">
    <CategoryPage
      title="Accessories"
      description="Complete your look with our premium selection of accessories."
      products={accessoryProducts}
    />
    </div>
  );
}