import {
  Globe,
  Bot,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Award,
  Zap,
  Clock,
  Shield,
  Layers,
} from "lucide-react";
import { MOCK_SERVICES, AGENCY_INFO } from "@/data/mock-home";

export default function ServicesSection() {
  const serviceCards = [
    {
      id: "web-umkm",
      slug: "pembuatan-website-umkm",
      title: "Pembuatan Website UMKM",
      category: "Layanan Fondasi Digital",
      tagline: "Etalase digital elegan, cepat, & meyakinkan",
      description:
        "Website modern dengan desain khusus untuk bisnis Anda di Aceh Barat. Tampil sempurna di smartphone pelanggan, loading super cepat walau sinyal minim, dan siap menerima pesanan langsung via WhatsApp.",
      turnaround: "3–5 Hari Kerja",
      accentColor: "from-blue-600 to-sky-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      popular: true,
      features: [
        "Desain responsif mobile & tablet (tampilan rapi di HP)",
        "Katalog produk / daftar menu interaktif & foto jernih",
        "Tombol order langsung terhubung ke nomor WhatsApp kasir",
        "Gratis nama domain .com & hosting server kencang 1 tahun",
        "Integrasi rute Google Maps langsung ke lokasi usaha Anda",
      ],
      idealFor: "Warung Kopi, Butik Tenun, Toko Retail, Klinik, Bengkel & Jasa",
      whatsappMsg:
        "Halo Paham Digital Agency, saya tertarik konsultasi Pembuatan Website UMKM untuk usaha saya.",
    },
    {
      id: "cs-ai",
      slug: "customer-service-ai",
      title: "Customer Service AI 24/7",
      category: "Layanan Otomasi Penjualan",
      tagline: "Asisten cerdas siaga menjawab tanpa jeda",
      description:
        "Jangan biarkan calon pembeli beralih ke toko lain karena admin lambat balas saat malam hari atau jam sibuk. Asisten AI kami ramah menjawab pertanyaan harga, stok, dan menu dalam hitungan detik.",
      turnaround: "2–4 Hari Setup",
      accentColor: "from-indigo-600 to-purple-600",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      popular: false,
      features: [
        "Siaga melayani 24 jam nonstop tanpa mengenal hari libur",
        "Dilatih khusus sesuai daftar menu, harga, & info usaha Anda",
        "Gaya bahasa ramah dan mengerti percakapan lokal",
        "Otomatis menyaring pembeli serius dan meneruskan ke WhatsApp",
        "Menghemat waktu dan beban operasional tim admin",
      ],
      idealFor: "Usaha yang sering kebanjiran chat atau terima order larut malam",
      whatsappMsg:
        "Halo Paham Digital Agency, saya ingin tanya solusi Customer Service AI 24/7 untuk toko saya.",
    },
    {
      id: "seo-ai",
      slug: "optimasi-google-dan-ai",
      title: "Optimasi Google & Rekomendasi AI",
      category: "Layanan Pertumbuhan & Visibilitas",
      tagline: "Mudah ditemukan saat calon pembeli mencari di daerah",
      description:
        "Pastikan usaha Anda berada di halaman pertama Google Maps dan Search saat orang mencari jasa atau produk Anda di Meulaboh, serta terindeks untuk rekomendasi mesin AI masa depan.",
      turnaround: "Optimasi Berkelanjutan",
      accentColor: "from-sky-600 to-teal-600",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      popular: false,
      features: [
        "Verifikasi & setup optimal Google Profil Bisnis (Google Maps)",
        "Riset kata kunci pencarian lokal spesifik Meulaboh & Aceh Barat",
        "Panduan & template untuk mendongkrak ulasan bintang 5 pelanggan",
        "Penerapan struktur data (Schema Markup) agar terbaca AI Search",
        "Laporan bulanan jumlah pengunjung yang menelepon atau berkunjung",
      ],
      idealFor: "Toko fisik, cafe, bengkel, dokter, & usaha yang ingin didatangi pembeli",
      whatsappMsg:
        "Halo Paham Digital Agency, saya ingin konsultasi Optimasi Google & Rekomendasi AI untuk bisnis saya.",
    },
  ];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 mb-4 shadow-sm">
            <Layers className="h-4 w-4 text-blue-600" />
            <span>Tiga Pilar Solusi Digital</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Tiga Kartu Layanan Utama Paham Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kombinasi lengkap agar usaha lokal tidak hanya punya website, tetapi juga punya asisten otomatis dan selalu muncul di radar pencarian calon pelanggan.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {serviceCards.map((service, index) => {
            const isWeb = service.id === "web-umkm";
            const isAI = service.id === "cs-ai";
            const isSEO = service.id === "seo-ai";

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-8 transition-all duration-300 ${
                  service.popular
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-500/20 lg:-translate-y-2"
                    : "border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                {/* Popular Ribbon if marked */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                      <Award className="h-3.5 w-3.5 text-amber-300" />
                      Pilihan Terfavorit UMKM
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Turnaround */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 rounded-md px-2 py-0.5">
                      <Clock className="h-3 w-3 text-slate-400" />
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Header: Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm ${service.iconBg} group-hover:scale-105 transition-transform`}
                    >
                      {isWeb && <Globe className="h-7 w-7" />}
                      {isAI && <Bot className="h-7 w-7" />}
                      {isSEO && <TrendingUp className="h-7 w-7" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-blue-600 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Ideal For box */}
                  <div className="mb-6 rounded-xl bg-slate-50 border border-slate-100 p-3">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                      Sangat Cocok Untuk:
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      {service.idealFor}
                    </p>
                  </div>

                  {/* Feature deliverables checklist */}
                  <div className="space-y-3 border-t border-slate-100 pt-6 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Yang Termasuk Dalam Layanan:
                    </div>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={`https://wa.me/6282272991000?text=${encodeURIComponent(
                      service.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-semibold transition-all ${
                      service.popular
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
                        : "bg-slate-900 text-white hover:bg-blue-600 shadow-sm"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    <span>Tanya Paket {service.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-900">
                Semua Layanan Bergaransi & Didampingi Sampai Jalan
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                Bukan cuma buat dan tinggal. Kami ajarkan cara pakai dan kami siap bantu kapan saja lewat WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors shrink-0 shadow-sm"
          >
            <span>Konsultasi Semua Layanan</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
