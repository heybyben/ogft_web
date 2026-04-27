"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, CalendarDays, ArrowRight } from "lucide-react";

const events = [
    {
        title: "Family Gathering OGFT",
        date: "20 April 2026",
        location: "Tangerang",
        slug: "family-gathering",
        image: "/events/family.jpg",
        desc: "Silaturahmi besar seluruh anggota OGFT dengan agenda musik, makan bersama, dan mempererat tali persaudaraan."
    }
];

export default function EventPage() {
    const featured = events[0];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 relative isolate">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.3em] uppercase">
                            <CalendarDays size={14} />
                            Upcoming Agenda
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            AGENDA <span className="text-red-500">OGFT</span>
                        </h1>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        Ikuti berbagai kegiatan seru dan bermakna bersama komunitas Orang Gila Fals Tangerang.
                    </p>
                </div>

                {/* FEATURED EVENT (HERO) */}
                <Link
                    href={`/event/${featured.slug}`}
                    className="group relative block rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                >
                    <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                Featured Event
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
                                {featured.title}
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-none">
                                {featured.desc}
                            </p>
                            <div className="flex flex-wrap gap-6 text-xs md:text-sm font-mono text-white/70 uppercase tracking-wider mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-red-500" />
                                    {featured.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-red-500" />
                                    {featured.location}
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95">
                                Lihat Detail <ArrowRight size={18} />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    );
}
