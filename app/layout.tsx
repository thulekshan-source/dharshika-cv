import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darshika-vijaykumar.vercel.app"),
  title: "Darshika Vijaykumar | Business Management Portfolio",
  description:
    "Second-year Business Management undergraduate at SLIIT City Uni, Sri Lanka. Driven, organised, and committed to professional excellence.",
  keywords: [
    "Darshika Vijaykumar",
    "Business Management",
    "SLIIT City Uni",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Darshika Vijaykumar" }],
  openGraph: {
    title: "Darshika Vijaykumar | Business Management Portfolio",
    description:
      "Second-year Business Management undergraduate at SLIIT City Uni, Sri Lanka.",
    url: "https://darshika-vijaykumar.vercel.app",
    siteName: "Darshika Vijaykumar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Darshika Vijaykumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshika Vijaykumar | Business Management Portfolio",
    description:
      "Second-year Business Management undergraduate at SLIIT City Uni, Sri Lanka.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-navy text-offwhite`}
      >
        {children}
      </body>
    </html>
  );
}
