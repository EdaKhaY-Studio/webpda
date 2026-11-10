import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutJourneySection from "@/components/about/AboutJourneySection";
import AboutVisionMissionSection from "@/components/about/AboutVisionMissionSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutBeliefSection from "@/components/about/AboutBeliefSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import AboutSocialSection from "@/components/about/AboutSocialSection";

export const metadata: Metadata = {
  title: "Tentang Paham Digital Agency Aceh — Visi, Misi & Transformasi Digital",
  description:
    "Kenali Paham Digital Agency: digital agency berbasis di Aceh yang mendampingi bisnis & UMKM melalui website profesional, web application, dan AI Customer Service humanis.",
  keywords: [
    "Paham Digital Agency Aceh",
    "digital agency Aceh",
    "agency website Aceh",
    "tentang Paham Digital",
    "software house Aceh Barat",
    "konsultan digital Aceh",
  ],
  alternates: {
    canonical: "/tentang-kami/",
  },
  openGraph: {
    title: "Tentang Paham Digital Agency Aceh — Visi, Misi & Transformasi Digital",
    description:
      "Bukan sekadar membangun bisnis. Kami ingin menghadirkan manfaat nyata melalui transformasi digital, website profesional, web app, dan AI Customer Service humanis di Aceh.",
    url: "https://pahamdigital.online/tentang-kami/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Paham Digital Agency Aceh",
    description:
      "Perjalanan sebuah mimpi sederhana menjadi partner transformasi digital yang mendampingi pertumbuhan bisnis di Aceh.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://pahamdigital.online/tentang-kami/#webpage",
      url: "https://pahamdigital.online/tentang-kami/",
      name: "Tentang Paham Digital Agency Aceh",
      description:
        "Profil, visi, misi, dan nilai-nilai Paham Digital Agency dalam mendampingi transformasi digital bisnis dan UMKM di Aceh.",
      isPartOf: {
        "@id": "https://pahamdigital.online/#website",
      },
      about: {
        "@id": "https://pahamdigital.online/#organization",
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://pahamdigital.online/tentang-kami/#breadcrumb",
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
          name: "Tentang Kami",
          item: "https://pahamdigital.online/tentang-kami/",
        },
      ],
    },
  ],
};

export default function TentangKamiPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 01. Hero — Who We Are with Preserved 3 Pillars Cards */}
      <AboutHeroSection />

      {/* 02. Our Story — The Beginning of a Dream */}
      <AboutStorySection />

      {/* 03. Our Journey — From a Dream to a Purpose (Horizontal Desktop / Vertical Mobile Timeline) */}
      <AboutJourneySection />

      {/* 04. Unified Vision, Mission & Core Values Information Panel */}
      <AboutVisionMissionSection />

      {/* 06. PAHAM Values — 5 Core Principles (P-A-H-A-M) */}
      <AboutValuesSection />

      {/* 07. Brand Principles — What We Believe */}
      <AboutBeliefSection />

      {/* 08. Standalone Centered Social Media Section */}
      <AboutSocialSection />

      {/* 09. Final CTA — Call to Collaboration */}
      <AboutCTASection />
    </>
  );
}
