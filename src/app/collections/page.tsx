"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const COLLECTIONS = [
    {
        id: "vol-01",
        title: "VOL 01: DIGITAL DYSTOPIA",
        desc: "The genesis collection. A fusion of tech-mesh and oversized silhouettes designed for the first generation of digital natives.",
        image: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?auto=format&fit=crop&q=80&w=1200",
        status: "ACTIVE",
        href: "/shop?collection=vol01"
    },
    {
        id: "v-vault",
        title: "V-VAULT: ARCHIVE",
        desc: "Rare prototypes and experimental pieces from the pre-release phase. Limited quantity. Zero restocks.",
        image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=1200",
        status: "LIMITED",
        href: "/shop?collection=vault"
    },
    {
        id: "cyan-sector",
        title: "SECTOR 04: CYAN",
        desc: "Coming Soon. Exploring the luminosity of the high-contrast spectrum. Uplink scheduled for Q3 2026.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200",
        status: "LOCKED",
        href: "#"
    }
];

export default function CollectionsPage() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-20">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase italic mb-8">
                    The <span className="text-brand-accent">Archives</span>
                </h1>
                <p className="max-w-2xl text-foreground/40 text-sm font-medium tracking-widest uppercase italic leading-relaxed">
                    Explore our distinct sectors of design. Each collection is a modular unit of the VOIDSTITCH ecosystem.
                </p>
            </div>

            <div className="space-y-32">
                {COLLECTIONS.map((col, i) => (
                    <motion.div
                        key={col.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                        className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-24 items-center`}
                    >
                        <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative overflow-hidden group">
                            <Image
                                src={col.image}
                                alt={col.title}
                                fill
                                className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${col.status === "LOCKED" ? "grayscale blur-sm" : "grayscale hover:grayscale-0"}`}
                            />
                            <div className="absolute top-6 left-6 px-4 py-1 bg-black text-white text-[8px] font-bold tracking-[0.3em] uppercase">
                                {col.status}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase">Sector {col.id}</span>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight italic">
                                {col.title}
                            </h2>
                            <p className="text-sm font-medium opacity-50 leading-relaxed uppercase tracking-wider">
                                {col.desc}
                            </p>
                            <Link
                                href={col.href}
                                className={`inline-block px-12 py-5 border border-foreground font-bold text-xs uppercase tracking-widest transition-all ${col.status === "LOCKED" ? "opacity-20 cursor-not-allowed" : "hover:bg-foreground hover:text-background"
                                    }`}
                            >
                                {col.status === "LOCKED" ? "Uplink Pending" : "Enter Sector"}
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
