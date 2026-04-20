"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const LOOKBOOK_ITEMS = [
    {
        id: 1,
        title: "The Urban Armor",
        description: "Engineered for the chaos of the megalopolis. Heavyweight cotton meets modular utility.",
        image: "/lookbook/urban_armor.png",
        position: "left"
    },
    {
        id: 2,
        title: "Material Integrity",
        description: "450GSM Organic Fleece. A fortress against the elements, a silhouette for the soul.",
        image: "/lookbook/fleece_armor.png",
        position: "right"
    },
    {
        id: 3,
        title: "Digital Ghost",
        description: "Monochrome aesthetics for those who navigate the void between screens.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200",
        position: "center"
    }
];

export default function LookbookPage() {
    return (
        <div className="bg-black text-white">
            {/* Cinematic Intro */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"
                />
                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs font-bold tracking-[0.5em] uppercase text-brand-accent mb-6 block"
                    >
                        Archive // Volume 01
                    </motion.span>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none"
                    >
                        Digital <br /> Dystopia
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Scroll to Decrypt</span>
                    <ChevronDown size={20} className="animate-bounce opacity-40" />
                </motion.div>
            </section>

            {/* Lookbook Grid */}
            <div className="px-6 md:px-12 py-32 space-y-64 max-w-7xl mx-auto">
                {LOOKBOOK_ITEMS.map((item, index) => (
                    <LookbookSection key={item.id} item={item} index={index} />
                ))}
            </div>

            {/* Outro CTA */}
            <section className="py-64 px-6 text-center border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 italic">
                        The Story <br /> Continues
                    </h2>
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-4 group text-sm font-bold tracking-[0.3em] uppercase"
                    >
                        Enter the Shop
                        <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all" />
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

function LookbookSection({ item, index }: { item: typeof LOOKBOOK_ITEMS[0]; index: number }) {
    const coord = `NODE_${String(item.id).padStart(2, "0")}`;

    return (
        <section className={`flex flex-col ${item.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-center`}>
            <motion.div
                initial={{ opacity: 0, x: item.position === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 aspect-[3/4] relative overflow-hidden group"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 space-y-8"
            >
                <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block opacity-60">Concept_0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter italic">{item.title}</h3>
                </div>
                <p className="text-lg md:text-xl font-light italic text-white/60 leading-relaxed max-w-md">
                    {item.description}
                </p>
                <div className="pt-8 border-t border-white/5">
                    <p className="text-[8px] font-mono tracking-widest opacity-20 uppercase">
                        COORD: {coord}{' // NODE_ACTIVE'}
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
