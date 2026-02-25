import Link from "next/link";
import { Briefcase, UserCheck, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata = {
    title: "Hire Talent | Cophil Consulting",
    description: "Post jobs and manage applications or apply for your next dream job at Cophil Consulting.",
};

export default function HireTalentPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <Section className="bg-primary text-white">
                    <div className="mx-auto max-w-3xl text-center">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Hire Talent & Find Opportunities
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-zinc-300">
                                Whether you're looking to scale your team or take the next step in your career,
                                Cophil Consulting provides the platform to connect authentic talent with world-class organizations.
                            </p>
                        </FadeIn>
                    </div>
                </Section>

                {/* Dashboards Section */}
                <Section className="bg-zinc-50">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Client Dashboard */}
                            <FadeIn delay={0.2}>
                                <Card className="group relative overflow-hidden p-8 sm:p-10 h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-t-4 border-t-accent">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="h-8 w-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-4">Client Dashboard</h2>
                                    <p className="text-lg font-semibold text-primary mb-2">Post Jobs & Manage Applications</p>
                                    <p className="text-zinc-600 mb-8 flex-grow">
                                        Streamline your recruitment process. Post vacancies, track candidate progress,
                                        and find the perfect fit for your Global Capability Center or Tech Enterprise.
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href="https://forms.gle/kY3otSBC56po8i6q8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button size="lg" className="w-full group/btn">
                                                Enter Client Portal
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </FadeIn>

                            {/* Candidate Dashboard */}
                            <FadeIn delay={0.4}>
                                <Card className="group relative overflow-hidden p-8 sm:p-10 h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-t-4 border-t-secondary">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                                        <UserCheck className="h-8 w-8 text-secondary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-4">Candidate Dashboard</h2>
                                    <p className="text-lg font-semibold text-secondary mb-2">Apply for Jobs</p>
                                    <p className="text-zinc-600 mb-8 flex-grow">
                                        Take the next step in your professional journey. Browse open roles,
                                        submit your application, and get matched with leading companies in India.
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href="https://forms.gle/qqf4Qa7sHRBp3iSy5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button size="lg" variant="secondary" className="w-full group/btn text-white">
                                                Go to Candidate Portal
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </FadeIn>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
