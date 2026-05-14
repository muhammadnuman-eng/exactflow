import React from 'react';
import { Check } from 'lucide-react';
import Heading from '../components/ui/heading';
import { Button } from '../components/ui/Button';

export default function PricingSection() {
    const features = [
        { text: "Up to 500 active products", included: true },
        { text: "Up to 100 orders per month", included: true },
        { text: "Basic integrations", included: true },
        { text: "AI features", included: false },
        { text: "Priority support", included: false },
    ];

    return (
        <section className="py-6 bg-white">
            <div className=" max-w-[760px] mx-auto px-4">

                {/* Main Header */}
                <div className="text-center mb-7">
                    <Heading
                        title="Simple, Transparent Pricing"
                        className="text-[40px] md:text-[56px] font [400] text-[#2D3340] leading-tight mb-2  mt-6"
                    />
                    <p className="text-[#757575] text-lg md:text-[18px] font-[Inter] font-[400]">
                        Choose the plan that fits your business needs. Scale as you grow.
                    </p>
                </div>

                {/* Pricing Card Section */}
                <div className="flex justify-center mb-5">
                    <div className="w-full max-w-[350px] bg-white rounded-[24px] border border-[#F3F4F6] shadow-xl p-3">
                        <div className="mb-3">
                            <Heading
                                title="Free"
                                className="md:text-[16px] font [400] text-[#2D3340] leading-tight   mt-1"
                            />
                            <p className="text-[#757575] text-[12px] font-[Inter] mt-1">Perfect for getting started and testing</p>
                        </div>

                        <div className="mb-2">
                            <Heading
                                title="Free"
                                className="md:text-[25px] font [400] text-[#2D3340] leading-tight mt-1"
                            />
                            <p className="text-[#757575] text-[12px] font-[Inter] mt-1">Get started with the free plan</p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-2 mb-3">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-1">
                                    <Check className={`w-5 h-4 flex-shrink-0 ${feature.included ? 'text-[#10B981]' : 'text-[#D1D5DB]'}`} />
                                    <span className={`text-[13px] font-[400] font-[Inter] ${feature.included ? 'text-[#2D3340]' : 'text-[#9CA3AF]'}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            className="w-full !border-[#E5E7EB] !text-[#111827] !py-2 hover:!bg-[#F9FAFB] rounded-xl font-semibold capitalize"
                        >
                            Start Free
                        </Button>
                    </div>
                </div>

                {/* Notice Box */}
                <div className="max-w-[850px] mx-auto bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl p-3 mb-6">
                    <p className="font-[700] text-[#374151] font-[Inter] text-[14px] ">Free Plan Notice:</p>
                    <p className="text-[#6B7280] text-[12px] font-[Inter leading-relaxed">
                        When you reach 100 orders in a month, your account will be temporarily disabled until you upgrade to a paid plan or the next month begins (which resets your order limit). Exceeding the product limit does not disable your account.
                    </p>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center space-y-3">
                    <Heading
                        title="Questions about pricing?"
                        className="text-[32px] font- text-[#051441]"
                    />
                    <p className="text-[#6B7280] text-[13px] font-[Inter]">
                        Our team is here to help you choose the right plan for your business
                    </p>
                    <div className="flex justify-center ">
                        <Button
                            href="/contact-us"
                            className="!bg-[#3B82F6] hover:!bg-[#2563EB] !text-white !rounded-[10px] !px-2 !py-1 text-[13px] font-semibold capitalize shadow-lg shadow-blue-200"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}