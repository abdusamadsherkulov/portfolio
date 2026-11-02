"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { }
    };

    return (
        <button
            onClick={copy}
            className="group mt-4 inline-flex flex-wrap items-baseline gap-x-3 text-left"
        >
            <span className="break-all text-lg font-semibold underline decoration-neutral-300 underline-offset-4 transition group-hover:decoration-current sm:text-2xl dark:decoration-neutral-700">
                {email}
            </span>
            <span className="text-sm text-neutral-500">
                {copied ? "Copied ✓" : "Click to copy"}
            </span>
        </button>
    );
}