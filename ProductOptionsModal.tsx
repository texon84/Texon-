import { useState } from 'react';
import { Check, Lock } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { CATEGORY_NAME } from '@/data/catalog';
import { discountPercent, formatTaka } from '@/lib/format';
import type { Product } from '@/types/catalog';

interface ProductOptionsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductOptionsModal({ product, onClose }: ProductOptionsModalProps) {
  if (!product) return null;
  return (
    <Modal open onClose={onClose} title="Select Options" size="md">
      <ProductOptions key={product.id} product={product} />
    </Modal>
  );
}

function ProductOptions({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState(product.colors[0]?.name ?? null);
  const discount = product.originalPrice ? discountPercent(product.price, product.originalPrice) : null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl bg-ink-100">
        <img src={product.image} alt={product.name} className="aspect-[4/5] h-full w-full object-cover" />
      </div>

      <div className="flex flex-col">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink-500">{CATEGORY_NAME[product.category]}</p>
        <h3 className="mt-2 text-xl font-extrabold text-ink-950">{product.name}</h3>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-ink-950">{formatTaka(product.price)}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-ink-500 line-through">{formatTaka(product.originalPrice)}</span>
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">Save {discount}%</span>
            </>
          )}
        </div>

        {product.colors.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-700">
              Colour: <span className="text-ink-950">{color}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {product.colors.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setColor(option.name)}
                  aria-label={option.name}
                  aria-pressed={color === option.name}
                  className={`h-9 w-9 rounded-full ring-offset-2 transition ${
                    color === option.name ? 'ring-2 ring-ink-950' : 'ring-1 ring-ink-300 hover:ring-ink-500'
                  }`}
                  style={{ backgroundColor: option.hex }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-700">
            {product.category === 'beauty' ? 'Size' : 'Select size'}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                aria-pressed={size === option}
                className={`min-w-[3rem] rounded-full border px-4 py-2 text-sm font-bold transition ${
                  size === option
                    ? 'border-ink-950 bg-ink-950 text-white'
                    : 'border-ink-300 text-ink-800 hover:border-ink-950'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button
            type="button"
            disabled
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-200 py-3.5 text-sm font-bold text-ink-600"
          >
            <Lock className="h-4 w-4" />
            Ordering opens soon
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-500">
            <Check className="h-3.5 w-3.5 text-success-700" />
            Demo product. Checkout is not yet active.
          </p>
        </div>
      </div>
    </div>
  );
}
