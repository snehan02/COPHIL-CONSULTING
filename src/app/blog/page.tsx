import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "Blog & Insights | Cophil Consulting",
    description: "Thought leadership on Future of Hiring, AI Recruitment, and GCC Expansion.",
};

function getReadTime(content: string) {
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero header */}
                <Section className="bg-primary text-white py-14 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden>
                        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-2xl animate-pulse" />
                    </div>
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20 mb-6">
                            <BookOpen className="h-3.5 w-3.5" />
                            Thought Leadership
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                            Insights & Ideas
                        </h1>
                        <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
                            Perspectives from the forefront of AI-driven recruitment — for founders, hiring leads, and talent teams.
                        </p>
                    </div>
                </Section>

                {/* All posts — uniform grid */}
                <Section>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                                <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                                    {/* Subtle top accent bar in primary colour only */}
                                    <div className="h-1.5 bg-primary w-full" />
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-zinc-400">
                                                <Clock className="h-3 w-3" />
                                                {getReadTime(post.content)} min read
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary">
                                            Read More
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-200" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Section>

                {/* Bottom CTA */}
                <Section className="bg-zinc-50 border-t border-zinc-100">
                    <div className="rounded-2xl bg-primary px-8 py-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none" aria-hidden>
                            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-black text-white sm:text-3xl">Want to stay ahead in talent acquisition?</h2>
                            <p className="mt-3 text-zinc-300">Follow us on LinkedIn for weekly insights on AI hiring, GCC trends, and talent strategy.</p>
                            <a
                                href="https://www.linkedin.com/company/thecophil/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-primary font-bold px-6 py-3 hover:bg-accent/90 transition-colors text-sm"
                            >
                                Follow on LinkedIn <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
