import AboutHero from "./aboutHero";
import OurMission from "./OurMission";
import OurJour from "./ourjoun";
import Vision from "./Vision";
import CounterSection from "./CounterSection";
import Evolution from "./Evolution";
import WhyChoose from "./whyChoose";
import SolutionShowcase from "./SolutionShowcase";
import FreeDemoCTA from "./FreeDemoCTA";
import FAQ from "./faq";

export default function About() {
    return (
        <div>
           <AboutHero />
           <OurJour />
           <OurMission />
           <Vision />
           <CounterSection />
           <Evolution />
           <WhyChoose />
           <SolutionShowcase />
           <FreeDemoCTA />
           <FAQ />
        </div>
    )
}