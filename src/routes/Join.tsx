import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Check, Users, Ticket, Flame, MessageCircle, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

import { MemberCardGenerator } from '../components/MemberCardGenerator';

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

      {/* Membership Tiers Comparison (Culer vs Soci - Section 2 Client Document) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Tier 1: Culer */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">COMMUNITY TIER</span>
              <h3 className="text-3xl font-black text-white uppercase mt-1">CULER MEMBER</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#004D98] text-[#EDBB00] font-mono text-xs font-black uppercase">
              Standard
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            Essential membership for every Barça fan in Bengaluru. Join screening RSVPs, weekly turf games, and WhatsApp groups.
          </p>

          <ul className="space-y-2.5 text-xs text-gray-200 font-sans">
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Early RSVP access for all match screenings</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Digital Bengaluru Culé Pass Card</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Official Bengaluru Culés WhatsApp Community</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Weekend 7v7 turf game booking access</span></li>
          </ul>

          <button
            onClick={() => {
              const el = document.getElementById('registration-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider hover:border-[#EDBB00] transition-all"
          >
            Join as Culer Member
          </button>
        </div>

        {/* Tier 2: Soci */}
        <div className="glass-panel-gold p-8 rounded-3xl border-2 border-[#EDBB00] space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-1.5 senyera-barca-strip-animated" />
          
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">PREMIUM SUPPORTER TIER</span>
              <h3 className="text-3xl font-black text-white uppercase mt-1">SOCI MEMBER</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-mono text-xs font-black uppercase shadow-lg">
              VIP Official
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            The ultimate Barça Bengaluru experience. Includes official club scarf, VIP screening seats, voting rights, and gala invitations.
          </p>

          <ul className="space-y-2.5 text-xs text-gray-200 font-sans">
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span className="font-bold text-white">Includes Official Woven FCB Bengaluru Scarf</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>VIP Reserved Seating at El Clásico Screenings</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Invitation to Annual Galas & BBQ Meetups</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Voting rights in supporters club AGM decisions</span></li>
            <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#EDBB00]" /><span>Priority registration for inter-fan club trophies</span></li>
          </ul>

          <button
            onClick={() => {
              const el = document.getElementById('registration-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
          >
            Join as Soci Member
          </button>
        </div>
      </div>

      {/* Member Card Generator */}
      <MemberCardGenerator />

      {/* Physical Membership Card & Kit Visual Proof */}
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#EDBB00]/40 text-left space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">PHYSICAL MEMBER WELCOME KIT</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Your Physical FCB Bengaluru Member Card & Kit</h3>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-[#004D98] text-[#EDBB00] font-mono text-xs font-bold uppercase border border-[#EDBB00]/40">
            Delivered Across Bengaluru
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-3">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Every Culer and Soci member receives a high-quality physical PVC membership card with laser-engraved member ID, valid for 1 full year. Soci members also receive the official woven FCB Bengaluru scarf and enamel badge set.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#EDBB00] font-bold block">✓ Physical Card</span>
                <span className="text-gray-400 text-[10px]">PVC Card with QR gate entry</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#EDBB00] font-bold block">✓ Official Scarf</span>
                <span className="text-gray-400 text-[10px]">Double-layer woven scarf</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#EDBB00] shadow-2xl group w-full max-w-md h-52">
              <img
                src="/src/assets/barca_bengaluru_scarf.jpg"
                alt="Physical Member Scarf & Kit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono font-bold text-white">
                <span className="bg-[#A50044] px-2.5 py-1 rounded text-[#EDBB00]">FCB BLR MEMBER KIT</span>
                <span className="text-[#EDBB00]">1,500+ DELIVERED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Experience Section */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 text-left space-y-6">
        <div className="border-l-4 border-l-[#A50044] pl-4">
          <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">MEMBER LIFE</span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">What It Feels Like To Be A Member</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" alt="Screening atmosphere" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base font-black text-white uppercase">Front-Row Screening Passes</h4>
            <p className="text-xs text-gray-300 leading-relaxed">Priority venue entry, reserved front-row seats, and discounted cover charges at Indiranagar & Koramangala hubs.</p>
          </div>

          <div className="space-y-3">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80" alt="Turf football" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base font-black text-white uppercase">Weekend 7v7 Turf Scrimmages</h4>
            <p className="text-xs text-gray-300 leading-relaxed">Put on the Blaugrana jersey and play friendly tiki-taka football every Sunday morning with fellow members.</p>
          </div>

          <div className="space-y-3">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80" alt="Annual Gala" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base font-black text-white uppercase">Annual Galas & BBQ Meetups</h4>
            <p className="text-xs text-gray-300 leading-relaxed">Celebrate trophyless or treble seasons together at annual fan galas, AGM discussions, and community dinners.</p>
          </div>
        </div>
      </div>

      {/* Member Names Rolling Wall */}
      <div className="p-6 rounded-3xl bg-[#09152a] border border-[#EDBB00]/40 text-left space-y-4 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest">
            1,500+ CURRENT BENGALURU CULÉS MEMBERS & COUNTING
          </span>
          <span className="text-[10px] font-mono text-gray-400">ROLLING MEMBER WALL</span>
        </div>

        <div className="overflow-hidden relative py-2">
          <div className="animate-marquee whitespace-nowrap text-xs font-mono font-bold text-gray-300 flex space-x-6">
            <span>Rohan S. (BLR-001)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Ananya H. (BLR-002)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Karthik V. (BLR-003)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Rahul M. (BLR-042)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Sneha R. (BLR-089)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Aditya N. (BLR-114)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Priya S. (BLR-156)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Vikram M. (BLR-204)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Varun K. (BLR-288)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Amogh K. (BLR-312)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Ajinkya P. (BLR-340)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Aakash R. (BLR-401)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Harroop S. (BLR-450)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Nikhil B. (BLR-512)</span>
            <span className="text-[#EDBB00]">★</span>
            <span>Anudeep C. (BLR-550)</span>
          </div>
        </div>
      </div>

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

        {/* Right 5 Cols: Registration Form */}
        <div id="registration-form" className="lg:col-span-5 scroll-mt-24">
          <div className="glass-panel p-8 rounded-3xl border border-[#EDBB00]/40 text-left space-y-6 shadow-xl relative overflow-hidden">
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
