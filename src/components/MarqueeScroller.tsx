import React from 'react';

interface MarqueeScrollerProps {
  phrases?: string[];
  speed?: 'normal' | 'slow';
  variant?: 'gold' | 'blaugrana' | 'dark';
}

export const MarqueeScroller: React.FC<MarqueeScrollerProps> = ({
  phrases = ['MÉS QUE UN CLUB', 'FORÇA BARÇA', 'BLAUGRANA BENGALURU', 'CULÉS IN BENGALURU', 'MATCH DAY'],
  variant = 'gold'
}) => {
  const content = phrases.join(' • ') + ' • ';

  const variantStyles = {
    gold: 'bg-[#071120] text-[#EDBB00] border-y border-[#EDBB00]/30',
    blaugrana: 'bg-gradient-to-r from-[#004D98] via-[#060e1a] to-[#A50044] text-white border-y border-white/10',
    dark: 'bg-[#040912] text-gray-300 border-y border-white/10'
  };

  return (
    <div className={`w-full overflow-hidden py-3 text-xs sm:text-sm font-black tracking-widest uppercase select-none ${variantStyles[variant]}`}>
      <div className="animate-marquee whitespace-nowrap flex space-x-4">
        <span>{content}{content}{content}{content}</span>
        <span>{content}{content}{content}{content}</span>
      </div>
    </div>
  );
};
