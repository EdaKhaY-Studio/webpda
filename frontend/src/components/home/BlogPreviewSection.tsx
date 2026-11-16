"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/site-config";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPreviewSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  // Sort articles newest first
  const articles = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const total = articles.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCardHeight, setActiveCardHeight] = useState<number>(640);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Touch gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  // Dynamic height sync with active card
  useEffect(() => {
    const activeEl = cardRefs.current[activeIndex];
    if (activeEl) {
      const updateHeight = () => {
        if (activeEl.offsetHeight > 0) {
          setActiveCardHeight(activeEl.offsetHeight);
        }
      };

      updateHeight();

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.height > 0) {
            setActiveCardHeight(Math.ceil(entry.contentRect.height));
          }
        }
      });

      observer.observe(activeEl);
      window.addEventListener("resize", updateHeight);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, [activeIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="blog"
      aria-labelledby="blog-title"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative section-py bg-[#17100D] border-y border-white/10 scroll-mt-20 overflow-hidden focus:outline-none"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] rounded-full bg-[#F45B1A]/8 blur-[140px] -z-10"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div
              className={`eyebrow-label mb-4 reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
            >
              <span className="eyebrow-dot" />
              <span>PAHAM DIGITAL — DIGITAL KNOWLEDGE</span>
            </div>

            <h2
              id="blog-title"
              className={`font-geom font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-3xl sm:text-4xl lg:text-[46px] mb-4 reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
            >
              Wawasan <span className="text-[#F45B1A]">Digital & Teknologi</span>
            </h2>

            <p
              className={`font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
            >
              Kenali teknologi yang ada di balik bisnis digital. Mulai dari
              website, SEO, Google Search, hingga otomasi, kita pelajari
              bersama dengan bahasa sehari-hari yang gampang dipahami.
            </p>
          </div>

          <div
            className={`shrink-0 self-start lg:self-end reveal-button ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
          >
            <Link
              href="/blog/"
              className="btn-secondary-dark group inline-flex items-center gap-2 px-6 py-3"
            >
              <span>Jelajahi Semua Artikel</span>
              <ArrowRight
                size={16}
                className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Stacked Editorial Card Carousel Stage */}
        <div
          className={`reveal-card ${getRevealClass()}`}
          style={{ transitionDelay: isInView ? "320ms" : "0ms" }}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Wawasan Digital & Teknologi Carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-full sm:max-w-2xl lg:max-w-[720px] mx-auto [--peek-offset:38px] sm:[--peek-offset:140px] lg:[--peek-offset:230px] [--peek-scale:0.91] sm:[--peek-scale:0.86] lg:[--peek-scale:0.84]"
            style={{
              height: `${activeCardHeight}px`,
              minHeight: "580px",
              transition: "height 380ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {articles.map((post, idx) => {
              // Calculate cyclic offset relative to active card
              let relOffset = idx - activeIndex;
              const half = Math.floor(total / 2);
              if (relOffset > half) relOffset -= total;
              if (relOffset < -half) relOffset += total;

              const isCenter = relOffset === 0;
              const isLeft = relOffset === -1;
              const isRight = relOffset === 1;

              // Compute smooth transform, rotation, scale, opacity, and stacking
              let transformStr = "";
              let opacityVal = 0;
              let zIndexVal = 0;
              let pointerEventsVal: "auto" | "none" = "none";

              if (isCenter) {
                transformStr = "translate(-50%, 0) scale(1) rotate(0deg)";
                opacityVal = 1;
                zIndexVal = 30;
                pointerEventsVal = "auto";
              } else if (isLeft) {
                transformStr =
                  "translate(calc(-50% - var(--peek-offset)), 0) scale(var(--peek-scale)) rotate(-4.5deg)";
                opacityVal = 0.58;
                zIndexVal = 10;
                pointerEventsVal = "auto";
              } else if (isRight) {
                transformStr =
                  "translate(calc(-50% + var(--peek-offset)), 0) scale(var(--peek-scale)) rotate(4.5deg)";
                opacityVal = 0.58;
                zIndexVal = 10;
                pointerEventsVal = "auto";
              } else if (relOffset < -1) {
                transformStr =
                  "translate(calc(-50% - (var(--peek-offset) * 1.5)), 0) scale(0.7) rotate(-8deg)";
                opacityVal = 0;
                zIndexVal = 0;
                pointerEventsVal = "none";
              } else {
                transformStr =
                  "translate(calc(-50% + (var(--peek-offset) * 1.5)), 0) scale(0.7) rotate(8deg)";
                opacityVal = 0;
                zIndexVal = 0;
                pointerEventsVal = "none";
              }

              return (
                <div
                  key={post.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`absolute top-0 left-1/2 w-full max-w-[92vw] sm:max-w-[560px] lg:max-w-[680px] rounded-3xl transition-all ${
                    isCenter
                      ? "shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(244,91,26,0.14)] border border-[#F45B1A]/35 bg-gradient-to-b from-[#1C130F] to-[#120B08]"
                      : "shadow-[0_16px_40px_rgba(0,0,0,0.65)] border border-white/12 bg-[#17100D] hover:border-[#F45B1A]/40"
                  }`}
                  style={{
                    transform: transformStr,
                    opacity: opacityVal,
                    zIndex: zIndexVal,
                    pointerEvents: pointerEventsVal,
                    transition:
                      "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 450ms ease, border-color 300ms ease",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Flanking Card Clickable Overlay with Visual Hint */}
                  {!isCenter && (
                    <div
                      onClick={isLeft ? handlePrev : handleNext}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          if (isLeft) handlePrev();
                          else handleNext();
                        }
                      }}
                      aria-label={
                        isLeft
                          ? `Buka artikel sebelumnya: ${post.title}`
                          : `Buka artikel selanjutnya: ${post.title}`
                      }
                      className="absolute inset-0 z-20 cursor-pointer rounded-3xl bg-[#0B0807]/45 hover:bg-[#0B0807]/15 backdrop-blur-[0.5px] transition-all flex flex-col items-center justify-center p-4 group/overlay"
                    >
                      <div className="opacity-0 group-hover/overlay:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/overlay:translate-y-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F45B1A] text-white text-xs font-geom font-bold shadow-[0_4px_20px_rgba(244,91,26,0.4)]">
                        {isLeft ? (
                          <>
                            <ChevronLeft className="w-4 h-4" />
                            <span>Artikel Sebelumnya</span>
                          </>
                        ) : (
                          <>
                            <span>Artikel Selanjutnya</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Card Main Editorial Content */}
                  <article className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Metadata Row Above Cover Image */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-[#F45B1A] text-white text-[11px] font-bold uppercase tracking-wider font-geom shadow-sm">
                            {post.category}
                          </span>
                          {post.articleNumber && (
                            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[11px] font-bold uppercase tracking-wider font-geom">
                              ARTIKEL {post.articleNumber}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#A99A90] font-outfit">
                          <Clock className="w-3.5 h-3.5 text-[#F45B1A]" />
                          <span>{post.readingTime} menit baca</span>
                        </div>
                      </div>

                      {/* Visual 16:9 Cover Artwork */}
                      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0B0807] mb-5 shadow-inner group/img">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage}
                            alt={post.coverAlt || post.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                            loading={idx === 0 ? "eager" : "lazy"}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                            <span className="text-sm font-geom text-[#F45B1A] font-bold">
                              PAHAM DIGITAL
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Publication Date & Author */}
                      <div className="flex items-center gap-2 text-xs text-[#A99A90] font-outfit mb-2.5">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>·</span>
                        <span className="text-[#F7F1EB]">
                          Penulis: {post.author}
                        </span>
                      </div>

                      {/* Full Article Title */}
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="block group/title no-underline"
                        tabIndex={isCenter ? 0 : -1}
                      >
                        <h3 className="font-geom font-bold text-xl sm:text-2xl lg:text-[27px] text-[#F7F1EB] group-hover/title:text-[#F45B1A] transition-colors leading-[1.2] mb-3.5">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Full Synopsis / Excerpt — Preserving Complete Content */}
                      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed mb-6 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action & Quality Badge */}
                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                        <span className="text-xs font-outfit text-[#D5CBC3] flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F45B1A]" />
                          Wawasan Edukasi Resmi
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}/`}
                        tabIndex={isCenter ? 0 : -1}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-xs sm:text-sm font-outfit font-bold transition-all shadow-md shadow-[#F45B1A]/25 hover:shadow-lg hover:shadow-[#F45B1A]/40 hover:-translate-y-0.5 group/btn"
                      >
                        <span>Baca Artikel Lengkap</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Carousel Interactive Controls & Pagination Bar */}
          <div className="w-full max-w-full sm:max-w-2xl lg:max-w-[720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-6 border-t border-white/10">
            {/* Left: Article Counter */}
            <div className="flex items-center gap-3">
              <span className="font-geom font-extrabold text-[#F45B1A] text-lg sm:text-xl tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-white/20 text-sm font-geom font-light">
                /
              </span>
              <span className="font-geom font-medium text-[#A99A90] text-sm tracking-wider">
                {String(total).padStart(2, "0")}
              </span>
              <span className="text-xs text-[#A99A90] font-outfit ml-1 hidden sm:inline truncate max-w-[200px]">
                — {articles[activeIndex]?.category}
              </span>
            </div>

            {/* Center: Interactive Indicators / Progress Pills */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Pilih Artikel"
            >
              {articles.map((post, idx) => (
                <button
                  key={post.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Buka artikel ${idx + 1}: ${post.title}`}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 sm:w-10 bg-[#F45B1A] shadow-[0_0_10px_rgba(244,91,26,0.6)]"
                      : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Right: Prev & Next Arrow Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                aria-label="Artikel sebelumnya"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-[#17100D] hover:border-[#F45B1A]/50 hover:bg-[#21140F] text-[#F7F1EB] hover:text-[#F45B1A] transition-all flex items-center justify-center shadow-md active:scale-95 group"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Artikel selanjutnya"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-[#17100D] hover:border-[#F45B1A]/50 hover:bg-[#21140F] text-[#F7F1EB] hover:text-[#F45B1A] transition-all flex items-center justify-center shadow-md active:scale-95 group"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
