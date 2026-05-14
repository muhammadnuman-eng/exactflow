import { FaqSection, type FaqItem } from "../components/ui/FaqSection";
import Heading from "../components/ui/heading";

const pricingFaqItems: FaqItem[] = [
    {
        id: 1,
        question: "What is ExactFlow in simple terms?",
        answer: "ExactFlow is a set of agents that handle HR, finance, procurement, and support. They behave as digital teammates, reduce the number of manual operations and maintain work consistency.",
    },
    {
        id: 2,
        question: "What do these agents do to support my team?",
        answer: "They take repetitive tasks, eliminate errors, and ensure things move without delays. That way, your team has more time for growth and work that really counts.",
    },
    {
        id: 3,
        question: "Do these agents replace people?",
        answer: "No, they do not work against human teams; they work with them. They manage routine jobs so staff can focus on higher goals."
    },
    {
        id: 4,
        question: "Which businesses gain the most from ExactFlow?",
        answer: "Any e-commerce company – HR, finance, procurement or support – may benefit. It is best suited to businesses that intend to expand with less error and wasted time with workflow automation.",
    },
    {
        id: 5,
        question: "why was ExactFlow created?",
        answer: "Our founder realized the potential of e-commerce businesses and the fact that they remained familiar with manual, disjointed work. ExactFlow was developed to clear these areas and introduce clarity, speed and trust to everyday work with ecommerce automation.",
    },
];

export default function FAQ() {
    return (
        <div> <section className="bg-[#F9FAFB] pt-9 pb-3">
        <div className="max-w-[1260px] mx-auto px-4">

            <Heading
                title="Frequently Asked Questions"
                className="text-[40px] md:text-[48px] font [400] text-[#2D3340] text-center leading-tight mb-2  mt-6"
            />
        </div>
        <FaqSection
            sectionId="pricing-faq"
            headingId="pricing-faq-heading"
            items={pricingFaqItems}
            title=""
            className="bg-[#F9FAFB]"
            />
            </section>
        </div>
    )
}