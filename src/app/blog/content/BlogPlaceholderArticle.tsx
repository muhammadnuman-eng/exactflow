import Link from 'next/link';
import type { BlogArticle } from '../types';

interface BlogPlaceholderArticleProps {
  post: BlogArticle;
}

export function BlogPlaceholderArticle({ post }: BlogPlaceholderArticleProps) {
  return (
    <>
      <p>{post.excerpt}</p>
      <p>
        We are preparing the full article for this topic. Browse more insights on our{' '}
        <Link href="/blog" className="!text-blue-600 !underline">
          blog
        </Link>{' '}
        or{' '}
        <Link href="/contact" className="!text-blue-600 !underline">
          contact us
        </Link>{' '}
        to learn how ExactFlow can help your business.
      </p>
    </>
  );
}
