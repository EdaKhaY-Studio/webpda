import HeroSection from "@/components/home/HeroSection";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import ProcessSection from "@/components/home/ProcessSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
  description:
    "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
  alternates: { canonical: "/" },
  keywords: [
    "Paham Digital Agency Aceh",
    "Digital Agency Aceh",
    "jasa pembuatan website di Aceh",
    "jasa pembuatan website profesional",
    "AI Customer Service humanis di Aceh",
    "Web Application Aceh",
    "automasi bisnis Aceh",
  ],
  openGraph: {
    title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
    description:
      "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
    url: "https://pahamdigital.online",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01. Hero — Full Viewport Asymmetric Editorial Composition */}
      <HeroSection />

      {/* 02. Brand Introduction */}
      <BrandIntroSection />

      {/* 03. Services — 5 categories editorial layout */}
      <ServicesSection />

      {/* 04. Selected Work / Portfolio */}
      <PortfolioSection />

      {/* 05. Trusted Brands / Client Collaboration */}
      <TrustedBrandsSection />

      {/* 06. Working Process — horizontal timeline */}
      <ProcessSection />

      {/* 07. Blog / Digital Knowledge preview */}
      <BlogPreviewSection />

      {/* 08. FAQ — Good Questions, Clear Answers */}
      <FAQSection />

      {/* 09. Contact CTA */}
      <ContactCTASection />
    </>
  );
}
