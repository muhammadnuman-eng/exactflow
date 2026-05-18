import Image from 'next/image';
import type { BlogArticle } from '../types';

interface BlogPostHeroProps {
  post: BlogArticle;
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  const author = post.author ?? 'ExactFlow Team';
  const publishedAt = post.publishedAt ?? '';

  return (
    <header className="blog-post-hero">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white sm:aspect-[2.15/1]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover object-center"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center rounded-full bg-[#db1521] px-2.5 py-1.5 text-[13px] font-Inter  font-[500] leading-none text-white">
          {post.category}
        </span>
        <span className="text-[13px] font-normal font-Inter  font-[500] text-[#2e263db3]">{post.readTime}</span>
      </div>
      <h1 id="blog-heading" className="text-xl md:text-[28px]  text-[#423B50] leading-[1.5] mt-6 font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px]  font-Inter tracking-normal  font-[500] text-[#757575]">
        <span>By {author}</span>
        {publishedAt ? <time dateTime={publishedAt}>{publishedAt}</time> : null}
      </div>
    </header>
  );
}
