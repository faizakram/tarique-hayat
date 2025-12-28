import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tariq Hyatt - Full Stack Developer & Cloud Expert",
  description: "Portfolio of Tariq Hyatt, a Full Stack Developer with 4 years of experience specializing in modern web technologies and cloud services. Expertise in React, Next.js, Node.js, AWS, Azure, and Google Cloud.",
  keywords: ["Full Stack Developer", "Software Engineer", "Cloud Computing", "AWS", "Azure", "React", "Next.js", "Node.js", "Tariq Hyatt"],
  authors: [{ name: "Tariq Hyatt" }],
  openGraph: {
    title: "Tariq Hyatt - Full Stack Developer & Cloud Expert",
    description: "Portfolio of Tariq Hyatt, a Full Stack Developer with 4 years of experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tariq Hyatt - Full Stack Developer",
    description: "Portfolio of Tariq Hyatt, a Full Stack Developer with 4 years of experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
