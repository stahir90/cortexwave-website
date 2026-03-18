import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CortexWave | Intelligent Software Solutions",
  description:
    "CortexWave builds intelligent software products for the Australian market. Our flagship product CheckMyCars provides instant VIN checks and PPSR vehicle history reports.",
  keywords: [
    "CortexWave",
    "software company",
    "Australia",
    "CheckMyCars",
    "VIN check",
    "PPSR",
  ],
  openGraph: {
    title: "CortexWave | Intelligent Software Solutions",
    description:
      "Building intelligent software products for Australia. Home of CheckMyCars.",
    url: "https://cortexwave.com.au",
    siteName: "CortexWave",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
