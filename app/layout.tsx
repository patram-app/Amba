import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed for your design
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust weights as needed
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ambajewellershisar.com"),
  title: {
    default: "Amba Jewellers | Exquisite Indian Jewellery in Hisar",
    template: "%s | Amba Jewellers",
  },
  description:
    "Discover Amba Jewellers in Hisar for exquisite handcrafted gold, diamond, and bridal jewellery. Trusted showroom for timeless elegance and contemporary designs.",
  keywords: [
    "Amba Jewellers",
    "Jewellers in Hisar",
    "Gold Jewellery Hisar",
    "Diamond Jewellery",
    "Bridal Jewellery",
    "Indian Jewellery",
    "Wedding Jewellery",
    "Amba Jewellers Hisar",
  ],
  authors: [{ name: "Amba Jewellers" }],
  creator: "Amba Jewellers",
  publisher: "Amba Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: "Amba Jewellers | Exquisite Indian Jewellery in Hisar",
      template: "%s | Amba Jewellers",
    },
    description:
      "Visit Amba Jewellers in Hisar for premium gold and diamond collections. Handcrafted elegance for every occasion.",
    url: "https://www.ambajewellershisar.com",
    siteName: "Amba Jewellers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or use a placeholder path
        width: 1200,
        height: 630,
        alt: "Amba Jewellers Collection",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

import JsonLd from "@/components/json-ld";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          ${cormorant.variable}
          ${playfair.variable}
          ${montserrat.variable}
          antialiased
        `}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}