import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950">
      <img
        src="https://images.pexels.com/photos/11900126/pexels-photo-11900126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Model in tailored studio styling"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center] opacity-90 animate-scale-in"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/70 to-ink-950/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-4 py-20 sm:min-h-[600px] sm:px-6 lg:min-h-[680px] lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" />
            New Season 2026
          </span>

          <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white animate-fade-up [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            Discover <span className="text-brand-500">Your</span> Style
          </h1>

          <p className="mt-5 max-w-md text-base leading-[1.5] text-ink-200 animate-fade-up [animation-delay:240ms] sm:text-lg">
            Upgrade Your Lifestyle with TEXON
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms]">
            <a
              href="#all-products"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-brand-500/30 transition duration-300 hover:bg-brand-600 active:scale-[0.98]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white hover:text-ink-950"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
