"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 border-b border-red-900 relative z-50 bg-black/80">
      {/* Logo */}
      <Link href="/" className="flex items-center font-bold text-lg text-white space-x-2">
        <img src="/icon.png" alt="OGFT Logo" className="w-8 h-8 object-contain invert" />
        <span>OGFT</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center text-white">
        <Link href="/" className="hover:text-red-500 transition">Beranda</Link>
        <Link href="/galeri" className="hover:text-red-500 transition">Galeri</Link>
        <Link href="/event" className="hover:text-red-500 transition">Acara</Link>
        <Link href="/tentang" className="hover:text-red-500 transition">Tentang</Link>
        <a
          href="https://chat.whatsapp.com/DUSv1EPryUsDQ4agkWUOKJ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition-all"
        >
          Gabung Komunitas
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-50"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-8 h-0.5 bg-red-500 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-8 h-0.5 bg-red-500 transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-8 h-0.5 bg-red-500 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center space-y-6 text-white text-lg">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-red-500 transition">Beranda</Link>
          <Link href="/galeri" onClick={() => setOpen(false)} className="hover:text-red-500 transition">Galeri</Link>
          <Link href="/event" onClick={() => setOpen(false)} className="hover:text-red-500 transition">Acara</Link>
          <Link href="/tentang" onClick={() => setOpen(false)} className="hover:text-red-500 transition">Tentang</Link>
          <a
            href="https://chat.whatsapp.com/DUSv1EPryUsDQ4agkWUOKJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition-all"
          >
            Gabung Komunitas
          </a>
        </div>
      )}
    </nav>
  );
}
