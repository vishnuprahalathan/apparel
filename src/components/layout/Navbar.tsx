"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/useCart";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
    { name: "Shop All", href: "/shop" },
    { name: "Fabric Science", href: "/fabric-science" },
    { name: "Movement", href: "/movement" },
    { name: "Lookbook", href: "/lookbook" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openCart, items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 py-4",
                isScrolled ? "glass py-3 border-b border-foreground/5" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Mobile Menu & Desktop Links */}
                <div className="flex items-center gap-8">
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group py-2"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors group-hover:text-brand-accent">
                                    {link.name}
                                </span>
                                <motion.div 
                                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <div className="absolute -inset-x-2 -inset-y-1 bg-brand-accent/0 group-hover:bg-brand-accent/5 rounded-sm transition-colors duration-300" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Center: Brand Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold tracking-tighter"
                    >
                        {BRAND.name}
                    </motion.span>
                </Link>

                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="p-2 hover:text-brand-accent transition-colors hidden sm:block">
                        <Search size={20} />
                    </button>
                    <Link href="/account" className="p-2 hover:text-brand-accent transition-colors">
                        <User size={20} />
                    </Link>
                    <button
                        onClick={openCart}
                        className="p-2 hover:text-brand-accent transition-colors relative"
                    >
                        <ShoppingBag size={20} />
                        {items.length > 0 && (
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-accent rounded-full border-2 border-background" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-bold">{BRAND.name}</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-bold tracking-tight hover:text-brand-accent"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-12 border-t border-foreground/10 flex gap-6">
                            <Link href="/about" className="text-sm opacity-60">About</Link>
                            <Link href="/contact" className="text-sm opacity-60">Contact</Link>
                            <Link href="/privacy" className="text-sm opacity-60">Privacy</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
