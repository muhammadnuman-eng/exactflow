'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import {
  NAV_LINKS,
  NAV_AGENT_COLUMNS,
  NAV_GUIDE_ITEMS,
} from '../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedKey, setExpandedKey] = useState<'guide' | 'agents' | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedKey(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const primaryLinks = NAV_LINKS.filter((l) => !l.hasDropdown);
  const dropdownLinks = NAV_LINKS.filter((l) => l.hasDropdown);

  const toggleExpanded = (key: 'guide' | 'agents') => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-[70] h-full w-full sm:w-[320px] sm:max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out will-change-transform overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          suppressHydrationWarning
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 z-10 p-1 text-gray-700 hover:text-[#db1521] transition-colors cursor-pointer"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col px-5 pt-5 pb-8">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`py-2.5 text-[16px] font-[500] transition-colors ${
                link.isActive ? 'text-[#db1521]' : 'text-gray-900 hover:text-[#db1521]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {dropdownLinks.map((link) => {
            const key = link.dropdownKey!;
            const isExpanded = expandedKey === key;

            return (
              <div key={link.label} className="border-t border-gray-100 mt-2 pt-2">
                <button
                  type="button"
                  onClick={() => toggleExpanded(key)}
                  className="flex w-full items-center justify-between py-2.5 text-[16px] font-medium text-gray-900"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {isExpanded && key === 'guide' && (
                  <div className="flex flex-col pb-2 pl-2">
                    {NAV_GUIDE_ITEMS.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        className="py-2 text-[15px] text-gray-700 hover:text-[#db1521]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {isExpanded && key === 'agents' && (
                  <div className="grid grid-cols-1 gap-1 pb-2 pl-1 sm:grid-cols-2">
                    {NAV_AGENT_COLUMNS.flat().map((agent) => (
                      <Link
                        key={agent.id}
                        href={agent.href}
                        onClick={onClose}
                        className="flex items-center gap-2.5 rounded-lg py-2 pr-2 hover:bg-gray-50"
                      >
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          width={28}
                          height={28}
                          className="h-7 w-7 shrink-0 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                          <p className="text-[14px] font-medium text-gray-900">{agent.name}</p>
                          <p className="text-[12px] text-gray-500">{agent.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
