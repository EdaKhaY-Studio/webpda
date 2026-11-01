"use client";

import { useState, useEffect } from "react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";
import { X, MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-body pointer-events-auto"
    >
      {/* Tooltip Dialog */}
      {tooltipOpen && (
        <div className="relative w-72 rounded-2xl bg-[#17100D] border border-white/15 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            type="button"
            onClick={() => setTooltipOpen(false)}
            aria-label="Tutup Dialog"
            className="absolute top-3 right-3 text-[#A99A90] hover:text-[#F7F1EB] p-1 rounded-lg transition-colors"
          >
            <X size={15} />
          </button>
          
          <div className="flex items-center gap-2 mb-2 pr-6">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
            <p className="text-sm font-bold font-display text-[#F7F1EB]">
              Konsultasi Langsung
            </p>
          </div>

          <p className="text-xs text-[#A99A90] leading-relaxed mb-4">
            Halo! Tim Paham Digital siap mendiskusikan kebutuhan website, AI, atau automasi bisnis Anda.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold transition-all shadow-md shadow-[#16A34A]/30"
          >
            <MessageCircle size={15} />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setTooltipOpen(!tooltipOpen)}
        aria-label="Chat WhatsApp Paham Digital Agency"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white shadow-[0_8px_28px_rgba(22,163,74,0.45)] hover:shadow-[0_10px_36px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle size={26} fill="white" className="text-white" />
      </button>
    </aside>
  );
}
