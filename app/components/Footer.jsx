import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-red-900/30 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold font-mono text-red-500">
              Orang Gila Fals Tangerang
            </h3>
            <p className="text-sm mt-3 text-gray-500">
              Pinggiran Kota Besar
            </p>
            <p className="text-sm mt-2 italic text-gray-500">
              Bersatu dalam karya, bersaudara dalam kebersamaan.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-400 cursor-pointer">Beranda</li>
              <li className="hover:text-red-400 cursor-pointer">Galeri</li>
              <li className="hover:text-red-400 cursor-pointer">Acara</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Tentang
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-400 cursor-pointer">
                Tentang OGFT
              </li>
              <li className="hover:text-red-400 cursor-pointer">
                Sejarah Komunitas
              </li>
              <li className="hover:text-red-400 cursor-pointer">
                Kontak
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Ikuti Kami
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ogft_tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 rounded-md hover:border-red-500 hover:text-red-400 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/oranggilafalstangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 rounded-md hover:border-red-500 hover:text-red-400 transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2009 - {year} Orang Gila Fals Tangerang</p>
          <p>
            Dibuat oleh{" "}
          <a
            href="https://ramaadni.my.id"
            target="_blank"
            rel="noopener noreferrer"
  className="text-red-500 hover:text-red-400"
          >
            Ramadhani
          </a>
          </p>
        </div>
      </div>
    </footer>
  );
}