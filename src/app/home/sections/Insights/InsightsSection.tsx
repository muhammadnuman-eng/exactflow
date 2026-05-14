import React from 'react';
import Link from 'next/link';
import { INSIGHTS_DATA } from '../../constants/insights';
import { FeaturedCard } from './FeaturedCard';
import { BlogRowCard } from './BlogRowCard';

export const InsightsSection: React.FC = () => {
  return (
    <section id="blog" className="py-10  md:py-8 w-full px-4 md:px-8 " role="region" aria-labelledby="blog-heading">
      <div className="max-w-[1130px] mx-auto flex flex-col gap-6 pb-2">
        
        {/* Main Section Headings Wrapper */}
        <div className="flex flex-col items-start justify-center text-center">
          <h2 id="blog-heading" className="text-xl md:text-[48px]  text-[#423B50] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            <span>Latest Insights and</span>
            <span className="font-bold">Industry Updates</span>
          </h2>
        </div>

        {/* Structural Grid Configuration row mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block Assembly */}
          <FeaturedCard post={INSIGHTS_DATA.featured} />

          {/* Right Block Stack List Assembly */}
          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            {INSIGHTS_DATA.recent.map((post) => (
              <BlogRowCard key={post.id} post={post} />
            ))}

            {/* Outlined Custom See More Button element line */}
            <div className="flex justify-center w-full mt-2">
              <Link 
                href="/en/blogs" 
                className="text-base md:text-lg font-medium bg-transparent hover:bg-[#db1521] border-[#db1521] border-2 text-[#db1521] hover:text-white rounded-full py-2.5 px-8 text-center transition-all duration-300 w-full sm:w-fit"
              >
                See More Blogs
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};