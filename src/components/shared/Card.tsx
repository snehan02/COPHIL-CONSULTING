import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outlined";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
    const variants = {
        default: "bg-white border border-zinc-200 shadow-lg hover:shadow-xl hover:-translate-y-1",
        glass: "bg-white border border-zinc-200 shadow-xl hover:shadow-2xl hover:-translate-y-1",
        outlined: "border border-zinc-200 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    };

    return (
        <div
            className={cn(
                "rounded-2xl transition-all duration-300 text-zinc-900",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
