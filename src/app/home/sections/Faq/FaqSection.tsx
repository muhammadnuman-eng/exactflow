'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '../../constants/faq';
import { FaqAccordion } from './FaqAccordion';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
  
    <section id="faq" className="w-full py-16 md:py-12 bg-[#F4F5FA]  px-4 md:px-8" role="region" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 items-center">
        
        {/* Centered Heading wrapper element */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl">
          <h2 id="faq-heading"  className="text-xl md:text-[48px] mb-2  text-[#061456] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="font-medium text-gray-500 text-sm md:text-[15px]  max-w-[900px] leading-relaxed">
            Find quick answers to common questions about our AI agents, plans, and features. These details will help you see how ExactFlow supports your business with automation and reliability.
          </p>
        </div>

        {/* Stack Row Box centered constraints max-w-[700px] as per HTML */}
        <div className="w-full max-w-[700px] flex flex-col gap-2 mx-auto">
          {FAQ_DATA.map((item) => (
            <FaqAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};