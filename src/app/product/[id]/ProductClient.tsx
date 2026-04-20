"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShoppingBag, Heart, Shield, RefreshCcw, Truck } from "lucide-react";
import { Product } from "@/config/products";
import { ThreeDViewer } from "@/components/ui/ThreeDViewer";
import { TransparencyModule } from "@/components/ui/TransparencyModule";
import { StockStatus } from "@/components/ui/StockStatus";
import { FabricTextureViewer } from "@/components/ui/FabricTextureViewer";
import { useCart } from "@/store/useCart";

interface ProductClientProps {
    product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
    const { addItem, openCart } = useCart();

    const handleAddToCart = () => {
        addItem(product);
        openCart();
    };

    return (
        <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-12 opacity-40 text-[10px] font-bold tracking-widest uppercase italic">
                <Link href="/">Home</Link>
                <ChevronRight size={10} />
                <Link href="/shop">Shop</Link>
                <ChevronRight size={10} />
                <span className="text-foreground">{product.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Left: Media Column */}
                <div className="flex flex-col gap-6">
                    {/* Main Visual: 3D Viewer */}
                    <div className="h-[500px] md:h-[600px] w-full">
                        <ThreeDViewer />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                            <Image
                                src={product.image}
                                alt={`${product.name} detail`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                        <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-8 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800">
                            <p className="text-[10px] text-center font-bold tracking-widest uppercase opacity-40 italic">
                                Digital Matrix <br /> Mesh Pattern
                            </p>
                        </div>
                    </div>

                    <FabricTextureViewer gsm={product.gsm} material={product.material} />
                </div>

                {/* Right: Info Column */}
                <div className="flex flex-col gap-8 lg:sticky lg:top-28">
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                            {product.category}{' // VOL 01'}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium tracking-tight">
                            ₹ {product.price.toLocaleString()}
                        </p>
                    </div>

                    <p className="text-foreground/70 leading-relaxed font-light italic">
                        {product.description}
                    </p>

                    <div className="space-y-12">
                        {/* Global Inventory Status */}
                        <StockStatus count={product.inventory.global} />

                        {/* Color Selector */}
                        <div>
                            <span className="text-[10px] font-bold tracking-widest uppercase mb-4 block opacity-60">Color</span>
                            <div className="flex gap-4">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        className="group flex flex-col items-center gap-2"
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full border border-foreground/10 p-1 flex items-center justify-center transition-transform hover:scale-110"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <span className="text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Select Size</span>
                                <button className="text-[10px] font-bold underline uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Size Guide</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className="min-w-[56px] h-12 flex items-center justify-center border border-foreground/10 text-xs font-bold uppercase transition-all hover:border-brand-accent hover:text-brand-accent"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full h-16 bg-foreground text-background font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 transition-transform active:scale-95 group overflow-hidden relative"
                            >
                                <span className="relative z-10">Add to BAG</span>
                                <ShoppingBag size={16} className="relative z-10" />
                                <div className="absolute inset-0 bg-brand-accent transform -translate-x-full transition-transform group-hover:translate-x-0" />
                            </button>
                            <button className="w-full h-16 border border-foreground/10 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors hover:bg-foreground/5">
                                Save to Wishlist <Heart size={16} />
                            </button>
                        </div>

                        {/* Details & Specs */}
                        <div className="space-y-6 pt-12 border-t border-foreground/5">
                            <div className="grid grid-cols-2 gap-6">
                                {product.details.map((detail, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <Shield size={14} className="opacity-40 mt-0.5" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                            {detail}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div className="space-y-4 pt-12 border-t border-foreground/5 italic font-light opacity-60 text-xs">
                            <div className="flex items-center gap-3">
                                <Truck size={16} />
                                <span>Complimentary Shipping on all Vol 01 orders in India.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <RefreshCcw size={16} />
                                <span>30-Day Digital Exchange & Returns Policy.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transparency Module */}
            <TransparencyModule
                gsm={product.gsm}
                material={product.material}
                origin={product.origin}
                washTest={product.washTest}
            />
        </div>
    );
}
