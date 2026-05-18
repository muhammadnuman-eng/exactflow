import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      suppressHydrationWarning
      className={`w-full bg-transparent outline-none text-gray-700 px-4 py-3 ${className}`}
    />
  );
};