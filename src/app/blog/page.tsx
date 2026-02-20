import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "Blog & Insights | Cophil Consulting",
    description: "Thought leadership on Future of Hiring, AI Recruitment, and GCC Expansion.",
};

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-zinc-50 dark:bg-zinc-900/50 py-8 md:py-12">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Insights</h1>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Thought leadership from the forefront of AI-driven recruitment.
                        </p>
                    </div>
                </Section>

                <Section className="pt-8 md:pt-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <Card key={post.slug} className="h-full p-8 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-zinc-500">{post.date}</time>
                                        <span className="relative z-10 rounded-full bg-zinc-100 px-3 py-1.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-lg font-semibold leading-6 text-foreground group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                    >
                                        Read More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
