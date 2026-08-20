import React, { useState } from 'react';
import { Shield, Trophy, Calendar } from 'lucide-react';

interface PosterFallbackProps {
  src?: string;
  alt: string;
  title: string;
  subtitle?: string;
  date?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<PosterFallbackProps> = ({
  src,
  alt,
  title,
  subtitle,
  date,
  className = 'w-full h-full object-cover'
}) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <div className={`relative bg-gradient-to-br from-[#003366] via-[#09152b] to-[#66002b] border border-[#EDBB00]/30 flex flex-col items-center justify-between p-6 text-center overflow-hidden shadow-xl ${className}`}>
        {/* Senyera top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 senyera-accent" />
        
        {/* Subtle background match pattern */}
        <div className="absolute inset-0 bg-jersey-pattern opacity-30 pointer-events-none" />
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <Shield className="w-48 h-48 text-[#EDBB00]" />
        </div>

        {/* Top badge */}
        <div className="relative z-10 flex items-center space-x-1.5 bg-[#004D98]/60 border border-[#EDBB00]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#EDBB00] tracking-wider uppercase">
          <Trophy className="w-3.5 h-3.5" />
          <span>BLAUGRANA MATCHDAY</span>
        </div>

        {/* Center Title & Opponent */}
        <div className="relative z-10 my-auto py-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase drop-shadow-md">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-[#EDBB00] mt-1 tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom Details */}
        <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
          <span className="flex items-center space-x-1 text-gray-300 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#EDBB00]" />
            <span>{date || 'Matchday Screening'}</span>
          </span>
          <span className="font-bold text-[#EDBB00] uppercase tracking-wider text-[10px]">
            Bengaluru Culés
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};
