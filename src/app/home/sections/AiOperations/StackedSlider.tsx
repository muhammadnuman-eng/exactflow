'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { OPERATIONS_DATA } from '../../constants/ai-agents';
import { OperationCard } from './OperationCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

export const StackedSlider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Active agent data nikalne ke liye
    const activeAgent = OPERATIONS_DATA[activeIndex] ?? OPERATIONS_DATA[0];

    // 🚀 LOGIC FIX 1: Manual pause/start ko bilkul khatam kiya taake loop state crash na ho
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const goTo = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto -mt-10">
            {/* Carousel area with floating role badge */}
            <div className="relative w-full h-fit md:h-112.5 overflow-hidden rounded-2xl">

                {/* Aapka Original Role Badge Design */}
                <button
                    aria-label="Role Button"
                    type="button"
                    className="absolute right-14 rounded-full text-[13px] font-medium hidden md:flex items-center justify-between py-2 px-4 transition-all duration-300 bg-linear-to-r from-[#C05AFF] to-[#4D73F8] text-gray-100 text-md shadow-md hover:shadow-lg cursor-pointer z-20"
                >
                    {activeAgent.title}
                </button>

                {/* Swiper Coverflow */}
                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={0}
                    observer={true}
                    observeParents={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false, // Click karne ke baad bhi autoplay chalta rahega
                        pauseOnMouseEnter: true,     // Mouse upar laane par pause hoga
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 217,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    watchSlidesProgress={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    // 🚀 LOGIC FIX 2: ExactFlow ki tarah smooth looping index update karne ke liye realIndex use kiya
                    onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="team-swiper h-full"
                >
                    {OPERATIONS_DATA.map((agent, index) => (
                        <SwiperSlide key={agent.id} style={{ width: 353 }}>
                            <OperationCard agent={agent} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* White fade gradients on left/right edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-gray-100 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-gray-100 to-transparent z-10" />
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center px-4 gap-4 mt-1">
                {/* Indicator lines */}
                <div className="hidden md:flex flex-1 gap-2">
                    {OPERATIONS_DATA.map((_, index) => (
                        <button
                            key={index}
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => goTo(index)}
                            
                            className={`h-1 flex-1 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex
                                    ? 'bg-[#db1521]'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Prev / Next Buttons */}
                {/* 🚀 LOGIC FIX 3: Is layer ko z-50 diya taake background layers clicks block na karein */}
                <div className="flex gap-4 ml-auto md:ml-0 max-md:mx-auto max-md:-mt-2 relative z-50">
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous slide"
                        className="w-10 h-10 rounded-xl border-2 bg-white text-black flex items-center justify-center font-bold text-xs hover:bg-[#db1521] hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next slide"
                        className="w-10 h-10 rounded-xl border-2 border-transparent bg-[#db1521] text-white flex items-center justify-center font-bold text-xs hover:bg-[#b8121c] transition-all duration-300 cursor-pointer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};