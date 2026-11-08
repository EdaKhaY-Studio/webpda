"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, buildWAUrl, WHATSAPP_MESSAGES, NAV_ITEMS, SERVICES } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.general);
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <footer
      ref={sectionRef}
      role="contentinfo"
      className="bg-[#0B0807] border-t border-white/10 text-[#A99A90] font-body"
    >
      <div className="container-site pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column (5 cols) */}
          <div
            className={`md:col-span-5 flex flex-col items-start reveal-card ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            <Link
              href="/"
              aria-label="Paham Digital Agency — Beranda"
              className="inline-block group mb-6"
            >
              <div className="relative h-13 w-auto flex items-center">
                <Image
                  src="/images/logo-paham-light.png"
                  alt="Paham Digital Agency Logo"
                  width={150}
                  height={56}
                  className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base leading-relaxed text-[#A99A90] max-w-sm mb-6">
              <strong className="text-[#F7F1EB] font-display font-semibold block mb-1">
                {SITE_CONFIG.tagline}
              </strong>
              {SITE_CONFIG.shortDescription}
            </p>

            {/* Expandable Social Media Interaction Group (Footer Only, Horizontal Right Reveal) */}
            <div className="flex items-center gap-3 pt-1" aria-label="Media Sosial Resmi Paham Digital Agency">
              {/* Instagram Expandable Pill */}
              <a
                href="https://www.instagram.com/pahamdigitall.id/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @pahamdigitall.id"
                className="group relative h-11 w-11 hover:w-[195px] sm:hover:w-[215px] focus-visible:w-[195px] sm:focus-visible:w-[215px] rounded-full bg-[#17100D] border border-white/10 hover:border-[#E1306C]/60 hover:bg-[#1E1117] hover:shadow-[0_4px_22px_rgba(225,48,108,0.3)] text-[#A99A90] hover:text-[#F7F1EB] flex items-center overflow-hidden transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:text-[#E1306C]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center pr-4 pl-1 whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 delay-75 select-none pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E1306C] leading-none mb-1">
                    Instagram
                  </span>
                  <span className="text-xs font-semibold text-[#F7F1EB] leading-none">
                    @pahamdigitall.id
                  </span>
                </div>
              </a>

              {/* TikTok Expandable Pill */}
              <a
                href="https://www.tiktok.com/@pahamdigitall.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @pahamdigitall.id"
                className="group relative h-11 w-11 hover:w-[195px] sm:hover:w-[215px] focus-visible:w-[195px] sm:focus-visible:w-[215px] rounded-full bg-[#17100D] border border-white/10 hover:border-[#00F2FE]/60 hover:bg-[#0E161B] hover:shadow-[0_4px_22px_rgba(0,242,254,0.25)] text-[#A99A90] hover:text-[#F7F1EB] flex items-center overflow-hidden transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F2FE]"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:text-[#00F2FE]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.23 8.23 0 004.83 1.56V6.9a4.85 4.85 0 01-1.06-.21z"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center pr-4 pl-1 whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 delay-75 select-none pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00F2FE] leading-none mb-1">
                    TikTok
                  </span>
                  <span className="text-xs font-semibold text-[#F7F1EB] leading-none">
                    @pahamdigitall.id
                  </span>
                </div>
              </a>

              {/* WhatsApp Expandable Pill */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp 082311307556"
                className="group relative h-11 w-11 hover:w-[195px] sm:hover:w-[215px] focus-visible:w-[195px] sm:focus-visible:w-[215px] rounded-full bg-[#17100D] border border-white/10 hover:border-[#22C55E]/60 hover:bg-[#0E1912] hover:shadow-[0_4px_22px_rgba(34,197,94,0.3)] text-[#A99A90] hover:text-[#F7F1EB] flex items-center overflow-hidden transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:text-[#22C55E]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center pr-4 pl-1 whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 delay-75 select-none pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#22C55E] leading-none mb-1">
                    WhatsApp
                  </span>
                  <span className="text-xs font-semibold text-[#F7F1EB] leading-none">
                    082311307556
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div
            className={`md:col-span-3 reveal-card ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
          >
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#F45B1A] mb-5">
              Navigasi Halaman
            </h3>
            <ul className="space-y-3 text-sm font-outfit">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (4 cols) */}
          <div
            className={`md:col-span-4 reveal-card ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "380ms" : "0ms" }}
          >
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#F45B1A] mb-5">
              Layanan Utama
            </h3>
            <ul className="space-y-3 text-sm font-outfit">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href || "/layanan/"}
                    className="text-[#A99A90] hover:text-[#F7F1EB] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-[#F45B1A] transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div
          className={`mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A99A90] font-outfit reveal-paragraph ${getRevealClass()}`}
          style={{ transitionDelay: isInView ? "480ms" : "0ms" }}
        >
          <p>© {currentYear} {SITE_CONFIG.name}. Seluruh hak cipta dilindungi.</p>
          <p>{SITE_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
