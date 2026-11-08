import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesCategoriesSection from "@/components/services/ServicesCategoriesSection";
import ServicesPricingSection from "@/components/services/ServicesPricingSection";
import ServicesPaymentTimelineSection from "@/components/services/ServicesPaymentTimelineSection";
import ServicesComparisonSection from "@/components/services/ServicesComparisonSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Layanan Paham Digital Agency | Website, AI, SEO & Automasi",
  description:
    "Jelajahi layanan Paham Digital Agency: pembuatan website profesional, web application, WhatsApp AI Customer Service, SEO, GEO, dan automasi bisnis untuk UMKM.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/",
  },
  openGraph: {
    title: "Layanan Paham Digital Agency | Website, AI & Automasi",
    description:
      "Solusi website profesional, web application, WhatsApp AI Customer Service, SEO, GEO, dan automasi untuk membantu bisnis berkembang.",
    url: "https://pahamdigital.online/layanan/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://pahamdigital.online/images/logo-paham-light.png",
        width: 1200,
        height: 630,
        alt: "Layanan Paham Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Paham Digital Agency",
    description:
      "Solusi digital untuk website, AI Customer Service, SEO, GEO, dan automasi bisnis.",
    images: ["https://pahamdigital.online/images/logo-paham-light.png"],
  },
};

export default function LayananPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pahamdigital.online/#organization",
        name: "Paham Digital Agency",
        url: "https://pahamdigital.online",
        logo: "https://pahamdigital.online/paham-logo-512.png",
        slogan: "Paham Bisnisnya, Otomatiskan Sistemnya.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+6282311307556",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["id", "en"],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://pahamdigital.online/layanan/#webpage",
        url: "https://pahamdigital.online/layanan/",
        name: "Layanan Paham Digital Agency | Website, AI, SEO & Automasi",
        description:
          "Jelajahi layanan Paham Digital Agency: pembuatan website profesional, web application, WhatsApp AI Customer Service, SEO, GEO, dan automasi bisnis untuk UMKM.",
        isPartOf: {
          "@id": "https://pahamdigital.online/#website",
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://pahamdigital.online/layanan/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://pahamdigital.online/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan Kami",
            item: "https://pahamdigital.online/layanan/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://pahamdigital.online/layanan/#service-web",
        name: "Professional Website Development",
        provider: {
          "@id": "https://pahamdigital.online/#organization",
        },
        description:
          "Pembuatan website company profile, katalog produk, dan landing page modern yang cepat, responsif, dan siap SEO.",
        areaServed: "ID",
      },
      {
        "@type": "Service",
        "@id": "https://pahamdigital.online/layanan/#service-webapp",
        name: "Website Application Development",
        provider: {
          "@id": "https://pahamdigital.online/#organization",
        },
        description:
          "Pengembangan aplikasi berbasis web khusus untuk membantu bisnis mengelola operasional, database, dan alur kerja digital.",
        areaServed: "ID",
      },
      {
        "@type": "Service",
        "@id": "https://pahamdigital.online/layanan/#service-ai",
        name: "WhatsApp AI Customer Service",
        provider: {
          "@id": "https://pahamdigital.online/#organization",
        },
        description:
          "Layanan asisten AI cerdas terintegrasi n8n dan WAHA untuk menjawab pertanyaan pelanggan via WhatsApp otomatis 24/7.",
        areaServed: "ID",
      },
      {
        "@type": "Service",
        "@id": "https://pahamdigital.online/layanan/#service-seo",
        name: "SEO & GEO Optimization",
        provider: {
          "@id": "https://pahamdigital.online/#organization",
        },
        description:
          "Optimasi website teknis, struktur semantik, Google Search Console, dan Generative Engine Optimization untuk mesin pencari AI.",
        areaServed: "ID",
      },
      {
        "@type": "Offer",
        "@id": "https://pahamdigital.online/layanan/#offer-start",
        name: "Meugah Digital Start",
        description:
          "Paket website profesional untuk bisnis yang ingin membangun kehadiran digital: maksimal 3 halaman, domain .COM gratis 1 tahun, hosting 1 tahun, SSL, backup, katalog produk, dan WhatsApp Direct Chat.",
        price: "985000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: "https://pahamdigital.online/layanan/harga-paket/",
        seller: {
          "@id": "https://pahamdigital.online/#organization",
        },
      },
      {
        "@type": "Offer",
        "@id": "https://pahamdigital.online/layanan/#offer-suite",
        name: "Meugah AI Business Suite",
        description:
          "Solusi digital terintegrasi: website profesional maksimal 5 halaman, WhatsApp AI Customer Service, saldo AI US$26.44, automasi bisnis, 1 Web App Custom, dan SEO & GEO.",
        price: "2850000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: "https://pahamdigital.online/layanan/harga-paket/",
        seller: {
          "@id": "https://pahamdigital.online/#organization",
        },
      },
      {
        "@type": "Offer",
        "@id": "https://pahamdigital.online/layanan/#offer-elite",
        name: "Meugah AI Business Elite",
        description:
          "Solusi digital komprehensif: website profesional dengan lingkup halaman sesuai kebutuhan bisnis, WhatsApp AI Customer Service, saldo AI US$85.125, dan 2 Web App Custom.",
        price: "5789000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: "https://pahamdigital.online/layanan/harga-paket/",
        seller: {
          "@id": "https://pahamdigital.online/#organization",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 01. Services Hero Section with Abstract Digital Ecosystem Visual */}
      <ServicesHeroSection />

      {/* 02. Four Main Service Categories (2x2 Grid) */}
      <ServicesCategoriesSection />

      {/* 03. Three Pricing Packages */}
      <ServicesPricingSection />

      {/* 03.B Payment Milestones Timeline (50% / 30% / 20%) */}
      <ServicesPaymentTimelineSection />

      {/* 04. Package Comparison Matrix & Important Terms Accordion */}
      <ServicesComparisonSection />

      {/* 05. Final WhatsApp Consultation CTA */}
      <ServicesCTASection />
    </>
  );
}
