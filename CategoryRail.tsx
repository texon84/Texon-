import ... from "./catalog";
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import type { CategoryId } from '@/types/catalog';

interface CategoryRailProps {
  onSelectCategory: (id: CategoryId) => void;
}

export default function CategoryRail({ onSelectCategory }: CategoryRailProps) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow="Collections" title="Featured Categories" description="Explore our edits, from everyday essentials to statement pieces." />
      </Reveal>

      <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:px-0 lg:grid-cols-6">
        {CATEGORIES.map((category, index) => (
          <Reveal key={category.id} delay={index * 80} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className="group flex w-28 flex-col items-center gap-3 sm:w-auto"
            >
              <span className="relative h-28 w-28 overflow-hidden rounded-full bg-white p-1.5 shadow-md ring-1 ring-ink-200 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-brand-500 sm:h-auto sm:w-full sm:aspect-square">
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover transition duration-700 group-hover:scale-110"
                />
              </span>
              <span className="text-center text-xs font-bold leading-snug text-ink-900 transition group-hover:text-brand-600 sm:text-sm">
                {category.name}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
