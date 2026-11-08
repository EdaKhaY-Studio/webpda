"use client";

import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSocialSection() {
  const { sectionRef, getRevealClass } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="sosial-media"
      aria-labelledby="social-section-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture overflow-hidden border-b border-white/10"
    >
      {/* Background subtle radial ambient light */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F45B1A]/[0.04] rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* ── ONE UNIFIED ELEGANT CONTAINER (MAX-W-4XL, CENTERED) ── */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1C120E] via-[#17100D] to-[#140D0A] border border-white/10 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-4xl mx-auto flex flex-col items-center text-center transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          {/* Subtle warm orange ambient highlight in upper area */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#F45B1A]/[0.06] blur-3xl pointer-events-none"
          />

          {/* 01. Section Label (Centered) */}
          <div className="eyebrow-label mx-auto mb-4 sm:mb-5 relative z-10">
            <span className="eyebrow-dot" />
            <span>CONNECT WITH US</span>
          </div>

          {/* 02. Heading (Centered) */}
          <h2
            id="social-section-title"
            className="font-geom font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#F7F1EB] tracking-tight mb-5 sm:mb-6 text-center relative z-10"
          >
            Kenali Kami Lebih Dekat.
          </h2>

          {/* 03. Supporting Description (Centered Container, Justified Text) */}
          <div className="w-full max-w-[680px] mx-auto mb-8 sm:mb-10 relative z-10">
            <p className="text-sm sm:text-base text-[#A99A90] font-outfit leading-relaxed text-justify">
              Paham Digital Agency juga aktif berbagi di media sosial. Melalui Instagram dan TikTok, kamu bisa mengenal lebih dekat perjalanan kami, melihat karya yang kami buat, dan mendapatkan informasi seputar teknologi serta solusi digital.
            </p>
          </div>

          {/* 04. Social Media Links at the Bottom (Centered Two-Column Grid on Desktop, Stacked on Mobile) */}
          <div className="w-full max-w-[600px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/pahamdigitall.id/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Paham Digital Agency (@pahamdigitall.id)"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/50 hover:bg-[#F45B1A]/[0.05] transition-all duration-300 group shadow-md text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 group-hover:bg-[#F45B1A]/15 group-hover:border-[#F45B1A]/30 flex items-center justify-center text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-geom font-bold text-[#F7F1EB] block leading-tight group-hover:text-[#F45B1A] transition-colors">
                  Instagram
                </span>
                <span className="text-xs text-[#A99A90] font-outfit block truncate mt-0.5">
                  @pahamdigitall.id
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#A99A90] group-hover:text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </a>

            {/* TikTok Card */}
            <a
              href="https://www.tiktok.com/@pahamdigitall.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Paham Digital Agency (@pahamdigitall.id)"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/50 hover:bg-[#F45B1A]/[0.05] transition-all duration-300 group shadow-md text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 group-hover:bg-[#F45B1A]/15 group-hover:border-[#F45B1A]/30 flex items-center justify-center text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-geom font-bold text-[#F7F1EB] block leading-tight group-hover:text-[#F45B1A] transition-colors">
                  TikTok
                </span>
                <span className="text-xs text-[#A99A90] font-outfit block truncate mt-0.5">
                  @pahamdigitall.id
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#A99A90] group-hover:text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
