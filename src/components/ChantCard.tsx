import React, { useState } from 'react';
import { Volume2, Play, Pause, Music, Flame, Copy, Check } from 'lucide-react';
import { Chant } from '../types';

interface ChantCardProps {
  chant: Chant;
}

export const ChantCard: React.FC<ChantCardProps> = ({ chant }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyLyrics = () => {
    const textToCopy = `${chant.title}\n\n${chant.catalanLyrics.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative glass-panel rounded-3xl p-6 border border-white/10 hover:border-[#EDBB00]/50 transition-all duration-300 shadow-xl overflow-hidden group text-left">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#004D98]/20 via-[#A50044]/20 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-50 transition-opacity pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div>
          <div className="flex items-center space-x-2 text-[#EDBB00] text-xs font-bold uppercase tracking-widest mb-1">
            <Flame className="w-3.5 h-3.5 text-[#A50044]" />
            <span>Stadium Chant</span>
          </div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            {chant.title}
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          {/* Copy Lyrics Button (Rule #13) */}
          <button
            onClick={handleCopyLyrics}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#EDBB00] hover:border-[#EDBB00]/40 transition-all"
            title="Copy Chant Lyrics"
            aria-label="Copy Chant Lyrics"
          >
            {copied ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* Audio Visualizer Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
              isPlaying
                ? 'bg-[#A50044] border-[#EDBB00] text-white shadow-lg animate-pulse'
                : 'bg-white/5 border-white/20 text-[#EDBB00] hover:bg-[#004D98]/50'
            }`}
            aria-label={isPlaying ? 'Pause Stadium Audio' : 'Play Stadium Audio'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Simulated Sound Wave Visualizer when playing */}
      {isPlaying && (
        <div className="mb-4 p-3 rounded-xl bg-[#004D98]/30 border border-[#EDBB00]/30 flex items-center justify-between space-x-1 animate-fadeIn">
          <div className="flex items-center space-x-2 text-xs text-[#EDBB00] font-mono">
            <Volume2 className="w-4 h-4 animate-bounce" />
            <span>Camp Nou Acoustic Audio Active...</span>
          </div>
          <div className="flex items-end space-x-1 h-5">
            {[40, 75, 90, 60, 100, 45, 80, 65, 95, 50, 70, 85].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-[#EDBB00] rounded-full transition-all duration-300 animate-pulse"
                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Lyrics Toggle (Catalan / English) */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
        <span className="text-xs font-mono text-gray-400">
          {showEnglish ? 'Catalan + English Translation' : 'Original Catalan Verse'}
        </span>
        <button
          onClick={() => setShowEnglish(!showEnglish)}
          className="text-[11px] font-bold uppercase tracking-wider text-[#EDBB00] hover:underline"
        >
          {showEnglish ? 'Hide English' : 'Show English'}
        </button>
      </div>

      {/* Lyrics Content */}
      <div className="space-y-3 font-serif leading-relaxed text-sm sm:text-base">
        {chant.catalanLyrics.map((line, idx) => (
          <div key={idx} className="border-l-2 border-[#A50044] pl-3">
            <p className="text-white font-semibold">{line}</p>
            {showEnglish && chant.englishTranslation[idx] && (
              <p className="text-xs text-gray-400 font-sans italic mt-0.5">
                {chant.englishTranslation[idx]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Usage Context Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-gray-300">
        <Music className="w-4 h-4 text-[#EDBB00] shrink-0" />
        <span className="italic">{chant.context}</span>
      </div>
    </div>
  );
};
