import { useState, type ReactNode } from 'react';
import { ArrowUp, Headset, Mail, MessageCircle, Phone } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { SUPPORT } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const WHATSAPP_URL = `https://wa.me/${SUPPORT.whatsappNumber}?text=${encodeURIComponent('Hi TEXON, I need help with a product.')}`;

export default function FloatingSupport() {
  const scrollY = useScrollPosition();
  const [supportOpen, setSupportOpen] = useState(false);
  const showTop = scrollY > 600;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg ring-1 ring-ink-200 transition-all duration-300 hover:bg-ink-950 hover:text-white ${
            showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        <FloatingButton
          label="Customer support"
          onClick={() => setSupportOpen(true)}
          className="bg-brand-500 text-white shadow-brand-500/40 hover:bg-brand-600"
        >
          <Headset className="h-5 w-5" />
        </FloatingButton>

        <FloatingButton
          label="Messenger"
          href={SUPPORT.messengerUrl}
          className="bg-[#0084FF] text-white shadow-blue-500/30 hover:brightness-110"
        >
          <MessageCircle className="h-5 w-5" />
        </FloatingButton>

        <FloatingButton
          label="WhatsApp"
          href={WHATSAPP_URL}
          className="bg-[#25D366] text-white shadow-green-500/30 hover:brightness-110"
        >
          <Phone className="h-5 w-5" />
        </FloatingButton>
      </div>

      <Modal open={supportOpen} onClose={() => setSupportOpen(false)} title="Customer Support">
        <div className="space-y-4">
          <p className="text-sm leading-[1.5] text-ink-600">
            Sizing, delivery and returns questions are answered by our team. Choose the channel that suits you.
          </p>
          <SupportRow icon={<Phone className="h-4 w-4" />} label="Call us" value={SUPPORT.phoneDisplay} href={`tel:${SUPPORT.phoneDisplay.replace(/\s|-/g, '')}`} />
          <SupportRow icon={<Mail className="h-4 w-4" />} label="Email" value={SUPPORT.email} href={`mailto:${SUPPORT.email}`} />
          <SupportRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Chat with our team" href={WHATSAPP_URL} />
          <p className="pt-2 text-xs font-semibold text-ink-500">Hours: {SUPPORT.hours}</p>
        </div>
      </Modal>
    </>
  );
}

interface FloatingButtonProps {
  label: string;
  className: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

function FloatingButton({ label, className, children, href, onClick }: FloatingButtonProps) {
  const content = (
    <>
      <span className="pointer-events-none whitespace-nowrap rounded-full bg-ink-950 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 max-sm:hidden">
        {label}
      </span>
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition duration-300 hover:-translate-y-0.5 sm:h-14 sm:w-14 ${className}`}
      >
        {children}
      </span>
    </>
  );

  const classes = 'group flex items-center gap-3';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={classes}>
      {content}
    </button>
  );
}

interface SupportRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

function SupportRow({ icon, label, value, href }: SupportRowProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-ink-200 p-4 transition hover:border-brand-500 hover:bg-brand-50"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 text-white">{icon}</span>
      <span className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-500">{label}</span>
        <span className="text-sm font-bold text-ink-950">{value}</span>
      </span>
    </a>
  );
}
