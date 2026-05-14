import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../types/insight';

interface FeaturedCardProps {
  post: BlogPost;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ post }) => {
  return (
    <Link 
      href="/en/blogs" 
      className="lg:col-span-8 cursor-pointer relative group overflow-hidden rounded-2xl block h-[400px] md:h-[500px]"
    >
      {/* Background Graphic Image Optimized */}
      <div className="absolute inset-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-700 "
          priority
        />
      </div>

      {/* Shadow overlay gradient layout line */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      {/* Floating Meta text container */}
      <div className="absolute bottom-0 p-6 md:p-8 w-full text-left transition-transform duration-700 group-hover:scale-[1.01]">
        <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#061456] mb-4 dark:bg-slate-900/80 dark:text-white/90 ring-1 ring-black/5 dark:ring-white/10">
          {post.category}
        </span>
        <h3 className="text-white font-bold mb-4 text-2xl sm:text-3xl leading-snug">
          {post.title}
        </h3>
        {post.author && post.date && (
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>
        )}
      </div>
    </Link>
  );
};