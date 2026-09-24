import React, { useState } from 'react';
import { MapPin, Navigation, Car, Shield, Compass, ChevronRight, ExternalLink } from 'lucide-react';

interface ScreeningHub {
  id: string;
  name: string;
  zone: string;
  address: string;
  metroProximity: string;
  screenSpecs: string;
  coverCharge: string;
  parking: string;
  capacity: string;
  mapQuery: string;
}

export const ScreeningHubPlanner: React.FC = () => {
  const hubs: ScreeningHub[] = [
    {
      id: 'indiranagar',
      name: 'Indiranagar Screening Hub',
      zone: 'East Bengaluru',
      address: '100ft Road, Stage 2, Indiranagar, Bengaluru, 560038',
      metroProximity: '2 mins walk from Indiranagar Purple Line Metro Station (Exit B)',
      screenSpecs: '180" HD Dual Laser Projection + 5,000W Quad Stadium Sound',
      coverCharge: '₹350 (100% Redeemable on Food & Beverages)',
      parking: 'Dedicated Valet & Bike Parking Available',
      capacity: '250+ Culés Capacity',
      mapQuery: '100ft+Road+Indiranagar+Bangalore'
    },
    {
      id: 'koramangala',
      name: 'Koramangala Screening Arena',
      zone: 'South-East Bengaluru',
      address: '80ft Road, 4th Block, Koramangala, Bengaluru, 560034',
      metroProximity: '10 mins drive from South End Circle Metro / Sony World Bus Stop',
      screenSpecs: '150" 4K Outdoor LED Screen + Surround Acoustics',
      coverCharge: '₹300 (Fully Redeemable on Draft Beers & Starters)',
      parking: 'Basement Car Parking & Street Parking',
      capacity: '200 Culés Capacity',
      mapQuery: '80ft+Road+Koramangala+Bangalore'
    },
    {
      id: 'churchstreet',
      name: 'Central Church Street Hub',
      zone: 'Central Bengaluru',
      address: 'Church Street, Off MG Road, Bengaluru, 560001',
      metroProximity: '1 min walk from MG Road Metro Station (Church St Exit)',
      screenSpecs: 'Multiple 85" 4K Ultra-HD Screens + Chant Sound System',
      coverCharge: '₹400 (Includes 1 Complimentary Drink & Starter)',
      parking: 'Pay & Park at Brigade Road / MG Road Metro Lot',
      capacity: '180 Culés Capacity',
      mapQuery: 'Church+Street+Bangalore'
    },
    {
      id: 'whitefield',
      name: 'Whitefield IT Corridor Lounge',
      zone: 'East IT Belt',
      address: 'ITPL Main Road, Whitefield, Bengaluru, 560066',
      metroProximity: '5 mins from Hope Farm / ITPL Metro Station',
      screenSpecs: '200" High-Lumen Stadium Projector Screen',
      coverCharge: '₹350 (100% Redeemable)',
      parking: 'Ample Mall Basement Parking',
      capacity: '150 Culés Capacity',
      mapQuery: 'ITPL+Main+Road+Whitefield+Bangalore'
    }
  ];

  const [activeHub, setActiveHub] = useState<ScreeningHub>(hubs[0]);

  return (
    <div className="glass-panel-gold p-6 sm:p-10 rounded-3xl border border-[#EDBB00]/40 text-left space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>CULÉS EXPRESS ROUTE PLANNER</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Bengaluru Screening Hubs & Navigation
          </h3>
          <p className="text-xs text-gray-300">
            Find your nearest venue, check metro proximity, screen specs, and launch instant navigation.
          </p>
        </div>

        {/* Hub Tabs */}
        <div className="flex flex-wrap gap-2">
          {hubs.map(h => (
            <button
              key={h.id}
              onClick={() => setActiveHub(h)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeHub.id === h.id
                  ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {h.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Hub Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Info */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">
              {activeHub.zone} • {activeHub.capacity}
            </span>
            <h4 className="text-3xl font-black text-white uppercase tracking-tight mt-1">
              {activeHub.name}
            </h4>
            <p className="text-xs text-gray-300 mt-2 font-mono flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-[#EDBB00] shrink-0" />
              <span>{activeHub.address}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-[#EDBB00] font-bold uppercase">
                <Navigation className="w-4 h-4" />
                <span>Metro & Transit Proximity</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {activeHub.metroProximity}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-[#EDBB00] font-bold uppercase">
                <Shield className="w-4 h-4" />
                <span>Screen & Audio Specs</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {activeHub.screenSpecs}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-[#25D366] font-bold uppercase">
                <span>Cover Charge perk</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {activeHub.coverCharge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-gray-300 font-bold uppercase">
                <Car className="w-4 h-4 text-[#EDBB00]" />
                <span>Parking Info</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {activeHub.parking}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${activeHub.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg flex items-center space-x-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Bengaluru Venue Map Mockup Visual */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-[#071324] border border-[#EDBB00]/40 p-6 text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-[#004D98]/60 border border-[#EDBB00] mx-auto flex items-center justify-center text-[#EDBB00]">
              <MapPin className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-1">
              <h5 className="text-base font-black text-white uppercase">{activeHub.name}</h5>
              <p className="text-xs text-[#EDBB00] font-mono">{activeHub.zone}</p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono text-gray-300 text-left space-y-1">
              <div className="flex justify-between">
                <span>Matchday Gate:</span>
                <span className="text-white font-bold">Open 45m before Kickoff</span>
              </div>
              <div className="flex justify-between">
                <span>Entry Pass:</span>
                <span className="text-[#EDBB00] font-bold">QR / Name RSVP</span>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-mono italic">
              "Indiranagar & Koramangala hubs atmosphere guaranteed 100% Barça."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
