import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Share2,
  ArrowRight,
  Monitor,
  Smartphone,
  Search,
  Store,
  Network,
  Users,
  Bot,
  Building2,
  TrendingUp,
  FileText,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleKenapaBisnisPerluWebsite({ waShareUrl }: Props) {
  return (
    <div className="space-y-12">
      {/* ── LEAD PARAGRAPH: PENDAHULUAN ──────────────────────── */}
      <section id="pendahuluan" className="scroll-mt-28 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Building2 className="w-4 h-4" />
            <span>PENDAHULUAN</span>
          </div>
          <h2 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug">
            Bayangkan Kamu Tinggal di Kos-Kosan Komplek A
          </h2>
          <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
            Coba bayangkan kamu punya usaha kecil di sebuah lingkungan kos-kosan bernama Komplek A.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Setiap hari kamu berinteraksi dengan anak-anak kos di sana. Mereka mulai mengenal namamu, tahu produk yang kamu jual, bahkan ada yang menjadi pelanggan tetap.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Awalnya, semuanya terasa cukup.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Namun, bagaimana dengan orang yang tinggal di Komplek B, Komplek C, atau bahkan orang yang baru datang ke kota tersebut?
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed font-semibold text-[#F7F1EB]">
            Apakah mereka mengenal bisnismu?
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Mungkin belum.
          </p>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed pt-2">
          <p>
            Banyak pemilik usaha bertanya: <strong className="text-[#F7F1EB]">kenapa bisnis perlu website</strong> jika sudah aktif di media sosial? <strong className="text-[#F45B1A]">Apakah bisnis cukup dengan Instagram</strong> dan TikTok saja, atau <strong className="text-[#F7F1EB]">apakah UMKM perlu website</strong> resmi sendiri?
          </p>
          <p>
            Sekarang bayangkan kamu mempromosikan usahamu melalui media sosial. Kamu mengunggah foto produk, membuat video reel, membagikan promosi, dan mulai mendapatkan perhatian audiens.
          </p>
          <p>
            Hari ini kontenmu viral. Besok banyak yang mengunjungi profilmu. Namun beberapa waktu kemudian, tren berubah dan algoritma platform beralih ke konten kreator lain.
          </p>
          <p>
            Memahami dinamika <strong className="text-[#F7F1EB]">website vs media sosial</strong> serta berbagai <strong className="text-[#F45B1A]">manfaat website untuk bisnis</strong> dan pentingnya website untuk usaha kecil akan membantu bisnismu membangun aset digital jangka panjang yang kokoh.
          </p>
        </div>

        {/* Highlight Card: Inti Pemahaman */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#21140F] to-[#17100D] border border-[#F45B1A]/35 shadow-md space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>SATU PERTANYAAN MENDASAR</span>
          </div>
          <p className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] leading-snug">
            Media sosial memang penting untuk membuat bisnis dikenal. Namun, kenapa bisnis perlu website mandiri yang bisa kamu kelola seutuhnya?
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Mengetahui <strong className="text-[#F45B1A]">alasan bisnis harus punya website</strong> dan manfaat website untuk UMKM di era pencarian Google dan AI modern akan membuka peluang pasar baru yang tidak bergantung pada nasib algoritma sosial semata.
          </p>
        </div>
      </section>

      {/* ── SECTION 01: MEDIA SOSIAL SEPERTI NGEKOS ───────────── */}
      <section id="01-media-sosial-ngekos" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Smartphone className="w-4 h-4" />
          <span>BAGIAN 01</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          01. Media Sosial Itu Seperti Ngekos di Sebuah Kompleks
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Mari kembali ke analogi Komplek A tadi.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ketika kamu ngekos, kamu bisa tinggal dengan nyaman, berinteraksi dengan penghuni lain, dan mulai dikenal oleh lingkungan sekitar.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#F7F1EB] font-medium leading-relaxed">
          Namun, ada aturan yang harus kamu ikuti.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Pemilik kos bisa mengubah peraturan, fasilitas bisa berubah, dan lingkungan tempat tinggalmu tidak sepenuhnya berada dalam kendalimu.
        </p>

        {/* Analogi Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="font-geom font-bold text-base text-[#F7F1EB] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
            <span>Bagaimana dengan Media Sosial?</span>
          </div>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Media sosial memiliki gambaran yang mirip. Instagram, TikTok, dan Facebook memberikan tempat bagi bisnis untuk memperkenalkan produk dan berinteraksi dengan pelanggan.
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
            Kamu bisa membuat konten, membagikan informasi, dan menjangkau pengguna baru. Tetapi, setiap platform memiliki aturan, algoritma, format konten, dan sistem rekomendasi sendiri.
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
            Hari ini video bisnismu mungkin mendapatkan banyak penonton. Minggu berikutnya, perhatian pengguna bisa beralih ke topik lain.
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p>
            Karena itu, jangan sampai seluruh informasi dan identitas bisnismu hanya bergantung pada satu akun media sosial.
          </p>
          <p>
            Kamu boleh ngekos di Komplek A, tetapi jangan sampai bisnismu hanya dikenal oleh penghuni kompleks tersebut.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Media sosial membantu memperkenalkan bisnis, tetapi bisnis juga membutuhkan tempat untuk menyampaikan informasi secara lebih lengkap.
          </p>
        </div>
      </section>

      {/* ── SECTION 02: WEBSITE MEMILIKI TOKO SENDIRI ─────────── */}
      <section id="02-website-toko-sendiri" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Store className="w-4 h-4" />
          <span>BAGIAN 02</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          02. Kenapa Bisnis Perlu Website? Seperti Memiliki Toko Sendiri
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang bayangkan kamu tidak hanya tinggal di kos-kosan.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Salah satu <strong className="text-[#F7F1EB]">manfaat website profesional</strong> adalah bisnismu memiliki toko sendiri dengan nama, alamat resmi, papan informasi, dan ruang etalase untuk memperlihatkan semua produk yang kamu jual.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Pelanggan bisa datang untuk melihat katalog, mengetahui harga, membaca informasi, dan mengetahui cara menghubungimu.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
          Dalam dunia digital, website memiliki fungsi yang mirip. Melalui website, kamu bisa menyediakan:
        </p>

        {/* Checklist 8 Elemen Website */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10">
          <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] mb-4">
            Apa Saja yang Bisa Ditampilkan di Website Resmi?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              "Profil dan identitas bisnis.",
              "Informasi produk dan layanan.",
              "Katalog beserta foto dan deskripsi.",
              "Informasi harga atau penawaran.",
              "Lokasi dan area pelayanan.",
              "Kontak resmi bisnis.",
              "Tombol WhatsApp untuk pemesanan.",
              "Artikel dan informasi yang bermanfaat.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#D5CBC3] font-outfit">
                <span className="w-5 h-5 rounded-full bg-[#F45B1A]/15 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A]">
                  <Check className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p>
            Semua informasi tersebut bisa disusun sesuai kebutuhan bisnismu.
          </p>
          <p>
            Kamu tidak harus menunggu sebuah postingan menjadi viral agar pelanggan bisa mengetahui informasi dasar tentang usahamu.
          </p>
          <p>
            Namun, perlu dipahami bahwa memiliki website bukan berarti sepenuhnya bebas dari pihak ketiga. Website tetap membutuhkan domain, hosting, dan pengelolaan.
          </p>
        </div>

        {/* Contextual Link to Article 01 */}
        <div className="p-5 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              PELAJARI LEBIH LANJUT
            </span>
            <p className="text-sm font-outfit text-[#F7F1EB] font-medium">
              Masih bingung bagaimana domain dan hosting bekerja untuk rumah digitalmu?
            </p>
          </div>
          <Link
            href="/blog/domain-vs-hosting/"
            className="inline-flex items-center gap-1.5 text-xs font-geom font-bold text-[#F45B1A] hover:text-[#FF6A2A] transition-colors shrink-0 group"
          >
            <span>Baca Artikel 01: Apa Beda Hosting dan Domain?</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p>
            Perbedaannya, kamu memiliki kendali yang lebih besar atas struktur, tampilan, konten, dan cara informasi bisnis disampaikan.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Media sosial adalah tempat untuk menarik perhatian. Website adalah tempat resmi untuk memperkenalkan bisnis secara lebih lengkap.
          </p>
        </div>
      </section>

      {/* ── SECTION 03: DATA AKTIVITAS DIGITAL INDONESIA 2026 ── */}
      <section id="03-aktivitas-digital-2026" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <TrendingUp className="w-4 h-4" />
          <span>BAGIAN 03</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          03. Seberapa Besar Aktivitas Digital Masyarakat Indonesia pada 2026?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang mari kita lihat datanya.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Menurut laporan <strong className="text-[#F7F1EB]">DataReportal Digital 2027: Indonesia</strong>, yang diterbitkan pada 4 November 2026 dan menggunakan data Oktober 2026, Indonesia mencatat:
        </p>

        {/* 2 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-2">
            <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] block">
              PENGGUNA INTERNET
            </span>
            <div className="font-geom font-extrabold text-3xl sm:text-4xl text-[#F45B1A]">
              231 Juta
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
              Tingkat penetrasi mencapai <strong>80,2%</strong> dari seluruh populasi Indonesia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-2">
            <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] block">
              IDENTITAS PENGGUNA SOSIAL MEDIA
            </span>
            <div className="font-geom font-extrabold text-3xl sm:text-4xl text-[#F7F1EB]">
              240 Juta
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
              Setara dengan <strong>83,2%</strong> dari populasi nasional.
            </p>
          </div>
        </div>

        {/* Caveats Note */}
        <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 text-xs sm:text-sm text-[#A99A90] space-y-2 font-outfit">
          <p>
            <strong className="text-[#F7F1EB]">Catatan penting metodologi:</strong> Angka identitas media sosial bukan berarti terdapat 240 juta individu unik. Satu orang dapat memiliki lebih dari satu akun atau identitas pada platform yang berbeda.
          </p>
          <p>
            DataReportal juga menjelaskan bahwa perubahan sumber dan metodologi dapat memengaruhi perbandingan angka dengan laporan tahun sebelumnya.
          </p>
          <div className="pt-2">
            <a
              href="https://datareportal.com/reports/digital-2027-indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors"
            >
              <span>Sumber: DataReportal — Digital 2027: Indonesia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p className="text-[#F7F1EB] font-bold">
            Apa artinya bagi pemilik bisnis?
          </p>
          <p>
            Internet sudah menjadi bagian penting dalam kehidupan masyarakat. Pelanggan bisa mencari produk, membandingkan layanan, membaca ulasan, dan mengenal sebuah bisnis melalui berbagai saluran digital.
          </p>
          <p>
            Bayangkan jika bisnismu belum memiliki informasi resmi yang mudah ditemukan.
          </p>
          <p>
            Ketika calon pelanggan ingin mengetahui lebih jauh, mereka mungkin hanya menemukan beberapa unggahan media sosial tanpa informasi lengkap.
          </p>
          <p>
            Padahal, pelanggan bisa saja ingin mengetahui hal sederhana seperti daftar produk, alamat, harga, layanan, atau cara pemesanan.
          </p>
          <p>
            Inilah salah satu alasan mengapa bisnis perlu membangun kehadiran digital yang lebih terstruktur.
          </p>
        </div>
      </section>

      {/* ── SECTION 04: GOOGLE DAN AI SEARCH (YEXT & TINUITI) ── */}
      <section id="04-google-dan-ai" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Bot className="w-4 h-4" />
          <span>BAGIAN 04</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          04. Sekarang Orang Tidak Hanya Mencari di Google, tetapi Juga Bertanya kepada AI
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ini salah satu perubahan penting dalam cara orang mencari informasi.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Dahulu, ketika seseorang ingin mencari rekomendasi tempat makan, ia mungkin membuka Google, mengetik kata kunci, lalu mengunjungi beberapa website.
        </p>

        {/* Contextual Link to Article 02 */}
        <div className="p-5 rounded-2xl bg-[#0B0807] border border-[#F45B1A]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              PELAJARI LEBIH LANJUT
            </span>
            <p className="text-sm font-outfit text-[#F7F1EB] font-medium">
              Bagaimana Google Search dan Googlebot mendata bisnismu seperti analogi Pak RT?
            </p>
          </div>
          <Link
            href="/blog/apa-itu-seo-website-sepi-pengunjung/"
            className="inline-flex items-center gap-1.5 text-xs font-geom font-bold text-[#F45B1A] hover:text-[#FF6A2A] transition-colors shrink-0 group"
          >
            <span>Baca Artikel 02: Kenalan dengan SEO</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang, orang juga bisa bertanya langsung kepada AI seperti ChatGPT, Gemini, dan Perplexity.
        </p>

        {/* Example Prompt Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#17100D] border border-white/10 font-outfit text-sm sm:text-base text-[#F7F1EB]">
          <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] block mb-1">
            Contoh pertanyaan pengguna ke asisten AI:
          </span>
          <span className="italic text-[#F45B1A]">
            &ldquo;Rekomendasikan tempat makan keluarga yang bagus di Banda Aceh.&rdquo;
          </span>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          AI dapat membantu mencari dan menyajikan informasi berdasarkan berbagai sumber yang tersedia dan dapat diaksesnya.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Lalu, dari mana AI mendapatkan informasi tersebut?
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
          Jawabannya tidak selalu dari satu tempat. Sumber yang digunakan dapat berupa website, direktori bisnis, ulasan pelanggan, media sosial, berita, dan berbagai sumber lain.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Namun, ada penelitian tahun 2026 yang menarik untuk kita pelajari:
        </p>

        {/* Yext Research Breakdown */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
              Penelitian Yext: 155,5 Juta Sitasi AI
            </h3>
            <span className="text-xs font-geom text-[#F45B1A] bg-[#F45B1A]/10 border border-[#F45B1A]/20 px-3 py-1 rounded-full">
              Yext Research · Juli 2026
            </span>
          </div>

          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Dalam laporan penelitian yang diterbitkan Yext Research pada Juli 2026, peneliti menganalisis 155,5 juta sitasi AI dari 1.623 brand dan empat platform AI selama Januari hingga Maret 2026.
          </p>

          <div className="p-5 rounded-xl bg-[#0B0807] border border-[#F45B1A]/30">
            <div className="font-geom font-bold text-2xl sm:text-3xl text-[#F45B1A] mb-1">
              80% Sitasi
            </div>
            <p className="font-outfit text-sm sm:text-base text-[#F7F1EB]">
              mengarah ke <strong>website atau listing bisnis</strong>.
            </p>
            <p className="font-outfit text-xs text-[#A99A90] mt-2">
              *Catatan penting: Angka tersebut merupakan gabungan website milik brand dan listing bisnis yang dapat dikelola, seperti direktori publik. Angka itu bukan berarti 80% seluruh sitasi berasal dari website saja.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <span className="font-geom font-semibold text-xs uppercase tracking-wider text-[#A99A90]">
              Pola sitasi spesifik antarplatform:
            </span>
            <ul className="space-y-2 font-outfit text-xs sm:text-sm text-[#D5CBC3]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
                <span><strong>Website menyumbang 52,0%</strong> sitasi Gemini.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
                <span><strong>Website menyumbang 50,9%</strong> sitasi Perplexity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
                <span><strong>Listing menyumbang 36,1%</strong> sitasi OpenAI.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
                <span><strong>Ulasan dan media sosial menyumbang 19,5%</strong> sitasi Anthropic dalam pengukuran tersebut.</span>
              </li>
            </ul>
          </div>

          <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
            Hasil ini menunjukkan bahwa setiap sistem AI mempunyai pola pencarian dan sumber yang berbeda.
          </p>

          <div className="pt-2 border-t border-white/10">
            <a
              href="https://www.yext.com/research/articles/ai-citation-behavior-across-models-consistent-source-preferences-across-a-growing-ai-landscape/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors"
            >
              <span>Sumber: Yext Research — With Location On, AI Cites the Sources That Know Places</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tinuiti Research Breakdown */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
              Bagaimana dengan Media Sosial?
            </h3>
            <span className="text-xs font-geom text-[#A99A90] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Tinuiti Q3 2026
            </span>
          </div>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Media sosial tetap menjadi salah satu sumber yang dapat dikutip oleh sistem AI.
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
            Laporan <strong className="text-[#F7F1EB]">AI Citation Trends Report Q3 2026 dari Tinuiti</strong> mencatat bahwa media sosial menyumbang <strong className="text-[#F45B1A]">14%</strong> sitasi AI untuk prompt kategori apparel atau pakaian.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
            Penelitian tersebut memantau ChatGPT, Perplexity, Google AI Mode, Google AI Overviews, Gemini, dan Microsoft Copilot. Tetapi angka 14% tersebut khusus untuk prompt kategori apparel, bukan persentase media sosial untuk seluruh kategori bisnis.
          </p>
          <div className="pt-2">
            <a
              href="https://tinuiti.com/research-insights/research/ai-citation-trends-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors"
            >
              <span>Sumber: Tinuiti — AI Citation Trends Report Q3 2026</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Insight Apa Artinya Bagi Bisnismu */}
        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p className="text-[#F7F1EB] font-bold">
            Apa Artinya Bagi Bisnismu?
          </p>
          <p>
            Kembali ke analogi kos-kosan Komplek A.
          </p>
          <p>
            Bayangkan seseorang dari luar kompleks ingin mencari rekomendasi toko di daerahmu. Ia belum pernah mengikuti Instagram tokomu, tidak pernah melihat TikTok bisnismu, bahkan belum pernah mendengar nama usahamu.
          </p>
          <p>
            Kemudian ia bertanya kepada AI.
          </p>
          <p>
            AI membantu mencari dan menyusun informasi dari berbagai sumber yang dapat dijangkau dan diprosesnya.
          </p>
          <p>
            Kalau bisnismu memiliki website yang berisi informasi jelas, lengkap, dan dapat diakses, website tersebut bisa menjadi salah satu sumber informasi yang berpeluang ditemukan dan dikutip oleh sistem AI.
          </p>
          <p>
            Misalnya, informasi mengenai:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-[#D5CBC3] pl-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Nama dan identitas bisnis.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Produk dan layanan yang ditawarkan.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Lokasi atau wilayah pelayanan.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Informasi kontak resmi.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Keunggulan dan karakter bisnis.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>Artikel yang menjawab pertanyaan calon pelanggan.</span>
            </li>
          </ul>
          <p>
            Berbeda dengan unggahan media sosial yang informasinya bisa tersebar di banyak postingan, website memungkinkan kamu menyusun semua informasi tersebut dalam satu tempat.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Website memberikan fondasi informasi digital yang dapat dikelola sendiri dan berpotensi menjadi salah satu sumber bagi sistem pencarian AI.
          </p>
        </div>
      </section>

      {/* ── SECTION 05: APAKAH OTOMATIS DIREKOMENDASIKAN AI? ──── */}
      <section id="05-website-dan-rekomendasi-ai" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>BAGIAN 05</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          05. Apakah Memiliki Website Otomatis Membuat Bisnis Direkomendasikan AI?
        </h2>

        <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-3">
          <div className="font-geom font-bold text-xl text-[#F45B1A]">
            Tidak otomatis.
          </div>
          <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
            Ini penting untuk dipahami supaya kamu tidak salah mengartikan manfaat website. Memiliki website tidak langsung membuat ChatGPT, Gemini, atau Google merekomendasikan bisnismu.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Website harus memiliki informasi yang relevan, bermanfaat, akurat, dapat diakses, dan memenuhi persyaratan teknis sistem pencarian terkait.
          </p>
        </div>

        {/* OpenAI Crawler Details */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
          <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
            Perbedaan Crawler OpenAI: OAI-SearchBot vs GPTBot
          </h3>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Sebagai contoh, OpenAI memiliki crawler bernama <strong className="text-[#F45B1A]">OAI-SearchBot</strong> yang digunakan untuk membantu menemukan website dalam fitur pencarian ChatGPT.
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
            OpenAI juga membedakan OAI-SearchBot dari <strong className="text-[#F7F1EB]">GPTBot</strong>:
          </p>
          <ul className="space-y-2 font-outfit text-xs sm:text-sm text-[#D5CBC3] pl-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong>OAI-SearchBot</strong> digunakan untuk pencarian ChatGPT.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A99A90] mt-2 shrink-0" />
              <span><strong>GPTBot</strong> digunakan untuk mengumpulkan konten yang mungkin digunakan dalam pelatihan model AI.</span>
            </li>
          </ul>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
            Keduanya mempunyai fungsi yang berbeda dan pengaturannya dapat dipisahkan dalam robots.txt.
          </p>
          <div className="pt-2">
            <a
              href="https://developers.openai.com/api/docs/bots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors"
            >
              <span>Sumber: OpenAI — Overview of OpenAI Crawlers</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Google Guidance */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
          <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
            Panduan Google Search Central untuk Fitur AI
          </h3>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Sementara itu, Google menjelaskan bahwa praktik dasar SEO tetap relevan untuk AI Overviews dan AI Mode.
          </p>
          <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
            Halaman perlu dapat di-crawl, diindeks, dan memenuhi persyaratan untuk ditampilkan dalam Google Search. Namun, memenuhi persyaratan tersebut tetap tidak menjamin halaman akan ditampilkan sebagai sumber.
          </p>
          <div className="pt-2">
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F45B1A] hover:text-[#FF6A2A] font-semibold transition-colors"
            >
              <span>Sumber: Google Search Central — AI Features and Your Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#F7F1EB] font-medium leading-relaxed">
          Jadi, bukan hanya memiliki website yang penting. Kamu juga perlu memastikan informasi di dalamnya benar-benar dapat ditemukan dan dipahami.
        </p>
      </section>

      {/* ── SECTION 06: LANGKAH PEMILIK BISNIS ────────────────── */}
      <section id="06-langkah-pemilik-bisnis" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <CheckCircle2 className="w-4 h-4" />
          <span>BAGIAN 06</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          06. Apa yang Harus Dilakukan Pemilik Bisnis?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Tidak perlu langsung membangun website yang sangat rumit. Mulailah dengan beberapa langkah sederhana:
        </p>

        {/* 6 Actionable Steps */}
        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Buat profil bisnis yang jelas.",
              desc: "Jelaskan nama usaha, apa yang dijual, siapa target pelanggan, dan bagaimana cara menghubunginya.",
            },
            {
              num: "02",
              title: "Tampilkan produk dan layanan secara lengkap.",
              desc: "Jangan hanya menampilkan foto. Tambahkan nama produk, penjelasan, harga apabila tersedia, dan informasi yang membantu pelanggan mengambil keputusan.",
            },
            {
              num: "03",
              title: "Buat informasi bisnis yang konsisten.",
              desc: "Pastikan nama, nomor kontak, alamat atau area layanan, dan jam operasional tidak saling bertentangan antara website, Google Business Profile, dan media sosial.",
            },
            {
              num: "04",
              title: "Buat konten yang menjawab pertanyaan pelanggan.",
              desc: "Misalnya, jika kamu memiliki bisnis kuliner, kamu bisa membagikan informasi menu, cara pemesanan, area pengantaran, dan pertanyaan yang sering diajukan.",
            },
            {
              num: "05",
              title: "Perhatikan SEO dan aksesibilitas website.",
              desc: "Pastikan website dapat dibuka, memiliki struktur halaman yang jelas, menggunakan judul dan deskripsi yang sesuai, serta tidak sengaja memblokir crawler yang diperlukan. Kamu juga bisa menggunakan Google Search Console untuk memantau kondisi pengindeksan website.",
            },
            {
              num: "06",
              title: "Tetap aktif di media sosial.",
              desc: "Jangan meninggalkan Instagram atau TikTok. Gunakan keduanya untuk menjangkau orang baru, membangun komunikasi, serta mengarahkan calon pelanggan menuju website resmi.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 flex items-start gap-4 sm:gap-5"
            >
              <span className="font-geom font-extrabold text-xl sm:text-2xl text-[#F45B1A] shrink-0 pt-0.5">
                {step.num}
              </span>
              <div className="space-y-1">
                <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
                  {step.title}
                </h3>
                <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed pt-2">
          Dengan begitu, setiap saluran digital memiliki perannya masing-masing.
        </p>
      </section>

      {/* ── SECTION 07: WEBSITE SESUAI KEBUTUHAN ──────────────── */}
      <section id="07-website-sesuai-kebutuhan" className="scroll-mt-28 space-y-5 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Network className="w-4 h-4" />
          <span>BAGIAN 07</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          07. Website yang Baik Harus Mengikuti Kebutuhan Bisnis
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Tidak semua bisnis membutuhkan website yang sama.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bayangkan seorang pemilik usaha rumahan yang menjual kue. Ia mungkin hanya membutuhkan website sederhana dengan:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-[#D5CBC3] pl-1 font-outfit">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>Profil usaha.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>Foto produk.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>Daftar harga.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>Lokasi atau area pengantaran.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>Tombol WhatsApp.</span>
          </li>
        </ul>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p>
            Sementara itu, sebuah toko fashion dengan banyak produk mungkin membutuhkan katalog interaktif.
          </p>
          <p>
            Perusahaan yang lebih besar bisa membutuhkan web application, sistem reservasi, portal pelanggan, atau integrasi berbagai proses bisnis.
          </p>
          <p>
            Jadi, jangan membangun website hanya karena ingin terlihat modern.
          </p>
          <p className="text-[#F7F1EB] font-bold">
            Pilihlah fitur yang memang dibutuhkan bisnis.
          </p>
          <p>
            Website yang sederhana tetapi informatif bisa jauh lebih berguna daripada website yang rumit tetapi tidak membantu pelanggan.
          </p>
        </div>
      </section>

      {/* ── KESIMPULAN & OFFICIAL CALLOUT ────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <FileText className="w-4 h-4" />
          <span>KESIMPULAN</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          Jangan Hanya Dikenal Saat Viral, Bangun Juga Fondasi Digital Bisnismu
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
          <p>
            Sekarang kita kembali ke analogi awal.
          </p>
          <p>
            Kamu mungkin sudah dikenal oleh anak-anak kos di Komplek A. Mereka mengenal produkmu, pernah membeli, dan bahkan merekomendasikan tokomu kepada teman-temannya.
          </p>
          <p>
            Namun, masih banyak orang di luar kompleks yang belum mengetahui bisnismu.
          </p>
          <p>
            Media sosial membantu memperkenalkan usaha kepada orang-orang tersebut.
          </p>
          <p>
            Website memberikan tempat resmi untuk menjelaskan bisnis secara lebih lengkap.
          </p>
          <p>
            Google membantu orang menemukan informasi melalui pencarian, sementara sistem AI tertentu juga dapat menggunakan website dan sumber digital lainnya ketika menyusun jawaban.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Ketiganya bukan sesuatu yang harus dipilih salah satu. Justru semuanya bisa saling melengkapi.
          </p>
        </div>

        {/* ── CALLOUT CARD ── */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-xl space-y-2">
          <p className="font-geom font-bold text-lg sm:text-xl md:text-2xl text-[#F7F1EB] leading-snug">
            &ldquo;Jangan hanya membangun bisnis yang ramai ketika sedang viral. Bangun juga fondasi digital yang bisa terus kamu kelola ketika tren sudah berganti.&rdquo;
          </p>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Karena bisnis yang ingin berkembang bukan hanya membutuhkan perhatian sesaat, tetapi juga identitas dan informasi yang bisa ditemukan oleh orang-orang yang membutuhkannya.
        </p>
      </section>

      {/* ── CTA BOX: INGIN BISNISMU MEMILIKI WEBSITE SENDIRI? ─── */}
      <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#1C120E] to-[#120C09] border border-[#F45B1A]/40 shadow-2xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
          <span>PAHAM DIGITAL AGENCY</span>
        </div>

        <h3 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
          Ingin Bisnismu Memiliki Website Sendiri?
        </h3>

        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Paham Digital Agency membantu UMKM dan bisnis membangun kehadiran digital melalui:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-outfit text-[#F7F1EB]">
          {[
            "Website profesional.",
            "Web application.",
            "AI Customer Service.",
            "Automasi bisnis.",
            "SEO dan GEO Optimization.",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-outfit text-sm text-[#A99A90] leading-relaxed pt-1">
          Kami percaya teknologi seharusnya membantu pekerjaan menjadi lebih praktis, membuka peluang baru, dan memberikan manfaat nyata bagi bisnis. Mari mulai dari kebutuhan bisnismu.
        </p>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5 text-xs text-[#A99A90] font-outfit">
            <p className="font-geom font-bold text-sm text-[#F7F1EB]">
              PAHAM DIGITAL AGENCY
            </p>
            <p className="text-[#F45B1A] font-medium">Paham Bisnisnya, Otomatiskan Sistemnya.</p>
            <p>WhatsApp: 082311307556 · Instagram: @pahamdigitall.id</p>
            <p className="text-[11px] text-[#A99A90]/80">Kenali teknologinya, pahami manfaatnya, kuasai masa depan.</p>
          </div>

          <a
            href="https://wa.me/6282311307556?text=Halo%20Tim%20Paham%20Digital!%20Saya%20tertarik%20konsultasi%20pembuatan%20website%20bisnis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-xs font-geom font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#F45B1A]/25 shrink-0"
          >
            <span>Konsultasi Website</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── AUTHOR BOX ───────────────────────────────────────── */}
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

      {/* ── REFERENSI DAN SUMBER DATA (ALL 7 SOURCES) ───────── */}
      <section id="referensi" aria-label="Referensi dan Sumber Data" className="p-6 sm:p-8 rounded-2xl bg-[#0B0807] border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <ExternalLink className="w-4 h-4" />
          <span>REFERENSI DAN SUMBER DATA</span>
        </div>
        <p className="text-xs font-outfit text-[#A99A90]">
          Seluruh data, persentase, dan fakta teknis dalam artikel ini merujuk pada publikasi resmi berikut:
        </p>

        <ol className="space-y-4 text-xs font-outfit text-[#A99A90] list-none pl-0">
          {/* Source 1 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">1. DataReportal — Digital 2027: Indonesia</strong>
              <span className="text-[10px] text-[#F45B1A]">Diterbitkan: 4 November 2026</span>
            </div>
            <p>
              Data periode Oktober 2026: 231 juta pengguna internet (penetrasi 80,2%), 240 juta identitas pengguna media sosial (83,2% populasi). Catatan penting: Angka identitas tidak mewakili individu unik.
            </p>
            <a
              href="https://datareportal.com/reports/digital-2027-indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://datareportal.com/reports/digital-2027-indonesia</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 2 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">2. Yext Research — With Location On, AI Cites the Sources That Know Places</strong>
              <span className="text-[10px] text-[#F45B1A]">Diterbitkan: Juli 2026</span>
            </div>
            <p>
              Periode Q1 2026, analisis 155,5 juta sitasi AI dari 1.623 brand di empat platform AI. Temuan: 80% sitasi mengarah ke website atau listing bisnis (bukan 80% website saja).
            </p>
            <a
              href="https://www.yext.com/research/articles/ai-citation-behavior-across-models-consistent-source-preferences-across-a-growing-ai-landscape/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://www.yext.com/research/articles/ai-citation-behavior-across-models-consistent-source-preferences-across-a-growing-ai-landscape/</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 3 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">3. Tinuiti — AI Citation Trends Report Q3 2026</strong>
              <span className="text-[10px] text-[#F45B1A]">Q3 2026</span>
            </div>
            <p>
              Temuan: Media sosial menyumbang 14% sitasi AI untuk prompt kategori apparel/pakaian. Catatan: Angka ini terbatas pada kategori pakaian, bukan seluruh industri.
            </p>
            <a
              href="https://tinuiti.com/research-insights/research/ai-citation-trends-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://tinuiti.com/research-insights/research/ai-citation-trends-report/</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 4 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">4. OpenAI — Overview of OpenAI Crawlers</strong>
              <span className="text-[10px] text-[#F45B1A]">Dokumentasi Resmi</span>
            </div>
            <p>
              OAI-SearchBot mendukung penemuan pencarian ChatGPT, sedangkan GPTBot mengumpulkan data untuk pelatihan model AI. Pengaturan robots.txt keduanya bersifat terpisah.
            </p>
            <a
              href="https://developers.openai.com/api/docs/bots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://developers.openai.com/api/docs/bots</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 5 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">5. Google Search Central — AI Features and Your Website</strong>
              <span className="text-[10px] text-[#F45B1A]">Panduan Resmi</span>
            </div>
            <p>
              Prinsip dasar SEO tetap berlaku untuk fitur AI Google (AI Overviews dan AI Mode). Halaman harus terindeks dan memenuhi syarat Google Search, tanpa perlu skema AI khusus.
            </p>
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://developers.google.com/search/docs/appearance/ai-features</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 6 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">6. Anthropic — Website Crawlers</strong>
              <span className="text-[10px] text-[#F45B1A]">Dokumentasi Resmi</span>
            </div>
            <p>
              Claude-SearchBot mendukung pencarian Claude, Claude-User untuk pengambilan atas permintaan pengguna, dan ClaudeBot untuk pelatihan model.
            </p>
            <a
              href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>

          {/* Source 7 */}
          <li className="p-3.5 rounded-xl bg-[#140E0B] border border-white/5 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <strong className="text-[#F7F1EB]">7. Perplexity — Crawler Documentation</strong>
              <span className="text-[10px] text-[#F45B1A]">Dokumentasi Resmi</span>
            </div>
            <p>
              PerplexityBot digunakan untuk pengindeksan web guna mendukung kemampuan mesin pencari Perplexity.
            </p>
            <a
              href="https://docs.perplexity.ai/guides/bots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F45B1A] hover:underline pt-1"
            >
              <span>https://docs.perplexity.ai/guides/bots</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ol>
      </section>

      {/* ── RELATED ARTICLES: SEQUENCE 01 & 02 ──────────────── */}
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
              Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Masih bingung apa beda antara hosting dan domain? Kenali fungsi, cara kerja, dan perbedaannya melalui analogi rumah yang mudah dipahami.
            </p>
          </Link>

          {/* Related Card 2 */}
          <Link
            href="/blog/apa-itu-seo-website-sepi-pengunjung/"
            className="p-4 sm:p-5 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block mb-1">
              ARTIKEL 02 · SEO &amp; DIGITAL MARKETING
            </span>
            <h4 className="font-geom font-bold text-sm sm:text-base text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2 mb-2">
              Cara Agar Website Muncul di Google: Kenali Apa Itu SEO
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Website sudah online tetapi belum ditemukan pelanggan? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.
            </p>
          </Link>
        </div>
      </section>

      {/* ── SHARE BUTTON ────────────────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa artikel ini bermanfaat untuk bisnismu atau rekan usaha lainnya?
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
