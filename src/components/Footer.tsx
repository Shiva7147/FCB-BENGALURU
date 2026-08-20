import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#060e1a] via-[#040912] to-[#02050a] text-gray-300 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Stadium lighting glow accents in background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004D98]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A50044]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Catalan Senyera bar */}
      <div className="absolute top-0 inset-x-0 senyera-barca-strip" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Branding & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004D98] via-[#060e1a] to-[#A50044] p-0.5 border border-[#EDBB00] shadow-xl">
                <div className="w-full h-full rounded-full bg-[#060e1a] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#EDBB00]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-wider">
                  FCB SUPPORTERS CLUB
                </h3>
                <p className="text-xs text-[#EDBB00] font-extrabold uppercase tracking-widest">
                  BLAUGRANA BENGALURU
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed pr-4">
              FC Barcelona Supporters Club Bengaluru brings together passionate Culés across the city to celebrate Barça’s football, history, style, and spirit. From match screenings and chants to turf games and community events, this is where Bengaluru’s Blaugrana family comes together.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#EDBB00] shrink-0" />
              <span>Bengaluru / Bangalore, Karnataka, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#A50044]/40 border border-white/10 hover:border-[#EDBB00] flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-[#EDBB00]" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366]/30 border border-white/10 hover:border-[#25D366] flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </a>
              <a
                href="mailto:contact@barcabengaluru.com"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#004D98]/40 border border-white/10 hover:border-[#EDBB00] flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5 text-[#60A5FA]" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#EDBB00] uppercase tracking-widest border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/" className="hover:text-[#EDBB00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#EDBB00] transition-colors">About Culés Bengaluru</Link></li>
              <li><Link to="/join" className="hover:text-[#EDBB00] transition-colors">Join Membership</Link></li>
              <li><Link to="/screenings" className="hover:text-[#EDBB00] transition-colors">Match Screenings</Link></li>
              <li><Link to="/match-day" className="hover:text-[#EDBB00] transition-colors">Turf Games & Kickabouts</Link></li>
              <li><Link to="/gallery" className="hover:text-[#EDBB00] transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Col 4: Community & Culture */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#EDBB00] uppercase tracking-widest border-b border-white/10 pb-2">
              Community & Culture
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/announcements" className="hover:text-[#EDBB00] transition-colors">Announcements</Link></li>
              <li><Link to="/chants" className="hover:text-[#EDBB00] transition-colors">Barça Chants & Lyrics</Link></li>
              <li><Link to="/core-members" className="hover:text-[#EDBB00] transition-colors">Core Team & Leads</Link></li>
              <li><Link to="/shop" className="hover:text-[#EDBB00] transition-colors">Official Fan Merchandise</Link></li>
              <li><Link to="/contact" className="hover:text-[#EDBB00] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 5: FC Barcelona Slogan Callout */}
          <div className="space-y-3 bg-[#004D98]/20 border border-[#EDBB00]/30 rounded-2xl p-5 backdrop-blur-sm self-start">
            <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block">
              CATALAN FOOTBALL IDENTITY
            </span>
            <h5 className="text-lg font-black text-white uppercase tracking-tight">
              Més que un club.
            </h5>
            <p className="text-xs text-gray-300 leading-normal">
              More than a match. More than a screening. This is where Culés become family.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md mt-2 w-full justify-center"
            >
              <span>Join Community</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} FC Barcelona Supporters Club Bengaluru.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-300">Bangalore Culés Community</span>
          </div>

          <div className="flex items-center space-x-1 text-gray-300">
            <span>Built with passion for Barça</span>
            <Heart className="w-3.5 h-3.5 text-[#A50044] fill-current" />
            <span>in Bengaluru</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
