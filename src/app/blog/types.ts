export type BlogCategory =
  | 'Finance Automation'
  | 'Ecommerce'
  | 'Sales'
  | 'Marketing'
  | 'Technology';

export type BlogFilterId =
  | 'all'
  | 'finance-automation'
  | 'ecommerce'
  | 'sales'
  | 'marketing'
  | 'technology';

export interface BlogFilterOption {
  id: BlogFilterId;
  label: string;
  categoryParam: string | null;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  image: string;
  imageAlt: string;
  author?: string;
  publishedAt?: string;
}
