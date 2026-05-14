import React from 'react';
import { AgentCarousel } from './AgentCarousel';
import { VideoShowcase } from './VideoShowcase';
import Heading from '@/src/app/components/ui/heading';


export const AgentsSection: React.FC = () => {
  return (
    <section className="w-full pt-16 md:pt-24  px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-12 md:text-[48px] md:mb-16">
       <Heading title="The Future of eCommerce Management is ExactFlow" />
        <p
          className="text-gray-600 text-sm md:text-[20px] font-medium max-w-4xl m-auto leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
        >
          ExactFlow is your all-in-one ecommerce management system, designed to unify every operation using ecommerce AI solutions. It saves time, reduces errors, and provides you with full control over your online business.{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Zane</span>,{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Tesa</span>,{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Axel</span>,{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Raya</span>,{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Nia</span>, aur{' '}
          <span className="text-blue-600 font-medium underline cursor-pointer">Kai</span> are not just add-ons; they are the backbone of the workforce in your organization. All of them are dedicated to a mission:
        </p>
      </div>

      {/* Layout Split Grid — 50/50 to match exactflow.com */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Left Side: Slider */}
        <div className="flex flex-col">
          <AgentCarousel />
        </div>

        {/* Right Side: Video Intro Card */}
        <div>
          <VideoShowcase />
        </div>
      </div>
    </section>
  );
};