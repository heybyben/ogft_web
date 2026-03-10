"use client";

import { AlertTriangle } from "lucide-react";

export default function TentangPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center">
            {/* Warning Icon */}
            <AlertTriangle className="w-16 h-16 text-yellow-400 mb-8" />

            {/* 404 */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                404
            </h1>

            {/* Pesan */}
            <p className="text-white text-xl md:text-2xl font-medium mb-2">
                Halaman ini masih dalam pengembangan
            </p>
            <p className="text-white text-lg md:text-xl">
                Mohon bersabar
            </p>
        </div>
    );
}
