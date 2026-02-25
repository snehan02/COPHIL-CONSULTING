import Link from "next/link";
import { ArrowRight, Globe, Users, Code, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";

export const metadata = {
    title: "Our Services | Cophil Consulting",
    description: "IT Staffing, Fresher Tech Hiring, and GCC Hiring services by Cophil Consulting.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "IT Staffing & Recruitment",
            tagline: "Best IT Staffing Partner with Human Touch",
            description: "Specialized sourcing for Web & AI Developers. We go beyond keywords to find candidates who fit your culture and technical needs.",
            icon: Code,
            features: ["AI & Machine Learning Experts", "Full Stack Developers", "Cloud Infrastructure Specialists"]
        },
        {
            title: "Educational Services",
            tagline: "Fresher Tech Hiring India + Intern Hiring Support",
            description: "Bridging the gap between campus and corporate. We help startups and enterprises find raw talent with high potential.",
            icon: Users,
            features: ["Campus Recruitment Drives", "Internship Program Management", "Pre-hire Assessments"]
        },
        {
            title: "GCC Hiring",
            tagline: "Future of GCC Hiring — AI + Human Touch",
            description: "Specialized tech talent solutions for Global Capability Centers. We source and validate candidates who deliver from Day 1.",
            icon: Globe,
            features: ["AI/ML Specialists", "Software Developers", "DevOps Engineers", "Data Scientists"]
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-primary text-white">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h1>
                        <p className="mt-4 text-lg text-zinc-200">
                            Comprehensive talent solutions for the modern digital landscape.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const colors = [
                                "bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:bg-blue-500/20",
                                "bg-teal-500/10 text-teal-600 dark:text-teal-400 dark:bg-teal-500/20",
                                "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-500/20"
                            ];
                            return (
                                <Card key={index} variant="premium" className="flex flex-col p-8 sm:p-10 group transition-all duration-500">
                                    <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${colors[index % colors.length]}`}>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                    <p className="mt-2 text-sm font-bold tracking-wide uppercase text-primary dark:text-primary-light">
                                        {service.tagline}
                                    </p>
                                    <p className="mt-6 flex-auto text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                                        {service.description}
                                    </p>
                                    <ul className="mt-8 space-y-4 mb-10">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Link href="https://forms.gle/3wEEaevtSCppRQbj8" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full rounded-xl border-2 hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-lg">
                                                Request Quote
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
