import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}

    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Rule #22 Headline & Copy */}
      <SectionHeader
        badge="GET IN TOUCH"
        title="Want to join Bengaluru's Culé family?"
        subtitle="Reach out, follow the page, or join the community."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
        
        {/* Left 5 Cols: Contact Channels & Core Team Link */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              Community Channels
            </h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366] flex items-center space-x-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">WhatsApp Community</h4>
                  <p className="text-xs text-gray-300">Join 1,200+ Bengaluru Culés chat</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EDBB00] flex items-center space-x-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A50044]/20 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00] group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Instagram Page</h4>
                  <p className="text-xs text-gray-300">@barcabengaluru • Screening alerts</p>
                </div>
              </a>

              <a
                href="mailto:contact@barcabengaluru.com"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#004D98] flex items-center space-x-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004D98]/20 border border-[#60A5FA]/40 flex items-center justify-center text-[#60A5FA] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Email Contact</h4>
                  <p className="text-xs text-gray-300">contact@barcabengaluru.com</p>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#EDBB00]/20 border border-[#EDBB00]/40 flex items-center justify-center text-[#EDBB00]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Screening Hubs</h4>
                  <p className="text-xs text-gray-300">Indiranagar, Koramangala & Church St</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link to Core Team */}
          <div className="glass-panel-gold p-6 rounded-3xl border border-[#EDBB00]/40 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-black text-white uppercase">Meet the Leadership</h4>
              <p className="text-xs text-gray-300">Connect directly with Core Members</p>
            </div>
            <Link
              to="/core-members"
              className="p-3 rounded-xl bg-[#EDBB00] text-[#060e1a] hover:brightness-110 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>

        {/* Right 7 Cols: Community Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Send a Message to Core Team
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Rao"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="siddharth@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                      WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09152b] border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Screening Host">Screening Venue Partnership</option>
                      <option value="Turf Football">Turf Football Session</option>
                      <option value="Merchandise">Merchandise / Orders</option>
                      <option value="Volunteering">Volunteering for Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you join Bengaluru's Culé family?"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#EDBB00] mx-auto animate-bounce" />
                <h3 className="text-2xl font-black text-white uppercase">Message Sent!</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you for reaching out, <strong className="text-[#EDBB00]">{formData.name}</strong>! Our core team will respond via WhatsApp or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
