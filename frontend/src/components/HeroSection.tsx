import React from "react";
import { siteConfig } from "@/data/mockData";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Bot, Star, Sparkles } from "lucide-react";

export default function HeroSection() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.defaultMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white py-12 sm:py-20 lg:py-28">
      {/* Background blur accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-purple-200/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-md mb-6 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Digital Agency Khusus UMKM Aceh Barat</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-600 font-normal">Modern & Terpercaya</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.15]">
            Bantu UMKM Aceh Barat Tampil{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Modern & Naik Level
            </span>{" "}
            Lewat Sentuhan Digital
          </h1>

          {/* Subheading */}
          <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-600">
            Sudah punya produk bagus tapi belum punya website meyakinkan? Kami buatkan
            website modern, lengkapi dengan{" "}
            <strong className="font-semibold text-slate-900">Customer Service AI 24/7</strong>,
            serta optimasi agar usahamu mudah ditemukan di{" "}
            <strong className="font-semibold text-slate-900">Google & Rekomendasi AI</strong>.
          </p>

          {/* Call To Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-7 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98] transition-all min-h-[48px]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#portofolio"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm sm:text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all min-h-[48px]"
            >
              <span>Lihat Bukti Hasil Kerja</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left max-w-4xl w-full">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Lokal Aceh Barat</h4>
                <p className="text-[11px] text-slate-500">Paham budaya & pasar lokal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">AI Customer Service</h4>
                <p className="text-[11px] text-slate-500">Balas chat pembeli 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">SEO & Rekomendasi</h4>
                <p className="text-[11px] text-slate-500">Mudah dicari di Google</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Tanpa Ribet</h4>
                <p className="text-[11px] text-slate-500">Terima beres & siap pakai</p>
              </div>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/70 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Mobile & Responsif</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">&lt; 5 Detik</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Respon CS AI Cepat</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Langsung</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Order ke WhatsApp</p>
            </div>
            <div className="p-2 flex flex-col items-center justify-center">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-500 mt-1">Kepuasan Klien UMKM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
