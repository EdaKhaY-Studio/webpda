"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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

  // 3D Spatial Depth Stage Refs
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const concentricRingRef = useRef<HTMLDivElement>(null);
  const mascotWrapperRef = useRef<HTMLDivElement>(null);
  const mascotImageRef = useRef<HTMLDivElement>(null);

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  useEffect(() => {
    // Accessibility check: Reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      // ── 01. Coordinated Page Entrance Motion (Situek easeOutBack inspired) ──
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
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 },
        "-=0.4"
      );

      // 3. Description enters
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        "-=0.5"
      );

      // 4. CTA buttons appear
      tl.fromTo(
        ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      );

      // 5. Orange circle expands into position
      tl.fromTo(
        circleRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.0, ease: "expo.out" },
        "-=0.6"
      );

      // 6. Mascot reveals last with gentle overshoot curve (Situek easeOutBack inspired)
      tl.fromTo(
        mascotWrapperRef.current,
        { y: 35, scale: 0.94, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: "back.out(1.15)" },
        "-=0.7"
      );

      // ── 02. Organic Idle Floating Motion (Gentle 5px breathing loop) ──
      gsap.to(mascotImageRef.current, {
        y: "-=5",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── 03. Real-Time Pointer 3D Depth Engine (Desktop Only) ──
      if (!isTouchDevice && mascotWrapperRef.current && circleRef.current) {
        const setMascotRotY = gsap.quickTo(mascotWrapperRef.current, "rotationY", {
          duration: 0.7,
          ease: "power2.out",
        });
        const setMascotRotX = gsap.quickTo(mascotWrapperRef.current, "rotationX", {
          duration: 0.7,
          ease: "power2.out",
        });
        const setMascotX = gsap.quickTo(mascotWrapperRef.current, "x", {
          duration: 0.7,
          ease: "power2.out",
        });
        const setMascotY = gsap.quickTo(mascotWrapperRef.current, "y", {
          duration: 0.7,
          ease: "power2.out",
        });

        // Inverse Parallax for Background Orange Glow
        const setCircleX = gsap.quickTo(circleRef.current, "x", {
          duration: 1.0,
          ease: "power2.out",
        });
        const setCircleY = gsap.quickTo(circleRef.current, "y", {
          duration: 1.0,
          ease: "power2.out",
        });

        // Inverse Parallax for Concentric Rings
        const setRingX = concentricRingRef.current
          ? gsap.quickTo(concentricRingRef.current, "x", { duration: 0.9, ease: "power2.out" })
          : null;
        const setRingY = concentricRingRef.current
          ? gsap.quickTo(concentricRingRef.current, "y", { duration: 0.9, ease: "power2.out" })
          : null;

        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

          setMascotRotY(normX * 10);
          setMascotRotX(-normY * 6);
          setMascotX(normX * 12);
          setMascotY(normY * 8);

          setCircleX(-normX * 20);
          setCircleY(-normY * 14);
          if (setRingX && setRingY) {
            setRingX(-normX * 12);
            setRingY(-normY * 8);
          }
        };

        const handleMouseLeave = () => {
          setMascotRotY(0);
          setMascotRotX(0);
          setMascotX(0);
          setMascotY(0);
          setCircleX(0);
          setCircleY(0);
          if (setRingX && setRingY) {
            setRingX(0);
            setRingY(0);
          }
        };

        const heroEl = containerRef.current;
        if (heroEl) {
          heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
          heroEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

          return () => {
            heroEl.removeEventListener("mousemove", handleMouseMove);
            heroEl.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-[76px] md:pb-6 lg:pt-[82px] lg:pb-6 bg-[#0B0807] bg-grid-texture"
    >
      {/* Controlled decorative background container (prevents clipping the mascot while stopping page overflow) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-1/3 right-4 sm:right-16 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full bg-radial-orange-glow blur-3xl opacity-70" />
        <div className="absolute -top-24 -left-24 w-[340px] h-[340px] rounded-full bg-[#F45B1A]/8 blur-3xl" />
      </div>

      <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ── LEFT COLUMN (Content Stage ~54%) ──────────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow Label (Spaced 42–56px from integrated navbar bottom) */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3 sm:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#F45B1A] shadow-[0_0_8px_#F45B1A]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#F7F1EB]">
                DIGITAL &amp; AUTOMATION AGENCY
              </span>
            </div>

            {/* Oversized Space Grotesk ExtraBold Headline (Height-conscious clamp) */}
            <h1
              id="hero-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[0.96] text-[clamp(2.35rem,4.5vw,4.85rem)]"
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

            {/* Supporting Copy (Limited to 520–560px for optimal line-length and fold safety) */}
            <p
              ref={descRef}
              className="mt-3.5 sm:mt-4 text-[14px] sm:text-[15px] lg:text-[16px] text-[#A99A90] font-normal leading-relaxed max-w-[540px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Kami membantu bisnis berkembang melalui website profesional, web application, AI customer service, dan sistem automasi yang bekerja lebih cerdas.
            </p>

            {/* Two Action CTAs (Guaranteed visible above the fold on 720p/768p/900p) */}
            <div
              ref={ctaRef}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-bold text-[14px] sm:text-[15px] px-6 py-3 sm:py-3.5 rounded-full shadow-[0_4px_20px_rgba(244,91,26,0.4)] hover:shadow-[0_6px_28px_rgba(244,91,26,0.55)] transition-all duration-200 active:scale-95 group whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Diskusikan Proyek</span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Secondary CTA */}
              <Link
                href="/#layanan"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-[#F7F1EB] hover:text-white border border-white/12 hover:border-[#F45B1A]/40 font-semibold text-[14px] sm:text-[15px] px-6 py-3 sm:py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95 group whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Jelajahi Layanan</span>
                <ArrowRight
                  size={16}
                  className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN (Clean Mascot Stage ~46% — No Overlapping Badges) ── */}
          <div
            ref={stageContainerRef}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
            style={{ perspective: "1000px" }}
          >
            {/* Signature Orange Glow Circle Behind Character (Inverse Parallax) */}
            <div
              ref={circleRef}
              aria-hidden="true"
              className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-[#F45B1A]/35 via-[#FF6A2A]/20 to-transparent blur-3xl pointer-events-none -z-0 will-change-transform"
            />

            {/* Subtle Concentric Rings Accent */}
            <div
              ref={concentricRingRef}
              aria-hidden="true"
              className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[390px] lg:h-[390px] rounded-full border border-[#F45B1A]/20 pointer-events-none -z-0 will-change-transform"
            />
            <div
              aria-hidden="true"
              className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full border border-white/[0.04] pointer-events-none -z-0"
            />

            {/* 3D Perspective Mascot Wrapper (Complete Character: Laptop, Tail, Shoes 100% visible) */}
            <div
              ref={mascotWrapperRef}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[530px] flex items-center justify-center will-change-transform"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                ref={mascotImageRef}
                className="w-full flex items-center justify-center"
              >
                <Image
                  src="/images/paham-mascot-laptop.png"
                  alt="Paham Digital Agency Official Cyber-Fox Mascot holding laptop"
                  width={819}
                  height={1024}
                  priority
                  className="w-auto max-w-full h-[clamp(300px,58svh,520px)] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter select-none pointer-events-none"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 520px"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
