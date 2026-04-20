"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Terminal, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setIsLoading(true);
        // Simulate secure session creation
        // In a real app, this would be a server action setting a secure HttpOnly cookie
        document.cookie = "void_session=active; path=/; samesite=strict; secure";
        
        setTimeout(() => {
            setIsLoading(false);
            router.push('/checkout');
        }, 1500);
    };

    return (
        <div className="pt-40 pb-20 px-6 max-w-xl mx-auto min-h-screen">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-neutral-900 border border-white/5 p-12 rounded-sm space-y-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Shield size={80} />
                </div>

                <div className="space-y-2">
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent flex items-center gap-2">
                        <Terminal size={14} /> Security Protocol
                    </span>
                    <h1 className="text-4xl font-bold uppercase tracking-tighter italic">Identity Gateway</h1>
                    <p className="text-sm opacity-40 italic">Initialize your secure session for procurement.</p>
                </div>

                <div className="space-y-6 pt-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Entry Key</label>
                        <input 
                            type="password" 
                            defaultValue="************"
                            className="w-full bg-black/50 border border-white/10 px-6 py-4 text-xs font-bold outline-none focus:border-brand-accent transition-all italic"
                        />
                    </div>
                    
                    <button 
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="w-full h-16 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-colors disabled:opacity-50"
                    >
                        {isLoading ? "Synchronizing..." : "Initialize Session"} <ArrowRight size={16} />
                    </button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-accent/5 border border-brand-accent/10 rounded-sm">
                    <Lock size={14} className="text-brand-accent shrink-0" />
                    <p className="text-[9px] uppercase tracking-widest leading-loose font-bold opacity-60">
                        Node-to-node encryption active. Your identity is proxied through the Void layer.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
