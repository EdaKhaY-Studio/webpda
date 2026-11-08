import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollRevealManager from "@/components/ui/ScrollRevealManager";
import { SITE_CONFIG } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paham Digital Agency — Modern Creative Technology & Automation",
  description:
    "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL("https://pahamdigital.online"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paham Digital Agency — Paham Bisnisnya, Otomatiskan Sistemnya.",
    description:
      "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    url: "https://pahamdigital.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paham Digital Agency",
    description: "Paham Bisnisnya, Otomatiskan Sistemnya.",
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
  verification: {
    google: "U0tXufVqzwPOhQeKO2oB622IRUg91LnStT1Du00voJM",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pahamdigital.online/#organization",
      name: "Paham Digital Agency",
      url: "https://pahamdigital.online",
      logo: "https://pahamdigital.online/paham-logo-512.png",
      description:
        "Partner solusi digital untuk website profesional, web application, AI customer service, automasi bisnis, dan optimasi SEO.",
      telephone: "+6282311307556",
      email: "halo@pahamdigital.id",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meulaboh",
        addressRegion: "Aceh Barat, Aceh",
        addressCountry: "ID",
      },
      sameAs: [
        "https://www.instagram.com/pahamdigitall.id/",
        "https://www.tiktok.com/@pahamdigitall.id",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pahamdigital.online/#website",
      url: "https://pahamdigital.online",
      name: "Paham Digital Agency",
      publisher: {
        "@id": "https://pahamdigital.online/#organization",
      },
      inLanguage: "id-ID",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} font-body scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased selection:bg-[#F45B1A] selection:text-white"
        style={{
          backgroundColor: "#0B0807",
          color: "#F7F1EB",
          fontFamily: "var(--font-body)",
        }}
      >
        <Navbar />
        <ScrollRevealManager />
        <main className="flex-1 animate-page-entrance">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
