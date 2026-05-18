// src/app/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  href?: string;
  children: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', className = "", href, ...props }: ButtonProps) => {
  
  // Agar className mein "py-" shamil nahi hai, tabhi default "py-4" lagao
  const hasPaddingY = className.includes('py-');
  const defaultPaddingY = hasPaddingY ? "" : "py-4";
  
  const baseStyles = `inline-flex items-center justify-center rounded-full transition-all duration-300 text-sm tracking-wide px-8 ${defaultPaddingY}`;
  
  const variants = {
    primary: "bg-[#db1521] text-white  shadow-md",
    ghost: "bg-transparent text-gray-700 hover:text-black",
    outline: "border border-[#db1521] text-[#db1521] hover:bg-[#db1521] hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button suppressHydrationWarning className={combinedClasses} {...props}>
      {children}
    </button>
  );
};