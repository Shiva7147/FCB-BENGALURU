import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Mail, MapPin, ExternalLink, X } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, TwitterIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  const policyContent: Record<string, { title: string; body: string }> = {
    privacy: {
      title: 'Privacy Policy',
      body: 'FC Barcelona Supporters Club Bengaluru respects your privacy. We collect basic information (name, phone, locality) solely for matchday screening RSVPs, turf game registration, and merchandise order fulfillment. We do not sell or share personal data with third parties.'
    },
    terms: {
      title: 'Terms of Service',
      body: 'By registering for matchday screenings or turf games with FC Barcelona Supporters Club Bengaluru, you agree to treat fellow fans and venue staff with respect. Disorderly conduct or harassment will result in revocation of community membership.'
    },
    refunds: {
      title: 'Refund & Return Policy',
      body: 'Merchandise purchases can be exchanged or refunded within 7 days of pickup or delivery if damaged or incorrectly sized. Matchday screening cover charge tickets are non-refundable but transferable to another Culé.'
    },
    shipping: {
      title: 'Shipping & Delivery Policy',
      body: 'Merchandise orders in Bengaluru are available for FREE pickup at the next scheduled matchday screening, or via standard home courier (2-4 business days across Bangalore).'
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#060e1a] via-[#040912] to-[#02050a] text-gray-300 border-t border-white/10 pt-16 pb-12 overflow-hidden">
        {/* Top Animated Barça Catalan Strip */}
        <div className="absolute top-0 inset-x-0 senyera-barca-strip" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1 & 2: Branding & Identity */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#004D98] via-[#060e1a] to-[#A50044] p-0.5 border border-[#EDBB00] shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#060e1a] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#EDBB00]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">
                    FCB SUPPORTERS CLUB
                  </h3>
                  <p className="text-[10px] text-[#EDBB00] font-extrabold uppercase tracking-widest">
                    BLAUGRANA BENGALURU
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pr-4">
                FC Barcelona Supporters Club Bengaluru is a community for Culés in Bengaluru who come together to experience Barça beyond the screen. From match screenings and chants to turf games and community events.
              </p>

              <div className="pt-1 flex items-center space-x-2 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-[#EDBB00] shrink-0" />
                <span>Bengaluru / Bangalore, Karnataka, India</span>
              </div>

              {/* Official Social Media Glyphs (Section 16 & 17 Client URLs) */}
              <div className="flex items-center space-x-2.5 pt-2">
                <a
                  href="https://www.instagram.com/fcbbengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#A50044]/40 border border-white/10 hover:border-[#EDBB00] text-[#EDBB00] transition-all"
                  aria-label="Official Instagram (@fcbbengaluru)"
                  title="Official Instagram (@fcbbengaluru)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linktr.ee/fcb.bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/30 border border-white/10 hover:border-[#25D366] text-[#25D366] transition-all"
                  aria-label="Official WhatsApp Community & Linktree"
                  title="Official WhatsApp Community & Linktree"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@FCBBengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600/30 border border-white/10 hover:border-red-500 text-red-500 transition-all"
                  aria-label="Official YouTube Channel (@FCBBengaluru)"
                  title="Official YouTube Channel (@FCBBengaluru)"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/fcb_bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-600/30 border border-white/10 hover:border-sky-400 text-sky-400 transition-all"
                  aria-label="Official X / Twitter (@fcb_bengaluru)"
                  title="Official X / Twitter (@fcb_bengaluru)"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 3: Navigation Links */}
            <div className="space-y-3 text-left">
              <h4 className="text-xs font-black text-[#EDBB00] uppercase tracking-widest border-b border-white/10 pb-2">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link to="/" className="hover:text-[#EDBB00] transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#EDBB00] transition-colors">About Culés Bengaluru</Link></li>
                <li><Link to="/join" className="hover:text-[#EDBB00] transition-colors">Join Membership</Link></li>
                <li><Link to="/screenings" className="hover:text-[#EDBB00] transition-colors">Match Screenings</Link></li>
                <li><Link to="/match-day" className="hover:text-[#EDBB00] transition-colors">Turf Games</Link></li>
                <li><Link to="/gallery" className="hover:text-[#EDBB00] transition-colors">Photo Gallery</Link></li>
              </ul>
            </div>

            {/* Col 4: Community & Culture */}
            <div className="space-y-3 text-left">
              <h4 className="text-xs font-black text-[#EDBB00] uppercase tracking-widest border-b border-white/10 pb-2">
                Community & Culture
              </h4>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link to="/announcements" className="hover:text-[#EDBB00] transition-colors">Announcements</Link></li>
                <li><Link to="/chants" className="hover:text-[#EDBB00] transition-colors">Barça Chants & Lyrics</Link></li>
                <li><Link to="/core-members" className="hover:text-[#EDBB00] transition-colors">Core Team & Leads</Link></li>
                <li><Link to="/shop" className="hover:text-[#EDBB00] transition-colors">Official Fan Store</Link></li>
                <li><Link to="/contact" className="hover:text-[#EDBB00] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 5: FC Barcelona Slogan Callout (Rule #23 Requirement) */}
            <div className="space-y-3 bg-[#004D98]/20 border border-[#EDBB00]/30 rounded-2xl p-5 backdrop-blur-sm self-start text-left">
              <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block">
                ONE COMMUNITY
              </span>
              <h5 className="text-base font-black text-white uppercase tracking-tight">
                Més que un club. Més que a match.
              </h5>
              <p className="text-xs text-gray-300 leading-normal">
                Where Bengaluru’s Culés come together for football, friendship and unforgettable matchday nights.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center space-x-1 px-3 py-2 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md mt-2 w-full justify-center"
              >
                <span>Join Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Bottom Policy & Copyright Row (Rule #23) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-3">
              <span>© {new Date().getFullYear()} FC Barcelona Supporters Club Bengaluru.</span>
              <span className="hidden sm:inline">•</span>
              <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-[#EDBB00]">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('terms')} className="hover:text-[#EDBB00]">Terms</button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('refunds')} className="hover:text-[#EDBB00]">Refunds</button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-[#EDBB00]">Shipping</button>
            </div>

            <div className="flex items-center space-x-1 text-gray-300">
              <span>Built with passion for Barça</span>
              <Heart className="w-3.5 h-3.5 text-[#A50044] fill-current" />
              <span>in Bengaluru</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Policy Modal Viewer */}
      {activePolicyModal && policyContent[activePolicyModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#071120] border border-[#EDBB00]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-black text-white uppercase">
                {policyContent[activePolicyModal].title}
              </h3>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="p-1 rounded-full text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              {policyContent[activePolicyModal].body}
            </p>
            <div className="pt-2 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-5 py-2 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
