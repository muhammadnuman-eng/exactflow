import type { Metadata } from 'next';
import { TutorialContent } from './components/TutorialContent';

export const metadata: Metadata = {
  title: 'Tutorial | ExactFlow',
  description:
    'Master every ExactFlow feature with short, practical walkthrough videos.',
};

export default function TutorialPage() {
  return (
    <div className="w-full blogs_textMuted">
      <TutorialContent />
    </div>
  );
}
 