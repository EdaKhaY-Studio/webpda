"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface ProcessCard {
  number: string;
  title: string;
  desc: string;
}

const PROCESS_CARDS: ProcessCard[] = [
  {
    number: "01",
    title: "Analisis Kebutuhan Bisnis",
    desc: "Kami mendalami model bisnis, persona pelanggan, dan titik hambatan operasional Anda sebelum menentukan arsitektur teknologi yang tepat.",
  },
  {
    number: "02",
    title: "Pengembangan Presisi & Teruji",
    desc: "Website responsif cepat, web application scalable, dan asisten AI yang dilatih dengan data bisnis Anda untuk hasil yang terukur.",
  },
  {
    number: "03",
    title: "Pendampingan Pasca Rilis",
    desc: "Kami tidak meninggalkan Anda setelah peluncuran. Kami memberikan pelatihan praktis dan dukungan berkelanjutan agar sistem berjalan prima.",
  },
];

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollYRef.current) {
        setScrollDirection("up");
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Compute card animation class based on in-view and scroll direction
  const getCardAnimClass = () => {
    if (isInView) {
      return "opacity-100 translate-y-0 scale-100";
    }
    return scrollDirection === "down"
      ? "opacity-0 translate-y-[25px] scale-[0.985]"
      : "opacity-0 -translate-y-[20px] scale-[0.985]";
  };

  const getCardAnimStyle = (idx: number) => ({
    transitionDelay: isInView
      ? scrollDirection === "down"
        ? `${idx * 140 + 140}ms`
        : `${(PROCESS_CARDS.length - 1 - idx) * 140 + 140}ms`
      : "0ms",
  });

  return (
    <section
      ref={sectionRef}
      id="about-hero"
      aria-labelledby="about-hero-title"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 bg-[#0B0807] bg-grid-texture border-b border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-[#F45B1A]/10 pointer-events-none blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-[#F45B1A]/8 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline, Narrative, and CTAs (~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Small Label - Fades in gently */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5 sm:mb-6 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>ABOUT PAHAM DIGITAL AGENCY</span>
            </div>

            {/* 2. Main Headline in Geom - Solid warm white with solid primary orange highlight */}
            <h1
              id="about-hero-title"
              className={`font-geom font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.06] text-[34px] sm:text-[46px] lg:text-[56px] mb-6 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[25px]"
              }`}
              style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
            >
              Bukan Sekadar Membangun Bisnis.{" "}
              <span className="text-[#F45B1A]">
                Kami Ingin Menghadirkan Manfaat.
              </span>
            </h1>

            {/* 3. Supporting Copy in Outfit - Solid muted text */}
            <p
              className={`text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-2xl font-outfit mb-8 sm:mb-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
              }`}
              style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
            >
              Paham Digital Agency hadir sebagai partner transformasi digital yang membantu bisnis memanfaatkan teknologi untuk bekerja lebih mudah, berkembang lebih jauh, dan menjangkau lebih banyak peluang.
            </p>

            {/* 4. Action CTAs - Staggered entrance */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto transition-all duration-850 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isInView ? "340ms" : "0ms" }}
            >
              {/* Primary CTA */}
              <a
                href="#perjalanan"
                className="btn-primary-orange group shadow-[0_4px_20px_rgba(244,91,26,0.35)]"
              >
                <span>Kenali Perjalanan Kami</span>
                <ArrowDown
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-y-1"
                />
              </a>

              {/* Secondary CTA */}
              <Link
                href="/layanan/"
                className="btn-secondary-dark group"
              >
                <span>Lihat Layanan Kami</span>
                <ArrowUpRight
                  size={16}
                  className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Pillars on Dark Surface Cards (~42%) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {PROCESS_CARDS.map((pillar, idx) => (
              <div
                key={pillar.number}
                className={`p-6 sm:p-7 rounded-2xl bg-[#17100D] hover:bg-[#1C1410] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] group shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] ${getCardAnimClass()}`}
                style={getCardAnimStyle(idx)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-geom font-bold text-xl text-[#F45B1A] tracking-wider">
                    {pillar.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#F45B1A] transition-colors" />
                </div>
                <h3 className="font-geom font-bold text-lg text-[#F7F1EB] mb-2 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A99A90] leading-relaxed font-outfit">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
