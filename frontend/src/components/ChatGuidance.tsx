import React from "react";
import { siteConfig } from "@/data/mockData";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  HelpCircle,
  CheckCircle2,
  MessageCircle,
  FileText,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export interface ChatGuidanceProps {
  compact?: boolean;
  onSelectTopic?: (topic: string) => void;
}

export default function ChatGuidance({ compact = false }: ChatGuidanceProps) {
  const waUrl = buildWhatsAppUrl();

  const guidanceSteps = [
    {
      step: "1",
      title: "Nama Usaha & Jenis Bisnis",
      description:
        "Sebutkan nama toko, warung, klinik, atau jasa Anda serta produk utama yang dijual (misal: warkop, butik tenun, jasa derek/bengkel di Meulaboh).",
      tip: "Contoh: 'Kedai Kopi Meulaboh - Jual biji kopi robusta & cafe tongkrongan.'",
    },
    {
      step: "2",
      title: "Kebutuhan Utama Saat Ini",
      description:
        "Jelaskan apa yang paling mendesak: ingin website baru, ingin pasang bot AI penjawab 24 jam, atau ingin toko muncul di Google Maps.",
      tip: "Contoh: 'Ingin website agar pelanggan luar kota bisa lihat menu dan pesan via WA.'",
    },
    {
      step: "3",
      title: "Foto Produk & Logo (Jika Ada)",
      description:
        "Bila sudah punya foto produk di HP atau logo toko, Anda bisa kirimkan langsung saat chat WhatsApp dimulai.",
      tip: "Belum punya logo atau foto bagus? Jangan khawatir! Tim kami siap bantu foto & desainkan.",
    },
    {
      step: "4",
      title: "Perkiraan Target Waktu Rilis",
      description:
        "Beri tahu kami jika Anda punya target acara atau promo tertentu agar jadwal pembuatan kami sesuaikan.",
      tip: "Standar pengerjaan kami 3–5 hari kerja.",
    },
  ];

  if (compact) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>Hal yang sebaiknya disiapkan sebelum chat:</span>
        </div>
        <div className="space-y-2">
          {guidanceSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs"
            >
              <div className="flex items-center gap-2 font-medium text-slate-900">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white shrink-0">
                  {item.step}
                </span>
                <span>{item.title}</span>
              </div>
              <p className="mt-1 pl-6 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-emerald-50 p-2.5 text-[11px] text-emerald-800 border border-emerald-100 flex items-start gap-1.5">
          <Lightbulb className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            Belum siap semua data di atas? Tidak masalah, langsung chat saja dan tim kami akan pandu dengan ramah.
          </span>
        </div>
      </div>
    );
  }

  return (
    <section id="panduan-chat" className="py-16 bg-slate-50/60 border-t border-slate-200/60 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Panduan Sebelum Chat WhatsApp</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            4 Hal Sederhana yang Membantu Kami Memahami Usaha Anda
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Agar sesi konsultasi lebih cepat dan tepat sasaran, berikut beberapa hal yang bisa Anda siapkan sebelum menyapa tim kami di WhatsApp.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guidanceSteps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-lg mb-4 border border-emerald-100">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800">Catatan: </span>
                {item.tip}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-950">
                Belum Punya Persiapan Lengkap? Tetap Bisa Konsultasi!
              </h4>
              <p className="text-xs text-emerald-800 mt-0.5">
                Jangan ragu untuk langsung sapa kami. Kami akan bantu gali kebutuhan dan bantu susun materinya dari nol.
              </p>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all shrink-0 min-h-[44px]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat WhatsApp Sekarang</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

