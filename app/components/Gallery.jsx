"use client";

import { useState } from "react";
import { Maximize2, X, Camera } from "lucide-react";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  // Assuming 8 photos based on the previous implementation
  const photos = [1, 2, 3, 4, 5, 6, 7, 8].map(id => ({
    id,
    src: `/gallery/foto${id}.jpg`,
    title: `Momen OGFT #${id}`,
    category: id % 2 === 0 ? "Aksi" : "Kumpul"
  }));

  return (
    <section className="relative py-24 px-6 border-t border-white/5 overflow-hidden isolate">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.3em] uppercase">
              <Camera size={14} />
              Visual Archive
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              PERJALANAN <span className="text-red-500">WAKTU</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Kumpulan momen berharga yang tertangkap kamera, merekam jejak langkah kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 aspect-[4/5] cursor-pointer transition-all duration-500 hover:border-red-500/30 ${i === 0 || i === 5 || i === 6 || i === 7 ? "sm:col-span-2 sm:aspect-[8/5]" : ""}`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-105 grayscale group-hover:grayscale-0 active:grayscale-0 opacity-80 group-hover:opacity-100 active:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest mb-1 block">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{photo.title}</h3>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Maximize2 size={12} />
                    View Larger
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 group-hover:border-red-500/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>

          <div className="max-w-5xl w-full relative animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <img
              src={selected.src}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              alt=""
            />
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-1 block">
                  {selected.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
              </div>
              <p className="text-gray-500 text-sm italic">
                &copy; OGFT Tangerang Archive
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
