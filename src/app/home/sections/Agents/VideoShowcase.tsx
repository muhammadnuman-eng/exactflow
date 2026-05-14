'use strict';
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const VIMEO_SRC =
  'https://player.vimeo.com/video/1089039194?h=f6183f35d2&speed=0&autoplay=1&pip=0&app_id=122963';

export const VideoShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative max-md:h-fit h-100 w-full max-w-6xl cursor-pointer overflow-hidden"
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="relative w-full h-50 sm:h-75 md:h-75 overflow-hidden">
            {/* Base gradient backgrounds */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-300 via-pink-200 to-blue-400" />
            <div className="absolute inset-0 bg-linear-to-t from-blue-300 via-transparent to-purple-200 opacity-60" />

            {/* Soft blurred blob */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-48 h-48 rounded-full blur-sm animate-pulse bg-linear-to-br from-blue-500 to-purple-600 opacity-80" />
            </div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-40 h-40 rounded-full bg-linear-to-br from-purple-500 to-blue-500 opacity-60" />
            </div>

            {/* Badge */}
            <div className="absolute top-10 md:top-10 opacity-100 left-1/2 -translate-x-1/2 w-max px-4 py-2 md:px-4 md:py-4 rounded-2xl backdrop-blur-md bg-black/10 text-white transition-all duration-1000 delay-500 ease-out">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-wide">
                Meet Our Agents
              </h2>
            </div>

            {/* Screens image (behind) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-5xl flex justify-center">
              <Image
                src="/assets/homeAgentsImage/agent-screens.webp"
                alt="Agent Screens"
                width={1152}
                height={500}
                sizes="(max-width: 768px) 90vw, 900px"
                className="h-auto object-contain transition-all duration-1000 delay-700 ease-out opacity-100"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Agents image (front) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-5xl flex justify-center">
              <Image
                src="/assets/homeAgentsImage/agents-group.webp"
                alt="Agents"
                width={1152}
                height={396}
                sizes="(max-width: 768px) 90vw, 900px"
                className="h-auto object-contain transition-all duration-1000 ease-out delay-200 translate-y-0 opacity-100"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Play button */}
        <button
          type="button"
          aria-label="Play intro video"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="absolute z-30 mx-auto w-16 sm:w-20 md:w-20 aspect-square rounded-full bg-linear-to-r from-[#4D73FB] to-[#C05AFF] flex items-center justify-center top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out delay-300 animate-pulse group hover:animate-none scale-100 opacity-100 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-150 transition-all duration-1000 ease-out delay-300 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white ml-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 5.912c0-.155.037-.307.107-.443c.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355c.23.44.08.995-.332 1.239L7.27 18.885a.8.8 0 0 1-.415.115C6.383 19 6 18.592 6 18.089z"
            />
          </svg>
        </button>
      </div>

      {/* Vimeo modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={VIMEO_SRC}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Exact flow draft _ 3"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
