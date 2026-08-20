import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full bg-[#004D98]/60 border border-[#EDBB00]/40 text-[#EDBB00] text-xs font-bold uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs text-gray-300 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-[#A50044] hover:text-white transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
        {/* Navigation Left */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:-left-12 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#EDBB00] hover:text-[#060e1a] transition-all z-20"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#060e1a]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
          />
          {/* Caption Overlay */}
          <div className="p-4 sm:p-6 bg-[#091426] border-t border-white/10 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              {currentItem.caption}
            </p>
            <div className="mt-3 flex items-center space-x-4 text-xs text-[#EDBB00] font-mono">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentItem.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Bengaluru Culés Community</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Right */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:-right-12 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#EDBB00] hover:text-[#060e1a] transition-all z-20"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Keyboard Helper Hint */}
      <div className="absolute bottom-4 text-center text-gray-400 text-[11px] font-mono hidden sm:block">
        Use Left / Right Arrow Keys to navigate • ESC to close
      </div>
    </div>
  );
};
