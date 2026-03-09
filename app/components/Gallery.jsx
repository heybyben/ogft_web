"use client";

import { useRef, useState } from "react";

export default function Gallery() {
    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);
    const [selected, setSelected] = useState(null);

    const photos = [1, 2, 3, 4, 5, 6, 7, 8];

    const scrollTo = (index) => {
        const slider = sliderRef.current;
        const width = slider.children[0].offsetWidth + 24;

        slider.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const slider = sliderRef.current;
        const width = slider.children[0].offsetWidth + 24;

        const index = Math.round(slider.scrollLeft / width);
        setActive(index);
    };

    let start = Math.max(0, active - 1);
    let end = Math.min(photos.length, start + 3);

    if (end - start < 3) {
        start = Math.max(0, end - 3);
    }

    const visibleDots = photos.slice(start, end);

    return (
        <section className="py-24 border-t border-red-900">

            <h2 className="text-3xl font-bold text-center mb-12">
                COMMUNITY <span className="text-red-500">MOMENTS</span>
            </h2>

            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex gap-6 px-12 overflow-x-auto no-scrollbar scroll-smooth"
            >
                {photos.map((i) => (
                    <img
                        key={i}
                        src={`/gallery/foto${i}.jpg`}
                        onClick={() => setSelected(`/gallery/foto${i}.jpg`)}
                        className="h-60 w-80 flex-shrink-0 rounded-xl border border-red-900 object-cover cursor-pointer hover:scale-105 transition"
                    />
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
                {visibleDots.map((_, i) => {
                    const index = start + i;
                    const isActive = index === active;

                    return (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`transition-all duration-300 rounded-full ${isActive
                                    ? "w-6 h-3 bg-red-500"
                                    : "w-3 h-3 bg-gray-600"
                                }`}
                        />
                    );
                })}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <img
                        src={selected}
                        className="max-h-[90vh] max-w-[90vw] rounded-xl"
                    />
                </div>
            )}

        </section>
    );
}
