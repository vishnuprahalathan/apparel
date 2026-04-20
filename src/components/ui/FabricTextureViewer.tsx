"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, ZoomIn, Info } from "lucide-react";

interface FabricTextureViewerProps {
    gsm: number;
    material: string;
}

export function FabricTextureViewer({ gsm, material }: FabricTextureViewerProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">
                        Surface-Scale // Macro
                    </span>
                    <span className="text-[8px] font-medium tracking-widest uppercase opacity-40">
                        Texture Integrity Check
                    </span>
                </div>
                <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                >
                    {isZoomed ? "Reset Scale" : "Maximize Grain"} <Maximize2 size={10} />
                </button>
            </div>

            <div className="relative aspect-square md:aspect-video w-full bg-neutral-900 border border-white/5 rounded-sm overflow-hidden group">
                <motion.div
                    animate={{ scale: isZoomed ? 2.5 : 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full cursor-zoom-in"
                    onDoubleClick={() => setIsZoomed(!isZoomed)}
                >
                    <Image
                        src="/textures/fabric_300.png"
                        alt={`${gsm}GSM ${material} texture`}
                        fill
                        className="object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700"
                    />
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Scanning Line */}
                    <motion.div
                        initial={{ top: "-100%" }}
                        animate={{ top: "200%" }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent z-10"
                    />
                </div>

                <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-accent animate-pulse rounded-full" />
                        <span className="text-[10px] font-mono tracking-tighter uppercase text-white/80">
                            Grain_ID: {gsm}_COTTON_ARCHIVE
                        </span>
                    </div>
                </div>

                <div className="absolute top-6 right-6 z-20">
                    <div className="p-2 glass border border-white/10 rounded-full text-brand-accent">
                        <ZoomIn size={14} />
                    </div>
                </div>
            </div>

            <div className="p-6 bg-neutral-900/30 border border-white/5 rounded-sm">
                <div className="flex gap-4 items-start">
                    <Info size={16} className="text-brand-accent shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2">Technical Insight</h4>
                        <p className="text-[10px] leading-relaxed italic opacity-50 uppercase tracking-wide">
                            At this magnification, the high-gauge loopback structure of our {gsm}GSM fabric is visible. This density ensures zero pilling and maximum structural recovery after repeated stress cycles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
