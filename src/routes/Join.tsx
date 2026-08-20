import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Check, Users, Ticket, Flame, MessageCircle, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

export const Join: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locality: 'Indiranagar',
    favPlayer: ''
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}

    setSubmitted(true);
  };

  const benefits = [
    { title: 'Exclusive Screening Entry Passes', desc: 'Priority access and discounted cover charges for all El Clásico & Champions League screenings.' },
    { title: 'Weekend Turf Football Sessions', desc: 'Weekly 7v7 and 5v5 friendly matches across Koramangala, Indiranagar, and Yelahanka.' },
    { title: 'Community WhatsApp Access', desc: 'Direct connection to 1,200+ FC Barcelona supporters in Bangalore for banter and match discussions.' },
    { title: 'Official Supporter Gear Discounts', desc: 'Special pricing on Supporters Club jerseys, scarves, caps, and enamel badges.' },
    { title: 'Chant & Atmosphere Leadership', desc: 'Learn and lead authentic Catalan stadium chants during live match screenings.' },
    { title: 'Annual Community Meetups', desc: 'BBQ nights, AGM gatherings, and inter-fan club football tournaments.' }
  ];

  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="BECOME A BENGALURU CULÉ"
        title="Join The FC Barcelona Supporters Club"
        subtitle="Connect with Barcelona fans in Bengaluru for match screenings, turf games, chants, and unforgettable matchday nights."
      />

      {/* Main Grid: Benefits + Registration Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 7 Cols: Benefits List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-left">
            <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#EDBB00]" />
              <span>Membership Privileges & Community Access</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#EDBB00]">
                    <Check className="w-4 h-4 shrink-0" />
                    <h4 className="text-xs font-black uppercase text-white">{b.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed pl-6">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Rule #10 CTA Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#EDBB00] text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#EDBB00]" />
                <span>Follow Instagram</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Join WhatsApp Group</span>
              </a>

              <a
                href="/contact"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all"
              >
                <Mail className="w-4 h-4 text-[#60A5FA]" />
                <span>Contact Core Team</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Registration Card */}
        <div className="lg:col-span-5">
          <div className="glass-panel-gold p-8 rounded-3xl border border-[#EDBB00]/40 text-left space-y-6 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex items-center space-x-2 text-[#EDBB00] text-xs font-black uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  <span>FREE COMMUNITY REGISTRATION</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Register as a Member
                </h3>
                <p className="text-xs text-gray-300">
                  Fill out your details to join the Bengaluru Culés database and receive matchday screening passes.
                </p>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anish Kumar"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
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
                    Bengaluru Area / Locality
                  </label>
                  <select
                    value={formData.locality}
                    onChange={e => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09152b] border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  >
                    <option value="Indiranagar">Indiranagar / Domlur</option>
                    <option value="Koramangala">Koramangala / HSR</option>
                    <option value="Whitefield">Whitefield / Marathahalli</option>
                    <option value="Central">Church Street / MG Road</option>
                    <option value="North">Yelahanka / Hebbal</option>
                    <option value="South">Jayanagar / JP Nagar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    All-Time Favorite Barça Player
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lionel Messi, Ronaldinho, Iniesta, Lamine Yamal"
                    value={formData.favPlayer}
                    onChange={e => setFormData({ ...formData, favPlayer: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-xl mt-2 flex items-center justify-center space-x-2"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDBB00]/20 border border-[#EDBB00] text-[#EDBB00] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Benvingut, Culé!</h3>
                <p className="text-xs text-gray-300">
                  Welcome to FC Barcelona Supporters Club Bengaluru, <strong className="text-[#EDBB00]">{formData.name}</strong>! You are now registered in our Bengaluru Culés database.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-left text-gray-300 font-mono space-y-1">
                  <p>• Area: {formData.locality}</p>
                  <p>• Phone: {formData.phone}</p>
                  <p>• Status: Active Supporter Member</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20"
                >
                  Register Another Member
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
