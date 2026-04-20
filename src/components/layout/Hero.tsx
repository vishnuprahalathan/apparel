"use client";

import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/config/brand";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const titleVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 45 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: 0.5 + i * 0.1,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white perspective-1000">
            {/* Dynamic Background Layers */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-brand-accent)_0%,_transparent_70%)] opacity-10 mix-blend-screen" />

                {/* Animated Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-7xl">
                <div className="flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="inline-block text-[10px] md:text-sm font-bold uppercase mb-8 text-brand-accent"
                    >
                        {BRAND.tagline}
                    </motion.span>

                    <div className="overflow-hidden mb-4">
                        <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-[0.85] tracking-tighter uppercase italic flex flex-col md:flex-row gap-x-8">
                            <motion.span custom={1} initial="hidden" animate="visible" variants={titleVariants}>THE</motion.span>
                            <motion.span custom={2} initial="hidden" animate="visible" variants={titleVariants} className="text-brand-accent">VOID</motion.span>
                        </h1>
                    </div>

                    <div className="overflow-hidden mb-12">
                        <motion.h1
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={titleVariants}
                            className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-[0.85] tracking-tighter uppercase italic"
                        >
                            STITCH
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-sm md:text-base text-white mb-12 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest italic"
                    >
                        Modular apparel engineered for the high-bandwidth generation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-10"
                    >
                        <Link href="/shop" className="group relative px-16 py-6 border border-white/20 overflow-hidden hover:border-brand-accent transition-colors duration-500">
                            <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                                Enter the Void <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                            <div className="absolute inset-0 group-hover:bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                        </Link>

                        <Link href="/lookbook" className="text-[10px] uppercase font-bold tracking-[0.3em] hover:text-brand-accent transition-all duration-300 border-b border-transparent hover:border-brand-accent pb-1">
                            Release Notes 2026
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Social / Nav elements with better design */}
            <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-6">
                {['INSTAGRAM', 'TWITTER', 'DISCORD'].map((social, i) => (
                    <motion.a
                        key={social}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + i * 0.1 }}
                        href="#"
                        className="text-[8px] font-bold tracking-[0.4em] text-white/30 hover:text-white transition-colors vertical-text"
                    >
                        {social}
                    </motion.a>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-12 right-12 hidden lg:block"
            >
                <div className="flex flex-col gap-4 items-end">
                    <div className="w-24 h-[1px] bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-brand-accent w-1/2"
                        />
                    </div>
                    <span className="text-[8px] font-bold tracking-[0.3em] text-white/40 uppercase italic">
                        Synchronizing Link...
                    </span>
                </div>
            </motion.div>
        </section>
    );
}

