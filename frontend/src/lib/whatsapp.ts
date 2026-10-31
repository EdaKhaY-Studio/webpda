import { siteConfig } from "@/data/mockData";

export interface WhatsAppLinkOptions {
  message?: string;
  topic?: "website" | "ai" | "seo" | "general" | string;
  source?: string;
}

/**
 * Builds a standardized WhatsApp link with prefilled automated message.
 * Ensures phone number is internationalized (starts with country code e.g. 62)
 * and message is safely URL encoded.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.defaultMessage;
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Context-aware prefilled messages for specific user actions
 */
export const PREFILLED_MESSAGES = {
  general: siteConfig.defaultMessage,
  website:
    "Halo Tim Paham Digital Agency! Saya ingin konsultasi pembuatan website modern untuk usaha saya di Aceh Barat.",
  customerServiceAI:
    "Halo Tim Paham Digital! Saya tertarik memasang asisten Customer Service AI 24/7 untuk melayani pembeli otomatis.",
  seoGoogle:
    "Halo Tim Paham Digital! Saya ingin usaha saya mudah ditemukan di halaman #1 Google Maps dan pencarian AI.",
  pricing: (packageName: string) =>
    `Halo Paham Digital Agency! Saya ingin tanya ketersediaan dan detail untuk paket *${packageName}*.`,
  portfolio: (projectTitle: string, clientName: string) =>
    `Halo Paham Digital Agency! Saya tertarik dengan hasil kerja proyek *${projectTitle}* (${clientName}). Ingin konsultasi pembuatan serupa.`,
  customConsultation: (businessType: string) =>
    `Halo Paham Digital Agency! Usaha saya di bidang *${businessType}* di Aceh Barat. Saya ingin konsultasi solusi digital yang tepat.`,
};

