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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "CortexWave | Intelligent Software Solutions",
    description:
      "Building intelligent software products for Australia. Home of CheckMyCars.",
    url: "https://cortexwave.com.au",
    siteName: "CortexWave",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CortexWave Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CortexWave | Intelligent Software Solutions",
    description:
      "Building intelligent software products for Australia. Home of CheckMyCars.",
    images: ["/logo.png"],
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
