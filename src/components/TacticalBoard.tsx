import React, { useState } from 'react';
import { Shield, Sparkles, Activity, Info } from 'lucide-react';

interface PlayerPosition {
  id: string;
  name: string;
  number: number;
  role: string;
  culéPlayer: string;
  x: number; // percentage from left
  y: number; // percentage from top
  instruction: string;
}

interface TacticalPreset {
  id: string;
  name: string;
  style: string;
  description: string;
  positions: PlayerPosition[];
}

export const TacticalBoard: React.FC = () => {
  const presets: TacticalPreset[] = [
    {
      id: 'flick',
      name: "Hansi Flick's High-Press 4-2-3-1",
      style: 'Vertical Attack & Offside Trap',
      description: 'Relentless high pressing, narrow defensive line, rapid wing transitions, and vertical overload in the final third.',
      positions: [
        { id: 'p1', name: 'Ter Stegen / Peña', number: 1, role: 'Sweeper Keeper', culéPlayer: 'Rohan Sen', x: 50, y: 88, instruction: 'Pass short to CBs, sweep behind high line' },
        { id: 'p2', name: 'Koundé', number: 23, role: 'Inverted Right Back', culéPlayer: 'Siddharth', x: 82, y: 70, instruction: 'Underlap into midfield during build-up' },
        { id: 'p3', name: 'Cubarsí', number: 2, role: 'Ball-Playing CB', culéPlayer: 'Karthik Varma', x: 63, y: 76, instruction: 'Break lines with vertical ground passes' },
        { id: 'p4', name: 'Iñigo Martínez', number: 5, role: 'Covering CB', culéPlayer: 'Arjun M.', x: 37, y: 76, instruction: 'Step up aggressively to trigger offside trap' },
        { id: 'p5', name: 'Balde', number: 3, role: 'Attacking Left Back', culéPlayer: 'Anish K.', x: 18, y: 70, instruction: 'Provide full width on left flank' },
        { id: 'p6', name: 'Marc Casadó', number: 17, role: 'Deep Pivot', culéPlayer: 'Sameer Nair', x: 40, y: 55, instruction: 'Break up counter-attacks, anchor midfield' },
        { id: 'p7', name: 'Pedri', number: 8, role: 'Playmaker Pivot', culéPlayer: 'Priya S.', x: 60, y: 55, instruction: 'Control tempo, escape high pressure' },
        { id: 'p8', name: 'Lamine Yamal', number: 19, role: 'Inside Winger', culéPlayer: 'Vikram S.', x: 84, y: 32, instruction: 'Cut inside, 1v1 dribbling, trivela crosses' },
        { id: 'p9', name: 'Olmo / Fermín', number: 20, role: 'Attacking Midfielder', culéPlayer: 'Ananya H.', x: 50, y: 38, instruction: 'Make late box runs, press opponent DM' },
        { id: 'p10', name: 'Raphinha', number: 11, role: 'Free Winger', culéPlayer: 'Rahul Sharma', x: 16, y: 32, instruction: 'Diagonal runs behind defensive line' },
        { id: 'p11', name: 'Lewandowski', number: 9, role: 'Target Striker', culéPlayer: 'Varun K.', x: 50, y: 15, instruction: 'One-touch layoffs, clinical finish' }
      ]
    },
    {
      id: 'pep',
      name: "Pep Guardiola 2011 4-3-3 (Peak Tiki-Taka)",
      style: 'Positional Play & Overload',
      description: 'The golden era of possession. Xavi, Iniesta, and Busquets dictating 75% possession with Messi operating as False 9.',
      positions: [
        { id: 'pep1', name: 'Valdés', number: 1, role: 'Sweeper Keeper', culéPlayer: 'Rohan Sen', x: 50, y: 88, instruction: 'Play out from the back under pressure' },
        { id: 'pep2', name: 'Dani Alves', number: 2, role: 'Wing Back', culéPlayer: 'Siddharth', x: 85, y: 65, instruction: 'Bomb forward to right wing' },
        { id: 'pep3', name: 'Piqué', number: 3, role: 'Ball-Playing CB', culéPlayer: 'Karthik Varma', x: 63, y: 76, instruction: 'Initiate 1st phase build-up' },
        { id: 'pep4', name: 'Puyol', number: 5, role: 'Leader CB', culéPlayer: 'Arjun M.', x: 37, y: 76, instruction: 'Aggressive man-marking & aerial duels' },
        { id: 'pep5', name: 'Abidal', number: 22, role: 'Defensive LB', culéPlayer: 'Anish K.', x: 15, y: 70, instruction: 'Form back 3 when Alves overlaps' },
        { id: 'pep6', name: 'Busquets', number: 16, role: 'Single Pivot', culéPlayer: 'Sameer Nair', x: 50, y: 60, instruction: 'One-touch no-look passes, tactical fouls' },
        { id: 'pep7', name: 'Xavi', number: 6, role: 'Metronome CM', culéPlayer: 'Priya S.', x: 65, y: 48, instruction: '360° turns, 100+ passes per game' },
        { id: 'pep8', name: 'Iniesta', number: 8, role: 'Interior CM', culéPlayer: 'Ananya H.', x: 35, y: 48, instruction: 'La Croqueta dribbling, final ball' },
        { id: 'pep9', name: 'Pedro', number: 17, role: 'Pressing Winger', culéPlayer: 'Vikram S.', x: 80, y: 28, instruction: 'Constant off-ball movement & tracking back' },
        { id: 'pep10', name: 'Messi', number: 10, role: 'False 9', culéPlayer: 'Rahul Sharma', x: 50, y: 30, instruction: 'Drop deep into midfield, create 4v3 overload' },
        { id: 'pep11', name: 'David Villa', number: 7, role: 'Inside Forward', culéPlayer: 'Varun K.', x: 20, y: 28, instruction: 'Cut inside onto right foot' }
      ]
    },
    {
      id: 'turf',
      name: 'Bengaluru Culés 7v7 Turf Starting XI',
      style: 'Fast Scrimmage & High Energy',
      description: 'Our regular weekend 7v7 squad rotation for Koramangala and Indiranagar turf kickabouts.',
      positions: [
        { id: 't1', name: 'Rohan (GK)', number: 1, role: 'Turf Keeper', culéPlayer: 'Rohan Sen', x: 50, y: 88, instruction: 'Fast throw-outs to wings' },
        { id: 't2', name: 'Karthik (DEF)', number: 4, role: 'Anchor Defender', culéPlayer: 'Karthik Varma', x: 35, y: 72, instruction: 'Block shots, direct defense' },
        { id: 't3', name: 'Arjun (DEF)', number: 5, role: 'Sweeper Defender', culéPlayer: 'Arjun M.', x: 65, y: 72, instruction: 'Intercept loose balls' },
        { id: 't4', name: 'Priya (MID)', number: 6, role: 'Playmaker', culéPlayer: 'Priya S.', x: 30, y: 48, instruction: 'Distribute play across turf' },
        { id: 't5', name: 'Ananya (MID)', number: 8, role: 'Box-to-Box', culéPlayer: 'Ananya H.', x: 70, y: 48, instruction: 'Track back and support attacks' },
        { id: 't6', name: 'Vikram (FWD)', number: 10, role: 'Winger', culéPlayer: 'Vikram S.', x: 30, y: 22, instruction: 'Quick 1-2 passing' },
        { id: 't7', name: 'Rahul (FWD)', number: 9, role: 'Striker', culéPlayer: 'Rahul Sharma', x: 70, y: 22, instruction: 'Clinical finish' }
      ]
    }
  ];

  const [activePreset, setActivePreset] = useState<TacticalPreset>(presets[0]);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerPosition>(presets[0].positions[7]); // Lamine Yamal default

  return (
    <div className="glass-panel-gold p-6 sm:p-10 rounded-3xl border border-[#EDBB00]/40 text-left space-y-6 shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D98]/50 text-[#EDBB00] text-xs font-black uppercase tracking-widest mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>BARÇA TACTICAL BOARD</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            The Tactical Pitch & Lineup Master
          </h3>
          <p className="text-xs text-gray-300">
            Explore legendary Barça formations and see how Bengaluru Culés line up on local turfs.
          </p>
        </div>

        {/* Formation Preset Selectors */}
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActivePreset(p);
                setSelectedPlayer(p.positions[0]);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activePreset.id === p.id
                  ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {p.id === 'flick' ? 'Flick 4-2-3-1' : p.id === 'pep' ? 'Pep 2011 4-3-3' : 'Turf 7v7'}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Details Banner */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-extrabold text-[#EDBB00] uppercase font-mono">{activePreset.name}</span>
          <p className="text-gray-300 mt-0.5">{activePreset.description}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-wider shrink-0 font-mono">
          {activePreset.style}
        </span>
      </div>

      {/* Main Pitch Grid + Player Info Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left 7 Cols: Football Pitch Canvas Graphic */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#091f14] border-2 border-[#EDBB00]/40 overflow-hidden shadow-2xl p-4 select-none">
            {/* Pitch Turf Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
            
            {/* Pitch Markings */}
            <div className="absolute inset-4 border-2 border-white/30 rounded-2xl pointer-events-none" />
            <div className="absolute top-4 inset-x-4 h-1/2 border-b border-white/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full pointer-events-none" />
            
            {/* Top Penalty Area */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-20 border-b border-x border-white/30 pointer-events-none" />
            {/* Bottom Penalty Area */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-20 border-t border-x border-white/30 pointer-events-none" />

            {/* Interactive Player Pins */}
            {activePreset.positions.map((pos) => {
              const isSelected = selectedPlayer?.id === pos.id;
              return (
                <button
                  key={pos.id}
                  onClick={() => setSelectedPlayer(pos)}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all duration-300 ${
                    isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono font-extrabold text-xs shadow-xl ${
                    isSelected
                      ? 'bg-[#EDBB00] border-white text-[#060e1a] ring-4 ring-[#EDBB00]/40'
                      : 'bg-gradient-to-br from-[#004D98] to-[#A50044] border-[#EDBB00] text-white'
                  }`}>
                    {pos.number}
                  </div>
                  <span className="text-[9px] font-bold text-white font-mono uppercase bg-[#060e1a]/90 px-1.5 py-0.5 rounded border border-white/20 mt-1 whitespace-nowrap shadow-md">
                    {pos.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 5 Cols: Selected Player Details Card */}
        <div className="lg:col-span-5">
          {selectedPlayer ? (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#EDBB00]/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-widest">
                  POSITION #{selectedPlayer.number} • {selectedPlayer.role}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#004D98]/50 border border-[#EDBB00]/30 text-xs font-mono font-bold text-white">
                  {activePreset.name.split(' ')[0]}
                </span>
              </div>

              <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                {selectedPlayer.name}
              </h4>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Bengaluru Culé Player</span>
                <p className="text-sm font-extrabold text-[#EDBB00] font-mono">{selectedPlayer.culéPlayer}</p>
              </div>

              <div className="space-y-1 text-xs">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Tactical Instruction</span>
                <p className="text-gray-200 leading-relaxed font-sans bg-[#004D98]/20 p-3 rounded-xl border border-white/10">
                  "{selectedPlayer.instruction}"
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-2 text-[11px] text-gray-400 font-mono">
                <Info className="w-3.5 h-3.5 text-[#EDBB00]" />
                <span>Click any node on the pitch to inspect instructions</span>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-8 rounded-3xl text-center text-gray-400 text-xs font-mono">
              Click a player position on the pitch to inspect tactical details.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
