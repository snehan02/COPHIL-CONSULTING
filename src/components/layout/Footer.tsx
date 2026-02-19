import Link from "next/link";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Blog", href: "/blog" },
    ],
    social: [
        {
            name: "LinkedIn",
            href: "#",
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Cophil
                        </span>
                        <p className="text-sm leading-6 text-zinc-300">
                            AI-Driven Recruitment Agency India & GCC | Authentic Talent Solutions.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-300">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
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
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Focus</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">IT Staffing</Link></li>
                                    <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">Fresher Hiring</Link></li>
                                    <li><Link href="/services" className="text-sm leading-6 text-zinc-300 hover:text-white">GCC Expansion</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-zinc-400">
                        Cophil Consulting AI-Driven Recruitment Agency India & GCC | Authentic Talent Solutions | Fresher & Intern Hiring Support
                    </p>
                    <p className="text-xs leading-5 text-zinc-400 mt-2">
                        &copy; 2026 Cophil Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
