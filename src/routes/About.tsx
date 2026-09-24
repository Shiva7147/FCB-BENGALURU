import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Users, Trophy, Flame, CheckCircle2, ArrowRight, Heart, Award, Star } from 'lucide-react';
import { EmblemBadge } from '../components/EmblemBadge';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <SectionHeader
        badge="ABOUT FCB BENGALURU • EST. 2021"
        title="Bengaluru's Official FC Barcelona Supporters Club"
        subtitle="Bringing Camp Nou energy, Blaugrana culture, and matchday passion to the heart of India's garden city."
      />

      {/* Main Feature Story Banner with Emblem */}
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Emblem */}
        <div className="lg:col-span-5 flex justify-center">
          <EmblemBadge size="lg" />
        </div>

        {/* Right Story Text (Exact Client Doc Section 1 & 7 Copy) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#004D98]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest border border-[#EDBB00]/40">
            OUR STORY • HOW IT ALL BEGAN
          </div>

          <blockquote className="text-lg sm:text-2xl font-black text-white leading-snug border-l-4 border-l-[#A50044] pl-4 font-mono">
            "It started with eight strangers, one screen, and a Barça vs Cádiz match."
          </blockquote>

          <p className="text-sm text-gray-300 leading-relaxed font-sans">
            No venue, no plan, no fanfare — just a shared love for FC Barcelona and the quiet hope that others felt it too. Eight of us showed up. We watched, we cheered, and somewhere between kickoff and the final whistle, we stopped being strangers.
          </p>

          <p className="text-sm text-gray-300 leading-relaxed font-sans">
            Word spread the way it always does when something feels real. A message here, a forward there. The circle grew. The chants got louder. The venues got bigger. Four years later, 500+ voices shook a room on a Clásico night in Bengaluru. We've been featured on La Liga's official Instagram and covered in Catalan press. We've hosted 30+ events — screenings, meetups, 5-a-side tournaments, and galas — and built a community of 1,500+ Culers across the city.
          </p>

          <p className="text-sm text-gray-200 font-serif italic border-l-2 border-[#EDBB00] pl-3">
            The heartbreaks came too — painful Champions League exits, Araújo's red card, those two minutes against Inter that still sting. But so did the joy: the domestic treble, the rise of Lamine Yamal, Koundé's strike in the Copa del Rey final, and rooms full of people losing their minds together. That's what we are. Not just a fan club. A family.
          </p>

          <div className="pt-2 text-xs font-black text-[#EDBB00] tracking-widest uppercase">
            Visca El Barça. Visca FCB Bengaluru.
          </div>
        </div>
      </div>

      {/* Mission & Vision Section (Client Doc Section 7) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#004D98]/50 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">OUR MISSION</span>
          <h3 className="text-2xl font-black text-white uppercase">Building India's Most Passionate Culés Community</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            To build Bengaluru's most passionate and inclusive FC Barcelona community — one that brings Culers together through shared experiences, creates a sense of belonging, and represents the values of FC Barcelona with pride, both on screen and off it.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#A50044]/50 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
            <Star className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">OUR VISION</span>
          <h3 className="text-2xl font-black text-white uppercase">Més Que Un Club Across Borders</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            To be India's most recognised FC Barcelona supporters club — a community that earns recognition from FC Barcelona, grows the Blaugrana fanbase across India, and proves that Més Que Un Club is not just a motto, but a way of life that transcends borders, languages, and time zones.
          </p>
        </div>
      </div>

      {/* 5 Core Community Values (Client Doc Section 7) */}
      <div className="space-y-6 text-left">
        <div className="border-l-4 border-l-[#A50044] pl-4">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">WHAT WE STAND FOR</span>
          <h2 className="text-3xl font-black text-white uppercase">COMMUNITY VALUES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">01</span>
            <h4 className="text-base font-black text-white uppercase">Belonging Before Everything</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              We were strangers once. Everyone who walks through our doors is welcomed like they've always been here. No gatekeeping, no hierarchy — just Culers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">02</span>
            <h4 className="text-base font-black text-white uppercase">Passion With Purpose</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              We don't just watch football. We celebrate it, debate it, live it. Every event, decision, and rupee spent is for the people who show up.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">03</span>
            <h4 className="text-base font-black text-white uppercase">Loyalty To The Crest</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Through trebles and humiliations, through Messi and after Messi, through good seasons and brutal ones — we stay. That loyalty is our foundation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">04</span>
            <h4 className="text-base font-black text-white uppercase">Inclusivity</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Football belongs to everyone. Our community reflects Bengaluru — diverse, curious, passionate, and open. Every background is welcome here.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">05</span>
            <h4 className="text-base font-black text-white uppercase">Excellence Off The Pitch</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              We hold ourselves to a high standard in how we run events and represent the club. FCB Bengaluru is Més Que Un Fan Club.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Statement (Section 2 & 7) */}
      <div className="glass-panel rounded-3xl p-10 text-center space-y-4 border border-[#EDBB00]/40">
        <h2 className="text-2xl sm:text-4xl font-black text-[#EDBB00] uppercase tracking-tight">
          “Més que un club. More than a matchday.”
        </h2>
        <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto">
          Join 1,500+ Culers in Bengaluru for live screenings, turf games, chants, and community galas.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            to="/join"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
          >
            <span>Become a Culer or Soci Member</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};
