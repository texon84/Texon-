import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { CATEGORY_NAME, PRODUCTS } from '@/data/catalog';
import { formatTaka } from '@/lib/format';
import type { Product } from '@/types/catalog';

interface SearchPanelProps {
  open: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function SearchPanel({ open, onClose, onSelectProduct }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const term = query.trim().toLowerCase();
  const results = term
    ? PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(term) || CATEGORY_NAME[product.category].toLowerCase().includes(term),
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (product: Product) => {
    handleClose();
    onSelectProduct(product);
  };

  return (
    <div className="absolute inset-x-0 top-full border-b border-ink-200 bg-white shadow-2xl shadow-ink-950/10 animate-fade-in">
      <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
        <label className="flex items-center gap-3 rounded-full border border-ink-200 bg-ink-50 px-5 py-3 transition focus-within:border-brand-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-100">
          <Search className="h-5 w-5 text-ink-500" />
          <span className="sr-only">Search products</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sneakers, serums, bags..."
            className="w-full bg-transparent text-sm font-semibold text-ink-950 placeholder:text-ink-500 focus:outline-none"
          />
        </label>

        {term && (
          <ul className="mt-3 divide-y divide-ink-100">
            {results.length === 0 && (
              <li className="px-2 py-6 text-center text-sm text-ink-600">No products match "{query.trim()}".</li>
            )}
            {results.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(product)}
                  className="group flex w-full items-center gap-4 rounded-xl px-2 py-3 text-left transition hover:bg-ink-50"
                >
                  <img src={product.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
                  <span className="flex-1">
                    <span className="block text-sm font-bold text-ink-950">{product.name}</span>
                    <span className="block text-xs text-ink-600">{CATEGORY_NAME[product.category]}</span>
                  </span>
                  <span className="text-sm font-bold text-ink-950">{formatTaka(product.price)}</span>
                  <ArrowRight className="h-4 w-4 text-ink-400 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
