import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Heading from '../components/ui/heading';

export default function WhyChooseUs() {
    return (
        <section className="bg-[#F9FAFB] py-16 md:py-7 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Max width ko 1000px se barha kar 1140px ya 1200px kar diya taake layout tight na ho */}
            <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-1 items-center">

                {/* Left Column: Content (lg:col-span-7 se lg:col-span-6 kiya taake animation ko space mile) */}
                <div className="lg:col-span-6 max-w-lg space-y-5">
                    <Heading
                        title=" Why Are We the Right Choice for Your Business"
                        className="md:text-[45px] font-[400] text-[#2D3340] leading-[1.1] mt-1" 
                    />

                    <div className="space-y-5 text-[#6B7280] font-[Inter] text-base sm:text-[17px] leading-relaxed">
                        <p>
                            We understand that it can be difficult to scale an e-commerce
                            business when all processes seem detached, and your team is
                            stuck doing repetitive work. This is where{' '}
                            <Link href="/" className="text-[#3B82F6] underline font-[400]">
                                ExactFlow
                            </Link>{' '}
                            comes in with AI automation.
                        </p>

                        <p>
                            Whether you&apos;re managing a Shopify store, using our Shopify
                            app, or running multiple online shops and marketplaces, we
                            bring you a single platform that gives your team and business
                            order, speed, and clarity, so your operations finally run the way
                            they should. Learn more{' '}
                            <Link href="/about" className="text-[#3B82F6] underline font-[400]">
                                about us.
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Column: Lottie Animation (lg:col-span-5 se lg:col-span-6 kiya) */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
                    {/* Size scaling changes: max-w-[600px] aur aspect ratio ko dynamic / square close kiya */}
                    <div className="w-full max-w-[580px] sm:max-w-[600px] aspect-[1.1/1] lg:aspect-square">
                        <DotLottieReact
                            src="/Robotic Interaction Lottie Animation.lottie"
                            loop
                            autoplay
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}