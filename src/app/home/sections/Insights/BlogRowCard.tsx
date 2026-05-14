import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../types/insight';

interface BlogRowCardProps {
  post: BlogPost;
}

export const BlogRowCard: React.FC<BlogRowCardProps> = ({ post }) => {
  return (
    <Link 
      href="/en/blogs" 
      className="group rounded-2xl border border-black/5 dark:border-white/10 bg-[#6f747f] dark:bg-slate-900/60 block overflow-hidden transition-all duration-300 hover:shadow-sm"
    >
      <div className="flex gap-4 p-4 transition-transform duration-700 group-hover:scale-[1.01] items-center">
        {/* Dynamic Image Box */}
        <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>

        {/* Text Area layout column */}
        <div className="flex-1 text-left">
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold mb-2 text-[#332d43] bg-[#6d707c] dark:bg-slate-800  dark:text-gray-200">
            {post.category}
          </span>
          <h3 className="font-[700] text-sm md:text-[18px] text-[#3c374b] dark:text-white line-clamp-2 leading-snug">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};