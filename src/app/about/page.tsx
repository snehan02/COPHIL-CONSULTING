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
                <Section className="bg-primary text-white py-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h1>
                        <p className="mt-4 text-lg text-zinc-200">
                            We are Cophil Consulting.
                        </p>
                    </div>
                </Section>

                {/* Vision & Mission */}
                <Section className="bg-zinc-50 border-t border-zinc-100">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                        {/* Vision */}
                        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-5 mx-auto">
                                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-foreground mb-4">Our Vision</h2>
                            <p className="text-base leading-7 text-zinc-600">
                                To redefine the recruitment experience by connecting exceptional talent with innovative organizations,
                                fostering growth, diversity, and success. We aim to create meaningful relationships, embracing technology,
                                and continuously evolving to meet the dynamic needs of the workforce, while creating opportunities that
                                empower individuals and businesses alike.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-5 mx-auto">
                                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-foreground mb-4">Our Mission</h2>
                            <p className="text-base leading-7 text-zinc-600">
                                Our mission is to connect exceptional talent with organizations that share their values and vision.
                                We focus on understanding the unique needs of both our clients and candidates, delivering personalized
                                recruitment solutions that foster mutual growth and success. By utilizing innovative technologies,
                                industry knowledge, personal approach and building relationships, we strive to make the hiring process
                                seamless, transparent, and impactful.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* About text */}
                <Section className="pt-8 pb-12">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-xl leading-8 text-foreground font-medium mb-8">
                            &ldquo;Cophil Consulting is an authentic recruitment agency specializing in
                            <span className="text-primary mx-1">web &amp; AI developers</span>,
                            <span className="text-primary mx-1">fresher tech hiring</span>, and
                            <span className="text-primary mx-1">intern hiring support</span>.&rdquo;
                        </p>
                        <p className="text-base leading-7 text-zinc-600 mb-6">
                            We serve <strong>India &amp; GCC markets</strong> with AI-driven recruitment blended with human empathy.
                            In a world dominated by algorithms, we believe that the true essence of recruitment lies in the
                            <strong> human connection</strong>.
                        </p>
                        <p className="text-base leading-7 text-zinc-600">
                            Our mission is to provide <strong>Authentic Talent Solutions</strong> that empower businesses to innovate
                            and individuals to thrive. Whether you are a startup looking for your first engineer or an enterprise
                            expanding into new markets, we are your trusted partner.
                        </p>
                    </div>
                </Section>


            </main>
            <Footer />
        </div>
    );
}
