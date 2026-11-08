"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PahamValue {
  letter: string;
  name: string;
  title: string;
  description: string;
  colSpanDesktop: string;
  tag: string;
}

const PAHAM_VALUES: PahamValue[] = [
  {
    letter: "P",
    name: "PROFESSIONALISM",
    title: "Profesional dalam Berkarya.",
    description:
      "Kami menghargai setiap proses, menjaga kualitas pekerjaan, dan berusaha memberikan hasil terbaik. Bukan sekadar selesai, tetapi juga harus punya kualitas dan tujuan yang jelas.",
    colSpanDesktop: "lg:col-span-6",
    tag: "Kualitas & Standar Kerja",
  },
  {
    letter: "A",
    name: "AMANAH",
    title: "Amanah dalam Menjaga Kepercayaan.",
    description:
      "Setiap kepercayaan adalah tanggung jawab. Kami mengutamakan kejujuran, keterbukaan, dan komitmen dalam setiap kerja sama tanpa kompromi.",
    colSpanDesktop: "lg:col-span-6",
    tag: "Integritas & Tanggung Jawab",
  },
  {
    letter: "H",
    name: "HUMAN-CENTERED",
    title: "Humanis dalam Berkolaborasi.",
    description:
      "Teknologi dibuat untuk membantu manusia, bukan menambah kerumitan. Kami mendengarkan, memahami, dan menghargai setiap kebutuhan unik mitra bisnis.",
    colSpanDesktop: "lg:col-span-4",
    tag: "Empati & Kemudahan",
  },
  {
    letter: "A",
    name: "ADAPTIVE",
    title: "Adaptif Menghadapi Perubahan.",
    description:
      "Dunia digital terus berkembang pesat. Kami terbuka terhadap ide baru, terus belajar, dan siap beradaptasi agar solusi tetap relevan dengan kebutuhan zaman.",
    colSpanDesktop: "lg:col-span-4",
    tag: "Kelincahan & Pembelajaran",
  },
  {
    letter: "M",
    name: "MEANINGFUL IMPACT",
    title: "Memberi Manfaat Nyata Lebih Luas.",
    description:
      "Kami percaya karya terbaik bukan hanya tentang angka keuntungan, tetapi juga tentang manfaat yang bisa dirasakan oleh mitra bisnis dan masyarakat.",
    colSpanDesktop: "lg:col-span-4",
    tag: "Dampak Positif Berkelanjutan",
  },
];

export default function AboutValuesSection() {
  const { sectionRef, getRevealClass, isInView, scrollDirection } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="nilai-paham"
      aria-labelledby="values-title"
      className="relative section-py bg-[#17100D] border-b border-white/10 overflow-hidden"
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#F45B1A]/[0.05] pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* Asymmetric Split Intro Header */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
        >
          <div className="lg:col-span-7">
            <div className="eyebrow-label mb-5">
              <span className="eyebrow-dot" />
              <span>OUR CORE VALUES</span>
            </div>

            <h2
              id="values-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[54px]"
            >
              Berkarya dengan Nilai,{" "}
              <span className="text-[#F45B1A]">Bertumbuh dengan Manfaat.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-white/10 space-y-3">
            <p className="text-base sm:text-lg text-[#A99A90] leading-relaxed font-outfit">
              Prinsip yang menjadi pegangan kami dalam membangun teknologi, bekerja sama, dan menghadirkan solusi digital untuk kemajuan bersama.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>5 Pilar Filosofi Kerja P-A-H-A-M</span>
            </div>
          </div>
        </div>

        {/* 5-Part PAHAM Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {PAHAM_VALUES.map((val, idx) => {
            const cardDelay = isInView
              ? scrollDirection === "down"
                ? `${(idx + 1) * 140}ms`
                : `${(PAHAM_VALUES.length - idx) * 140}ms`
              : "0ms";

            return (
              <div
                key={`${val.letter}-${val.name}`}
                className={`${val.colSpanDesktop} relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 group shadow-[0_12px_36px_rgba(0,0,0,0.5)] overflow-hidden ${getRevealClass()}`}
                style={{
                  transitionDelay: cardDelay,
                }}
              >
              {/* Giant Sculptural Letter in the Background */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-4 sm:right-6 font-geom font-extrabold text-7xl sm:text-8xl lg:text-9xl text-white/[0.03] group-hover:text-white/[0.07] transition-all duration-500 pointer-events-none select-none group-hover:scale-105"
              >
                {val.letter}
              </div>

              <div>
                {/* Header Tag with Letter badge */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#F45B1A]/15 border border-[#F45B1A]/30 flex items-center justify-center font-geom font-extrabold text-xl sm:text-2xl text-[#F45B1A] group-hover:bg-[#F45B1A] group-hover:text-white transition-all shadow-[0_0_15px_rgba(244,91,26,0.25)]">
                    {val.letter}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#F45B1A] font-geom block">
                      {val.name}
                    </span>
                    <span className="text-[11px] text-[#A99A90] font-outfit">
                      Nilai Ke-{idx + 1} PAHAM
                    </span>
                  </div>
                </div>

                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] mb-4 leading-snug group-hover:text-[#F45B1A] transition-colors relative z-10">
                  {val.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A99A90] font-outfit leading-relaxed relative z-10">
                  {val.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator line */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D5CBC3] font-outfit relative z-10">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                  <span>{val.tag}</span>
                </span>
                <span className="font-geom text-[#A99A90] text-[11px] tracking-wider uppercase">
                  P-A-H-A-M
                </span>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
