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
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  alternates: { canonical: "/" },
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
