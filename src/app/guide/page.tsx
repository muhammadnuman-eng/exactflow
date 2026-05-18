import type { Metadata } from 'next';
import { GuideGrid } from './components/GuideGrid';

export const metadata: Metadata = {
  title: 'Guide | ExactFlow',
  description:
    'Step-by-step documentation to help you understand and use ExactFlow efficiently.',
};

export default function GuidePage() {
  return (
    <div className="w-full blogs_textMuted">
      <section
        id="guide"
        className="mx-auto max-w-6xl blogs_cardBg px-4 py-16 pt-32 md:px-4"
      >
        <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h2 id="blog-heading" className="text-xl md:text-[48px]  text-[#423B50] leading-[1.1] font-[600] tracking-normal"
          style={{ fontFamily: "'Clash Grotesk', var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            <span>ExactFlow User Guides</span>
          </h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-4">
            <p
              className="text-2xl font-medium text-[#666]"
              style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            >
              Step-by-step documentation to help you understand and use ExactFlow
              efficiently.
            </p>
          </div>
        </div>

        <GuideGrid />
      </section>
    </div>
  );
}
