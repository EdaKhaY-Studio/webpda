"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, TrendingUp, Layers, Globe } from "lucide-react";

export default function AboutVisionSection() {
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
      id="visi"
      aria-labelledby="vision-title"
      className="relative section-py bg-[#17100D] border-b border-white/10 overflow-hidden"
    >
      {/* Background radial ambient lights */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F45B1A]/10 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* Asymmetric 12-Column Editorial Grid: 4 Cols Left, 8 Cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols): Eyebrow, Heading, Context Narrative, & Giant Watermark */}
          <div
            className={`lg:col-span-4 lg:sticky lg:top-28 space-y-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <div className="eyebrow-label mb-5">
                <span className="eyebrow-dot" />
                <span>OUR VISION</span>
              </div>

              <h2
                id="vision-title"
                className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[52px]"
              >
                Arah yang Ingin{" "}
                <span className="text-[#F45B1A]">Kami Tuju.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
              Kami percaya setiap bisnis punya potensi untuk berkembang. Melalui kreativitas, teknologi, dan kolaborasi yang berlandaskan nilai kebaikan, kami ingin membuka lebih banyak peluang agar bisnis tidak hanya dikenal oleh lingkungan terdekat, tetapi juga hadir dan memberi manfaat bagi masyarakat yang lebih luas.
            </p>

            {/* Visual Accent Badge */}
            <div className="p-5 rounded-2xl bg-[#0B0807] border border-white/10 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/15 border border-[#F45B1A]/30 flex items-center justify-center text-[#F45B1A]">
                  <Compass size={16} />
                </div>
                <span className="font-geom font-bold text-xs uppercase tracking-wider text-[#F7F1EB]">
                  KOMPAS STRATEGIS
                </span>
              </div>
              <p className="text-xs text-[#A99A90] font-outfit leading-relaxed">
                Menghubungkan impian bisnis dengan realitas pasar digital modern secara terukur dan berkelanjutan.
              </p>
            </div>

            {/* Sculptural Section Index */}
            <div
              aria-hidden="true"
              className="hidden lg:block font-geom font-extrabold text-[120px] text-white/[0.03] select-none pointer-events-none leading-none -mt-4"
            >
              04
            </div>
          </div>

          {/* Right Column (8 cols): Heroic Vision Statement & 3 Impact Pillars */}
          <div
            className={`lg:col-span-8 space-y-8 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* The Vision Statement Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0807] via-[#1A110D] to-[#0B0807] border border-white/15 p-8 sm:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
              {/* Subtle Orange Glow in upper-right corner */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F45B1A]/20 blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] mb-6">
                  <Compass className="w-3.5 h-3.5 text-[#F45B1A]" />
                  <span>VISI UTAMA PAHAM DIGITAL AGENCY</span>
                </div>

                <blockquote className="font-geom font-bold text-2xl sm:text-3xl md:text-4xl text-[#F7F1EB] leading-[1.2] tracking-tight mb-6">
                  Menjadi Mitra Kreatif dan Transformasi Digital yang{" "}
                  <span className="text-[#F45B1A]">
                    Amanah
                  </span>
                  , untuk Membantu Setiap Bisnis{" "}
                  <span className="text-[#F45B1A]">Bertumbuh, Naik Level</span>, dan{" "}
                  <span className="text-[#F7F1EB] underline decoration-[#F45B1A]/50 decoration-wavy decoration-2">
                    Menjangkau Lebih Banyak Orang
                  </span>{" "}
                  yang Membutuhkannya.
                </blockquote>

                <p className="text-sm sm:text-base text-[#D5CBC3] font-outfit leading-relaxed border-t border-white/10 pt-6">
                  Prinsip ini memandu seluruh keputusan teknologi kami — dari baris kode yang ditulis, pemilihan arsitektur, hingga cara kami berkomunikasi dengan setiap mitra.
                </p>
              </div>
            </div>

            {/* Three Pillars of Growth: High-Contrast Asymmetric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  title: "BERTUMBUH",
                  icon: <TrendingUp className="w-5 h-5 text-[#F45B1A]" />,
                  desc: "Membangun fondasi digital yang kokoh agar bisnis lokal berdaya saing tinggi dan tahan uji.",
                },
                {
                  number: "02",
                  title: "NAIK LEVEL",
                  icon: <Layers className="w-5 h-5 text-[#F45B1A]" />,
                  desc: "Mengadopsi website modern, web app scalable, dan automasi AI cerdas untuk efisiensi maksimal.",
                },
                {
                  number: "03",
                  title: "MENJANGKAU LUAS",
                  icon: <Globe className="w-5 h-5 text-[#F45B1A]" />,
                  desc: "Membuka peluang pasar baru dan memperluas manfaat nyata kepada masyarakat lebih luas.",
                },
              ].map((pillar, idx) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                  style={{
                    transitionDelay: isVisible ? `${(idx + 1) * 100}ms` : "0ms",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/8 group-hover:bg-[#F45B1A]/10 group-hover:border-[#F45B1A]/30 flex items-center justify-center transition-colors">
                        {pillar.icon}
                      </div>
                      <span className="font-geom font-bold text-sm text-[#F45B1A]">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-geom font-bold text-base text-[#F7F1EB] mb-2 group-hover:text-[#F45B1A] transition-colors tracking-wide">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A99A90] font-outfit leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-geom text-[#D5CBC3]">
                    <span className="w-1 h-1 rounded-full bg-[#F45B1A]" />
                    <span>Pilar Dampak</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
