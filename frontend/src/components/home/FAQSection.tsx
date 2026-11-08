"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/data/faq-data";
import { buildWAUrl } from "@/lib/site-config";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FAQSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });
  const [openId, setOpenId] = useState<string | null>("about-agency");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(id);
    }
  };

  const waAskUrl = buildWAUrl(
    "Halo Tim Paham Digital! Saya membaca FAQ di website dan ingin berdiskusi lebih lanjut tentang proyek digital saya."
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-main-heading"
      className="py-24 sm:py-28 lg:py-32 bg-[#0B0807] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Controlled ambient background lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#F45B1A]/[0.035] rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-[#FF6A2A]/[0.025] rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* ── 01. VERTICALLY STACKED INTRO HEADER (Left-Aligned) with Vertical Reveal ── */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          {/* 1. Eyebrow Label */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs text-[#A99A90] uppercase tracking-wider font-medium mb-5 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] animate-pulse" />
            <span>GOOD QUESTIONS, CLEAR ANSWERS</span>
          </div>

          {/* 2. Main Heading in Geom */}
          <h2
            id="faq-main-heading"
            className={`font-geom font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.12] text-[#F7F1EB] tracking-tight mb-5 reveal-heading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
          >
            Masih Ada yang{" "}
            <span className="text-[#F45B1A]">
              Bikin Bingung?
            </span>
          </h2>

          {/* 3. Supporting Description in Outfit */}
          <p
            className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-2xl reveal-paragraph ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "260ms" : "0ms" }}
          >
            Kami paham, memilih solusi digital untuk bisnis bukan keputusan kecil. Berikut beberapa pertanyaan yang sering muncul sebelum memulai kerja sama bersama kami.
          </p>

          {/* 4. Section Label */}
          <div
            className={`mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-3 reveal-subheading ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "340ms" : "0ms" }}
          >
            <span className="w-2 h-2 rounded-sm bg-[#F45B1A]" />
            <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-semibold">
              PERTANYAAN YANG SERING MUNCUL
            </span>
          </div>
        </div>

        {/* ── 02. FULL-WIDTH FAQ ACCORDION LIST (Stacked Underneath) with Staggered Vertical Reveal ── */}
        <div className="w-full space-y-3.5 mb-14 sm:mb-16">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            const contentId = `faq-panel-${item.id}`;
            const triggerId = `faq-btn-${item.id}`;
            const questionNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] border ${
                  isOpen
                    ? "bg-[#17100D] border-[#F45B1A]/40 shadow-xl shadow-black/50"
                    : "bg-[#140E0B]/70 hover:bg-[#17100D]/70 border-white/[0.08] hover:border-white/15"
                } reveal-card ${getRevealClass()}`}
                style={{
                  transitionDelay: isInView ? `${index * 50 + 120}ms` : "0ms",
                }}
              >
                {/* Accordion Row Header */}
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className="w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45B1A] rounded-2xl cursor-pointer group"
                >
                  <div className="flex items-start gap-3 sm:gap-5 flex-1 min-w-0">
                    {/* Two-digit question number */}
                    <span className="font-geom font-bold text-sm sm:text-base text-[#F45B1A] tracking-wider pt-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                      {questionNumber}
                    </span>

                    {/* Question text in Geom */}
                    <h3
                      className={`font-geom font-semibold text-base sm:text-lg lg:text-[19px] leading-snug transition-colors ${
                        isOpen ? "text-[#F45B1A]" : "text-[#F7F1EB] group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#F45B1A] text-white rotate-180 shadow-md shadow-[#F45B1A]/30"
                        : "bg-white/[0.05] text-[#A99A90] group-hover:text-[#F7F1EB] group-hover:bg-white/[0.10]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Accordion Panel */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-all duration-300 ease-in-out px-5 sm:px-7 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-7"
                      : "grid-rows-[0fr] opacity-0 pb-0 overflow-hidden pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3 sm:pt-4 border-t border-white/[0.06] pl-6 sm:pl-8">
                      <p className="font-outfit text-sm sm:text-base leading-relaxed text-[#D5CBC3] whitespace-pre-line">
                        {item.answer}
                      </p>

                      {/* Optional micro CTA inside answer */}
                      {item.cta && (
                        <div className="mt-4 pt-3">
                          <a
                            href={
                              item.cta.action === "whatsapp"
                                ? buildWAUrl(
                                    `Halo Tim Paham Digital! Saya membaca FAQ tentang "${item.question}" dan ingin konsultasi lebih lanjut.`
                                  )
                                : item.cta.link || "#kontak"
                            }
                            target={item.cta.action === "whatsapp" ? "_blank" : undefined}
                            rel={item.cta.action === "whatsapp" ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-xs font-geom uppercase tracking-wider text-[#F45B1A] hover:text-[#FF6A2A] font-bold group/link"
                          >
                            <span>{item.cta.text}</span>
                            <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 03. FINAL CONTACT INVITATION with Micro-Interaction ─── */}
        <div
          className={`w-full rounded-3xl bg-gradient-to-r from-[#17100D] via-[#1A120E] to-[#17100D] border border-white/[0.10] p-7 sm:p-9 lg:p-10 shadow-2xl relative overflow-hidden reveal-card ${getRevealClass()}`}
          style={{ transitionDelay: isInView ? "350ms" : "0ms" }}
        >
          {/* Subtle glow accent */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-60 h-60 bg-[#F45B1A]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Punya Pertanyaan Lain?</span>
              </div>
              <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
                Masih Punya Pertanyaan yang Belum Terjawab?
              </h3>
              <p className="font-outfit text-sm sm:text-[15px] text-[#A99A90] leading-relaxed">
                Nggak ketemu jawaban yang kamu cari? Ceritakan langsung kebutuhan bisnismu ke tim kami via WhatsApp. Kami siap bantu memetakan solusinya secara transparan.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={waAskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#F45B1A]/25 hover:shadow-[#F45B1A]/40 active:scale-95 group"
              >
                <span>Masih Punya Pertanyaan?</span>
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
