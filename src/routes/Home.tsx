import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Bengaluru Culés Matchday Screening"
            className="w-full h-full object-cover object-center filter brightness-65 contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/75 to-[#040912]/80" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest shadow-2xl">
            BENGALURU SUPPORTERS CLUB • MATCHDAY HUB
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto drop-shadow-2xl">
            EXPERIENCE MATCH DAY <br />
            <span className="text-gold-gradient">UNDER THE LIGHTS OF BANGALORE</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Where Bengaluru's Culés come together for football, friendship and unforgettable nights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-lg mx-auto pt-4">
            <Link
              to="/screenings"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] via-[#F3C623] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl shadow-[#EDBB00]/30 text-center"
            >
              Experience Match Day
            </Link>

            <Link
              to="/join"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white hover:border-[#EDBB00] font-extrabold text-sm uppercase tracking-wider transition-all text-center"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THIS IS HOW WE DO MATCHDAY (Rule #3 Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <div className="border-l-4 border-l-[#A50044] pl-4 space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">MATCHDAY ROUTINE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">THIS IS HOW WE DO MATCHDAY</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">01 • PRE-MATCH</span>
            <h3 className="text-lg font-black text-white uppercase">MEET THE CULÉS</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Arriving at Indiranagar or Koramangala venues early. Meeting fellow fans, ordering food, and settling in.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">02 • BUILD-UP</span>
            <h3 className="text-lg font-black text-white uppercase">SCARVES & CHANTS</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Scarves up, jerseys on, and flags waving as the lineup is announced. Cant del Barça echoes through the venue.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">03 • KICK-OFF</span>
            <h3 className="text-lg font-black text-white uppercase">90 MINUTES TOGETHER</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Cheering every pass, gasping at chances, and exploding in celebration for every goal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#EDBB00] font-bold">04 • FULL-TIME</span>
            <h3 className="text-lg font-black text-white uppercase">ONE FAMILY</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Win or lose, we stay together. Post-match discussions, photos, and planning for the next kickoff.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NEXT MATCH EVENT POSTER STYLE (Rule #8) */}
      {nextMatch && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ticket-stub rounded-3xl p-6 sm:p-10 border border-[#EDBB00]/60 shadow-2xl text-left space-y-6">
            <div className="senyera-barca-strip" />

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#EDBB00] font-bold tracking-widest uppercase">
                MATCHDAY PASS • {nextMatch.competition}
              </span>
              <span className="text-xs text-gray-300 font-mono">BENGALURU SCREENING</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  {nextMatch.match}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {nextMatch.description}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-gray-400 block">DATE</span>
                    <span className="text-white font-bold">{nextMatch.date}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">KICKOFF</span>
                    <span className="text-[#EDBB00] font-bold">{nextMatch.time}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400 block">VENUE</span>
                    <span className="text-white font-bold">{nextMatch.venue}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 text-center">
                <MatchCountdown />
                <button
                  onClick={() => setActiveRSVPScreening(nextMatch)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 shadow-xl"
                >
                  RSVP FOR MATCH DAY
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. BENGALURU'S CULÉS SECTION (Rules #4 & #5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#004D98]/40 via-[#060e1a] to-[#A50044]/40 border border-white/10 space-y-6">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">AUTHENTIC BENGALURU FOOTBALL CULTURE</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            BENGALURU'S CULÉS
          </h2>
          <blockquote className="text-lg sm:text-2xl font-serif text-[#EDBB00] italic border-l-4 border-l-[#A50044] pl-4">
            "Thousands of kilometres from Barcelona. One heartbeat closer together."
          </blockquote>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl leading-relaxed">
            From evening traffic along Indiranagar 100ft Road to late-night screenings in Koramangala, Bengaluru's Culés carry the Blaugrana blood everywhere. We meet after work, wear our jerseys proudly on Bangalore streets, play weekend kickabouts, and turn local venues into Spotify Camp Nou under the lights.
          </p>
        </div>
      </section>

      {/* 5. WHY WE SHOW UP SECTION (Rule #20) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <div className="border-l-4 border-l-[#EDBB00] pl-4 space-y-1">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">OUR PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">WHY WE SHOW UP.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="text-xl font-black text-[#EDBB00] uppercase">FOR THE FOOTBALL.</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              The match nights, the goals, the high-pressure moments, and the comebacks we experience side by side.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="text-xl font-black text-white uppercase">FOR THE PEOPLE.</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              The lifelong friends we met simply because we showed up wearing the same Blaugrana jersey in Bengaluru.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="text-xl font-black text-[#A50044] uppercase">FOR THE MOMENTS.</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              The late-night screening celebrations that we'll still laugh and talk about years down the road.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE STRIP */}
      <MarqueeScroller
        phrases={['MÉS QUE UN CLUB', 'FORÇA BARÇA', 'BLAUGRANA BENGALURU', 'CULÉS IN BENGALURU', 'MATCH DAY']}
        variant="gold"
      />

      {/* 7. OUR NIGHTS EDITORIAL PHOTO WALL (Rule #7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
          <div>
            <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">AUTHENTIC MATCHDAY MEMORIES</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">OUR NIGHTS</h2>
            <p className="text-xs text-gray-300 mt-1">Some memories are better experienced together.</p>
          </div>
          <Link to="/gallery" className="text-xs font-extrabold text-[#EDBB00] uppercase hover:underline mt-2 sm:mt-0">
            View All Photos →
          </Link>
        </div>

        {/* Asymmetric Editorial Photo Wall */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 h-80 rounded-2xl overflow-hidden border border-white/10">
            <img src={gallery[0]?.imageUrl || heroImage} alt="Matchday screening crowd" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-4 h-80 rounded-2xl overflow-hidden border border-white/10">
            <img src={gallery[1]?.imageUrl || heroImage} alt="Chant leaders" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-4 h-64 rounded-2xl overflow-hidden border border-white/10">
            <img src={gallery[2]?.imageUrl || heroImage} alt="Turf football" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-8 h-64 rounded-2xl overflow-hidden border border-white/10">
            <img src={gallery[3]?.imageUrl || heroImage} alt="Bengaluru Culés meetup" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 8. THE CULÉ WALL (Rule #12 Supporter Quotes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
        <div className="border-l-4 border-l-[#A50044] pl-4">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">SUPPORTER VOICES</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">THE CULÉ WALL</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-serif italic space-y-3">
            <p className="text-sm text-white">"Win or lose, we show up. That's what being a Culé in Bengaluru is about."</p>
            <span className="text-[10px] font-sans font-bold text-[#EDBB00] uppercase block not-italic">— Rahul, Indiranagar</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-serif italic space-y-3">
            <p className="text-sm text-white">"Bengaluru feels different on Barça match nights. You walk in and it's home."</p>
            <span className="text-[10px] font-sans font-bold text-[#EDBB00] uppercase block not-italic">— Ananya, Koramangala</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-serif italic space-y-3">
            <p className="text-sm text-white">"Football brought us together. The community kept us together."</p>
            <span className="text-[10px] font-sans font-bold text-[#EDBB00] uppercase block not-italic">— Karthik, HSR Layout</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-serif italic space-y-3">
            <p className="text-sm text-white">"Més que un club isn't just a motto. We live it in Bangalore."</p>
            <span className="text-[10px] font-sans font-bold text-[#EDBB00] uppercase block not-italic">— Priya, Whitefield</span>
          </div>
        </div>
      </section>

      {/* 9. THE PEOPLE BEHIND THE PASSION (Rules #14 & #15) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">COMMUNITY LEADERSHIP</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">THE PEOPLE BEHIND THE PASSION</h2>
            <p className="text-xs text-gray-300 mt-1">A supporters club is only as strong as the people who show up for it.</p>
          </div>
          <Link to="/core-members" className="text-xs font-extrabold text-[#EDBB00] uppercase hover:underline">
            View All Cards →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreMembers.slice(0, 4).map((m) => (
            <Link key={m.id} to="/core-members" className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EDBB00] transition-all block">
              <img src={m.imageUrl} alt={m.name} className="w-16 h-16 rounded-xl object-cover border border-[#EDBB00] mb-3" />
              <h4 className="text-base font-black text-white uppercase">{m.name}</h4>
              <p className="text-xs text-[#EDBB00] font-mono font-bold mt-0.5">{m.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. FINAL COMMUNITY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-r from-[#004D98] via-[#060e1a] to-[#A50044] border border-[#EDBB00]/40 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              See you under the lights.
            </h2>
            <p className="text-xs sm:text-sm text-gray-200">
              Join the official FC Barcelona Supporters Club Bengaluru community for match screenings, turf football, and matchday gatherings.
            </p>
            <div className="pt-4">
              <Link
                to="/join"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
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
