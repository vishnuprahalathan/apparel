import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/config/locations";
import { PRODUCTS } from "@/config/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { StockStatus } from "@/components/ui/StockStatus";
import { MapPin, ArrowRight, Shield, Zap } from "lucide-react";

interface Props {
    params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const location = LOCATIONS.find((l) => l.slug === city.toLowerCase());

    if (!location) return {};

    const title = `Premium Streetwear in ${location.cityName} | Oversized T-Shirts & Hoodies | VOIDSTITCH`;
    const description = `Discover the best premium oversized t-shirts and heavyweight hoodies in ${location.cityName}. ${location.tagline}. Rooted in Tamil Nadu heritage.`;

    return {
        title,
        description,
        keywords: location.seoKeywords,
        openGraph: {
            title,
            description,
            images: [{ url: location.heroImage }],
        },
    };
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const location = LOCATIONS.find((l) => l.slug === city.toLowerCase());

    if (!location) return notFound();

    // Local Business Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `VOIDSTITCH ${location.cityName}`,
        "image": location.heroImage,
        "description": location.description,
        "url": `https://voidstitch.in/location/${location.slug}`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": location.cityName,
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
        },
        "brand": {
            "@type": "Brand",
            "name": "VOIDSTITCH"
        },
        "priceRange": "₹₹"
    };

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Local Hero Section */}
            <section className="relative h-[70vh] flex items-center px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src={location.heroImage}
                        alt={`${location.cityName} cityscape`}
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-brand-accent animate-pulse" size={20} />
                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent">
                            Void Node // {location.cityName}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 italic">
                        {location.cityName} <br />
                        <span className="text-transparent border-t-2 border-b-2 border-white/20 px-2">Edition</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-2xl leading-relaxed mb-8">
                        {location.tagline}. {location.description}
                    </p>

                    <div className="max-w-xs">
                        <StockStatus
                            count={PRODUCTS.reduce((acc, p) => acc + (p.inventory[location.slug as keyof typeof p.inventory] || 0), 0)}
                            locationName={location.cityName}
                        />
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                    <div className="w-[1px] h-12 bg-white" />
                </div>
            </section>

            {/* Local Context / Trust Section */}
            <section className="py-24 px-6 md:px-12 bg-neutral-900/10 border-b border-foreground/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6">Why {location.cityName} chooses Voidstitch</h2>
                        <p className="text-foreground/70 mb-8 italic leading-relaxed">
                            {location.localContext}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-black/20 border border-white/5">
                                <Shield className="text-brand-accent mb-4" size={24} />
                                <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Climate Ready</h4>
                                <p className="text-[10px] opacity-40 uppercase">Optimized for specific local weather conditions.</p>
                            </div>
                            <div className="p-6 bg-black/20 border border-white/5">
                                <Zap className="text-brand-accent mb-4" size={24} />
                                <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Fast Transit</h4>
                                <p className="text-[10px] opacity-40 uppercase">Express distribution within {location.cityName} nodes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video bg-neutral-900 border border-white/5 rounded-sm overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000">
                        <div className="text-[10px] font-mono opacity-20 text-center uppercase tracking-widest p-12">
                            [DATA_SYNC_SUCCESSFUL] <br />
                            ENCRYPTED_TEXTILE_LOGS_NODE_{location.cityName.toUpperCase()} <br />
                            STREET_AUTHENTICITY_VERIFIED <br />
                            VOI_DISTITCH_ARCHIVE_VOL_01
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Product Selection */}
            <section className="py-24 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16 px-2">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-2 block">Available in {location.cityName}</span>
                            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Essential Archive</h2>
                        </div>
                        <Link href="/shop" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent flex items-center gap-2">
                            Explore All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {PRODUCTS.slice(0, 4).map((product) => (
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
                </div>
            </section>

            {/* Location CTA */}
            <section className="py-24 px-6 text-center border-t border-white/5">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Join the {location.cityName} Collective</h3>
                    <p className="text-foreground/50 mb-8 italic">Be the first to know about secret drops and community pop-ups in {location.cityName}.</p>
                    <Link href="/movement" className="inline-block px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors">
                        Register Node
                    </Link>
                </div>
            </section>
        </div>
    );
}
