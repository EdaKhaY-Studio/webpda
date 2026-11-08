"use client";

import Image from "next/image";
import { TRUSTED_BRANDS } from "@/data/trusted-brands";
import { ExternalLink, ShieldCheck, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TrustedBrandsSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="kolaborasi"
      className="py-20 sm:py-24 lg:py-28 bg-[#0B0807] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F45B1A]/[0.03] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* Section Header with Vertical Scroll Reveal */}
        <div className="max-w-2xl mb-12 sm:mb-16 flex flex-col items-start text-left">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs text-[#A99A90] uppercase tracking-wider font-medium mb-4 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>TRUST &amp; COLLABORATION</span>
          </div>

          <h2
            className={`font-geom font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F7F1EB] tracking-tight leading-[1.15] mb-4 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
          >
            Kolaborasi yang Membangun{" "}
            <span className="text-[#F45B1A]">
              Kepercayaan.
            </span>
          </h2>

          <p
            className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed reveal-paragraph ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
          >
            Setiap proyek adalah kesempatan untuk memahami kebutuhan nyata bisnis lokal dan menghadirkan solusi teknologi yang tepat sasaran.
          </p>
        </div>

        {/* Client Features Display with Staggered Vertical Reveal */}
        <div className="space-y-8">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={brand.id}
              className={`group relative rounded-3xl bg-gradient-to-b from-[#17100D] to-[#120C09] border border-white/[0.09] hover:border-[#F45B1A]/35 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden hover:-translate-y-1 reveal-card ${getRevealClass()}`}
              style={{
                transitionDelay: isInView ? `${idx * 160 + 200}ms` : "0ms",
              }}
            >
              {/* Subtle orange accent glow on card hover */}
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-64 h-64 bg-[#F45B1A]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left side: Brand identity & Logo */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/25 text-[#4ADE80] text-xs font-outfit font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Klien Resmi Terverifikasi</span>
                  </div>

                  {/* Client Logo with Glowing Frame */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg shadow-black/40 border border-white/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={brand.logo}
                        alt={`Logo resmi ${brand.name}`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-tight">
                        {brand.name}
                      </h3>
                      <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
                        {brand.category} · Meulaboh, Aceh Barat
                      </p>
                    </div>
                  </div>

                  {/* Brand Summary */}
                  <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
                    {brand.summary}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2">
                    <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] font-semibold block">
                      Solusi yang Diterapkan:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {brand.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-outfit text-[#F7F1EB]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Impact Card with Quote */}
                <div className="lg:col-span-6">
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0B0807]/90 border border-white/10 shadow-inner group-hover:border-[#F45B1A]/30 transition-colors duration-300">
                    <Quote className="w-8 h-8 text-[#F45B1A]/40 mb-4" />
                    
                    {brand.testimonial && (
                      <p className="font-outfit text-base sm:text-lg text-[#F7F1EB] italic leading-relaxed mb-6">
                        &ldquo;{brand.testimonial.quote}&rdquo;
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-outfit text-[#A99A90]">
                      <div>
                        <div className="font-semibold text-[#F7F1EB]">
                          {brand.testimonial?.author || "Klien Terpercaya"}
                        </div>
                        <div>{brand.testimonial?.role || brand.name}</div>
                      </div>

                      {brand.website && (
                        <a
                          href={brand.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors group/link"
                        >
                          <span>Kunjungi Website</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
