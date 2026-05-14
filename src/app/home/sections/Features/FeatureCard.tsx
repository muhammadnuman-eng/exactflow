import React from 'react';
import { FeatureItem } from '../../types/feature';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  // SVG Icons built strictly from your HTML snippet
  const iconsMap = {
    eye: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15.5C9.67 15.5 7.69 14.05 6.89 12C7.69 9.95 9.67 8.5 12 8.5C14.33 8.5 16.31 9.95 17.11 12C16.31 14.05 14.33 15.5 12 15.5Z" fill="currentColor"></path>
        <path d="M12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5Z" fill="currentColor"></path>
      </svg>
    ),
    users: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"></path>
      </svg>
    ),
    shield: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"></path>
      </svg>
    ),
    key: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 19H16V15H13.32C12.18 17.42 9.72 19 7 19C3.14 19 0 15.86 0 12C0 8.14 3.14 5 7 5C9.72 5 12.17 6.58 13.32 9H24V15H22V19ZM18 17H20V13H22V11H11.94L11.71 10.33C11.01 8.34 9.11 7 7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17C9.11 17 11.01 15.66 11.71 13.67L11.94 13H18V17ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15ZM7 11C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11Z" fill="currentColor"></path>
      </svg>
    ),
  };

  return (
    <div className="px-5 py-4 rounded-2xl h-full transition-all duration-300 flex group bg-gradient-to-r from-[#C05AFF]/10 to-[#4D73F8]/10 ">
      <div className="flex items-center justify-center sm:justify-start gap-4 w-full">
        {/* Red Icon Container with Hover Animation */}
        <div className="flex rounded-lg p-2 text-[#db1521] transition-all duration-300 min-w-[48px] justify-center">
          {iconsMap[feature.iconType]}
        </div>
        
        {/* Texts */}
        <div className="flex flex-1 min-w-0 flex-col text-left">
          <h3 className="text-sm font-bold break-words text-[#061456] font-[700] font-[Inter] mb-0.5">
            {feature.title}
          </h3>
          <h4 className="text-xs break-words text-gray-900 font-[500] font-[Inter] ">
            {feature.description}
          </h4>
        </div>
      </div>
    </div>
  );
};