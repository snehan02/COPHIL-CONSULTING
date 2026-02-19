import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outlined";
}

export function Card({ className, variant = "glass", children, ...props }: CardProps) {
    const variants = {
        default: "bg-white dark:bg-zinc-800 shadow-lg",
        glass: "bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 shadow-xl",
        outlined: "border border-zinc-200 dark:border-zinc-700 bg-transparent",
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
