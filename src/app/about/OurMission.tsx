import Image from 'next/image';
import img from '../../../public/about/img2.avif'
import Heading from '../components/ui/heading';

export default function OurMission() {
  return (
    <section className="py-16 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-[1120px]  mx-auto items-center">
        
        {/* Left Column: Image (Flipped Layout) */}
        <div className="grid order-last lg:order-first lg:col-span-5 relative w-full h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(49,130,206,0.15)] transition-transform duration-300">
          <Image
            src={img}
            alt="ExactFlow Team Collaboration"
            fill
            priority
            className="object-cover"
            sizes="(max-w-1024px) 100vw, 40vw"
          />
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-5 space-y-6">
        <Heading title="Mission" className="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mt-1" />
          
          <p className="text-[#4A5568] text-[18px] font-[400] font-[Inter] leading-relaxed font-normal">
            Our mission is to provide eCommerce brands with intelligent automation and 
            eliminate mistakes, lower the workload, and scale any business confidently 
            and delegate routine tasks to AI agents so that a team may grow, innovate, 
            and build lasting customer trust using AI agents for eCommerce and 
            eCommerce automation.
          </p>
        </div>

      </div>
    </section>
  );
}