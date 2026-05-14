'use client'; // Client component hona zaroori hai

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Pathname check karne ke liye
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';

export const Navbar = () => {
  const pathname = usePathname(); // Current URL get karein

  return (
    <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-nowrap">
      {NAV_LINKS.map((link, index) => {
        // Check karein ke kya current path link ke href se match karta hai
        const isActive = pathname === link.href;

        return (
          <span
            key={link.label}
            className="overflow-hidden inline-flex"
          >
            <Link
              href={link.href}
              style={{ animationDelay: `${index * 80}ms` }}
              className={`animate-nav-rise flex items-center gap-1 text-[16px] font-medium transition-colors whitespace-nowrap ${
                isActive ? 'text-[#db1521]' : 'text-gray-800 hover:text-[#db1521]'
              }`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};