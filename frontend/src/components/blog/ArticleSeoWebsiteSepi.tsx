import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Share2,
  ArrowRight,
  Bot,
  BookOpen,
  Search,
  Compass,
  MapPin,
  Flame,
  Layout,
  Smartphone,
  Gauge,
  Layers,
  ArrowLeft,
  Users,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleSeoWebsiteSepi({ waShareUrl }: Props) {
  return (
    <div className="space-y-12">
      {/* ── LEAD PARAGRAPH ───────────────────────────────────── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border-l-4 border-[#F45B1A] border-y border-r border-white/[0.08] shadow-lg">
        <p className="font-geom font-semibold text-lg sm:text-xl text-[#F7F1EB] leading-relaxed mb-3">
          Pernah nggak kamu membangun sebuah rumah, melengkapi semua perabotannya, bahkan sudah punya alamat yang jelas, tetapi kok nggak ada tetangga yang datang berkunjung?
        </p>
        <p className="font-outfit text-base text-[#A99A90] leading-relaxed mb-3">
          Rumahnya bagus, alamatnya juga sudah ada. Tapi sepi banget!
        </p>
        <p className="font-outfit text-base text-[#A99A90] leading-relaxed mb-3">
          Nah, ternyata masalahnya bukan selalu karena rumahmu jelek. Bisa jadi, orang-orang di sekitar sana bahkan belum tahu kalau rumahmu itu ada.
        </p>
        <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
          Sekarang coba kita pindah ke dunia website. Kamu sudah membeli domain, menyewa hosting, membuat website yang bagus, memasukkan foto produk, dan menampilkan semua informasi bisnis. Tapi kenapa pengunjung masih sedikit?
        </p>
      </div>

      {/* ── SATU PERTANYAAN BESAR (THE BIG QUESTION) ─────────── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#24150F] via-[#1A110D] to-[#140E0B] border border-[#F45B1A]/40 shadow-xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F45B1A]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold mb-3">
          <HelpCircle className="w-4 h-4" />
          <span>SATU PERTANYAAN BESAR</span>
        </div>
        
        <p className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug mb-4">
          Kalau rumah sudah punya alamat, tetapi belum ada yang bertamu, bagaimana caranya supaya orang-orang tahu rumah kita ada dan mau berkunjung?
        </p>
        
        <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed mb-3">
          Nah, sekarang mari kita kenalan dengan seseorang di lingkungan kita.
        </p>
        
        <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
          Kita sebut saja dia <strong className="text-[#F45B1A] font-semibold">Pak RT atau Pak Lurah</strong>. Bayangkan di sebuah lingkungan ada seorang Pak RT yang sangat dikenal dan dipercaya oleh warganya. Beliau sudah lama tinggal di sana, mengenal banyak warga, mengetahui berbagai kegiatan di lingkungannya, dan sering menjadi tempat bertanya ketika seseorang membutuhkan informasi.
        </p>
      </div>

      {/* ── SECTION 01: PAK RT — GOOGLE SEARCH ───────────────── */}
      <section id="01-pak-rt-google-search" className="scroll-mt-28 space-y-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Compass className="w-4 h-4" />
          <span>BAGIAN 01</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          01. KENALAN DULU SAMA PAK RT — GOOGLE SEARCH!
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bayangkan lingkungan kita mempunyai ratusan bahkan ribuan rumah. Setiap rumah punya alamat, pemilik, dan kegiatan masing-masing.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sementara itu, Pak RT sudah dikenal banyak warga. Banyak orang datang kepadanya untuk bertanya karena beliau memiliki informasi dan catatan tentang lingkungan tersebut. Misalnya ada warga baru yang bertanya:
        </p>

        {/* Dialog Bubble Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              W
            </span>
            <div className="bg-[#1C130E] border border-white/10 p-3.5 rounded-2xl rounded-tl-sm text-sm text-[#F7F1EB] italic">
              "Pak RT, kalau saya mau cari tempat makan yang enak dan dekat di sekitar sini, di mana ya?"
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#24150F] border border-[#F45B1A]/30 p-3.5 rounded-2xl rounded-tr-sm text-sm text-[#F7F1EB]">
              "Oh, ada Warung Bu Aminah di jalan mawar, mereka sedia menu masakan segar dan ulasannya bagus!"
            </div>
            <span className="w-8 h-8 rounded-full bg-[#F45B1A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              RT
            </span>
          </div>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Pak RT tentu akan mencoba membantu berdasarkan informasi yang diketahuinya. Namun, Pak RT tidak mungkin mengingat semua rumah secara detail hanya dari namanya saja. Beliau perlu mengetahui:
        </p>

        <ul className="space-y-2.5 my-3 pl-2 font-outfit text-sm sm:text-base text-[#D5CBC3]">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Rumahnya berada di mana (lokasi/alamat).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Siapa pemiliknya dan apa jenis usahanya.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Apa kegiatan di dalamnya dan produk apa yang bisa ditemukan di sana.</span>
          </li>
        </ul>

        {/* ── VISUAL A: THE TRUSTED PAK RT ────────────────────── */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/12 bg-[#140E0B] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#F45B1A] to-[#FF6A2A] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#F45B1A]/30">
              <Compass className="w-10 h-10" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
                VISUAL EDUKASI A · THE TRUSTED GUIDE
              </span>
              <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
                Pak RT = Google Search
              </h3>
              <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
                Sosok yang dipercaya warga ketika membutuhkan petunjuk arah, rekomendasi toko, atau informasi penting di lingkungan internet.
              </p>
            </div>
          </div>
          <p className="mt-4 pt-4 border-t border-white/10 text-center sm:text-left text-xs text-[#A99A90] italic font-outfit">
            Caption: Pak RT adalah sosok yang dikenal warga dan menjadi tempat mereka mencari informasi.
          </p>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Nah, Google Search bekerja membantu pengguna menemukan informasi dari miliaran website di internet. Tetapi bagaimana Google bisa mengenal begitu banyak website? Google menggunakan sistem otomatis canggih yang bekerja melalui tiga pilar utama:
        </p>

        {/* 3 Pillars Grid (Googlebot, Index, Search) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <Bot className="w-4 h-4" />
            </div>
            <h4 className="font-geom font-bold text-base text-[#F7F1EB]">1. Googlebot (Crawling)</h4>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Petugas keliling otomatis yang menjelajahi internet untuk menemukan dan membaca halaman-halaman website baru maupun yang diperbarui.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="font-geom font-bold text-base text-[#F7F1EB]">2. Google Index (Indexing)</h4>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Buku catatan raksasa tempat informasi dan konten dari halaman website yang berhasil di-crawl disimpan agar siap dipanggil kembali.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="font-geom font-bold text-base text-[#F7F1EB]">3. Google Search (Serving)</h4>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Sistem pencocokan otomatis yang memilih dan menampilkan halaman paling relevan saat ada warga (pengguna) yang mengetik pencarian.
            </p>
          </div>
        </div>

        {/* ── VISUAL B: GOOGLEBOT AND INDEX ───────────────────── */}
        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <Bot className="w-5 h-5 text-[#F45B1A]" />
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] uppercase tracking-wider">
              Visual Edukasi B · Petugas Keliling &amp; Buku Catatan
            </h4>
          </div>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Googlebot seperti petugas keliling yang mendatangi rumah-rumah baru, lalu mencatat nama jalan, pintu masuk, dan daftar perabotannya ke dalam buku catatan besar (Google Index). Tanpa dicatat oleh petugas ini, Pak RT tentu tidak bisa merekomendasikan rumahmu kepada warga yang bertanya.
          </p>
          <p className="mt-3 text-xs text-[#A99A90] italic font-outfit">
            Caption: Googlebot menemukan dan meng-crawl halaman; Google Index menyimpan informasi tentang halaman yang berhasil diindeks.
          </p>
        </div>

        {/* Technical Accuracy Notice Box */}
        <div className="p-5 rounded-2xl bg-[#17100D] border border-amber-500/30 text-xs sm:text-sm font-outfit text-[#D5CBC3] leading-relaxed">
          <strong className="text-amber-400 block mb-1 font-geom">Catatan Akurasi Teknis:</strong>
          Pak RT adalah analogi sederhana untuk memudahkan pemahaman. Secara teknis, Google Search bukan manusia dan tidak bekerja berdasarkan kepercayaan emosional personal, melainkan kumpulan algoritma otomatis berskala global yang memproses miliaran sinyal web secara independen.
        </div>
      </section>

      {/* ── SECTION 02: KOK PAK RT BISA TAHU? ─────────────────── */}
      <section id="02-cara-pak-rt-tahu" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <MapPin className="w-4 h-4" />
          <span>BAGIAN 02</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          02. KOK PAK RT BISA TAHU RUMAH KITA?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang bayangkan kamu baru saja selesai membangun rumah. Bangunannya megah, perabotannya mewah, alamatnya sudah terpasang. Tetapi kamu belum pernah memperkenalkan rumah tersebut kepada siapa pun di lingkungan itu.
        </p>
        <p className="font-geom font-semibold text-lg text-[#F7F1EB] italic">
          Bagaimana caranya Pak RT bisa tahu rumahmu itu ada?
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Dalam dunia website, Google perlu menemukan halaman kita terlebih dahulu. Ada 3 cara utama agar website kita bisa ditemukan dan dicatat:
        </p>

        <div className="space-y-4 pt-2 font-outfit">
          <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-[#F45B1A] text-xs flex items-center justify-center font-bold">1</span>
              <span>Melalui Tautan atau Backlink</span>
            </h3>
            <p className="text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Misalnya ada tetangga lama yang memasang plang penunjuk arah ke rumahmu, atau membagikan alamat websitemu di website mereka. Saat Googlebot sedang menelusuri halaman tetangga tersebut, ia akan mengikuti tautan (link) dan menemukan alamat website barumu.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-[#F45B1A] text-xs flex items-center justify-center font-bold">2</span>
              <span>Melalui Sitemap XML</span>
            </h3>
            <p className="text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Bayangkan kamu memberikan denah dan daftar seluruh ruangan di rumahmu langsung ke meja Pak RT. Di dunia web, <strong>sitemap</strong> adalah file khusus (seperti <code className="text-[#F45B1A]">sitemap.xml</code>) yang berisi peta seluruh tautan penting di website agar mesin pencari tidak melewatkan halaman apapun.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140E0B] border border-[#F45B1A]/40 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F45B1A] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#F45B1A]/20 text-[#F45B1A] text-xs flex items-center justify-center font-bold">3</span>
              <span>Melalui Google Search Console (GSC)</span>
            </h3>
            <p className="text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Ini ibarat fasilitas resmi dari kantor pusat Google untuk kamu melaporkan: <em>"Halo Google, ini rumah baru saya, tolong kirim petugas Googlebot untuk menengok ya."</em> Lewat GSC, pemilik website bisa memantau apakah halaman berhasil diindeks atau sedang ada masalah teknis.
            </p>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-5 rounded-xl bg-[#17100D] border border-rose-500/30 text-xs sm:text-sm font-outfit text-[#D5CBC3] leading-relaxed">
          <strong className="text-rose-400 block mb-1 font-geom">⚠️ Catatan Penting:</strong>
          Mengirim sitemap atau meminta pengindeksan di Google Search Console <strong>tidak menjamin</strong> websitemu langsung masuk indeks seketika atau langsung nangkring di halaman pertama. Google tetap menjalankan proses kurasi dan pemeriksaan kualitas secara independen.
        </div>
      </section>

      {/* ── SECTION 03: APA ITU SEO? ─────────────────────────── */}
      <section id="03-apa-itu-seo" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Flame className="w-4 h-4" />
          <span>BAGIAN 03</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          03. TERUS, APA ITU SEO?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang rumahmu sudah ada, dan Pak RT sudah tahu keberadaannya. Tetapi ketika ada warga bertanya:
        </p>

        <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 text-center font-geom text-[#F7F1EB] italic">
          "Pak RT, kalau saya mau cari tempat jualan makanan yang enak dan bersih di sini, di mana ya?"
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Pak RT tentu nggak akan sembarangan menjawab. Beliau akan mempertimbangkan berbagai hal:
        </p>

        <ul className="space-y-2 my-2 pl-2 font-outfit text-sm sm:text-base text-[#D5CBC3]">
          <li>• Rumah mana yang memang benar-benar menjual makanan (bukan bengkel atau toko bangunan).</li>
          <li>• Seberapa lengkap menu dan kejelasan harganya.</li>
          <li>• Seberapa dekat lokasinya dengan warga yang sedang bertanya.</li>
          <li>• Seberapa bagus ulasan dari warga lain yang pernah makan di sana.</li>
        </ul>

        {/* ── KEY DEFINITION CALLOUT ───────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2A160E] to-[#17100D] border-2 border-[#F45B1A] shadow-2xl space-y-3">
          <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block">
            DEFINISI RESMI PAHAM DIGITAL
          </span>
          <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug">
            SEO (Search Engine Optimization)
          </h3>
          <p className="font-outfit text-base sm:text-lg text-[#F7F1EB] leading-relaxed">
            Proses mengoptimalkan website agar mesin pencari lebih mudah memahami kontennya dan pengguna lebih mudah menemukan website tersebut melalui hasil pencarian organik.
          </p>
          <div className="pt-3 border-t border-white/10 text-sm font-geom font-bold text-[#FFA270]">
            Rumus Sederhana: SEO = Membantu Pak RT mengenali rumah kita dan memahami alasan rumah tersebut relevan untuk direkomendasikan kepada warga.
          </div>
        </div>

        {/* ── VISUAL C: HOW SEO WORKS ─────────────────────────── */}
        <div className="my-8 rounded-2xl border border-white/10 bg-[#140E0B] p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block mb-1">
              VISUAL EDUKASI C · ALUR KERJA SEO
            </span>
            <h4 className="font-geom font-bold text-lg text-[#F7F1EB]">
              Bagaimana Informasi Bergerak dari Website ke Pengguna
            </h4>
          </div>

          {/* Sequential Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center font-outfit">
            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/10">
              <span className="font-geom font-bold text-xs text-[#F45B1A] block">01. Website</span>
              <span className="text-xs text-[#F7F1EB] font-medium">Rumah Bisnis</span>
            </div>
            <div className="text-[#F45B1A] font-bold rotate-90 sm:rotate-0">→</div>
            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/10">
              <span className="font-geom font-bold text-xs text-[#F45B1A] block">02. Googlebot</span>
              <span className="text-xs text-[#F7F1EB] font-medium">Petugas Crawl</span>
            </div>
            <div className="text-[#F45B1A] font-bold rotate-90 sm:rotate-0">→</div>
            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/10">
              <span className="font-geom font-bold text-xs text-[#F45B1A] block">03. Google Index</span>
              <span className="text-xs text-[#F7F1EB] font-medium">Buku Catatan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center font-outfit mt-3 max-w-md mx-auto">
            <div className="p-4 rounded-xl bg-[#1C130E] border border-[#F45B1A]/40">
              <span className="font-geom font-bold text-xs text-[#F45B1A] block">04. Google Search</span>
              <span className="text-xs text-[#F7F1EB] font-medium">Pak RT Menyeleksi</span>
            </div>
            <div className="text-[#F45B1A] font-bold rotate-90 sm:rotate-0">→</div>
            <div className="p-4 rounded-xl bg-[#24150F] border border-[#F45B1A]">
              <span className="font-geom font-bold text-xs text-[#FF7A3D] block">05. Warga (User)</span>
              <span className="text-xs text-[#F7F1EB] font-medium">Dapat Rekomendasi</span>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-[#A99A90] font-outfit italic">
            Caption: SEO membantu website lebih mudah ditemukan dan dipahami mesin pencari.
            <br />
            (Catatan: Ini adalah bagan penyederhanaan edukatif untuk memahami konsep alur kerja mesin pencari, bukan diagram teknis lengkap infrastruktur Google).
          </p>
        </div>
      </section>

      {/* ── SECTION 04: BAGAIMANA PAK RT MEMILIH? ─────────────── */}
      <section id="04-cara-memilih-rekomendasi" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Users className="w-4 h-4" />
          <span>BAGIAN 04</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          04. BAGAIMANA PAK RT MEMILIH RUMAH YANG AKAN DIREKOMENDASIKAN?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang bayangkan kamu bertanya: <em>"Pak, saya mau cari tempat yang jualan nasi goreng paling dekat dari sini. Di mana ya?"</em>
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Google Search menggunakan ratusan sinyal otomatis untuk menentukan hasil pencarian terbaik. Namun khusus untuk hasil pencarian bisnis lokal di Google Maps dan Local Search, Google secara resmi merumuskan 3 faktor utama:
        </p>

        {/* ── VISUAL D: THREE LOCAL SEARCH FACTORS ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
          {/* Factor A: Relevance */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <Search className="w-5 h-5" />
            </div>
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              FAKTOR A
            </span>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              RELEVANCE — Kesesuaian
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Pak RT harus tahu rumah mana yang memang menjual barang yang dicari. Kalau kamu cari toko sepatu tetapi direkomendasikan toko sayur, tentu salah alamat. Website harus menjelaskan produk/layanan secara gamblang dan akurat.
            </p>
          </div>

          {/* Factor B: Distance */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              FAKTOR B
            </span>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              DISTANCE — Jarak
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Toko A berjarak 500 meter, sedangkan Toko B berjarak 15 kilometer. Jika warga mencari yang terdekat, jarak fisik antara lokasi pencari dan bisnis merupakan pertimbangan nyata yang dihitung otomatis oleh Google.
            </p>
          </div>

          {/* Factor C: Prominence */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/20 text-[#F45B1A] flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              FAKTOR C
            </span>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              PROMINENCE — Keterkenalan
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Toko yang sudah lama berdiri, banyak dibicarakan warga, memiliki liputan berita, dan mendapatkan ulasan (reviews) jujur dari pelanggan akan dipandang lebih tepercaya oleh sistem Google dibandingkan toko yang serba misterius.
            </p>
          </div>
        </div>

        {/* Technical Accuracy Note */}
        <div className="p-4 rounded-xl bg-[#17100D] border border-white/10 text-xs text-[#A99A90] font-outfit leading-relaxed">
          <strong className="text-[#F7F1EB] font-geom">Catatan Resmi:</strong> Tiga faktor di atas (Relevance, Distance, Prominence) merupakan dokumentasi resmi Google untuk pemeringkatan hasil pencarian lokal. Untuk pemeringkatan web global non-lokal, Google menggunakan ratusan sinyal lainnya yang lebih kompleks.
        </div>
      </section>

      {/* ── SECTION 05: RUMAH BAGUS ISINYA BERANTAKAN? ────────── */}
      <section id="05-pengalaman-pengunjung" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Layout className="w-4 h-4" />
          <span>BAGIAN 05</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          05. KALAU RUMAH KITA BAGUS, TAPI ISINYA BERANTAKAN?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Nah, ini kesalahan yang paling sering terjadi! Bayangkan seseorang datang mengunjungi rumahmu. Dari luar catnya mewah, tapi begitu pintu dibuka:
        </p>

        <ul className="space-y-2 pl-2 font-outfit text-sm sm:text-base text-[#D5CBC3]">
          <li>• Perabotan berserakan di lorong sampai tersandung.</li>
          <li>• Tidak ada petunjuk ruangan mana toilet atau ruang tamu.</li>
          <li>• Lampunya redup dan sering mati mendadak.</li>
          <li>• Pengunjung bingung harus bertanya ke siapa.</li>
        </ul>

        <p className="font-geom font-semibold text-lg text-[#F7F1EB]">
          Apakah tamu tersebut betah berlama-lama? Tentu saja langsung kabur!
        </p>

        {/* ── VISUAL E: THE WEBSITE EXPERIENCE ────────────────── */}
        <div className="my-8 rounded-2xl border border-white/10 bg-[#140E0B] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Layout className="w-5 h-5 text-[#F45B1A]" />
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
              Visual Edukasi E · Anatomi Rumah Digital yang Nyaman
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-sm text-[#F45B1A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                1. Plang Ruangan Jelas (Heading H1, H2, H3)
              </span>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Setiap halaman punya judul yang menjelaskan isi topik secara transparan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-sm text-[#F45B1A] flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                2. Isi Perabot Bermanfaat (Konten &amp; Jawaban)
              </span>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Menyajikan informasi yang benar-benar dicari dan menyelesaikan masalah pengunjung.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-sm text-[#F45B1A] flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                3. Pintu Masuk Luas (Responsif di HP / Mobile)
              </span>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Lebih dari 80% pengunjung membuka website via smartphone. Tata letak harus nyaman di jari.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C130E] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-sm text-[#F45B1A] flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                4. Listrik &amp; Pintu Cepat (Performa Kilat)
              </span>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Loading di bawah 2 detik tanpa hambatan teknis yang membuat orang jengkel menunggu.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-[#A99A90] font-outfit italic pt-2">
            Caption: Website yang bagus bukan cuma menarik dari luar. Informasi di dalamnya juga harus mudah ditemukan.
          </p>
        </div>
      </section>

      {/* ── SECTION 06: CARA MEMBUAT PAK RT MENGENAL KITA ─────── */}
      <section id="06-langkah-optimasi" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Layers className="w-4 h-4" />
          <span>BAGIAN 06</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          06. LALU, BAGAIMANA CARA KITA MEMBUAT PAK RT SEMAKIN MENGENAL BISNIS KITA?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang kamu sudah tahu bahwa Google perlu mengenali, memahami, dan memverifikasi website. Terus, apa langkah nyata yang bisa kita lakukan mulai hari ini? Yuk, ikuti 5 langkah praktis ini:
        </p>

        <div className="space-y-4 font-outfit pt-2">
          {/* Step 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center justify-between">
              <span>1. Daftarkan Website di Google Search Console</span>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F45B1A] flex items-center gap-1 hover:underline"
              >
                <span>Buka GSC</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </h3>
            <p className="text-sm text-[#A99A90] leading-relaxed">
              Ini adalah laporan kepemilikan resmi rumahmu kepada Google. Kamu bisa memantau kata kunci apa yang dicari orang saat menemukan website-mu, serta memantau jika ada halaman yang gagal diindeks.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              2. Kirim Peta Halaman (Sitemap XML)
            </h3>
            <p className="text-sm text-[#A99A90] leading-relaxed">
              Pastikan file sitemap (seperti <code className="text-[#F45B1A]">sitemap.xml</code>) sudah aktif dan di-submit ke Google Search Console agar seluruh link penting di-crawl secara berkala.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-[#F45B1A]/40 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F45B1A]">
              3. Buat Konten Edukasi yang Menjawab Pertanyaan Warga
            </h3>
            <p className="text-sm text-[#A99A90] leading-relaxed">
              Jangan cuma jadikan website sebagai brosur kaku. Tulis artikel yang menjawab pertanyaan pelanggan, misalnya:
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded bg-white/5 text-[#D5CBC3]">"Apa itu domain dan hosting?"</span>
              <span className="px-3 py-1 rounded bg-white/5 text-[#D5CBC3]">"Bagaimana cara membuat website bisnis?"</span>
              <span className="px-3 py-1 rounded bg-white/5 text-[#D5CBC3]">"Manfaat AI Customer Service untuk UMKM"</span>
            </div>
            <p className="text-xs text-[#A99A90] pt-1">
              Dengan begitu, website menjadi sumber rujukan tepercaya, bukan sekadar etalase jualan.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              4. Perkenalkan Bisnis Melalui Platform Lain
            </h3>
            <p className="text-sm text-[#A99A90] leading-relaxed">
              Cantumkan link website di bio Instagram, TikTok, LinkedIn, YouTube, serta direktori bisnis resmi. Tautan yang sehat dari kanal lain membantu Googlebot menemukan jalan menuju rumahmu.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center justify-between">
              <span>5. Lengkapi Google Business Profile (GBP)</span>
              <a
                href="https://www.google.com/business/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F45B1A] flex items-center gap-1 hover:underline"
              >
                <span>Buka GBP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </h3>
            <p className="text-sm text-[#A99A90] leading-relaxed">
              Jika kamu punya toko fisik atau kantor di daerah (seperti Meulaboh, Aceh Barat), klaim profil bisnismu di Google Maps. Masukkan foto asli, jam operasional, nomor kontak WhatsApp, dan ajak pelanggan puas memberikan ulasan nyata secara berkala.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: APAKAH SEO MENJAMIN HALAMAN 1? ────────── */}
      <section id="07-mitos-halaman-pertama" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <HelpCircle className="w-4 h-4" />
          <span>BAGIAN 07</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          07. APAKAH KALAU SUDAH SEO, WEBSITE PASTI ADA DI HALAMAN PERTAMA?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Nah, ini pertanyaan yang paling sering ditanyakan oleh pengusaha pemula. Jawabannya tegas: <strong className="text-rose-400">belum tentu dan tidak ada jaminan instan.</strong>
        </p>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          SEO bukan tombol ajaib yang ketika ditekan langsung menerbangkan website ke peringkat nomor satu Google dalam semalam.
        </p>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bayangkan ada 20 rumah di lingkunganmu yang sama-sama menjual ayam goreng. Semuanya mengaku paling enak, semuanya ingin direkomendasikan Pak RT. Tentu Pak RT akan menimbang siapa yang paling konsisten kualitasnya, siapa yang paling higienis, dan siapa yang benar-benar disukai warga.
        </p>

        {/* Mythbuster Callout */}
        <div className="p-6 rounded-2xl bg-[#17100D] border border-amber-500/30 space-y-2">
          <h4 className="font-geom font-bold text-base text-amber-400">
            💡 Hindari Janji Manis "Pasti Halaman 1 Dalam 3 Hari"
          </h4>
          <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
            Google secara resmi melarang dan tidak pernah memberikan perlakuan khusus kepada agensi manapun. SEO membutuhkan proses berkelanjutan: riset kata kunci, penulisan konten berbobot, optimasi struktur teknis, dan evaluasi berkala.
          </p>
        </div>
      </section>

      {/* ── SECTION 08: KENAPA WEBSITE BARU BELUM RAMAI? ──────── */}
      <section id="08-website-baru-butuh-waktu" className="scroll-mt-28 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Compass className="w-4 h-4" />
          <span>BAGIAN 08</span>
        </div>

        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          08. KENAPA WEBSITE BARU BIASANYA BELUM LANGSUNG RAMAI?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bayangkan kamu baru pindah ke sebuah komplek perumahan kemarin sore. Tetangga belum tahu namamu, belum tahu keahlianmu, dan belum tahu apa yang kamu tawarkan. Wajar banget kalau rumahmu belum ramai diserbu tamu!
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Website baru pun melewati fase yang sama. Googlebot butuh waktu untuk menemukan domainmu, membaca halamannya, menganalisis topiknya, dan melihat bagaimana respons pembaca awal sebelum memberikan peringkat yang tinggi.
        </p>

        {/* ── KEY TAKEAWAY CALLOUT ─────────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#21140F] via-[#17100D] to-[#140E0B] border border-[#F45B1A]/40 shadow-xl text-center space-y-2">
          <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block">
            KUNCI KEBERHASILAN DIGITAL
          </span>
          <p className="font-geom font-extrabold text-xl sm:text-2xl text-[#F7F1EB]">
            "Punya website adalah langkah awal. Membuatnya ditemukan adalah proses berikutnya."
          </p>
        </div>
      </section>

      {/* ── KESIMPULAN ──────────────────────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 pt-8 border-t border-white/10 space-y-6">
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#17100D] to-[#120C09] border border-[#F45B1A]/50 shadow-2xl space-y-5">
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
            KESIMPULAN: JADIKAN RUMAH DIGITALMU MUDAH DITEMUKAN
          </h2>

          <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
            Sekarang kita rangkai seluruh gambaran besar dari Seri Digital Knowledge:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-geom font-semibold">
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Hosting: Bangunan tempat file disimpan.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Domain: Alamat unik rumah digital.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Google Search: Pak RT penunjuk jalan.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Googlebot: Petugas keliling pencatat data.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Google Index: Buku catatan raksasa.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>SEO: Merapikan &amp; mengenalkan rumah kita.</span>
            </div>
          </div>

          <p className="font-outfit text-base text-[#A99A90] leading-relaxed pt-2">
            Jadi, jangan cuma sibuk membangun rumah yang bagus. Pastikan juga orang-orang tahu rumah tersebut ada, memahami apa yang tersedia di dalamnya, dan punya alasan kuat untuk berkunjung!
          </p>

          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] pt-2">
            Paham teknologinya, pahami manfaatnya, kuasai masa depan.
          </p>
        </div>
      </section>

      {/* ── PREVIOUS ARTICLE CONNECTION (SERIES BRIDGE) ─────── */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17100D] via-[#140E0B] to-[#0B0807] border border-white/12 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <span className="text-xs font-geom uppercase tracking-widest text-[#A99A90] font-bold block">
            SUDAH MEMBACA ARTIKEL SEBELUMNYA? · ARTIKEL 01
          </span>
          <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
            Domain vs Hosting: Sebenarnya Apa Bedanya?
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] max-w-xl">
            Artikel 01: Membangun rumah digitalmu. Artikel 02: Membantu orang lain menemukan rumah digitalmu.
          </p>
        </div>

        <Link
          href="/blog/domain-vs-hosting/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-[#F7F1EB] font-outfit font-bold text-sm transition-all border border-white/10 shrink-0 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Baca Artikel 01</span>
        </Link>
      </div>

      {/* ── AUTHOR INFORMATION BOX ─────────────────────────── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#140E0B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#F45B1A] flex items-center justify-center text-white font-geom font-bold text-xl shrink-0 shadow-lg shadow-[#F45B1A]/20">
          KY
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              Kholid Yagha
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-[#F45B1A] font-medium font-outfit">
              Founder Paham Digital Agency
            </span>
          </div>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
            Membantu pemilik bisnis dan UMKM di Aceh Barat serta seluruh Indonesia memahami teknologi secara membumi dan mentransformasi operasional bisnis melalui website modern, AI Customer Service, automasi, dan optimasi SEO terukur.
          </p>
        </div>
      </div>

      {/* ── SOURCE REFERENCES SECTION ───────────────────────── */}
      <section aria-label="Sumber dan Rujukan Artikel" className="p-6 rounded-2xl bg-[#0B0807] border border-white/10 space-y-3">
        <h4 className="font-geom font-bold text-xs uppercase tracking-widest text-[#A99A90]">
          Sumber dan Rujukan Resmi:
        </h4>
        <ul className="space-y-1.5 text-xs font-outfit text-[#A99A90]">
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/how-search-works"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Search Central — How Google Search Works</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Search Central — SEO Starter Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Search Central — Build and Submit a Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Search Console Official Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/business/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Business Profile Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/business/answer/7091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>Google Business Profile Support — How Google Determines Local Ranking</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>
      </section>

      {/* ── RELATED ARTICLES: SEQUENCE 01 & 03 ──────────────── */}
      <section aria-label="Artikel Terkait" className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            ARTIKEL TERKAIT LAINNYA
          </span>
          <Link
            href="/blog/"
            className="text-xs font-outfit text-[#A99A90] hover:text-[#F7F1EB] transition-colors"
          >
            Lihat Semua Koleksi →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Related Card 1 */}
          <Link
            href="/blog/domain-vs-hosting/"
            className="p-4 sm:p-5 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block mb-1">
              ARTIKEL 01 · WEBSITE &amp; TECHNOLOGY
            </span>
            <h4 className="font-geom font-bold text-sm sm:text-base text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2 mb-2">
              Domain vs Hosting: Sebenarnya Apa Bedanya?
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Kenali perbedaan domain dan hosting menggunakan analogi rumah yang sederhana. Pelajari juga arti ekstensi .com, .id, dan .online.
            </p>
          </Link>

          {/* Related Card 2 */}
          <Link
            href="/blog/kenapa-bisnis-perlu-website/"
            className="p-4 sm:p-5 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block mb-1">
              ARTIKEL 03 · WEBSITE &amp; TECHNOLOGY
            </span>
            <h4 className="font-geom font-bold text-sm sm:text-base text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2 mb-2">
              Bisnismu Sudah Ada di Media Sosial, Tapi Apa Sudah Punya Rumah Digital Sendiri?
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Jangan hanya mengandalkan konten yang sedang viral. Kenali mengapa bisnis kecil maupun besar membutuhkan website di era Google dan AI.
            </p>
          </Link>
        </div>
      </section>

      {/* ── SHARE BUTTON ────────────────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa artikel ini bermanfaat untuk orang lain?
        </span>
        <a
          href={waShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold font-outfit transition-all shadow-md shadow-[#16A34A]/25"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Bagikan ke WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
