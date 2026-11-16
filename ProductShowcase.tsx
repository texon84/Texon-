import ProductGrid from '@/components/home/ProductGrid';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Product } from '@/types/catalog';

interface ProductShowcaseProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  tone?: 'light' | 'dark';
  onSelectProduct: (product: Product) => void;
  footnote?: string;
}

export default function ProductShowcase({
  id,
  eyebrow,
  title,
  description,
  products,
  tone = 'light',
  onSelectProduct,
  footnote,
}: ProductShowcaseProps) {
  const isDark = tone === 'dark';

  return (
    <section
      id={id}
      className={`scroll-mt-28 ${isDark ? 'relative isolate overflow-hidden bg-ink-950' : 'bg-transparent'}`}
    >
      {isDark && (
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-3xl" />
      )}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} tone={tone} />
            {footnote && (
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-brand-400' : 'text-ink-500'}`}>{footnote}</p>
            )}
          </div>
        </Reveal>
        <div className="mt-10">
          <ProductGrid products={products} onSelectProduct={onSelectProduct} />
        </div>
      </div>
    </section>
  );
}
