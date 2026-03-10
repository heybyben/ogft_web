"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const songs = [
  { title: "Orang Gila", artist: "Iwan Fals • 1994", src: "/music/oranggila.mp3", cover: "/album/oranggila.png" },
  { title: "Kesaksian", artist: "Kantata Takwa • 1990", src: "/music/kesaksian.mp3", cover: "/album/kesaksian.png" },
  { title: "Lingkaran Aku Cinta Padamu", artist: "Iwan Fals ft. Sawung Jabo • 1986", src: "/music/lingkaran.mp3", cover: "/album/lingkaran.png" },
];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const playSong = (index) => { setCurrent(index); setPlaying(true); };
  const togglePlay = () => { playing ? audioRef.current.pause() : audioRef.current.play(); setPlaying(!playing); };
  const nextSong = () => { setCurrent((prev) => (prev + 1) % songs.length); setPlaying(true); };
  const prevSong = () => { setCurrent((prev) => (prev - 1 + songs.length) % songs.length); setPlaying(true); };

  useEffect(() => { if (playing) audioRef.current.play(); }, [current]);

  const updateProgress = () => { const audio = audioRef.current; setProgress((audio.currentTime / audio.duration) * 100 || 0); };
  const seek = (e) => { const audio = audioRef.current; const rect = e.target.getBoundingClientRect(); audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration; };

  return (
    <section className="p-12 flex justify-center">
      <div className="flex flex-col md:flex-row bg-[#0b0b0b] border border-red-900 rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-2/3 flex flex-col items-center p-6">
          <div className="w-64 h-64 mb-6 rounded-xl overflow-hidden shadow-lg">
            <img src={songs[current].cover} alt={songs[current].title} className="w-full h-full object-cover" />
          </div>
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-white">{songs[current].title}</h3>
            <p className="text-gray-400">{songs[current].artist}</p>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full mb-6 cursor-pointer" onClick={seek}>
            <div className="h-2 bg-red-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-center gap-8 items-center text-2xl">
            <button onClick={prevSong} className="p-4 rounded-full hover:bg-red-600/30 transition"><SkipBack className="text-red-500 w-8 h-8" /></button>
            <button onClick={togglePlay} className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-black hover:scale-110 transition-transform shadow-lg">{playing ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}</button>
            <button onClick={nextSong} className="p-4 rounded-full hover:bg-red-600/30 transition"><SkipForward className="text-red-500 w-8 h-8" /></button>
          </div>
        </div>
        <div className="w-full md:w-1/3 border-l border-red-900 divide-y divide-red-900 overflow-y-auto max-h-[400px]">
          {songs.map((song, i) => (
            <div key={i} onClick={() => playSong(i)} className={`flex flex-col p-4 cursor-pointer hover:bg-red-900/10 transition ${current === i ? "bg-red-900/30" : ""}`}>
              <h3 className="font-semibold text-white">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          ))}
        </div>
        <audio ref={audioRef} src={songs[current].src} onTimeUpdate={updateProgress} onEnded={nextSong} />
      </div>
    </section>
  );
}