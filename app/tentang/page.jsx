"use client";

import Image from "next/image";
import { Flame, Users, Heart, Music, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function TentangPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 relative isolate bg-black/80">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.3em] uppercase">
                        <Info size={14} />
                        Our Identity
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
                        TENTANG <span className="text-red-500 text-glow-red">OGFT</span>
                    </h1>
                    <div className="w-24 h-1 bg-red-600 rounded-full" />
                </div>

                {/* Hero Image/Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center mb-20"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-all duration-500" />
                        <Image
                            src="/ogft-header.png"
                            alt="OGFT Logo"
                            width={500}
                            height={250}
                            className="relative drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Sacred Content Section */}
                <div className="space-y-16">
                    {/* Block 1: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic border-l-4 border-red-600 pl-8 py-2">
                            <strong className="text-red-500 not-italic">OGFT (Orang Gila Fals Tangerang)</strong> adalah sebuah komunitas
                            yang lahir dari kecintaan yang mendalam terhadap karya-karya legendaris
                            Iwan Fals. Berbasis di Tangerang, lebih tepatnya di Pajang/Jurumudi. OGFT menjadi rumah bagi
                            para penikmat musik yang tidak hanya sekadar mendengar lagu, tetapi juga
                            meresapi setiap lirik, makna, dan pesan yang terkandung di dalamnya.
                        </p>
                    </motion.div>

                    {/* Block 2: The "Gila" Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 text-red-600/10 group-hover:text-red-600/20 transition-colors">
                            <Flame size={120} />
                        </div>
                        <div className="relative space-y-6">
                            <h3 className="text-2xl font-bold text-red-500 flex items-center gap-3">
                                <Flame size={24} /> FILOSOFI "GILA"
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Nama <strong className="text-white">“Orang Gila”</strong> diambil dari salah satu album Iwan Fals
                                yang sarat makna. Di dalam komunitas ini, kata “gila” bukanlah sesuatu
                                yang negatif, melainkan simbol kecintaan yang luar biasa—kecintaan yang
                                total, tulus, dan tanpa batas terhadap musik dan pesan-pesan kehidupan.
                            </p>
                        </div>
                    </motion.div>

                    {/* Block 3: The Gathering */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500">
                                <Music size={24} />
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                OGFT hadir sebagai wadah untuk menyatukan berbagai latar belakang,
                                usia, dan cerita hidup dalam satu frekuensi yang sama: musik Iwan Fals.
                                Di sini, kami berkumpul bukan hanya untuk bernyanyi bersama, tetapi
                                juga berbagi cerita, pengalaman, dan sudut pandang tentang kehidupan.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500">
                                <Users size={24} />
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Lebih dari sekadar komunitas penggemar, OGFT adalah sebuah keluarga.
                                Rasa kebersamaan, solidaritas, dan saling menghargai menjadi fondasi
                                utama dalam setiap langkah kami. Tidak ada batasan bagi siapa pun yang
                                ingin bergabung—semua diterima sebagai bagian dari keluarga besar ini.
                            </p>
                        </motion.div>
                    </div>

                    {/* Block 4: Beliefs */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center space-y-8 py-12"
                    >
                        <div className="max-w-2xl mx-auto space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Kami percaya bahwa musik bukan hanya hiburan, tetapi juga suara rakyat,
                                cermin kehidupan, dan media untuk menyampaikan kritik sosial dengan cara
                                yang jujur dan berani. Melalui OGFT, kami berusaha menjaga semangat itu
                                tetap hidup.
                            </p>
                            <p className="text-xl font-medium text-white italic">
                                Di sinilah “kegilaan” itu menjadi sesuatu yang positif—menyatukan,
                                menginspirasi, dan menguatkan satu sama lain.
                            </p>
                        </div>

                        <div className="pt-8">
                            <div className="inline-flex items-center gap-3 px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full">
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                                <p className="font-mono font-bold text-red-500 text-[10px] md:text-xs tracking-[0.2em] uppercase">
                                    OGFT — PINGGIRAN KOTA BESAR
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}