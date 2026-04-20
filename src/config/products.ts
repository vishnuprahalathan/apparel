export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    details: string[];
    sizes: string[];
    colors: { name: string; hex: string }[];
    // SEO & Transparency Fields
    gsm: number;
    material: string;
    origin: string;
    washTest: string;
    inventory: {
        chennai: number;
        coimbatore: number;
        madurai: number;
        global: number;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: "vs-001",
        name: "CYBER-MESH OVERSIZED TEE",
        price: 3499,
        category: "TOPS",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
        description: "An oversized silhouette featuring breathable tech-mesh panels and high-density 3D branding.",
        details: ["100% 300GSM Cotton", "Tech-mesh side panels", "3D Puff print logo", "Relaxed fit"],
        sizes: ["S", "M", "L", "XL"],
        colors: [{ name: "Onyx", hex: "#000000" }, { name: "Slate", hex: "#2F2F2F" }],
        gsm: 300,
        material: "Organic Cotton",
        origin: "Coimbatore, Tamil Nadu",
        washTest: "50+ Washes Certified",
        inventory: {
            chennai: 12,
            coimbatore: 45,
            madurai: 8,
            global: 120
        }
    },
    {
        id: "vs-002",
        name: "VOID-CARGO PANTS V1",
        price: 5999,
        category: "BOTTOMS",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
        description: "Multi-pocket modular cargo pants with water-resistant finish and adjustable leg openings.",
        details: ["Ripstop Nylon blend", "6 Functional pockets", "Heavy-duty hardware", "DWR Water-resistant"],
        sizes: ["30", "32", "34", "36"],
        colors: [{ name: "Charcoal", hex: "#1A1A1A" }, { name: "Olive", hex: "#3D4132" }],
        gsm: 280,
        material: "Nylon Ripstop",
        origin: "Chennai, Tamil Nadu",
        washTest: "High Durability Tested",
        inventory: {
            chennai: 5,
            coimbatore: 12,
            madurai: 3,
            global: 50
        }
    },
    {
        id: "vs-003",
        name: "NEON-SIGNAL HOODIE",
        price: 4999,
        category: "OUTERWEAR",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
        description: "Heavyweight fleece hoodie with reflective signal graphics and a structured hood design.",
        details: ["450GSM Organic Cotton Fleece", "3M Reflective graphics", "Structured hood", "Ribbed cuffs"],
        sizes: ["M", "L", "XL"],
        colors: [{ name: "Black", hex: "#000000" }, { name: "Voltage", hex: "#D4FF00" }],
        gsm: 450,
        material: "Organic Cotton Fleece",
        origin: "Tiruppur, Tamil Nadu",
        washTest: "Shrink-Resistant Certified",
        inventory: {
            chennai: 20,
            coimbatore: 15,
            madurai: 10,
            global: 80
        }
    },
    {
        id: "vs-004",
        name: "STITCH-ARMOR VEST",
        price: 7499,
        category: "ACCESSORIES",
        image: "https://images.unsplash.com/photo-1592186453271-ad6ec98425d6?auto=format&fit=crop&q=80&w=800",
        description: "Technical utility vest with MOLLE system and internal mesh lining for layering.",
        details: ["Cordura 1000D fabric", "Magnetic buckles", "Internal stash pocket", "Adjustable straps"],
        sizes: ["One Size"],
        colors: [{ name: "Night", hex: "#0A0A0A" }],
        gsm: 1000, // Cordura denier roughly mapped to weight
        material: "Cordura Nylon",
        origin: "Chennai, Tamil Nadu",
        washTest: "Lifetime Durability",
        inventory: {
            chennai: 2,
            coimbatore: 5,
            madurai: 1,
            global: 25
        }
    }
];

