"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutCTASection() {
  const { sectionRef, getRevealClass } = useScrollReveal({ threshold: 0.15 });

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.general);

  return (
    <section
      ref={sectionRef}
      id="kontak-tentang"
      aria-labelledby="about-cta-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#F45B1A]/12 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* High-Impact Creative Card with Centered Content Composition */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#17100D] via-[#21140F] to-[#17100D] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.8)] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          {/* Subtle Orange Glow in Corner */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F45B1A]/20 blur-3xl pointer-events-none"
          />

          <div
            className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center"
          >
            {/* 01. Small Label */}
            <div className="eyebrow-label mx-auto mb-6">
              <span className="eyebrow-dot" />
              <span>MARI MULAI KOLABORASI</span>
            </div>

            {/* 02. Main Headline (Clean Centered Typography, Natural Word Spacing) */}
            <h2
              id="about-cta-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.1] text-[28px] sm:text-[40px] lg:text-[48px] mb-6 text-center max-w-3xl mx-auto [text-wrap:balance] [word-spacing:normal] [letter-spacing:normal]"
            >
              PUNYA IDE UNTUK<br className="hidden sm:inline" />{" "}
              MENGEMBANGKAN BISNIS?<br className="hidden sm:inline" />{" "}
              <span className="text-[#F45B1A] inline-block">
                MARI WUJUDKAN BERSAMA.
              </span>
            </h2>

            {/* 03. Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#A99A90] leading-relaxed font-outfit max-w-2xl mx-auto text-center mb-8 sm:mb-10">
              Setiap bisnis memiliki cerita dan potensinya sendiri. Kami siap mendengarkan kebutuhanmu dan membantu menemukan solusi digital yang tepat untuk langkah berikutnya.
            </p>

            {/* 04. Primary and Secondary CTA Buttons Centered Below Paragraph */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto mx-auto">
              {/* Primary Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-orange text-base px-8 py-4 shadow-[0_6px_28px_rgba(244,91,26,0.45)] group transition-all duration-300 hover:scale-[1.02] active:scale-95 justify-center w-full sm:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Konsultasikan Bisnismu</span>
              </a>

              {/* Secondary Button */}
              <Link
                href="/layanan/"
                className="btn-secondary-dark text-base px-8 py-4 group justify-center w-full sm:w-auto"
              >
                <span>Jelajahi Layanan Kami</span>
                <ArrowUpRight
                  size={18}
                  className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* 05. Supporting Points Centered */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-center gap-3.5 sm:gap-6 w-full">
              {[
                "Konsultasi awal gratis & terarah",
                "Respons cepat via WhatsApp resmi",
                "Solusi presisi sesuai skala bisnismu",
              ].map((note) => (
                <div key={note} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#A99A90] font-outfit">
                  <CheckCircle2 size={14} className="text-[#F45B1A] shrink-0" />
                  <span>{note}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
