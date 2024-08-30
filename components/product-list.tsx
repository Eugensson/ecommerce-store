import { Product } from "@/types";
import { NoResults } from "@/components/ui/no-results";
import { ProductCard } from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      {items.length === 0 && <NoResults />}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <ProductCard data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
