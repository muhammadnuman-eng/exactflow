import React from 'react';
import { OrbitGraphic } from '../home/sections/Contact/OrbitGraphic';
import Heading from '../components/ui/heading';

export default function SolutionShowcase() {
  return (
    <section className="py-15 bg-[#F4F5FA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <Heading title="AI Agents and Marketplace Integrations for Ecommerce Brands" className="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mt-1 text-center" />


        <div className="grid lg:grid-cols-2 gap-16 mt-10">
          {/* Left: Content */}
          <div className="space-y-6 text-[#4A5568] text-[18px] font-[400] font-[Inter]  leading-relaxed">
            <p>
            Managing an eCommerce brand is a stressful business, through working long hours, continuous errors, and endless tasks. This is not the case anymore since ExactFlow will present intelligent agents that will become reliable work partners to you. They deal with more daily routine tasks so your team can work on building, creating, and increasing growth through workflow automation.
            </p>
            <p>
            The mere differences are what make us special: we do not just provide one more tool; we give true peace of mind. We transform pressure into clarity by integrating HR, finance, procurement, and support into a single smooth flow with digital teammates that eCommerce teams can be confident in. And with ExactFlow, you will use less time to solve the problem and more time to work on bigger objectives.
            </p>
          </div>

          {/* Right: Visual Orbit Design */}
          <div className='-mt-12'>
         <OrbitGraphic />
         </div>
        </div>
      </div>
    </section>
  );
}