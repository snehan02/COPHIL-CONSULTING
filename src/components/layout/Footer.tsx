import Link from "next/link";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Blog", href: "/blog" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Block */}
                    <div className="sm:col-span-2 lg:col-span-1 space-y-5">
                        <div className="pl-4 border-l-[3px] border-accent">
                            <span className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] leading-none block">
                                Cophil
                            </span>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent mt-1 block">
                                Consulting
                            </span>
                        </div>

                        <p className="text-sm leading-6 text-zinc-300">
                            AI-Driven Recruitment for India &amp; GCCs.<br />
                            Authentic talent with human touch.
                        </p>
                        <div className="flex space-x-3">
                            {/* LinkedIn */}
                            <Link
                                href="https://www.linkedin.com/company/thecophil/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-700 text-zinc-400 hover:border-accent hover:text-accent transition-all duration-200"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            {/* Email */}
                            <a
                                href="mailto:support@cophilconsulting.com"
                                aria-label="Email us"
                                className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-700 text-zinc-400 hover:border-accent hover:text-accent transition-all duration-200"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            {/* Phone */}
                            <a
                                href="tel:+917972820459"
                                aria-label="Call us"
                                className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-700 text-zinc-400 hover:border-accent hover:text-accent transition-all duration-200"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-zinc-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Focus */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white">Focus</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">IT Staffing</Link></li>
                            <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">Fresher Hiring</Link></li>
                            <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">GCC Staffing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li className="text-sm leading-6 text-zinc-300">
                                <a href="tel:+917972820459" className="hover:text-white break-words">+91 797282 0459</a>
                            </li>
                            <li className="text-sm leading-6 text-zinc-300">
                                <a href="mailto:support@cophilconsulting.com" className="hover:text-white break-words">support@cophilconsulting.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-xs leading-5 text-zinc-400">
                        Cophil Consulting · AI-Driven Recruitment · India &amp; GCCs · Authentic Talent Solutions
                    </p>
                    <p className="text-xs leading-5 text-zinc-400 mt-2">
                        &copy; 2026 Cophil Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
