import { useCallback, useState, type ReactNode } from 'react';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Modal from '@/components/ui/Modal';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPanel from '@/components/layout/SearchPanel';
import { NAV_LINKS } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import type { CategoryId, Product } from '@/types/catalog';

interface HeaderProps {
  onSelectCategory: (id: CategoryId) => void;
  onSelectProduct: (product: Product) => void;
}

export default function Header({ onSelectCategory, onSelectProduct }: HeaderProps) {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const scrolled = scrollY > 8;

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const closeAccount = useCallback(() => setAccountOpen(false), []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink-950 px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-ink-200 sm:text-xs">
        Demo preview: products, prices and reviews on this site are sample content.
      </div>
      <div
        className={`relative border-b border-ink-200 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-ink-950/5' : ''
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Logo />

          <nav className="ml-10 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-100 hover:text-ink-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <IconButton label="Search products" onClick={() => setSearchOpen((open) => !open)}>
              <Search className="h-5 w-5" />
            </IconButton>
            <IconButton label="Shopping cart" onClick={() => setCartOpen(true)} badge="0">
              <ShoppingCart className="h-5 w-5" />
            </IconButton>
            <IconButton label="Account" onClick={() => setAccountOpen(true)} className="hidden sm:flex">
              <User className="h-5 w-5" />
            </IconButton>
            <IconButton label="Open menu" onClick={() => setMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </IconButton>
          </div>
        </div>

        <SearchPanel open={searchOpen} onClose={closeSearch} onSelectProduct={onSelectProduct} />
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        onSelectCategory={onSelectCategory}
        onOpenAccount={() => setAccountOpen(true)}
      />

      <Modal open={cartOpen} onClose={closeCart} title="Your Bag">
        <EmptyState
          message="Your bag is empty. Items you add will appear here once ordering opens."
          actionLabel="Continue shopping"
          onAction={closeCart}
        />
      </Modal>

      <Modal open={accountOpen} onClose={closeAccount} title="My Account">
        <EmptyState
          message="Sign-in and order history arrive with checkout. Until then, browse freely and message our team for help."
          actionLabel="Browse collections"
          onAction={closeAccount}
        />
      </Modal>
    </header>
  );
}

interface IconButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
  badge?: string;
  className?: string;
}

function IconButton({ label, onClick, children, badge, className = '' }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition hover:bg-ink-100 hover:text-brand-600 ${className}`}
    >
      {children}
      {badge !== undefined && (
        <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] font-extrabold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

interface EmptyStateProps {
  message: string;
  actionLabel: string;
  onAction: () => void;
}

function EmptyState({ message, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-start gap-5">
      <p className="text-sm leading-[1.5] text-ink-600">{message}</p>
      <button
        type="button"
        onClick={onAction}
        className="rounded-full bg-ink-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500"
      >
        {actionLabel}
      </button>
    </div>
  );
}
