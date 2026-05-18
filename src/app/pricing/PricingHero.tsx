"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from '../../../public/pricing/pricingHeroImg.avif'
import Chat from '@/app/components/chat/chat';
import Heading from "../components/ui/heading";
import { Button } from "../components/ui/Button";

export default function PricingHero() {
    return (
        <section className="relative overflow-hidden bg-[#E8F3FF] pt-10 lg:pt-25 pb-9">
            {/* Background Blur Effects */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full " />

            <div className="container mx-auto max-w-[1250px] px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Heading */}
                            <Heading
                                title="The Best AI Automation Plan for Every E-commerce Business"
                                className="md:text-[56px] text-[#061456] leading-[1.2]"
                            />
                        

                        {/* Description */}
                        <p className="mt-3 max-w-[680px] text-base leading-7 font-[Inter] font-[400] text-[#757575] sm:text-[20px]">
                            Whether you&apos;re growing your Shopify store or running multiple online shops and marketplaces, ExactFlow offers flexible e-commerce AI subscription pricing that helps you scale with confidence. Our online business smart tools manage the day-to-day activities, sales, finances, and customer service using AI agents for e-commerce business services, so your team can focus on planning rather than doing manual tasks. We&apos;ve designed multiple plans to match every stage of growth, whether you need smart Shopify tools, AI agents, or a fully custom AI automation plan.
                        </p>
                        {/* Buttons */}
                        <div className="mt-10 flex flex-col gap-2 sm:flex-row">
                            {/* Primary Button */}
                            <Button
                                href="/demo"
                                variant="primary"
                                className="xl:leading-none xl:h-12 xl:text-[16px] font-[Inter] font-[500] uppercase"
                            >
                                Get A Demo
                            </Button>
                            {/* Secondary Button */}
                            <Button
                                href="/signup"
                                variant="outline"
                                className="xl:leading-none xl:h-12 xl:text-[16px] font-[Inter] font-[500] xl:px-6 uppercase"
                            >
                                Start A Free Trial
                            </Button>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Decorative Glow */}
                        <div />

                        {/* Main Card */}
                        <div className="relative overflow-hidden bottom-9 rounded-[32px]">
                            <div className="relative h-[580px]  w-full">
                                <Image
                                    src={heroImg}
                                    alt="Professional woman using tablet"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Decorative Shape */}
                        <div />
                        <Chat />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}