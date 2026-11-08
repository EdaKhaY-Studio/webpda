"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Check, ChevronDown, X, ArrowUpRight } from "lucide-react";
import { buildWAUrl } from "@/lib/site-config";

// ── APPROVED SPECIFICATION DATA ──

const START_PACKAGE = {
  id: "start" as const,
  badge: "STARTER PACKAGE",
  title: "MEUGAH DIGITAL START",
  headline: "Mulai Bangun Identitas Digital Bisnismu!",
  description:
    "Paket website profesional untuk bisnis yang ingin membangun kehadiran digitalnya. Pilihan tepat untuk UMKM dan profil usaha yang ingin tampil kredibel di dunia digital.",
  price: {
    original: "Rp1.499.000",
    promo: "Rp985.000",
    label: "SPECIAL LAUNCHING PROMO",
    tag: "Khusus 3 klien pertama!",
  },
  previewFeatures: [
    "Website profesional — maksimal 3 halaman.",
    "1 domain .COM gratis selama 1 tahun & Hosting 1 tahun.",
    "SSL & Backup termasuk.",
    "Desain modern & responsif mobile-friendly.",
    "WhatsApp Direct Chat & Basic SEO Setup.",
  ],
  allFeatures: [
    "Website profesional — maksimal 3 halaman.",
    "1 domain .COM gratis selama 1 tahun.",
    "Hosting 1 tahun.",
    "SSL & Backup termasuk.",
    "Desain modern & responsif.",
    "Katalog produk sederhana.",
    "WhatsApp Direct Chat.",
    "Integrasi media sosial.",
    "Basic SEO Optimization.",
    "Setup Google Search Console.",
    "Maksimal 3 putaran revisi sebelum penyerahan.",
    "14 hari Free Bug Maintenance.",
  ],
  whatsAppNote:
    "Integrasi tombol WhatsApp untuk memudahkan pelanggan menghubungi bisnis secara langsung. Paket ini tidak mencakup WhatsApp AI Customer Service, n8n, WAHA, atau respon otomatis AI.",
  targetAudience:
    "UMKM, toko online, bisnis lokal, bisnis rumahan, dan penyedia jasa yang ingin memiliki website sendiri.",
  supportingText: "Mulai bangun identitas digital bisnismu.",
  waMessage:
    "Halo Paham Digital Agency, saya tertarik dengan paket MEUGAH DIGITAL START. Saya ingin mengetahui informasi lebih lanjut.",
};

const SUITE_PACKAGE = {
  id: "suite" as const,
  badge: "FLAGSHIP PACKAGE",
  promoTag: "10 KLIEN TERCEPAT",
  title: "MEUGAH AI BUSINESS SUITE",
  headline: "Bisnismu Lebih Modern, Pelayanan Lebih Otomatis!",
  description:
    "Solusi digital terintegrasi yang menggabungkan website profesional, WhatsApp AI Customer Service, automasi bisnis, dan Web App Custom.",
  price: {
    original: "Rp4.500.000",
    promo: "Rp2.850.000",
    label: "SPECIAL PROMO LAUNCHING — 10 KLIEN TERCEPAT",
    tag: "Hemat Rp1.650.000!",
  },
  previewFeatures: [
    "Website profesional — maksimal 5 halaman.",
    "1 domain gratis pilihan .COM atau .ID selama 1 tahun & Hosting 1 tahun.",
    "SSL & Backup termasuk.",
    "WhatsApp AI Customer Service — OpenAI (Kredit AI US$26,44).",
    "Server n8n + WAHA 1 tahun & Web App Custom.",
  ],
  allFeatures: [
    "Website profesional — maksimal 5 halaman.",
    "1 domain gratis pilihan .COM atau .ID selama 1 tahun.",
    "Hosting 1 tahun.",
    "SSL & Backup termasuk.",
    "Desain UI/UX modern dan responsif.",
    "Katalog produk interaktif.",
    "Integrasi WhatsApp dan media sosial.",
    "WhatsApp AI Customer Service — OpenAI.",
    "Kredit AI US$26,44.",
    "Server n8n + WAHA selama 1 tahun.",
    "AI dengan karakter sesuai bisnismu.",
    "Otomatisasi pelayanan pelanggan.",
    "Advanced SEO Optimization.",
    "Google Search Console Setup.",
    "GEO Optimization.",
    "Web App Custom sesuai ketentuan paket.",
    "Konsultasi strategi digital.",
  ],
  aiCreditNote:
    "Saldo awal untuk penggunaan AI. Pemakaian bergantung pada jumlah dan panjang percakapan. Jika kredit habis, biaya pengisian ulang menjadi tanggung jawab pelanggan.",
  aiModelNote:
    "AI Customer Service terhubung dengan WhatsApp melalui integrasi n8n dan WAHA untuk membantu mengotomatisasi pelayanan pelanggan. Model yang digunakan: OpenAI GPT-4o mini atau model GPT mini yang tersedia dan benar-benar dikonfigurasi untuk proyek.",
  domainNote:
    "Klien dapat memilih satu domain gratis dengan ekstensi .COM atau .ID untuk masa aktif satu tahun. Perpanjangan setelah masa gratis mengikuti harga dan ketentuan penyedia domain.",
  bonuses: [
    "7 kali revisi website.",
    "10 kali revisi konfigurasi AI.",
    "6 bulan Free Bug Maintenance.",
    "Website Apps Custom.",
  ],
  targetAudience:
    "UMKM, toko online, bisnis kuliner, fashion, retail, dan bisnis jasa yang ingin mulai menggunakan teknologi AI.",
  supportingText:
    "Website profesional, WhatsApp AI, dan automasi dalam satu solusi.",
  waMessage:
    "Halo Paham Digital Agency, saya tertarik dengan paket MEUGAH AI BUSINESS SUITE. Saya ingin berkonsultasi mengenai fasilitas paket ini.",
};

const ELITE_PACKAGE = {
  id: "elite" as const,
  badge: "ELITE PACKAGE",
  promoTag: "15 KLIEN TERCEPAT",
  title: "MEUGAH AI BUSINESS ELITE",
  headline: "Solusi Digital Komprehensif untuk Bisnis yang Ingin Naik Level!",
  description:
    "Solusi digital komprehensif yang menggabungkan website profesional, AI Customer Service, dan 2 Web App Custom sesuai kebutuhan bisnis.",
  price: {
    original: "Rp6.999.000",
    promo: "Rp5.789.000",
    label: "SPECIAL PROMO — 15 KLIEN TERCEPAT",
    tag: "Hemat Rp1.210.000!",
  },
  previewFeatures: [
    "Website profesional (lingkup halaman disesuaikan kebutuhan bisnis) + Hosting 3 tahun.",
    "1 domain gratis pilihan .COM, .ID, atau .CO.ID selama 3 tahun.",
    "SSL & Backup termasuk + Domain Shield.",
    "WhatsApp AI Customer Service — Claude Haiku 4.5 (Kredit AI US$85,125).",
    "Server n8n + WAHA 3 tahun & 2 Web App Custom.",
  ],
  allFeatures: [
    "Website profesional dengan lingkup halaman disesuaikan kebutuhan bisnis.",
    "Hosting 3 tahun.",
    "1 domain gratis pilihan .COM, .ID, atau .CO.ID selama 3 tahun.",
    "Domain Shield sesuai masa pembelian.",
    "SSL & Backup termasuk.",
    "WhatsApp AI Customer Service — Claude Haiku 4.5.",
    "Kredit AI awal US$85,125.",
    "Integrasi WhatsApp melalui WAHA.",
    "Workflow automation menggunakan n8n.",
    "Knowledge Base khusus bisnis.",
    "Server n8n + WAHA selama 3 tahun.",
    "Advanced SEO Optimization.",
    "Google Search Console & Sitelinks Optimization.",
    "GEO (Generative Engine Optimization).",
    "2 Web App Custom sesuai kebutuhan bisnis.",
    "Hak penggunaan Web App tanpa biaya lisensi tambahan selamanya.",
    "Pelatihan penggunaan website, AI, dan Web App.",
  ],
  aiCreditNote:
    "Kredit AI merupakan saldo awal, bukan penggunaan tanpa batas. Pemakaian bergantung pada penggunaan model dan jumlah percakapan. Pengisian ulang setelah saldo habis menjadi tanggung jawab pelanggan.",
  aiModelNote:
    "AI Customer Service menggunakan Claude Haiku 4.5 dan terhubung dengan WhatsApp melalui integrasi n8n dan WAHA untuk mendukung pelayanan pelanggan serta otomatisasi bisnis.",
  webAppUsageClarification:
    "Hak penggunaan Web App tanpa biaya lisensi tambahan selamanya. (Pelanggan menerima hak penggunaan aplikasi web kustom yang diserahkan tanpa biaya lisensi software tambahan. Tidak mencakup hosting gratis selamanya, infrastruktur server gratis selamanya, maintenance gratis selamanya, pengembangan fitur baru selamanya, atau layanan pihak ketiga gratis selamanya).",
  premiumBenefits: [
    "9 kali revisi website.",
    "11 kali revisi konfigurasi AI.",
    "7 bulan Free Bug Maintenance.",
    "1 bulan pembinaan teknologi digital.",
    "Dokumentasi dan bantuan teknis.",
  ],
  targetAudience:
    "Perusahaan, bisnis berkembang, toko online, retail, dan usaha jasa yang membutuhkan website profesional, AI Customer Service, serta aplikasi digital untuk mendukung operasional.",
  closingStatement:
    "Bukan sekadar punya website. Saatnya membangun sistem digital yang lebih cerdas!",
  conditions: [
    "Catatan: Kredit AI merupakan saldo awal, bukan penggunaan tanpa batas. Pengisian ulang menjadi tanggung jawab pelanggan.",
    "Domain, hosting, server, dan layanan pihak ketiga mengikuti masa aktif masing-masing (hosting & domain selama 3 tahun). Dua Web App memiliki ruang lingkup yang disepakati; penggunaan selamanya tidak berarti hosting dan maintenance gratis selamanya.",
  ],
  supportingText:
    "Solusi digital premium untuk kebutuhan bisnis yang lebih kompleks.",
  waMessage:
    "Halo Paham Digital Agency, saya tertarik dengan MEUGAH AI BUSINESS ELITE dengan harga promo Rp5.789.000. Saya ingin berkonsultasi mengenai fitur website profesional, AI Customer Service, dan dua Web App Custom.",
};

// ── STANDARDIZED PACKAGE CTA BUTTON ──
interface PackageCTAProps {
  href: string;
  supportingText: string;
}

function PackageCTA({ href, supportingText }: PackageCTAProps) {
  return (
    <div className="flex flex-col items-center w-full mt-auto pt-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 w-full h-[54px] px-6 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-[#F7F1EB] font-geom font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#F45B1A]/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 group text-center"
        aria-label="Konsultasikan Paket Ini via WhatsApp"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="shrink-0 transition-transform group-hover:scale-110"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>KONSULTASIKAN PAKET INI</span>
      </a>
      <p className="font-outfit text-xs text-[#A99A90] text-center leading-relaxed mt-2.5 max-w-[320px] mx-auto min-h-[36px] flex items-center justify-center">
        {supportingText}
      </p>
    </div>
  );
}

export default function ServicesPricingSection() {
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [expandedPackage, setExpandedPackage] = useState<"start" | "suite" | "elite" | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

  // WhatsApp URLs
  const waStartUrl = buildWAUrl(START_PACKAGE.waMessage);
  const waSuiteUrl = buildWAUrl(SUITE_PACKAGE.waMessage);
  const waEliteUrl = buildWAUrl(ELITE_PACKAGE.waMessage);

  // Track scroll direction for bidirectional animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollYRef.current;
      if (Math.abs(diff) > 8) {
        setScrollDirection(diff > 0 ? "down" : "up");
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for bidirectional entrance/re-entry
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          setIsInView(true);
        } else if (!entry.isIntersecting) {
          setIsInView(false);
        }
      },
      { threshold: [0, 0.12, 0.25], rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle toggling the detail expansion panel
  const handleToggleExpand = useCallback(
    (pkgId: "start" | "suite" | "elite") => {
      if (expandedPackage === pkgId) {
        setExpandedPackage(null);
      } else {
        setExpandedPackage(pkgId);
        setTimeout(() => {
          if (detailPanelRef.current) {
            const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            detailPanelRef.current.scrollIntoView({
              behavior: isReducedMotion ? "auto" : "smooth",
              block: "nearest",
            });
          }
        }, 150);
      }
    },
    [expandedPackage]
  );

  // Helper to compute card animation state based on scroll direction
  const getCardAnimStyle = (cardIndex: number) => {
    const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      return {};
    }

    // Delays: 140ms stagger per card
    const delayDown = `${100 + cardIndex * 140}ms`;
    const delayUp = `${100 + (2 - cardIndex) * 140}ms`;
    const delay = scrollDirection === "down" ? delayDown : delayUp;

    return {
      transitionDelay: isInView ? delay : "0ms",
    };
  };

  const getCardAnimClass = () => {
    if (isInView) {
      return "opacity-100 translate-y-0 scale-100";
    }
    return scrollDirection === "down"
      ? "opacity-0 translate-y-[25px] scale-[0.98]"
      : "opacity-0 -translate-y-[20px] scale-[0.98]";
  };

  return (
    <section
      ref={sectionRef}
      id="paket-harga"
      className="relative section-py bg-[#0B0807] bg-grid-texture border-b border-white/10 scroll-mt-24 overflow-hidden"
      aria-labelledby="pricing-section-title"
    >
      {/* Background glow accent behind active card */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F45B1A]/[0.05] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isInView
              ? "opacity-100 translate-y-0"
              : scrollDirection === "down"
              ? "opacity-0 translate-y-[25px]"
              : "opacity-0 -translate-y-[20px]"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>OUR PACKAGES</span>
          </div>

          <h2
            id="pricing-section-title"
            className="font-geom font-bold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.12] text-[#F7F1EB] tracking-tight mb-5"
          >
            Temukan Paket yang{" "}
            <span className="text-[#F45B1A]">
              Tepat untuk Bisnismu.
            </span>
          </h2>

          <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
            Mulai dari membangun identitas digital hingga mengintegrasikan teknologi AI. Pilih solusi yang sesuai dengan kebutuhan dan perkembangan bisnismu.
          </p>
        </div>

        {/* ── 3 PRICING CARDS ROW (EQUAL ALIGNMENT · FULLY VISIBLE · BIDIRECTIONAL SCROLL MOTION) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          
          {/* ── CARD 01: MEUGAH DIGITAL START ── */}
          <div
            className={`flex flex-col h-full p-6 sm:p-7 rounded-3xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.5)] ${
              expandedPackage === "start" ? "border-[#F45B1A]/70 ring-1 ring-[#F45B1A]/50" : ""
            } ${getCardAnimClass()}`}
            style={getCardAnimStyle(0)}
          >
            {/* 1. Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-bold mb-3 w-fit">
              {START_PACKAGE.badge}
            </div>

            {/* 2. Title */}
            <h3 className="font-geom font-bold text-2xl sm:text-[26px] text-[#F7F1EB] mb-1">
              {START_PACKAGE.title}
            </h3>

            {/* 3. Headline & Description */}
            <div className="font-geom font-bold text-sm text-[#F45B1A] mb-2">
              {START_PACKAGE.headline}
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed mb-5 min-h-[48px]">
              {START_PACKAGE.description}
            </p>

            {/* 4. Price Area */}
            <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10 mb-5 min-h-[128px] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
                  {START_PACKAGE.price.label}
                </span>
                <span className="text-xs sm:text-sm font-outfit text-[#A99A90] line-through">
                  {START_PACKAGE.price.original}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-geom font-extrabold text-3xl sm:text-4xl text-[#F7F1EB]">
                  {START_PACKAGE.price.promo}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F45B1A]/15 border border-[#F45B1A]/30 text-[11px] font-geom font-bold text-[#F7F1EB] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                <span>{START_PACKAGE.price.tag}</span>
              </div>
            </div>

            {/* 5. Concise Feature Preview */}
            <div className="space-y-2.5 mb-4 flex-1">
              <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                FASILITAS UTAMA:
              </div>
              <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                {START_PACKAGE.previewFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Baca Selengkapnya / Tutup Detail Control */}
            <button
              type="button"
              onClick={() => handleToggleExpand("start")}
              aria-expanded={expandedPackage === "start"}
              aria-controls="pricing-detail-panel"
              className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-geom font-bold uppercase tracking-wider transition-all duration-300 mb-2 ${
                expandedPackage === "start"
                  ? "bg-[#F45B1A] text-[#F7F1EB] shadow-md shadow-[#F45B1A]/30"
                  : "bg-white/5 hover:bg-[#F45B1A]/15 text-[#F45B1A] border border-[#F45B1A]/30 hover:border-[#F45B1A]"
              }`}
            >
              <span>{expandedPackage === "start" ? "TUTUP DETAIL" : "BACA SELENGKAPNYA"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expandedPackage === "start" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* 7 & 8. Standardized CTA Button & Supporting Caption */}
            <PackageCTA
              href={waStartUrl}
              supportingText={START_PACKAGE.supportingText}
            />
          </div>

          {/* ── CARD 02: MEUGAH AI BUSINESS SUITE (RECOMMENDED · FLAGSHIP) ── */}
          <div
            className={`flex flex-col h-full p-6 sm:p-7 rounded-3xl bg-[#17100D] border-2 border-[#F45B1A] relative shadow-[0_20px_50px_rgba(244,91,26,0.18)] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
              expandedPackage === "suite" ? "ring-2 ring-[#F45B1A]" : ""
            } ${getCardAnimClass()}`}
            style={getCardAnimStyle(1)}
          >
            {/* Top Recommended Pill Banner (Clean solid orange pill, text-only) */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full bg-[#F45B1A] text-[#F7F1EB] text-[11px] font-geom font-bold uppercase tracking-wider shadow-md shadow-[#F45B1A]/30 whitespace-nowrap z-20">
              RECOMMENDED
            </div>

            {/* 1. Badges */}
            <div className="flex items-center justify-between gap-2 mt-1 mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F45B1A]/20 border border-[#F45B1A]/40 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
                {SUITE_PACKAGE.badge}
              </span>
              <span className="text-[11px] font-geom font-extrabold text-[#16A34A] bg-[#16A34A]/15 border border-[#16A34A]/30 px-2.5 py-0.5 rounded-full">
                {SUITE_PACKAGE.promoTag}
              </span>
            </div>

            {/* 2. Title */}
            <h3 className="font-geom font-bold text-2xl sm:text-[26px] text-[#F7F1EB] mb-1">
              {SUITE_PACKAGE.title}
            </h3>

            {/* 3. Headline & Description */}
            <div className="font-geom font-bold text-sm text-[#F45B1A] mb-2">
              {SUITE_PACKAGE.headline}
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed mb-5 min-h-[48px]">
              {SUITE_PACKAGE.description}
            </p>

            {/* 4. Price Area */}
            <div className="p-4 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/40 shadow-inner mb-5 min-h-[128px] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
                  {SUITE_PACKAGE.price.label}
                </span>
                <span className="text-xs sm:text-sm font-outfit text-[#A99A90] line-through">
                  {SUITE_PACKAGE.price.original}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-geom font-extrabold text-3xl sm:text-4xl text-[#F7F1EB]">
                  {SUITE_PACKAGE.price.promo}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#16A34A]/15 border border-[#16A34A]/30 text-[11px] font-geom font-bold text-[#16A34A] w-fit">
                <span>{SUITE_PACKAGE.price.tag}</span>
              </div>
            </div>

            {/* 5. Concise Feature Preview */}
            <div className="space-y-2.5 mb-4 flex-1">
              <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                FASILITAS UTAMA:
              </div>
              <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                {SUITE_PACKAGE.previewFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Baca Selengkapnya / Tutup Detail Control */}
            <button
              type="button"
              onClick={() => handleToggleExpand("suite")}
              aria-expanded={expandedPackage === "suite"}
              aria-controls="pricing-detail-panel"
              className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-geom font-bold uppercase tracking-wider transition-all duration-300 mb-2 ${
                expandedPackage === "suite"
                  ? "bg-[#F45B1A] text-[#F7F1EB] shadow-md shadow-[#F45B1A]/30"
                  : "bg-white/5 hover:bg-[#F45B1A]/15 text-[#F45B1A] border border-[#F45B1A]/30 hover:border-[#F45B1A]"
              }`}
            >
              <span>{expandedPackage === "suite" ? "TUTUP DETAIL" : "BACA SELENGKAPNYA"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expandedPackage === "suite" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* 7 & 8. Standardized CTA Button & Supporting Caption */}
            <PackageCTA
              href={waSuiteUrl}
              supportingText={SUITE_PACKAGE.supportingText}
            />
          </div>

          {/* ── CARD 03: MEUGAH AI BUSINESS ELITE (NEW COMPLETE SPECIFICATION) ── */}
          <div
            className={`flex flex-col h-full p-6 sm:p-7 rounded-3xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.5)] ${
              expandedPackage === "elite" ? "border-[#F45B1A]/70 ring-1 ring-[#F45B1A]/50" : ""
            } ${getCardAnimClass()}`}
            style={getCardAnimStyle(2)}
          >
            {/* 1. Badge & Promo indicator */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-bold w-fit">
                {ELITE_PACKAGE.badge}
              </span>
              <span className="text-[11px] font-geom font-extrabold text-[#16A34A] bg-[#16A34A]/15 border border-[#16A34A]/30 px-2.5 py-0.5 rounded-full">
                {ELITE_PACKAGE.promoTag}
              </span>
            </div>

            {/* 2. Title */}
            <h3 className="font-geom font-bold text-2xl sm:text-[26px] text-[#F7F1EB] mb-1">
              {ELITE_PACKAGE.title}
            </h3>

            {/* 3. Headline & Description */}
            <div className="font-geom font-bold text-sm text-[#F45B1A] mb-2">
              {ELITE_PACKAGE.headline}
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed mb-5 min-h-[48px]">
              {ELITE_PACKAGE.description}
            </p>

            {/* 4. Price Area */}
            <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10 mb-5 min-h-[128px] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
                  {ELITE_PACKAGE.price.label}
                </span>
                <span className="text-xs sm:text-sm font-outfit text-[#A99A90] line-through">
                  {ELITE_PACKAGE.price.original}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-geom font-extrabold text-3xl sm:text-4xl text-[#F7F1EB]">
                  {ELITE_PACKAGE.price.promo}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#16A34A]/15 border border-[#16A34A]/30 text-[11px] font-geom font-bold text-[#16A34A] w-fit">
                <span>{ELITE_PACKAGE.price.tag}</span>
              </div>
            </div>

            {/* 5. Concise Feature Preview */}
            <div className="space-y-2.5 mb-4 flex-1">
              <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                FASILITAS UTAMA:
              </div>
              <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                {ELITE_PACKAGE.previewFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Baca Selengkapnya / Tutup Detail Control */}
            <button
              type="button"
              onClick={() => handleToggleExpand("elite")}
              aria-expanded={expandedPackage === "elite"}
              aria-controls="pricing-detail-panel"
              className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-geom font-bold uppercase tracking-wider transition-all duration-300 mb-2 ${
                expandedPackage === "elite"
                  ? "bg-[#F45B1A] text-[#F7F1EB] shadow-md shadow-[#F45B1A]/30"
                  : "bg-white/5 hover:bg-[#F45B1A]/15 text-[#F45B1A] border border-[#F45B1A]/30 hover:border-[#F45B1A]"
              }`}
            >
              <span>{expandedPackage === "elite" ? "TUTUP DETAIL" : "BACA SELENGKAPNYA"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expandedPackage === "elite" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* 7 & 8. Standardized CTA Button & Supporting Caption */}
            <PackageCTA
              href={waEliteUrl}
              supportingText={ELITE_PACKAGE.supportingText}
            />
          </div>

        </div>

        {/* ── EXPANDABLE DETAIL PANEL (POSITIONED DIRECTLY UNDERNEATH THE COMPLETE 3-CARD GRID) ── */}
        <div
          ref={detailPanelRef}
          id="pricing-detail-panel"
          aria-live="polite"
          className={`w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expandedPackage
              ? "max-h-[4000px] opacity-100 mt-8 sm:mt-12"
              : "max-h-0 opacity-0 overflow-hidden pointer-events-none mt-0"
          }`}
        >
          {expandedPackage && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#17100D] border-2 border-[#F45B1A]/40 shadow-[0_24px_60px_rgba(0,0,0,0.7)] relative">
              
              {/* Header Bar: Package Title, Badge & Close Control */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
                      SPESIFIKASI LENGKAP & FASILITAS DETAIL
                    </span>
                    <span className="text-[#A99A90] text-xs">·</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-geom uppercase tracking-wider text-[#D5CBC3]">
                      {expandedPackage === "start"
                        ? START_PACKAGE.badge
                        : expandedPackage === "suite"
                        ? "FLAGSHIP PACKAGE · RECOMMENDED"
                        : ELITE_PACKAGE.badge}
                    </span>
                  </div>
                  <h3 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB]">
                    {expandedPackage === "start"
                      ? START_PACKAGE.title
                      : expandedPackage === "suite"
                      ? SUITE_PACKAGE.title
                      : ELITE_PACKAGE.title}
                  </h3>
                  <p className="font-outfit text-sm text-[#A99A90] mt-1">
                    {expandedPackage === "start"
                      ? "Investasi Rp985.000 (Harga normal Rp1.499.000 · Khusus 3 klien pertama)"
                      : expandedPackage === "suite"
                      ? "Investasi Promo Rp2.850.000 (Harga normal Rp4.500.000 · Hemat Rp1.650.000)"
                      : "Investasi Promo Rp5.789.000 (Harga normal Rp6.999.000 · Hemat Rp1.210.000 · 15 Klien Tercepat)"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setExpandedPackage(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-geom font-bold uppercase tracking-wider text-[#D5CBC3] hover:text-[#F45B1A] transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Tutup Detail</span>
                </button>
              </div>

              {/* ── EXPANDED CONTENT: PACKAGE SPECIFIC BREAKDOWN ── */}
              
              {/* 1. START PACKAGE FULL DETAILS */}
              {expandedPackage === "start" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: All Features */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="font-geom font-bold text-sm uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                      YANG KAMU DAPATKAN ({START_PACKAGE.allFeatures.length} FASILITAS LENGKAP):
                    </div>
                    <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                      {START_PACKAGE.allFeatures.map((feat, idx) => {
                        const isWhatsApp = feat.includes("WhatsApp Direct Chat");

                        return (
                          <li key={idx} className="flex flex-col gap-1.5">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                            {isWhatsApp && (
                              <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-white/10">
                                <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block mb-0.5 text-[10px]">
                                  WHATSAPP INTEGRATION:
                                </span>
                                {START_PACKAGE.whatsAppNote}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Column: Conditions, Target Audience & Guarantees */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Target Audience Box */}
                    <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10">
                      <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] mb-1.5">
                        COCOK UNTUK:
                      </div>
                      <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                        {START_PACKAGE.targetAudience}
                      </p>
                    </div>

                    {/* Terms & Guarantees */}
                    <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10 space-y-2">
                      <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB]">
                        KETENTUAN PENGERJAAN & DUKUNGAN:
                      </div>
                      <ul className="space-y-2 text-xs font-outfit text-[#A99A90] leading-relaxed">
                        <li>• Pengerjaan terstruktur dengan panduan komunikasi langsung via WhatsApp.</li>
                        <li>• Maksimal 3 putaran revisi minor sebelum serah terima aset final.</li>
                        <li>• Gratis 14 hari pemeliharaan bug (*bug maintenance*) setelah serah terima.</li>
                        <li>• Penyerahan kredensial lengkap akun domain dan hosting untuk kepemilikan 100%.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. SUITE PACKAGE FULL DETAILS */}
              {expandedPackage === "suite" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: All Features with Detailed Notes */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="font-geom font-bold text-sm uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                      YANG KAMU DAPATKAN ({SUITE_PACKAGE.allFeatures.length} FASILITAS LENGKAP):
                    </div>
                    <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                      {SUITE_PACKAGE.allFeatures.map((feat, idx) => {
                        const isDomain = feat.includes("1 domain gratis pilihan");
                        const isAIModel = feat.includes("WhatsApp AI Customer Service");
                        const isAICredit = feat.includes("Kredit AI US$26,44");

                        return (
                          <li key={idx} className="flex flex-col gap-1.5">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                            {/* Domain Note */}
                            {isDomain && (
                              <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-white/10">
                                <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block mb-0.5 text-[10px]">
                                  DOMAIN NOTE:
                                </span>
                                {SUITE_PACKAGE.domainNote}
                              </p>
                            )}
                            {/* AI Model Note */}
                            {isAIModel && (
                              <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-[#F45B1A]/20">
                                <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block mb-0.5 text-[10px]">
                                  AI MODEL NOTE:
                                </span>
                                {SUITE_PACKAGE.aiModelNote}
                              </p>
                            )}
                            {/* AI Credit Note */}
                            {isAICredit && (
                              <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-[#F45B1A]/20">
                                <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block mb-0.5 text-[10px]">
                                  AI CREDIT NOTE:
                                </span>
                                {SUITE_PACKAGE.aiCreditNote}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Column: 4 Bonuses, Target Audience & Support */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Bonuses Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/40 shadow-inner">
                      <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] pb-2 border-b border-white/8 mb-3">
                        BONUS KHUSUS 10 KLIEN PERTAMA:
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm font-outfit text-[#D5CBC3]">
                        {SUITE_PACKAGE.bonuses.map((bonus, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                            <span className="leading-snug">{bonus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience Box */}
                    <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10">
                      <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] mb-1.5">
                        COCOK UNTUK:
                      </div>
                      <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                        {SUITE_PACKAGE.targetAudience}
                      </p>
                    </div>

                    {/* Infrastructure Info Box */}
                    <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10 space-y-2">
                      <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB]">
                        INFRASTRUKTUR & OTOMASI DIGITAL:
                      </div>
                      <p className="text-xs font-outfit text-[#A99A90] leading-relaxed">
                        Termasuk setup server n8n dan gateway WhatsApp WAHA selama 1 tahun, konfigurasi *system prompt* karakter bisnis, pengenalan katalog produk, serta integrasi SEO & GEO agar bisnis mudah ditemukan di Google dan platform mesin pencari AI.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. ELITE PACKAGE FULL DETAILS (APPROVED COMPLETE SPECIFICATIONS) */}
              {expandedPackage === "elite" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: All 17 Features + AI Note + Web App Note */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="font-geom font-bold text-sm uppercase tracking-wider text-[#F7F1EB] pb-2 border-b border-white/8">
                        YANG KAMU DAPATKAN ({ELITE_PACKAGE.allFeatures.length} FASILITAS LENGKAP):
                      </div>
                      <ul className="space-y-3 text-sm font-outfit text-[#D5CBC3]">
                        {ELITE_PACKAGE.allFeatures.map((feat, idx) => {
                          const isAIModel = feat.includes("WhatsApp AI Customer Service");
                          const isAICredit = feat.includes("Kredit AI awal");
                          const isWebAppRight = feat.includes("Hak penggunaan Web App");

                          return (
                            <li key={idx} className="flex flex-col gap-1.5">
                              <div className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{feat}</span>
                              </div>
                              {/* Dedicated AI Model Note */}
                              {isAIModel && (
                                <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-[#F45B1A]/20">
                                  <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block mb-0.5 text-[10px]">
                                    AI MODEL NOTE:
                                  </span>
                                  {ELITE_PACKAGE.aiModelNote}
                                </p>
                              )}
                              {/* Dedicated AI credit explanation note */}
                              {isAICredit && (
                                <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-[#F45B1A]/20">
                                  <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block mb-0.5 text-[10px]">
                                    AI CREDIT NOTE:
                                  </span>
                                  {ELITE_PACKAGE.aiCreditNote}
                                </p>
                              )}
                              {/* Dedicated Web App usage clarification */}
                              {isWebAppRight && (
                                <p className="text-xs font-outfit text-[#A99A90] pl-7 leading-relaxed bg-[#0B0807] p-3 rounded-xl border border-white/10">
                                  <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block mb-0.5 text-[10px]">
                                    WEB APP USAGE NOTE:
                                  </span>
                                  {ELITE_PACKAGE.webAppUsageClarification}
                                </p>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Right Column: Premium Benefits, Cocok Untuk, Conditions */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Premium Benefits Subsection */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/40 shadow-inner">
                        <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] pb-2 border-b border-white/8 mb-3">
                          PREMIUM BENEFITS:
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm font-outfit text-[#D5CBC3]">
                          {ELITE_PACKAGE.premiumBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cocok Untuk Box */}
                      <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10">
                        <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] mb-1.5">
                          COCOK UNTUK:
                        </div>
                        <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                          {ELITE_PACKAGE.targetAudience}
                        </p>
                      </div>

                      {/* Important Package Conditions */}
                      <div className="p-4 rounded-2xl bg-[#0B0807] border border-white/10 space-y-2.5">
                        <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB]">
                          KETENTUAN PENTING PAKET:
                        </div>
                        {ELITE_PACKAGE.conditions.map((note, idx) => (
                          <p key={idx} className="text-xs font-outfit text-[#A99A90] leading-relaxed">
                            • {note}
                          </p>
                        ))}
                      </div>

                      {/* Closing Statement */}
                      <div className="p-4 rounded-2xl bg-[#201713]/70 border border-[#F45B1A]/30 text-center">
                        <p className="font-geom font-bold text-sm text-[#F7F1EB] leading-snug">
                          {ELITE_PACKAGE.closingStatement}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Direct Action Bar inside Detail Panel */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <span className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB] block">
                    Tertarik dengan paket ini?
                  </span>
                  <span className="font-outfit text-xs text-[#A99A90]">
                    Hubungi tim kami langsung via WhatsApp untuk memulai konsultasi.
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setExpandedPackage(null)}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-geom font-bold uppercase tracking-wider text-[#D5CBC3] transition-colors text-center"
                  >
                    Tutup Detail
                  </button>
                  <a
                    href={
                      expandedPackage === "start"
                        ? waStartUrl
                        : expandedPackage === "suite"
                        ? waSuiteUrl
                        : waEliteUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-geom font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#F45B1A]/25 transition-all hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <span>Konsultasikan via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
