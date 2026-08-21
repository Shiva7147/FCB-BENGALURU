import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { CoreMember } from '../types';
import { X, Shield, Star, Heart } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from '../components/SocialIcons';

export const CoreMembers: React.FC = () => {
  const { coreMembers } = useAdmin();
  const [selectedMember, setSelectedMember] = useState<CoreMember | null>(null);

  // Tasteful rating statistics per member for collectible card feel (Rule #8)
  const memberStats: Record<string, { rating: number; community: number; leadership: number; matchday: number; football: number }> = {
    'cm-1': { rating: 95, community: 96, leadership: 94, matchday: 95, football: 92 },
    'cm-2': { rating: 93, community: 94, leadership: 92, matchday: 96, football: 90 },
    'cm-3': { rating: 94, community: 92, leadership: 90, matchday: 94, football: 97 },
    'cm-4': { rating: 92, community: 95, leadership: 91, matchday: 93, football: 89 }
  };

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="THE PEOPLE BEHIND THE PASSION"
        title="Core Team Player Cards"
        subtitle="A supporters club is only as strong as the people who show up for it. Click any card for detailed profiles."
      />

      {/* Collectible Trading Cards Grid (Rules #8 & #9) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreMembers.map((member) => {
          const stats = memberStats[member.id] || { rating: 90, community: 90, leadership: 90, matchday: 90, football: 90 };
          
          return (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="fifa-card relative rounded-3xl p-5 bg-gradient-to-b from-[#091830] via-[#060e1a] to-[#70002b] border-2 border-[#EDBB00]/80 shadow-2xl cursor-pointer select-none text-left overflow-hidden group"
            >
              {/* Pitch Line Overlay */}
              <div className="absolute inset-0 bg-jersey-pattern opacity-20 pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-1.5 senyera-accent" />

              {/* Card Top Strip: Rating & Position */}
              <div className="flex items-start justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-black text-[#EDBB00] font-mono leading-none drop-shadow-[0_2px_8px_rgba(237,187,0,0.6)]">
                    {stats.rating}
                  </span>
                  <span className="text-[10px] font-black text-white tracking-widest uppercase mt-0.5">
                    LEAD
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              {/* Large Portrait Image */}
              <div className="relative w-36 h-36 mx-auto mt-2 rounded-2xl overflow-hidden border-2 border-[#EDBB00]/60 shadow-xl bg-black/40">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Name & Role */}
              <div className="text-center mt-4 relative z-10 border-t border-[#EDBB00]/30 pt-3">
                <h3 className="text-lg font-black text-white uppercase tracking-tight truncate">
                  {member.name}
                </h3>
                <p className="text-[10px] font-extrabold text-[#EDBB00] uppercase tracking-widest mt-0.5 truncate">
                  {member.role}
                </p>
              </div>

              {/* Ratings Matrix (Rule #8) */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/10 text-[11px] font-mono text-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-400">COM:</span>
                  <span className="font-bold text-[#EDBB00]">{stats.community}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">LDR:</span>
                  <span className="font-bold text-white">{stats.leadership}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">MCH:</span>
                  <span className="font-bold text-[#EDBB00]">{stats.matchday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">FTB:</span>
                  <span className="font-bold text-white">{stats.football}</span>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider group-hover:text-[#EDBB00] transition-colors">
                  Click for Full Bio →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Member Detail Modal (Rule #10) */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#071120] border-2 border-[#EDBB00]/60 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left space-y-5">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#EDBB00] shrink-0">
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase">{selectedMember.name}</h3>
                <span className="text-xs font-bold text-[#EDBB00] uppercase tracking-wider font-mono">{selectedMember.role}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase font-mono">Member Profile & Bio</h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                {selectedMember.bio}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Fav Player: <strong className="text-[#EDBB00]">{selectedMember.favoritePlayer}</strong></span>
              <div className="flex items-center space-x-2">
                {selectedMember.socials.instagram && (
                  <a href={selectedMember.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#EDBB00]">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.socials.twitter && (
                  <a href={selectedMember.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#60A5FA]">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
