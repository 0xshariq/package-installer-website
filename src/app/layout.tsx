import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "package-installer-cli - Interactive npm Package Manager",
  description: "Effortlessly install and manage npm packages with an intelligent, interactive CLI tool. Get started in seconds with zero configuration required.",
  keywords: ["npm", "cli", "package manager", "node.js", "javascript", "typescript"],
  authors: [{ name: "0xshariq" }],
  creator: "0xshariq",
  openGraph: {
    title: "package-installer-cli - Interactive npm Package Manager",
    description: "Effortlessly install and manage npm packages with an intelligent, interactive CLI tool.",
    type: "website",
    url: "https://package-installer-cli.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "package-installer-cli - Interactive npm Package Manager",
    description: "Effortlessly install and manage npm packages with an intelligent, interactive CLI tool.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
