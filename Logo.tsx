import { Hexagon } from 'lucide-react';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export default function Logo({ tone = 'dark' }: LogoProps) {
  const wordmark = tone === 'dark' ? 'text-ink-950' : 'text-white';
  const subline = tone === 'dark' ? 'text-ink-500' : 'text-ink-400';

  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="TEXON Online home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md shadow-brand-500/30 transition-transform duration-500 group-hover:rotate-90">
        <Hexagon className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-[0.22em] ${wordmark}`}>TEXON</span>
        <span className={`mt-1 text-[9px] font-semibold tracking-[0.3em] ${subline}`}>ONLINE</span>
      </span>
    </a>
  );
}
