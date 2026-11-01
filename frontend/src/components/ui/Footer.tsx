import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, buildWAUrl, WHATSAPP_MESSAGES, NAV_ITEMS, SERVICES } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.general);

  return (
    <footer
      role="contentinfo"
      className="bg-[#0B0807] border-t border-white/10 text-[#A99A90] font-body"
    >
      <div className="container-site pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              aria-label="Paham Digital Agency — Beranda"
              className="inline-block group mb-6"
            >
              <div className="relative h-13 w-auto flex items-center">
                <Image
                  src="/images/logo-paham-light.png"
                  alt="Paham Digital Agency Logo"
                  width={150}
                  height={56}
                  className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base leading-relaxed text-[#A99A90] max-w-sm mb-6">
              <strong className="text-[#F7F1EB] font-display font-semibold block mb-1">
                {SITE_CONFIG.tagline}
              </strong>
              {SITE_CONFIG.shortDescription}
            </p>

            <div className="flex items-center gap-3">
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Paham Digital Agency"
                  className="w-10 h-10 rounded-xl bg-[#17100D] border border-white/10 text-[#A99A90] hover:text-[#F45B1A] hover:border-[#F45B1A]/40 flex items-center justify-center transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              )}
              {SITE_CONFIG.social.tiktok && (
                <a
                  href={SITE_CONFIG.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Paham Digital Agency"
                  className="w-10 h-10 rounded-xl bg-[#17100D] border border-white/10 text-[#A99A90] hover:text-[#F45B1A] hover:border-[#F45B1A]/40 flex items-center justify-center transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.23 8.23 0 004.83 1.56V6.9a4.85 4.85 0 01-1.06-.21z"/>
                  </svg>
                </a>
              )}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Paham Digital Agency"
                className="w-10 h-10 rounded-xl bg-[#17100D] border border-white/10 text-[#A99A90] hover:text-[#16A34A] hover:border-[#16A34A]/40 flex items-center justify-center transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#F45B1A] mb-5">
              Navigasi Halaman
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#F45B1A] mb-5">
              Layanan Utama
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#layanan"
                    className="text-[#A99A90] hover:text-[#F7F1EB] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-[#F45B1A] transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A99A90]">
          <p>© {currentYear} {SITE_CONFIG.name}. Seluruh hak cipta dilindungi.</p>
          <p>{SITE_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
