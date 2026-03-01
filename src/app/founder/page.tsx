import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { FadeIn } from "@/components/shared/FadeIn";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export const metadata = {
    title: "Meet the Founder | Cophil Consulting",
    description: "Abhijeet Choudhary is the founder of Cophil Consulting — an AI-driven recruitment firm built on one belief: authentic talent over keyword matching.",
};

export default function FounderPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-primary text-white py-12 md:py-20 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight text-white mb-6 sm:text-5xl lg:text-6xl">Meet the Founder</h1>
                        </FadeIn>
                    </div>
                </Section>

                <Section className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            <FadeIn className="order-2 lg:order-1">
                                <Card className="p-8 md:p-10 border-0 shadow-xl bg-white relative">
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Abhijeet Choudhary</h2>
                                        <p className="text-primary font-medium text-lg mb-8 leading-relaxed">
                                            President HR &amp; Talent Acquisition Partner | Architect of Scalable Hiring Frameworks
                                        </p>

                                        <div className="space-y-6 text-zinc-600 text-base md:text-lg leading-relaxed">
                                            <p>
                                                <strong className="text-zinc-900">Abhijeet Choudhary</strong> is the founder of Cophil Consulting — an AI-driven recruitment firm built on one belief: <span className="text-primary font-semibold">authentic talent over keyword matching.</span>
                                            </p>
                                            <p>
                                                With an engineering background (B.E. Mechanical) and an MBA in HR, Abhijeet brings a rare blend of technical understanding and people expertise to hiring. He has worked with startups, product companies, and global MNCs like HCLTech, helping them crack tough talent markets — from fresh grads to enterprise leaders.
                                            </p>
                                            <p>
                                                Today, Abhijeet leads a team of 10+ recruiters, personally overseeing a pipeline of 1,000+ CVs screened daily — with 99+ successful placements since Cophil's launch. His expertise spans Boolean/X-Ray Search, scalable outreach, full-lifecycle IT recruitment, and mentoring the next generation of recruiters.
                                            </p>
                                        </div>

                                        <blockquote className="mt-8 border-l-4 border-primary pl-6 py-2">
                                            <p className="text-xl italic font-medium text-zinc-800">
                                                &ldquo;If you believe talent is the fuel for growth, we're already on the same team.&rdquo;
                                            </p>
                                        </blockquote>

                                        <div className="mt-10">
                                            <Link href="https://www.linkedin.com/in/abhijeet-choudhary-611166175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-lg hover:bg-[#004182] transition-colors shadow-md hover:shadow-lg">
                                                <Linkedin className="w-5 h-5" />
                                                Connect on LinkedIn
                                                <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>

                            <FadeIn className="order-1 lg:order-2 flex justify-center lg:justify-end" delay={0.2}>
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-orange-400 transform rotate-3 scale-[1.02] opacity-20 blur"></div>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-8 border-white">
                                        <img
                                            src="/founder.jpg"
                                            alt="Abhijeet Choudhary"
                                            className="w-full max-w-md h-auto object-cover aspect-[4/5]"
                                        />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
