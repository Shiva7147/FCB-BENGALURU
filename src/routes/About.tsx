import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Users, Trophy, Flame, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EmblemBadge } from '../components/EmblemBadge';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <SectionHeader
        badge="ABOUT BENGALURU CULÉS"
        title="Where Bengaluru’s Blaugrana Family Comes Together"
        subtitle="Bringing Camp Nou energy, Catalan football culture, and matchday passion to the heart of Namma Bengaluru."
      />

      {/* Main Feature Story Banner with Emblem */}
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Emblem */}
        <div className="lg:col-span-5 flex justify-center">
          <EmblemBadge size="lg" />
        </div>

        {/* Right Story Text (Exact spec copy) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/40 text-[#EDBB00] text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MISSION & PURPOSE</span>
          </div>

          <blockquote className="text-lg sm:text-2xl font-black text-white leading-snug border-l-4 border-l-[#A50044] pl-4">
            "FC Barcelona Supporters Club Bengaluru brings together passionate Culés across the city to celebrate Barça’s football, history, style, and spirit. From match screenings and chants to turf games and community events, this is where Bengaluru’s Blaugrana family comes together."
          </blockquote>

          <p className="text-sm text-gray-300 leading-relaxed">
            Founded by dedicated fans who fell in love with Cruyff’s philosophy, Pep’s tiki-taka, Messi’s magic, and La Masia’s youth prodigies, our supporters club has grown into a thriving community across Indiranagar, Koramangala, Whitefield, and HSR Layout.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-bold text-[#EDBB00]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#EDBB00]" />
              <span>Official Screening Host</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#EDBB00]" />
              <span>Weekly 7v7 Turf Games</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#EDBB00]" />
              <span>Stadium Chant Sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#EDBB00]" />
              <span>Supporter Gear Drops</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars of FCB Supporters Club Bengaluru */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#004D98]/40 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-white uppercase">Match Screenings</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            High-voltage match nights at top venues across Bangalore with massive projection screens, quad audio surround, and chant leaders.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#A50044]/40 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-white uppercase">Turf Games</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Regular 7v7 and 5v5 weekend kickabouts where Bengaluru Culés put on the Blaugrana kit and play tiki-taka football.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#004D98]/40 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-white uppercase">Fan Culture</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Preserving and singing authentic Catalan chants, banners, flags, and building lifelong football friendships.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#A50044]/40 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-white uppercase">Blaugrana Identity</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Carrying the values of "Més que un club" through community charity, youth engagement, and respectful football passion.
          </p>
        </div>
      </div>

      {/* Slogan Banner */}
      <div className="glass-panel rounded-3xl p-10 text-center space-y-4 border border-[#EDBB00]/40">
        <h2 className="text-2xl sm:text-4xl font-black text-[#EDBB00] uppercase tracking-tight">
          More than a match. More than a screening. <br />
          This is where Culés become family.
        </h2>
        <div className="pt-4">
          <Link
            to="/join"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
          >
            <span>Become a Bengaluru Culé Member</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};
