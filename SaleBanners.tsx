import { ArrowRight } from 'lucide-react';
import { PROMO_BANNERS } from '@/data/catalog';
import type { CategoryId } from '@/types/catalog';

interface SaleBannersProps {
  onSelectCategory: (id: CategoryId) => void;
}

export default function SaleBanners({ onSelectCategory }: SaleBannersProps) {
  return (
    <section aria-label="Promotions" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {PROMO_BANNERS.map((banner) => {
          const isOrange = banner.tone === 'orange';
          return (
            <button
              key={banner.id}
              type="button"
              onClick={() => onSelectCategory(banner.category)}
              className="group relative isolate flex min-h-[200px] overflow-hidden rounded-3xl text-left sm:min-h-[240px]"
            >
              <img
                src={banner.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 -z-10 ${
                  isOrange
                    ? 'bg-gradient-to-r from-brand-700/95 via-brand-600/80 to-brand-500/40'
                    : 'bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/20'
                }`}
              />
              <div className="flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/80">{banner.eyebrow}</span>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">{banner.title}</h2>
                <p className="mt-2 max-w-sm text-sm leading-[1.5] text-white/85">{banner.subtitle}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink-950 transition group-hover:gap-3">
                  {banner.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
