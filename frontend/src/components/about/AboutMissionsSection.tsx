"use client";

import { useEffect, useRef, useState } from "react";
import { Handshake, Cpu, ShieldCheck } from "lucide-react";

interface Mission {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  focus: string;
  featured?: boolean;
}

const MISSIONS: Mission[] = [
  {
    number: "01",
    badge: "MISSION 01",
    title: "Memahami Kebutuhan, Mendampingi Pertumbuhan.",
    description:
      "Menjadi mitra kreatif yang memahami karakter, kebutuhan, dan tantangan setiap bisnis, serta mendampingi pemiliknya dalam menemukan solusi dan peluang untuk berkembang.",
    icon: <Handshake className="w-6 h-6 text-[#F45B1A]" />,
    focus: "Empati & Pendampingan Nyata",
  },
  {
    number: "02",
    badge: "MISSION 02 · CORE TECH",
    title: "Mempermudah Pekerjaan, Memperluas Jangkauan.",
    description:
      "Menghadirkan teknologi melalui website, web application, AI, dan automasi untuk menyederhanakan operasional bisnis sekaligus membantu usaha lebih dikenal dan ditemukan oleh orang yang membutuhkannya.",
    icon: <Cpu className="w-6 h-6 text-[#F45B1A]" />,
    focus: "Efisiensi & Skalabilitas Digital",
    featured: true,
  },
  {
    number: "03",
    badge: "MISSION 03",
    title: "Menjaga Amanah, Menghadirkan Manfaat.",
    description:
      "Menjunjung tinggi kejujuran, tanggung jawab, dan nilai ihsan dalam setiap proses kerja agar setiap solusi digital memberikan manfaat nyata bagi mitra bisnis dan masyarakat.",
    icon: <ShieldCheck className="w-6 h-6 text-[#F45B1A]" />,
    focus: "Integritas & Dampak Kebaikan",
  },
];

export default function AboutMissionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="misi"
      aria-labelledby="missions-title"
      className="relative section-py bg-[#0B0807] bg-grid-texture border-b border-white/10 overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Asymmetric Split Intro Header */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="lg:col-span-7">
            <div className="eyebrow-label mb-5">
              <span className="eyebrow-dot" />
              <span>OUR MISSIONS</span>
            </div>

            <h2
              id="missions-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[54px]"
            >
              Bagaimana Kami{" "}
              <span className="text-[#F45B1A]">Mewujudkannya.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-white/10 space-y-3">
            <p className="text-base sm:text-lg text-[#A99A90] leading-relaxed font-outfit">
              Visi membutuhkan langkah nyata. Inilah tiga prinsip aksi yang menjadi kompas operasional kami dalam membangun produk dan mendampingi pertumbuhan mitra.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>3 Pilar Transformasi Berkelanjutan</span>
            </div>
          </div>
        </div>

        {/* 3 Mission Cards Grid with Distinct Visual Nuances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MISSIONS.map((m, idx) => (
            <div
              key={m.number}
              className={`flex flex-col justify-between p-8 sm:p-9 rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 group ${
                m.featured
                  ? "bg-gradient-to-b from-[#1C120E] via-[#17100D] to-[#120D0A] border border-[#F45B1A]/40 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(244,91,26,0.12)]"
                  : "bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(idx + 1) * 120 + 80}ms` : "0ms",
              }}
            >
              <div>
                {/* Header with Large Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                      m.featured
                        ? "bg-[#F45B1A]/15 border border-[#F45B1A]/40"
                        : "bg-[#0B0807] border border-white/10 group-hover:border-[#F45B1A]/40 group-hover:bg-[#F45B1A]/10"
                    }`}
                  >
                    {m.icon}
                  </div>
                  <span
                    className={`font-geom font-extrabold text-3xl sm:text-4xl transition-colors ${
                      m.featured
                        ? "text-[#F45B1A]"
                        : "text-[#F45B1A]/40 group-hover:text-[#F45B1A]"
                    }`}
                  >
                    {m.number}
                  </span>
                </div>

                <span className="text-xs uppercase font-bold tracking-wider text-[#F45B1A] font-geom block mb-2">
                  {m.badge}
                </span>

                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] mb-4 leading-snug group-hover:text-[#F45B1A] transition-colors">
                  {m.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A99A90] font-outfit leading-relaxed mb-6">
                  {m.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-5 border-t border-white/8 flex items-center justify-between text-xs text-[#D5CBC3] font-outfit">
                <span>Fokus:</span>
                <span className="text-[#F7F1EB] font-semibold">{m.focus}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
