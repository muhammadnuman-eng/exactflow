import { FaqSection, type FaqItem } from "../components/ui/FaqSection";
import Heading from "../components/ui/heading";

const pricingFaqItems: FaqItem[] = [
    {
        id: 1,
        question: "Do AI agensts bill separately?",
        answer: "No. Each plan includes a set number of AI agents for e-commerce business based on the tier: Starter (1 agent), Growth (multiple agents), and Enterprise (all agents), with transparent AI agents cost.",
    },
    {
        id: 2,
        question: "Can I switch plans anytime?",
        answer: "Yes. You can upgrade or downgrade your plan anytime as your business grows.",
    },
    {
        id: 3,
        question: "Do you offer custom pricing for large companies?",
        answer: "Yes. The Enterprise plan is fully customizable based on your AI automation, Shopify app usage, and integration needs through our custom AI automation plan.",
    },
    {
        id: 4,
        question: "Does it include Shopify and marketplace integrations in the pricing?",
        answer: "Yes. Limits of integration increase via plan.",
    },
    {
        id: 5,
        question: "Is there any setup fee?",
        answer: "No. All plans include free setup and onboarding.",
    },
    {
        id: 6,
        question: "What payment options are available?",
        answer: "ExactFlow has monthly and annual billing that do not have long-term contracts.",
    },
    {
        id: 7,
        question: "Does it have a demo before purchase?",
        answer: "Yes. You can book a demo anytime to explore the platform and Shopify app features before subscribing.",
    },
];

export default function Faq() {
    return (
        <div> <section className="bg-[#F9FAFB] pt-9 pb-3">
        <div className="max-w-[1260px] mx-auto px-4">

            <Heading
                title="Got Questions? We’ve Got Straight Answers."
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