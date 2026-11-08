"use client";

import { useState } from "react";
import { ListFilter, ChevronDown, ChevronUp } from "lucide-react";

export interface TOCItem {
  id: string;
  number?: string;
  title: string;
}

const DEFAULT_TOC_ITEMS: TOCItem[] = [
  { id: "01-hosting", number: "01", title: "Hosting — Rumah Tempat Website Tinggal" },
  { id: "02-domain", number: "02", title: "Domain — Alamat Rumahnya" },
  { id: "03-tld", number: "03", title: "Kenapa Ada .COM, .ID, dan .ONLINE?" },
  { id: "04-custom-tld", number: "04", title: "Kenapa Nggak Buat Ekstensi Sendiri?" },
  { id: "05-pilih-ekstensi", number: "05", title: "Jadi, Harus Pakai .COM atau .ID?" },
  { id: "06-gabungan-keduanya", number: "06", title: "Sekarang, Coba Bayangkan Keduanya!" },
  { id: "07-hanya-domain", number: "07", title: "Apa yang Terjadi Kalau Hanya Punya Domain?" },
  { id: "08-tempat-beli", number: "08", title: "Harus Dibeli di Tempat yang Sama?" },
  { id: "09-kebutuhan-bisnis", number: "09", title: "Kenapa Bisnis Membutuhkan Keduanya?" },
  { id: "kesimpulan", number: "★", title: "Kesimpulan & Solusi Bisnis" },
];

export interface TableOfContentsProps {
  items?: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const activeItems = items && items.length > 0 ? items : DEFAULT_TOC_ITEMS;

  return (
    <nav
      aria-label="Daftar Isi Artikel"
      className="rounded-2xl bg-[#17100D] border border-white/10 p-5 sm:p-6 shadow-xl"
    >
      {/* Mobile Toggle Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <ListFilter className="w-4 h-4 text-[#F45B1A]" />
          <span className="font-geom font-bold text-sm uppercase tracking-wider text-[#F7F1EB]">
            Daftar Isi Artikel
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="lg:hidden p-1.5 rounded-lg bg-white/5 text-[#A99A90] hover:text-[#F7F1EB]"
          aria-expanded={isOpenMobile}
          aria-label="Buka/Tutup Daftar Isi"
        >
          {isOpenMobile ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Item List (Always visible on desktop, toggleable on mobile) */}
      <div className={`${isOpenMobile ? "block" : "hidden"} lg:block mt-4 pt-4 border-t border-white/10`}>
        <ol className="space-y-2.5 text-xs sm:text-sm font-outfit">
          {activeItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpenMobile(false)}
                className="group flex items-start gap-2.5 text-[#A99A90] hover:text-[#F7F1EB] transition-colors py-1 leading-snug"
              >
                <span className="font-geom font-semibold text-[#F45B1A] shrink-0 opacity-80 group-hover:opacity-100">
                  {item.number}
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

