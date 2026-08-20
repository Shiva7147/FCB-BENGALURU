import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Flame, ArrowRight, ShieldCheck, Ticket, Megaphone, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { EmblemBadge } from '../components/EmblemBadge';
import { SectionHeader } from '../components/SectionHeader';
import { ImageWithFallback } from '../components/PosterFallback';
import { useAdmin } from '../context/AdminContext';
import { RSVPModal } from '../components/RSVPModal';
import { Screening } from '../types';

import { INITIAL_ACHIEVEMENTS } from '../data/mockData';

export const Home: React.FC = () => {
  const { screenings, announcements, gallery, coreMembers } = useAdmin();
  const achievements = INITIAL_ACHIEVEMENTS;
  const [activeRSVPScreening, setActiveRSVPScreening] = useState<Screening | null>(null);

  const upcomingScreenings = screenings.filter(s => s.isUpcoming);
  const latestScreening = upcomingScreenings.length > 0 ? upcomingScreenings[0] : screenings[0];
  const latestAnnouncement = announcements[0];
  const galleryPreview = gallery.slice(0, 3);
  const corePreview = coreMembers.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stadium-hero">
        {/* Ambient Stadium Lighting Effects */}
        <div className="absolute top-1/4 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#004D98]/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#A50044]/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-jersey-pattern opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest mb-8 shadow-xl animate-fadeIn">
            <Sparkles className="w-4 h-4 text-[#EDBB00]" />
            <span>THE OFFICIAL BENGALURU CULÉS DIGITAL HOME</span>
          </div>

          {/* Hero Emblem Badge (Rule #7) */}
          <div className="my-4 flex justify-center">
            <EmblemBadge size="md" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto mt-6">
            Més que un club. <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Now in Bengaluru.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Join Barcelona fans in Bengaluru for match screenings, chants, football nights, community events, turf games and the full Blaugrana experience.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-xl mx-auto">
            <Link
              to="/join"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#EDBB00] via-[#F3C623] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-[#EDBB00]/20 flex items-center justify-center space-x-2"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/screenings"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-blaugrana border border-white/20 text-white hover:border-[#EDBB00] font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <Ticket className="w-4 h-4 text-[#EDBB00]" />
              <span>View Screenings</span>
            </Link>

            <Link
              to="/gallery"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-extrabold text-sm uppercase tracking-wider transition-all"
            >
              Explore Gallery
            </Link>
          </div>

          {/* Quick Stats Strip below Hero */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#EDBB00] font-mono">1,200+</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Bengaluru Culés</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white font-mono">45+</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Match Screenings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#EDBB00] font-mono">60+</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Turf Kickabouts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white font-mono">100%</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Blaugrana Spirit</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LATEST SCREENING HIGHLIGHT */}
      {latestScreening && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="NEXT MATCH SCREENING"
            title="Experience Matchday Under Bengaluru Lights"
            subtitle="Gather with hundreds of Culés across Bengaluru. Quad stereo sound, chants, merchandise & stadium energy."
          />

          <div className="glass-panel-gold rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            {/* Poster column */}
            <div className="lg:col-span-5 h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative">
              <ImageWithFallback
                src={latestScreening.poster}
                alt={latestScreening.match}
                title={latestScreening.match}
                subtitle={latestScreening.competition}
                date={latestScreening.date}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#A50044] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                LIVE SCREENING
              </div>
            </div>

            {/* Details column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>{latestScreening.competition}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {latestScreening.match}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {latestScreening.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs text-gray-200">
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-[#EDBB00]" />
                  <span><strong>Date:</strong> {latestScreening.date}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Flame className="w-4 h-4 text-[#A50044]" />
                  <span><strong>Time:</strong> {latestScreening.time}</span>
                </div>
                <div className="flex items-center space-x-2.5 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-[#EDBB00]" />
                  <span><strong>Venue:</strong> {latestScreening.venue} ({latestScreening.venueAddress})</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-xs text-gray-400 block font-mono">RSVP Status</span>
                  <span className="text-sm font-extrabold text-[#EDBB00]">
                    {latestScreening.rsvpCount} Culés Registered
                  </span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveRSVPScreening(latestScreening)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>RSVP For Screening</span>
                  </button>
                  <Link
                    to="/screenings"
                    className="px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    All Screenings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. LATEST ANNOUNCEMENT PREVIEW */}
      {latestAnnouncement && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-l-4 border-l-[#A50044] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-widest">
                <Megaphone className="w-4 h-4 text-[#A50044]" />
                <span>LATEST COMMUNITY ANNOUNCEMENT • {latestAnnouncement.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                {latestAnnouncement.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-3xl">
                {latestAnnouncement.description}
              </p>
            </div>
            
            <Link
              to={latestAnnouncement.ctaLink || '/announcements'}
              className="shrink-0 px-6 py-3 rounded-xl bg-[#004D98] hover:bg-[#003B73] border border-[#EDBB00]/40 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
            >
              <span>{latestAnnouncement.ctaText || 'Read Announcements'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* 4. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="text-left">
            <span className="text-xs font-extrabold text-[#EDBB00] uppercase tracking-widest block mb-1">
              MATCHDAY MOMENTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Bengaluru Culés Gallery
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-wider hover:underline"
          >
            <span>View Full Gallery ({gallery.length}+ Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryPreview.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#071120] h-64 shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/40 to-transparent p-6 flex flex-col justify-end text-left">
                <span className="text-[10px] font-extrabold text-[#EDBB00] uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-base font-black text-white uppercase tracking-tight mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ACHIEVEMENTS & BARÇA HERITAGE HIGHLIGHT */}
      <section className="bg-gradient-to-b from-[#060e1a] via-[#09152b] to-[#060e1a] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="BARÇA HERITAGE"
            title="More Than Trophies. A Philosophy."
            subtitle="From Wembley 1992 to the historic 2009 Sextuple, experience the legacy that inspires Barcelona fans across the globe."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.slice(0, 4).map((ach) => (
              <div
                key={ach.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#EDBB00]/50 transition-all text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#004D98]/40 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#EDBB00] block">{ach.year}</span>
                <h4 className="text-lg font-black text-white uppercase">{ach.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/achievements"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore Barça Trophy Room</span>
              <ArrowRight className="w-4 h-4 text-[#EDBB00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CORE MEMBERS SNEAK PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="COMMUNITY LEADERSHIP"
          title="Driven by Bengaluru Culés"
          subtitle="Meet the core team coordinating match screenings, turf games, chants, and community gatherings."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePreview.map((member) => (
            <div
              key={member.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#EDBB00]/50 transition-all text-center space-y-4 group"
            >
              <div className="relative w-24 h-24 rounded-full mx-auto p-1 bg-gradient-to-br from-[#004D98] via-[#EDBB00] to-[#A50044] overflow-hidden shadow-xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div>
                <h4 className="text-lg font-black text-white uppercase tracking-tight">{member.name}</h4>
                <p className="text-xs font-bold text-[#EDBB00] uppercase tracking-wider mt-0.5">{member.role}</p>
              </div>

              <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">{member.bio}</p>

              <div className="pt-2 border-t border-white/10 text-[11px] text-gray-400 font-mono">
                Fav: <span className="text-gray-200 font-bold">{member.favoritePlayer}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/core-members"
            className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#EDBB00] uppercase tracking-wider hover:underline"
          >
            <span>View Full Core Leadership Board</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. FINAL COMMUNITY CTA (Rule #8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-gold rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute inset-0 bg-stadium-hero opacity-60 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/50 border border-[#EDBB00]/50 text-[#EDBB00] text-xs font-extrabold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>JOIN THE BLAUGRANA FAMILY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              More than a match. More than a screening. <br className="hidden sm:inline" />
              This is where Culés become family.
            </h2>

            <p className="text-sm sm:text-base text-gray-200 font-medium">
              Be part of match screenings, turf tournaments, chant sessions, exclusive merchandise drops, and community meetups in Bengaluru.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl shadow-[#EDBB00]/30"
              >
                Join the Barça Bengaluru Community
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm uppercase tracking-wider transition-all"
              >
                Contact Core Team
              </Link>
            </div>
          </div>
        </div>
      </section>

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
