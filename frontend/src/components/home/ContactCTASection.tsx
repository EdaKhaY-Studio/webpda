"use client";

import { ArrowUpRight } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES, SITE_CONFIG } from "@/lib/site-config";

export default function ContactCTASection() {
  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture scroll-mt-20 overflow-hidden"
    >
      {/* Background orange glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#F45B1A]/12 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* High-Impact Creative Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#17100D] via-[#21140F] to-[#17100D] border border-white/15 p-8 sm:p-14 lg:p-20 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          
          {/* Subtle Orange Glow in Corner */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F45B1A]/20 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl">
            
            <div className="eyebrow-label mb-6">
              <span className="eyebrow-dot" />
              <span>MULAI KOLABORASI</span>
            </div>

            <h2
              id="contact-cta-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.02] text-[36px] sm:text-[54px] lg:text-[68px] mb-6"
            >
              LET&apos;S BUILD SOMETHING THAT{" "}
              <span className="text-[#F45B1A]">MOVES YOUR BUSINESS FORWARD.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#A99A90] leading-relaxed max-w-2xl mb-10">
              Mulai dari kebutuhan website profesional, asisten AI customer service 24/7,
              hingga automasi alur kerja digital. Mari bicarakan langkah nyata untuk bisnis Anda.
            </p>

            {/* CTAs & Contact channels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-orange text-base px-8 py-4 shadow-[0_6px_28px_rgba(244,91,26,0.45)] group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Diskusi via WhatsApp</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="btn-secondary-dark text-base px-7 py-4"
              >
                <span>Email: {SITE_CONFIG.email}</span>
              </a>
            </div>

            <p className="mt-8 text-xs text-[#A99A90]">
              * Melayani konsultasi daring dan tatap muka untuk pelaku usaha di Meulaboh, Aceh Barat, dan sekitarnya.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
