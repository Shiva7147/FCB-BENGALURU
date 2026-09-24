import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ChantCard } from '../components/ChantCard';
import { INITIAL_CHANTS } from '../data/mockData';
import { Volume2, Flame, Trophy, Sparkles } from 'lucide-react';

import { SpotifyPlayer } from '../components/SpotifyPlayer';

export const Chants: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="BARÇA MATCHDAY CHANTS"
        title="Sing With Spotify Camp Nou & Bengaluru Culés"
        subtitle="Master the lyrics, Catalan translations, and stadium chant audio for matchday screenings in Bangalore."
      />

      {/* Spotify Camp Nou Atmosphere Soundscape Player */}
      <SpotifyPlayer />

      {/* Hero Banner Banner */}
      <div className="glass-panel-gold rounded-3xl p-8 text-center space-y-4 border border-[#EDBB00]/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 senyera-accent" />
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest">
          <Volume2 className="w-4 h-4" />
          <span>CAMP NOU ACOUSTIC EXPERIENCE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
          Blaugrana al vent, un crit valent!
        </h2>
        <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto">
          Every matchday screening in Bengaluru begins with our collective rendition of Cant del Barça. Click play on any chant card below to simulate the stadium audio visualizer!
        </p>
      </div>

      {/* Grid of Chants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INITIAL_CHANTS.map((chant) => (
          <ChantCard key={chant.id} chant={chant} />
        ))}
      </div>

    </div>
  );
};
