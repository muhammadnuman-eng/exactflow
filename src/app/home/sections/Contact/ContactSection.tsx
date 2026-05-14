'use client';

import React from 'react';
import { OrbitGraphic } from './OrbitGraphic';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section 
      id="contact" 
      // Background color ko image se match kiya aur padding perfect ki
      className="w-full py-16 md:py-24 bg-[#EAEFF5] px-6 sm:px-12 lg:px-20 min-h-screen flex items-center justify-center overflow-hidden" 
      role="region" 
    >
      {/* Max-width ko badha kar 1200px kiya taake space khula khula lage */}
      <div className="w-full max-w-[1200px] mx-auto">
        
        {/* Grid ko 2 barabar hisson mein divide kiya (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center justify-items-center">
          
          {/* Left Column - Orbit Graphic */}
          <div className="w-full max-w-[480px] flex items-center justify-center order-2 lg:order-1">
            <OrbitGraphic />
          </div>

          {/* Right Column - Contact Form */}
          {/* Note: Agar aapke ContactForm component ke andar white card background pehle se nahi bana hua, 
              toh aap is div par bg-white rounded-2xl shadow-lg p-8 lagasakte hain */}
          <div className="w-full max-w-[680px] order-1 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};