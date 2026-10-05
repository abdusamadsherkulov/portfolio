export default function Section({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className="scroll-mt-20 border-t border-neutral-200 py-12 sm:py-16 dark:border-neutral-800"
        >
            <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <h2 className="text-sm font-medium text-neutral-500">{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
}