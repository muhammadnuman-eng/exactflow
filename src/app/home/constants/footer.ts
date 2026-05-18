export interface FooterLink {
  label: string;
  href: string;
}

export const QUICK_LINKS: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Agents', href: '/agents' },
  { label: 'Contact Us', href: '/contact' },
];

export const PRODUCT_LINKS: FooterLink[] = [
  { label: 'AI Support Agent', href: '/products/support' },
  { label: 'AI Sales Agent', href: '/products/sales' },
  { label: 'AI Purchase Agent', href: '/products/purchase' },
  { label: 'AI Operational Agent', href: '/products/operational' },
  { label: 'AI HR Agent', href: '/products/hr' },
  { label: 'AI Financial Agent', href: '/products/financial' },
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Cookie', href: '/legal/cookie' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
  { label: 'Terms of Use', href: '/legal/terms-of-use' },
  { label: 'Terms and Conditions', href: '/legal/terms-conditions' },
  { label: 'Refund & Returns Policy', href: '/legal/refund-returns' },
  { label: 'AI Usage Disclosure', href: '/legal/ai-disclosure' },
  { label: 'Acceptable Use Policy', href: '/legal/acceptable-use' },
  { label: 'Cancellation & Cooling-Off Policy', href: '/legal/cancellation' },
];