import HeroSection from "@/components/home/HeroSection";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
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
      {/* 01. Hero — Asymmetric Editorial Composition */}
      <HeroSection />

      {/* 02. Brand Introduction */}
      <BrandIntroSection />

      {/* 03. Services — 5 categories editorial layout */}
      <ServicesSection />

      {/* 04. Selected Work / Portfolio */}
      <PortfolioSection />

      {/* 05. Working Process — horizontal timeline */}
      <ProcessSection />

      {/* 06. Blog / Digital Knowledge preview */}
      <BlogPreviewSection />

      {/* 07. Contact CTA */}
      <ContactCTASection />
    </>
  );
}
