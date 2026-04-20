import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Footer } from "@/components/layout/Footer";


const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VOIDSTITCH | Premium Heavyweight Streetwear & Global Comfort",
    template: "%s | VOIDSTITCH"
  },
  description: "India's authority in premium comfort. Shop 300GSM-450GSM organic cotton oversized t-shirts and heavyweight hoodies. Engineered in Tamil Nadu for a global aesthetic.",
  keywords: [
    "premium comfort clothing India",
    "heavyweight streetwear global",
    "300GSM oversized t-shirts",
    "450GSM hoodies",
    "Quiet Luxury Streetwear",
    "Minimalist Techwear India",
    "Organic Cotton Streetwear Chennai",
    "Sustainable Premium Basics Global"
  ],
  authors: [{ name: "Voidstitch Architecture" }],
  creator: "Voidstitch",
  publisher: "Voidstitch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://voidstitch.in",
    languages: {
      "en-IN": "https://voidstitch.in",
      "en-US": "https://voidstitch.in",
      "x-default": "https://voidstitch.in",
    },
  },
  openGraph: {
    title: "VOIDSTITCH | Premium Heavyweight Streetwear",
    description: "High-performance apparel designed for the digital age. Rooted in Tamil Nadu, Voidstitch merges architectural silhouettes with premium heavyweight fabrics.",
    url: "https://voidstitch.in",
    siteName: "VOIDSTITCH",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOIDSTITCH | Premium Heavyweight Streetwear",
    description: "High-performance heavyweight apparel designed for the digital age.",
    creator: "@voidstitch",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VOIDSTITCH",
  "url": "https://voidstitch.in",
  "logo": "https://voidstitch.in/logo.png",
  "sameAs": [
    "https://instagram.com/voidstitch",
    "https://twitter.com/voidstitch",
    "https://discord.gg/voidstitch"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "India"
  },
  "brand": {
    "@type": "Brand",
    "name": "VOIDSTITCH",
    "description": "Premium Heavyweight Streetwear for the Digital Generation."
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://voidstitch.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Shop",
      "item": "https://voidstitch.in/shop"
    }
  ]
};


import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          id="schema-org"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationJsonLd, breadcrumbJsonLd]
            }) 
          }}
        />
      </head>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
