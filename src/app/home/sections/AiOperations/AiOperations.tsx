import React from 'react';
import { StackedSlider } from './StackedSlider';

export const AiOperations: React.FC = () => {
  return (
    <section className="w-full  bg-gray-100 mb-22">
      <div className="max-w-6xl mx-auto px-4 pt-15">
        {/* Header */}
        <div className="text-center mb-22">
          <h2
            className="text-xl md:text-[48px]  text-[#051441] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
          >
            AI Agents - Future of Your Operations
          </h2>
          <p
            className="text-lg text-gray-600 mt-1"
            style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
          >
            ExactFlow offers businesses a team of AI agents designed to eliminate inefficiency, reduce errors, and help them grow consistently through ecommerce automation tools. All of them are professionals, which reinforces the most significant aspects of your ecommerce operations.
          </p>
        </div>

        {/* 3D Slider */}
        <StackedSlider />
      </div>
    </section>
  );
};
