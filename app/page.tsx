"use client";

import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {

  const words = ["Asah", "Asih", "Asuh"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

    const current = words[wordIndex];

    const timeout = setTimeout(() => {

      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setDeleting(true), 1000);
        }

      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }

    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);

  }, [text, deleting, wordIndex]);

  return (
    <main>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 p-12 items-center">

        <div>

          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-red-400 border border-red-500/40 bg-red-500/10 rounded-full">
            ORANG GILA FALS TANGERANG
          </span>

          <h1 className="text-6xl font-bold leading-tight font-mono">
            Hidup Bersama,
            <br />
            <span className="text-red-500">
              Harus Dijaga.
            </span>
          </h1>

          <p className="mt-3 text-lg text-gray-300 font-mono">
            Saling <span className="text-red-500">{text}</span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-6 text-gray-400">
            Disini kami tetap berdiri, disini kami tetap berpikir,
            disini kami tetap berjaga, disini kami tetap waspada,
            disini kami membuka mata, disini kami selalu mencari
            Kesejatian diri.
          </p>

        </div>

        <div>
          <img
            src="/ogft-logo.png"
            className="w-80 mx-auto animate-float drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]"
          />
        </div>

      </section>

      {/* RUNNING TEXT */}
      <div className="relative overflow-hidden border-y border-red-900 py-3 bg-black">
        {/* fade kiri */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        {/* fade kanan */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-6 text-red-400 font-mono text-sm">
            OGFT • Orang Gila Fals Tangerang • Hidup Bersama Harus Dijaga • Pinggiran Kota Besar • Fals Mania • Saling Asah • Saling Asih • Saling Asuh •
          </span>

          {/* DUPLIKAT WAJIB */}
          <span className="mx-6 text-red-400 font-mono text-sm">
            OGFT • Orang Gila Fals Tangerang • Hidup Bersama Harus Dijaga • Pinggiran Kota Besar • Fals Mania • Saling Asah • Saling Asih • Saling Asuh •
          </span>
        </div>
      </div>

      <Gallery />

      <MusicPlayer />

      {/* JOIN COMMUNITY */}
      <section className="text-center py-20 px-6 border-t border-red-900">
        <h2 className="text-2xl sm:text-3xl font-bold">
          GABUNG BERSAMA <span className="text-red-500">OGFT</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm sm:text-base">
          Jadi bagian dari keluarga Orang Gila Fals Tangerang.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/DUSv1EPryUsDQ4agkWUOKJ"
            target="_blank"
            className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Join WhatsApp Group
          </a>

          <a
            href="https://www.instagram.com/ogft_tangerang?igsh=MTNzZWl2eDR0MmN2Ng=="
            target="_blank"
            className="border border-red-600 px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Follow Instagram
          </a>
        </div>

      </section>

    </main>
  );
}