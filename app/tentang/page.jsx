"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import { motion } from "framer-motion"

export default function TentangPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image
                    src="/ogft-header.png"
                    alt="OGFT Logo"
                    width={400}
                    height={200}
                    className="mb-6"
                    priority
                />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6">
                Tentang OGFT
            </h1>

            {/* Content */}
            <div className="max-w-3xl text-white text-base md:text-lg leading-relaxed space-y-6 text-justify">
                <p>
                    <strong>OGFT (Orang Gila Fals Tangerang)</strong> adalah sebuah komunitas
                    yang lahir dari kecintaan yang mendalam terhadap karya-karya legendaris
                    Iwan Fals. Berbasis di Tangerang dan sekitarnya, OGFT menjadi rumah bagi
                    para penikmat musik yang tidak hanya sekadar mendengar lagu, tetapi juga
                    meresapi setiap lirik, makna, dan pesan yang terkandung di dalamnya.
                </p>

                <p>
                    Nama <strong>“Orang Gila”</strong> diambil dari salah satu album Iwan Fals
                    yang sarat makna. Di dalam komunitas ini, kata “gila” bukanlah sesuatu
                    yang negatif, melainkan simbol kecintaan yang luar biasa—kecintaan yang
                    total, tulus, dan tanpa batas terhadap musik dan pesan-pesan kehidupan.
                </p>

                <p>
                    OGFT hadir sebagai wadah untuk menyatukan berbagai latar belakang,
                    usia, dan cerita hidup dalam satu frekuensi yang sama: musik Iwan Fals.
                    Di sini, kami berkumpul bukan hanya untuk bernyanyi bersama, tetapi
                    juga berbagi cerita, pengalaman, dan sudut pandang tentang kehidupan.
                </p>

                <p>
                    Lebih dari sekadar komunitas penggemar, OGFT adalah sebuah keluarga.
                    Rasa kebersamaan, solidaritas, dan saling menghargai menjadi fondasi
                    utama dalam setiap langkah kami. Tidak ada batasan bagi siapa pun yang
                    ingin bergabung—semua diterima sebagai bagian dari keluarga besar ini.
                </p>

                <p>
                    Kami percaya bahwa musik bukan hanya hiburan, tetapi juga suara rakyat,
                    cermin kehidupan, dan media untuk menyampaikan kritik sosial dengan cara
                    yang jujur dan berani. Melalui OGFT, kami berusaha menjaga semangat itu
                    tetap hidup.
                </p>

                <p>
                    Di sinilah “kegilaan” itu menjadi sesuatu yang positif—menyatukan,
                    menginspirasi, dan menguatkan satu sama lain.
                </p>

                <p className="text-center font-bold text-red-500 text-lg mt-6">
                    OGFT — PINGGIRAN KOTA BESAR
                </p>
            </div>
        </div >
    );
}