import { MessageCircle, CheckCircle2, Clock, PhoneCall, Sparkles } from "lucide-react";
import { AGENCY_INFO } from "@/data/mock-home";

export default function CtaSection() {
  return (
    <section id="konsultasi" className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-blue-100 border border-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Konsultasi 100% Gratis Tanpa Komitmen</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Siap Bikin Usaha Anda Lebih Modern & Ramai Pembeli?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Ceritakan ide dan kebutuhan usaha Anda. Tim Paham Digital Agency siap memberikan saran solusi terbaik, perkiraan biaya yang pas di kantong, dan panduan langkah demi langkah.
            </p>

            {/* Quick Benefits list */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Tanpa Form Rumit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Respon WhatsApp Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Solusi Disesuaikan Modal Anda</span>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-8 py-5 text-lg font-bold text-slate-950 shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 hover:shadow-emerald-500/35 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="h-6 w-6 fill-slate-950" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>

            <p className="mt-5 text-xs text-blue-200">
              *Tersedia untuk pengusaha di Meulaboh, Aceh Barat, dan seluruh daerah di Aceh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

