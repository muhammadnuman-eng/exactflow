'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import { NavDropdown } from './NavDropdown';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-nowrap">
      {NAV_LINKS.map((link, index) => {
        const isActive =
          pathname === link.href ||
          (link.dropdownKey === 'agents' && pathname.includes('-ai-agent')) ||
          (link.dropdownKey === 'guide' &&
            (pathname === '/guide' || pathname === '/tutorial'));

        if (link.hasDropdown && link.dropdownKey) {
          return (
            <span key={link.label} className="overflow-visible inline-flex">
              <NavDropdown
                label={link.label}
                dropdownKey={link.dropdownKey}
                isActive={isActive}
                animationDelay={`${index * 80}ms`}
              />
            </span>
          );
        }

        return (
          <span key={link.label} className="overflow-hidden inline-flex">
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
