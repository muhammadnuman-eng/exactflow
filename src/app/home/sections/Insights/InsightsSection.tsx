import Link from 'next/link';
import { INSIGHTS_DATA } from '../../constants/insights';
import { FeaturedCard } from './FeaturedCard';
import { BlogRowCard } from './BlogRowCard';

export function InsightsSection() {
  return (
    <section
      id="blog"
      className="insights_sectionBg w-full py-10"
      role="region"
      aria-labelledby="blog-heading"
    >
      <div className="insights_layoutSpacing flex flex-col gap-6">
        <div className="flex flex-col items-start justify-center px-4 text-center">
        <h2 id="blog-heading" className="text-xl md:text-[48px]  text-[#423B50] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            Latest Insights and Industry Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <FeaturedCard post={INSIGHTS_DATA.featured} />

          <div className="flex w-full flex-col gap-4 lg:col-span-4">
            {INSIGHTS_DATA.recent.map((post) => (
              <BlogRowCard key={post.id} post={post} />
            ))}

            <div className="flex w-full justify-center">
              <Link
                href="/blog"
                className="w-fit rounded-full border-2 border-[#db1521] bg-transparent p-2 text-lg font-medium text-[#db1521] transition-colors hover:bg-[#db1521] hover:text-white sm:px-8 sm:py-3"
              >
                See More Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
