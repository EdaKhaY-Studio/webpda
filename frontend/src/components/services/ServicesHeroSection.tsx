"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buildWAUrl } from "@/lib/site-config";

export default function ServicesHeroSection() {
  const waConsultUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi seputar solusi digital dan paket layanan untuk bisnis saya."
  );

  useEffect(() => {
    // Keep idle event loop active briefly for preview rendering
    const timer = setTimeout(() => {}, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-x-hidden bg-[#0B0807] bg-grid-texture border-b border-white/10"
      aria-label="Layanan Digital Paham Digital Agency"
    >
      {/* Scoped CSS keyframe entrance sequence with prefers-reduced-motion */}
      <style>{`
        @keyframes heroFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroSlideUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-anim-label {
          animation: heroFadeIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 40ms both;
        }
        .hero-anim-heading {
          animation: heroSlideUp 900ms cubic-bezier(0.22, 1, 0.36, 1) 140ms both;
        }
        .hero-anim-desc {
          animation: heroSlideUp 1000ms cubic-bezier(0.22, 1, 0.36, 1) 280ms both;
        }
        .hero-anim-cta {
          animation: heroSlideUp 850ms cubic-bezier(0.22, 1, 0.36, 1) 420ms both;
        }
        .hero-anim-points {
          animation: heroFadeIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 560ms both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim-label,
          .hero-anim-heading,
          .hero-anim-desc,
          .hero-anim-cta,
          .hero-anim-points {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Background ambient glow centered behind hero */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1000px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#F45B1A]/[0.08] via-[#FF6A2A]/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-site relative z-10 px-4 sm:px-6">
        {/* Centered Editorial Composition */}
        <div className="max-w-[880px] mx-auto text-center flex flex-col items-center">
          
          {/* 1. Small label (300ms fade in) */}
          <div
            className="hero-anim-label inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5 sm:mb-7 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] animate-pulse" />
            <span>OUR DIGITAL SERVICES</span>
          </div>

          {/* 2. Main Headline in Geom: Solid Warm White (#F7F1EB) with Solid Orange (#F45B1A) highlight, no gradients */}
          <h1
            className="hero-anim-heading font-geom font-bold text-[22px] xs:text-[26px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.18] text-[#F7F1EB] tracking-tight max-w-[850px] mx-auto mb-6 text-center"
          >
            <span className="block sm:inline">Saatnya Bisnismu </span>
            <span className="text-[#F45B1A] inline-block sm:inline">Naik Kelas</span>{" "}
            <span className="block sm:inline">Tanpa Ribet Operasional.</span>
          </h1>

          {/* 3. Supporting Description: Centered block, justified text with [text-align-last:left], max-w ~720px, solid muted #A99A90 */}
          <div className="hero-anim-desc w-full max-w-[720px] mx-auto mb-9 sm:mb-11 px-2 sm:px-0">
            <p
              className="font-outfit text-sm sm:text-base lg:text-[17px] text-[#A99A90] leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word]"
            >
              Bantu bisnis kamu menjadi lebih terintegrasi — mulai dari website profesional, aplikasi untuk kebutuhan bisnismu, hingga AI yang mengelola customer service.
            </p>
          </div>

          {/* 4. CTA Buttons: Centered row on desktop, stacked on mobile */}
          <div
            className="hero-anim-cta flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-9 sm:mb-12"
          >
            <Link
              href="/layanan/harga-paket/"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#F45B1A]/25 hover:shadow-[#F45B1A]/40 active:scale-95 group"
            >
              <span>Lihat Paket & Harga</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F1EB] font-outfit font-semibold text-sm sm:text-base border border-white/10 transition-all duration-200 hover:border-[#F45B1A]/40 active:scale-95 group"
            >
              <span>Konsultasikan Kebutuhanmu</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F45B1A]" />
            </a>
          </div>

          {/* 5. Three Supporting Points: Centered horizontal strip on desktop, clean wrap on mobile */}
          <div
            className="hero-anim-points pt-6 sm:pt-7 border-t border-white/10 w-full max-w-[760px] mx-auto flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs sm:text-sm text-[#A99A90] font-outfit"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0" />
              <span>Teknologi Tepat Guna</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0" />
              <span>Transparansi Tahapan & Biaya</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0" />
              <span>Pendampingan Purna Jual</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
