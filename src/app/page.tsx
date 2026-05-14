import { Hero } from './home/sections/Hero/Hero';
import Integrations from './home/sections/Integrations/Integrations';
import { AgentsSection } from './home/sections/Agents/AgentsSection';
import { AiOperations } from './home/sections/AiOperations/AiOperations';
import { FeaturesSection } from './home/sections/Features/FeaturesSection';
import { InsightsSection } from './home/sections/Insights/InsightsSection';
import { FaqSection } from './home/sections/Faq/FaqSection';
import { ContactSection } from './home/sections/Contact/ContactSection'; // <-- [NEW IMPORT]

export default function Home() {
  return (
    <>
      <Hero />
      <Integrations />
      <AgentsSection />
      <AiOperations />
      <FeaturesSection />
      <InsightsSection />
      <FaqSection />
      <ContactSection /> {/* <-- [FINAL LANDING BLOCK ASSEMBLY COMPLETED] */}
    </>
  );
}