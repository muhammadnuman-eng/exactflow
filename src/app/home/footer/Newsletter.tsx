'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <div className="flex w-full flex-col gap-2 lg:max-w-[450px]">
      <form
        suppressHydrationWarning
        noValidate
        onSubmit={handleSubscribe}
        className="flex w-full items-stretch overflow-hidden rounded-full border border-white bg-white"
      >
        <input
          id="subscribe-newsletter"
          suppressHydrationWarning
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="min-w-0 flex-1 border-0 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          suppressHydrationWarning
          aria-label="Subscribe to newsletter"
          className="flex shrink-0 items-center gap-2 bg-linear-to-r from-[#061456] to-[#db1521] px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
        >
          <Send className="h-[18px] w-[18px]" aria-hidden />
          SUBSCRIBE
        </button>
      </form>

      <label
        htmlFor="footer-newsletter-consent"
        className="flex cursor-pointer items-start gap-2 px-3"
      >
        <input
          id="footer-newsletter-consent"
          type="checkbox"
          className="mt-0.5 shrink-0 accent-[#D82F3B]"
          style={{ marginTop: 2 }}
        />
        <span className="text-[13px] font-[Inter] font-[400] leading-[1.4] text-[#555]">
          I agree to receive marketing communications. I have read and accept the{' '}
          <Link href="/legal/privacy" className="text-[#D82F3B] underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
    </div>
  );
}
