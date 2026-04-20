import { Hero } from "@/components/layout/Hero";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/config/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AdUnit } from "@/components/ui/AdUnit";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* New Arrivals Section */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                Fresh from the Void
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
                New <br className="md:hidden" /> Arrivals
              </h2>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Shop All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {PRODUCTS.map((product) => (
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

      {/* Featured Collection Teaser */}
      <section className="relative h-[80vh] bg-black overflow-hidden flex items-center group">
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
          {/* Placeholder for a high-res lifestyle image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 px-6 md:px-24">
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 max-w-xl">
            VOL 01: <br /> DIGITAL <br /> DYSTOPIA
          </h3>
          <Link href="/collections/vol-01" className="inline-block border-b-2 border-white pb-2 text-sm font-bold text-white tracking-widest uppercase hover:text-brand-accent hover:border-brand-accent transition-all">
            See the Story
          </Link>
        </div>
      </section>

      {/* Polished Ad Placements / Promotions */}
      <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <AdUnit type="banner" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AdUnit type="sidebar" title="Fabric Science" description="Deep dive into our 450GSM technical fleece engineering." />
            <AdUnit type="sidebar" title="Global Shipping" description="Expedited 3-day delivery to major international hubs." />
            <AdUnit type="sidebar" title="Void Collective" description="Join 5,000+ members in our exclusive digital discord." />
          </div>
        </div>
      </section>

      {/* SEO/Brand Roots Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-900/10 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
              Heritage // Tech
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Designed in Tamil Nadu for the <span className="italic text-brand-accent">Digital Frontier</span>
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed italic font-light">
              Voidstitch is rooted in the rich textile heritage of Tamil Nadu. From the looms of Coimbatore to the streets of Chennai, we leverage world-class craftsmanship to create premium heavyweight streetwear. Our 300GSM-450GSM organic cotton is engineered for durability, comfort, and a perfect oversized silhouette.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-2xl font-bold tracking-tighter uppercase mb-1">300-450</span>
                <span className="text-[8px] font-bold tracking-widest uppercase opacity-40">Heavyweight GSM</span>
              </div>
              <div>
                <span className="block text-2xl font-bold tracking-tighter uppercase mb-1">100%</span>
                <span className="text-[8px] font-bold tracking-widest uppercase opacity-40">Organic Cotton</span>
              </div>
            </div>
          </div>
          <div className="aspect-square relative opacity-20 hover:opacity-50 transition-opacity duration-1000 grayscale">
            {/* An abstract representation of quality/location */}
            <div className="absolute inset-0 border-2 border-brand-accent/20 flex items-center justify-center p-12">
              <div className="text-[8px] font-mono tracking-tighter leading-none opacity-40 overflow-hidden break-all">
                COIMBATORE_COTTON_UNIT_01_DATA_STREAM_CHENNAI_STREET_LOGS_VOID_63920_HEAVYWEIGHT_FABRIC_SCIENCE_TAMIL_NADU_ORIGIN_AUTHENTIC_SIGNAL_GEN_Z_AESTHETIC_MINIMALIST_VOIDSTITCH_ARCHIVE_VOL_01_PROTOTYPE
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black italic tracking-tighter opacity-10 uppercase">
              Void Origins
            </div>
          </div>
        </div>
      </section>

      {/* Footer Teaser / Newsletter */}
      <section className="py-24 px-6 text-center bg-background border-t border-foreground/5">
        <div className="max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-brand-accent">
            Secure Your Access
          </h4>
          <p className="text-foreground/60 mb-8 font-light italic">
            Join the digital collective. Get notified about new drops, fabric technical guides, and community events in Tamil Nadu.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="COLLECTIVE@VOIDSTITCH.IN"
              className="flex-1 bg-transparent border-b-2 border-foreground/10 py-3 text-sm focus:border-brand-accent outline-none transition-colors italic uppercase tracking-widest"
            />
            <button className="text-sm font-bold tracking-widest uppercase hover:text-brand-accent transition-colors">
              Request Entry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
