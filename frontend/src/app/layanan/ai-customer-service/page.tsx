import type { Metadata } from "next";
import Link from "next/link";
import {
  MessagesSquare,
  ChevronRight,
  ArrowRight,
  Bot,
  Workflow,
  Sparkles,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, buildWAUrl } from "@/lib/site-config";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Layanan WhatsApp AI Customer Service & Automasi — Paham Digital Agency",
  description:
    "Hadirkan WhatsApp AI Customer Service 24/7 untuk bisnis Anda. Terintegrasi n8n dan WAHA dengan model OpenAI atau Claude untuk melayani pelanggan secara otomatis.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/ai-customer-service/",
  },
  openGraph: {
    title: "Layanan WhatsApp AI Customer Service & Automasi — Paham Digital Agency",
    description:
      "Asisten AI WhatsApp cerdas yang menjawab pertanyaan pelanggan, mengenalkan produk, dan merespons 24/7 dengan karakter bisnis Anda.",
    url: "https://pahamdigital.online/layanan/ai-customer-service/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

const AI_CAPABILITIES = [
  {
    title: "Respon Otomatis 24/7 via WhatsApp Resmi",
    description:
      "Asisten AI aktif 24 jam sehari menjawab pertanyaan masuk di nomor WhatsApp bisnis Anda, memastikan calon pembeli tidak menunggu lama saat admin sedang offline.",
    icon: Clock,
  },
  {
    title: "Knowledge Base Bisnis Khusus",
    description:
      "AI dikonfigurasi menggunakan data katalog produk, daftar harga, jam operasional, lokasi, dan FAQ resmi usaha Anda sehingga jawaban akurat dan relevan.",
    icon: Bot,
  },
  {
    title: "Karakter & Gaya Bahasa Sesuai Brand",
    description:
      "System prompt disesuaikan dengan nada komunikasi bisnis Anda — ramah, sopan, formal, atau santai sesuai identitas audiens yang Anda layani.",
    icon: Sparkles,
  },
  {
    title: "Infrastruktur Teruji: n8n Workflow + WAHA",
    description:
      "Menggunakan gateway WhatsApp WAHA dan engine automasi n8n yang stabil, memungkinkan integrasi alur kerja tanpa ketergantungan software tertutup.",
    icon: Workflow,
  },
  {
    title: "Model AI Terdepan: OpenAI atau Claude",
    description:
      "Didukung model AI canggih: OpenAI GPT-4o mini pada paket Suite atau Claude Haiku 4.5 pada paket Elite untuk penalaran konteks yang cerdas.",
    icon: MessagesSquare,
  },
  {
    title: "Transparansi Saldo & Handover Human Admin",
    description:
      "Saldo kredit penggunaan model AI tertera jelas di awal proyek. Chat tetap dapat diambil alih oleh admin manusia kapan saja dengan mudah.",
    icon: ShieldAlert,
  },
];

export default function AICustomerServicePage() {
  const waUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi implementasi WhatsApp AI Customer Service untuk bisnis saya."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://pahamdigital.online/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: "https://pahamdigital.online/layanan/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Customer Service",
            item: "https://pahamdigital.online/layanan/ai-customer-service/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "WhatsApp AI Customer Service & AI Agents",
        provider: {
          "@type": "Organization",
          name: "Paham Digital Agency",
          url: "https://pahamdigital.online",
        },
        description:
          "Layanan asisten AI cerdas terintegrasi n8n dan WAHA untuk menjawab pertanyaan pelanggan via WhatsApp otomatis 24/7.",
        areaServed: "ID",
      },
    ],
  };

  return (
    <div className="bg-[#0B0807] min-h-screen text-[#F7F1EB]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 01. HERO SECTION ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#0B0807] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-texture opacity-30 pointer-events-none" />
        <div className="container-site relative z-10">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-outfit text-[#A99A90]">
              <li>
                <Link href="/" className="hover:text-[#F7F1EB] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li>
                <Link href="/layanan/" className="hover:text-[#F7F1EB] transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li className="text-[#F45B1A] font-medium" aria-current="page">
                AI Customer Service
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>LAYANAN UTAMA · WHATSAPP AI CUSTOMER SERVICE</span>
            </div>

            <h1 className="font-geom font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#F7F1EB] tracking-tight mb-5">
              WhatsApp AI Customer Service{" "}
              <span className="text-[#F45B1A]">& Automasi Bisnis 24/7.</span>
            </h1>

            <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8">
              Bantu tim Anda melayani ratusan pertanyaan pelanggan tanpa kewalahan. Kami mengonfigurasi asisten AI cerdas di nomor WhatsApp bisnis Anda menggunakan teknologi engine n8n, WAHA, dan model AI OpenAI atau Claude yang dilatih sesuai informasi bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#F45B1A]/25"
              >
                <span>Konsultasikan Kebutuhan AI</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F1EB] font-outfit font-semibold text-sm sm:text-base border border-white/10 hover:border-[#F45B1A]/40 transition-all"
              >
                <span>Bandingkan Paket AI</span>
                <ArrowUpRight className="w-4 h-4 text-[#F45B1A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. CAPABILITIES GRID ── */}
      <section className="section-py bg-[#0B0807] border-b border-white/10">
        <div className="container-site">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block mb-2">
              SISTEM CERDAS & INFRASTRUKTUR
            </span>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB]">
              Cara Kerja WhatsApp AI untuk Mendukung Pelayanan Bisnis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AI_CAPABILITIES.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B0807] border border-white/10 flex items-center justify-center mb-5 text-[#F45B1A]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. TRANSPARENCY & COMPARISON BOX ── */}
      <section className="section-py bg-[#140E0B]/40 border-b border-white/10">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suite Model */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#17100D] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F45B1A] text-white text-[10px] font-geom font-bold uppercase tracking-wider inline-block mb-3">
                  PAKET MEUGAH AI BUSINESS SUITE
                </span>
                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] mb-2">
                  OpenAI GPT-4o mini / GPT-5 mini
                </h3>
                <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed mb-4">
                  Terintegrasi n8n + WAHA selama 1 tahun dengan kredit AI awal US$26,44. Sangat cocok untuk UMKM, kuliner, toko online, dan bisnis retail yang ingin mulai melayani pelanggan secara otomatis.
                </p>
              </div>
              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center gap-2 text-sm font-outfit font-bold text-[#F45B1A] hover:underline pt-4 border-t border-white/8"
              >
                <span>Lihat Detail Paket Suite (Rp2.850.000)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Elite Model */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#17100D] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#F7F1EB] text-[10px] font-geom font-bold uppercase tracking-wider inline-block mb-3">
                  PAKET MEUGAH AI BUSINESS ELITE
                </span>
                <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] mb-2">
                  Claude Haiku 4.5 AI Customer Service
                </h3>
                <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed mb-4">
                  Terintegrasi n8n + WAHA selama 3 tahun dengan kredit AI awal US$85,125 dan Knowledge Base mendalam. Cocok untuk perusahaan, bisnis berkembang, dan sistem operasional digital yang kompleks.
                </p>
              </div>
              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center gap-2 text-sm font-outfit font-bold text-[#F45B1A] hover:underline pt-4 border-t border-white/8"
              >
                <span>Lihat Detail Paket Elite (Rp5.789.000)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. FINAL CTA ── */}
      <ServicesCTASection />
    </div>
  );
}
