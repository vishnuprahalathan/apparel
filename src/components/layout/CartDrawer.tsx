"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/store/useCart";
import Link from "next/link";

export function CartDrawer() {
    const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-background border-l border-foreground/5 shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-foreground/5">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} />
                                <h2 className="text-sm font-bold tracking-widest uppercase">Your Bag ({items.length})</h2>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center gap-6 opacity-40">
                                    <ShoppingBag size={48} strokeWidth={1} />
                                    <p className="text-sm font-bold tracking-widest uppercase italic">Your bag is empty</p>
                                    <button
                                        onClick={closeCart}
                                        className="text-[10px] font-bold underline uppercase tracking-widest hover:text-brand-accent transition-colors"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="relative w-24 aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 rounded-sm overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start mb-1">
                                                    <h3 className="text-xs font-bold uppercase tracking-tight max-w-[150px]">
                                                        {item.name}
                                                    </h3>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-1 hover:text-brand-accent transition-colors opacity-40 group-hover:opacity-100"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-3">
                                                    {item.category}
                                                </p>
                                                <p className="text-xs font-medium">₹{item.price.toLocaleString()}</p>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-foreground/10 h-8">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-8 flex items-center justify-center hover:bg-foreground/5"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-8 text-[10px] font-bold text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 flex items-center justify-center hover:bg-foreground/5"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-foreground/5 space-y-6">
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold tracking-widest uppercase opacity-60">Subtotal</span>
                                    <span className="font-bold italic">₹{items.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</span>
                                </div>

                                <p className="text-[10px] italic opacity-40">
                                    Shipping and taxes are calculated at checkout. Free shipping on Vol 01 orders.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/checkout"
                                        onClick={closeCart}
                                        className="w-full h-14 bg-foreground text-background font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center hover:bg-brand-accent transition-colors"
                                    >
                                        Proceed to Checkout
                                    </Link>
                                    <button
                                        onClick={closeCart}
                                        className="w-full h-14 border border-foreground/10 font-bold tracking-[0.2em] uppercase text-xs hover:bg-foreground/5 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
