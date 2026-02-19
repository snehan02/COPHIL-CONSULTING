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

                <Section>
                    <div className="mx-auto max-w-xl">
                        <Card className="p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
