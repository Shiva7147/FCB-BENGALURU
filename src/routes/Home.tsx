import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ImageWithFallback } from '../components/PosterFallback';
import { MarqueeScroller } from '../components/MarqueeScroller';
import { RSVPModal } from '../components/RSVPModal';
import { MatchCountdown } from '../components/MatchCountdown';
import { useAdmin } from '../context/AdminContext';
import { Screening } from '../types';
import heroImage from '../assets/hero_matchday.jpg';

export const Home: React.FC = () => {
  const { screenings, announcements, gallery, coreMembers } = useAdmin();
  const [activeRSVPScreening, setActiveRSVPScreening] = useState<Screening | null>(null);

  const upcomingScreenings = screenings.filter(s => s.isUpcoming);
  const nextMatch = upcomingScreenings.length > 0 ? upcomingScreenings[0] : screenings[0];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO SECTION (Rules #3 & #4) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Authentic Photo Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Bengaluru Culés Matchday Screening"
            className="w-full h-full object-cover object-center filter brightness-65 contrast-110 scale-105"
          />
          {/* Blue & Garnet Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/70 to-[#040912]/80" />
          <div className="absolute inset-0 bg-stadium-hero mix-blend-color-dodge opacity-40 pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest shadow-2xl">
            BENGALURU SUPPORTERS CLUB • MATCHDAY HUB
          </div>

          {/* Exact Spec Hero Headline (Rule #3) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto drop-shadow-2xl">
            EXPERIENCE MATCH DAY <br />
            <span className="text-gold-gradient">UNDER THE LIGHTS OF BANGALORE</span>
          </h1>

          {/* Exact Spec Supporting Line (Rule #3) */}
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Where Bengaluru's Culés come together for football, friendship and unforgettable nights.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-lg mx-auto pt-4">
            <Link
              to="/screenings"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#EDBB00] via-[#F3C623] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl shadow-[#EDBB00]/30 text-center"
            >
              Experience Match Day
            </Link>

            <Link
              to="/join"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-blaugrana border border-white/20 text-white hover:border-[#EDBB00] font-extrabold text-sm uppercase tracking-wider transition-all text-center"
            >
              Join the Community
            </Link>
          </div>

        </div>
      </section>

      {/* 2. MATCHDAY INTRO (Rule #4 Flow) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-black text-[#EDBB00] uppercase tracking-widest block">
          BLAUGRANA BENGALURU CULTURE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Not just a screening. It's match day.
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From the first verse of Cant del Barça echoing across Indiranagar to 90th-minute celebrations under floodlights, watching FC Barcelona in Bangalore is an emotional ritual of passion, collective chants, and lifelong football brotherhood.
        </p>
      </section>

      {/* 3. NEXT MATCH LARGE CARD (Rule #4 Flow) */}
      {nextMatch && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden border border-[#EDBB00]/40 shadow-2xl">
            
            {/* Left: Match Banner */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={nextMatch.poster}
                alt={nextMatch.match}
                title={nextMatch.match}
                subtitle={nextMatch.competition}
                date={nextMatch.date}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#A50044] text-white text-[11px] font-black uppercase tracking-widest">
                <span>NEXT LIVE SCREENING</span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#EDBB00] block">{nextMatch.competition}</span>
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                  {nextMatch.match}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {nextMatch.description}
              </p>

              {/* Match Kickoff Countdown Clock */}
              <MatchCountdown />

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-gray-400 block font-mono">Date</span>
                  <span className="font-extrabold text-white">{nextMatch.date}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-mono">Time</span>
                  <span className="font-extrabold text-[#EDBB00]">{nextMatch.time}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-gray-400 block font-mono">Venue</span>
                  <span className="font-extrabold text-white">{nextMatch.venue}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => setActiveRSVPScreening(nextMatch)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-xl"
                >
                  RSVP FOR MATCH DAY
                </button>
                <span className="text-xs text-gray-400 font-mono">
                  {nextMatch.rsvpCount} Culés Confirmed
                </span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 4. THE BENGALURU CULÉ EXPERIENCE (3 Visual Moments - Rule #4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <SectionHeader
          badge="OUR MATCHDAY MOMENTS"
          title="The Bengaluru Culé Experience"
          subtitle="Three core traditions that define our supporters community across Bangalore."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Moment 1: Watch Together */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 text-left group">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
                alt="Watch Together Screening"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono text-[#EDBB00] uppercase font-bold">01 • SCREENINGS</span>
              <h3 className="text-xl font-black text-white uppercase">Watch Together</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Gathering 300+ fans in Indiranagar and Koramangala under projection screens for high-intensity match nights.
              </p>
            </div>
          </div>

          {/* Moment 2: Sing Together */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 text-left group">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80"
                alt="Sing Together Stadium Chants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono text-[#EDBB00] uppercase font-bold">02 • CHANTS</span>
              <h3 className="text-xl font-black text-white uppercase">Sing Together</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Rousing renditions of Cant del Barça and authentic Catalan stadium chants driving the matchday energy.
              </p>
            </div>
          </div>

          {/* Moment 3: Play Together */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 text-left group">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
                alt="Play Together Turf Football"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono text-[#EDBB00] uppercase font-bold">03 • TURF GAMES</span>
              <h3 className="text-xl font-black text-white uppercase">Play Together</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Weekend 7v7 tiki-taka kickabouts at Koramangala pitches for fans of all skill levels.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. MATCHDAY STRIP (Rule #4 & #6) */}
      <MarqueeScroller
        phrases={['FORÇA BARÇA', 'MÉS QUE UN CLUB', 'CULÉS IN BENGALURU', 'BLAUGRANA', 'MATCH DAY']}
        variant="gold"
      />

      {/* 6. EDITORIAL GALLERY PREVIEW (Rule #4 Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
          <div className="text-left space-y-1">
            <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">MATCHDAY PHOTOGRAPHY</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Bengaluru Fan Gallery</h2>
          </div>
          <Link to="/gallery" className="text-xs font-extrabold text-[#EDBB00] uppercase hover:underline mt-2 sm:mt-0">
            View All Photos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {gallery.slice(0, 3).map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden border border-white/10 h-64 shadow-xl">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent p-4 flex flex-col justify-end text-left">
                <span className="text-[10px] text-[#EDBB00] uppercase font-mono">{item.category}</span>
                <h4 className="text-sm font-black text-white uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMMUNITY IDENTITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">FORÇA BARÇA BENGALURU</span>
            <h2 className="text-3xl font-black text-white uppercase">A Home for Every Culé in Bangalore</h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Whether you've followed Barcelona since the days of Cruyff, Ronaldinho, and Pep, or are inspired by Lamine Yamal and Gavi, you belong with us under the lights of Bangalore.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-black text-[#EDBB00] font-mono">1,200+</p>
              <p className="text-xs text-gray-300 font-bold uppercase mt-1">Community Members</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-black text-white font-mono">45+</p>
              <p className="text-xs text-gray-300 font-bold uppercase mt-1">Screenings Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Rule #4 Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-gold rounded-3xl p-10 sm:p-14 text-center space-y-6 border border-[#EDBB00]/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              See you under the lights.
            </h2>
            <p className="text-xs sm:text-sm text-gray-200">
              Join the official FC Barcelona Supporters Club Bengaluru community for screenings, turf football, and matchday gatherings.
            </p>
            <div className="pt-4">
              <Link
                to="/join"
                className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
              >
                Join the Barça Bengaluru Community
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
