'use client'
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-white rounded-full p-0.5 shadow-sm border border-gray-100 max-w-md w-full">
      <div className="flex items-center gap-2 pl-4 grow">
        <input
          suppressHydrationWarning
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-linear-to-r from-blue-950 to-red-700 text-white text-[14px] font-semibold tracking-tighter px-4 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        <Send className="w-3 h-3 transform -rotate-45" />
        SUBSCRIBE
      </button>
    </form>
  );
}