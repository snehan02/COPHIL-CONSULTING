import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: boolean;
    padded?: boolean;
}

export function Section({
    className,
    container = true,
    padded = true,
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                padded && "py-12 sm:py-16 md:py-24",
                className
            )}
            {...props}
        >
            {container ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
