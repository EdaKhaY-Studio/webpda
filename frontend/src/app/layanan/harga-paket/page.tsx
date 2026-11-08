import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import ServicesPricingSection from "@/components/services/ServicesPricingSection";
import ServicesPaymentTimelineSection from "@/components/services/ServicesPaymentTimelineSection";
import ServicesComparisonSection from "@/components/services/ServicesComparisonSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Harga Paket & Perbandingan Layanan — Paham Digital Agency",
  description:
    "Bandingkan harga promo, spesifikasi teknis, dan fasilitas paket website profesional, WhatsApp AI Customer Service, dan web app Paham Digital Agency: Start, Suite, dan Elite.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/harga-paket/",
  },
  openGraph: {
    title: "Harga Paket & Perbandingan Layanan — Paham Digital Agency",
    description:
      "Bandingkan spesifikasi lengkap tiga paket andalan Paham Digital Agency: Meugah Digital Start, Meugah AI Business Suite, dan Meugah AI Business Elite.",
    url: "https://pahamdigital.online/layanan/harga-paket/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://pahamdigital.online/images/logo-paham-light.png",
        width: 1200,
        height: 630,
        alt: "Harga Paket Layanan Paham Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harga Paket & Perbandingan Layanan — Paham Digital Agency",
    description:
      "Investasi transparan untuk website profesional, WhatsApp AI, dan automasi bisnis.",
    images: ["https://pahamdigital.online/images/logo-paham-light.png"],
  },
};

export default function HargaPaketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            name: "Layanan",
            item: "https://pahamdigital.online/layanan/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Harga Paket & Perbandingan",
            item: "https://pahamdigital.online/layanan/harga-paket/",
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Paket Layanan Digital Paham Digital Agency",
        url: "https://pahamdigital.online/layanan/harga-paket/",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Meugah Digital Start",
            price: "985000",
            priceCurrency: "IDR",
            url: "https://pahamdigital.online/layanan/harga-paket/",
          },
          {
            "@type": "Offer",
            name: "Meugah AI Business Suite",
            price: "2850000",
            priceCurrency: "IDR",
            url: "https://pahamdigital.online/layanan/harga-paket/",
          },
          {
            "@type": "Offer",
            name: "Meugah AI Business Elite",
            price: "5789000",
            priceCurrency: "IDR",
            url: "https://pahamdigital.online/layanan/harga-paket/",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#0B0807] min-h-screen text-[#F7F1EB]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 01. PAGE HEADER & BREADCRUMBS ── */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-[#0B0807] border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-texture opacity-30 pointer-events-none" />
        <div className="container-site relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-outfit text-[#A99A90]">
              <li>
                <Link href="/" className="hover:text-[#F7F1EB] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li>
                <Link href="/layanan/" className="hover:text-[#F7F1EB] transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li className="text-[#F45B1A] font-medium" aria-current="page">
                Harga Paket
              </li>
            </ol>
          </nav>

          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] animate-pulse" />
            <span>PAHAM DIGITAL · PRICING & SPECIFICATIONS</span>
          </div>

          {/* Heading */}
          <h1 className="font-geom font-bold text-[32px] sm:text-[46px] lg:text-[54px] leading-[1.12] text-[#F7F1EB] tracking-tight mb-5 max-w-4xl">
            Investasi Transparan, Pilihan Tepat untuk{" "}
            <span className="text-[#F45B1A]">Pertumbuhan Bisnismu.</span>
          </h1>

          {/* Subheading */}
          <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-3xl">
            Bandingkan spesifikasi lengkap tiga paket andalan Paham Digital Agency: Meugah Digital Start, Meugah AI Business Suite, dan Meugah AI Business Elite secara objektif, transparan, dan tanpa biaya tersembunyi.
          </p>

          {/* Quick Back Link */}
          <div className="mt-6">
            <Link
              href="/layanan/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-outfit font-semibold text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#F45B1A]" />
              <span>Kembali ke Ringkasan Semua Layanan</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02. THREE PRICING PACKAGES (Cards + Expandable Details) ── */}
      <ServicesPricingSection />

      {/* ── 03. PAYMENT MILESTONES (50% / 30% / 20%) ── */}
      <ServicesPaymentTimelineSection />

      {/* ── 04. FULL COMPARISON MATRIX & UNIFIED GENERAL FAQ ── */}
      <ServicesComparisonSection />

      {/* ── 05. FINAL WHATSAPP CONSULTATION CTA ── */}
      <ServicesCTASection />
    </div>
  );
}
