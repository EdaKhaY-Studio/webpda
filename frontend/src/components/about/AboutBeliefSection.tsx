"use client";

import { HeartHandshake, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutBeliefSection() {
  const { sectionRef, getRevealClass } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="prinsip"
      aria-labelledby="belief-title"
      className="relative pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 bg-[#0B0807] border-b border-white/10 overflow-hidden"
    >
      {/* Background subtle radial ambient light */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#F45B1A]/[0.04] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="container-site relative z-10">
        
        {/* Section Top Meta Row: Section Number & Divider */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-white/8 text-xs font-geom uppercase tracking-widest text-[#A99A90]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>07 · BRAND PRINCIPLES</span>
          </div>
          <span className="text-[#F45B1A]/70 font-semibold">PAHAM PHILOSOPHY</span>
        </div>

        {/* ── ASYMMETRIC TWO-COLUMN LAYOUT (Desktop: 45% Left / 55% Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN — 45% WIDTH (5 of 12 cols, sticky/sculptural headline) */}
          <div
            className={`lg:col-span-5 flex flex-col items-start text-left transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            {/* Badge */}
            <div className="eyebrow-label mb-6">
              <span className="eyebrow-dot" />
              <span>WHAT WE BELIEVE</span>
            </div>

            {/* Main Headline with deliberate line breaks & prominent left-alignment */}
            <h2
              id="belief-title"
              className="font-geom font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#F7F1EB] leading-[1.12] tracking-tight"
            >
              Teknologi Boleh Terus Berkembang,{" "}
              <span className="text-[#F45B1A]">
                Nilai Kebaikan
              </span>{" "}
              Harus{" "}
              <span className="text-[#F7F1EB] border-b-2 border-[#F45B1A] pb-0.5">
                Tetap Menjadi Pegangan.
              </span>
            </h2>

            {/* Subtle decorative accent */}
            <div className="mt-8 pt-6 border-t border-white/8 hidden lg:flex items-center gap-3 text-xs text-[#A99A90] font-outfit">
              <ShieldCheck className="w-4 h-4 text-[#F45B1A]" />
              <span>Integritas, Amanah, &amp; Ihsan</span>
            </div>
          </div>

          {/* RIGHT COLUMN — 55% WIDTH (7 of 12 cols, editorial narrative flow) */}
          <div
            className={`lg:col-span-7 flex flex-col space-y-6 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            {/* Paragraph 01 */}
            <p className="text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
              Bagi kami, membangun bisnis bukan hanya tentang menciptakan produk atau mengejar pencapaian. Ada prinsip yang harus dijaga dalam setiap langkah.
            </p>

            {/* Paragraph 02: Special Visual Emphasis Panel with clean uniform border */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-colors shadow-lg my-2">
              <p className="text-base sm:text-lg text-[#F7F1EB] font-outfit leading-relaxed">
                Kami percaya bahwa <strong className="text-[#F45B1A] font-semibold">kepercayaan adalah amanah</strong>, kualitas adalah bentuk kesungguhan atau <strong className="text-[#F45B1A] font-semibold">ihsan</strong>, dan setiap teknologi yang dibangun seharusnya membawa manfaat bagi orang lain.
              </p>
            </div>

            {/* Paragraph 03 */}
            <p className="text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
              Melalui lima nilai PAHAM, kami berkomitmen untuk terus berkarya secara profesional, menjaga kepercayaan, mengutamakan manusia, beradaptasi dengan perubahan, dan menghadirkan dampak yang berarti.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
