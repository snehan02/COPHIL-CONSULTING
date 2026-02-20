import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Users, Code } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";
import { FadeIn } from "@/components/shared/FadeIn";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-background lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32 lg:flex lg:pb-10 lg:items-start pt-8">
            <FadeIn className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0" delay={0.2}>
              <h1 className="mt-0 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                AI-Driven Recruitment Agency <br className="hidden lg:block" />
                <span className="text-primary">India</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Authentic Talent Solutions with Human Touch - from freshers to enterprise leaders.
                We bridge the gap between technology and talent.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" className="rounded-full">
                  Find Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </div>
            </FadeIn>
            <FadeIn className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32" delay={0.4}>
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 opacity-90"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Services Teaser */}
        <Section className="bg-zinc-50 dark:bg-zinc-900/50">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Authentic Talent Solutions
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                We specialize in connecting the right talent with the right opportunities.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "IT Staffing & Recruitment",
                description: "Specialized sourcing for Web & AI Developers. Best IT Staffing Partner with Human Touch.",
                icon: Code,
                href: "/services",
              },
              {
                title: "Educational Services",
                description: "Fresher Tech Hiring India + Intern Hiring Support for Startups & Enterprises.",
                icon: Users,
                href: "/services",
              },
              {
                title: "GCC Expansion",
                description: "Cross-border talent solutions for Gulf markets. Future of GCC Hiring - AI + Human Touch.",
                icon: Globe,
                href: "/services",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={0.2 * (index + 1)}>
                  <Card className="p-8 hover:-translate-y-1 h-full">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="mb-4 text-zinc-600 dark:text-zinc-400">{service.description}</p>
                    <Link href={service.href} className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Section>

        {/* Industries Teaser with Alternate Background */}
        <Section>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Industries We Serve
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {["IT & Software", "EdTech", "Banking", "Finance", "Healthcare", "Retail", "Manufacturing", "BPO"].map((industry, index) => (
              <FadeIn key={industry} delay={0.05 * index}>
                <div className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-4 text-center font-medium shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 h-full">
                  {industry}
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center" delay={0.4}>
            <Link href="/industries">
              <Button variant="outline">View All Industries</Button>
            </Link>
          </FadeIn>
        </Section>

        {/* Testimonials Section */}
        <Section className="bg-zinc-50 dark:bg-zinc-900/50">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Helping companies find the right talent to drive their business forward.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                quote: "Cophil helped us find tech talent who don't just list skills, but actually deliver on complex projects.",
                author: "Salil Dhawan",
                role: "Director & CEO",
                company: "Appening Infotech",
              },
              {
                quote: "Cophil made the hiring process simple and brought us genuine candidates",
                author: "Kunal Chauhan",
                role: "Founder",
                company: "Om Industries",
              }
            ].map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={0.2 * (index + 1)}>
                <Card className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4 text-primary">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg italic text-zinc-700 dark:text-zinc-300 mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary text-white">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Hiring?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              Join hundreds of companies finding the best talent with Cophil Consulting.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="secondary" size="lg" className="rounded-full text-white">
                Get Started
              </Button>

            </div>
          </FadeIn>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
