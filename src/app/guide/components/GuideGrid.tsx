'use client';

import { useMemo, useState } from 'react';
import { GUIDE_ITEMS } from '../constants/guides';
import { GuideCard } from './GuideCard';
import { GuideSearch } from './GuideSearch';

export function GuideGrid() {
  const [query, setQuery] = useState('');

  const filteredGuides = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return GUIDE_ITEMS;
    return GUIDE_ITEMS.filter((guide) =>
      guide.title.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <>
      <GuideSearch value={query} onChange={setQuery} />

      <div className="mx-auto max-w-[1200px] px-3 py-8 mt-27">
        {filteredGuides.length === 0 ? (
          <p className="text-center text-base text-[#666]">No guides match your search.</p>
        ) : (
          <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}