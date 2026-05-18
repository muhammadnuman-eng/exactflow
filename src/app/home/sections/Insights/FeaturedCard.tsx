import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '../../types/insight';

interface FeaturedCardProps {
  post: BlogPost;
}

export function FeaturedCard({ post }: FeaturedCardProps) {
  return (
    <Link
      href="/blog"
      className="group relative block min-h-[400px] cursor-pointer overflow-hidden rounded-2xl lg:col-span-8 md:min-h-[500px]"
    >
      <div className="absolute inset-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-0 w-full p-8 text-left transition-transform duration-700 group-hover:scale-[1.02]">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#061456] ring-1 ring-black/5">
          {post.category}
        </span>
        <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{post.title}</h3>
        {post.author && post.date && (
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
