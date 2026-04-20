"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

export function ProductCard({ id, name, price, category, image }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col"
        >
            <Link href={`/product/${id}`} className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[2px]">
                    <button className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white transition-all duration-300 active:scale-95">
                        Quick Add <ShoppingBag size={14} />
                    </button>
                </div>

                <div className="absolute top-4 left-4 flex flex-col gap-2 overflow-hidden">
                    <motion.span 
                        whileHover={{ x: 5 }}
                        className="text-[8px] font-bold tracking-[0.2em] uppercase bg-brand-accent text-white px-3 py-1 italic relative"
                    >
                        VOL 01
                    </motion.span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-colors">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
            </Link>

            <div className="mt-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30 flex items-center gap-2 group-hover:text-brand-accent/50 transition-colors">
                            <span className="w-2 h-[1px] bg-foreground/30 group-hover:w-4 group-hover:bg-brand-accent/50 transition-all" />
                            {category}
                        </span>
                        <Link href={`/product/${id}`} className="block text-sm md:text-base font-bold tracking-tight hover:text-brand-accent transition-colors uppercase italic">
                            {name}
                        </Link>
                    </div>
                    <span className="text-sm font-bold tracking-tighter text-brand-accent group-hover:scale-110 transition-transform origin-right">
                        ₹{price.toLocaleString()}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

