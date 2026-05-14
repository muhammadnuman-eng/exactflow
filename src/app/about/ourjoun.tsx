import OurJourney from "../components/ui/OurJourney";
import journeyImg from "../../../public/about/img1.avif";

export default function OurJour() {
    return (
        <div>
            <OurJourney
               title="Our Story"
               headingClassName="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mt-1 font-['Clash_Grotesk',var(--font-space-grotesk),'Space_Grotesk',sans-serif]"
               image={journeyImg}
               imageAlt="ExactFlow Team Workspace"
               paragraphs={[
                   <>
                       <span className="text-[#3182CE] font-normal underline decoration-2 cursor-pointer hover:text-[#2B6CB0] transition-colors">
                           ExactFlow
                       </span>{" "}
                       was designed with a clear objective: to enable eCommerce brands to cope with the daily suffering of operating numerous marketplaces. We saw the amount of time wasted by teams on manual updates, stock errors, and redundant support work, and how workflow automation could free up that time. The same time could have been used to create better brands, to add more products, and to target more buyers.
                   </>,
                   "So we created a system that acts as an additional pair of hands to every brand. Having smart agents, marketplace integration, and automation, ExactFlow ensures that the work process proceeds seamlessly and growth is constant, as digital teammates that eCommerce teams may count on. We continue to enhance our tools today with one promise to make e-commerce easier, smarter, and scale-ready for everyone.",
               ]}
               signature={
                   <>
                       <span className="text-gray-600 mr-1">-</span>
                       Muhammad Ibraheem,{" "}
                       <span className="text-gray-600">
                           Founder of ExactFlow
                       </span>
                   </>
               }
           />
        </div>
    )
}