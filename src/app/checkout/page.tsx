"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, ShoppingBag, CreditCard, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/store/useCart";

export default function CheckoutPage() {
    const { items, total } = useCart();
    const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment

    if (items.length === 0) {
        return (
            <div className="pt-40 pb-20 px-6 text-center">
                <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8 italic">Archive is Empty</h1>
                <Link href="/shop" className="text-sm font-bold tracking-widest uppercase text-brand-accent hover:underline">
                    Initialize Procurement
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
                <div>
                    <Link href="/shop" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-8">
                        <ArrowLeft size={10} /> Back to Archive
                    </Link>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent mb-4 block">
                        Procurement Protocol // V.01
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
                        Digital <br /> Checkout
                    </h1>
                </div>
                {/* Step Indicator */}
                <div className="flex gap-12">
                    <StepIndicator active={step >= 1} label="Identity" num="01" />
                    <StepIndicator active={step >= 2} label="Logistic" num="02" />
                    <StepIndicator active={step >= 3} label="Terminal" num="03" />
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24 items-start">
                {/* Left: Forms */}
                <div className="space-y-16">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-12"
                            >
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-bold uppercase tracking-tighter italic border-l-2 border-brand-accent pl-4">Identification</h2>
                                    <div className="grid gap-6">
                                        <CheckoutInput label="Email Address" placeholder="NAME@VOID.STITCH" />
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <CheckoutInput label="First Name" placeholder="FIRST" />
                                            <CheckoutInput label="Last Name" placeholder="LAST" />
                                        </div>
                                    </div>
                                </section>
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full h-16 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-colors"
                                >
                                    Proceed to Logistics <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-12"
                            >
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-bold uppercase tracking-tighter italic border-l-2 border-brand-accent pl-4">Logistic Node</h2>
                                    <div className="grid gap-6">
                                        <CheckoutInput label="Shipping Address" placeholder="STREET / BUILDING" />
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <CheckoutInput label="City" placeholder="CHENNAI / MUMBAI / ETC" />
                                            <CheckoutInput label="Postal Code" placeholder="600001" />
                                        </div>
                                        <CheckoutInput label="Phone Number" placeholder="+91 00000 00000" />
                                    </div>
                                </section>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="h-16 px-8 border border-white/10 font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-white/5 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="flex-1 h-16 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-colors"
                                    >
                                        Finalize Terminal <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-12"
                            >
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-bold uppercase tracking-tighter italic border-l-2 border-brand-accent pl-4">Secure Payment</h2>
                                    <div className="grid gap-6">
                                        <CheckoutInput label="Card Number" placeholder="XXXX XXXX XXXX XXXX" icon={<CreditCard size={16} className="opacity-40" />} />
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <CheckoutInput label="Expiry Date" placeholder="MM/YY" />
                                            <CheckoutInput label="CVV" placeholder="***" type="password" />
                                        </div>
                                    </div>
                                </section>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="h-16 px-8 border border-white/10 font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-white/5 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <Link
                                        href="/checkout/success"
                                        className="flex-1 h-16 bg-brand-accent text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:brightness-110 transition-all active:scale-95 text-center"
                                    >
                                        Complete Procurement // ₹{total.toLocaleString()} <Lock size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right: Summary Content */}
                <div className="lg:sticky lg:top-24">
                    <div className="p-10 bg-neutral-900 border border-white/5 rounded-sm space-y-12">
                        <header className="flex justify-between items-center pb-8 border-b border-white/5">
                            <h3 className="text-xl font-bold uppercase tracking-tighter italic">Order Archive</h3>
                            <ShoppingBag className="opacity-20" />
                        </header>

                        <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-6 items-center">
                                    <div className="w-16 h-20 relative grayscale bg-black border border-white/5">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover opacity-60"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest">{item.name}</h4>
                                        <p className="text-[10px] opacity-40 uppercase italic">Quantity: {item.quantity}</p>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-tight">₹{(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-8 border-t border-white/5">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                                <span>Subtotal</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                                <span>Logistic Freight</span>
                                <span className="text-brand-accent">COMPLIMENTARY</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold uppercase tracking-tighter pt-4">
                                <span>Total Archive Value</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-sm flex gap-4 items-center">
                            <Shield className="text-brand-accent" size={18} />
                            <p className="text-[9px] uppercase tracking-widest font-bold opacity-70">
                                SSL Encrypted Node-to-Node Secure Transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StepIndicator({ active, label, num }: { active: boolean, label: string, num: string }) {
    return (
        <div className={`flex flex-col gap-2 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-20'}`}>
            <span className="text-[10px] font-mono tracking-tighter text-brand-accent">{num}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
            <div className={`h-[1px] w-full bg-brand-accent transition-transform duration-700 origin-left scale-x-${active ? '100' : '0'}`} />
        </div>
    );
}

function CheckoutInput({ label, placeholder, type = "text", icon }: { label: string, placeholder: string, type?: string, icon?: React.ReactNode }) {
    return (
        <div className="space-y-3 group">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-focus-within:opacity-100 transition-opacity block">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-neutral-900/50 border border-white/5 px-6 py-4 text-xs font-bold tracking-tight uppercase outline-none focus:border-brand-accent transition-all italic placeholder:opacity-20"
                />
                {icon && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}
