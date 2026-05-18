'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NAV_AGENT_COLUMNS, NAV_GUIDE_ITEMS, type NavAgentItem } from '../constants/navigation';

const dropdownEase = [0.25, 0.1, 0.25, 1] as const;

const dropdownPanel = {
  hidden: { opacity: 0, y: -10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: dropdownEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.16, ease: dropdownEase },
  },
};

const dropdownList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const dropdownItem = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: dropdownEase },
  },
};

type DropdownKey = 'guide' | 'agents';

interface NavDropdownProps {
  label: string;
  dropdownKey: DropdownKey;
  isActive: boolean;
  animationDelay?: string;
}

function AgentMenuItem({
  agent,
  onNavigate,
}: {
  agent: NavAgentItem;
  onNavigate: () => void;
}) {
  return (
    <Link
      id={agent.id}
      href={agent.href}
      role="menuitem"
      onClick={onNavigate}
      className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
    >
      <Image
        src={agent.image}
        alt={agent.name}
        width={30}
        height={30}
        className="h-[30px] w-[30px] shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0">
        <p className="text-[15px] font-medium leading-tight text-gray-900 transition-colors group-hover:text-[#db1521]">
          {agent.name}
        </p>
        <p className="text-[13px] leading-tight text-gray-500 transition-colors group-hover:text-[#db1521]">
          {agent.role}
        </p>
      </div>
    </Link>
  );
}

export const NavDropdown = ({
  label,
  dropdownKey,
  isActive,
  animationDelay,
}: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  const buttonId = `${dropdownKey}-button`;
  const close = () => setOpen(false);

  return (
    <div ref={containerRef} className="relative inline-flex overflow-visible">
      <button
        type="button"
        id={buttonId}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{ animationDelay }}
        className={`animate-nav-rise flex cursor-pointer items-center gap-1 text-[16px] font-medium whitespace-nowrap transition-colors ${
          isActive ? 'text-[#db1521]' : 'text-gray-800 hover:text-[#db1521]'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div className="absolute top-full left-1/2 z-50 mt-3 -translate-x-1/2">
        <AnimatePresence>
          {open && (
            <motion.div
              role="menu"
              aria-labelledby={buttonId}
              variants={dropdownPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="origin-top"
            >
              {dropdownKey === 'agents' ? (
                <div className="min-w-[420px] rounded-2xl border border-gray-100 bg-white py-2 shadow-xl">
                  <motion.div
                    className="grid grid-cols-2 gap-x-1"
                    variants={dropdownList}
                    initial="hidden"
                    animate="visible"
                  >
                    {NAV_AGENT_COLUMNS.map((column, colIndex) => (
                      <motion.div key={colIndex} className="flex flex-col">
                        {column.map((agent) => (
                          <motion.div key={agent.id} variants={dropdownItem}>
                            <AgentMenuItem agent={agent} onNavigate={close} />
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  className="flex rounded-2xl border border-gray-100 bg-white py-1 shadow-xl"
                  variants={dropdownList}
                  initial="hidden"
                  animate="visible"
                >
                  {NAV_GUIDE_ITEMS.map((item) => (
                    <motion.div key={item.id} variants={dropdownItem}>
                      <Link
                        id={item.id}
                        href={item.href}
                        role="menuitem"
                        onClick={close}
                        className="block whitespace-nowrap px-5 py-3 text-[15px] font-medium text-gray-900 transition-colors hover:text-[#db1521] first:rounded-l-2xl last:rounded-r-2xl hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
