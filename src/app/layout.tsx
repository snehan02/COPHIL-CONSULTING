import type { Metadata } from "next";
import { Inter, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cophil Consulting | Best IT Staffing Partner with Human Touch",
  description: "Future of Tech Hiring + Fresher Tech Hiring India + Intern Hiring Support for Startups & Enterprises.",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${openSans.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        {/* Background Watermarks */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-[0.07] select-none">
          <img
            src="/logo.png"
            alt=""
            className="absolute -right-24 -bottom-24 w-[500px] h-auto grayscale rotate-12"
            aria-hidden="true"
          />
          <img
            src="/logo.png"
            alt=""
            className="absolute -left-32 top-1/4 w-[400px] h-auto grayscale -rotate-12"
            aria-hidden="true"
          />
        </div>
        {children}
      </body>
    </html>
  );
}

