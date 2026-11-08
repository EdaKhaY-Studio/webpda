import type { Metadata } from "next";
import Link from "next/link";
import {
  AppWindow,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Database,
  Lock,
  Layers,
  Terminal,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG, buildWAUrl } from "@/lib/site-config";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Web Kustom — Paham Digital Agency",
  description:
    "Layanan pembuatan aplikasi web custom untuk operasional bisnis, dashboard internal, sistem manajemen data, dan otomasi alur kerja digital.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/web-application/",
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Web Kustom — Paham Digital Agency",
    description:
      "Pengembangan aplikasi web custom yang dirancang khusus untuk mengelola data, aktivitas operasional, dan alur kerja bisnis secara terstruktur.",
    url: "https://pahamdigital.online/layanan/web-application/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

const WEB_APP_FEATURES = [
  {
    title: "Sistem Aplikasi Web Sesuai Kebutuhan",
    description:
      "Dirancang khusus berdasarkan alur kerja dan tantangan riil bisnis Anda, bukan template kaku yang membatasi fleksibilitas operasional.",
    icon: AppWindow,
  },
  {
    title: "Dashboard Bisnis & Panel Manajemen",
    description:
      "Visualisasi data ringkas, pemantauan transaksi, kontrol stok, atau pencatatan aktivitas pelanggan dalam satu antarmuka yang intuitif.",
    icon: Layers,
  },
  {
    title: "Struktur Basis Data & Manajemen Informasi",
    description:
      "Arsitektur database terstruktur dengan skema relasional yang rapi, memastikan pencatatan data akurat, aman, dan mudah diekspor.",
    icon: Database,
  },
  {
    title: "Keamanan Akses & Hak Pengguna (Role-based)",
    description:
      "Otorisasi bertingkat untuk admin, staf, dan pengguna eksternal dengan enkripsi standar industri untuk melindungi kerahasiaan data usaha.",
    icon: Lock,
  },
  {
    title: "Integrasi API & Layanan Pihak Ketiga",
    description:
      "Kemampuan menghubungkan sistem web dengan WhatsApp gateway, payment gateway, notifikasi email, dan platform pihak ketiga.",
    icon: Terminal,
  },
  {
    title: "Hak Penggunaan Tanpa Biaya Lisensi Selamanya",
    description:
      "Aplikasi web custom yang diserahkan menjadi milik Anda tanpa kewajiban membayar biaya lisensi software berulang bulanan kepada kami.",
    icon: Server,
  },
];

export default function WebApplicationPage() {
  const waUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin berdiskusi mengenai kebutuhan pembuatan Aplikasi Web Kustom untuk sistem operasional bisnis saya."
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
            name: "Web Application",
            item: "https://pahamdigital.online/layanan/web-application/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Application Development",
        provider: {
          "@type": "Organization",
          name: "Paham Digital Agency",
          url: "https://pahamdigital.online",
        },
        description:
          "Pengembangan aplikasi berbasis web khusus untuk membantu bisnis mengelola operasional, database, dan alur kerja digital.",
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
                Web Application
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>LAYANAN UTAMA · WEB APPLICATION DEVELOPMENT</span>
            </div>

            <h1 className="font-geom font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#F7F1EB] tracking-tight mb-5">
              Sistem Aplikasi Web Kustom{" "}
              <span className="text-[#F45B1A]">untuk Kebutuhan Bisnismu.</span>
            </h1>

            <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8">
              Tinggalkan pencatatan manual yang rentan kesalahan. Kami merancang dan membangun sistem aplikasi berbasis web yang disesuaikan secara khusus dengan alur operasional bisnis Anda agar tim bekerja lebih produktif dan terkendali.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#F45B1A]/25"
              >
                <span>Konsultasikan Kebutuhan Sistem</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F1EB] font-outfit font-semibold text-sm sm:text-base border border-white/10 hover:border-[#F45B1A]/40 transition-all"
              >
                <span>Lihat Paket Termasuk Web App</span>
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
              KAPABILITAS & RUANG LINGKUP
            </span>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB]">
              Arsitektur Aplikasi Web yang Handal dan Terstruktur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WEB_APP_FEATURES.map((feat) => {
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

      {/* ── 03. ELITE PACKAGE SPOTLIGHT ── */}
      <section className="section-py bg-[#140E0B]/40 border-b border-white/10">
        <div className="container-site">
          <div className="max-w-3xl p-8 sm:p-10 rounded-3xl bg-[#17100D] border-2 border-[#F45B1A]/50 shadow-[0_20px_50px_rgba(244,91,26,0.15)]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F45B1A]/20 border border-[#F45B1A]/40 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold mb-4">
              <span>TERMASUK DALAM PAKET MEUGAH AI BUSINESS ELITE</span>
            </div>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] mb-3">
              Solusi Terpadu: Website + AI Customer Service + 2 Web App Custom
            </h2>
            <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed mb-6">
              Paket Meugah AI Business Elite menyertakan 2 Web App Custom sesuai kebutuhan bisnis, hosting 3 tahun, pilihan domain 3 tahun, dan hak penggunaan aplikasi web tanpa biaya lisensi software tambahan selamanya.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-xs sm:text-sm font-outfit font-bold transition-all shadow-md shadow-[#F45B1A]/25"
              >
                <span>Pelajari Paket Meugah Elite</span>
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
