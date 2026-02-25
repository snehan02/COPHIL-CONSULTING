"use client";

import { useForm } from "react-hook-form";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

type FormData = {
    name: string;
    email: string;
    phone: string;
    type: string;
    message: string;
    // File upload would be handled separately for EmailJS usually, or via a different service
};

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Mock submission for V1
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Thank you for your message! We will get back to you shortly.");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Partner with the best IT staffing agency with human touch.
                        </p>
                    </div>
                </Section>

                <Section className="py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:max-w-none lg:grid-cols-2">
                            <Card variant="premium" className="p-8 sm:p-10 flex flex-col items-center">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Phone</h3>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    Available Mon-Fri, 9am-6pm IST
                                </p>
                                <p className="mt-6 text-xl sm:text-2xl font-bold text-primary dark:text-primary-light break-all">
                                    <a href="tel:+917972820459" className="hover:underline transition-all">+91-7972820459</a>
                                </p>
                            </Card>
                            <Card variant="premium" className="p-8 sm:p-10 flex flex-col items-center">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Email</h3>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    We usually reply within 24 hours
                                </p>
                                <p className="mt-6 text-lg sm:text-xl font-bold text-primary dark:text-primary-light break-all px-2">
                                    <a href="mailto:support@cophilconsulting.com" className="hover:underline transition-all">support@cophilconsulting.com</a>
                                </p>
                            </Card>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className="mx-auto max-w-xl">
                        <Card className="p-6 sm:p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("name", { required: "Name is required" })}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700"
                                        />
                                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700"
                                        />
                                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            id="phone"
                                            {...register("phone")}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="type" className="block text-sm font-semibold leading-6 text-foreground">
                                        I am a...
                                    </label>
                                    <div className="mt-2.5">
                                        <select
                                            id="type"
                                            {...register("type")}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700"
                                        >
                                            <option value="Candidate">Candidate</option>
                                            <option value="Company">Company / Employer</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            {...register("message", { required: "Message is required" })}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700"
                                        />
                                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cv" className="block text-sm font-semibold leading-6 text-foreground">
                                        Attach Resume (PDF/Docx)
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="file"
                                            id="cv"
                                            className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary/10 file:text-primary
                        hover:file:bg-primary/20"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Button type="submit" className="w-full" isLoading={isSubmitting}>
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
