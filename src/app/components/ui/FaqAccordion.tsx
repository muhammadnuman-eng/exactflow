'use client';

import type { ReactNode } from 'react';

export interface FaqItem {
  id: number | string;
  question: ReactNode;
  answer: ReactNode;
}

export interface FaqAccordionProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const FaqAccordion = ({
  item,
  isOpen,
  onToggle,
  className = '',
}: FaqAccordionProps) => {
  const panelId = `faq-panel-${item.id}`;

  return (
    <div className={`w-full bg-white shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${className}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full pt-5 pb-5 px-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50/40 transition-colors cursor-pointer group"
      >
        <span className="text-sm md:text-[15px] font-semibold text-[#2e263de6]">
          {item.question}
        </span>

        <span className="shrink-0 text-gray-500">
          <svg
            className={`w-5 h-5 transform transition-transform duration-231 ease-in-out ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-231 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-6 text-xs md:text-[15px] font-[Inter] text-gray-600 leading-relaxed border-t border-gray-50 text-left">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
