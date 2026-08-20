import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { Trophy, Calendar, Clock, MapPin, Users, CheckCircle2, Shield, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MatchDay: React.FC = () => {
  const { turfEvents, addTurfEvent } = useAdmin();
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [booked, setBooked] = useState(false);

  const handleSlotBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}

    setBooked(true);
  };

  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Pitch Headline (Rule #12) */}
      <SectionHeader
        badge="BENGALURU CULÉS TURF GAMES"
        title="Tiki-Taka Spirit. Bengaluru Heart."
        subtitle="Put on your Blaugrana jersey and step onto the pitch. Weekend 7v7 scrimmage, inter-fan club tournaments, and friendly kickabouts."
      />

      {/* Football Pitch Graphic Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-[#EDBB00]/40 shadow-2xl bg-[#091810]">
        {/* Pitch Green Lines CSS Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/20 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              <span>WEEKEND FAN FOOTBALL ACADEMY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Play Like Barça on Bengaluru Pitches
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Whether you are a midfield maestro like Xavi or a winger with Lamine Yamal flair, our weekly weekend turf sessions bring together fans of all skill levels for high-energy football and camaraderie.
            </p>
          </div>

          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-white/20 text-center space-y-3">
            <Trophy className="w-10 h-10 text-[#EDBB00] mx-auto" />
            <h3 className="text-lg font-black text-white uppercase">Inter-Fan Club League</h3>
            <p className="text-xs text-gray-300">
              FCB Supporters Club Bengaluru competes regularly against local Real Madrid, Arsenal, and Chelsea supporter groups in Bangalore!
            </p>
          </div>
        </div>
      </div>

      {/* Turf Events Cards Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-white uppercase tracking-tight text-left">
          Upcoming Turf Kickabouts & Tournaments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {turfEvents.map((evt) => {
            const slotsLeft = evt.slotsTotal - evt.slotsTaken;
            return (
              <div
                key={evt.id}
                className="glass-panel-blaugrana p-8 rounded-3xl border border-white/10 hover:border-[#EDBB00]/50 transition-all text-left space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/40 text-[#EDBB00] text-xs font-black uppercase font-mono">
                      {evt.format}
                    </span>
                    <span className="text-xs text-gray-300 font-mono">
                      {slotsLeft > 0 ? `${slotsLeft} Slots Remaining` : 'FULL HOUSE'}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                    {evt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="space-y-2 py-3 border-y border-white/10 text-xs text-gray-200 font-medium">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#EDBB00]" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#EDBB00]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#EDBB00]" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEventId(evt.id)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  Register Player Slot
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slot Booking Modal */}
      {selectedEventId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#071120] border border-[#EDBB00]/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-left space-y-4">
            {!booked ? (
              <form onSubmit={handleSlotBooking} className="space-y-4">
                <h3 className="text-xl font-black text-white uppercase">
                  Register for Turf Game
                </h3>
                <p className="text-xs text-gray-300">
                  Secure your slot for the weekend 7v7 session. Bring your boots and Blaugrana shirt!
                </p>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    Player Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singh"
                    value={bookingName}
                    onChange={e => setBookingName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={bookingPhone}
                    onChange={e => setBookingPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <div className="flex space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEventId(null)}
                    className="flex-1 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-[#EDBB00] text-[#060e1a] font-extrabold text-xs uppercase hover:brightness-110"
                  >
                    Confirm Slot
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#EDBB00] mx-auto animate-bounce" />
                <h4 className="text-xl font-black text-white uppercase">Player Registered!</h4>
                <p className="text-xs text-gray-300">
                  See you on the pitch, <strong className="text-[#EDBB00]">{bookingName}</strong>! Check WhatsApp for venue directions.
                </p>
                <button
                  onClick={() => {
                    setBooked(false);
                    setSelectedEventId(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
