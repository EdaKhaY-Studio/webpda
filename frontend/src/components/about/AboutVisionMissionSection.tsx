"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MissionItem {
  number: string;
  title: string;
  description: string;
}

const MISSIONS: MissionItem[] = [
  {
    number: "01.",
    title: "Memahami Kebutuhan, Mendampingi Pertumbuhan.",
    description:
      "Menjadi mitra kreatif yang memahami karakter, kebutuhan, dan tantangan setiap bisnis, serta mendampingi pemiliknya dalam menemukan solusi dan peluang untuk berkembang.",
  },
  {
    number: "02.",
    title: "Mempermudah Pekerjaan, Memperluas Jangkauan.",
    description:
      "Menghadirkan teknologi melalui website, web application, AI, dan automasi untuk menyederhanakan operasional bisnis sekaligus membantu usaha lebih dikenal dan ditemukan oleh orang yang membutuhkannya.",
  },
  {
    number: "03.",
    title: "Menjaga Amanah, Menghadirkan Manfaat.",
    description:
      "Menjunjung tinggi kejujuran, tanggung jawab, dan nilai ihsan dalam setiap proses kerja agar setiap solusi digital memberikan manfaat nyata bagi mitra bisnis dan masyarakat.",
  },
];

export default function AboutVisionMissionSection() {
  const { sectionRef, getRevealClass } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="visi-misi"
      aria-labelledby="vision-mission-heading"
      className="relative section-py bg-[#0B0807] bg-grid-texture border-b border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#F45B1A]/[0.05] pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          <div className="eyebrow-label mb-5">
            <span className="eyebrow-dot" />
            <span>VISION &amp; MISSION</span>
          </div>

          <h2
            id="vision-mission-heading"
            className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[32px] sm:text-[44px] lg:text-[50px] mb-4"
          >
            Fondasi Arah &amp;{" "}
            <span className="text-[#F45B1A]">Prinsip Aksi Kami.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
            Komitmen terpadu yang memandu setiap langkah transformasi digital dan memastikan teknologi senantiasa menghadirkan manfaat nyata bagi pertumbuhan bisnis.
          </p>
        </div>

        {/* ── UNIFIED TWO-COLUMN INFORMATION PANEL (40% VISI / 60% MISI) ── */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1C120E] via-[#17100D] to-[#120D0A] border border-white/10 p-6 sm:p-9 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-all duration-900 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          {/* Subtle warm orange glow highlight in the background */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#F45B1A]/[0.07] blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-start relative z-10">
            
            {/* ── COLUMN 01: VISI (~40%) ── */}
            <div className="flex flex-col text-left">
              {/* Heading with slim vertical orange accent line */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-7">
                <span
                  className="w-1 h-5 sm:h-6 rounded-full bg-[#F45B1A] shrink-0"
                  aria-hidden="true"
                />
                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] tracking-tight">
                  Visi
                </h3>
              </div>

              {/* Vision Statement with Strong Typographic Hierarchy */}
              <p className="font-geom font-semibold text-lg sm:text-xl lg:text-[22px] text-[#F7F1EB] leading-relaxed tracking-tight mb-6">
                &ldquo;Menjadi Mitra Kreatif dan Transformasi Digital yang Amanah, untuk Membantu Setiap Bisnis Bertumbuh, Naik Level, dan Menjangkau Lebih Banyak Orang yang Membutuhkannya.&rdquo;
              </p>

              {/* Supporting Context Text */}
              <p className="text-sm sm:text-base text-[#A99A90] font-outfit leading-relaxed pt-6 border-t border-white/8">
                Kami percaya setiap bisnis punya potensi untuk berkembang. Melalui kreativitas, teknologi, dan kolaborasi yang berlandaskan nilai kebaikan, kami ingin membuka lebih banyak peluang agar bisnis tidak hanya dikenal oleh lingkungan terdekat, tetapi juga hadir dan memberi manfaat bagi masyarakat yang lebih luas.
              </p>
            </div>

            {/* ── COLUMN 02: MISI (~60%) ── */}
            <div className="flex flex-col text-left border-t border-white/[0.08] pt-8 mt-2 lg:border-t-0 lg:pt-0 lg:mt-0 lg:border-l lg:border-white/[0.08] lg:pl-12">
              {/* Heading with slim vertical orange accent line */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-7">
                <span
                  className="w-1 h-5 sm:h-6 rounded-full bg-[#F45B1A] shrink-0"
                  aria-hidden="true"
                />
                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] tracking-tight">
                  Misi
                </h3>
              </div>

              {/* Clean Numbered Vertical Mission List */}
              <div className="space-y-7">
                {MISSIONS.map((m) => (
                  <div key={m.number} className="space-y-2">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-geom font-bold text-sm sm:text-base text-[#F45B1A] shrink-0">
                        {m.number}
                      </span>
                      <h4 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
                        {m.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-[#A99A90] font-outfit leading-relaxed pl-6 sm:pl-7">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
