import React from 'react';

interface EmblemBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export const EmblemBadge: React.FC<EmblemBadgeProps> = ({ size = 'md', className = '', animate = true }) => {
  const sizeMap = {
    sm: 'w-24 h-24 text-[9px]',
    md: 'w-48 h-48 sm:w-64 sm:h-64 text-[10px] sm:text-[12px]',
    lg: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 text-[11px] sm:text-[14px]'
  };

  const outerRadius = size === 'sm' ? 40 : size === 'md' ? 95 : 140;
  const viewBoxSize = size === 'sm' ? 100 : size === 'md' ? 220 : 320;
  const centerCoord = viewBoxSize / 2;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#004D98]/40 via-[#EDBB00]/30 to-[#A50044]/40 blur-xl opacity-70 animate-pulse pointer-events-none" />

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
            <linearGradient id="blaugranaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004D98" />
              <stop offset="100%" stopColor="#A50044" />
            </linearGradient>
          </defs>

          {/* Outer Gold Ring Borders */}
          <circle cx={centerCoord} cy={centerCoord} r={outerRadius + 8} fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <circle cx={centerCoord} cy={centerCoord} r={outerRadius - 12} fill="#060e1a" stroke="url(#goldGradient)" strokeWidth="2" />

          {/* Circular Text */}
          <text fill="url(#goldGradient)" fontWeight="800" letterSpacing="3.5" className="uppercase font-mono">
            <textPath href={`#textCircle-${size}`} startOffset="0%">
              MÉS QUE UN CLUB • BLAUGRANA BENGALURU • FORÇA BARÇA •
            </textPath>
          </text>
        </svg>

        {/* Inner Crest Core */}
        <div className="absolute inset-0 flex items-center justify-center p-[18%]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#003B73] via-[#09152b] to-[#7A0032] p-2 shadow-2xl border border-[#EDBB00]/60 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Background Senyera stripes overlay */}
            <div className="absolute top-0 right-0 left-0 h-1.5 senyera-accent opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#EDBB00]/15 via-transparent to-transparent pointer-events-none" />

            {/* Official FCB Bengaluru Crest */}
            <img
              src="https://res.cloudinary.com/dy6mwk08r/image/upload/v1792571429/fcb_logo_png_4x_vbndt1.png"
              alt="Official FCB Bengaluru Crest"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_4px_16px_rgba(237,187,0,0.6)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Emblem Subtitle Tagline below */}
      <div className="mt-2 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#004D98]/30 border border-[#EDBB00]/30 text-[#EDBB00] text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg">
          CULÉS IN BENGALURU
        </span>
      </div>
    </div>
  );
};
