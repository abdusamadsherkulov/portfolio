"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/content";

const counts = new Map<string, number>();
projects.forEach((p) =>
    new Set(p.tags).forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
);

const rows = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 7);

export default function TechBars() {
    const ref = useRef<HTMLUListElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <ul ref={ref} className="space-y-4">
            {rows.map(([name, count], i) => {
                const pct = Math.round((count / projects.length) * 100);
                return (
                    <li key={name}>
                        <div className="mb-1.5 flex items-baseline justify-between text-sm">
                            <span>{name}</span>
                            <span className="tabular-nums text-neutral-500">
                                {pct}% · {count}/{projects.length}
                            </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                            <div
                                className="h-full rounded-full bg-neutral-900 transition-[width] duration-1000 ease-out motion-reduce:transition-none dark:bg-white"
                                style={{
                                    width: shown ? `${pct}%` : "0%",
                                    transitionDelay: `${i * 80}ms`,
                                }}
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}