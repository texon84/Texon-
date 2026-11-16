import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { FEATURES } from '@/data/catalog';

export default function WhyChoose() {
  return (
    <section id="why-texon" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The TEXON Promise"
            title="Why Choose TEXON"
            description="We pair considered products with the service you expect from a premium brand."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 90} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-ink-50 p-6 transition duration-500 hover:-translate-y-1 hover:border-brand-500 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10 sm:p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-ink-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-[1.5] text-ink-600">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
