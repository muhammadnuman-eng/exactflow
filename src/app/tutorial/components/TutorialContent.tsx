'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TUTORIAL_TABS, type TutorialVideo } from '../constants/tutorials';
import { TutorialFeatured } from './TutorialFeatured';
import { TutorialSearch } from './TutorialSearch';
import { TutorialTabs } from './TutorialTabs';
import { TutorialVideoCard } from './TutorialVideoCard';

const SCROLL_OFFSET = 72;
const SECTION_SCROLL_MARGIN = 80;

function filterVideos(videos: TutorialVideo[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return videos;
  return videos.filter(
    (video) =>
      video.title.toLowerCase().includes(normalized) ||
      video.description.toLowerCase().includes(normalized),
  );
} 

export function TutorialContent() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const filteredTabs = useMemo(
    () =>
      TUTORIAL_TABS.map((tab) => ({
        ...tab,
        videos: filterVideos(tab.videos, query),
      })),
    [query],
  );

  const scrollToSection = useCallback((index: number) => {
    setActiveTab(index);
    const section = sectionRefs.current[index];
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex: number | null = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-section-index'));
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > bestRatio &&
            !Number.isNaN(index)
          ) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        });
        if (bestIndex !== null) setActiveTab(bestIndex);
      },
      {
        root: null,
        rootMargin: `-${SCROLL_OFFSET}px 0px -40% 0px`,
        threshold: [0, 0.15, 0.5, 1],
      },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tutorial" className="mx-auto max-w-6xl bg-white px-4 py-16 pt-32 md:px-4">
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h2
          id="features-heading"
          className="text-6xl font-bold text-[#101828] sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          }}
        >
          ExactFlow Step-by-Step Video Tutorials
        </h2>
        <div className="mt-6 flex max-w-2xl flex-col gap-4">
          <p
            className="text-2xl font-medium text-[#101828]"
            style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
          >
            Master every ExactFlow feature with short, practical walkthrough videos.
          </p>
        </div>
      </div>

      <TutorialSearch value={query} onChange={setQuery} />

      <TutorialFeatured />

      <TutorialTabs tabs={TUTORIAL_TABS} activeIndex={activeTab} onTabChange={scrollToSection} />

      <div className="flex flex-col gap-12">
        {filteredTabs.slice(0, 1).map((tab) => (
            <section
              key={tab.id}
              id={tab.id}
              data-section-index={0}
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              style={{ scrollMarginTop: SECTION_SCROLL_MARGIN }}
            >
              <h2
                className="text-2xl font-bold text-[#101828] sm:text-3xl md:text-4xl lg:text-4xl"
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                }}
              >
                {tab.sectionTitle}
              </h2>

              <div className="mx-auto max-w-[1200px] px-3 py-5">
                {tab.videos.length === 0 ? (
                  <p className="text-center text-sm text-gray-600">
                    No tutorials match your search.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {tab.videos.map((video) => (
                      <TutorialVideoCard key={video.id} video={video} />
                    ))}
                  </div>
                )}
              </div>
            </section>
        ))}
      </div>
    </section>
  );
}
