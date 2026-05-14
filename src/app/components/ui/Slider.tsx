'use strict';
'use client';

import React, { CSSProperties, useEffect, useState } from 'react';

interface SliderProps {
  children: React.ReactNode[];
  currentIndex: number;
  onChange?: (index: number) => void;
  autoPlay?: boolean;
  interval?: number;
  peekPx?: number;
  gapPx?: number;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  currentIndex,
  onChange,
  autoPlay = false,
  interval = 5000,
  peekPx = 36,
  gapPx = 16,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || !onChange || children.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % children.length;
      onChange(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, onChange, currentIndex, children.length, interval]);

  const containerStyle: CSSProperties = { containerType: 'inline-size' };
  const trackStyle: CSSProperties = {
    gap: `${gapPx}px`,
    transform: `translateX(calc(${peekPx}px - ${currentIndex} * (100cqw - ${2 * peekPx}px + ${gapPx}px)))`,
  };
  const slideStyle: CSSProperties = {
    width: `calc(100cqw - ${2 * peekPx}px)`,
  };

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={containerStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={trackStyle}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 h-full" style={slideStyle}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};