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
                {/* Mobile hamburger - Moved to the left */}
                <div className="flex items-center gap-2 lg:hidden order-first">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 hover:text-primary transition-colors focus:outline-none"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-7 w-7" aria-hidden="true" />
                    </button>
                </div>

                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 sm:gap-3 group">
                        <span className="sr-only">Cophil Consulting</span>
                        <img
                            src="/logo.png"
                            alt="Cophil Consulting Logo"
                            className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="relative flex flex-col leading-none">
                            <span className="text-xl sm:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                                Cophil
                            </span>
                            <span className="text-[7px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-400 -mt-0.5">
                                Consulting
                            </span>
                        </span>
                    </Link>
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

            {/* Mobile menu - Sidebar now on the left */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
                    mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />

                <div
                    className={cn(
                        "absolute inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 transition-transform duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10",
                        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
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
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700 bg-zinc-50 hover:bg-zinc-100 transition-colors focus:outline-none"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-10 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10">
                            <div className="space-y-3 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-xl px-4 py-3 text-lg font-medium leading-7 text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="https://forms.gle/3wEEaevtSCppRQbj8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-light transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
