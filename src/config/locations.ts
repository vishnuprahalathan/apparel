export interface LocationData {
    id: string;
    cityName: string;
    slug: string;
    tagline: string;
    description: string;
    heroImage: string;
    localContext: string;
    seoKeywords: string[];
}

export const LOCATIONS: LocationData[] = [
    {
        id: "loc-001",
        cityName: "Chennai",
        slug: "chennai",
        tagline: "High-Performance Comfort for the Coastal Heat",
        description: "Voidstitch Chennai node represents the intersection of coastal humidity and premium heavyweight streetwear. Engineered with 300GSM organic cotton, our oversized silhouettes provide the ultimate climate-ready comfort for the digital nomad.",
        heroImage: "/locations/chennai.png",
        localContext: "From the underground creative spaces of Nungambakkam to the bustling streets of T-Nagar, Voidstitch is the armor of choice for Chennai's digital generation. #QuietLuxuryStreetwear #ChennaiStyle",
        seoKeywords: ["premium comfort clothing Chennai", "heavyweight streetwear India", "oversized t-shirts Chennai", "sustainable fashion Tamil Nadu", "Quiet Luxury Streetwear India", "Global Basics", "300GSM Cotton Tees"]
    },
    {
        id: "loc-002",
        cityName: "Coimbatore",
        slug: "coimbatore",
        tagline: "The Global Textile Integrity Node",
        description: "Rooted in the Manchester of South India, Voidstitch Coimbatore leverages legendary textile craftsmanship to deliver globally competitive premium basics. We merge architectural strength with organic integrity.",
        heroImage: "/locations/coimbatore.png",
        localContext: "Crafted in the heart of Coimbatore's textile hubs, our fabric undergoes rigorous 'Comfort Lab' testing to ensure it meets global standards of durability and hand-feel. #TextileScience #PremiumBasics",
        seoKeywords: ["premium clothing Coimbatore", "textile quality India", "organic cotton tees Coimbatore", "international streetwear standards", "Heavyweight Basics Global", "Coimbatore Textile Heritage"]
    },
    {
        id: "loc-003",
        cityName: "Madurai",
        slug: "madurai",
        tagline: "Ancient Strength, Futuristic Silhouette",
        description: "Madurai's cultural intensity meets the minimalist void. Our collection in the Temple City represents a fusion of ancient resilience and modern digital comfort architecture.",
        heroImage: "/locations/madurai.png",
        localContext: "Designed for the vibrant energy of Madurai, our apparel stands out in the crowd while providing the quiet confidence of premium comfort and technical superiority. #MaduraiFashion #VoidstitchNode",
        seoKeywords: ["Madurai fashion", "streetwear Madurai", "oversized shirts Madurai", "Tamil Nadu international clothing", "Digital Nomad Apparel India", "Premium Comfort Madurai"]
    }
];
