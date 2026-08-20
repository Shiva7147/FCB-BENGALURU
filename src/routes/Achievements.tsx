import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { INITIAL_ACHIEVEMENTS } from '../data/mockData';
import { Trophy, Star, Shield, Sparkles, Award, History, Heart } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="TROPHY ROOM & LEGACY"
        title="FC Barcelona Heritage & Glory"
        subtitle="Exploring European crowns, domestic supremacy, La Masia prodigies, Cruyffian philosophy, and legendary El Clásico triumphs."
      />

      {/* Trophy Counters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-panel-gold p-6 rounded-2xl border border-[#EDBB00]/40 text-center space-y-2">
          <Trophy className="w-8 h-8 text-[#EDBB00] mx-auto" />
          <p className="text-3xl sm:text-4xl font-black text-white font-mono">5</p>
          <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">UEFA Champions League</p>
        </div>

        <div className="glass-panel-gold p-6 rounded-2xl border border-[#EDBB00]/40 text-center space-y-2">
          <Award className="w-8 h-8 text-[#EDBB00] mx-auto" />
          <p className="text-3xl sm:text-4xl font-black text-white font-mono">27</p>
          <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">La Liga Titles</p>
        </div>

        <div className="glass-panel-gold p-6 rounded-2xl border border-[#EDBB00]/40 text-center space-y-2">
          <Star className="w-8 h-8 text-[#EDBB00] mx-auto" />
          <p className="text-3xl sm:text-4xl font-black text-white font-mono">31</p>
          <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Copa del Rey Cups</p>
        </div>

        <div className="glass-panel-gold p-6 rounded-2xl border border-[#EDBB00]/40 text-center space-y-2">
          <Sparkles className="w-8 h-8 text-[#EDBB00] mx-auto" />
          <p className="text-3xl sm:text-4xl font-black text-white font-mono">6</p>
          <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Trophies in 2009 (Sextuple)</p>
        </div>
      </div>

      {/* Heritage Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INITIAL_ACHIEVEMENTS.map((ach) => (
          <div
            key={ach.id}
            className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#EDBB00]/50 transition-all text-left space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/30 text-[#EDBB00] text-xs font-black uppercase font-mono">
                {ach.category}
              </span>
              <span className="text-xs text-gray-400 font-mono font-bold">
                {ach.year}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              {ach.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              {ach.description}
            </p>

            {ach.imageUrl && (
              <div className="rounded-2xl overflow-hidden h-48 border border-white/10 mt-4">
                <img src={ach.imageUrl} alt={ach.title} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* La Masia & Women's Football Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel-blaugrana p-8 rounded-3xl border border-white/10 text-left space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-widest">
            <History className="w-4 h-4" />
            <span>LA MASIA YOUTH ACADEMY</span>
          </div>
          <h3 className="text-2xl font-black text-white uppercase">The Cradle of Greatness</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            La Masia isn't just an academy; it's a worldview. It produced 3 Ballon d'Or finalists in a single year (Messi, Xavi, Iniesta in 2010) and continues to blossom with Gavi, Pedri, Cubarsí, and Lamine Yamal.
          </p>
        </div>

        <div className="glass-panel-blaugrana p-8 rounded-3xl border border-white/10 text-left space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-widest">
            <Heart className="w-4 h-4 text-[#A50044]" />
            <span>BARÇA FEMENTI SUPREMACY</span>
          </div>
          <h3 className="text-2xl font-black text-white uppercase">World Champions of Women's Football</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Dominating Europe with 3 UEFA Women's Champions League crowns, Ballon d'Or winners Aitana Bonmatí and Alexia Putellas leading the global game with style and unmatched technical grace.
          </p>
        </div>
      </div>

    </div>
  );
};
