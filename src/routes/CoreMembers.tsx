import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { MessageCircle, Shield, Heart } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from '../components/SocialIcons';

export const CoreMembers: React.FC = () => {
  const { coreMembers } = useAdmin();

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="LEADERSHIP & ORGANIZERS"
        title="FCB Supporters Club Core Team"
        subtitle="Meet the passionate Culés organizing match screenings, turf tournaments, media broadcasts, and community events across Bengaluru."
      />

      {/* Grid: Multi-column on desktop, single-column on mobile (Rule #17) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreMembers.map((member) => (
          <div
            key={member.id}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-[#EDBB00]/60 transition-all text-center space-y-4 shadow-xl group overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Profile Image Avatar */}
              <div className="relative w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-br from-[#004D98] via-[#EDBB00] to-[#A50044] overflow-hidden shadow-2xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {member.name}
                </h3>
                <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/30 text-[#EDBB00] text-[11px] font-extrabold uppercase tracking-wider">
                  {member.role}
                </span>
              </div>

              {/* Bio */}
              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Favorite Player & Socials */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-[11px] text-gray-400 font-mono">
                Fav Player: <span className="text-[#EDBB00] font-bold">{member.favoritePlayer}</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-2">
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#A50044]/40 text-gray-300 hover:text-white transition-all"
                    aria-label={`${member.name} Instagram`}
                  >
                    <InstagramIcon className="w-4 h-4 text-[#EDBB00]" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#004D98]/40 text-gray-300 hover:text-white transition-all"
                    aria-label={`${member.name} Twitter`}
                  >
                    <TwitterIcon className="w-4 h-4 text-[#60A5FA]" />
                  </a>
                )}
                {member.socials.whatsapp && (
                  <a
                    href={member.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#25D366]/30 text-gray-300 hover:text-white transition-all"
                    aria-label={`${member.name} WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
