import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Industries We Serve | Cophil Consulting",
    description: "Specialized recruitment for Tech, EdTech, GCC Hiring, and other major industries.",
};

const industries = [
    {
        name: "IT & Software",
        description: "Recruitment Agency for Web & AI Developers. We understand the nuances of tech stacks from MERN to Rust.",
        features: ["Software Engineers", "DevOps Specialists", "Product Managers"],
        icon: "💻",
    },
    {
        name: "EdTech",
        description: "Fresher Tech Hiring India + Intern Hiring Support. Helping edtech platforms scale their content and tech teams.",
        features: ["Subject Matter Experts", "Content Creators", "LMS Administrators"],
        icon: "🎓",
    },
    {
        name: "GCC Hiring",
        description: "Future of GCC Hiring — AI + Human Touch. Sourcing AI/ML, DevOps, and software specialists for Global Capability Centers.",
        features: ["AI/ML Specialists", "Software Developers", "Data Scientists"],
        icon: "🌐",
    },
    {
        name: "BFSI (Banking & Finance)",
        description: "Secure and compliant talent acquisition for the financial sector.",
        features: ["FinTech Developers", "Risk Analysts", "Compliance Officers"],
        icon: "🏦",
    },
    {
        name: "Healthcare",
        description: "Staffing solutions, including Telemedicine and BioTech.",
        features: ["Health Informatics", "Medical Coding", "Telehealth Support"],
        icon: "🏥",
    },
    {
        name: "Retail & E-commerce",
        description: "From supply chain logistics to high-traffic frontend engineering.",
        features: ["Supply Chain Managers", "E-commerce Specialists", "Customer Experience"],
        icon: "🛍️",
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-primary text-white py-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Industries We Serve</h1>
                        <p className="mt-4 text-lg text-zinc-200">
                            Expertise across key sectors driving the global economy.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <Card key={industry.name} className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                                        {industry.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">{industry.name}</h3>
                                </div>
                                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                                    {industry.description}
                                </p>
                                <ul className="space-y-2">
                                    {industry.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                                            <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
