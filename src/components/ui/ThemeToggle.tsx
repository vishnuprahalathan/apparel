"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 hover:text-brand-accent transition-colors overflow-hidden group"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 90,
                    scale: theme === "dark" ? 1 : 0,
                    opacity: theme === "dark" ? 1 : 0
                }}
                className="relative z-10"
            >
                <Moon size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -90,
                    scale: theme === "light" ? 1 : 0,
                    opacity: theme === "light" ? 1 : 0
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun size={20} />
            </motion.div>
        </button>
    );
}
