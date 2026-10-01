import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MessageCircle, Mail, MapPin, Ticket, ArrowRight, Shield } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Rule #17 Headline & Copy */}
      <SectionHeader
        badge="JOIN THE COMMUNITY"
        title="COME FIND US."
        subtitle="Whether you're a lifelong Culé or just discovering Barça, there's always room for one more."
      />

      {/* Editorial Supporter Contact Cards Grid (Section 16 & 17) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1. INSTAGRAM */}
        <a
          href="https://www.instagram.com/fcbbengaluru"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel-gold rounded-3xl p-8 border border-[#EDBB00]/40 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#A50044] text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block">01 • SOCIAL</span>
          <h3 className="text-xl font-black text-white uppercase">Instagram</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Follow @fcbbengaluru for matchday screening posters, chant videos, and photo highlights.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#EDBB00]">
            <span>@fcbbengaluru</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>

        {/* 2. WHATSAPP & LINKTREE */}
        <a
          href="https://linktr.ee/fcb.bengaluru"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel-gold rounded-3xl p-8 border border-[#25D366]/40 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-[#060e1a] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-[#25D366] uppercase tracking-widest block">02 • CHAT HUB</span>
          <h3 className="text-xl font-black text-white uppercase">WhatsApp & Linktree</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            +91 97779 12631 / +91 99868 99287. Join the official supporter community chat.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#25D366]">
            <span>Join Supporter Chat</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>

        {/* 3. EMAIL */}
        <a
          href="mailto:admin@fcbbengaluru.in"
          className="glass-panel-gold rounded-3xl p-8 border border-[#004D98]/50 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#004D98] text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Mail className="w-6 h-6 text-[#60A5FA]" />
          </div>
          <span className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest block">03 • DIRECT</span>
          <h3 className="text-xl font-black text-white uppercase">Official Email</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Get in touch for venue partnerships, sponsorships, press, or inquiries.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#60A5FA]">
            <span>admin@fcbbengaluru.in</span>
          </div>
        </a>

        {/* 4. MATCH DAY SCREENINGS */}
        <Link
          to="/screenings"
          className="glass-panel-gold rounded-3xl p-8 border border-[#EDBB00]/40 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#EDBB00] text-[#060e1a] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Ticket className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block">04 • MATCH NIGHT</span>
          <h3 className="text-xl font-black text-white uppercase">Match Day</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Come experience live screenings with 500+ Bengaluru Culés under the lights.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#EDBB00]">
            <span>View Screenings</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

      </div>

      {/* Role-Based Contact Directory (Prompt Requirements) */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#EDBB00]/40 text-left space-y-6 shadow-2xl">
        <div className="border-l-4 border-l-[#A50044] pl-4">
          <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">DIRECT DIRECTORY</span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Who To Reach Out To</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {/* 1. General Queries Call */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EDBB00] font-bold uppercase block">GENERAL QUERIES (CALL)</span>
            <h4 className="text-base font-black text-white uppercase">Harroop</h4>
            <a href="tel:+919986899287" className="text-xs font-mono text-gray-300 hover:text-[#EDBB00] font-bold block">+91 99868 99287</a>
          </div>

          {/* 2. General Queries WhatsApp */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#25D366] font-bold uppercase block">GENERAL QUERIES (WHATSAPP)</span>
            <h4 className="text-base font-black text-white uppercase">Aakash</h4>
            <a href="https://wa.me/919777912631" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#25D366] font-bold block">+91 97779 12631</a>
          </div>

          {/* 3. Footy Sessions */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EDBB00] font-bold uppercase block">TURF FOOTBALL SESSIONS</span>
            <h4 className="text-base font-black text-white uppercase">Amogh / Ajinkya</h4>
            <Link to="/match-day" className="text-xs font-mono text-[#EDBB00] font-bold block">Book Turf Slots →</Link>
          </div>

          {/* 4. Brand Partnerships */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#60A5FA] font-bold uppercase block">BRAND PARTNERSHIPS</span>
            <h4 className="text-base font-black text-white uppercase">Nikhil / Anudeep</h4>
            <a href="mailto:admin@fcbbengaluru.in" className="text-xs font-mono text-[#60A5FA] font-bold block">admin@fcbbengaluru.in</a>
          </div>

          {/* 5. Volunteer Enquiries */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 sm:col-span-2 lg:col-span-2">
            <span className="text-[10px] font-mono text-[#25D366] font-bold uppercase block">VOLUNTEER ENQUIRIES</span>
            <h4 className="text-base font-black text-white uppercase">Aakash (WhatsApp)</h4>
            <a href="https://wa.me/919777912631?text=Hi%20Aakash,%20I'd%20love%20to%20volunteer%20for%20FCB%20Bengaluru!" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#25D366] font-bold block">Chat with Aakash on WhatsApp (+91 97779 12631) →</a>
          </div>
        </div>
      </div>

      {/* Screening Hubs Banner */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10 text-left grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] uppercase">SCREENING HUB 1</span>
          <h4 className="text-lg font-black text-white uppercase">Indiranagar</h4>
          <p className="text-xs text-gray-300">100ft Road Sports Bars</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] uppercase">SCREENING HUB 2</span>
          <h4 className="text-lg font-black text-white uppercase">Koramangala</h4>
          <p className="text-xs text-gray-300">80ft Road Lounges</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#EDBB00] uppercase">SCREENING HUB 3</span>
          <h4 className="text-lg font-black text-white uppercase">Church Street</h4>
          <p className="text-xs text-gray-300">Central Bangalore Pubs</p>
        </div>
      </div>

    </div>
  );
};
