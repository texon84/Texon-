export const NAV_LINKS = [
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Offers', href: '#offers' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Reviews', href: '#reviews' },
] as const;

export const SUPPORT = {
  whatsappNumber: '8801700000000',
  messengerUrl: 'https://m.me/texononline',
  phoneDisplay: '+880 1700-000000',
  email: 'care@texononline.com',
  hours: 'Sat - Thu, 10:00 AM - 8:00 PM',
} as const;

export const FOOTER_HELP_LINKS = [
  { label: 'Size Guide', href: '#all-products' },
  { label: 'Delivery Information', href: '#why-texon' },
  { label: 'Track Your Order', href: '#why-texon' },
  { label: 'Contact Support', href: '#support' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
] as const;

export const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    body: 'TEXON Online collects only the details needed to serve you: name, phone, delivery address and email. We never sell your personal information. Full policy text will be published before checkout opens.',
  },
  returns: {
    title: 'Return Policy',
    body: 'Unworn items with original tags can be returned within 7 days of delivery. Beauty products must be unopened. Our support team will guide you through every step. Full policy text will be published before checkout opens.',
  },
} as const;
