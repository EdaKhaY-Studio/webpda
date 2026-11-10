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
  title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
  description:
    "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL("https://pahamdigital.online"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
    description:
      "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    url: "https://pahamdigital.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
    description:
      "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
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
    shortcut: "/favicon.ico",
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
      alternateName: "Paham Digital Agency Aceh",
      url: "https://pahamdigital.online",
      logo: "https://pahamdigital.online/paham-logo-512.png",
      description:
        "Partner solusi digital di Aceh untuk jasa pembuatan website profesional, web application, AI customer service humanis, automasi bisnis, dan optimasi SEO.",
      telephone: "+6282311307556",
      email: "halo@pahamdigital.id",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meulaboh",
        addressRegion: "Aceh Barat, Aceh",
        addressCountry: "ID",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Aceh" },
        { "@type": "City", name: "Banda Aceh" },
        { "@type": "City", name: "Meulaboh" },
        { "@type": "AdministrativeArea", name: "Aceh Barat" },
        { "@type": "Country", name: "Indonesia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Paham Digital Agency",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Website Profesional",
              description:
                "Layanan perancangan dan pembuatan website modern, cepat, mobile-friendly, dan SEO-ready untuk bisnis dan UMKM di Aceh.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pengembangan Web Application",
              description:
                "Pembangunan aplikasi web kustom untuk sistem operasional bisnis, portal pelanggan, dan dashboard manajemen.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Customer Service Humanis",
              description:
                "Integrasi AI customer service cerdas dengan pendekatan human-centered di WhatsApp untuk merespons pertanyaan pelanggan secara natural 24/7.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automasi Bisnis",
              description:
                "Otomatisasi alur kerja digital, sinkronisasi data antar tools, dan efisiensi operasional bisnis.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Optimasi SEO & Local Search",
              description:
                "Optimasi mesin pencari teknis dan lokal untuk meningkatkan peringkat website di pencarian Google Aceh dan nasional.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization (GEO)",
              description:
                "Optimasi struktur informasi dan entitas data agar bisnis direferensikan secara akurat oleh mesin AI generatif seperti ChatGPT, Claude, dan Perplexity.",
            },
          },
        ],
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
