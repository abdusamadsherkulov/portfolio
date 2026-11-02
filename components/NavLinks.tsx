"use client";

import { useEffect, useState } from "react";

export default function NavLinks({ items }: { items: string[] }) {
    const [active, setActive] = useState("");

    useEffect(() => {
        const els = items
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                }),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        els.forEach((el) => io.observe(el));

        const onScroll = () => {
            if (window.scrollY < 300) setActive("");
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            io.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, [items]);

    return (
        <ul className="flex gap-4 text-sm sm:gap-6">
            {items.map((item) => (
                <li key={item}>
                    <a
                        href={`#${item}`}
                        className={`capitalize transition ${active === item
                                ? "text-neutral-900 dark:text-white"
                                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}