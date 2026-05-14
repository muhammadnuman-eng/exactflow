// src/app/components/ui/heading.tsx
import React from 'react';

interface HeadingProps {
  title: string;
  className?: string; // Optional: agar aap kabhi extra classes dena chahen
}

export default function Heading({ title, className = "" }: HeadingProps) {
  return (
    <h2
      className={` text-[#051441] leading-[1.1] font-[600] tracking-normal  ${className}`}
      style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
    >
      {title}
    </h2>
  );
}