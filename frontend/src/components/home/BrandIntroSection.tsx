"use client";

import { ArrowUpRight } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BrandIntroSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.12,
  });

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  return (
    <section
      ref={sectionRef}
      id="tentang"
      aria-labelledby="about-title"
      className="relative section-py bg-[#17100D] border-y border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#F45B1A]/10 pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Headline & Manifesto (~58%) with Vertical Scroll Reveal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Eyebrow */}
            <div
              className={`eyebrow-label mb-5 reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
            >
              <span className="eyebrow-dot" />
              <span>TENTANG PAHAM DIGITAL</span>
            </div>

            {/* 2. Heading (900ms, delay 140ms) */}
            <h2
              id="about-title"
              className={`font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[36px] sm:text-[48px] lg:text-[58px] reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
            >
              WE UNDERSTAND BUSINESS.{" "}
              <span className="text-[#F45B1A]">WE BUILD DIGITAL SOLUTIONS.</span>
            </h2>

            {/* 3. Paragraphs (1000ms, delay 260ms & 380ms) */}
            <div className="mt-8 space-y-5 text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-2xl font-outfit">
              <p
                className={`reveal-paragraph ${getRevealClass()}`}
                style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
              >
                Paham Digital Agency lahir dari pemahaman bahwa teknologi bukan sekadar kode
                atau desain visual, melainkan instrumen nyata untuk melipatgandakan efisiensi
                dan omset bisnis.
              </p>
              <p
                className={`reveal-paragraph ${getRevealClass()}`}
                style={{ transitionDelay: isInView ? "380ms" : "0ms" }}
              >
                Berbasis di Meulaboh, Aceh Barat, kami bermitra dengan pelaku usaha dan UMKM
                yang siap melangkah ke tingkat berikutnya. Kami menghilangkan kerumitan teknis
                sehingga Anda dapat fokus menjalankan bisnis, sementara sistem digital dan AI
                bekerja tanpa henti untuk Anda.
              </p>
            </div>

            {/* 4. Action Link (850ms, delay 500ms) */}
            <div
              className={`mt-9 reveal-button ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "500ms" : "0ms" }}
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F45B1A] hover:text-[#FF6A2A] font-bold text-base border-b border-[#F45B1A] pb-1 transition-all group"
              >
                <span>Pelajari Pendekatan Kami</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right: Three Pillars on Dark Surface Cards (~42%) with Staggered Cascades */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                number: "01",
                title: "Analisis Kebutuhan Bisnis",
                desc: "Kami mendalami model bisnis, persona pelanggan, dan titik hambatan operasional Anda sebelum menentukan arsitektur teknologi yang tepat.",
              },
              {
                number: "02",
                title: "Pengembangan Presisi & Teruji",
                desc: "Website responsif cepat, web application scalable, dan asisten AI customer service humanis yang dikonfigurasi dengan knowledge base bisnis Anda untuk hasil yang terukur.",
              },
              {
                number: "03",
                title: "Pendampingan Pasca Rilis",
                desc: "Kami tidak meninggalkan Anda setelah peluncuran. Kami memberikan pelatihan praktis dan dukungan berkelanjutan agar sistem berjalan prima.",
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.number}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/40 hover:-translate-y-1 group shadow-[0_8px_24px_rgba(0,0,0,0.4)] reveal-card ${getRevealClass()}`}
                style={{
                  transitionDelay: isInView ? `${idx * 140 + 200}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-xl text-[#F45B1A]">
                    {pillar.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#F45B1A] transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F7F1EB] mb-2 group-hover:text-[#F45B1A] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A99A90] leading-relaxed font-outfit">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
