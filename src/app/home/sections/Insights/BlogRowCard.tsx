import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '../../types/insight';

interface BlogRowCardProps {
  post: BlogPost;
}

export function BlogRowCard({ post }: BlogRowCardProps) {
  return (
    <Link
      href="/blog"
      className="group block rounded-2xl border border-black/5 bg-white"
    >
      <div className="flex items-center gap-4 p-4 transition-transform duration-700 group-hover:scale-[1.01]">
        <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <span className="insights_chipBg insights_textPrimary mb-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold">
            {post.category}
          </span>
          <h3 className="insights_textPrimary line-clamp-2 font-semibold leading-snug">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
