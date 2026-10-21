import React from 'react';

interface EmblemBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export const EmblemBadge: React.FC<EmblemBadgeProps> = ({ size = 'md', className = '', animate = true }) => {
  const sizeMap = {
    sm: 'w-28 h-28 text-[9px]',
    md: 'w-56 h-56 sm:w-72 sm:h-72 text-[10.5px] sm:text-[12px]',
    lg: 'w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 text-[12px] sm:text-[14px]'
  };

  const viewBoxSize = size === 'sm' ? 120 : size === 'md' ? 240 : 320;
  const centerCoord = viewBoxSize / 2;
  const outerRadius = size === 'sm' ? 45 : size === 'md' ? 95 : 130;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#004D98]/50 via-[#EDBB00]/30 to-[#A50044]/50 blur-2xl opacity-75 animate-pulse pointer-events-none" />

      {/* SVG Container */}
      <div className={`relative ${sizeMap[size]} transition-all duration-300`}>
        {/* Animated Outer Text Ring */}
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className={`w-full h-full ${animate ? 'animate-slow-rotate' : ''}`}
        >
          <defs>
            <path
              id={`textCircle-${size}`}
              d={`M ${centerCoord},${centerCoord} m -${outerRadius},0 a ${outerRadius},${outerRadius} 0 1,1 ${outerRadius * 2},0 a ${outerRadius},${outerRadius} 0 1,1 -${outerRadius * 2},0`}
            />
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF099" />
              <stop offset="50%" stopColor="#EDBB00" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <radialGradient id="innerBlaugrana" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#004D98" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#060e1a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#A50044" stopOpacity="0.9" />
            </radialGradient>
          </defs>

          {/* Clean Outer Decorative Ring (outside the text track) */}
          <circle
            cx={centerCoord}
            cy={centerCoord}
            r={outerRadius + 18}
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.4"
          />

          {/* Outer Solid Track Border */}
          <circle
            cx={centerCoord}
            cy={centerCoord}
            r={outerRadius + 12}
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* Inner Solid Track Border */}
          <circle
            cx={centerCoord}
            cy={centerCoord}
            r={outerRadius - 12}
            fill="url(#innerBlaugrana)"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />

          {/* Circular Text - cleanly centered along text path with zero line clipping */}
          <text
            fill="url(#goldGradient)"
            fontWeight="800"
            letterSpacing="3"
            className="uppercase font-mono tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            <textPath href={`#textCircle-${size}`} startOffset="0%">
              MÉS QUE UN CLUB • BLAUGRANA BENGALURU • FORÇA BARÇA •
            </textPath>
          </text>
        </svg>

        {/* Inner Crest Core */}
        <div className="absolute inset-0 flex items-center justify-center p-[22%] pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Subtle Crest Backlight Glow */}
            <div className="absolute inset-0 rounded-full bg-[#EDBB00]/25 blur-md" />

            {/* Official FCB Bengaluru Crest */}
            <img
              src="https://res.cloudinary.com/dy6mwk08r/image/upload/v1792571429/fcb_logo_png_4x_vbndt1.png"
              alt="Official FCB Bengaluru Crest"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_6px_20px_rgba(237,187,0,0.65)]"
            />
          </div>
        </div>
      </div>

      {/* Emblem Subtitle Tagline below */}
      <div className="mt-3 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/40 text-[#EDBB00] text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-xl backdrop-blur-md">
          CULÉS IN BENGALURU
        </span>
      </div>
    </div>
  );
};
