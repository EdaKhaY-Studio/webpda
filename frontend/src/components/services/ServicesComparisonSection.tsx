"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, ChevronDown } from "lucide-react";
import { buildWAUrl } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ComparisonRow {
  feature: string;
  category?: string;
  starter: string | boolean;
  suite: string | boolean;
  elite: string | boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Fokus Solusi",
    starter: "Website Profesional",
    suite: "Website + AI Customer Service + Web App Custom",
    elite: "Website + AI Customer Service + 2 Web App Custom",
  },
  {
    feature: "Website Profesional",
    starter: "Website Profesional — Maksimal 3 Halaman",
    suite: "Website Profesional — Maksimal 5 Halaman",
    elite: "Website Profesional — Disesuaikan dengan Kebutuhan Bisnis",
  },
  {
    feature: "Katalog Produk",
    starter: "Katalog Sederhana",
    suite: "Katalog Produk Interaktif",
    elite: "Sesuai Kebutuhan Website",
  },
  {
    feature: "Desain Responsif",
    starter: "Modern & Responsif",
    suite: "UI/UX Modern & Responsif",
    elite: "UI/UX Modern & Responsif",
  },
  {
    feature: "Domain",
    starter: ".COM — 1 Tahun",
    suite: "Pilihan .COM atau .ID — 1 Tahun",
    elite: "Pilihan .COM, .ID, atau .CO.ID — 3 Tahun",
  },
  {
    feature: "Hosting",
    starter: "1 Tahun",
    suite: "1 Tahun",
    elite: "3 Tahun",
  },
  {
    feature: "Domain Shield",
    starter: "—",
    suite: "—",
    elite: "Termasuk sesuai masa pembelian",
  },
  {
    feature: "SSL & Backup",
    starter: "Termasuk",
    suite: "Termasuk",
    elite: "Termasuk",
  },
  {
    feature: "WhatsApp Integration",
    starter: "WhatsApp Direct Chat",
    suite: "WhatsApp AI via n8n + WAHA",
    elite: "Claude AI via WhatsApp + n8n + WAHA",
  },
  {
    feature: "AI Customer Service",
    starter: "—",
    suite: "WhatsApp AI Customer Service — OpenAI",
    elite: "WhatsApp AI Customer Service — Claude Haiku 4.5",
  },
  {
    feature: "AI Model",
    starter: "—",
    suite: "OpenAI GPT-4o mini / GPT mini aktif",
    elite: "Claude Haiku 4.5",
  },
  {
    feature: "AI Character",
    starter: "—",
    suite: "AI dengan Karakter sesuai Bisnis",
    elite: "AI dengan Knowledge Base khusus Bisnis",
  },
  {
    feature: "Saldo Kredit AI Awal",
    starter: "—",
    suite: "US$26,44",
    elite: "US$85,125",
  },
  {
    feature: "AI Credit Conditions",
    starter: "—",
    suite: "Pengisian ulang menjadi tanggung jawab pelanggan jika saldo habis",
    elite: "Pengisian ulang menjadi tanggung jawab pelanggan jika saldo habis",
  },
  {
    feature: "Server n8n + WAHA",
    starter: "—",
    suite: "1 Tahun",
    elite: "3 Tahun",
  },
  {
    feature: "Knowledge Base",
    starter: "—",
    suite: "Informasi Bisnis untuk Konfigurasi AI",
    elite: "Knowledge Base Khusus Bisnis",
  },
  {
    feature: "SEO Optimization",
    starter: "Basic SEO Optimization",
    suite: "Advanced SEO Optimization",
    elite: "Advanced SEO Optimization",
  },
  {
    feature: "Google Search Console",
    starter: "Setup Google Search Console",
    suite: "Google Search Console Setup",
    elite: "Google Search Console + Sitelinks Optimization",
  },
  {
    feature: "GEO Optimization",
    starter: "—",
    suite: "GEO Optimization",
    elite: "GEO Optimization",
  },
  {
    feature: "Web Application",
    starter: "—",
    suite: "Website Apps Custom sesuai ketentuan paket",
    elite: "2 Web App Custom sesuai kebutuhan bisnis",
  },
  {
    feature: "Web App Usage Rights",
    starter: "—",
    suite: "Sesuai ruang lingkup dan ketentuan paket",
    elite: "Hak penggunaan tanpa biaya lisensi tambahan selamanya",
  },
  {
    feature: "Revisi Website",
    starter: "Maksimal 3 Putaran",
    suite: "7 Kali",
    elite: "9 Kali",
  },
  {
    feature: "Revisi Konfigurasi AI",
    starter: "—",
    suite: "10 Kali",
    elite: "11 Kali",
  },
  {
    feature: "Bug Maintenance",
    starter: "14 Hari",
    suite: "6 Bulan",
    elite: "7 Bulan",
  },
  {
    feature: "Konsultasi & Pendampingan",
    starter: "Panduan Penggunaan",
    suite: "Konsultasi Strategi Digital",
    elite: "1 Bulan Pembinaan Teknologi Digital",
  },
  {
    feature: "Pelatihan & Dokumentasi",
    starter: "—",
    suite: "Sesuai layanan yang disepakati",
    elite: "Pelatihan, Dokumentasi & Bantuan Teknis",
  },
  {
    feature: "Target Bisnis",
    starter: "UMKM, Bisnis Lokal & Penyedia Jasa",
    suite: "UMKM, Kuliner, Fashion, Retail & Bisnis Jasa",
    elite: "Perusahaan, Bisnis Berkembang, Retail & Usaha Jasa",
  },
  {
    feature: "Skema Pembayaran",
    starter: "50% / 30% / 20%",
    suite: "50% / 30% / 20%",
    elite: "50% / 30% / 20%",
  },
  {
    feature: "Harga Normal",
    starter: "Rp1.499.000",
    suite: "Rp4.500.000",
    elite: "Rp6.999.000",
  },
  {
    feature: "Harga Promo",
    starter: "Rp985.000",
    suite: "Rp2.850.000",
    elite: "Rp5.789.000",
  },
  {
    feature: "Hemat",
    starter: "Rp514.000",
    suite: "Rp1.650.000",
    elite: "Rp1.210.000",
  },
  {
    feature: "Promo",
    starter: "3 Klien Pertama",
    suite: "10 Klien Tercepat",
    elite: "15 Klien Tercepat",
  },
];

interface GeneralFAQItem {
  id: string;
  number: string;
  question: string;
  renderAnswer: () => React.ReactNode;
}

const GENERAL_FAQS: GeneralFAQItem[] = [
  {
    id: "faq-01",
    number: "01",
    question: "Apa saja materi dasar yang perlu disiapkan untuk pembuatan website?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Untuk membantu proses pengembangan website, klien perlu menyiapkan beberapa materi dasar:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Logo bisnis.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Teks informasi usaha atau profil perusahaan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Foto produk atau katalog produk.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Daftar pertanyaan umum (FAQ) beserta jawabannya.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Kontak resmi seperti nomor WhatsApp, email, dan alamat usaha jika tersedia.</span>
          </li>
        </ul>
        <p>
          Materi tambahan seperti informasi harga, jam operasional, lokasi, tautan media sosial, dan informasi layanan juga dapat disiapkan sesuai kebutuhan website.
        </p>
        <p className="text-[#A99A90] text-xs sm:text-sm pt-1">
          Semakin lengkap materi yang diberikan, semakin mudah proses penyusunan konten dan pengembangan website.
        </p>
      </div>
    ),
  },
  {
    id: "faq-02",
    number: "02",
    question: "Apa saja yang perlu disiapkan untuk konfigurasi WhatsApp AI Customer Service?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Klien perlu menyiapkan informasi agar AI dapat memahami bisnis dan berkomunikasi sesuai karakter usaha.
        </p>
        <p className="font-medium text-[#F7F1EB]">
          Beberapa hal yang perlu disiapkan:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Nama AI Customer Service yang diinginkan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Gaya komunikasi AI, misalnya ramah, santai, formal, profesional, atau menggunakan bahasa lokal.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Profil bisnis dan informasi produk atau layanan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Daftar harga, jam operasional, kebijakan pemesanan, dan informasi penting lainnya.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Daftar pertanyaan yang sering diajukan pelanggan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Empat contoh percakapan WhatsApp untuk dianalisis sebagai referensi perilaku dan pola jawaban AI.</span>
          </li>
        </ul>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0807]/90 border border-white/10 space-y-3 my-2">
          <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A]">
            Empat contoh percakapan WhatsApp yang disarankan:
          </div>
          <ol className="space-y-2 pl-1 list-none text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <span className="font-geom font-bold text-[#F45B1A] shrink-0">1.</span>
              <span>Pelanggan menanyakan harga dan informasi produk.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-geom font-bold text-[#F45B1A] shrink-0">2.</span>
              <span>Pelanggan menanyakan stok atau ketersediaan layanan.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-geom font-bold text-[#F45B1A] shrink-0">3.</span>
              <span>Pelanggan menanyakan cara pemesanan, pembayaran, atau pengiriman.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-geom font-bold text-[#F45B1A] shrink-0">4.</span>
              <span>Pelanggan menyampaikan keluhan atau meminta bantuan setelah pembelian.</span>
            </li>
          </ol>
        </div>

        <p className="text-xs sm:text-sm text-[#A99A90]">
          Setiap contoh sebaiknya berisi pertanyaan pelanggan dan jawaban ideal yang diharapkan dari pihak bisnis.
        </p>
        <p className="text-xs sm:text-sm text-[#A99A90]">
          Contoh tersebut digunakan sebagai referensi untuk menyusun instruksi dan mengonfigurasi gaya respons AI, bukan sebagai jaminan bahwa AI akan selalu memberikan jawaban yang sama persis.
        </p>
      </div>
    ),
  },
  {
    id: "faq-03",
    number: "03",
    question: "Apakah gaya komunikasi dan karakter AI Customer Service bisa disesuaikan?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Ya. AI Customer Service dapat dikonfigurasi sesuai identitas dan karakter komunikasi bisnis.
        </p>
        <p className="font-medium text-[#F7F1EB]">
          Klien dapat menentukan:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Nama asisten AI.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Gaya bahasa dan tingkat formalitas.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Sapaan kepada pelanggan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Karakter komunikasi.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Bahasa yang digunakan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Cara menawarkan produk atau layanan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Cara menjawab pertanyaan dan menangani keluhan.</span>
          </li>
        </ul>
        <p className="text-[#F7F1EB] pt-1">
          Tujuannya agar AI terasa seperti bagian dari pelayanan bisnis, bukan sekadar chatbot dengan jawaban kaku.
        </p>
      </div>
    ),
  },
  {
    id: "faq-04",
    number: "04",
    question: "Model AI apa yang digunakan dalam sistem AI Customer Service?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Model AI disesuaikan dengan paket layanan yang dipilih.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
          <div className="p-4 rounded-2xl bg-[#0B0807]/90 border border-[#F45B1A]/30">
            <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] mb-1.5">
              MEUGAH AI BUSINESS SUITE
            </div>
            <p className="text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
              Menggunakan model AI OpenAI, seperti GPT-4o mini atau model mini generasi berikutnya, sesuai konfigurasi dan ketersediaan layanan API.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0B0807]/90 border border-white/10">
            <div className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A] mb-1.5">
              MEUGAH AI BUSINESS ELITE
            </div>
            <p className="text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
              Menggunakan Claude Haiku 4.5 dari Anthropic untuk mendukung sistem AI Customer Service.
            </p>
          </div>
        </div>
        <p>
          Kedua model dikonfigurasi menggunakan instruksi, identitas bisnis, Knowledge Base, informasi produk dan layanan, serta contoh percakapan dari pelanggan.
        </p>
        <p className="text-[#A99A90] text-xs sm:text-sm">
          Tujuannya agar AI dapat memahami konteks bisnis dan memberikan respons sesuai karakter komunikasi yang telah ditentukan.
        </p>
      </div>
    ),
  },
  {
    id: "faq-05",
    number: "05",
    question: "Apakah AI Customer Service bisa menjawab semua pertanyaan secara otomatis?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          AI dapat membantu menjawab berbagai pertanyaan berdasarkan informasi dan instruksi yang sudah diberikan.
        </p>
        <p>
          Namun, kualitas jawaban bergantung pada kelengkapan dan ketepatan informasi bisnis.
        </p>
        <div className="p-3.5 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 text-xs sm:text-sm text-[#F7F1EB] font-medium">
          AI tidak boleh dianggap mengetahui semua informasi secara otomatis.
        </div>
        <p className="text-[#A99A90] text-xs sm:text-sm">
          Untuk pertanyaan di luar pengetahuannya, perubahan informasi yang belum diperbarui, atau persoalan khusus, pelanggan dapat diarahkan kepada admin atau petugas manusia.
        </p>
      </div>
    ),
  },
  {
    id: "faq-06",
    number: "06",
    question: "Bagaimana sistem AI Customer Service diintegrasikan dengan WhatsApp?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Ya. Sistem AI Customer Service dapat diintegrasikan dengan WhatsApp menggunakan teknologi penghubung dan workflow automation yang sesuai.
        </p>
        <p className="font-medium text-[#F7F1EB]">
          Dalam implementasi tertentu, sistem dapat menggunakan:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span><strong className="text-[#F7F1EB]">WAHA</strong> sebagai WhatsApp gateway.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span><strong className="text-[#F7F1EB]">n8n</strong> sebagai workflow automation.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span><strong className="text-[#F7F1EB]">Model AI</strong> untuk memproses pesan dan menyusun respons.</span>
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-[#A99A90] pt-1">
          Ketersediaan layanan bergantung pada koneksi internet, infrastruktur server, layanan WhatsApp, penyedia AI, serta konfigurasi sistem yang digunakan.
        </p>
      </div>
    ),
  },
  {
    id: "faq-07",
    number: "07",
    question: "Apakah Paham Digital Agency hanya melayani website atau juga Web Application?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p className="font-semibold text-[#F7F1EB]">
          Tidak hanya website.
        </p>
        <p>
          Paham Digital Agency juga menyediakan pengembangan Web Application sesuai kebutuhan bisnis.
        </p>
        <p className="font-medium text-[#F7F1EB]">
          Contohnya:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Sistem informasi bisnis.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Aplikasi manajemen internal.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Katalog produk interaktif.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Sistem reservasi atau formulir digital.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Tools berbasis web.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Aplikasi khusus sesuai kebutuhan operasional.</span>
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-[#A99A90] pt-1">
          Fitur, ruang lingkup, dan spesifikasi aplikasi akan dibahas terlebih dahulu sebelum pengembangan dimulai.
        </p>
      </div>
    ),
  },
  {
    id: "faq-08",
    number: "08",
    question: "Apa perbedaan antara SEO dan GEO, serta bagaimana pengaruhnya terhadap website?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          <strong className="text-[#F7F1EB]">SEO (Search Engine Optimization)</strong> merupakan upaya mengoptimalkan website agar lebih mudah dipahami dan berpeluang ditemukan melalui mesin pencari seperti Google.
        </p>
        <p>
          <strong className="text-[#F7F1EB]">GEO (Generative Engine Optimization)</strong> merupakan pendekatan untuk menyusun informasi bisnis dan konten agar lebih mudah dipahami serta berpeluang digunakan sebagai sumber oleh sistem pencarian berbasis AI.
        </p>
        <p>
          Keduanya dapat mencakup pengelolaan struktur konten, informasi bisnis, metadata, dan data terstruktur.
        </p>
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#A99A90]">
          Namun, SEO maupun GEO tidak menjamin peringkat tertentu di Google atau rekomendasi dari AI.
        </div>
      </div>
    ),
  },
  {
    id: "faq-09",
    number: "09",
    question: "Bagaimana tahapan dan alur proses pengerjaan proyek di Paham Digital Agency?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Secara umum, proses pengerjaan dimulai melalui beberapa tahapan:
        </p>
        <ol className="space-y-2.5 pl-1 list-none text-xs sm:text-sm">
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">1.</span>
            <span>Konsultasi dan memahami kebutuhan bisnis.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">2.</span>
            <span>Menentukan ruang lingkup pekerjaan dan fitur.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">3.</span>
            <span>Mengumpulkan materi serta informasi dari klien.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">4.</span>
            <span>Menyusun perencanaan dan memulai pengembangan setelah kesepakatan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">5.</span>
            <span>Pengujian dan penyesuaian hasil pekerjaan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-geom font-bold text-[#F45B1A] shrink-0">6.</span>
            <span>Penyerahan hasil dan panduan penggunaan sesuai layanan yang disepakati.</span>
          </li>
        </ol>
        <p className="text-xs sm:text-sm text-[#A99A90] pt-1">
          Setiap proyek mengikuti ruang lingkup dan kesepakatan yang telah ditentukan bersama.
        </p>
      </div>
    ),
  },
  {
    id: "faq-10",
    number: "10",
    question: "Bagaimana bentuk dukungan pemeliharaan (maintenance) dan bantuan teknis yang disediakan?",
    renderAnswer: () => (
      <div className="space-y-3.5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
        <p>
          Paham Digital Agency menyediakan dukungan pemeliharaan sesuai ketentuan dan masa layanan yang disepakati pada setiap proyek.
        </p>
        <p className="font-medium text-[#F7F1EB]">
          Dukungan dapat mencakup:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Perbaikan bug pada hasil pekerjaan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Pemeriksaan fungsi sistem.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Perbaikan masalah tampilan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Bantuan teknis terkait implementasi awal.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
            <span>Panduan penggunaan sistem.</span>
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-[#D5CBC3] pt-1">
          Penambahan halaman, fitur baru, integrasi tambahan, perubahan sistem besar, dan pengembangan di luar ruang lingkup awal dapat dibahas sebagai pekerjaan tambahan.
        </p>
        <p className="text-xs sm:text-sm text-[#A99A90]">
          Perpanjangan domain, hosting, server, dan layanan pihak ketiga mengikuti masa aktif serta ketentuan masing-masing penyedia.
        </p>
      </div>
    ),
  },
];

export default function ServicesComparisonSection() {
  const { sectionRef, getRevealClass, isInView, scrollDirection } = useScrollReveal();
  const [openAccordion, setOpenAccordion] = useState<string | null>("faq-01");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(id);
    }
  };

  const waSuiteUrl = buildWAUrl(
    "Halo Tim Paham Digital Agency! Saya ingin mendaftar promo 10 Klien Tercepat untuk Paket Meugah AI Business Suite (Rp2.850.000)."
  );

  return (
    <section
      ref={sectionRef}
      id="perbandingan-paket"
      className="relative section-py bg-[#0B0807] border-b border-white/10 scroll-mt-24"
      aria-labelledby="comparison-title"
    >
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>COMPARE YOUR OPTIONS</span>
          </div>

          <h2
            id="comparison-title"
            className={`font-geom font-bold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.12] text-[#F7F1EB] tracking-tight mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[100ms] ${getRevealClass()}`}
          >
            Kenali Perbedaan{" "}
            <span className="text-[#F45B1A]">
              Setiap Paket.
            </span>
          </h2>

          <p
            className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] ${getRevealClass()}`}
          >
            Bandingkan spesifikasi dan fasilitas setiap paket secara objektif untuk memastikan pilihan yang paling sesuai dengan kebutuhan dan target pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* ── 01. COMPARISON TABLE CONTAINER (Proper Box Grid Design & Horizontally Scrollable) ── */}
        <div
          className={`mb-20 rounded-2xl sm:rounded-3xl border border-white/15 bg-[#17100D] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.6)] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms] ${getRevealClass()}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse min-w-[760px] sm:min-w-[880px]">
              
              {/* Strict Column Proportions: 30% / 23.33% / 23.33% / 23.34% */}
              <colgroup>
                <col className="w-[30%]" style={{ width: "30%" }} />
                <col className="w-[23.33%]" style={{ width: "23.33%" }} />
                <col className="w-[23.33%]" style={{ width: "23.33%" }} />
                <col className="w-[23.34%]" style={{ width: "23.34%" }} />
              </colgroup>

              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10 bg-[#0B0807] text-xs font-geom uppercase tracking-wider">
                  <th scope="col" className="py-5 px-5 sm:px-6 font-bold text-[#A99A90] text-left border-r border-white/10 align-middle">
                    FASILITAS / SPESIFIKASI
                  </th>
                  <th scope="col" className="py-5 px-4 sm:px-5 font-bold text-[#F7F1EB] text-center border-r border-white/10 align-middle">
                    MEUGAH DIGITAL START
                  </th>
                  <th scope="col" className="py-5 px-4 sm:px-5 font-bold text-center bg-[#F45B1A]/[0.08] border-x border-[#F45B1A]/40 align-middle">
                    <div className="flex flex-col items-center justify-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F45B1A] text-white text-[10px] font-geom font-bold tracking-wider uppercase mb-1.5 shadow-sm">
                        RECOMMENDED
                      </span>
                      <span className="text-xs sm:text-sm font-geom font-extrabold text-[#F7F1EB] tracking-wider">
                        MEUGAH AI BUSINESS SUITE
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="py-5 px-4 sm:px-5 font-bold text-[#F7F1EB] text-center align-middle">
                    MEUGAH AI BUSINESS ELITE
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="font-outfit text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/10 hover:bg-white/[0.02] transition-colors ${
                      idx % 2 === 0 ? "bg-[#17100D]" : "bg-[#140E0B]"
                    }`}
                  >
                    {/* Feature Label (Col 1: 30%, Left-aligned, Vertical Border) */}
                    <td className="py-4 sm:py-4.5 px-5 sm:px-6 font-medium text-[#F7F1EB] border-r border-white/10 align-middle text-left break-words">
                      {row.feature}
                    </td>

                    {/* Starter (Col 2: 23.33%, Centered, Vertical Border) */}
                    <td className="py-4 sm:py-4.5 px-4 sm:px-5 text-center text-[#A99A90] border-r border-white/10 align-middle break-words">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-[#16A34A] mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#A99A90]/40 mx-auto" />
                        )
                      ) : row.starter === "—" ? (
                        <span className="text-[#A99A90]/40 select-none text-base">—</span>
                      ) : (
                        <span>{row.starter}</span>
                      )}
                    </td>

                    {/* Suite - Highlighted (Col 3: 23.33%, Centered, Orange Vertical Borders & Orange Tinted Background) */}
                    <td className="py-4 sm:py-4.5 px-4 sm:px-5 text-center font-semibold text-[#F7F1EB] bg-[#F45B1A]/[0.06] border-x border-[#F45B1A]/40 align-middle break-words">
                      {typeof row.suite === "boolean" ? (
                        row.suite ? (
                          <Check className="w-5 h-5 text-[#F45B1A] mx-auto stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#A99A90]/40 mx-auto" />
                        )
                      ) : row.suite === "—" ? (
                        <span className="text-[#A99A90]/40 font-normal select-none text-base">—</span>
                      ) : (
                        <span className="font-semibold text-[#F7F1EB]">{row.suite}</span>
                      )}
                    </td>

                    {/* Elite (Col 4: 23.34%, Centered, Outer Grid Boundary) */}
                    <td className="py-4 sm:py-4.5 px-4 sm:px-5 text-center text-[#A99A90] align-middle break-words">
                      {typeof row.elite === "boolean" ? (
                        row.elite ? (
                          <Check className="w-4 h-4 text-[#16A34A] mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#A99A90]/40 mx-auto" />
                        )
                      ) : row.elite === "—" ? (
                        <span className="text-[#A99A90]/40 select-none text-base">—</span>
                      ) : (
                        <span>{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Table Footer with Action Links & Box Grid Alignment */}
              <tfoot>
                <tr className="border-t border-white/10 bg-[#0B0807]">
                  <td className="py-5 px-5 sm:px-6 font-geom text-xs uppercase tracking-wider text-[#A99A90] border-r border-white/10 align-middle text-left">
                    PILIH TINDAKAN
                  </td>
                  <td className="py-5 px-4 sm:px-5 text-center border-r border-white/10 align-middle">
                    <Link
                      href="/layanan/harga-paket/"
                      className="inline-block py-1.5 px-3 rounded-lg text-xs font-outfit font-semibold text-[#A99A90] hover:text-[#F7F1EB] hover:bg-white/5 transition-colors"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                  <td className="py-5 px-4 sm:px-5 text-center bg-[#F45B1A]/[0.08] border-x border-[#F45B1A]/40 align-middle">
                    <a
                      href={waSuiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-xs font-outfit font-bold transition-all shadow-md shadow-[#F45B1A]/30"
                    >
                      <span>Ambil Promo Suite</span>
                    </a>
                  </td>
                  <td className="py-5 px-4 sm:px-5 text-center align-middle">
                    <Link
                      href="/layanan/harga-paket/"
                      className="inline-block py-1.5 px-3 rounded-lg text-xs font-outfit font-semibold text-[#A99A90] hover:text-[#F7F1EB] hover:bg-white/5 transition-colors"
                    >
                      Konsultasi
                    </Link>
                  </td>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>

        {/* ── 02. UNIFIED GENERAL FAQ ACCORDION (Homepage Animation Style) ── */}
        <div
          id="faq"
          className="max-w-4xl mx-auto pt-16 sm:pt-20 border-t border-white/10"
        >
          {/* Header Title for General FAQ */}
          <div className="mb-10 sm:mb-12 text-left">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-4 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>GENERAL FAQ</span>
            </div>

            <h2
              id="faq-heading"
              className={`font-geom font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[1.15] text-[#F7F1EB] tracking-tight mb-4 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[100ms] ${getRevealClass()}`}
            >
              Pertanyaan yang{" "}
              <span className="text-[#F45B1A]">
                Sering Ditanyakan.
              </span>
            </h2>

            <p
              className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-3xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[200ms] ${getRevealClass()}`}
            >
              Temukan informasi mengenai persiapan proyek, website, AI Customer Service, proses pengerjaan, dan layanan digital Paham Digital Agency.
            </p>
          </div>

          {/* Accordion List with Smooth Height & Opacity Transitions (Exactly 10 Items) */}
          <div className="space-y-3.5" role="region" aria-labelledby="faq-heading">
            {GENERAL_FAQS.map((item, index) => {
              const isOpen = openAccordion === item.id;
              const contentId = `faq-panel-${item.id}`;
              const triggerId = `faq-btn-${item.id}`;
              const itemDelay = isInView
                ? scrollDirection === "down"
                  ? `${(index % 5) * 120 + 100}ms`
                  : `${(4 - (index % 5)) * 120 + 100}ms`
                : "0ms";

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] border ${
                    isOpen
                      ? "bg-[#17100D] border-[#F45B1A]/40 shadow-xl shadow-black/50"
                      : "bg-[#140E0B]/70 hover:bg-[#17100D]/70 border-white/[0.08] hover:border-white/15"
                  } ${getRevealClass()}`}
                  style={{
                    transitionDelay: itemDelay,
                  }}
                >
                  {/* Accordion Row Header Button */}
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-start justify-between gap-4 sm:gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45B1A] rounded-2xl cursor-pointer group"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0">
                      {/* Two-digit number prefix */}
                      <span className="font-geom font-bold text-sm sm:text-base text-[#F45B1A] tracking-wider pt-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.number}
                      </span>

                      {/* Question Title in Outfit font */}
                      <h3
                        className={`font-outfit font-semibold text-base sm:text-lg leading-snug transition-colors ${
                          isOpen ? "text-[#F45B1A]" : "text-[#F7F1EB] group-hover:text-white"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Circular Indicator with Smooth 180deg Rotation */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "bg-[#F45B1A] text-white rotate-180 shadow-md shadow-[#F45B1A]/30"
                          : "bg-white/[0.05] text-[#A99A90] group-hover:text-[#F7F1EB] group-hover:bg-white/[0.10]"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Grid-Rows Height & Opacity Transition Panel */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-300 ease-in-out px-5 sm:px-7 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0 overflow-hidden pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3 sm:pt-4 border-t border-white/[0.06] pl-7 sm:pl-8">
                        {item.renderAnswer()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
