import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "HomeCloser AI - Safety & Success for Real Estate Agents",
  description: "Where safety meets success. AI-powered protection for real estate agents with voice-activated emergency alerts, intelligent recording, and sales analytics.",
  keywords: "real estate safety, agent protection, emergency alerts, AI assistant, real estate technology",
  openGraph: {
    title: "HomeCloser AI - Safety & Success for Real Estate Agents",
    description: "Where safety meets success. AI-powered protection for real estate agents.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
