import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImageWithFallback } from '../components/PosterFallback';
import { RSVPModal } from '../components/RSVPModal';
import { useAdmin } from '../context/AdminContext';
import { Screening } from '../types';
import { Calendar, Clock, MapPin, Ticket, Flame, Trophy, Info } from 'lucide-react';

import { ScreeningHubPlanner } from '../components/ScreeningHubPlanner';

export const Screenings: React.FC = () => {
  const { screenings } = useAdmin();
  const [activeRSVPScreening, setActiveRSVPScreening] = useState<Screening | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

  const filteredScreenings = screenings.filter(sc => {
    if (filter === 'upcoming') return sc.isUpcoming;
    if (filter === 'past') return !sc.isUpcoming;
    return true;
  });

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="MATCHDAY SCREENINGS"
        title="FC Barcelona Live Screenings in Bengaluru"
        subtitle="Join fellow Culés in Bengaluru to watch Barça live under the lights with high-energy chants and passionate fan atmosphere."
      />

      {/* Screening Hub Route Planner */}
      <ScreeningHubPlanner />

      {/* Filter Tabs */}
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
            filter === 'upcoming'
              ? 'bg-[#EDBB00] text-[#060e1a] shadow-lg'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Upcoming Screenings
        </button>
        <button
          onClick={() => setFilter('past')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
            filter === 'past'
              ? 'bg-[#004D98] text-white shadow-lg'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Past Match Highlights
        </button>
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
            filter === 'all'
              ? 'bg-white/20 text-white shadow-lg'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          All Screenings ({screenings.length})
        </button>
      </div>

      {/* Screenings Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredScreenings.map((sc) => (
          <div
            key={sc.id}
            className={`ticket-stub rounded-3xl overflow-hidden border transition-all duration-300 shadow-2xl flex flex-col justify-between ${
              sc.isUpcoming ? 'border-[#EDBB00]/60 hover:border-[#EDBB00]' : 'border-white/10 opacity-90'
            }`}
          >
            {/* Top Senyera Accent Strip */}
            <div className="senyera-barca-strip" />
            {/* Poster Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#071120]">
              <ImageWithFallback
                src={sc.poster}
                alt={sc.match}
                title={sc.match}
                subtitle={sc.competition}
                date={sc.date}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md ${
                  sc.isUpcoming ? 'bg-[#A50044] text-white' : 'bg-gray-800 text-gray-300'
                }`}>
                  {sc.isUpcoming ? 'UPCOMING SCREENING' : 'COMPLETED SCREENING'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#060e1a]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-bold text-[#EDBB00] font-mono">
                {sc.rsvpCount} Culés Attending
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-wider mb-1">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{sc.competition}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {sc.match}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {sc.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-200">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#EDBB00] shrink-0" />
                  <span><strong>Date:</strong> {sc.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#EDBB00] shrink-0" />
                  <span><strong>Timing:</strong> {sc.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#EDBB00] shrink-0" />
                  <span><strong>Venue:</strong> {sc.venue}</span>
                </div>
                {sc.entryFee && (
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span><strong>Entry Cover:</strong> {sc.entryFee}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
                {sc.isUpcoming ? (
                  <button
                    onClick={() => setActiveRSVPScreening(sc)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>RSVP Now</span>
                  </button>
                ) : (
                  <span className="flex-1 py-3 text-center rounded-xl bg-white/5 border border-white/10 text-gray-400 font-bold text-xs uppercase tracking-wider">
                    Screening Concluded
                  </span>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      {activeRSVPScreening && (
        <RSVPModal
          screening={activeRSVPScreening}
          onClose={() => setActiveRSVPScreening(null)}
        />
      )}

    </div>
  );
};
