'use client';

import React from 'react';
import { OrbitGraphic } from '@/app/components/OrbitGraphic';
import { ContactForm } from './ContactForm';
import Heading from '../components/ui/heading';

export const ContactSection: React.FC = () => {
  return (
    <div className='bg-[#EAEFF5]'>
      <Heading title="Contact Us" className="text-[48px] font-[300] text-[#2D3340] leading-[1.1] pt-28 pb-5 text-center bg-transparent" />
      <h3 className="text-[27px] font-[600] font-[Inter] text-[#0B1858] leading-[1.1] pt-2 pb-5 text-center bg-transparent">Let&apos;s work together</h3>
      <h3 className="text-[18px] font-[600] font-[Inter] text-[#656578] leading-[1.1] pt-2 text-center bg-transparent">Any question or remark? Just write us a message</h3>
    <section 
      id="contact" 
      className="w-full py-16 md:py-10 px-6 sm:px-12 lg:px-20 min-h-screen flex items-center justify-center overflow-hidden" 
      role="region" 
    >

      <div className="w-full max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center justify-items-center">
          
          <div className="w-full max-w-[480px] flex items-center justify-center order-2 lg:order-1">
            <OrbitGraphic />
          </div>

          
          <div className="w-full max-w-[680px] order-1 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};