"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StockStatusProps {
    count: number;
    locationName?: string;
}

export function StockStatus({ count, locationName }: StockStatusProps) {
    const isLowStock = count < 10;
    const isOutOfStock = count === 0;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                    <span
                        className={cn(
                            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                            isOutOfStock ? "bg-red-500" : isLowStock ? "bg-orange-500" : "bg-green-500"
                        )}
                    />
                    <span
                        className={cn(
                            "relative inline-flex rounded-full h-2 w-2",
                            isOutOfStock ? "bg-red-500" : isLowStock ? "bg-orange-500" : "bg-green-500"
                        )}
                    />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                    {locationName ? `${locationName} Node Status` : "Regional Inventory Status"}
                </span>
            </div>

            <div className="p-4 bg-neutral-900/50 border border-white/5 rounded-sm flex justify-between items-center group overflow-hidden relative">
                <div className="relative z-10">
                    <p className={cn(
                        "text-xs font-bold tracking-tight uppercase",
                        isOutOfStock ? "text-red-500" : isLowStock ? "text-orange-500" : "text-foreground"
                    )}>
                        {isOutOfStock ? "Depleted" : isLowStock ? "Critical Stock" : "Operational"}
                    </p>
                    <p className="text-[8px] font-medium opacity-40 uppercase tracking-widest mt-1">
                        {count} Units Available in-Region
                    </p>
                </div>

                <div className="text-right relative z-10">
                    <span className="text-[10px] font-mono opacity-20 group-hover:opacity-60 transition-opacity">
                        REF_ID: void_{count.toString().padStart(3, '0')}
                    </span>
                </div>

                {/* Glitch Effect Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
            </div>
        </div>
    );
}
