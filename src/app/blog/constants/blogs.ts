import type { BlogArticle, BlogFilterOption } from '../types';

export const BLOG_FILTERS: BlogFilterOption[] = [
  { id: 'all', label: 'All', categoryParam: null },
  { id: 'finance-automation', label: 'Finance Automation', categoryParam: 'Finance Automation' },
  { id: 'ecommerce', label: 'Ecommerce', categoryParam: 'Ecommerce' },
  { id: 'sales', label: 'Sales', categoryParam: 'Sales' },
  { id: 'marketing', label: 'Marketing', categoryParam: 'Marketing' },
  { id: 'technology', label: 'Technology', categoryParam: 'Technology' },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: '1',
    slug: 'ai-agents-for-e-commerce-bookkeeping-and-reporting',
    title: 'How AI Agents Simplify Ecommerce Bookkeeping and Financial Reporting',
    excerpt:
      'Discover how AI agents simplify e-commerce bookkeeping and financial reporting, saving time, improving accuracy, and automating routine accounting tasks.',
    category: 'Finance Automation',
    readTime: '10 min read',
    image: '/assets/blog-images/E-commerceBookkeeping1.avif',
    imageAlt: 'AI ecommerce bookkeeping automation illustration',
    author: 'ExactFlow Team',
    publishedAt: 'May 15, 2026',
  },
  {
    id: '2',
    slug: 'ai-customer-success',
    title: 'AI for Customer Success (KPIs and Tools)',
    excerpt:
      'Learn how AI in customer success improves experience, tracks KPIs, and selects the right tools to boost engagement and performance in e-commerce and B2B.',
    category: 'Ecommerce',
    readTime: '10 min read',
    image: '/assets/blog-images/AI in customer success.jpg',
    imageAlt: 'AI customer success dashboard illustration',
    author: 'ExactFlow Team',
    publishedAt: 'May 13, 2026',
  },
  {
    id: '3',
    slug: 'what-is-roi',
    title: 'What Is ROI? Return on Investment — Meaning and Formulas',
    excerpt:
      'What is an ROI and why does it matter? Learn how ROI is calculated and how to improve returns with practical strategies for e-commerce and B2B growth.',
    category: 'Sales',
    readTime: '10 min read',
    image: '/assets/blog-images/what-is-roi-illustration.jpg',
    imageAlt: 'what is ROI return on investment illustration',
    author: 'ExactFlow Team',
    publishedAt: 'May 11, 2026',
  },
  {
    id: '4',
    slug: 'E-commerce-Automation-Guide-to-AI-Powered-Operations-2026',
    title:
      'E-commerce Automation: The Complete Guide to AI-Powered E-commerce Operations in 2026',
    excerpt:
      'Master e-commerce automation with AI in 2026. Explore how smart automation boosts sales, efficiency, and growth for modern online businesses.',
    category: 'Ecommerce',
    readTime: '15 min read',
    image: '/assets/blog-images/ecommerce-automation-ai-2026.jpg',
    imageAlt: 'AI ecommerce automation system overview illustration',
    author: 'ExactFlow Team',
    publishedAt: 'May 6, 2026',
  },
  {
    id: '5',
    slug: 'how-to-motivate-sales-team',
    title: 'How to Motivate Sales Teams: Strategies for Success',
    excerpt:
      'Learn how to motivate a sales team with proven strategies, incentives, and practical techniques that boost performance and drive consistent results.',
    category: 'Sales',
    readTime: '9 min read',
    image: '/assets/blog-images/sales-team-motivation.jpg',
    imageAlt: 'sales team motivation performance illustration',
    author: 'ExactFlow Team',
    publishedAt: 'May 4, 2026',
  },
  {
    id: '6',
    slug: 'ai-for-sales-leaders',
    title: "A Sales Leader's Guide to AI Strategy",
    excerpt:
      'Discover how to build a winning AI sales strategy. Learn how automation tools and intelligent agents can boost team performance and drive revenue growth.',
    category: 'Sales',
    readTime: '10 min read',
    image: '/assets/blog-images/ai-sales-strategy.jpg',
    imageAlt: 'AI for sales strategy illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 29, 2026',
  },
  {
    id: '7',
    slug: 'Sales-Transformation-for-Predictable-Growth',
    title: 'Sales Transformation: How to Build Predictable Growth',
    excerpt:
      'Learn how sales transformation drives consistent growth. Discover data-driven strategies, modern funnels, and digital approaches to increase revenue.',
    category: 'Sales',
    readTime: '11 min read',
    image: '/assets/blog-images/sales-transformation-growth.jpg',
    imageAlt: 'sales transformation predictable growth illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 27, 2026',
  },
  {
    id: '8',
    slug: 'ai-sales-enablement',
    title: 'AI in Sales Enablement',
    excerpt:
      'Discover how AI enhances sales enablement with smarter tools and strategies. Learn how teams can improve efficiency, accelerate deals, and drive better results.',
    category: 'Sales',
    readTime: '10 min read',
    image: '/assets/blog-images/ai-sales-enablement-illustration.jpg',
    imageAlt: 'ai sales enablement co pilot illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 27, 2026',
  },
  {
    id: '9',
    slug: 'how-to-start-an-online-business',
    title: 'How to Start an Online Business and Find Success',
    excerpt:
      'Learn how to start an online business from idea to first sale. Discover proven strategies, marketing methods, and SEO techniques for long-term growth.',
    category: 'Marketing',
    readTime: '12 min read',
    image: '/assets/blog-images/start-online-business-illustration.jpg',
    imageAlt: 'how to start an online business illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 22, 2026',
  },
  {
    id: '10',
    slug: 'ecommerce-trends',
    title: '15 E-commerce Trends That You Need to Know to Succeed in 2026',
    excerpt:
      'Explore key e-commerce trends shaping 2026 and how they impact online stores. Learn strategies to stand out, improve design, and drive sustainable growth.',
    category: 'Ecommerce',
    readTime: '12 min read',
    image: '/assets/blog-images/ecommerce-trends-2026.jpg',
    imageAlt: 'ai ecommerce automation system illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 20, 2026',
  },
  {
    id: '11',
    slug: 'Dropshipping',
    title: 'The Truth About Dropshipping: The Good, the Bad, and the Misunderstood',
    excerpt:
      'Explore how dropshipping works, its advantages and limitations, and common misconceptions. Learn if this business model is right for your e-commerce brand.',
    category: 'Ecommerce',
    readTime: '10 min read',
    image: '/assets/blog-images/dropshipping-truth-illustration.jpg',
    imageAlt: 'truth about dropshipping hype vs reality illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 17, 2026',
  },
  {
    id: '12',
    slug: 'ai-chatbots-vs-human-support',
    title: 'AI Chatbots vs Human Support: What Drives More Conversions?',
    excerpt:
      'Compare AI chatbots and human support to see what drives better results. Learn how combining both can improve customer experience and increase conversions.',
    category: 'Technology',
    readTime: '12 min read',
    image: '/assets/blog-images/ai-chatbots-vs-human-support.jpg',
    imageAlt: 'AI chatbots vs human customer support illustration',
    author: 'ExactFlow Team',
    publishedAt: 'April 15, 2026',
  },
  {
    id: '13',
    slug: 'e-commerce-marketing-strategy',
    title: 'E-commerce Marketing – How to Promote an Online Store?',
    excerpt:
      'Discover how to build a winning e-commerce marketing strategy that boosts online sales. Learn about SEO, social media, PPC, newsletters, and marketing automation.',
    category: 'Marketing',
    readTime: '12 min read',
    image: '/assets/blog-images/e-commerceBlog2.jpg',
    imageAlt: 'E-commerce Marketing – How to Promote an Online Store?',
    author: 'ExactFlow Team',
    publishedAt: 'April 2, 2026',
  },
  {
    id: '14',
    slug: 'Ecommerce-Customer-Journey',
    title: 'Customer Journey – What Is It and How to Use Customer Knowledge?',
    excerpt:
      'Learn what the e-commerce customer journey is, how to create a customer journey map, and how to use customer insights to enhance experiences and sales.',
    category: 'Marketing',
    readTime: '12 min read',
    image: '/assets/blog-images/e-commerce-customer-journey.jpg',
    imageAlt: 'Customer Journey – What Is It and How to Use Customer Knowledge?',
    author: 'ExactFlow Team',
    publishedAt: 'April 4, 2026',
  },
  {
    id: '15',
    slug: 'onsite-vs-remote-it-support',
    title: 'Onsite & Remote IT Support: Which Is Right for Your Business?',
    excerpt:
      'Discover whether onsite or remote IT support suits your business best. Explore benefits, drawbacks, and how to combine both for maximum efficiency.',
    category: 'Technology',
    readTime: '10 min read',
    image: '/assets/blog-images/on-site-remote-it-support-2.jpg',
    imageAlt: 'Onsite & Remote IT Support: Which Is Right for Your Business?',
    author: 'ExactFlow Team',
    publishedAt: 'April 8, 2026',
  },
];

export function getActiveCategoryFromParam(
  category: string | null | undefined,
): string | null {
  if (!category) return null;
  const match = BLOG_FILTERS.find((f) => f.categoryParam === category);
  return match ? category : null;
}

export function filterPostsByCategory(category: string | null): BlogArticle[] {
  if (!category) return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getBlogPostBySlug(slug: string): BlogArticle | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
