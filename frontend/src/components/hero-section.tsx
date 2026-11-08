import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Bot,
  Globe2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { AGENCY_INFO, MOCK_STATS } from "@/data/mock-home";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-sky-100/50 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Partner Transformasi Digital UMKM Aceh Barat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              Bikin Usaha Anda{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Lebih Modern
              </span>{" "}
              & Naik Level di Meulaboh
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Tinggalkan cara lama. Hadirkan website berkelas, asisten AI ramah yang membalas calon pembeli 24 jam nonstop, serta kemudahan ditemukan di peringkat atas Google.
            </p>

            {/* Key bullet promises */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Website elegan ramah smartphone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Customer Service AI otomatis 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Terlihat di Google Maps & Pencarian AI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Pendampingan penuh tanpa ribet teknis</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-emerald-600/35 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>

              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <span>Lihat Contoh Hasil Kerja</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust banner under CTA */}
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  KM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  RT
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                  BM
                </div>
              </div>
              <div>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span>Dipercaya puluhan pelaku UMKM lokal di Aceh Barat</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mockup Card / Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl" />

              <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xl space-y-5">
                {/* Header card preview */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    pahamdigital.id/demo-umkm
                  </span>
                </div>

                {/* Simulated Business Profile Card */}
                <div className="rounded-xl bg-slate-900 p-5 text-white shadow-inner">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                        Live Preview UMKM
                      </span>
                      <h4 className="mt-1 font-bold text-base text-white">
                        Kupi Meulaboh & Roastery
                      </h4>
                      <p className="text-xs text-slate-300">
                        Johan Pahlawan, Aceh Barat
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Online 24 Jam
                    </span>
                  </div>

                  {/* Simulated AI Chat bubble */}
                  <div className="mt-4 rounded-lg bg-slate-800/90 p-3 border border-slate-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-blue-300">
                        Asisten AI Paham Digital
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      &quot;Selamat malam Kak! Ready stok Robusta Meulaboh kemasan 250g. Bisa langsung diantar ke area kota malam ini ya!&quot;
                    </p>
                  </div>
                </div>

                {/* Performance stats floating badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Google Search</div>
                      <div className="text-sm font-bold text-slate-900">
                        Halaman #1
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Kecepatan Web</div>
                      <div className="text-sm font-bold text-slate-900">
                        0.8s Super Fast
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Quick Action */}
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <MessageCircle className="h-4 w-4 fill-white" />
                    </div>
                    <div className="text-xs font-semibold text-emerald-950">
                      Order Otomatis ke WhatsApp
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700">
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section Strip */}
        <div className="mt-16 sm:mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {MOCK_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

