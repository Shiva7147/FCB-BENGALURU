import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { CoreMember } from '../types';
import { X, Shield, Star, Heart } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from '../components/SocialIcons';

export const CoreMembers: React.FC = () => {
  const { coreMembers } = useAdmin();
  const [selectedMember, setSelectedMember] = useState<CoreMember | null>(null);
  const [selectedDept, setSelectedDept] = useState<string>('All');

  // Rating statistics per member for collectible card feel
  const memberStats: Record<string, { rating: number; community: number; leadership: number; matchday: number; football: number }> = {
    'cm-1': { rating: 96, community: 98, leadership: 97, matchday: 95, football: 92 },
    'cm-2': { rating: 95, community: 97, leadership: 94, matchday: 96, football: 91 },
    'cm-3': { rating: 95, community: 95, leadership: 96, matchday: 98, football: 90 },
    'cm-4': { rating: 94, community: 96, leadership: 94, matchday: 95, football: 92 },
    'cm-5': { rating: 95, community: 94, leadership: 93, matchday: 98, football: 90 },
    'cm-6': { rating: 94, community: 93, leadership: 95, matchday: 92, football: 89 },
    'cm-7': { rating: 93, community: 94, leadership: 91, matchday: 92, football: 90 },
    'cm-8': { rating: 93, community: 92, leadership: 90, matchday: 93, football: 88 },
    'cm-9': { rating: 92, community: 93, leadership: 90, matchday: 97, football: 92 },
    'cm-10': { rating: 92, community: 92, leadership: 90, matchday: 96, football: 91 },
    'cm-11': { rating: 91, community: 91, leadership: 89, matchday: 95, football: 90 },
    'cm-12': { rating: 92, community: 94, leadership: 90, matchday: 97, football: 93 },
    'cm-13': { rating: 91, community: 93, leadership: 88, matchday: 92, football: 89 },
    'cm-14': { rating: 95, community: 93, leadership: 92, matchday: 95, football: 99 }
  };

  const departments = ['All', 'Core Team', 'Working Committee', 'Football & Operations'];

  const filteredMembers = coreMembers.filter(m =>
    selectedDept === 'All' ? true : m.department === selectedDept
  );

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="THE PEOPLE BEHIND THE PASSION"
        title="FCB Bengaluru Team & Core Leads"
        subtitle="Meet the founders, executives, working committee, and screening admins who make every matchday in Bengaluru come alive."
      />

      {/* Volunteer for FCB Bengaluru CTA Banner */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-[#EDBB00]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-2xl">
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">JOIN THE CREW</span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Volunteer For FCB Bengaluru?</h3>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
            Want to help organize matchday screenings, manage turf matches, lead chants, or run social media? We are always looking for passionate Culés.
          </p>
        </div>

        <a
          href="https://wa.me/919777912631?text=Hi%20Aakash,%20I'd%20love%20to%20volunteer%20for%20FCB%20Bengaluru!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-xl shrink-0"
        >
          <span>Chat With Aakash on WhatsApp</span>
        </a>
      </div>

      {/* Team Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedDept === dept
                ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Collectible Trading Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member) => {
          const stats = memberStats[member.id] || { rating: 92, community: 92, leadership: 91, matchday: 93, football: 90 };
          
          return (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="fifa-card relative rounded-3xl p-5 bg-gradient-to-b from-[#091830] via-[#060e1a] to-[#70002b] border-2 border-[#EDBB00]/80 shadow-2xl cursor-pointer select-none text-left overflow-hidden group hover:scale-[1.02] transition-transform"
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
                    {member.department === 'Football & Operations' ? 'OPS' : member.department === 'Working Committee' ? 'ADMIN' : 'LEAD'}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              {/* Portrait Image with perfect framing */}
              <div className="relative w-36 h-36 mx-auto mt-2 rounded-2xl overflow-hidden border-2 border-[#EDBB00]/60 shadow-xl bg-black/50">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80`;
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
                {member.department && (
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300 uppercase">
                    {member.department}
                  </span>
                )}
              </div>

              {/* Ratings Matrix */}
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
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#EDBB00] shrink-0 bg-black/50 shadow-lg">
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover object-top" />
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
