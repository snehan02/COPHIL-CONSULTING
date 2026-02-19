import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Industries We Serve | Cophil Consulting",
    description: "Specialized recruitment for Tech, EdTech, Global GCC, and other major industries.",
};

const industries = [
    {
        name: "IT & Software",
        description: "Recruitment Agency for Web & AI Developers. We understand the nuances of tech stacks from MERN to Rust.",
        features: ["Software Engineers", "DevOps Specialists", "Product Managers"]
    },
    {
        name: "EdTech",
        description: "Fresher Tech Hiring India + Intern Hiring Support. Helping edtech platforms scale their content and tech teams.",
        features: ["Subject Matter Experts", "Content Creators", "LMS Administrators"]
    },
    {
        name: "Global (GCC)",
        description: "Future of GCC Hiring. Connecting Indian talent with opportunities in Dubai, Riyadh, and Doha.",
        features: ["Construction & Engineering", "Oil & Gas", "Hospitality Management"]
    },
    {
        name: "BFSI (Banking & Finance)",
        description: "Secure and complaint talent acquisition for the financial sector.",
        features: ["FinTech Developers", "Risk Analysts", "Compliance Officers"]
    },
    {
        name: "Healthcare",
        description: "Staffing solutions, including Telemedicine and BioTech.",
        features: ["Health Informatics", "Medical Coding", "Telehealth Support"]
    },
    {
        name: "Retail & E-commerce",
        description: "From supply chain logistics to high-traffic frontend engineering.",
        features: ["Supply Chain Managers", "E-commerce Specialists", "Customer Experience"]
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Industries We Serve</h1>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Expertise across key sectors driving the global economy.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <Card key={industry.name} className="p-6 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 min-h-[60px]">
                                    {industry.description}
                                </p>
                                <ul className="space-y-2">
                                    {industry.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-zinc-500 dark:text-zinc-500">
                                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
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
