"use client";
import React, { useState } from "react";
import { HeroContent } from "./HeroContent";
import { HeroMockup } from "./HeroMockup";
import chatImg from '../../../../../public/image/chat.avif'
import Image from "next/image";
import Chat from "@/src/app/components/chat/chat";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* 1. Static BG Image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(/image/header-bg-light.avif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* 1.5 Default Soft Blend - tint over the image (multiply blend so image stays visible) */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(90deg, rgba(186, 230, 253, 0.55) 0%, rgba(251, 207, 232, 0.6) 100%)",
          mixBlendMode: "multiply",
          opacity: isHovered ? 0.25 : 0.7,
        }}
      />

      {/* 2. COLORS LAYER - blurred color blobs (multiply blend so image bleeds through) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      >
        {/* Bottom Colors */}
        <div className="absolute top-[40%] left-[-15%] w-[850px] h-[850px] bg-[#B5D5F9] rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[750px] h-[750px] bg-[#F9A8D4] rounded-full blur-[110px] opacity-70" />

        {/* Top Colors (Transitions on Hover) */}
        <div
          className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C7D2FE] rounded-full blur-[120px] transition-opacity duration-1000 ${
            isHovered ? "opacity-60" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#BAE6FD] rounded-full blur-[110px] transition-opacity duration-1000 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />
      </div>

      {/* 2.5 Top White Veil - corners + top fade (kept partially transparent so image is faintly visible) */}
      <div
        className="absolute inset-0 z-[15] pointer-events-none transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(65% 75% at 0% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 35%, rgba(255, 255, 255, 0) 80%),
            radial-gradient(65% 75% at 100% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 35%, rgba(255, 255, 255, 0) 80%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0) 60%)
          `,
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* 3. GRID LAYER - WHITE DARK GRID */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: "45px 45px",
          backgroundColor: isHovered
            ? "rgba(255, 255, 255, 0.05)"
            : "transparent",
        }}
      />

      {/* 4. MOUSE SPOTLIGHT - Makes the grid shine even more (hidden over input) */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-300 ${
          isHovered && !isInputHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(
            150px circle at ${mousePos.x}px ${mousePos.y}px, 
            rgba(255, 255, 255, 0.3) 0%, 
            transparent 80%
          )`,
        }}
      />

      {/* 5. CONTENT LAYER */}
      <div className="xl:max-w-[1220px] lg:max-w-[894px] relative z-40 mx-auto px-8 xl:pt-13 lg:pt-28 sm:pt-25 xsm:pt-24  grid grid-cols-1 lg:grid-cols-2 xl:gap-12 lg:gap-8 items-center w-full">
        <HeroContent onInputHoverChange={setIsInputHovered} />
        <div className="relative flex justify-center items-center">
          <HeroMockup />
        </div>
      </div>

      {/* 6. Rotating Badge */}
     <Chat />
    </section>
  );
};
