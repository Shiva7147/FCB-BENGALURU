import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Lightbox } from '../components/Lightbox';
import { useAdmin } from '../context/AdminContext';
import { Maximize2, Calendar, Tag } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { gallery } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Screenings', 'Matchdays', 'Turf Games', 'Fans', 'Events'];

  const filteredItems = gallery.filter(item =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="BENGALURU CULÉS MEDIA"
        title="FC Barcelona Supporters Gallery"
        subtitle="Unforgettable matchday moments, screening celebrations, pyro atmosphere, and turf battles captured in Namma Bengaluru."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#071120] cursor-pointer shadow-xl transition-all duration-300 hover:border-[#EDBB00]/60 hover:-translate-y-1"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#060e1a]/80 backdrop-blur-md border border-[#EDBB00]/40 text-[#EDBB00] text-[10px] font-black uppercase tracking-widest shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Hover Fullscreen Overlay Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#EDBB00]" />
              </div>
            </div>

            {/* Bottom Caption Info */}
            <div className="p-5 bg-gradient-to-b from-[#071120] to-[#040a14] text-left border-t border-white/10">
              <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#EDBB00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-2 mt-1 leading-relaxed">
                {item.caption}
              </p>

              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#EDBB00]" />
                  <span>{item.date}</span>
                </span>
                <span className="text-[#EDBB00] font-bold">View Photo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer (Rule #13) */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}

    </div>
  );
};
