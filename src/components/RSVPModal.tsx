import React, { useState } from 'react';
import { X, CheckCircle, Ticket, MapPin, Calendar, Clock, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Screening } from '../types';
import { useAdmin } from '../context/AdminContext';

interface RSVPModalProps {
  screening: Screening;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ screening, onClose }) => {
  const { rsvpScreening } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger RSVP count update in context
    rsvpScreening(screening.id);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {
      // Ignore if confetti fails
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#071120] border border-[#EDBB00]/40 rounded-3xl overflow-hidden shadow-2xl">
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#004D98] to-[#A50044] p-6 text-white">
          <div className="absolute top-0 inset-x-0 h-1 senyera-accent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/80 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-[#EDBB00] text-xs font-black uppercase tracking-widest mb-1">
            <Ticket className="w-4 h-4" />
            <span>MATCH SCREENING RSVP</span>
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight">
            {screening.match}
          </h3>
          <p className="text-xs text-gray-200 mt-1">
            {screening.competition}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2 font-bold text-white">
                    <Calendar className="w-4 h-4 text-[#EDBB00]" />
                    <span>{screening.date}</span>
                  </span>
                  <span className="flex items-center space-x-1 font-mono text-[#EDBB00]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{screening.time}</span>
                  </span>
                </div>
                <div className="flex items-start space-x-2 pt-1">
                  <MapPin className="w-4 h-4 text-[#EDBB00] shrink-0 mt-0.5" />
                  <span>{screening.venue}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09152b] border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  >
                    <option value="1">1 Culé (Just me)</option>
                    <option value="2">2 Culés</option>
                    <option value="3">3 Culés</option>
                    <option value="4">4+ Group Pass</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-lg mt-2"
              >
                Confirm Matchday RSVP
              </button>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EDBB00]/20 text-[#EDBB00] border border-[#EDBB00] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                RSVP Confirmed!
              </h4>
              <p className="text-sm text-gray-300 max-w-sm mx-auto">
                Visca el Barça, <span className="text-[#EDBB00] font-bold">{formData.name}</span>! Your entry pass for {formData.guests} guest(s) has been registered.
              </p>
              
              <div className="p-4 rounded-xl bg-[#004D98]/20 border border-[#EDBB00]/30 text-xs text-gray-300 text-left space-y-1 font-mono">
                <p><strong className="text-[#EDBB00]">Match:</strong> {screening.match}</p>
                <p><strong className="text-[#EDBB00]">Venue:</strong> {screening.venue}</p>
                <p><strong className="text-[#EDBB00]">Entry Fee:</strong> {screening.entryFee || 'Pay at venue'}</p>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
