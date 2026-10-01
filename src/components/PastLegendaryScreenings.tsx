import React from 'react';
import { Flame, Play, Trophy, Users, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PastLegendaryScreenings: React.FC = () => {
  const legendaryEvents = [
    {
      id: 'leg-1',
      title: 'El Clásico Night — 500+ Voices Under One Roof',
      venue: 'Indiranagar Sports Arena',
      date: '500+ Culés Attended',
      highlights: '90th-Minute Winner, Pyro Celebrations, Chants echoing across 100ft Road.',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      tag: 'RECORD BREAKING'
    },
    {
      id: 'leg-2',
      title: 'Copa del Rey Final Gala & Screening',
      venue: 'Koramangala Social',
      date: '420 Culés Attended',
      highlights: 'Trophy celebrations, live DJ, free goodie packs, and non-stop Cant del Barça chant.',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
      tag: 'CUP FINAL'
    },
    {
      id: 'leg-3',
      title: 'Champions League Midnight Comeback Madness',
      venue: 'Church Street Pub',
      date: '350+ Culés Attended',
      highlights: 'Midnight screening with wall-to-wall crowds, quad audio sound, and late-night post-match street celebrations.',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
      tag: 'UCL NIGHT'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div className="border-l-4 border-l-[#A50044] pl-4 space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">HISTORIC ATMOSPHERE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">PAST LEGENDARY SCREENINGS</h2>
          <p className="text-xs text-gray-300">Experience what it feels like when 500+ Barça voices roar in Bengaluru.</p>
        </div>

        <Link
          to="/gallery"
          className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#EDBB00] text-xs font-bold text-[#EDBB00] uppercase tracking-wider transition-all shrink-0"
        >
          View Full Photo Archive →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {legendaryEvents.map((ev) => (
          <div
            key={ev.id}
            className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#EDBB00]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between"
          >
            {/* Visual Image Header */}
            <div className="relative h-56 w-full overflow-hidden bg-[#071120]">
              <img
                src={ev.image}
                alt={ev.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-black/30" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  {ev.tag}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-mono">
                <span className="flex items-center space-x-1 font-bold text-[#EDBB00]">
                  <Users className="w-3.5 h-3.5" />
                  <span>{ev.date}</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block">{ev.venue}</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5 group-hover:text-[#EDBB00] transition-colors">
                  {ev.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mt-2 font-sans">
                  {ev.highlights}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EDBB00] font-bold font-mono">
                <span>Relive Experience</span>
                <Play className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
