// src/components/sections/Integrations/LogoMarquee.tsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { INTEGRATIONS } from "../../home/constants/integrations";

export const LogoMarquee = () => {
  // Seamless loop ke liye array double karein
  const doubledLogos = [...INTEGRATIONS, ...INTEGRATIONS];

  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const speed = useRef(0);

  // Speed control: DURATION kam karne se slide tez hoti hai (seconds mein -50% travel)
  // 60 = slow | 25 = fast | 15 = bohot fast
  const DURATION = 40;

  useAnimationFrame((_, delta) => {
    const target = isHovered ? 0 : -(50 / DURATION);
    speed.current += (target - speed.current) * Math.min(1, delta / 300);
    let next = baseX.get() + speed.current * (delta / 1000);
    if (next <= -50) next += 50;
    baseX.set(next);
  });

  return (
    <div className="relative flex w-full overflow-hidden  py-1">
      <motion.div
        className="flex whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          x,
          display: "flex",
          width: "max-content",
        }}
      >
        {doubledLogos.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="mx-8 flex min-w-[140px] items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={160}
              height={60}
              priority={index < 10}
              className="h-19 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};