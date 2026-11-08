import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG, buildWAUrl } from "@/lib/site-config";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional & Responsif — Paham Digital Agency",
  description:
    "Layanan pembuatan website profesional untuk UMKM, profil bisnis, dan katalog produk. Desain modern, cepat, mobile-friendly, dan siap dioptimalkan SEO.",
  alternates: {
    canonical: "https://pahamdigital.online/layanan/website-development/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional & Responsif — Paham Digital Agency",
    description:
      "Website profesional, responsif, dan siap SEO untuk membangun kredibilitas dan memperluas jangkauan bisnis Anda.",
    url: "https://pahamdigital.online/layanan/website-development/",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

const CAPABILITIES = [
  {
    title: "Website Company Profile Modern",
    description:
      "Menampilkan profil usaha, visi misi, keunggulan layanan, dan portofolio bisnis dengan tata letak profesional yang membangun kepercayaan calon klien.",
    icon: Globe,
  },
  {
    title: "Katalog Produk & Layanan Interaktif",
    description:
      "Katalog digital terstruktur yang memudahkan calon pembeli melihat foto, deskripsi, harga, dan langsung memesan via tombol WhatsApp resmi.",
    icon: Layers,
  },
  {
    title: "UI/UX Responsif di Semua Perangkat",
    description:
      "Desain adaptif yang tampil optimal, tajam, dan nyaman digunakan baik di smartphone Android/iOS, tablet, maupun layar desktop.",
    icon: Smartphone,
  },
  {
    title: "Kecepatan Loading & Core Web Vitals",
    description:
      "Kode bersih tanpa bloatware pihak ketiga yang berlebihan, memastikan halaman terbuka cepat dan memberikan pengalaman browsing mulus.",
    icon: Zap,
  },
  {
    title: "Keamanan SSL & Backup Terjadwal",
    description:
      "Sertifikat keamanan SSL HTTPS gratis dan sistem pencadangan data hosting untuk melindungi aset digital dan reputasi bisnis Anda.",
    icon: ShieldCheck,
  },
  {
    title: "Fondasi SEO & Integrasi Search Console",
    description:
      "Struktur semantik HTML5, meta tags, sitemap XML, robots.txt, dan setup Google Search Console agar website cepat ditemukan di Google Search.",
    icon: Monitor,
  },
];

const PACKAGES_INCLUDED = [
  {
    name: "Meugah Digital Start",
    price: "Rp985.000",
    badge: "STARTER",
    scope: "Maksimal 3 Halaman, Domain .COM 1 Tahun, Hosting 1 Tahun, WhatsApp Direct Chat.",
  },
  {
    name: "Meugah AI Business Suite",
    price: "Rp2.850.000",
    badge: "RECOMMENDED",
    scope: "Maksimal 5 Halaman, Pilihan .COM/.ID 1 Tahun, WhatsApp AI Customer Service, SEO & GEO.",
  },
  {
    name: "Meugah AI Business Elite",
    price: "Rp5.789.000",
    badge: "ELITE",
    scope: "Website Profesional Kustom, Pilihan Domain 3 Tahun, Hosting 3 Tahun, 2 Web App Custom.",
  },
];

export default function WebsiteDevelopmentPage() {
  const waUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi mengenai jasa pembuatan website profesional untuk bisnis saya."
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
            name: "Website Development",
            item: "https://pahamdigital.online/layanan/website-development/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Professional Website Development",
        provider: {
          "@type": "Organization",
          name: "Paham Digital Agency",
          url: "https://pahamdigital.online",
        },
        description:
          "Layanan pembuatan website profesional untuk UMKM, profil bisnis, dan katalog produk. Desain modern, cepat, mobile-friendly, dan siap dioptimalkan SEO.",
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
                Website Development
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>LAYANAN UTAMA · WEBSITE DEVELOPMENT</span>
            </div>

            <h1 className="font-geom font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#F7F1EB] tracking-tight mb-5">
              Jasa Pembuatan Website{" "}
              <span className="text-[#F45B1A]">Profesional & Responsif.</span>
            </h1>

            <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8">
              Mulai dari landing page konversi tinggi hingga profil perusahaan dan katalog interaktif, kami membangun website yang tidak sekadar tampil bagus, tetapi dirancang untuk memperkuat kepercayaan pelanggan dan mendukung pertumbuhan bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#F45B1A]/25"
              >
                <span>Konsultasikan Website Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/layanan/harga-paket/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F1EB] font-outfit font-semibold text-sm sm:text-base border border-white/10 hover:border-[#F45B1A]/40 transition-all"
              >
                <span>Lihat Harga Paket</span>
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
              KEMAMPUAN TEKNIS & FITUR
            </span>
            <h2 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB]">
              Standar Kualitas Setiap Website yang Kami Bangun
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B0807] border border-white/10 flex items-center justify-center mb-5 text-[#F45B1A]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. PACKAGES CROSS-LINK SECTION ── */}
      <section className="section-py bg-[#140E0B]/40 border-b border-white/10">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block mb-2">
                PILIHAN INVESTASI
              </span>
              <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
                Paket yang Menyertakan Website Development
              </h2>
            </div>
            <Link
              href="/layanan/harga-paket/"
              className="inline-flex items-center gap-1.5 text-sm font-outfit font-bold text-[#F45B1A] hover:underline"
            >
              <span>Bandingkan Semua Spesifikasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES_INCLUDED.map((pkg) => (
              <div
                key={pkg.name}
                className="p-6 rounded-2xl bg-[#17100D] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-geom font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A99A90]">
                      {pkg.badge}
                    </span>
                    <span className="font-geom font-bold text-lg text-[#F7F1EB]">
                      {pkg.price}
                    </span>
                  </div>
                  <h3 className="font-geom font-bold text-xl text-[#F7F1EB] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed mb-6">
                    {pkg.scope}
                  </p>
                </div>
                <Link
                  href="/layanan/harga-paket/"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#F45B1A] text-xs font-geom font-bold uppercase tracking-wider text-[#F7F1EB] transition-colors"
                >
                  <span>Lihat Detail Paket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. FINAL CTA ── */}
      <ServicesCTASection />
    </div>
  );
}
