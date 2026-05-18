export interface GuideItem {
  id: string;
  title: string;
  href: string;
  icon: string;
}
 
export const GUIDE_ITEMS: GuideItem[] = [
  {
    id: 'authentication-access',
    title: 'Authentication & Access',
    href: '/guide/authentication-access',
    icon: '/assets/guide/fingerprint.svg',
  },
  {
    id: 'core-navigation-dashboard',
    title: 'Core Navigation & Dashboard',
    href: '/guide/core-navigation-dashboard',
    icon: '/assets/guide/dashboard.svg',
  },
  {
    id: 'product-catalog-management',
    title: 'Product & Catalog Management',
    href: '/guide/product-catalog-management',
    icon: '/assets/guide/product.svg',
  },
  {
    id: 'order-management',
    title: 'Order Management',
    href: '/guide/order-management',
    icon: '/assets/guide/order.svg',
  },
  {
    id: 'support-agent-management',
    title: 'Support Agent Management',
    href: '/guide/support-agent-management',
    icon: '/assets/guide/Supportagent.svg',
  },
  {
    id: 'sales-agent-managment',
    title: 'Sales Agent Managment',
    href: '/guide/sales-agent-managment',
    icon: '/assets/guide/saleagent.svg',
  },
  {
    id: 'purchase-agent-managment',
    title: 'Purchase Agent Managment',
    href: '/guide/purchase-agent-managment',
    icon: '/assets/guide/purchase.svg',
  },
  {
    id: 'financial-agent',
    title: 'Financial Agent',
    href: '/guide/financial-agent',
    icon: '/assets/guide/financial.svg',
  },
  {
    id: 'operational-agent',
    title: 'Operational Agent',
    href: '/guide/operational-agent',
    icon: '/assets/guide/operational.svg',
  },
  {
    id: 'hr-agent',
    title: 'HR Agent',
    href: '/guide/hr-agent',
    icon: '/assets/guide/other.svg',
  },
  {
    id: 'logs-integrations',
    title: 'Logs & Integrations',
    href: '/guide/logs-integrations',
    icon: '/assets/guide/other.svg',
  },
];
