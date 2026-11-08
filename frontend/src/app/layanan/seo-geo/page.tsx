import type { Metadata } from "next";
import Link from "next/link";
import {
  SearchCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  FileCode,
  LineChart,
  Network,
  CheckCircle2,
  ArrowUpRight,
  Bot,
} from "lucide-react";
import { SITE_CONFIG, buildWAUrl } from "@/lib/site-config";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Layanan Optimasi SEO & GEO Digital — Paham Digital Agency",
  description:
    "Layanan optimasi Technical SEO, Google Search Console, dan Generative Engine Optimization (GEO) agar bisnis Anda mudah ditemukan di Google Search dan mesin pencari AI.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/seo-geo/",
  },
  openGraph: {
    title: "Layanan Optimasi SEO & GEO Digital — Paham Digital Agency",
    description:
      "Optimasi website menyeluruh untuk Google Search dan mesin pencari AI generatif (ChatGPT, Claude, Perplexity, Gemini) dengan struktur data yang presisi.",
    url: "https://pahamdigital.online/layanan/seo-geo/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

const SEO_GEO_PILLARS = [
  {
    title: "Fondasi Technical SEO & Struktur Semantik",
    description:
      "Kode HTML5 bersih dengan hierarki heading logis (H1, H2, H3), meta tags deskriptif, dan URL canonical yang teratur untuk mempermudah perayapan mesin pencari.",
    icon: FileCode,
  },
  {
    title: "Integrasi Google Search Console Resmi",
    description:
      "Setup verifikasi kepemilikan domain, pengiriman sitemap XML, pemeriksaan status indeksasi, serta pemantauan kueri penelusuran riil di Google Search.",
    icon: LineChart,
  },
  {
    title: "Penerapan Structured Data (JSON-LD Schema)",
    description:
      "Skema data terstruktur untuk Organization, LocalBusiness, Service, BreadcrumbList, dan Article agar informasi bisnis tampil kaya di hasil penelusuran.",
    icon: Network,
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description:
      "Optimasi entitas, konteks fakta, dan konsistensi informasi digital bisnis agar mudah dipahami, dirujuk, dan disintesis oleh mesin penjawab AI (ChatGPT, Perplexity, Claude, Gemini).",
    icon: Bot,
  },
  {
    title: "Arsitektur Sitemap XML & File Robots.txt",
    description:
      "Konfigurasi file robots.txt dan dynamic sitemap.xml yang memberikan panduan perayapan jelas kepada web crawler mesin pencari modern.",
    icon: SearchCheck,
  },
  {
    title: "Performa Cepat & Aksesibilitas Mobile",
    description:
      "Memenuhi standar Core Web Vitals Google untuk memastikan halaman memuat instan, tidak bergeser secara visual, dan nyaman dioperasikan di smartphone.",
    icon: Sparkles,
  },
];

export default function SeoGeoPage() {
  const waUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi mengenai layanan Optimasi SEO & GEO untuk meningkatkan visibilitas website bisnis saya."
  );

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
            name: "SEO & GEO",
            item: "https://pahamdigital.online/layanan/seo-geo/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "SEO & GEO Optimization",
        provider: {
          "@type": "Organization",
          name: "Paham Digital Agency",
          url: "https://pahamdigital.online",
        },
        description:
          "Optimasi website teknis, struktur semantik, Google Search Console, dan Generative Engine Optimization untuk mesin pencari AI.",
        areaServed: "ID",
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

      {/* ── 01. HERO SECTION ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#0B0807] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-texture opacity-30 pointer-events-none" />
        <div className="container-site relative z-10">
          
          {/* Breadcrumb */}
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
                SEO & GEO
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>LAYANAN UTAMA · SEO & GEO OPTIMIZATION</span>
            </div>

            <h1 className="font-geom font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#F7F1EB] tracking-tight mb-5">
              Optimasi SEO & GEO: Ditemukan di{" "}
              <span className="text-[#F45B1A]">Google & Mesin AI.</span>
            </h1>

            <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8">
              Punya website saja tidak cukup jika calon pelanggan tidak bisa menemukannya. Kami mengoptimalkan website Anda dengan standar Technical SEO yang kokoh serta Generative Engine Optimization (GEO) agar bisnis Anda relevan di era pencarian Google dan platform AI modern.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#F45B1A]/25"
              >
                <span>Konsultasikan Optimasi SEO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F1EB] font-outfit font-semibold text-sm sm:text-base border border-white/10 hover:border-[#F45B1A]/40 transition-all"
              >
                <span>Lihat Paket Termasuk SEO/GEO</span>
                <ArrowUpRight className="w-4 h-4 text-[#F45B1A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. PILLARS GRID ── */}
      <section className="section-py bg-[#0B0807] border-b border-white/10">
        <div className="container-site">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block mb-2">
              PILAR STRATEGI DIGITAL
            </span>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB]">
              Fondasi Lengkap untuk Visibilitas Organik Jangka Panjang
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SEO_GEO_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B0807] border border-white/10 flex items-center justify-center mb-5 text-[#F45B1A]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. CROSS-LINK SECTION ── */}
      <section className="section-py bg-[#140E0B]/40 border-b border-white/10">
        <div className="container-site">
          <div className="max-w-3xl p-8 sm:p-10 rounded-3xl bg-[#17100D] border border-white/10">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F45B1A]/20 text-[#F45B1A] border border-[#F45B1A]/30 text-[10px] font-geom font-bold uppercase tracking-wider inline-block mb-3">
              TERINTEGRASI DI SETIAP PAKET
            </span>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] mb-3">
              SEO & GEO Siap Pakai Sejak Peluncuran
            </h2>
            <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed mb-6">
              Setiap paket Paham Digital Agency telah menyertakan fondasi optimasi: Basic SEO pada paket Start, Full Advanced SEO & GEO pada paket Suite, hingga Sitelinks Optimization pada paket Elite.
            </p>
            <Link
              href="/layanan/harga-paket/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-xs sm:text-sm font-outfit font-bold transition-all shadow-md shadow-[#F45B1A]/25"
            >
              <span>Bandingkan Fitur SEO di Semua Paket</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 04. FINAL CTA ── */}
      <ServicesCTASection />
    </div>
  );
}
