import React from 'react';

interface AquaShieldLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showBadge?: boolean;
  className?: string;
}

export const AquaShieldLogo: React.FC<AquaShieldLogoProps> = ({
  size = 'md',
  variant = 'light',
  showBadge = true,
  className = ''
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }[size];

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  }[size];

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* SVG AquaShield Shield Icon */}
      <svg
        className={`${iconDimensions} shrink-0 drop-shadow-sm`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoShieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E88E5" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>
          <linearGradient id="logoDropGrad" x1="50" y1="35" x2="50" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0288D1" />
          </linearGradient>
        </defs>

        {/* Shield Body */}
        <path
          d="M 50 14 C 68 18 84 20 84 25 C 84 55 68 76 50 86 C 32 76 16 55 16 25 C 16 20 32 18 50 14 Z"
          fill="url(#logoShieldGrad)"
        />

        {/* Inner Highlight */}
        <path
          d="M 50 17 C 66 21 80 23 80 27 C 80 53 66 72 50 82 C 34 72 20 53 20 27 C 20 23 34 21 50 17 Z"
          stroke="#90CAF9"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          fill="none"
        />

        {/* Nodes */}
        <circle cx="50" cy="14" r="4.5" fill="#00E5FF" stroke="#0D47A1" strokeWidth="1.5" />
        <circle cx="16" cy="25" r="4" fill="#00E5FF" stroke="#0D47A1" strokeWidth="1.5" />
        <circle cx="84" cy="25" r="4" fill="#00E5FF" stroke="#0D47A1" strokeWidth="1.5" />

        {/* Droplet */}
        <path
          d="M 50 35 C 50 35 66 52 66 61 C 66 70 58.8 77 50 77 C 41.2 77 34 70 34 61 C 34 52 50 35 50 35 Z"
          fill="url(#logoDropGrad)"
        />

        {/* Inner Core */}
        <circle cx="50" cy="62" r="4.5" fill="#FFFFFF" />
      </svg>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`font-headline-sm ${textSizes} tracking-tight font-bold font-sans`}>
          <span className={variant === 'dark' ? 'text-white' : 'text-[#0a3b2a]'}>Aqua</span>
          <span className="text-[#1d59c1]">Shield</span>
        </span>

        {showBadge && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-label-sm font-semibold tracking-wide bg-[#e1f5fe] text-[#0277bd] border border-[#b3e5fc]/60">
            OS AI
          </span>
        )}
      </div>
    </div>
  );
};
