import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { Megaphone, Calendar, ArrowRight, Tag, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Announcements: React.FC = () => {
  const { announcements } = useAdmin();

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="COMMUNITY BROADCASTS"
        title="FCB Supporters Club Announcements"
        subtitle="Stay updated with match screening RSVPs, ticketing alerts, turf game schedules, and official Supporters Club updates."
      />

      <div className="space-y-6 max-w-4xl mx-auto">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-xl text-left space-y-4 ${
              ann.isUrgent ? 'border-[#A50044] border-l-8 border-l-[#A50044]' : 'border-white/10 hover:border-[#EDBB00]/40'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                {ann.isUrgent && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-widest flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>URGENT ALERT</span>
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/30 text-[#EDBB00] text-xs font-bold uppercase font-mono">
                  {ann.category}
                </span>
              </div>
              
              <span className="text-xs text-gray-400 font-mono flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#EDBB00]" />
                <span>{ann.date}</span>
              </span>
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                {ann.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {ann.description}
              </p>
            </div>

            {/* Optional Image (Rule #14: text-only must work, image is strictly optional) */}
            {ann.image && (
              <div className="rounded-2xl overflow-hidden max-h-72 border border-white/10">
                <img src={ann.image} alt={ann.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Optional CTA */}
            {ann.ctaText && ann.ctaLink && (
              <div className="pt-3 border-t border-white/10">
                <Link
                  to={ann.ctaLink}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>{ann.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
