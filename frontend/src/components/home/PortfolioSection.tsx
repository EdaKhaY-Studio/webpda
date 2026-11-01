"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { PORTFOLIO_PROJECTS, buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";

// ── Interactive 3D Perspective Portfolio Card ───────────────────
function PortfolioPerspectiveCard({ project }: { project: (typeof PORTFOLIO_PROJECTS)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotX: 0,
    rotY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setTransform({
      rotX: -normY * 8, // Max tilt: 8deg
      rotY: normX * 8,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: 0.35,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotX: 0,
      rotY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#21140F] border border-white/12 shadow-[0_24px_50px_rgba(0,0,0,0.8)] cursor-pointer will-change-transform"
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${transform.rotX}deg) rotateY(${transform.rotY}deg) ${
          transform.isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"
        }`,
        transition: transform.isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Depth Image Layer */}
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{
          transform: transform.isHovered ? "translateZ(20px) scale(1.04)" : "translateZ(0px) scale(1)",
        }}
      >
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 680px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0807] via-transparent to-transparent opacity-85" />
      </div>

      {/* Dynamic Specular Glare / Sheen Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: transform.glareOpacity,
          background: `radial-gradient(circle 380px at ${transform.glareX}% ${transform.glareY}%, rgba(255, 255, 255, 0.25) 0%, transparent 65%)`,
        }}
      />

      {/* Floating 3D Year & Location Stamp (Foreground Depth) */}
      <div
        className="absolute top-4 left-4 z-30 transition-transform duration-300"
        style={{
          transform: transform.isHovered ? "translateZ(38px)" : "translateZ(10px)",
        }}
      >
        <div className="px-3.5 py-1.5 rounded-full bg-[#F45B1A] text-white text-xs font-bold font-display tracking-wider shadow-[0_4px_16px_rgba(244,91,26,0.45)]">
          {project.year} · UMKM ACEH BARAT
        </div>
      </div>

      {/* Lower Case Study Overlay Bar */}
      <div
        className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between transition-transform duration-300"
        style={{
          transform: transform.isHovered ? "translateZ(30px)" : "translateZ(5px)",
        }}
      >
        <div className="bg-[#17100D]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs text-[#F7F1EB] font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
          <span>Katalog Digital &amp; WhatsApp Automation</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F45B1A] text-white flex items-center justify-center transition-colors">
          <ExternalLink size={16} />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  return (
    <section
      id="portofolio"
      aria-labelledby="portfolio-title"
      className="relative section-py bg-[#17100D] border-y border-white/10 scroll-mt-20 overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow-label mb-5">
              <span className="eyebrow-dot" />
              <span>SELECTED WORK</span>
            </div>
            <h2
              id="portfolio-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[56px]"
            >
              SOLUSI NYATA, UNTUK{" "}
              <span className="text-[#F45B1A]">KEBUTUHAN BISNIS NYATA.</span>
            </h2>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-dark group self-start md:self-auto shrink-0"
          >
            <span>Minta Portofolio Lainnya</span>
            <ArrowUpRight
              size={17}
              className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Project Case Study Showcase */}
        {PORTFOLIO_PROJECTS.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0B0807] border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Left: Interactive 3D Perspective Card (7 cols) */}
            <div className="lg:col-span-7 relative group">
              <PortfolioPerspectiveCard project={project} />
            </div>

            {/* Right: Editorial Narrative Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F45B1A] block mb-2">
                  {project.category}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-[#A99A90] mb-6">
                  Klien: <span className="text-[#F7F1EB]">{project.client}</span> · {project.industry}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-4 pt-4 border-t border-white/10 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#A99A90] mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Tantangan Awal:
                    </h4>
                    <p className="text-sm text-[#F7F1EB] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F45B1A] mb-1.5 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#F45B1A]" />
                      Solusi yang Dibangun:
                    </h4>
                    <p className="text-sm text-[#F7F1EB] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A99A90]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={buildWAUrl(
                    `Halo Tim Paham Digital! Saya tertarik dengan studi kasus *${project.title}*. Saya ingin konsultasi solusi serupa untuk bisnis saya di Aceh Barat.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-orange w-full sm:w-auto"
                >
                  <span>Konsultasi Proyek Serupa</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
