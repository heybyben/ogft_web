"use client";

import { useState, useRef, useEffect } from "react";

const songs = [
    { title: "Orang Gila", artist: "Iwan Fals • 1994", src: "/music/oranggila.mp3" },
    { title: "Kesaksian", artist: "Kantata Takwa • 1990", src: "/music/kesaksian.mp3" },
    { title: "Lingkaran Aku Cinta Padamu", artist: "Iwan Fals ft. Sawung Jabo • 1986", src: "/music/lingkaran.mp3" },
];

export default function MusicPlayer() {
    const [current, setCurrent] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

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
        const next = (current + 1) % songs.length;
        setCurrent(next);
        setPlaying(true);
    };

    const prevSong = () => {
        const prev = (current - 1 + songs.length) % songs.length;
        setCurrent(prev);
        setPlaying(true);
    };

    useEffect(() => {
        if (playing) audioRef.current.play();
    }, [current]);

    const updateProgress = () => {
        const audio = audioRef.current;
        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(percent || 0);
    };

    const seek = (e) => {
        const audio = audioRef.current;
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    };

    return (
        <section className="p-12">

            <h2 className="text-3xl font-bold mb-10">
                OGFT MUSIC PLAYER
            </h2>

            <div className="bg-[#0b0b0b] border border-red-900 rounded-xl overflow-hidden">

                {/* PLAYLIST */}
                <div className="divide-y divide-red-900">

                    {songs.map((song, i) => (
                        <div
                            key={i}
                            onClick={() => playSong(i)}
                            className={`flex justify-between items-center p-4 cursor-pointer hover:bg-[#140404] transition
              ${current === i ? "bg-[#140404]" : ""}`}
                        >
                            <div>
                                <h3 className="font-bold">{song.title}</h3>
                                <p className="text-sm text-gray-400">{song.artist}</p>
                            </div>

                            <span className="text-red-500 text-lg">
                                {current === i && playing ? "❚❚" : "▶"}
                            </span>
                        </div>
                    ))}

                </div>

                {/* PLAYER */}
                <div className="border-t border-red-900 p-6">

                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className="font-bold">{songs[current].title}</h3>
                            <p className="text-sm text-gray-400">
                                {songs[current].artist}
                            </p>
                        </div>
                    </div>

                    {/* PROGRESS BAR */}
                    <div
                        className="w-full h-2 bg-gray-800 rounded cursor-pointer mb-6"
                        onClick={seek}
                    >
                        <div
                            className="h-2 bg-red-500 rounded"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* CONTROLS */}
                    <div className="flex justify-center gap-6 text-xl">

                        <button
                            onClick={prevSong}
                            className="hover:text-red-500 transition"
                        >
                            ⏮
                        </button>

                        <button
                            onClick={togglePlay}
                            className="text-3xl hover:text-red-500 transition"
                        >
                            {playing ? "⏸" : "▶"}
                        </button>

                        <button
                            onClick={nextSong}
                            className="hover:text-red-500 transition"
                        >
                            ⏭
                        </button>

                    </div>

                </div>

                <audio
                    ref={audioRef}
                    src={songs[current].src}
                    onTimeUpdate={updateProgress}
                    onEnded={nextSong}
                />

            </div>

        </section>
    );
}
