"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/config/products";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const CATEGORIES = ["ALL", "TOPS", "BOTTOMS", "OUTERWEAR", "ACCESSORIES"];

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredProducts = activeCategory === "ALL"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase italic mb-4">
                        The Catalog
                    </h1>
                    <p className="text-foreground/40 text-sm font-medium tracking-widest uppercase italic">
                        Vol 01: Digital Dystopia // {filteredProducts.length} Pieces
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                        <SlidersHorizontal size={14} /> Filters
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                        Sort by <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-8 mb-16 border-b border-foreground/5 pb-6 overflow-x-auto no-scrollbar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${activeCategory === cat ? "text-brand-accent" : "text-foreground/40 hover:text-foreground"
                            }`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <div className="absolute -bottom-6 left-0 right-0 h-[2px] bg-brand-accent" />
                        )}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="py-24 text-center">
                    <p className="text-sm font-bold tracking-widest uppercase opacity-40 italic">
                        No pieces found in this sector.
                    </p>
                </div>
            )}
        </div>
    );
}
