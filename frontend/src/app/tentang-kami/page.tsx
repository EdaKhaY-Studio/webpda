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
  title: "Tentang Kami — Cerita, Visi & Nilai Paham Digital Agency",
  description:
    "Kenali Paham Digital Agency: cerita awal sebuah mimpi dari buku harian, visi, misi, serta nilai PAHAM dalam mendampingi transformasi digital bisnis dan UMKM.",
  alternates: {
    canonical: "/tentang-kami/",
  },
  openGraph: {
    title: "Tentang Kami — Paham Digital Agency",
    description:
      "Bukan sekadar membangun bisnis. Kami ingin menghadirkan manfaat nyata melalui transformasi digital, website profesional, web app, dan AI.",
    url: "https://pahamdigital.online/tentang-kami/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — Paham Digital Agency",
    description:
      "Perjalanan sebuah mimpi sederhana menjadi partner transformasi digital yang mendampingi pertumbuhan bisnis.",
  },
};

export default function TentangKamiPage() {
  return (
    <>
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
