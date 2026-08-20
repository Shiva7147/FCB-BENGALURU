import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MessageCircle, Mail, MapPin, Ticket, ArrowRight, Shield } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Rule #15 Headline & Copy */}
      <SectionHeader
        badge="JOIN THE BENGALURU CULÉS"
        title="SEE YOU AT MATCH DAY"
        subtitle="Whether you're a lifelong Culé or just discovering Barça, come join us."
      />

      {/* Editorial Supporter Contact Cards Grid (Rule #15) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1. INSTAGRAM */}
        <a
          href="https://instagram.com"
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
            Follow the community for matchday photos, screening posters, and chant videos.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#EDBB00]">
            <span>Follow Community</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>

        {/* 2. WHATSAPP */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel-gold rounded-3xl p-8 border border-[#25D366]/40 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-[#060e1a] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-[#25D366] uppercase tracking-widest block">02 • CHAT HUB</span>
          <h3 className="text-xl font-black text-white uppercase">WhatsApp</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Join the official supporter community chat for match discussions and banter.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#25D366]">
            <span>Join Supporter Chat</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>

        {/* 3. EMAIL */}
        <a
          href="mailto:contact@barcabengaluru.com"
          className="glass-panel-gold rounded-3xl p-8 border border-[#004D98]/50 text-left space-y-4 hover:scale-105 transition-all shadow-xl group block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#004D98] text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Mail className="w-6 h-6 text-[#60A5FA]" />
          </div>
          <span className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest block">03 • DIRECT</span>
          <h3 className="text-xl font-black text-white uppercase">Email</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Get in touch with the team for venue partnerships, press, or inquiries.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#60A5FA]">
            <span>contact@barcabengaluru.com</span>
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
            Come experience a screening with Bengaluru's Culés under the lights.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#EDBB00]">
            <span>View Screenings</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

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
