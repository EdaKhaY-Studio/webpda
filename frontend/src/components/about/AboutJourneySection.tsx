"use client";

import { useState } from "react";
import { BookOpen, Compass, TrendingUp, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface JourneyStage {
  step: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    badge: "THE DREAM",
    title: "Semuanya Dimulai dari Sebuah Mimpi.",
    description:
      "Sebuah ide sederhana yang ditulis dalam buku harian, berisi harapan untuk membangun sesuatu yang bermanfaat bagi banyak orang.",
    icon: <BookOpen className="w-5 h-5 text-[#F45B1A]" />,
    tag: "Buku Harian & Catatan Ide",
  },
  {
    step: "02",
    badge: "THE COURAGE",
    title: "Berani Memulai, Meski Belum Sempurna.",
    description:
      "Menyadari bahwa usia dan pengalaman masih menjadi tantangan, tetapi tidak menjadikannya alasan untuk berhenti mencoba.",
    icon: <Compass className="w-5 h-5 text-[#F45B1A]" />,
    tag: "Langkah Pertama & Eksperimen",
  },
  {
    step: "03",
    badge: "THE GROWTH",
    title: "Terus Belajar, Mencoba, dan Berkembang.",
    description:
      "Dengan rasa ingin tahu dan kemauan untuk terus belajar, sebuah gagasan mulai berkembang menjadi Paham Digital Agency.",
    icon: <TrendingUp className="w-5 h-5 text-[#F45B1A]" />,
    tag: "Evolusi Solusi & Keterampilan",
  },
  {
    step: "04",
    badge: "THE PURPOSE",
    title: "Berkarya untuk Menghadirkan Manfaat.",
    description:
      "Paham Digital Agency hadir sebagai partner transformasi digital untuk membantu bisnis dan UMKM memanfaatkan teknologi secara lebih mudah dan bermanfaat.",
    icon: <Target className="w-5 h-5 text-[#F45B1A]" />,
    tag: "Dampak Nyata bagi Bisnis",
  },
];

export default function AboutJourneySection() {
  const { sectionRef, getRevealClass, isInView, scrollDirection } = useScrollReveal();
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      ref={sectionRef}
      id="perjalanan"
      aria-labelledby="journey-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture border-b border-white/10 scroll-mt-24 overflow-hidden"
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F45B1A]/[0.05] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* Section Header: Asymmetric Split Editorial Header */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          <div className="lg:col-span-7">
            <div className="eyebrow-label mb-5">
              <span className="eyebrow-dot" />
              <span>THE JOURNEY</span>
            </div>

            <h2
              id="journey-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[54px]"
            >
              Sebuah Perjalanan,{" "}
              <span className="text-[#F45B1A]">Satu Tujuan.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-white/10">
            <p className="text-base sm:text-lg text-[#A99A90] leading-relaxed font-outfit mb-3">
              Perkembangan gagasan dari selembar catatan impian menjadi partner transformasi digital yang mendampingi bisnis melangkah ke masa depan.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>4 Tahap Evolusi Menuju Dampak Nyata</span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP HORIZONTAL EDITORIAL TIMELINE ── */}
        <div className="hidden lg:block relative mb-8">
          
          {/* Continuous Connecting Track Line across 4 Steps */}
          <div
            aria-hidden="true"
            className="absolute top-[34px] left-[5%] right-[5%] h-[2px] bg-white/10 z-0"
          >
            {/* Animated Glow Fill Line */}
            <div
              className={`h-full bg-gradient-to-r from-[#F45B1A] via-[#FF6A2A] to-[#F45B1A] origin-left transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isCurrent = activeStage === idx;
              const cardDelay = isInView
                ? scrollDirection === "down"
                  ? `${(idx + 1) * 140}ms`
                  : `${(JOURNEY_STAGES.length - idx) * 140}ms`
                : "0ms";

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`flex flex-col p-6 sm:p-7 rounded-3xl bg-[#17100D] border transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group hover:-translate-y-2 shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${
                    isCurrent
                      ? "border-[#F45B1A] shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(244,91,26,0.15)] bg-gradient-to-b from-[#1C120E] to-[#140D0A]"
                      : "border-white/10 hover:border-[#F45B1A]/40"
                  } ${getRevealClass()}`}
                  style={{
                    transitionDelay: cardDelay,
                  }}
                >
                  {/* Step Node with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#F45B1A]/25 border border-[#F45B1A] scale-105 shadow-[0_0_16px_rgba(244,91,26,0.4)]"
                          : "bg-[#0B0807] border border-white/10 group-hover:border-[#F45B1A]/50 group-hover:scale-105"
                      }`}
                    >
                      {stage.icon}
                    </div>
                    <span className="font-geom font-bold text-xs uppercase tracking-wider text-[#A99A90] px-3 py-1 rounded-full bg-white/5 border border-white/8">
                      {stage.badge}
                    </span>
                  </div>

                  {/* Stage Number & Title */}
                  <span className="font-geom font-extrabold text-2xl text-[#F45B1A] mb-1.5 block">
                    {stage.step}
                  </span>

                  <h3 className="font-geom font-bold text-lg text-[#F7F1EB] mb-3 leading-snug group-hover:text-[#F45B1A] transition-colors">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A99A90] leading-relaxed font-outfit mb-5 flex-1">
                    {stage.description}
                  </p>

                  {/* Tag Indicator */}
                  <div className="pt-3 border-t border-white/8">
                    <span className="text-[11px] font-semibold text-[#D5CBC3] font-outfit">
                      {stage.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === JOURNEY_STAGES.length - 1;

            return (
              <div
                key={stage.step}
                className={`grid grid-cols-[28px_minmax(0,1fr)] sm:grid-cols-[32px_minmax(0,1fr)] gap-3.5 sm:gap-4 items-start ${
                  !isLast ? "pb-7 sm:pb-8" : ""
                }`}
              >
                {/* ── Dedicated Marker & Spine Column ── */}
                <div className="relative flex justify-center h-full self-stretch select-none">
                  {/* Continuous Vertical Timeline Line Segment */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#F45B1A]/40 shadow-[0_0_8px_rgba(244,91,26,0.25)] pointer-events-none ${
                      isFirst
                        ? "top-8 -bottom-[1px]"
                        : isLast
                        ? "top-[-1px] h-[33px]"
                        : "top-[-1px] -bottom-[1px]"
                    }`}
                  />

                  {/* Standardized Circular Milestone Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F45B1A] border-4 border-[#0B0807] shadow-[0_0_10px_#F45B1A] z-10 shrink-0"
                  />
                </div>

                {/* ── Roadmap Content Card ── */}
                <div
                  className={`min-w-0 w-full transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
                  style={{
                    transitionDelay: isInView
                      ? scrollDirection === "down"
                        ? `${(idx + 1) * 140}ms`
                        : `${(JOURNEY_STAGES.length - idx) * 140}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex flex-col p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-geom font-bold text-xs sm:text-sm text-[#F45B1A] tracking-wide">
                        TAHAP {stage.step} · {stage.badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        {stage.icon}
                      </div>
                    </div>

                    <h3 className="font-geom font-bold text-base text-[#F7F1EB] mb-2 leading-snug">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-[#A99A90] font-outfit leading-relaxed mb-4">
                      {stage.description}
                    </p>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-xs font-medium text-[#D5CBC3] font-outfit">
                        {stage.tag}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
