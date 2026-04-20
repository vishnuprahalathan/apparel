"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Heart, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: Search },
    { name: "Bag", href: "/cart", icon: ShoppingBag },
    { name: "Wish", href: "/wishlist", icon: Heart },
    { name: "Me", href: "/account", icon: User },
];

export function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-foreground/5 safe-area-bottom">
            <div className="flex items-center justify-around h-16">
                {TABS.map((tab) => {
                    const isActive = pathname === tab.href;
                    const Icon = tab.icon;

                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 w-full h-full transition-colors",
                                isActive ? "text-brand-accent" : "text-foreground/60"
                            )}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium uppercase tracking-widest">{tab.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
