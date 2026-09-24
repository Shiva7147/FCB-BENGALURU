import React, { useState } from 'react';
import { Shield, Sparkles, Download, CheckCircle2, QrCode } from 'lucide-react';
import { EmblemBadge } from './EmblemBadge';

export const MemberCardGenerator: React.FC = () => {
  const [name, setName] = useState('Rahul Sharma');
  const [locality, setLocality] = useState('Indiranagar, Bengaluru');
  const [favPlayer, setFavPlayer] = useState('Lionel Messi & Lamine Yamal');
  const [tier, setTier] = useState('Official Blaugrana Member');
  const [memberId] = useState(`BLR-CULÉ-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <div className="glass-panel-gold p-6 sm:p-10 rounded-3xl border border-[#EDBB00]/40 text-left space-y-8 shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIGITAL WALLET MEMBERSHIP PASS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Generate Your Bengaluru Culé Card
          </h3>
          <p className="text-xs text-gray-300">
            Personalize your official FC Barcelona Supporters Club digital wallet card for fast screening entry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Input Form Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
              Supporter Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm font-bold"
              placeholder="Your Full Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Bengaluru Locality
              </label>
              <input
                type="text"
                value={locality}
                onChange={e => setLocality(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                placeholder="Indiranagar / Koramangala"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Membership Tier
              </label>
              <select
                value={tier}
                onChange={e => setTier(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#09152b] border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
              >
                <option value="Official Blaugrana Member">Official Blaugrana Member</option>
                <option value="El Clásico VIP Pass">El Clásico VIP Pass</option>
                <option value="Turf Football Maestro">Turf Football Maestro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
              Favorite Barça Player / Legend
            </label>
            <input
              type="text"
              value={favPlayer}
              onChange={e => setFavPlayer(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
              placeholder="e.g. Ronaldinho, Xavi, Messi, Yamal"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              {isDownloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pass Generated & Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Digital Wallet Pass</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Live Interactive Card Preview */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-[#091830] via-[#060e1a] to-[#70002b] border-2 border-[#EDBB00] p-6 text-left shadow-2xl relative overflow-hidden select-none">
            {/* Top Senyera Accent Strip */}
            <div className="absolute top-0 inset-x-0 h-2 senyera-barca-strip-animated" />
            <div className="absolute inset-0 bg-jersey-pattern opacity-25 pointer-events-none" />

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#EDBB00]/30 pb-4 relative z-10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#004D98] border border-[#EDBB00] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#EDBB00]" />
                </div>
                <div>
                  <span className="text-xs font-black text-white uppercase tracking-wider block leading-none">
                    FCB SUPPORTERS CLUB
                  </span>
                  <span className="text-[9px] text-[#EDBB00] font-extrabold tracking-widest uppercase">
                    BLAUGRANA BENGALURU
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono text-gray-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                2026/27
              </span>
            </div>

            {/* Card Main Body */}
            <div className="py-5 space-y-4 relative z-10">
              <div>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">MEMBER NAME</span>
                <p className="text-xl font-black text-white uppercase tracking-tight truncate">{name || 'Rahul Sharma'}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-[9px] text-gray-400 uppercase block">ID NUMBER</span>
                  <span className="text-[#EDBB00] font-bold">{memberId}</span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 uppercase block">LOCALITY</span>
                  <span className="text-gray-200 font-bold truncate block">{locality || 'Bengaluru'}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase block">FAV LEGEND</span>
                  <span className="text-white font-bold text-[11px] truncate block max-w-[170px]">{favPlayer || 'Lionel Messi'}</span>
                </div>

                <div className="p-1.5 rounded-xl bg-white text-[#060e1a]">
                  <QrCode className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Card Footer Slogan */}
            <div className="pt-3 border-t border-[#EDBB00]/30 flex items-center justify-between text-[10px] font-mono text-[#EDBB00] relative z-10">
              <span className="font-bold uppercase tracking-widest">{tier}</span>
              <span>MÉS QUE UN CLUB</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
