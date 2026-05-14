import OurJourney from "../components/ui/OurJourney";
import journeyImg from "../../../public/about/img3.avif";


export default function Vision() {
    return (
        <div className="">
             <OurJourney
               title="Vision"
               headingClassName="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mt-1 font-['Clash_Grotesk',var(--font-space-grotesk),'Space_Grotesk',sans-serif]"
               image={journeyImg}
               imageAlt="ExactFlow Team Workspace"
               paragraphs={[
                   <>
                       Our vision is to attain a future in which running an eCommerce brand might be as natural as people and AI agents operating together, each performing their respective roles optimally, creating a partnership that makes faster decisions, executes more effectively, and achieves consistent, sustainable growth for any business through workflow automation.
                   </>
               ]}
               signature={
                   <>
                     
                   </>
               }
           />
        </div>
    )
}