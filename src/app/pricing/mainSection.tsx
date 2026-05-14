import Heading from "../components/ui/heading";
import { LogoMarquee } from "../components/ui/LogoMarquee";

export default function MainSection() {
    return (
        <div>
            <div className="pt-7">
                <Heading
                    title="Trusted By Growing Brands Worldwide"
                    className="md:text-[56px] text-[#061456] leading-[1.2] text-center"
                />
                <div className="relative bg-gradient-to-bl from-purple-300 via-pink-200 to-blue-400 py-4 mt-9 overflow-hidden">
                    {/* Optional: Halka sa glass effect dene ke liye opacity layer */}
                    <div className="absolute inset-0 " />

                    <div className="relative z-10">
                        <LogoMarquee />
                    </div>
                </div>
            </div>
        </div>
    )
}