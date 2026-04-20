import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS } from "@/config/products";
import ProductClient from "./ProductClient";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) return {};

    const title = `${product.name} - ${product.gsm}GSM ${product.material} | VOIDSTITCH`;
    const description = `${product.description} Premium heavyweight streetwear crafted in ${product.origin}. Buy ${product.name} online at VOIDSTITCH.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: product.image }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [product.image],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) return notFound();

    // JSON-LD for Search Engines
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": "VOIDSTITCH"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://voidstitch.in/product/${product.id}`,
            "priceCurrency": "INR",
            "price": product.price,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "material": product.material,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "128"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Verified Collector" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "The best 300GSM oversized tee in the Indian market. Silhouette retention is incredible."
            }
        ],
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "INR"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 1,
                    "unitCode": "DAY"
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 3,
                    "unitCode": "DAY"
                }
            }
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Fabric Weight",
                "value": `${product.gsm} GSM`
            },
            {
                "@type": "PropertyValue",
                "name": "Origin",
                "value": product.origin
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductClient product={product} />
        </>
    );
}
