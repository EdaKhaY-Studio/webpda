"use client";

import { PROCESS_STEPS } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProcessSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="cara-kerja"
      aria-labelledby="process-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture scroll-mt-20 overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Header with Vertical Scroll Reveal */}
        <div className="max-w-2xl mb-16 sm:mb-20 flex flex-col items-start text-left">
          <div
            className={`eyebrow-label mb-5 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
          >
            <span className="eyebrow-dot" />
            <span>HOW WE WORK</span>
          </div>

          <h2
            id="process-title"
            className={`font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[56px] reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
          >
            DARI IDE MENJADI{" "}
            <span className="text-[#F45B1A]">SOLUSI DIGITAL.</span>
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#A99A90] leading-relaxed font-outfit reveal-paragraph ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
          >
            Metodologi kerja terstruktur, transparan, dan berorientasi hasil agar proses
            transformasi bisnis Anda berjalan lancar tanpa kerumitan teknis.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Line across desktop steps */}
          <div
            aria-hidden="true"
            className={`hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-gradient-to-r from-[#F45B1A] via-white/20 to-white/10 z-0 origin-left transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className={`flex flex-col p-7 sm:p-8 rounded-3xl bg-[#17100D] border border-white/12 hover:border-[#F45B1A]/50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 group shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(244,91,26,0.1)] reveal-card ${getRevealClass()}`}
                style={{
                  transitionDelay: isInView ? `${idx * 140 + 200}ms` : "0ms",
                }}
              >
                {/* Step Circle Node */}
                <div className="w-14 h-14 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/40 flex items-center justify-center mb-6 group-hover:border-[#F45B1A] group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,91,26,0.2)]">
                  <span className="font-display font-extrabold text-lg text-[#F45B1A]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#F7F1EB] mb-3 group-hover:text-[#F45B1A] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A99A90] leading-relaxed font-outfit">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
