"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Package, MapPin, ArrowRight, Share2, Download } from "lucide-react";
import Link from "next/link";

export default function OrderSuccessPage() {
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setOrderId(`VOID-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
        }, 0);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="space-y-16">
                {/* Status Header */}
                <header className="text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                        className="inline-flex items-center justify-center p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent mb-4"
                    >
                        <CheckCircle2 size={48} />
                    </motion.div>

                    <div className="space-y-2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-accent block"
                        >
                            Node Activation Successful
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic"
                        >
                            Procured.
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-center gap-4 text-xs font-mono opacity-40 uppercase tracking-widest"
                    >
                        <span>Archive_ID: {orderId}</span>
                        <div className="w-[1px] h-3 bg-white/20" />
                        <span>Timestamp: {new Date().toISOString().split('T')[0]}</span>
                    </motion.div>
                </header>

                {/* Logistics Tracking Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-8 md:p-12 bg-neutral-900 border border-white/5 rounded-sm space-y-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Package size={120} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4">Tactical Status</h3>
                                <div className="flex items-center gap-4 text-brand-accent">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                                    <p className="text-sm font-bold uppercase tracking-tight italic">Awaiting Dispatch from Central Node</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Logistic Details</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-medium uppercase tracking-tighter italic">
                                        <span className="opacity-60">Transit Protocol</span>
                                        <span>Express Node-to-Node</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-medium uppercase tracking-tighter italic">
                                        <span className="opacity-60">Estimated Uplink</span>
                                        <span>48 - 72 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4">Destination</h3>
                                <div className="flex gap-4">
                                    <MapPin size={24} className="text-white opacity-20 shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-tight italic">Verified Regional Hub</p>
                                        <p className="text-[10px] opacity-40 uppercase mt-1">Shipping coordinates locked to profile address</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button className="flex-1 h-12 border border-white/10 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                                    <Download size={14} /> Download Ledger
                                </button>
                                <button className="flex-1 h-12 border border-white/10 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                                    <Share2 size={14} /> Share Archive
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "25%" }}
                            transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
                            className="absolute top-0 left-0 bottom-0 bg-brand-accent"
                        />
                    </div>
                </motion.div>

                {/* CTAs */}
                <footer className="text-center space-y-12 pb-20">
                    <div className="p-8 bg-brand-accent/5 border border-brand-accent/10 rounded-sm">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-accent">Join the Inner Circle</h4>
                        <p className="text-[10px] opacity-60 uppercase italic mb-6">Your procurement grants you early access to the upcoming 'Digital Ghost' drop.</p>
                        <Link href="/movement" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-accent transition-colors">
                            Enter the Movement <ArrowRight size={14} />
                        </Link>
                    </div>

                    <Link
                        href="/shop"
                        className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 hover:opacity-100 transition-opacity"
                    >
                        Return to the Void Archive
                    </Link>
                </footer>
            </div>
        </div>
    );
}
