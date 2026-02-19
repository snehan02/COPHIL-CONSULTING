import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";

export const metadata = {
    title: "About Us | Cophil Consulting",
    description: "Cophil Consulting is an authentic recruitment agency specializing in web & AI developers, fresher tech hiring, and intern hiring support.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Us</h1>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            We are Cophil Consulting.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="mx-auto max-w-3xl">
                        <p className="text-xl leading-8 text-foreground font-medium mb-8">
                            "Cophil Consulting is an authentic recruitment agency specializing in
                            <span className="text-primary mx-1">web & AI developers</span>,
                            <span className="text-primary mx-1">fresher tech hiring</span>, and
                            <span className="text-primary mx-1">intern hiring support</span>."
                        </p>
                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-6">
                            We serve <strong>India & GCC markets</strong> with AI-driven recruitment blended with human empathy.
                            In a world dominated by algorithms, we believe that the true essence of recruitment lies in the
                            <strong>human connection</strong>.
                        </p>
                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                            Our mission is to provide <strong>Authentic Talent Solutions</strong> that empower businesses to innovate
                            and individuals to thrive. Whether you are a startup looking for your first engineer or an enterprise
                            expanding into the Gulf region, we are your trusted partner.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
