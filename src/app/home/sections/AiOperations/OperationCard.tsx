import React from 'react';
import Image from 'next/image';
import { OperationAgent } from '../../types/ai-agent';

interface OperationCardProps {
  agent: OperationAgent;
  index: number;
}

const PINK_CREAM = 'linear-gradient(90.25deg, rgb(255, 230, 255) 6.24%, rgb(255, 240, 207) 110.55%)';
const GREY_LILAC = 'linear-gradient(90.25deg, rgb(234, 234, 234) 6.24%, rgb(248, 235, 255) 110.55%)';

export const OperationCard: React.FC<OperationCardProps> = ({ agent, index }) => {
  const background = Math.floor((index + 1) / 2) % 2 === 0 ? PINK_CREAM : GREY_LILAC;

  return (
    <div
      className="h-full md:mx-3 rounded-xl p-6 md:p-8 relative transform transition-all duration-500 flex flex-col"
      style={{ background }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-linear-to-r from-[#C05AFF] to-[#4D73F8] text-white inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold leading-none">
          {agent.stepNumber}
        </span>
        <h3 className="text-lg font-semibold text-gray-800">
          {agent.title}
        </h3>
      </div>

      <p className="leading-relaxed font-medium mb-4 md:mb-0 text-gray-700">
        {agent.description}
      </p>

      <div className="relative mt-auto pt-4 flex items-center justify-center">
        {agent.dashboardImage ? (
          <Image
            src={agent.dashboardImage}
            alt={agent.title}
            width={450}
            height={196}
            sizes="(max-width: 768px) 100vw, 450px"
            className="max-w-112.5 w-full h-36 md:h-48 object-contain"
          />
        ) : (
          <div className="max-w-112.5 w-full h-36 md:h-48 bg-white/40 rounded-lg flex items-center justify-center text-xs text-purple-400">
            Dashboard Analytics Preview
          </div>
        )}
      </div>
    </div>
  );
};
