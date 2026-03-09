import Gallery from "./components/Gallery";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 p-12 items-center">

        <div>

          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-red-400 border border-red-500/40 bg-red-500/10 rounded-full">
            ORANG GILA FALS TANGERANG
          </span>

          <h1 className="text-6xl font-bold leading-tight">
            HIDUP BERSAMA,
            <br />
            <span className="text-red-500">
              HARUS DIJAGA.
            </span>
          </h1>

          <p className="mt-6 text-gray-400">
            Disini kami tetap berdiri, Disini kami tetap berpikir
            Disini kami tetap berjaga, Disini kami tetap waspada
            Disini kami membuka mata, Disini kami selalu mencari
            Kesejatian diri.
          </p>

          <button className="mt-6 bg-red-600 px-6 py-3 rounded">
            Explore the Archive →
          </button>

        </div>

        <div>
          <img
            src="/ogft-logo.png"
            className="w-80 mx-auto animate-float drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]"
          />

        </div>

      </section>

      <Gallery />

      <MusicPlayer />

      {/* JOIN COMMUNITY */}
      <section className="text-center py-24 border-t border-red-900">

        <h2 className="text-3xl font-bold">
          GABUNG BERSAMA <span className="text-red-500">OGFT</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Jadi bagian dari keluarga Orang Gila Fals Tangerang.
          <br />
          Berbicara tentang kehidupan, berbicara tentang kebudayaan, Berbicara tentang ombak lautan, berbicara tentang bintang di langit.
          <br />
          Kami berbicara tentang Tuhan, berbicara tentang kesejatian. Tentang apa saja.
        </p>


        <div className="mt-8 flex justify-center gap-4">


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
