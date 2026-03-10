"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
    {
        title: "Family Gathering OGFT",
        date: "20 April 2026",
        location: "Tangerang",
        slug: "family-gathering",
        image: "/events/family.jpg",
        desc: "Silaturahmi besar anggota OGFT dengan musik, makan bersama, dan kebersamaan."
    },
];

export default function EventPage() {
    const featured = events[0];
    const otherEvents = events.slice(1);

    const [showAll, setShowAll] = useState(false);

    const displayedEvents = showAll ? otherEvents : otherEvents.slice(0, 3);

    return (
        <main className="max-w-7xl mx-auto px-6 py-20">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    ACARA <span className="text-red-500">KOMUNITAS</span>
                </h2>
                <p className="text-gray-400 mt-4">
                    Tempat memberi informasi acara komunitas
                </p>
            </div>

            {/* FEATURED EVENT */}
            <Link
                href={`/event/${featured.slug}`}
                className="group relative block rounded-3xl overflow-hidden mb-20"
            >
                <Image
                    src={featured.image}
                    alt={featured.title}
                    width={1400}
                    height={700}
                    className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/70" />

                <div className="absolute bottom-0 p-10 max-w-xl">
                    <p className="text-red-500 text-sm mb-2">
                        ACARA TERBARU
                    </p>
                    <h2 className="text-4xl font-bold text-white">
                        {featured.title}
                    </h2>
                    <p className="text-gray-300 mt-2">{featured.desc}</p>
                    <div className="flex gap-6 text-sm text-gray-400 mt-4">
                        <span>{featured.date}</span>
                        <span>{featured.location}</span>
                    </div>
                    <button className="mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-semibold">
                        Lihat Detail
                    </button>
                </div>
            </Link>

            {/* OTHER EVENTS */}
            {otherEvents.length > 0 && (
                <div className="mb-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {displayedEvents.map((event) => (
                            <Link
                                key={event.slug}
                                href={`/event/${event.slug}`}
                                className="group relative rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={600}
                                    height={500}
                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/70" />
                                <div className="absolute bottom-0 p-6">
                                    <p className="text-xs text-red-400">{event.date}</p>
                                    <h3 className="text-xl font-semibold text-white mt-1">{event.title}</h3>
                                    <p className="text-gray-300 text-sm mt-2">{event.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* TOMBOL TAMPILKAN LEBIH */}
                    {otherEvents.length > 3 && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
                            >
                                {showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua"}
                            </button>
                        </div>
                    )}
                </div>
            )}

        </main>
    );
}
