'use client';

import React from 'react';
import Link from 'next/link';
import { FadingFaqItem } from '../../types/faq';

interface FaqAccordionProps {
  item: FadingFaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="w-full bg-white  shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
      {/* Header Panel click triggers */}
      <button
        onClick={onToggle}
        className="w-full pt-4 pb-4 px-6 flex items-center justify-between text-left gap-4 hover:bg-gray-50/40 transition-colors cursor-pointer group"
      >
        <span className="text-sm md:text-[15px]  font-[600] text-[#2e263de6]">
          {item.question}
        </span>
        
        {/* Remix/Hero icon lookalike pure CSS chevron layout */}
        <span className="flex-shrink-0 text-gray-500">
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

      {/* Accordion panel collapsible inner area */}
      <div
        className={`grid transition-all duration-231 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-6  text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-50 text-left">
            <p>
              {item.answer}
              {/* Card ID 5 par special markup link append logic */}
              {item.id === 5 && (
                <>
                  {' '}
                  Learn more{' '}
                  <Link 
                    href="https://www.exactflow.com/en/about-us" 
                    className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-medium"
                  >
                    about us
                  </Link>.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};