"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AdUnitProps {
  type: "banner" | "sidebar" | "inline";
  title?: string;
  description?: string;
  cta?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ type, title, description, cta }) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  if (type === "banner") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-neutral-900 border border-brand-accent/20 p-12 md:p-20 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 text-[9px] font-bold tracking-[0.4em] uppercase opacity-40 italic z-20">
          Uplink // Stream
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            style={{ y: yParallax }}
            className="max-w-xl"
          >
            <span className="text-brand-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Exclusive Protocol</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 italic leading-none">
              {title || "Digital Frontier Access"}
            </h3>
            <p className="text-sm md:text-base font-light italic opacity-60 leading-relaxed max-w-md">
              {description || "Join the Waitlist for Vol 02: Neural Knitwear. Early access for the digital collective members only."}
            </p>
          </motion.div>
          <button className="px-12 py-6 bg-brand-accent text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 relative group overflow-hidden">
            <span className="relative z-10">{cta || "Secure Access"}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
        
        {/* Decorative background grid with parallax */}
        <motion.div 
            style={{ y: yParallax, opacity: 0.1 }}
            className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #D4FF00 1px, transparent 1px), linear-gradient(to bottom, #D4FF00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 opacity-60" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -10, borderColor: 'rgba(212, 255, 0, 0.4)' }}
      className="bg-neutral-950/50 backdrop-blur-md border border-white/5 p-8 aspect-square flex flex-col justify-between group cursor-pointer transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-colors" />
      <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent mb-2">Partner // Node</div>
      <div className="space-y-6 relative z-10">
        <div className="w-16 h-[2px] bg-brand-accent scale-x-50 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        <h4 className="text-2xl font-bold tracking-tighter leading-tight uppercase italic group-hover:text-brand-accent transition-colors">
            {title || "Tech-Wear Logistics"}
        </h4>
        <p className="text-xs font-light opacity-50 italic leading-relaxed">{description || "Global shipping protocol optimized for high-value apparel."}</p>
      </div>
      <div className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/10 pb-2 w-fit group-hover:border-brand-accent transition-all duration-500">
        Uplink Protocol
      </div>
    </motion.div>
  );
};
