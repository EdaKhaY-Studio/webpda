"use client";

import Link from "next/link";
import { AppWindow, MonitorSmartphone, MessageSquare, SearchCheck, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { buildWAUrl } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCategory {
  number: string;
  id: string;
  path: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  capabilities: string[];
  seoNote: string;
  disclaimer?: string;
  waMessage: string;
}

const SERVICES_DATA: ServiceCategory[] = [
  {
    number: "01",
    id: "web-application",
    path: "/layanan/web-application/",
    title: "Website Application Development",
    icon: <AppWindow className="w-5 h-5 text-[#F45B1A]" />,
    shortDescription:
      "Kami mengembangkan aplikasi berbasis web yang dirancang untuk membantu bisnis mengelola aktivitas, data, dan kebutuhan operasional secara lebih terstruktur.",
    capabilities: [
      "Custom web applications sesuai kebutuhan unik bisnis",
      "Business management tools & dashboard operasional",
      "Digital information systems & integrasi basis data",
      "Interactive web-based tools & formulir transaksi",
      "Pengembangan fitur custom berdasarkan ruang lingkup proyek",
    ],
    seoNote:
      "Solusi jasa web application dan jasa pembuatan aplikasi berbasis web handal. Kami membantu pengembangan aplikasi bisnis dengan performa stabil dan arsitektur aman.",
    waMessage:
      "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan Website Application Development. Boleh kita diskusikan kebutuhan sistem web bisnis saya?",
  },
  {
    number: "02",
    id: "website-development",
    path: "/layanan/website-development/",
    title: "Professional Website Development",
    icon: <MonitorSmartphone className="w-5 h-5 text-[#F45B1A]" />,
    shortDescription:
      "Kami membangun website profesional dengan desain modern, responsif, dan pengalaman pengguna yang nyaman untuk memperkuat identitas serta kredibilitas bisnis.",
    capabilities: [
      "Website company profile & profil usaha modern",
      "Professional business websites dengan branding kuat",
      "Website katalog produk interaktif & direct order",
      "Responsive UI/UX optimal di mobile, tablet, dan desktop",
      "Integrasi kontak, formulir, dan tombol WhatsApp instan",
      "Struktur informasi bisnis terarah & mudah dinavigasi",
    ],
    seoNote:
      "Pilihan jasa pembuatan website profesional dan jasa website bisnis terpercaya di Indonesia. Website responsif untuk UMKM dan brand yang ingin tampil kredibel.",
    waMessage:
      "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan Professional Website Development untuk company profile / katalog bisnis saya.",
  },
  {
    number: "03",
    id: "ai-customer-service",
    path: "/layanan/ai-customer-service/",
    title: "AI Customer Service",
    icon: <MessageSquare className="w-5 h-5 text-[#F45B1A]" />,
    shortDescription:
      "Kami membantu bisnis menghadirkan asisten AI yang dapat menjawab pertanyaan pelanggan melalui WhatsApp berdasarkan informasi dan karakter komunikasi bisnis yang telah dikonfigurasi.",
    capabilities: [
      "WhatsApp AI integration langsung ke nomor bisnis",
      "Konfigurasi kepribadian & gaya bahasa brand (AI Personality)",
      "Konfigurasi basis pengetahuan bisnis (Business Knowledge Base)",
      "Automated customer responses cepat & natural 24/7",
      "Pemahaman konteks percakapan multi-turn yang cerdas",
      "Bantuan pemandu penjualan (Sales Assistance) awal",
      "Automasi alur kerja terintegrasi n8n workflow",
      "Koneksi gateway WhatsApp WAHA yang teruji",
    ],
    seoNote:
      "Layanan jasa AI Customer Service dan WhatsApp AI untuk bisnis. Solusi chatbot AI WhatsApp dan automasi customer service modern untuk efisiensi pelayanan pelanggan.",
    disclaimer:
      "Catatan Transparansi: Asisten AI dirancang untuk merespons pertanyaan berdasarkan alur dan data bisnis yang telah dikonfigurasi. Tidak menjanjikan balasan tanpa batas atau ketersediaan tanpa henti di luar batas kuota model AI dan uptime infrastruktur.",
    waMessage:
      "Halo Tim Paham Digital Agency! Saya ingin konsultasi implementasi WhatsApp AI Customer Service dengan integrasi n8n & WAHA untuk bisnis saya.",
  },
  {
    number: "04",
    id: "seo-geo-optimization",
    path: "/layanan/seo-geo/",
    title: "SEO & GEO Optimization",
    icon: <SearchCheck className="w-5 h-5 text-[#F45B1A]" />,
    shortDescription:
      "Kami membantu mengoptimalkan struktur dan informasi website agar lebih mudah dipahami mesin pencari serta platform berbasis AI generatif.",
    capabilities: [
      "Fondasi Technical SEO yang bersih & semantic",
      "Konfigurasi meta title, meta description, & canonical URL",
      "Struktur hierarki heading (H1, H2, H3) logis & terarah",
      "Penyusunan sitemap XML & konfigurasi robots.txt",
      "Integrasi & konfigurasi Google Search Console resmi",
      "Panduan indeksasi halaman & audit teknis awal",
      "Penerapan structured data (JSON-LD Schema) relevan",
      "GEO-oriented business information untuk mesin pencari AI",
    ],
    seoNote:
      "Jasa SEO website dan Generative Engine Optimization (GEO). Kami memadukan optimasi website Google dengan struktur informasi ramah mesin pencari AI generatif.",
    disclaimer:
      "Catatan Transparansi: SEO dan GEO merupakan upaya optimasi teknis, struktur semantik, dan relevansi informasi. Kami tidak menjanjikan peringkat nomor satu, lonjakan traffic instan, atau kepastian selalu muncul dalam rangkuman jawaban AI.",
    waMessage:
      "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan optimasi SEO website & Generative Engine Optimization (GEO) untuk bisnis saya.",
  },
];

export default function ServicesCategoriesSection() {
  const { sectionRef, getRevealClass, isInView, scrollDirection } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="layanan-kami"
      className="relative section-py bg-[#0B0807] border-b border-white/10 scroll-mt-24"
      aria-labelledby="services-categories-title"
    >
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>WHAT WE DO</span>
          </div>

          <h2
            id="services-categories-title"
            className={`font-geom font-bold text-[26px] xs:text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#F7F1EB] tracking-tight mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[100ms] ${getRevealClass()}`}
          >
            <span className="block sm:inline">Layanan yang </span>
            <span className="text-[#F45B1A] inline-block sm:inline">
              Kami Hadirkan.
            </span>
          </h2>

          <p
            className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] ${getRevealClass()}`}
          >
            Setiap bisnis memiliki kebutuhan yang berbeda. Karena itu, kami menghadirkan beberapa solusi digital yang dapat disesuaikan dengan kebutuhan dan tujuan bisnis.
          </p>
        </div>

        {/* 2 × 2 Refined Grid on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {SERVICES_DATA.map((service, idx) => {
            const waUrl = buildWAUrl(service.waMessage);
            const cardDelay = isInView
              ? scrollDirection === "down"
                ? `${(idx + 1) * 140}ms`
                : `${(SERVICES_DATA.length - idx) * 140}ms`
              : "0ms";

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-3xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/45 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(244,91,26,0.12)] group ${getRevealClass()}`}
                style={{
                  transitionDelay: cardDelay,
                }}
              >
                <div>
                  
                  {/* Top Bar: Stage Number & Icon */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/8">
                    <span className="font-geom font-extrabold text-2xl sm:text-3xl text-[#F45B1A]">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0807] border border-white/10 group-hover:border-[#F45B1A]/40 group-hover:scale-105 transition-all flex items-center justify-center shadow-inner">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title (H3 in Geom) */}
                  <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Supporting Capabilities List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-geom uppercase tracking-wider text-[#A99A90] font-bold">
                      Kemampuan & Lingkup Solusi:
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A99A90] font-outfit">
                          <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Natural Contextual SEO Sentence */}
                  <p className="text-[11px] sm:text-xs text-[#A99A90]/80 font-outfit leading-relaxed italic bg-[#0B0807]/60 p-3 rounded-xl border border-white/5 mb-5">
                    {service.seoNote}
                  </p>

                  {/* Explicit Disclaimer (for AI & SEO) */}
                  {service.disclaimer && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-[#F45B1A]/[0.06] border border-[#F45B1A]/20 text-[11px] text-[#D5CBC3] font-outfit leading-relaxed mb-6">
                      <AlertCircle className="w-4 h-4 text-[#F45B1A] shrink-0 mt-0.5" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}

                </div>

                {/* Footer Action Card Link */}
                <div className="pt-5 border-t border-white/8 flex items-center justify-between gap-3">
                  <Link
                    href={service.path}
                    className="text-xs font-geom uppercase tracking-wider text-[#A99A90] hover:text-[#F7F1EB] transition-colors inline-flex items-center gap-1.5 group/link"
                  >
                    <span>Pelajari Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F45B1A] group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-outfit font-bold text-[#F45B1A] hover:text-[#FF6A2A] transition-colors"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
