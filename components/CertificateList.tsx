"use client";

import { useEffect, useState } from "react";
import type { Certificate } from "@/data/content";

export default function CertificateList({ items }: { items: Certificate[] }) {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {items.map((c) => (
          <li
            key={c.title}
            className="flex items-center justify-between gap-4 py-4 first:pt-0"
          >
            <div className="min-w-0">
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-neutral-500">
                {c.issuer} · {c.year}
              </p>
            </div>
            <button
              onClick={() => setActive(c)}
              className="shrink-0 rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Preview
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-3 backdrop-blur-md sm:p-6"
        >
          <div
            data-native-cursor
            onClick={(e) => e.stopPropagation()}
            className="flex h-[85vh] w-full max-w-4xl animate-fade-up cursor-auto flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-5 py-3 dark:border-neutral-800">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{active.title}</p>
                <p className="truncate text-xs text-neutral-500">
                  {active.issuer} · {active.year}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={active.file}
                  download
                  className="cursor-pointer rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                >
                  Download
                </a>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 text-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={`${active.file}#toolbar=0&navpanes=0`}
              title={active.title}
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}