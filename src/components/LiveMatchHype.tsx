import React, { useState } from 'react';
import { Flame, Vote, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PollOption {
  id: string;
  name: string;
  votes: number;
  color: string;
}

export const LiveMatchHype: React.FC = () => {
  const [options, setOptions] = useState<PollOption[]>([
    { id: 'yamal', name: 'Lamine Yamal (Special 1v1 Goal)', votes: 142, color: 'from-[#EDBB00] to-[#B8860B]' },
    { id: 'raphinha', name: 'Raphinha (Thunderbolt Strike)', votes: 98, color: 'from-[#004D98] to-[#002855]' },
    { id: 'lewy', name: 'Robert Lewandowski (Header)', votes: 115, color: 'from-[#A50044] to-[#500021]' },
    { id: 'olmo', name: 'Dani Olmo (Turn & Finish)', votes: 64, color: 'from-[#25D366] to-[#128C7E]' }
  ]);

  const [votedOptionId, setVotedOptionId] = useState<string | null>(null);

  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0);

  const handleVote = (id: string) => {
    if (votedOptionId) return;
    setVotedOptionId(id);
    setOptions(prev =>
      prev.map(o => (o.id === id ? { ...o, votes: o.votes + 1 } : o))
    );
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    } catch (e) {}
  };

  return (
    <div className="glass-panel-gold p-6 sm:p-10 rounded-3xl border border-[#EDBB00]/40 text-left space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#A50044] text-white text-xs font-black uppercase tracking-widest mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>LIVE MATCHDAY HYPE CENTRE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            El Clásico Fan Prediction & Venue Check-Ins
          </h3>
        </div>

        {/* Live Counter Badge */}
        <div className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/5 border border-[#EDBB00]/40 text-xs font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
          <span className="text-[#EDBB00] font-bold">184 CULÉS CHECKED IN FOR TONIGHT</span>
        </div>
      </div>

      {/* Poll Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-gray-300 font-bold uppercase">
            COMMUNITY POLL: Who scores first for Barça in El Clásico?
          </span>
          <span className="text-xs font-mono text-[#EDBB00] font-bold">
            {totalVotes} Total Votes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((opt) => {
            const percentage = Math.round((opt.votes / totalVotes) * 100);
            const isVoted = votedOptionId === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                disabled={!!votedOptionId}
                className={`p-4 rounded-2xl border transition-all relative overflow-hidden text-left ${
                  isVoted
                    ? 'border-[#EDBB00] bg-[#004D98]/40 shadow-xl'
                    : votedOptionId
                    ? 'border-white/5 bg-white/5 opacity-80 cursor-default'
                    : 'border-white/10 bg-white/5 hover:border-[#EDBB00]/60 hover:bg-white/10'
                }`}
              >
                {/* Background Progress Fill */}
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${opt.color} opacity-25 transition-all duration-500 pointer-events-none`}
                  style={{ width: `${percentage}%` }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-sm font-black text-white uppercase block">
                      {opt.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-300 font-bold">
                      {opt.votes} Votes
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-base font-black text-[#EDBB00] font-mono">
                      {percentage}%
                    </span>
                    {isVoted && <CheckCircle2 className="w-5 h-5 text-[#25D366]" />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
