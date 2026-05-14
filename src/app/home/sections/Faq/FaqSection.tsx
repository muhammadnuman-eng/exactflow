'use client';

import Link from 'next/link';
import { FaqSection as FaqSectionUI, type FaqItem } from '../../../components/ui/FaqSection';
import { FAQ_DATA } from '../../constants/faq';

const faqItems: FaqItem[] = FAQ_DATA.map((item) => ({
  ...item,
  answer:
    item.id === 5 ? (
      <p>
        {item.answer}{' '}
        Learn more{' '}
        <Link
          href="https://www.exactflow.com/en/about-us"
          className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-medium"
        >
          about us
        </Link>
        .
      </p>
    ) : (
      <p>{item.answer}</p>
    ),
}));

export const FaqSection = () => {
  return (
    <FaqSectionUI
      items={faqItems}
      description="Find quick answers to common questions about our AI agents, plans, and features. These details will help you see how ExactFlow supports your business with automation and reliability."
    />
  );
};