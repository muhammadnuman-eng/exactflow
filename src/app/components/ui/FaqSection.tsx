'use client';

import { useState, type ReactNode } from 'react';
import { FaqAccordion, type FaqItem } from './FaqAccordion';

export interface FaqSectionProps {
  items: FaqItem[];
  title?: ReactNode;
  description?: ReactNode;
  sectionId?: string;
  headingId?: string;
  defaultOpenId?: FaqItem['id'] | null;
  className?: string;
}

export const FaqSection = ({
  items,
  title = 'Frequently Asked Questions',
  description,
  sectionId = 'faq',
  headingId = 'faq-heading',
  defaultOpenId = null,
  className = '',
}: FaqSectionProps) => {
  const [openId, setOpenId] = useState<FaqItem['id'] | null>(defaultOpenId);

  const handleToggle = (id: FaqItem['id']) => {
    setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
  };

  return (
    <section
      id={sectionId}
      className={`w-full py-16 md:py-12 bg-[#F4F5FA] px-4 md:px-8 ${className}`}
      role="region"
      aria-labelledby={title ? headingId : undefined}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 items-center">
        {(title || description) && (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl">
            {title && (
              <h2
                id={headingId}
                className="text-xl md:text-[48px] mb-2 text-[#061456] leading-[1.1] font-semibold tracking-normal"
                style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
              >
                {title}
              </h2>
            )}

            {description && (
              <p className="font-medium text-gray-500 text-sm md:text-[15px] max-w-[900px] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="w-full max-w-[700px] flex flex-col gap-2 mx-auto">
          {items.map((item) => (
            <FaqAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type { FaqItem };
