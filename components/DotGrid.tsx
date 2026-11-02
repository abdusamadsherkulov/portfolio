"use client";

import { useEffect, useRef } from "react";

const dots = {
    backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.2px)",
    backgroundSize: "26px 26px",
};

export default function DotGrid() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const move = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--x", `${e.clientX - r.left}px`);
            el.style.setProperty("--y", `${e.clientY - r.top}px`);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const fade = "linear-gradient(to bottom, black 30%, transparent)";
    const spot = "radial-gradient(200px circle at var(--x) var(--y), black, transparent)";

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 text-neutral-900 [--x:-999px] [--y:-999px] dark:text-white"
        >
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ ...dots, maskImage: fade, WebkitMaskImage: fade }}
            />
            <div
                className="absolute inset-0 opacity-70"
                style={{ ...dots, maskImage: spot, WebkitMaskImage: spot }}
            />
        </div>
    );
}