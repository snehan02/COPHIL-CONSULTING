import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outlined" | "premium";
}

export function Card({ className, variant = "glass", children, ...props }: CardProps) {
    const variants = {
        default: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        glass: "bg-white/80 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        outlined: "border-2 border-zinc-100 dark:border-zinc-800 bg-transparent hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        premium: "bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500",
    };

    return (
        <div
            className={cn(
                "rounded-[2rem] overflow-hidden transition-all duration-500",
                variants[variant]
            )}
            {...props}
        >
            <div className={cn("h-full w-full", className)}>
                {children}
            </div>
        </div>
    );
}
