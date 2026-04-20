"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 300 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('a, button, inputRole, .interactive'));
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-brand-accent rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
                animate={{
                    scale: isHovering ? 2.5 : isClicking ? 0.8 : 1,
                    borderWidth: isHovering ? '1px' : '2px',
                    opacity: isHovering ? 0.8 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Glitch lines in ring on hover */}
                {isHovering && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.1 }}
                        className="absolute inset-0 border border-brand-accent/30 rounded-full scale-110"
                    />
                )}
            </motion.div>

            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[9999] hidden lg:block"
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
