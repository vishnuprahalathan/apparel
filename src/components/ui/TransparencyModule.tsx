"use client";

import React from "react";
import { Shield, MapPin, Activity, Award } from "lucide-react";
import { motion } from "framer-motion";

interface TransparencyModuleProps {
    gsm: number;
    material: string;
    origin: string;
    washTest: string;
}

export function TransparencyModule({ gsm, material, origin, washTest }: TransparencyModuleProps) {
    return (
        <div className="mt-16 pt-16 border-t border-white/5">
            <div className="flex flex-col gap-2 mb-8">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">
                    TRANSPARENCY PROTOCOL V.01
                </span>
                <h2 className="text-2xl font-bold tracking-tighter uppercase">
                    Fabric & Origin Matrix
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <TransparencyCard
                    icon={<Activity size={18} />}
                    label="Fabric Density"
                    value={`${gsm} GSM`}
                    subtext="High-density heavyweight grain"
                />
                <TransparencyCard
                    icon={<Shield size={18} />}
                    label="Material"
                    value={material}
                    subtext="Sustainably sourced fibers"
                />
                <TransparencyCard
                    icon={<MapPin size={18} />}
                    label="Origin"
                    value={origin}
                    subtext="Crafted in core textile hubs"
                />
                <TransparencyCard
                    icon={<Award size={18} />}
                    label="Wash Durability"
                    value={washTest}
                    subtext="Tested for extreme longevity"
                />
            </div>

            {/* GSM Science Section */}
            <div className="mt-8 p-6 bg-neutral-900/50 border border-white/5 rounded-sm">
                <p className="text-[10px] leading-relaxed uppercase tracking-wider opacity-60">
                    <span className="text-brand-accent font-bold">Scientific Note:</span> {gsm} GSM (Grams per Square Meter) indicates a premium heavyweight fabric that maintains structure, provides superior drape, and ensures long-term resistance to warping or thinning.
                </p>
            </div>
        </div>
    );
}

function TransparencyCard({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string, subtext: string }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-neutral-900/30 border border-white/5 rounded-sm transition-all duration-500 hover:bg-neutral-900/50 hover:border-brand-accent/30 group"
        >
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-brand-accent mb-4 opacity-80 group-hover:opacity-100 transition-all"
            >
                {icon}
            </motion.div>
            <div className="gap-1 flex flex-col">
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-60 transition-opacity">
                    {label}
                </span>
                <span className="text-sm font-bold tracking-tight uppercase group-hover:text-brand-accent transition-colors">
                    {value}
                </span>
                <span className="text-[9px] font-medium opacity-30 uppercase italic mt-1 group-hover:opacity-50 transition-opacity">
                    {subtext}
                </span>
            </div>
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
        </motion.div>
    );
}
