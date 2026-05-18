export const NAV_LINKS = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guide', href: '/guide', hasDropdown: true, dropdownKey: 'guide' as const },
  { label: 'Agents', href: '/agents', hasDropdown: true, dropdownKey: 'agents' as const },
];

export interface NavAgentItem {
  id: string;
  name: string;
  role: string;
  href: string;
  image: string;
}

export const NAV_GUIDE_ITEMS = [
  { id: 'guide', label: 'Guide Books', href: '/guide' },
  { id: 'tutorial', label: 'Tutorial', href: '/tutorial' },
] as const;

/** Two-column layout matching production nav (col1 | col2). */
export const NAV_AGENT_COLUMNS: NavAgentItem[][] = [
  [
    {
      id: 'axel-agent',
      name: 'Axel',
      role: 'Support Agent',
      href: '/axel-ai-agent',
      image: '/assets/contact-images/axel.avif',
    },
    {
      id: 'tesa-agent',
      name: 'Tesa',
      role: 'Purchase Agent',
      href: '/tesa-ai-agent',
      image: '/assets/contact-images/tessa.avif',
    },
    {
      id: 'zane-agent',
      name: 'Zane',
      role: 'Sales Agent',
      href: '/zane-ai-agent',
      image: '/assets/contact-images/zane.avif',
    },
  ],
  [
    {
      id: 'kai-agent',
      name: 'Kai',
      role: 'Operational Agent',
      href: '/kai-ai-agent',
      image: '/assets/contact-images/kai.avif',
    },
    {
      id: 'raya-agent',
      name: 'Raya',
      role: 'Financial Agent',
      href: '/raya-ai-agent',
      image: '/assets/contact-images/raya.avif',
    },
    {
      id: 'nia-agent',
      name: 'Nia',
      role: 'HR Agent',
      href: '/nia-ai-agent',
      image: '/assets/contact-images/nia.avif',
    },
  ],
];