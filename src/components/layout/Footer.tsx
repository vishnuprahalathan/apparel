"use client";

import React from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { Github, Instagram, Twitter, ExternalLink } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-24 px-6 md:px-12 border-t border-background/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="md:col-span-2 lg:col-span-1 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter uppercase italic">{BRAND.name}</h2>
                        <p className="text-xs font-light uppercase tracking-widest opacity-40 leading-relaxed max-w-xs">
                            {BRAND.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 border border-background/10 rounded-full hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                <Instagram size={16} />
                            </Link>
                            <Link href="#" className="p-2 border border-background/10 rounded-full hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                <Twitter size={16} />
                            </Link>
                            <Link href="#" className="p-2 border border-background/10 rounded-full hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                <Github size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Links: Shop */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-bold tracking-[.3em] uppercase opacity-40">Retail Sector</h3>
                        <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                            <Link href="/shop" className="hover:text-brand-accent transition-colors">Shop All</Link>
                            <Link href="/shop?category=new" className="hover:text-brand-accent transition-colors">New Drops</Link>
                            <Link href="/collections" className="hover:text-brand-accent transition-colors">Vault Collections</Link>
                            <Link href="/lookbook" className="hover:text-brand-accent transition-colors">Lookbook</Link>
                        </div>
                    </div>

                    {/* Links: Local Nodes */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-bold tracking-[.3em] uppercase opacity-40">Local Nodes</h3>
                        <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                            <Link href="/location/chennai" className="hover:text-brand-accent transition-colors">Chennai Node</Link>
                            <Link href="/location/coimbatore" className="hover:text-brand-accent transition-colors">Coimbatore Node</Link>
                            <Link href="/location/madurai" className="hover:text-brand-accent transition-colors">Madurai Node</Link>
                            <Link href="/movement" className="hover:text-brand-accent transition-colors">Request Node</Link>
                        </div>
                    </div>

                    {/* Links: Support */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-bold tracking-[.3em] uppercase opacity-40">Interface Support</h3>
                        <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                            <Link href="/about" className="hover:text-brand-accent transition-colors">The Origin</Link>
                            <Link href="/fabric-science" className="hover:text-brand-accent transition-colors">Fabric Science</Link>
                            <Link href="#" className="hover:text-brand-accent transition-colors">Size Protocol</Link>
                            <Link href="#" className="hover:text-brand-accent transition-colors">Digital Returns</Link>
                        </div>
                    </div>

                    {/* Links: Newsletter */}
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-[10px] font-bold tracking-[.3em] uppercase opacity-40">System Uplink</h3>
                        <div className="space-y-4">
                            <p className="text-[10px] uppercase font-light italic tracking-widest opacity-40 leading-relaxed">
                                Receive encrypted notifications for upcoming drops and secret collection access.
                            </p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="PROTOCOL@VOID.STITCH"
                                    className="w-full bg-transparent border-b border-background/20 py-3 text-xs outline-none focus:border-brand-accent transition-colors uppercase italic"
                                />
                                <button className="absolute right-0 bottom-3 opacity-40 group-focus-within:opacity-100 transition-opacity">
                                    <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-background/5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.4em] opacity-20">
                        &copy; 2026 VOIDSTITCH // ALL RIGHTS RESERVED // DESIGNED FOR THE SINGULARITY
                    </p>
                    <div className="flex gap-8 text-[8px] font-bold uppercase tracking-widest opacity-20">
                        <Link href="#" className="hover:opacity-100">Privacy Policy</Link>
                        <Link href="#" className="hover:opacity-100">Terms of Exchange</Link>
                        <Link href="#" className="hover:opacity-100">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
