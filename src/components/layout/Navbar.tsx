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
        <>
            <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    {/* Header content */}
                    <div className="flex w-full items-center justify-between">
                        {/* Mobile hamburger - Left side */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 hover:text-primary transition-colors focus:outline-none"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-7 w-7" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Logo - Stays left on desktop, center/left on mobile */}
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 sm:gap-3 group">
                                <span className="sr-only">Cophil Consulting</span>
                                <img
                                    src="/logo.png"
                                    alt="Cophil Consulting Logo"
                                    className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="relative flex flex-col leading-none">
                                    <span className="text-xl sm:text-2xl font-black tracking-tight text-primary">
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

                        {/* Desktop Empty space for balance */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
                    </div>
                </nav>
            </header>

            {/* Mobile menu Sidebar - Moved OUTSIDE the header element */}
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
                        "absolute inset-y-0 left-0 z-50 w-[280px] sm:w-[350px] overflow-y-auto bg-white dark:bg-zinc-900 px-6 py-6 transition-transform duration-300 ease-in-out shadow-2xl",
                        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                            <img
                                src="/logo.png"
                                alt="Cophil Consulting Logo"
                                className="h-8 w-auto"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black tracking-tight text-primary dark:text-white">
                                    Cophil
                                </span>
                                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-400 -mt-0.5">
                                    Consulting
                                </span>
                            </div>
                        </Link>

                        <button
                            type="button"
                            className="rounded-xl p-2 text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center rounded-2xl px-4 py-4 text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                        <Link
                            href="https://forms.gle/3wEEaevtSCppRQbj8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-4 text-center text-lg font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-light transition-all active:scale-95"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
