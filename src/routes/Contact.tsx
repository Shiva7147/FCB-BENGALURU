import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MessageCircle, Mail, MapPin, Ticket, ArrowRight, Shield, Send, CheckCircle2, Phone } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Queries',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Rule #17 Headline & Copy */}
      <SectionHeader
        badge="JOIN THE COMMUNITY"
        title="COME FIND US."
        subtitle="Whether you're a lifelong Culé or just discovering Barça, there's always room for one more in Namma Bengaluru."
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
          <h3 className="text-xl font-black text-white uppercase">WhatsApp & Calls</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Call: +91 9777912631 · WhatsApp: +91 9340923809. Join the official community chat hub.
          </p>
          <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-[#25D366]">
            <span>linktr.ee/fcb.bengaluru</span>
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

      {/* Official Contact Form & Primary Contact Section (Section 16 Client Document) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
          <div className="border-l-4 border-l-[#EDBB00] pl-4">
            <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">GET IN TOUCH</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Send Us A Message</h3>
            <p className="text-xs text-gray-300 mt-1">Have a query, partnership proposal, or want to host a screening? Fill out the details below.</p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Contact Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="arjun@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Department *</label>
                  <select
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09152b] border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  >
                    <option value="General Queries">General Queries</option>
                    <option value="Screenings & Tickets">Screenings & Tickets</option>
                    <option value="Footy Sessions">Footy & Turf Sessions</option>
                    <option value="Brand Partnerships">Brand Partnerships & Sponsorships</option>
                    <option value="Merchandise">Merchandise & Orders</option>
                    <option value="Volunteering">Volunteer with Us</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Query Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you have in mind..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Query to FCB Bengaluru</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 bg-white/5 p-6 rounded-2xl border border-[#EDBB00]/30">
              <div className="w-14 h-14 rounded-full bg-[#EDBB00]/20 text-[#EDBB00] border border-[#EDBB00] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white uppercase">Message Sent Successfully!</h4>
              <p className="text-xs text-gray-300">
                Thank you, <strong className="text-[#EDBB00]">{formData.name}</strong>. Our team in the <strong className="text-white">{formData.department}</strong> department will get back to you shortly.
              </p>
              <a
                href={`https://wa.me/919340923809?text=Hi%20FCB%20Bengaluru,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20Dept:%20${encodeURIComponent(formData.department)}.%20Message:%20${encodeURIComponent(formData.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-[#060e1a] font-extrabold text-xs uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up on WhatsApp (+91 9340923809)</span>
              </a>
            </div>
          )}
        </div>

        {/* Primary Contact & Location Info (Section 29) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-gold p-8 rounded-3xl border border-[#EDBB00]/40 space-y-5 shadow-2xl">
            <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest block">PRIMARY CLUB CONTACT</span>
            <h4 className="text-xl font-black text-white uppercase">Anudeep Challa</h4>
            <p className="text-xs text-gray-300">Website & Accounts Management · FC Barcelona Bengaluru</p>

            <div className="space-y-3 pt-2 text-xs font-mono text-gray-200">
              <a href="https://wa.me/917993866087" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[#25D366]">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 7993866087</span>
              </a>
              <a href="mailto:anudeep.challa007@gmail.com" className="flex items-center space-x-2 hover:text-[#EDBB00]">
                <Mail className="w-4 h-4 text-[#EDBB00]" />
                <span>anudeep.challa007@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#A50044]" />
                <span>Koramangala, Bengaluru - 560047</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#09152b] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest font-bold">NAMMA KANNASU, NAMMA CLUB</span>
            <h4 className="text-base font-black text-white uppercase">Official Supporter Hub</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Operating matchday screenings and events primarily in Indiranagar, Koramangala, and Church Street across Bengaluru.
            </p>
          </div>
        </div>
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
            <h4 className="text-base font-black text-white uppercase">Harroop Singh Gala</h4>
            <a href="tel:+919986899287" className="text-xs font-mono text-gray-300 hover:text-[#EDBB00] font-bold block">+91 99868 99287</a>
          </div>

          {/* 2. General Queries WhatsApp */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#25D366] font-bold uppercase block">GENERAL QUERIES (WHATSAPP)</span>
            <h4 className="text-base font-black text-white uppercase">Aakash Sharma</h4>
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
