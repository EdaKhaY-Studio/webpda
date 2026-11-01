"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Bot, Sparkles } from "lucide-react";
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
  const mascotRef = useRef<HTMLDivElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Eyebrow appears
      tl.fromTo(
        eyebrowRef.current,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      // 2. Headline lines reveal sequentially
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current, headlineLine3Ref.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
        "-=0.4"
      );

      // 3. Description enters
      tl.fromTo(
        descRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      );

      // 4. CTA buttons appear
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      );

      // 5. Orange circle expands into position
      tl.fromTo(
        circleRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.1, ease: "expo.out" },
        "-=0.6"
      );

      // 6. Mascot reveals last with a gentle upward movement (Section 07 specification)
      tl.fromTo(
        mascotRef.current,
        { y: 35, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.7"
      );

      // 7. Floating badge pops in smoothly
      if (floatingBadgeRef.current) {
        tl.fromTo(
          floatingBadgeRef.current,
          { scale: 0.85, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4"
        );
      }

      // 8. Subtle, elegant floating effect for mascot (movement range of only 6px)
      tl.to(
        mascotRef.current,
        {
          y: "-=6",
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[116px] pb-16 sm:pt-[124px] sm:pb-20 md:pt-[148px] md:pb-24 lg:pt-[154px] lg:pb-28 bg-[#0B0807] bg-grid-texture"
    >
      {/* Restrained Ambient Orange Glow in Background */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-4 sm:right-16 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-radial-orange-glow pointer-events-none blur-3xl opacity-70 -z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#F45B1A]/8 pointer-events-none blur-3xl -z-0"
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN (Content Stage ~54%) ──────────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow Label (Section 04) */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A] shadow-[0_0_8px_#F45B1A]" />
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#F7F1EB]">
                DIGITAL &amp; AUTOMATION AGENCY
              </span>
            </div>

            {/* Oversized Space Grotesk ExtraBold Headline (Section 04) */}
            <h1
              id="hero-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[0.98] sm:leading-[0.95] text-[42px] sm:text-[62px] md:text-[74px] lg:text-[80px] xl:text-[90px]"
            >
              <div ref={headlineLine1Ref} className="overflow-hidden">
                PAHAM BISNISNYA.
              </div>
              <div ref={headlineLine2Ref} className="overflow-hidden text-[#F45B1A]">
                OTOMATISKAN.
              </div>
              <div ref={headlineLine3Ref} className="overflow-hidden">
                SISTEMNYA.
              </div>
            </h1>

            {/* Supporting Copy (Section 04) */}
            <p
              ref={descRef}
              className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-[19px] text-[#A99A90] font-normal leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Kami membantu bisnis berkembang melalui website profesional, web application, AI customer service, dan sistem automasi yang bekerja lebih cerdas.
            </p>

            {/* Two Action CTAs (Section 04) */}
            <div
              ref={ctaRef}
              className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-bold text-[15px] sm:text-[16px] px-7 py-3.5 sm:py-4 rounded-full shadow-[0_4px_24px_rgba(244,91,26,0.4)] hover:shadow-[0_8px_32px_rgba(244,91,26,0.55)] transition-all duration-200 active:scale-95 group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Diskusikan Proyek</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Secondary CTA */}
              <Link
                href="/#layanan"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-[#F7F1EB] hover:text-white border border-white/12 hover:border-[#F45B1A]/40 font-semibold text-[15px] sm:text-[16px] px-7 py-3.5 sm:py-4 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95 group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Jelajahi Layanan</span>
                <ArrowRight
                  size={17}
                  className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Service & Capability Indicators Strip (KNEXU-style) */}
            <div
              ref={tagsRef}
              className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-white/10 w-full flex flex-wrap gap-2 sm:gap-2.5"
            >
              {[
                "Website Profesional",
                "Web Application",
                "AI Customer Service 24/7",
                "Automasi Bisnis",
                "Optimasi SEO & AI",
              ].map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-medium text-[#A99A90]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN (Focal Visual Stage with Transparent Mascot ~46%) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Signature Orange Glow Circle Behind Character (Section 05) */}
            <div
              ref={circleRef}
              aria-hidden="true"
              className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-tr from-[#F45B1A]/35 via-[#FF6A2A]/20 to-transparent blur-3xl pointer-events-none -z-0"
            />

            {/* Subtle Concentric Rings Accent */}
            <div
              aria-hidden="true"
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[430px] lg:h-[430px] rounded-full border border-[#F45B1A]/20 pointer-events-none -z-0"
            />
            <div
              aria-hidden="true"
              className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full border border-white/[0.04] pointer-events-none -z-0"
            />

            {/* Official Transparent Cyber-Fox Mascot Holding Laptop (Section 05) */}
            <div
              ref={mascotRef}
              className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] flex items-center justify-center"
            >
              <Image
                src="/images/paham-mascot-laptop.png"
                alt="Paham Digital Agency Official Cyber-Fox Mascot holding laptop"
                width={819}
                height={1024}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.85)] filter"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 560px"
              />
            </div>

            {/* Floating Live AI Capability Pill (KNEXU-style balanced detail) */}
            <div
              ref={floatingBadgeRef}
              className="absolute bottom-2 left-2 sm:-left-4 lg:-left-6 z-20 flex items-center gap-3 bg-[#17100D]/95 border border-[#F45B1A]/35 rounded-2xl px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.7),0_0_20px_rgba(244,91,26,0.1)] backdrop-blur-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center shrink-0">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <p className="text-xs font-bold text-[#F7F1EB] leading-tight">
                    AI Customer Service
                  </p>
                </div>
                <p className="text-[11px] text-[#A99A90] leading-tight mt-0.5">
                  Sistem Otomatis 24/7 Aktif
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
