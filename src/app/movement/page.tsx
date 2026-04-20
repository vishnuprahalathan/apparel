import React from "react";
import { Metadata } from "next";
import { Users, Instagram, MessageSquare, Share2, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Movement & Community | VOIDSTITCH Collective",
    description: "Join the Voidstitch movement. Connect with the digital generation in Tamil Nadu, share your fits, and gain access to exclusive streetwear drops.",
    keywords: ["streetwear community India", "Voidstitch Discord", "Tamil Nadu fashion collective", "Gen Z streetwear India"],
};

export default function MovementPage() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <header className="mb-20 text-center">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent mb-4 block">
                    The Human Element // Movement
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8 italic">
                    The <br /> Collective
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light italic max-w-2xl mx-auto">
                    Voidstitch isn&apos;t just a label; it&apos;s a decentralized node for creators, hackers, and street-style architects across Tamil Nadu and beyond.
                </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Community Pillar 1: Discord */}
                <div className="p-10 bg-neutral-900 border border-white/5 rounded-sm flex flex-col items-center text-center">
                    <MessageSquare size={40} className="text-brand-accent mb-6" />
                    <h3 className="text-2xl font-bold uppercase mb-4">The Discord Node</h3>
                    <p className="text-sm opacity-50 italic mb-8">
                        Real-time coordination, drop early-access, and design feedback loops. Join 5,000+ members building the future.
                    </p>
                    <button className="w-full py-4 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                        Join Server
                    </button>
                </div>

                {/* Community Pillar 2: Instagram */}
                <div className="p-10 bg-neutral-900 border border-white/5 rounded-sm flex flex-col items-center text-center">
                    <Instagram size={40} className="text-brand-accent mb-6" />
                    <h3 className="text-2xl font-bold uppercase mb-4">Visual Archive</h3>
                    <p className="text-sm opacity-50 italic mb-8">
                        Our digital lookbook curated by you. Tag <span className="text-white">#VOIDSTRESS</span> for a chance to be featured in the next volume.
                    </p>
                    <button className="w-full py-4 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                        View Archive
                    </button>
                </div>

                {/* Community Pillar 3: Physical */}
                <div className="p-10 bg-neutral-900 border border-white/5 rounded-sm flex flex-col items-center text-center">
                    <Users size={40} className="text-brand-accent mb-6" />
                    <h3 className="text-2xl font-bold uppercase mb-4">Ground Ops</h3>
                    <p className="text-sm opacity-50 italic mb-8">
                        Secret pop-ups and street meetups in Chennai, Coimbatore, and Madurai. Stay tuned for the next coordinate.
                    </p>
                    <button className="w-full py-4 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                        Get Coordinates
                    </button>
                </div>
            </div>

            {/* UGC Section Placeholder */}
            <section className="mt-32">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                            Citizen Submissions
                        </span>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter">Field Reports</h2>
                    </div>
                    <Share2 size={24} className="opacity-20" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="aspect-square bg-neutral-900 border border-white/5 relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-40 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-bold tracking-widest text-white uppercase bg-black/50 px-2 py-1">@user_node_{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Loyalty/Rewards Section */}
            <section className="mt-32 p-12 bg-white text-black">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-6">
                        <Award size={32} />
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Void Credits</h2>
                    </div>
                    <p className="text-lg font-bold italic mb-8">
                        Our decentralized loyalty system. Earn bridgeable credits for community participation, referrals, and UGC submissions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-6 py-3 border-2 border-black font-black uppercase text-xs tracking-widest">Login to Dashboard</div>
                        <div className="px-6 py-3 bg-black text-white font-black uppercase text-xs tracking-widest">Learn More</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
