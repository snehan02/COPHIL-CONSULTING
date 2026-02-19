"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Upload } from "lucide-react";
import { Button } from "@/components/shared/Button";
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
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Cophil Consulting</span>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-serif tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Cophil
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-zinc-900 hover:text-primary dark:text-zinc-100 dark:hover:text-accent"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="primary" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload CV / Hire Talent
                    </Button>
                </div>
            </nav>
            {/* Mobile menu */}
            <div
                className={cn(
                    "lg:hidden",
                    mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
                )}
            >
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10 dark:bg-black dark:ring-zinc-50/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Cophil Consulting</span>
                            <span className="text-xl font-bold">Cophil</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-200"
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Button variant="primary" className="w-full justify-center gap-2">
                                    <Upload className="h-4 w-4" />
                                    Upload CV / Hire Talent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
