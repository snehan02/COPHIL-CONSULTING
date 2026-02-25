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
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card key={index} className="flex flex-col p-6 sm:p-8">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                                    <p className="mt-2 text-sm font-semibold text-primary">{service.tagline}</p>
                                    <p className="mt-4 flex-auto text-base leading-7 text-zinc-600">
                                        {service.description}
                                    </p>
                                    <ul className="mt-8 space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex gap-3 text-sm text-zinc-600">
                                                <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Link href="https://forms.gle/3wEEaevtSCppRQbj8" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full">Get Started</Button>
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
