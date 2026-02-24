"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <span className="sr-only">Cophil Consulting</span>
                        <img
                            src="/logo.png"
                            alt="Cophil Consulting Logo"
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="relative flex flex-col leading-none">
                            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                                Cophil
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-400 -mt-0.5">
                                Consulting
                            </span>
                        </span>
                    </Link>
                </div>


                {/* Mobile hamburger */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop nav links */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-zinc-900 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-[60]" : "hidden")}>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                            <img
                                src="/logo.png"
                                alt="Cophil Consulting Logo"
                                className="h-8 w-auto"
                            />
                            <span className="relative flex flex-col leading-none">
                                <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                                    Cophil
                                </span>
                                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-400 -mt-0.5">
                                    Consulting
                                </span>
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
