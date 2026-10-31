import React from "react";
import { siteConfig } from "@/data/mockData";
import { MessageCircle, Sparkles, CheckCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi gratis untuk mengembangkan website dan sistem digital usaha saya di Aceh Barat."
  )}`;

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-white/10 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Konsultasi 100% Gratis & Tanpa Kewajiban</span>
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Siap Bikin Usahamu di Aceh Barat Naik Level Sekarang?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
              Diskusikan ide bisnismu langsung bersama tim lokal kami. Mulai dari
              pembuatan website, asisten AI WhatsApp, hingga optimasi agar bisnismu
              mudah dicari orang di Google.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-50">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Konsultasi langsung via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Respon cepat dalam hitungan menit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Harga transparan & ramah kantong UMKM</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Dampingi proses dari awal sampai jadi</span>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 text-center">
              Mulai Chat Bersama Tim Kami
            </h3>
            <p className="mt-2 text-xs text-slate-600 text-center">
              Pesan pembuka sudah disiapkan otomatis agar Anda tidak perlu bingung merangkai kata.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/80 text-xs text-slate-700 italic">
              "Halo Tim Paham Digital Agency! Saya ingin konsultasi gratis untuk mengembangkan
              website dan sistem digital usaha saya di Aceh Barat."
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 py-4 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Kirim Pesan ke WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="text-center text-[11px] text-slate-500">
                Nomor Resmi: <strong className="text-slate-800">{siteConfig.whatsappDisplay}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
