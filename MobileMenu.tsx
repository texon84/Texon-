import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { CATEGORIES } from '@/data/catalog';
import { NAV_LINKS } from '@/data/site';
import type { CategoryId } from '@/types/catalog';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onSelectCategory: (id: CategoryId) => void;
  onOpenAccount: () => void;
}

export default function MobileMenu({ open, onClose, onSelectCategory, onOpenAccount }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const pickCategory = (id: CategoryId) => {
    onClose();
    onSelectCategory(id);
  };

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Site navigation">
      <button type="button" aria-label="Close menu" onClick={onClose} className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in" />
      <aside className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl animate-slide-in-left">
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition hover:bg-ink-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="px-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-ink-500">Shop by category</p>
          <ul className="mt-3 space-y-1">
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => pickCategory(category.id)}
                  className="group flex w-full items-center gap-4 rounded-2xl px-2 py-2.5 text-left transition hover:bg-ink-50"
                >
                  <img src={category.image} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-ink-100" />
                  <span className="flex-1 text-sm font-bold text-ink-950">{category.name}</span>
                  <ArrowRight className="h-4 w-4 text-ink-400 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-8 px-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-ink-500">Explore</p>
          <ul className="mt-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-2xl px-3 py-3 text-sm font-bold text-ink-900 transition hover:bg-ink-50 hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-ink-200 p-5">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenAccount();
            }}
            className="w-full rounded-full bg-ink-950 py-3.5 text-sm font-bold text-white transition hover:bg-brand-500"
          >
            My Account
          </button>
        </div>
      </aside>
    </div>
  );
}
