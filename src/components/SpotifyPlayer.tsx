import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music, Sparkles, Heart, Shield } from 'lucide-react';

interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  context: string;
}

export const SpotifyPlayer: React.FC = () => {
  const tracks: AudioTrack[] = [
    { id: '1', title: 'Cant del Barça (Official Club Anthem)', artist: 'Spotify Camp Nou Choir', duration: '2:45', context: 'Sung before every kickoff in Barcelona & Bengaluru' },
    { id: '2', title: 'Stadium Announcer Entrance ("Benvinguts!")', artist: 'Camp Nou PA Announcer', duration: '1:12', context: 'Team lineup announcement under stadium lights' },
    { id: '3', title: 'Un Dia de Partit (Screening Chant)', artist: 'Bengaluru Culés Chant Group', duration: '2:15', context: 'High energy drum cadence sung in Indiranagar' },
    { id: '4', title: 'El Clásico Goal Celebration Roar', artist: '100,000 Culés Crowd Ambient', duration: '0:58', context: 'Pure explosion of joy when Barça scores' }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(25);
  const [liked, setLiked] = useState(false);

  const activeTrack = tracks[currentTrackIndex];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-r from-[#060e1a] via-[#09172e] to-[#400018] border-2 border-[#EDBB00]/50 p-6 sm:p-8 text-left space-y-6 shadow-2xl relative overflow-hidden">
      {/* Top Bar Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 senyera-barca-strip-animated" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-[#1DB954] text-[#060e1a] flex items-center justify-center font-extrabold shadow-lg">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#1DB954] font-bold uppercase tracking-widest block">
              SPOTIFY CAMP NOU SOUNDSCAPE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Matchday Stadium Ambiance Player
            </h3>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#EDBB00] font-bold">
          AUDIO SIMULATOR
        </span>
      </div>

      {/* Player Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Album Artwork Mockup */}
        <div className="md:col-span-4 flex justify-center">
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#004D98] via-[#060e1a] to-[#A50044] border border-[#EDBB00] p-4 flex flex-col justify-between shadow-2xl relative group">
            <div className="flex justify-between items-center text-[#EDBB00]">
              <Shield className="w-6 h-6" />
              <span className="text-[9px] font-mono font-bold uppercase">BARÇA AUDIO</span>
            </div>

            <div className="text-center space-y-1">
              <span className="text-3xl font-black text-white uppercase tracking-tighter block font-mono">
                FCB × BLR
              </span>
              <p className="text-[10px] text-gray-300 uppercase tracking-widest font-mono">SPOTIFY CAMP NOU</p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>STEREO</span>
              <span className="text-[#1DB954] font-bold">● LIVE</span>
            </div>
          </div>
        </div>

        {/* Track Details & Player Controls */}
        <div className="md:col-span-8 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase block">
                Track {currentTrackIndex + 1} of {tracks.length}
              </span>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">
                {activeTrack.title}
              </h4>
              <p className="text-xs text-gray-300 font-mono mt-0.5">{activeTrack.artist}</p>
            </div>

            <button
              onClick={() => setLiked(!liked)}
              className={`p-2.5 rounded-full border transition-all ${
                liked ? 'bg-[#A50044] border-[#EDBB00] text-[#EDBB00]' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <p className="text-xs text-gray-300 font-sans italic bg-white/5 p-3 rounded-xl border border-white/10">
            "{activeTrack.context}"
          </p>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#1DB954] via-[#EDBB00] to-[#A50044] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-gray-400">
              <span>0:{Math.floor((progress / 100) * 45).toString().padStart(2, '0')}</span>
              <span>{activeTrack.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center space-x-6 pt-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-[#1DB954] text-[#060e1a] flex items-center justify-center shadow-xl hover:scale-105 transition-all"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
