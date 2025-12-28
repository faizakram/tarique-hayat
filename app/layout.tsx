import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarique Hayat - Java Backend Developer & Full Stack Engineer",
  description: "Portfolio of Tarique Hayat, a Java Backend Developer with 4 years of experience specializing in Spring Boot, Hibernate, microservices, and enterprise applications. Also proficient in Angular, React, and modern web technologies.",
  keywords: ["Java Developer", "Spring Boot", "Backend Developer", "Full Stack Engineer", "Hibernate", "JPA", "Microservices", "Angular", "React", "Tarique Hayat"],
  authors: [{ name: "Tarique Hayat" }],
  openGraph: {
    title: "Tarique Hayat - Java Backend Developer & Full Stack Engineer",
    description: "Portfolio of Tarique Hayat, a Java Backend Developer with 4 years of experience specializing in Spring Boot and enterprise applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarique Hayat - Java Backend Developer",
    description: "Portfolio of Tarique Hayat, a Java Backend Developer with 4 years of experience in Spring Boot and enterprise applications",
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
        <LoadingScreen />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
