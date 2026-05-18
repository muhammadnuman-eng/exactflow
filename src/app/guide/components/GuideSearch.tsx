'use client';

import { Search } from 'lucide-react';
import { useId } from 'react';

interface GuideSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function GuideSearch({ value, onChange }: GuideSearchProps) {
  const inputId = useId();

  return (
    <div className="mb-[30px] flex w-full justify-center">
      <label
        htmlFor={inputId}
        className="relative flex h-10 w-full max-w-[520px] items-center overflow-hidden rounded-full border border-[#666] bg-[#f6f7f8] px-2 shadow-[0_6px_18px_rgba(16,24,40,0.04),inset_0_1px_0_rgba(255,255,255,0.7)]"
      >
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search here"
          aria-label="search"
          className="ml-0.5 min-w-0 flex-1 border-0 bg-transparent py-2 text-sm leading-5 text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:ring-0"
        />
        <button
          type="button"
          aria-label="search"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#111827] transition-colors hover:bg-black/[0.04]"
        >
          <Search className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
        </button>
      </label>
    </div>
  );
}
