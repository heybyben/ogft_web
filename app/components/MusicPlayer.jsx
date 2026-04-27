"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music2, ListMusic } from "lucide-react";

const songs = [
  { title: "Orang Gila", artist: "Iwan Fals • 1994", src: "/music/oranggila.mp3", cover: "/album/oranggila.png" },
  { title: "Kesaksian", artist: "Kantata Takwa • 1990", src: "/music/kesaksian.mp3", cover: "/album/kesaksian.png" },
  { title: "Lingkaran Aku Cinta Padamu", artist: "Iwan Fals ft. Sawung Jabo • 1986", src: "/music/lingkaran.mp3", cover: "/album/lingkaran.png" },
];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const playSong = (index) => {
    setCurrent(index);
    setPlaying(true);
  };

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextSong = () => {
    setCurrent((prev) => (prev + 1) % songs.length);
    setPlaying(true);
  };

  const prevSong = () => {
    setCurrent((prev) => (prev - 1 + songs.length) % songs.length);
    setPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
  }, [current]);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    audio.currentTime = percentage * audio.duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.3em] uppercase">
            <Music2 size={14} />
            Audio Archive
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            OGFT <span className="text-red-500">PLAYER</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          Kumpulan karya musik Iwan Fals.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Main Player */}
        <div className="flex-1 p-8 md:p-12 flex flex-col items-center text-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10">
            <div className={`absolute inset-0 bg-red-600/10 rounded-full blur-3xl transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`} />
            <img
              src={songs[current].cover}
              alt={songs[current].title}
              className={`w-full h-full object-cover rounded-full border-4 border-white/5 shadow-2xl relative z-10 transition-transform duration-1000 ${playing ? "animate-[spin_20s_linear_infinite]" : ""}`}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full border-2 border-white/10 z-20" />
          </div>

          <div className="mb-10 w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{songs[current].title}</h3>
            <p className="text-red-500 font-mono text-sm font-bold tracking-widest uppercase">{songs[current].artist}</p>
          </div>

          {/* Progress */}
          <div className="w-full space-y-3 mb-10">
            <div className="w-full h-1.5 bg-white/5 rounded-full cursor-pointer relative group" onClick={seek}>
              <div className="h-full bg-red-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-gray-500 font-bold tracking-widest uppercase">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8 md:gap-12">
            <button onClick={prevSong} className="text-gray-400 hover:text-white transition-transform active:scale-90"><SkipBack size={24} fill="currentColor" /></button>
            <button
              onClick={togglePlay}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 shadow-xl transition-all"
            >
              {playing ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" className="ml-1" />}
            </button>
            <button onClick={nextSong} className="text-gray-400 hover:text-white transition-transform active:scale-90"><SkipForward size={24} fill="currentColor" /></button>
          </div>
        </div>

        {/* Playlist */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h4 className="font-bold flex items-center gap-2 text-sm">
              <ListMusic size={16} className="text-red-500" />
              DAFTAR LAGU
            </h4>
            <span className="text-[10px] text-gray-500 font-mono">{songs.length} TRACKS</span>
          </div>
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            {songs.map((song, i) => (
              <button
                key={i}
                onClick={() => playSong(i)}
                className={`w-full flex items-center gap-4 p-4 transition-all ${current === i ? "bg-red-600/10" : "hover:bg-white/5"}`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={song.cover} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left">
                  <h5 className={`text-xs font-bold truncate ${current === i ? "text-white" : "text-gray-400"}`}>{song.title}</h5>
                  <p className="text-[9px] text-gray-500 truncate uppercase font-mono">{song.artist}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={songs[current].src}
        onTimeUpdate={updateProgress}
        onEnded={nextSong}
        onLoadedMetadata={onLoadedMetadata}
      />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}