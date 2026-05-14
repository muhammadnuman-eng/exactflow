import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Heading from "./heading";

interface OurJourneyProps {
  title: string;
  headingClassName?: string;
  paragraphs: ReactNode[];
  image: StaticImageData;
  imageAlt: string;
  signature?: ReactNode;
}

export default function OurJourney({
  title,
  headingClassName = "text-[48px] font-normal text-[#2D3340] leading-[1.1] mt-1 font-['Clash_Grotesk',var(--font-space-grotesk),'Space_Grotesk',sans-serif]",
  paragraphs,
  image,
  imageAlt,
  signature,
}: OurJourneyProps) {
  return (
    <section className="py-15 pb-21 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1120px] mx-auto items-center">
        <div className="lg:col-span-6 space-y-6">
          <Heading title={title} className={headingClassName} />

          <div className="text-[#4A5568] text-[18px] font-normal font-[Inter] leading-relaxed space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {signature && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[#4A5568] font-medium font-[Inter] text-[18px]">
                {signature}
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-6 relative w-full h-[350px] sm:h-[350px] rounded-2xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(49,130,206,0.15)] transition-transform duration-300">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
