import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outlined";
}

export function Card({ className, variant = "glass", children, ...props }: CardProps) {
    const variants = {
        default: "bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        glass: "bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-0.5",
        outlined: "border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/30 hover:shadow-md hover:-translate-y-0.5",
    };

    return (
        <div
            className={cn(
                "rounded-2xl transition-all duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
