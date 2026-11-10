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
  FileText,
  UserCheck,
  HelpCircle,
  ShieldCheck,
  MessageSquare,
  Layers,
} from "lucide-react";
import { SITE_CONFIG, buildWAUrl } from "@/lib/site-config";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "AI Customer Service Humanis di Aceh & WhatsApp — Paham Digital Agency",
  description:
    "Layanan AI Customer Service humanis terintegrasi WhatsApp untuk bisnis di Aceh. Menjawab pelanggan secara natural, 24/7, dengan knowledge base bisnis dan handover admin.",
  keywords: [
    "AI customer service humanis di Aceh",
    "AI Customer Service human-centered",
    "human-centered AI",
    "AI customer service untuk bisnis",
    "AI Customer Service WhatsApp",
    "AI pelayanan pelanggan yang humanis",
    "chatbot bisnis dengan pendekatan humanis",
    "AI Customer Service Aceh",
  ],
  alternates: {
    canonical: "https://pahamdigital.online/layanan/ai-customer-service/",
  },
  openGraph: {
    title: "AI Customer Service Humanis di Aceh & WhatsApp — Paham Digital Agency",
    description:
      "Layanan AI Customer Service humanis terintegrasi WhatsApp untuk bisnis di Aceh. Menjawab pelanggan secara natural, 24/7, dengan knowledge base bisnis dan handover admin.",
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
        "@id": "https://pahamdigital.online/layanan/ai-customer-service/#service",
        name: "AI Customer Service Humanis di Aceh & WhatsApp",
        provider: {
          "@id": "https://pahamdigital.online/#organization",
        },
        description:
          "Layanan AI Customer Service humanis terintegrasi WhatsApp untuk bisnis di Aceh. Menjawab pelanggan secara natural, 24/7, dengan knowledge base bisnis dan handover admin.",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Aceh" },
          { "@type": "City", name: "Banda Aceh" },
          { "@type": "City", name: "Meulaboh" },
          { "@type": "AdministrativeArea", name: "Aceh Barat" },
          { "@type": "Country", name: "Indonesia" },
        ],
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
              AI Customer Service Humanis{" "}
              <span className="text-[#F45B1A]">di Aceh &amp; WhatsApp.</span>
            </h1>

            <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8">
              Hadirkan AI Customer Service human-centered yang merespons pertanyaan pelanggan secara natural, kontekstual, dan solutif 24/7 via WhatsApp bisnis Anda. Dikonfigurasi berbasis knowledge base dan SOP usaha Anda, dengan transparansi biaya serta sistem serah terima (handover) ke admin manusia kapan saja.
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

      {/* ── 02B. HUMAN-CENTERED AI SECTION (DEDICATED) ── */}
      <section className="section-py bg-[#17100D] border-b border-white/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#F45B1A]/10 pointer-events-none blur-3xl"
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0807] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>PENDEKATAN HUMAN-CENTERED AI</span>
            </div>

            <h2 className="font-geom font-bold text-2xl sm:text-4xl lg:text-5xl text-[#F7F1EB] tracking-tight mb-5 leading-tight">
              AI Customer Service yang Lebih Humanis untuk Bisnis Modern
            </h2>

            <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
              Kami membantu bisnis menghadirkan AI Customer Service yang dirancang untuk memahami konteks pertanyaan, mengikuti karakter komunikasi brand, dan memberikan respons yang natural kepada pelanggan. Teknologi AI digunakan untuk membantu pelayanan menjadi lebih praktis tanpa menghilangkan pentingnya sentuhan manusia.
            </p>
          </div>

          {/* 7 Configuration Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Knowledge Base Bisnis",
                desc: "Profil perusahaan, jenis layanan, jam operasional, lokasi, dan SOP resmi usaha Anda.",
                icon: FileText,
              },
              {
                num: "02",
                title: "Katalog & Daftar Harga",
                desc: "Spesifikasi produk, variasi layanan, daftar harga terkini, dan kebijakan pemesanan.",
                icon: Layers,
              },
              {
                num: "03",
                title: "Tone of Voice Brand",
                desc: "Gaya bahasa disesuaikan secara khusus — ramah, sopan, formal, atau santai khas audiens bisnis Anda.",
                icon: Sparkles,
              },
              {
                num: "04",
                title: "FAQ Pelanggan Komprehensif",
                desc: "Jawaban terstruktur atas pertanyaan yang paling sering ditanyakan oleh pelanggan bisnis.",
                icon: HelpCircle,
              },
              {
                num: "05",
                title: "Contoh Percakapan Riil",
                desc: "Pola dialog WhatsApp nyata (few-shot context) agar balasan AI terdengar luwes dan empatik.",
                icon: MessageSquare,
              },
              {
                num: "06",
                title: "Instruksi & Guardrails",
                desc: "Batasan tegas agar asisten AI hanya menjawab fakta terverifikasi dan tidak berspekulasi di luar domain bisnis.",
                icon: ShieldCheck,
              },
              {
                num: "07",
                title: "Panduan Serah Terima (Escalation)",
                desc: "Protokol otomatis pengalihan ke admin manusia ketika pelanggan membutuhkan penanganan personal khusus.",
                icon: UserCheck,
              },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.num}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between ${
                    idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#17100D] border border-white/10 flex items-center justify-center text-[#F45B1A]">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <span className="font-geom font-bold text-xs text-[#A99A90] tracking-widest">
                        {item.num}
                      </span>
                    </div>
                    <h3 className="font-geom font-bold text-lg text-[#F7F1EB] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Realistic Clarity & Governance Note */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0807]/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] mb-1">
                Transparansi Konfigurasi &amp; Kolaborasi Human-AI
              </h4>
              <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                Asisten AI dikonfigurasi melalui teknik prompt engineering terarah dan database internal bisnis, bukan melalui pelatihan model dari nol (scratch training). Kami percaya AI terbaik bekerja sebagai penguat tim manusia — melayani pertanyaan repetitif dengan sigap, sementara kasus rumit tetap dapat ditangani langsung oleh admin Anda.
              </p>
            </div>
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
