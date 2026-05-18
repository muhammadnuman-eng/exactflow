import Link from 'next/link';import { BLOG_FILTERS } from '../constants/blogs';

interface BlogFilterProps {
  activeCategory: string | null;
}

export function BlogFilter({ activeCategory }: BlogFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4 px-4">
      {BLOG_FILTERS.map((filter) => {
        const isActive =
          filter.categoryParam === null
            ? activeCategory === null
            : activeCategory === filter.categoryParam;

        const href = filter.categoryParam
          ? `/blog?category=${encodeURIComponent(filter.categoryParam)}`
          : '/blog';

        return (
          <Link
            key={filter.id}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'rounded-full border-2 border-[#db1521] px-6 py-2 text-sm font-medium transition-colors sm:text-base',
              isActive
                ? 'bg-[#db1521] text-white'
                : 'bg-transparent text-[#db1521] hover:bg-[#db1521] hover:text-white',
            ].join(' ')}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
