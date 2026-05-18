import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ExactFlow',
  description:
    'Latest insights on AI ecommerce automation, sales, marketing, finance, and technology from ExactFlow.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
