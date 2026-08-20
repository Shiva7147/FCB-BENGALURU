import React, { useState, useEffect } from 'react';

interface MatchCountdownProps {
  targetDateStr?: string;
}

export const MatchCountdown: React.FC<MatchCountdownProps> = () => {
  // Target El Clásico Screening Kickoff Time
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 rounded-2xl bg-[#060e1a]/90 border border-[#EDBB00]/40 text-center space-y-2">
      <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block font-bold">
        EL CLÁSICO SCREENING KICKOFF COUNTDOWN
      </span>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <span className="text-xl sm:text-2xl font-black text-white font-mono block">{timeLeft.days}</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase">Days</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <span className="text-xl sm:text-2xl font-black text-white font-mono block">{timeLeft.hours}</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase">Hours</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <span className="text-xl sm:text-2xl font-black text-[#EDBB00] font-mono block">{timeLeft.minutes}</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase">Mins</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <span className="text-xl sm:text-2xl font-black text-[#A50044] font-mono block">{timeLeft.seconds}</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase">Secs</span>
        </div>
      </div>
    </div>
  );
};
