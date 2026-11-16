import { useState } from 'react';
import ProductGrid from '@/components/home/ProductGrid';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CATEGORIES, PRODUCTS } from '@/data/catalog';
import type { CategoryId, Product } from '@/types/catalog';

export type CategoryFilter = CategoryId | 'all';

interface AllProductsProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onSelectProduct: (product: Product) => void;
}

export default function AllProducts({ activeCategory, onCategoryChange, onSelectProduct }: AllProductsProps) {
  const [visibleCount, setVisibleCount] = useState(8);
  const filtered = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter((product) => product.category === activeCategory);
  const shown = filtered.slice(0, visibleCount);

  const tabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...CATEGORIES.map((category) => ({ id: category.id, label: category.name })),
  ];

  return (
    <section id="all-products" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="The Collection" title="All Products" description="Every piece in the TEXON edit, priced in taka." />
          <p className="text-sm font-semibold text-ink-600">
            Showing {shown.length} of {filtered.length} products
          </p>
        </div>

        <div role="tablist" aria-label="Filter by category" className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
          {tabs.map((tab) => {
            const isActive = tab.id === activeCategory;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  onCategoryChange(tab.id);
                  setVisibleCount(8);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                  isActive ? 'bg-ink-950 text-white shadow-md' : 'bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-ink-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8">
        <ProductGrid products={shown} onSelectProduct={onSelectProduct} />
      </div>

      {visibleCount < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + 8)}
            className="rounded-full border-2 border-ink-950 px-8 py-3 text-sm font-bold text-ink-950 transition hover:bg-ink-950 hover:text-white"
          >
            Load more products
          </button>
        </div>
      )}
    </section>
  );
}
