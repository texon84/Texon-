import { useState, type ReactNode } from 'react';
import { ChevronDown, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Modal from '@/components/ui/Modal';
import { CATEGORIES } from '@/data/catalog';
import { FOOTER_HELP_LINKS, POLICIES, SOCIAL_LINKS, SUPPORT } from '@/data/site';
import type { CategoryId } from '@/types/catalog';

const SOCIAL_ICONS = {
  Facebook,
  Instagram,
  YouTube: Youtube,
} as const;

interface FooterProps {
  onSelectCategory: (id: CategoryId) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const [policy, setPolicy] = useState<keyof typeof POLICIES | null>(null);
  const closePolicy = () => setPolicy(null);

  return (
    <footer id="support" className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-[1.5] text-ink-400">
              TEXON is a premium online destination for fashion, footwear, beauty and lifestyle essentials, curated
              for Bangladesh.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-800 text-ink-200 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterColumn title="Popular Categories">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    className="text-left text-sm transition hover:text-brand-400"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Help & Support">
              {FOOTER_HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => setPolicy('privacy')} className="text-left text-sm transition hover:text-brand-400">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setPolicy('returns')} className="text-left text-sm transition hover:text-brand-400">
                  Return Policy
                </button>
              </li>
            </FooterColumn>

            <FooterColumn title="Contact Us">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:${SUPPORT.phoneDisplay.replace(/\s|-/g, '')}`} className="transition hover:text-white">
                  {SUPPORT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${SUPPORT.email}`} className="break-all transition hover:text-white">
                  {SUPPORT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="pt-1 text-xs text-ink-500">{SUPPORT.hours}</li>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TEXON Online. All rights reserved.</p>
          <p>Demo preview: sample products and reviews only.</p>
        </div>
      </div>

      <Modal open={policy !== null} onClose={closePolicy} title={policy ? POLICIES[policy].title : ''} size="md">
        <p className="text-sm leading-[1.5] text-ink-600">{policy && POLICIES[policy].body}</p>
      </Modal>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-800 py-5 sm:border-none sm:py-0 lg:border-none">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left sm:pointer-events-none"
      >
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">{title}</span>
        <ChevronDown className={`h-4 w-4 text-ink-400 transition-transform duration-300 sm:hidden ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul className={`mt-4 space-y-3 ${open ? 'block' : 'hidden'} sm:block`}>{children}</ul>
    </div>
  );
}
