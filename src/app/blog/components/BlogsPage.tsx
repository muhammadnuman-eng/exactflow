'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Chat from '@/app/components/chat/chat';
import { BlogCard } from './BlogCard';
import { BlogFilter } from './BlogFilter';
import {
  filterPostsByCategory,
  getActiveCategoryFromParam,
} from '../constants/blogs';

export function BlogsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const activeCategory = getActiveCategoryFromParam(categoryParam);

  const filteredPosts = useMemo(
    () => filterPostsByCategory(activeCategory),
    [activeCategory],
  );

  return (
    <div className="w-full bg-white">
      <section
        id="blogs"
        className="mx-auto max-w-6xl px-4 py-16 pt-32 md:px-4"
      >
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h1 className="blogs_textPrimary text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Latest Blogs
          </h1>
        </div>

        <BlogFilter activeCategory={activeCategory} />

        <div className="mx-auto max-w-[1200px] px-3 py-5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="blogs_textMuted mt-16 text-center text-base">
              No articles found in this category.
            </p>
          )}
        </div>
      </section>

      <Chat />
    </div>
  );
}
