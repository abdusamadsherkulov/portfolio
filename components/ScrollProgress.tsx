"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden
            className="fixed inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-neutral-900 dark:bg-white"
        />
    );
}