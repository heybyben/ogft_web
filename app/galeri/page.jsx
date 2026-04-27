"use client";

import { useState, useMemo } from "react";
import { Maximize2, X, Camera } from "lucide-react";

export default function GaleriPage() {
    const [selected, setSelected] = useState(null);

    // Menghasilkan 39 foto secara otomatis
    const photos = useMemo(() => {
        const totalPhotos = 38; // foto1 sampai foto38
        const data = [];

        // Masukkan foto Satu Dekade di paling atas (Besar, 3 Kolom, 2 Baris)
        data.push({
            id: 'highlight-1',
            src: '/gallery/satu-dekade.jpg',
            title: 'SATU DEKADE OGFT',
            category: 'Highlight',
            spanClass: 'lg:col-span-3 lg:row-span-2 !aspect-auto',
            isHero: true
        });

        // Pola berulang untuk foto-foto berikutnya
        const getSpan = (index) => {
            // Foto ke-1 dan ke-2 (index 0 & 1 setelah hero) dibuat mengikuti tinggi hero
            if (index === 0 || index === 1) return "lg:col-span-1 lg:row-span-1 !aspect-auto h-full";

            // Sisanya kembali ke pola standar 8-foto
            const pos = (index - 2) % 8;
            if (pos === 0 || pos === 5 || pos === 6 || pos === 7) return "sm:col-span-2 sm:aspect-[8/5]";
            return "";
        };

        for (let i = 1; i <= totalPhotos; i++) {
            data.push({
                id: i,
                src: `/gallery/foto${i}.jpg`,
                title: `Momen OGFT #${i}`,
                category: 'Koleksi',
                spanClass: getSpan(i - 1)
            });
        }
        return data;
    }, []);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 relative isolate">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.3em] uppercase">
                            <Camera size={14} />
                            Full Archive
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            ARSIP <span className="text-red-500">OGFT</span>
                        </h1>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        Setiap momen yang di abadikan, semoga akan tetap abadi.
                    </p>
                </div>

                {/* Gallery Grid (Desktop) & Top 5 (Mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 grid-flow-dense lg:mb-12">
                    {photos.map((photo, i) => (
                        <div
                            key={photo.id}
                            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 aspect-[4/5] cursor-pointer transition-all duration-500 hover:border-red-500/30 ${photo.spanClass} ${i >= 5 ? "hidden lg:block" : ""}`}
                            onClick={() => setSelected(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className={`w-full h-full transition-transform duration-700 group-hover:scale-110 active:scale-105 ${photo.isHero ? "object-contain bg-black/50" : "object-cover grayscale-0 sm:grayscale group-hover:grayscale-0 opacity-100 sm:opacity-80 group-hover:opacity-100"}`}
                            />

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

                            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 group-hover:border-red-500/50 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                {/* Mobile Slider for photos 6 onwards */}
                {photos.length > 5 && (
                    <div className="lg:hidden mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Koleksi Lainnya</h4>
                            <span className="text-[10px] text-gray-600 italic">Geser untuk melihat lainnya →</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar">
                            {photos.slice(5).map((photo) => (
                                <div
                                    key={photo.id}
                                    className="min-w-[280px] aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/5 snap-start"
                                    onClick={() => setSelected(photo)}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                                        <span className="text-[8px] font-mono text-red-500 uppercase tracking-widest">{photo.category}</span>
                                        <h5 className="text-sm font-bold text-white">{photo.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
