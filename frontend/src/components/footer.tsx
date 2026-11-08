import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/mockData";
import { buildWhatsAppUrl, PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { Globe, MessageCircle, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const waUrl = buildWhatsAppUrl(PREFILLED_MESSAGES.general);

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Paham Digital Agency
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Mitra transformasi digital terpercaya bagi UMKM di Aceh Barat. Kami
              membangun website modern, mengintegrasikan Customer Service AI 24/7,
              serta mengoptimasi kehadiran usaha Anda di Google & rekomendasi AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Nav Links Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="hover:text-white transition-colors">
                  Layanan UMKM
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-white transition-colors">
                  Hasil Kerja / Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/#paket" className="hover:text-white transition-colors">
                  Paket & Perkiraan Harga
                </Link>
              </li>
              <li>
                <Link href="/#testimoni" className="hover:text-white transition-colors">
                  Testimoni Pelanggan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hubungi Kami Langsung
            </h3>
            <p className="mt-4 text-xs text-slate-400">
              Konsultasi gratis tanpa kewajiban. Diskusikan rencana digital bisnis Anda
              bersama tim lokal Aceh Barat.
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Paham Digital Agency. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan rasa bangga untuk memajukan UMKM di Aceh Barat{" "}
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
