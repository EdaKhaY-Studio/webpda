"use client";

import { ArrowUpRight, MessageCircle, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import { buildWAUrl } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesCTASection() {
  const { sectionRef, getRevealClass, isInView } = useScrollReveal({ threshold: 0.15 });

  const waConsultUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin berdiskusi mengenai kebutuhan digital bisnis saya dan memilih paket layanan yang paling cocok."
  );

  return (
    <section
      ref={sectionRef}
      id="konsultasi"
      className="relative section-py bg-[#0B0807] overflow-hidden scroll-mt-24"
      aria-label="Konsultasi Kebutuhan Layanan"
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-r from-[#F45B1A]/[0.08] to-[#FF6A2A]/[0.05] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* Main Centered CTA Card Container */}
        <div
          className={`max-w-4xl mx-auto p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#17100D] border border-white/12 shadow-[0_24px_70px_rgba(0,0,0,0.7)] text-center relative overflow-hidden transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold mb-6">
            <MessageCircle className="w-3.5 h-3.5 text-[#F45B1A]" />
            <span>KONSULTASI GRATIS & BEBAS DISKUSI</span>
          </div>

          {/* Main Headline in Geom */}
          <h2 className="font-geom font-bold text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.14] text-[#F7F1EB] tracking-tight mb-5 max-w-2xl mx-auto">
            Belum Yakin Paket Mana yang Cocok?
          </h2>

          {/* Description */}
          <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-2xl mx-auto mb-8">
            Ceritakan kebutuhan bisnismu kepada kami. Mari diskusikan solusi digital yang sesuai dengan tujuan dan skala usahamu.
          </p>

          {/* Primary Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-base sm:text-lg transition-all shadow-xl shadow-[#F45B1A]/35 hover:scale-[1.02] active:scale-95 group"
            >
              <span>Konsultasikan Sekarang</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Secondary text */}
            <span className="text-xs sm:text-sm font-outfit text-[#A99A90]">
              Diskusi kebutuhan awal melalui WhatsApp.
            </span>
          </div>

          {/* Reassurance points */}
          <div className="mt-10 pt-6 border-t border-white/8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-outfit text-[#D5CBC3]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              Tanpa Komitmen Mengikat
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              Pendekatan Solutif & Membumi
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
              Respon Cepat Tim Paham Digital
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
