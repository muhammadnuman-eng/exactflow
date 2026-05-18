import Chat from '@/app/components/chat/chat';
import { BlogCard } from './components/BlogCard';
import { BlogFilter } from './components/BlogFilter';
import {
  filterPostsByCategory,
  getActiveCategoryFromParam,
} from './constants/blogs';

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const activeCategory = getActiveCategoryFromParam(category);
  const filteredPosts = filterPostsByCategory(activeCategory);

  return (
    <div className="w-full bg-[#F4F5FA]">
      <section
        id="blogs"
        className="mx-auto max-w-6xl px-4 blogs_pageBg py-16 pt-32 md:px-4"
      >
        <div className="mb-12 flex flex-col items-center  justify-center text-center">
        <h2
          id="blog-heading"
          className="text-xl font-[600] leading-[1.1] tracking-normal text-[#423B50] md:text-[48px]"
          style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
        >
          Latest Blogs
        </h2>
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
