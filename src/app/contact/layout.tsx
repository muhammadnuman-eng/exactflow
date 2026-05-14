import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ExactFlow | Get in touch with us',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pricing-wrapper">
      {/* Agar pricing pages ke liye koi special sidebar ya banner chahiye toh yahan add karen */}
      {children}
    </section>
  );
}