"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const move = (e: MouseEvent) => {
            el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            const onLink = (e.target as HTMLElement).closest("a, button");
            el.dataset.hover = onLink ? "true" : "false";
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden
            className="group pointer-events-none fixed left-0 top-0 z-50 hidden [@media(pointer:fine)]:block"
        >
            <div className="-ml-2.5 -mt-2.5 h-3 w-3 rounded-full border-2 border-white bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition-all duration-200 group-data-[hover=true]:scale-140 group-data-[hover=true]:bg-white" />
        </div>
    );
}