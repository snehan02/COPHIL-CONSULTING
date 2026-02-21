import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Cophil Consulting`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <Link href="/blog" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </div>
            <main className="flex-1">
                <Section className="pt-6 md:pt-8">
                    <div className="mx-auto max-w-3xl">
                        <span className="text-base font-semibold leading-7 text-primary">{post.category}</span>
                        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                            {post.title}
                        </h1>
                        <div className="mt-6 flex items-center gap-x-4 border-b border-zinc-200 pb-8 mb-8">
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-foreground">
                                    Cophil Editorial Team
                                </p>
                                <p className="text-zinc-500">
                                    {post.date}
                                </p>
                            </div>
                        </div>

                        <div
                            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
