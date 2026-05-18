'use client';

import { motion } from 'framer-motion';
import { FEATURED_VIDEO } from '../constants/tutorials';
import { YouTubeEmbed } from './YouTubeEmbed';

export function TutorialFeatured() {
  return (
    <div className="mt-8 flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="mb-2 mt-2 flex flex-wrap items-center justify-center gap-2 sm:mb-1">
          <h2
            className="text-2xl font-bold text-[#101828] sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            }}
          >
            Meet ExactFlow Agents Your Smart Automation Assistants
          </h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-8 w-[80%] text-center text-sm font-medium text-[#101828] sm:text-base md:text-lg lg:text-xl"
          style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
        >
          {FEATURED_VIDEO.description}
        </motion.p>
      </motion.div>

      <YouTubeEmbed videoId={FEATURED_VIDEO.youtubeId} />
    </div>
  );
}
