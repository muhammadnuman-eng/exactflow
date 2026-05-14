import Chat from "../components/chat/chat";
import { Button } from "../components/ui/Button";
import Heading from "../components/ui/heading";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-[#F7F8FE] px-4 py-16 sm:py-20 lg:py-42">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_10%_45%,rgba(168,210,255,0.55),transparent_45%)]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_85%_55%,rgba(255,187,219,0.5),transparent_48%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/40 to-transparent" />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
                <Heading
                    title="Turn Business Chaos Into Control"
                    className="text-[32px] font-[500] uppercase leading-[1.05] tracking-[-0.04em] text-[#061456] sm:text-[44px] lg:text-[60px]"
                />
                <p className="mt-6 max-w-[774px] text-[20px] font-[400] font-[Inter] leading-[1.45] text-[#4f5564]">
                    ExactFlow transforms disjointed processes into seamless control with AI assistants handling HR, finance, procurement, and support with perfect accuracy and eliminating errors and wasted time, so the outcome is a business that runs leaner, faster, and smarter by freeing your team to pursue aggressive growth and long-term success through e-commerce automation.
                </p>

                <Button
                    href="/demo"
                    className="mt-8 !px-7 py-4 text-[16px] font-[500] font-[Inter] uppercase leading-none tracking-[-0.02em]"
                >
                    Get A Demo
                </Button>
            </div>

            <Chat />
        </section>
    )
}