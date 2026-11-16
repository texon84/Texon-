import ProductCard from '@/components/home/ProductCard';
import Reveal from '@/components/ui/Reveal';
import type { Product } from '@/types/catalog';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ products, onSelectProduct }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
      {products.map((product, index) => (
        <Reveal key={product.id} delay={(index % 4) * 60} className="h-full">
          <ProductCard product={product} onSelect={onSelectProduct} />
        </Reveal>
      ))}
    </div>
  );
}
