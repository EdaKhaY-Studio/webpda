"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/mockData";
import { buildWhatsAppUrl, PREFILLED_MESSAGES } from "@/lib/whatsapp";
import ChatGuidance from "@/components/ChatGuidance";
import { MessageCircle, X, HelpCircle, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGuidance, setShowGuidance] = useState(false);
  const [customTopic, setCustomTopic] = useState("website");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const topics = [
    {
      id: "website",
      label: "Pembuatan Website",
      message: PREFILLED_MESSAGES.website,
    },
    {
      id: "ai",
      label: "Customer Service AI",
      message: PREFILLED_MESSAGES.customerServiceAI,
    },
    {
      id: "seo",
      label: "Optimasi Google & AI",
      message: PREFILLED_MESSAGES.seoGoogle,
    },
    {
      id: "custom",
      label: "Konsultasi Umum",
      message: PREFILLED_MESSAGES.general,
    },
  ];

  const currentTopic = topics.find((t) => t.id === customTopic) || topics[0];
  const activeWaUrl = buildWhatsAppUrl(currentTopic.message);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Dialog Popup Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200/80 transition-all animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-300 ring-2 ring-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Chat WhatsApp Paham Digital</h4>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online • Respon Cepat & Ramah
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Tutup popup WhatsApp"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Toggle Guidance vs Chat */}
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
              <span className="font-medium text-slate-700">Perlu panduan sebelum chat?</span>
              <button
                type="button"
                onClick={() => setShowGuidance(!showGuidance)}
                className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <HelpCircle className="h-3.5 w-3.5" />
                {showGuidance ? "Pilih Topik Chat" : "Lihat Panduan"}
              </button>
            </div>

            {showGuidance ? (
              <ChatGuidance compact={true} />
            ) : (
              /* Pilihan Topik & Pesan Otomatis */
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-700">
                  Pilih Kebutuhan Anda:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setCustomTopic(t.id)}
                      className={`rounded-xl px-2.5 py-2 text-left text-xs font-medium transition-all ${
                        customTopic === t.id
                          ? "bg-emerald-50 border-2 border-emerald-500 text-emerald-800 font-semibold"
                          : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="block text-xs font-semibold text-slate-700">
                    Pesan Otomatis yang Terkirim:
                  </span>
                  <div className="rounded-xl bg-slate-100 p-3 text-xs text-slate-700 italic border border-slate-200">
                    "{currentTopic.message}"
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Pesan sudah disiapkan, tinggal tekan kirim saat WhatsApp terbuka.
                  </p>
                </div>
              </div>
            )}

            {/* Launch WhatsApp button */}
            <a
              href={activeWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-4 text-sm font-bold text-white shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all"
            >
              <Send className="h-4 w-4" />
              <span>Buka WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="group relative flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3.5 text-white shadow-xl hover:bg-emerald-700 active:scale-95 transition-all focus:outline-none ring-4 ring-emerald-500/20"
        aria-label="Buka Chat WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200" />
        </span>
        <MessageCircle className="h-6 w-6 group-hover:rotate-6 transition-transform" />
        <span className="text-sm font-bold pr-1 hidden sm:inline-block">
          Konsultasi WhatsApp
        </span>
      </button>
    </div>
  );
}
