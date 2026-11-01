"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Bot, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const headlineLine3Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);
  const floatingBadge1Ref = useRef<HTMLDivElement>(null);
  const floatingBadge2Ref = useRef<HTMLDivElement>(null);

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Orange background circle scales in
      tl.fromTo(
        circleRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "expo.out" }
      );

      // 2. Eyebrow slides in
      tl.fromTo(
        eyebrowRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=1.1"
      );

      // 3. Headline lines stagger reveal
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current, headlineLine3Ref.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
        "-=0.9"
      );

      // 4. Main visual stage lifts up
      tl.fromTo(
        visualCardRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
        "-=0.8"
      );

      // 5. Floating badges pop
      tl.fromTo(
        [floatingBadge1Ref.current, floatingBadge2Ref.current],
        { scale: 0.8, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.6)" },
        "-=0.6"
      );

      // 6. Subtitle & CTAs fade up
      tl.fromTo(
        [descRef.current, ctaRef.current, tagsRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 bg-[#0B0807] bg-grid-texture"
    >
      {/* Cinematic Ambient Orange Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-5 sm:right-20 w-[500px] h-[500px] rounded-full bg-radial-orange-glow pointer-events-none blur-3xl opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F45B1A]/10 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN (Content Stage ~58%) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Label */}
            <div ref={eyebrowRef} className="eyebrow-label mb-6">
              <span className="eyebrow-dot" />
              <span>DIGITAL & AUTOMATION AGENCY</span>
            </div>

            {/* Oversized Display Headline */}
            <h1
              id="hero-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[0.94] text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] xl:text-[104px]"
            >
              <div ref={headlineLine1Ref} className="overflow-hidden">
                PAHAM BISNISNYA.
              </div>
              <div ref={headlineLine2Ref} className="overflow-hidden text-[#F45B1A]">
                OTOMATISKAN
              </div>
              <div ref={headlineLine3Ref} className="overflow-hidden">
                SISTEMNYA.
              </div>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={descRef}
              className="mt-7 text-base sm:text-lg lg:text-xl text-[#A99A90] font-normal leading-relaxed max-w-xl"
            >
              Kami membantu bisnis berkembang melalui website profesional, web application,
              AI customer service, dan sistem automasi yang bekerja lebih cerdas.
            </p>

            {/* Two Action CTAs */}
            <div
              ref={ctaRef}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-orange group shadow-[0_4px_24px_rgba(244,91,26,0.4)]"
              >
                <span>Diskusikan Proyek</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <Link
                href="/#layanan"
                className="btn-secondary-dark group"
              >
                <span>Jelajahi Layanan</span>
                <ArrowRight
                  size={17}
                  className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Service Indicators Strip */}
            <div
              ref={tagsRef}
              className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap gap-2.5 sm:gap-3"
            >
              {[
                "Website & Web App",
                "AI Customer Service 24/7",
                "Business Automation",
                "SEO Google & AI",
              ].map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-semibold text-[#A99A90]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN (Focal Visual Stage ~42%) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Signature Orange Glow Circle Behind */}
            <div
              ref={circleRef}
              aria-hidden="true"
              className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#F45B1A] to-[#FF6A2A] opacity-90 blur-xl shadow-[0_0_120px_rgba(244,91,26,0.6)]"
            />

            {/* Secondary Concentric Outline Circle */}
            <div
              aria-hidden="true"
              className="absolute w-[380px] h-[380px] sm:w-[490px] sm:h-[490px] rounded-full border border-[#F45B1A]/30 pointer-events-none"
            />

            {/* Main Creative Browser Mockup Card */}
            <div
              ref={visualCardRef}
              className="relative z-10 w-full max-w-[460px] rounded-2xl bg-[#17100D]/95 border border-white/15 p-4 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Browser Window Chrome */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#A99A90]">
                  pahamdigital.id/case-study
                </div>
              </div>

              {/* Real Project Screen Showcase */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#21140F] border border-white/10">
                <Image
                  src="/images/JPG.jpg"
                  alt="Paham Digital Agency — Showcase Portofolio Selempang Wisuda Aceh Barat"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 460px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0807] via-[#0B0807]/20 to-transparent" />

                {/* Overlaid Project Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="inline-block bg-[#F45B1A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                      Karya Terpilih
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Selempang Wisuda Aceh Barat
                    </h3>
                    <p className="text-[11px] text-[#A99A90]">
                      Katalog Digital & Pesanan Otomatis WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Lower Status Bar Inside Card */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#A99A90]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-[#F7F1EB] font-medium">Sistem Berjalan Optimal</span>
                </div>
                <span className="text-[#F45B1A] font-semibold">100% Responsif</span>
              </div>
            </div>

            {/* Overlapping Floating Badge 1 (Top Right) */}
            <div
              ref={floatingBadge1Ref}
              className="absolute -top-6 -right-2 sm:-right-6 z-20 hidden sm:flex items-center gap-3 bg-[#21140F]/95 border border-[#F45B1A]/40 rounded-xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center shrink-0">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F7F1EB] leading-none mb-1">
                  AI Customer Service
                </p>
                <p className="text-[11px] text-[#16A34A] font-medium leading-none">
                  Aktif 24/7 Responsif
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge 2 (Bottom Left) */}
            <div
              ref={floatingBadge2Ref}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-20 hidden sm:flex items-center gap-3 bg-[#17100D]/95 border border-white/15 rounded-xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 text-[#F45B1A] flex items-center justify-center shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F7F1EB] leading-none mb-1">
                  SEO & Rekomendasi AI
                </p>
                <p className="text-[11px] text-[#A99A90] font-medium leading-none">
                  Halaman #1 Google Lokal
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
