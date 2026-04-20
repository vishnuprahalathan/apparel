"use client";

import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/config/brand";
import { Cpu, Zap, Eye, Database } from "lucide-react";

const VALUES = [
    { id: 1, icon: Cpu, title: "TECH-CORE", desc: "Every stitch is a line of code. We treat apparel design as software engineering." },
    { id: 2, icon: Zap, title: "KINETIC", desc: "Designed for movement in the high-speed transit of the digital metropolis." },
    { id: 3, icon: Eye, title: "VISUAL", desc: "Aesthetics that challenge the optical sensors of tomorrow." },
    { id: 4, icon: Database, title: "DATA-DRIVEN", desc: "Materials chosen through algorithmic analysis of durability and comfort." },
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Cinematic Hero */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center"
                >
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase italic leading-none">
                            The <br /> Origin <br /> <span className="text-brand-accent">Story</span>
                        </h1>
                    </div>
                </motion.div>
            </section>

            {/* Narrative Section */}
            <section className="px-6 md:px-12 max-w-4xl mx-auto mb-40">
                <div className="space-y-12">
                    <p className="text-xl md:text-3xl font-light italic leading-relaxed text-foreground/80">
                        Founded in 2026, <span className="text-foreground font-bold not-italic">{BRAND.name}</span> emerged from the intersection of functional workwear and the impending digital singularity.
                    </p>
                    <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] opacity-40 leading-loose">
                        In a world where the physical and virtual are indistinguishable, our clothing serves as the last interface. We don&apos;t just manufacture garments; we build armor for the modern nomad. Our silhouettes are inspired by the architecture of data centers, the textures of high-speed fiber optics, and the brutalism of server racks.
                    </p>
                    <div className="h-[2px] w-24 bg-brand-accent mx-auto" />
                </div>
            </section>

            {/* Values Grid */}
            <section className="px-6 md:px-12 bg-foreground text-background py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {VALUES.map((value, i) => (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                                    <value.icon size={20} className="text-background" />
                                </div>
                                <h3 className="text-lg font-bold tracking-widest uppercase italic">{value.title}</h3>
                                <p className="text-xs font-light tracking-wider opacity-60 leading-relaxed uppercase">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6 text-center">
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 italic">
                    Welcome to the Future.
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="text-left border-l-2 border-foreground/5 pl-6">
                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Contact Sector</span>
                        <p className="font-bold tracking-tight uppercase">{BRAND.contact.email}</p>
                    </div>
                    <div className="text-left border-l-2 border-foreground/5 pl-6">
                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Frequency</span>
                        <p className="font-bold tracking-tight uppercase">{BRAND.contact.instagram}</p>
                    </div>
                    <div className="text-left border-l-2 border-foreground/5 pl-6">
                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Location</span>
                        <p className="font-bold tracking-tight uppercase">Varkala // Digital Ghost</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
