'use client';

import Image from 'next/image';
import type { TutorialTab } from '../constants/tutorials';

interface TutorialTabsProps {
  tabs: TutorialTab[];
  activeIndex: number;
  onTabChange: (index: number) => void;
}

export function TutorialTabs({ tabs, activeIndex, onTabChange }: TutorialTabsProps) {
  return (
    <div className="mb-4 flex justify-center">
      <div
        role="tablist"
        className="mt-10 flex h-[38px] w-full max-w-[547px] gap-2.5 rounded-lg bg-[#F6F6F6] p-[5px] shadow-[0_6px_18px_rgba(16,24,40,0.04)]"
      >
        {tabs.map((tab, index) => {
          const isSelected = activeIndex === index;
          return (
            <button 
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onTabChange(index)}
              className={`flex min-h-7 flex-1 items-center justify-center gap-1.5 rounded-md px-1.5 text-[9px] font-medium transition-colors ${
                isSelected
                  ? 'bg-white text-[#101828] shadow-[0_1px_4px_rgba(16,24,40,0.12)]'
                  : 'text-[#475467]'
              }`}
            >
              <Image
                src={tab.icon}
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] shrink-0"
                aria-hidden
              />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
