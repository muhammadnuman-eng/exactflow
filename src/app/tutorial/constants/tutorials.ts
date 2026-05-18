export interface TutorialVideo {
  id: string;
  title: string;
  duration: string;
  description: string;
  youtubeId: string;
}

export interface TutorialTab {
  id: string;
  label: string;
  icon: string;
  sectionTitle: string;
  videos: TutorialVideo[];
}
 
export const FEATURED_VIDEO: TutorialVideo = {
  id: 'meet-agents',
  title: 'Meet ExactFlow Agents',
  duration: '',
  description:
    'Learn how ExactFlow Agents help automate tasks, reduce manual work, and improve efficiency.',
  youtubeId: 'd-cjY2slpGo',
};

const GETTING_STARTED_VIDEOS: TutorialVideo[] = [
  {
    id: 'account-setup',
    title: 'Account Setup and Registration',
    duration: '1:00 mins',
    description:
      'Quickly create your ExactFlow account and set up your business to start managing eCommerce operations, inventory, and orders from one AI-powered platform.',
    youtubeId: 'XSGELeKIGXs',
  },
  {
    id: 'secure-login',
    title: 'Secure Login Access',
    duration: '1:19 mins',
    description:
      'Securely access your ExactFlow dashboard to monitor sales, orders, inventory, and AI insights across all connected sales channels.',
    youtubeId: 'RRLtPulgYSc',
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview and Insights',
    duration: '2:53 mins',
    description:
      'A real-time overview of sales performance, order activity, operational alerts, and AI insights to help you make faster business decisions.',
    youtubeId: 'p7v4ibtdmy8',
  },
  {
    id: 'product-management',
    title: 'Product Management and Control',
    duration: '3:19 mins',
    description:
      'Manage products, pricing, and inventory across multiple marketplaces with real-time sync and automated stock control.',
    youtubeId: '2MXb4qND2Sw',
  },
  {
    id: 'order-management',
    title: 'Order Management and Processing',
    duration: '3:58 mins',
    description:
      'Track, manage, and fulfill orders across multiple channels while maintaining accurate visibility of shipping and delivery.',
    youtubeId: '1yePMX-b6oo?si=m8FuXSLgVlWhijlY',
  },
  {
    id: 'support-agent',
    title: 'Support Agent and Assistance',
    duration: '3:31 mins',
    description:
      'Manage customer conversations, tickets, and support workflows using AI-powered automation and smart response tools.',
    youtubeId: 'EeKOpa-YOLg',
  },
  {
    id: 'sales-analytics',
    title: 'Sales Analytics and Insights',
    duration: '2:56 mins',
    description:
      'Analyze sales performance, track revenue trends, and optimize pricing and product strategy using real-time marketplace data.',
    youtubeId: '8Nk1OcUzlfk',
  },
  {
    id: 'purchase-planning',
    title: 'Purchase Planning and Forecasting',
    duration: '2:42 mins',
    description:
      'Plan your inventory smarter with AI-driven demand forecasting, SKU risk detection, and automated purchase decision insights.',
    youtubeId: 'NGp_k7aVb4c',
  },
  {
    id: 'financial-management',
    title: 'Financial Management and Tracking',
    duration: '3:19 mins',
    description:
      'Track revenue, costs, profit margins, and cash flow with real-time financial visibility across all sales channels.',
    youtubeId: '0JE_hKodDNM',
  },
  {
    id: 'operations-management',
    title: 'Operations Management and Automation',
    duration: '5:39 mins',
    description:
      'Automate workflows, manage daily operations, and track execution performance across your entire eCommerce business.',
    youtubeId: 'mydt7DLgxak',
  },
  {
    id: 'hr-management',
    title: 'HR Management and Workforce',
    duration: '2:37 mins',
    description:
      'Manage hiring, onboarding, attendance, and employee performance from one centralized workforce management system.',
    youtubeId: 'AvA7mEPr9VQ',
  },
  {
    id: 'system-logs',
    title: 'System Logs and Monitoring',
    duration: '1:05 mins',
    description:
      'Monitor system activity, user actions, and technical events for security, auditing, and troubleshooting.',
    youtubeId: 'Te3xsNcux6g',
  },
  {
    id: 'performance-tracking',
    title: 'Performance Tracking and Analysis',
    duration: '2:37 mins',
    description:
      'Track user activity, system performance, and operational metrics to improve productivity and platform efficiency.',
    youtubeId: 'yte5ZuFQoyk',
  },
  {
    id: 'integrations-connectivity',
    title: 'Integrations and Connectivity Options',
    duration: '2:02 mins',
    description:
      'Connect marketplaces, couriers, accounting systems, and tools to sync orders, products, shipments, and financial data automatically.',
    youtubeId: 'IAIxPJ317Nc',
  },
];

export const TUTORIAL_TABS: TutorialTab[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: '/assets/tutorial/getting-started.svg',
    sectionTitle: 'Getting Started',
    videos: GETTING_STARTED_VIDEOS,
  },
  {
    id: 'tutorials',
    label: 'Tutorials',
    icon: '/assets/tutorial/tutorial.svg',
    sectionTitle: 'Tutorials',
    videos: [],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '/assets/tutorial/settings.svg',
    sectionTitle: 'Settings',
    videos: [],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: '/assets/tutorial/integration.svg',
    sectionTitle: 'Integrations',
    videos: [],
  },
];
