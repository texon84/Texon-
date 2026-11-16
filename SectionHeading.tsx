interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-600">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
      {description && (
        <p className={`mt-3 text-base leading-[1.5] ${isDark ? 'text-ink-300' : 'text-ink-600'}`}>{description}</p>
      )}
    </div>
  );
}
