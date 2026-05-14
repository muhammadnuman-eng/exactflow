import { Agent } from '../types/agent';

export const AGENTS_DATA: Agent[] = [
  {
    id: 'tesa',
    name: 'Tesa',
    role: 'Purchase Assistant',

    image: '/assets/homeAgentsImage/Tesa.avif',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    cardBg: 'bg-gradient-to-r from-rose-100 via-amber-50 to-rose-100',
    stat: { label: 'Weekly Orders', value: '1.2k', change: '+38%' },
  },
  {
    id: 'zane',
    name: 'Zane',
    role: 'Sales Assistant',
   
    image: '/assets/homeAgentsImage/Zane.avif',
    badgeColor: 'bg-gradient-to-r from-sky-500 to-blue-600',
    cardBg: 'bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100',
    stat: { label: 'Stock Health', value: '98%', change: '+12%' },
  },
  {
    id: 'nia',
    name: 'Nia',
    role: 'HR Assistant',
   
    image: '/assets/homeAgentsImage/Nia.avif',
    badgeColor: 'bg-gradient-to-r from-violet-500 to-blue-500',
    cardBg: 'bg-gradient-to-r from-amber-100 via-rose-50 to-rose-100',
    stat: { label: 'Weekly Profit', value: '$25.6k', change: '+42%' },
  },
  {
    id: 'axel',
    name: 'Axel',
    role: 'Support Agent',
   
    image: '/assets/homeAgentsImage/Axel.avif',
    badgeColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    cardBg: 'bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100',
    stat: { label: 'Conversion', value: '34%', change: '+18%' },
  },
  {
    id: 'raya',
    name: 'Raya',
    role: 'Financial Assistant',
   
    image: '/assets/homeAgentsImage/Raya.avif',
    badgeColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
    cardBg: 'bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100',
    stat: { label: 'CSAT Score', value: '4.9', change: '+0.3' },
  },
  {
    id: 'kai',
    name: 'Kai',
    role: 'Operational Assistant',
   
    image: '/assets/homeAgentsImage/Kai.avif',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
    cardBg: 'bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100',
    stat: { label: 'Net Margin', value: '$48k', change: '+22%' },
  },
];
