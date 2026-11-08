"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  AppWindow,
  MessagesSquare,
  Workflow,
  SearchCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { SERVICES, buildWAUrl } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>
> = {
  website: Monitor,
  webapp: AppWindow,
  ai: MessagesSquare,
  automation: Workflow,
  seo: SearchCheck,
  Monitor: Monitor,
  AppWindow: AppWindow,
  MessagesSquare: MessagesSquare,
  Workflow: Workflow,
  SearchCheck: SearchCheck,
  LayoutDashboard: AppWindow,
  LayoutGrid: AppWindow,
  Bot: MessagesSquare,
  Zap: Workflow,
  Cpu: MessagesSquare,
  GitBranch: Workflow,
  TrendingUp: SearchCheck,
  Search: SearchCheck,
};

function renderServiceIcon(serviceId: string, iconName: string) {
  const IconComponent = SERVICE_ICONS[serviceId] || SERVICE_ICONS[iconName] || Monitor;
  return <IconComponent className="w-6 h-6 text-[#F45B1A]" size={24} strokeWidth={2} />;
}

export default function ServicesSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="layanan"
      aria-labelledby="services-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#F45B1A]/8 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* Section Header with Progressive Reveal */}
        <div className="max-w-2xl mb-14 sm:mb-16 flex flex-col items-start text-left">
          <div
            className={`eyebrow-label mb-5 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
          >
            <span className="eyebrow-dot" />
            <span>LAYANAN KAMI</span>
          </div>

          <h2
            id="services-title"
            className={`font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[56px] reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
          >
            SOLUSI DIGITAL, DISESUAIKAN{" "}
            <span className="text-[#F45B1A]">DENGAN KEBUTUHAN BISNIS.</span>
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#A99A90] leading-relaxed reveal-paragraph ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
          >
            Dari fondasi website profesional hingga kecerdasan buatan dan automasi operasional,
            kami hadirkan teknologi yang relevan dan langsung menghasilkan dampak nyata.
          </p>
        </div>

        {/* 5 Distinctive Services Layout with Staggered Cascades */}
        <div className="flex flex-col gap-6">
          
          {/* Top Row: 2 Major Featured Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.slice(0, 2).map((service, index) => {
              const waUrl = buildWAUrl(service.waMessage);
              return (
                <div
                  key={service.id}
                  className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#17100D] border border-white/12 hover:border-[#F45B1A]/50 hover:-translate-y-1.5 group shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_24px_rgba(244,91,26,0.1)] reveal-card ${getRevealClass()}`}
                  style={{
                    transitionDelay: isInView ? `${index * 140 + 200}ms` : "0ms",
                  }}
                >
                  <div>
                    {/* Top Badge & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-[52px] h-[52px] rounded-2xl bg-[#2A1810] border border-[#F45B1A]/25 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#F45B1A]/45">
                        {renderServiceIcon(service.id, service.icon)}
                      </div>
                      <span className="font-display font-bold text-sm text-[#A99A90] border border-white/10 px-3.5 py-1 rounded-full bg-white/5">
                        0{index + 1} · {service.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F7F1EB] mb-4 group-hover:text-[#F45B1A] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-base text-[#A99A90] leading-relaxed mb-6 font-outfit">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-6 border-t border-white/10 space-y-2.5 mb-8">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-sm text-[#F7F1EB] font-outfit">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <Link
                      href={service.href || "/layanan/"}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
                    >
                      <span>Pelajari Layanan</span>
                      <ArrowRight size={14} className="text-[#F45B1A]" />
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F45B1A] hover:text-[#FF6A2A] transition-colors group/link"
                    >
                      <span>Konsultasi</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Supporting High-Tech Services with Varied Entrances */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(2).map((service, index) => {
              const waUrl = buildWAUrl(service.waMessage);
              return (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 hover:-translate-y-1.5 group shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(244,91,26,0.08)] reveal-card ${getRevealClass()}`}
                  style={{
                    transitionDelay: isInView ? `${index * 140 + 440}ms` : "0ms",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-[52px] h-[52px] rounded-2xl bg-[#2A1810] border border-[#F45B1A]/25 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#F45B1A]/45">
                        {renderServiceIcon(service.id, service.icon)}
                      </div>
                      <span className="font-display font-semibold text-xs text-[#A99A90]">
                        0{index + 3}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45B1A] mb-2 block">
                      {service.category}
                    </span>

                    <h3 className="font-display font-bold text-xl text-[#F7F1EB] mb-3 group-hover:text-[#F45B1A] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#A99A90] leading-relaxed mb-6 font-outfit">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <Link
                      href={service.href || "/layanan/"}
                      className="inline-flex items-center gap-1 text-xs text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
                    >
                      <span>Detail</span>
                      <ArrowRight size={13} className="text-[#F45B1A]" />
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors"
                    >
                      <span>Diskusi WA</span>
                      <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
