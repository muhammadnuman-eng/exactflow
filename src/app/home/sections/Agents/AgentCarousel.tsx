'use strict';
'use client';

import React, { useState } from 'react';
import { AGENTS_DATA } from '../../constants/agents';
import { AgentCard } from './AgentCard';
import { Slider } from '../../../components/ui/Slider';

export const AgentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAgent = AGENTS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? AGENTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === AGENTS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col ">
      {/* Carousel container: only the image inside slides; badge + button stay put */}
      <div className="relative w-full overflow-hidden rounded-2xl md:h-[280px]">
        <Slider
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
          autoPlay
          interval={5000}
        >
          {AGENTS_DATA.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </Slider>

        {/* Static Role Badge — fixed gradient, only text updates */}
        <div className="pointer-events-none absolute top-6 right-14 z-20 hidden md:flex">
          <span className="rounded-full font-medium py-2 px-3 transition-all duration-300 bg-gradient-to-r from-[#4D73FB] to-[#C05AFF] text-gray-100 text-[13px] shadow-md">
            {currentAgent.role}
          </span>
        </div>

        {/* Static Hire Me Button — outer pill ring + inner red button */}
        <div className="hidden md:block absolute w-fit bottom-4 left-1/2 -translate-x-1/2 p-1.5 border border-gray-300 rounded-full z-30 backdrop-blur-md">
          <button
            aria-label="Hire Me"
            className="group w-fit rounded-full flex justify-between items-center font-medium text-white transition-all duration-300 bg-[#db1521] hover:bg-opacity-90 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span className="text-sm px-3">Hire Me</span>
            <span className="flex items-center justify-center bg-white rounded-full w-12 aspect-square p-0.5 ml-6 text-[#db1521] text-lg">
              ➜
            </span>
          </button>
        </div>
      </div>

      {/* Controls & Pagination Indicators */}
      <div className="flex justify-between items-center  px-4 gap-4">
        {/* Progress Bars */}
        <div className="hidden md:flex flex-1 gap-2">
          {AGENTS_DATA.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#db1521]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Arrow Buttons — rounded-xl border-2, white prev / red next */}
        <div className="flex gap-4 ml-auto md:ml-0">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-xl border-2 bg-white text-black flex items-center justify-center font-bold text-xs hover:bg-[#db1521] hover:text-white hover:border-transparent transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 rounded-xl border-2 border-transparent bg-[#db1521] text-white flex items-center justify-center font-bold text-xs hover:bg-[#b8121c] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};