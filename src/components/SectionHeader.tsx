import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/30 border border-[#EDBB00]/40 text-[#EDBB00] text-xs font-extrabold uppercase tracking-widest mb-3 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#EDBB00] animate-ping" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
        {title}
      </h2>
      {/* Senyera accent underline */}
      <div className={`h-1 w-20 rounded-full senyera-accent mt-3 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl font-medium leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
