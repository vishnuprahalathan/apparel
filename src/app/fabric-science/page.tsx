import React from "react";
import { Metadata } from "next";
import { Shield, Droplets, Wind, Scale, Zap, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "Fabric Science & GSM Guide | Premium Heavyweight Cotton | VOIDSTITCH",
    description: "Learn about the technical specifications of our fabrics. Understand GSM, cotton quality, and why Voidstitch uses 300-450GSM for premium streetwear in India.",
    keywords: ["what is GSM in t-shirts", "300GSM vs 450GSM", "organic cotton quality", "heavyweight streetwear fabric India", "durable cotton clothing"],
};

// FAQ Schema for SEO
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the best GSM for oversized t-shirts in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For oversized t-shirts in the Indian climate, 300GSM organic cotton is considered the gold standard. It provides enough weight to maintain a boxy silhouette without being too heavy for humid coastal cities like Chennai or Mumbai."
            }
        },
        {
            "@type": "Question",
            "name": "Does 450GSM fabric shrink after washing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our 450GSM fabrics are pre-shrunk and bio-washed during the engineering process. This ensures that the garments maintain their structural integrity and size even after 50+ industrial wash cycles."
            }
        },
        {
            "@type": "Question",
            "name": "Is organic cotton better for premium streetwear?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, organic cotton offers superior fiber length and strength compared to conventional cotton. This results in a softer hand-feel, better breathability, and a fabric that ages gracefully rather than breaking down."
            }
        }
    ]
};

export default function FabricSciencePage() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <header className="mb-20">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent mb-4 block">
                    Technical Specifications // V.01
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 italic">
                    Fabric <br /> Science
                </h1>
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-light italic max-w-3xl">
                    Engineering apparel for the digital age requires more than just design. It requires a deep understanding of molecular integrity and structural composition.
                </p>
            </header>

            <div className="grid gap-24">
                {/* GSM Section */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <Scale className="text-brand-accent" size={32} />
                        <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">The GSM Matrix</h2>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg opacity-80 leading-relaxed mb-6 italic">
                            GSM stands for Grams per Square Meter. It is the metric measurement of fabric weight. In the world of premium streetwear, weight equals architecture.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm">
                                <h3 className="text-xl font-bold uppercase mb-4 text-brand-accent">300 GSM // The Standard</h3>
                                <p className="text-sm opacity-60 leading-relaxed mb-4">
                                    Our base layer for oversized tees. Providing enough structure to maintain the silhouette while allowing for breathability in humid climates like Chennai and Mumbai.
                                </p>
                                <ul className="text-[10px] uppercase tracking-widest space-y-2 font-bold opacity-40">
                                    <li>- High Structural Integrity</li>
                                    <li>- Zero Sheerness</li>
                                    <li>- Superior Drape</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm">
                                <h3 className="text-xl font-bold uppercase mb-4 text-brand-accent">450 GSM // The Fortress</h3>
                                <p className="text-sm opacity-60 leading-relaxed mb-4">
                                    Reserved for our premium hoodies and sweatshirts. A heavyweight fleece that feels like armor, providing warmth and a rigid, high-fashion silhouette.
                                </p>
                                <ul className="text-[10px] uppercase tracking-widest space-y-2 font-bold opacity-40">
                                    <li>- Maximum Thermal Retention</li>
                                    <li>- Rigid Hood Architecture</li>
                                    <li>- Lifetime Durability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sourcing Section */}
                <section className="bg-neutral-900/50 p-12 border border-brand-accent/10 rounded-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <Shield className="text-brand-accent" size={32} />
                        <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">Origin & Ethics</h2>
                    </div>
                    <p className="text-lg opacity-80 leading-relaxed italic mb-8">
                        Every thread is sourced from the textile heartland of <span className="text-white font-bold">Tamil Nadu, India</span>. We partner with mills in Coimbatore and Tiruppur that utilize organic cotton and sustainable dyeing processes.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard icon={<Droplets size={16} />} label="Water" value="-40% usage" />
                        <StatCard icon={<Wind size={16} />} label="Air" value="Zero Toxic" />
                        <StatCard icon={<Zap size={16} />} label="Energy" value="Solar Powered" />
                        <StatCard icon={<Info size={16} />} label="Trace" value="100% Digital" />
                    </div>
                </section>

                {/* Technical FAQ (SEO Content) */}
                <section>
                    <h2 className="text-3xl font-bold uppercase tracking-tighter text-white mb-12">Technical Intelligence (FAQ)</h2>
                    <div className="space-y-12 max-w-3xl">
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 italic">Q: What is the optimal GSM for the Indian climate?</h3>
                            <p className="text-sm opacity-60 leading-relaxed border-l border-white/10 pl-6">
                                For most of India, particularly metropolitan hubs with high humidity, we recommend <span className="text-white font-bold">300GSM</span>. It offers the heavy &quot;streetwear fit&quot; without compromising thermal comfort. In cooler regions or during the winter season, the <span className="text-white font-bold">450GSM</span> fleece provides the necessary insulation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 italic">Q: How do you prevent pilling and color fade?</h3>
                            <p className="text-sm opacity-60 leading-relaxed border-l border-white/10 pl-6">
                                We utilize a specialized <span className="text-white font-bold">Bio-Washing</span> process that uses natural enzymes to remove protruding fibers. Combined with low-impact reactive dyes, this ensures that the fabric&apos;s surface remains smooth and the color depth remains consistent for over 50+ wash cycles.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 italic">Q: Is Voidstitch apparel sustainable?</h3>
                            <p className="text-sm opacity-60 leading-relaxed border-l border-white/10 pl-6">
                                Sustainability is integrated into our architecture. By using local Tamil Nadu cotton, we minimize the carbon footprint of logistics. Our 100% organic cotton is biodegradable, and our manufacturing partners utilize solar energy and zero-liquid-discharge (ZLD) water treatment systems.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Durability Guide */}
                <section>
                    <h2 className="text-3xl font-bold uppercase tracking-tighter text-white mb-8">Engineering Longevity</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-brand-accent">50+ Wash Cycles</h4>
                            <p className="text-sm opacity-50 italic">Tested against warping, shrinkage, and pilling for over 50 industrial wash cycles.</p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-brand-accent">Bio-Washed Finish</h4>
                            <p className="text-sm opacity-50 italic">Enzymatic treatment that removes surface fuzz and creates an ultra-smooth hand feel.</p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-brand-accent">Pre-Shrunk Grain</h4>
                            <p className="text-sm opacity-50 italic">Compacted fibers ensure that the fit you buy is the fit you keep, forever.</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="mt-24 pt-24 border-t border-white/5 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-8">
                    Knowledge is Power // Wear the Theory
                </p>
                <a href="/shop" className="inline-block px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors">
                    Access the Archive
                </a>
            </footer>
        </div>
    );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="text-brand-accent mb-2">{icon}</div>
            <span className="text-[8px] font-bold uppercase tracking-widest opacity-40">{label}</span>
            <span className="text-xs font-bold uppercase">{value}</span>
        </div>
    );
}
