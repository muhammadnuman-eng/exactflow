import React from 'react';
import Link from 'next/link';
import { FEATURES_DATA } from '../../constants/features';
import { FeatureCard } from './FeatureCard';

export const FeaturesSection: React.FC = () => {
  return (
    <div className='bg-[#F4F5FA]'>
    <section id="enterprise" className="py-16 md:py-24 px-4 md:px-8 max-w-[1230px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8` items-center">
        
        {/* Left Side: Typography Intro Block (Takes 6 Columns on Desktop) */}
        <div className="lg:col-span-6 text-center md:text-left flex flex-col justify-center">
          <h2  className="text-xl md:text-[48px] mb-7  text-[#051441] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            Built to Your 2x Growth
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-[95%] lg:max-w-[80%] mx-auto md:mx-0 text-gray-600 leading-relaxed"  style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}>
            Grow with enterprise-level security, smart workflows, and full control. ExactFlow’s ecommerce management system with multi-channel inventory management software adapts to your business and keeps performance strong using ecommerce automation.{' '}
            <Link 
              href="https://www.exactflow.com/en/contact-us" 
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4 font-medium transition-colors"
            >
              Contact us
            </Link>{' '}
            today.
          </p>
        </div>

        {/* Right Side: Features Sub-Grid Block (Takes 6 Columns on Desktop) */}
        <div className="lg:col-span-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES_DATA.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};