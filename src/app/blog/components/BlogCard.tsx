import Image from 'next/image';
import Link from 'next/link';
import type { BlogArticle } from '../types';

interface BlogCardProps {
  post: BlogArticle;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blogs_cardBg flex h-full flex-col rounded-2xl border border-black/5 p-4 shadow-xl dark:border-white/10">
      <div className="relative h-[150px] overflow-hidden rounded-2xl bg-[#FFFFFF]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-[center_top]"
        />
      </div>

      <div className="flex-1 pt-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-[#db1521] px-2.5 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <p className="blogs_textMuted text-xs">{post.readTime}</p>
        </div>

        <h2 className="blogs_textPrimary text-lg font-semibold">{post.title}</h2>

        <p className="blogs_textMuted mt-2 text-sm leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="pt-4">
        <Link
          href={`/blog/${post.slug}`}
          aria-label={`Read more: ${post.title}`}
          className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#db1521] px-4 py-3 text-sm font-medium text-[#db1521] transition-colors hover:bg-[#db1521] hover:text-white"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

