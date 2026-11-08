import React from "react";
import Link from "next/link";
import {
  Server,
  MapPin,
  Globe,
  HelpCircle,
  CheckCircle2,
  Home,
  ExternalLink,
  Share2,
  ArrowRight,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleDomainVsHosting({ waShareUrl }: Props) {
  return (
    <div className="space-y-10">
      {/* Lead Paragraph */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border-l-4 border-[#F45B1A] border-y border-r border-white/[0.08] shadow-lg">
        <p className="font-geom font-semibold text-lg sm:text-xl text-[#F7F1EB] leading-relaxed mb-3">
          Pernah nggak kamu bertanya, sebuah website itu sebenarnya tinggal di mana?
        </p>
        <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
          Kita setiap hari membuka website. Mulai dari Google, YouTube, sampai toko online. Tinggal ketik alamatnya, klik, lalu websitenya langsung muncul di layar. Tapi pernah kepikiran nggak, bagaimana sebuah website bisa punya alamat dan menyimpan begitu banyak informasi di dalamnya?
        </p>
      </div>

      {/* Satu Pertanyaan Besar Callout */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#21140F] to-[#17100D] border border-[#F45B1A]/30">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>SATU PERTANYAAN BESAR</span>
        </div>
        <p className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] leading-snug mb-3">
          Kalau website itu ibarat sebuah rumah, apa yang menjadi alamatnya dan di mana semua barang di dalamnya disimpan?
        </p>
        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Nah, ada dua teknologi penting yang membuat hal tersebut bisa terjadi: <strong className="text-[#F45B1A]">Domain dan Hosting</strong>. Yuk, kita pahami teknologi di balik website pakai bahasa sederhana tanpa istilah teknis yang ribet!
        </p>
      </div>

      {/* ── SECTION 01: HOSTING ─────────────────────────────── */}
      <section id="01-hosting" className="scroll-mt-28 space-y-4 pt-4">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Server className="w-4 h-4" />
          <span>BAGIAN 01</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          01. HOSTING — RUMAH TEMPAT WEBSITE TINGGAL
        </h2>
        
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Coba bayangkan kamu mempunyai sebuah rumah. Di dalam rumah itu ada sofa, televisi, meja, lemari, tempat tidur, dan berbagai barang lainnya.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Nah, bayangkan <strong className="text-[#F7F1EB]">hosting sebagai rumah</strong> yang menyediakan tempat fisik untuk menyimpan semua barang tersebut.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Dalam dunia website, hosting adalah layanan komputer server khusus yang menyediakan ruang penyimpanan dan sumber daya jaringan aktif 24 jam untuk menjalankan website. Di dalamnya tersimpan semua aset penting:
        </p>

        <ul className="space-y-2.5 my-4 pl-2 font-outfit text-sm sm:text-base text-[#D5CBC3]">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Gambar, foto produk, dan ilustrasi.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Tulisan, artikel blog, dan deskripsi layanan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Logo resmi dan icon brand.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>File desain (CSS) dan layout tampilan.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#F45B1A] shrink-0 mt-1" />
            <span>Kode program yang membuat website interaktif dan bisa berjalan.</span>
          </li>
        </ul>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ketika seseorang membuka website, browser mereka akan meminta data dari server hosting tersebut agar seluruh halaman website bisa ditampilkan secara utuh.
        </p>

        {/* Highlight Callout */}
        <div className="p-5 rounded-xl bg-[#17100D] border border-[#F45B1A]/40 text-center my-6">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A]">
            INGAT: HOSTING = RUMAH TEMPAT WEBSITE MENYIMPAN BERBAGAI BARANG DAN INFORMASINYA.
          </p>
        </div>
      </section>

      {/* ── SECTION 02: DOMAIN ──────────────────────────────── */}
      <section id="02-domain" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <MapPin className="w-4 h-4" />
          <span>BAGIAN 02</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          02. DOMAIN — ALAMAT RUMAHNYA
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang, kamu sudah punya rumah lengkap dengan sofa, televisi, dan berbagai barang di dalamnya. Tapi ada satu masalah besar...
        </p>
        <p className="font-geom font-semibold text-lg text-[#F7F1EB] italic">
          Bagaimana orang lain bisa menemukan rumahmu kalau mereka tidak tahu alamatnya?
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Nah, di sinilah <strong className="text-[#F7F1EB]">domain berperan</strong>! Domain adalah nama atau alamat unik yang diketik pengunjung pada bilah peramban untuk menemukan dan mengakses sebuah website di internet.
        </p>

        {/* Example domains card */}
        <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 my-4">
          <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] block mb-3">
            Contoh Alamat Domain Populer:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-[#17100D] border border-white/5 font-mono text-xs sm:text-sm text-[#F7F1EB]">google.com</div>
            <div className="p-3 rounded-xl bg-[#17100D] border border-white/5 font-mono text-xs sm:text-sm text-[#F7F1EB]">youtube.com</div>
            <div className="p-3 rounded-xl bg-[#17100D] border border-white/5 font-mono text-xs sm:text-sm text-[#F7F1EB]">tokopedia.com</div>
            <div className="p-3 rounded-xl bg-[#17100D] border border-[#F45B1A]/40 font-mono text-xs sm:text-sm text-[#F45B1A] font-bold">pahamdigital.online</div>
          </div>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Jadi, ketika seseorang mengetik <code className="px-2 py-1 rounded bg-white/5 text-[#F45B1A] font-mono text-sm">pahamdigital.online</code> di browser, mereka sedang menggunakan alamat resmi untuk berkunjung ke rumah digital Paham Digital Agency.
        </p>

        <div className="p-5 rounded-xl bg-[#17100D] border border-[#F45B1A]/40 text-center my-6">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A]">
            INGAT: DOMAIN = ALAMAT RUMAH UNTUK MENEMUKAN WEBSITE.
          </p>
        </div>
      </section>

      {/* ── SECTION 03: TLD (.COM, .ID, .ONLINE) ───────────── */}
      <section id="03-tld" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Globe className="w-4 h-4" />
          <span>BAGIAN 03</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          03. TERUS, KENAPA ADA .COM, .ID, DAN .ONLINE?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Coba perhatikan beberapa alamat website tadi. Ada yang berakhiran <code className="text-[#F7F1EB]">.com</code>, ada yang <code className="text-[#F7F1EB]">.id</code>, bahkan ada yang <code className="text-[#F45B1A]">.online</code>.
        </p>
        <p className="font-geom font-semibold text-lg text-[#F7F1EB]">
          Kenapa alamat website harus punya akhiran seperti itu? Kenapa nggak kita tentukan sendiri saja sesuka hati?
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bagian setelah titik itu punya nama resmi: <strong className="text-[#F7F1EB]">Top-Level Domain (TLD)</strong>. Gampangnya, TLD adalah ekstensi paling belakang dari sebuah nama domain.
        </p>

        {/* Breakdown diagram */}
        <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 my-4 text-center">
          <span className="text-xs font-geom uppercase tracking-wider text-[#A99A90] block mb-2">
            Struktur Domain
          </span>
          <div className="inline-flex items-center gap-1 font-mono text-xl sm:text-2xl font-bold bg-[#0B0807] px-6 py-3 rounded-xl border border-white/10">
            <span className="text-[#F7F1EB]">pahamdigital</span>
            <span className="text-[#F45B1A]">.online</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-outfit max-w-sm mx-auto">
            <div className="p-2 rounded bg-white/5 text-[#A99A90]">Nama yang didaftarkan</div>
            <div className="p-2 rounded bg-[#F45B1A]/10 text-[#F45B1A] font-bold">TLD (Ekstensi Domain)</div>
          </div>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          TLD ini adalah bagian dari sistem alamat internet global. Setiap ekstensi memiliki badan pengelola dan kebijakan tersendiri. Mari kenali tiga kelompok yang paling sering dijumpai:
        </p>

        {/* Subsections A, B, C */}
        <div className="space-y-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 text-[#F7F1EB] font-mono text-sm">.COM</span>
              <span>— Akhiran Domain Komersial Global</span>
            </h3>
            <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Berasal dari kata <em>commercial</em>. Awalnya ditujukan untuk kebutuhan bisnis, namun kini menjadi ekstensi paling luas dan paling dikenal di seluruh penjuru dunia internet.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-mono text-sm">.ID</span>
              <span>— Identitas Resmi Domain Indonesia</span>
            </h3>
            <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Termasuk <em>Country-Code Top-Level Domain</em> (ccTLD) yang mewakili negara Indonesia. Dikelola resmi oleh <strong>PANDI</strong> (Pengelola Nama Domain Internet Indonesia). Sangat tepat untuk bisnis yang ingin mempertegas identitas lokal Indonesia.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140E0B] border border-[#F45B1A]/40 space-y-2">
            <h3 className="font-geom font-bold text-lg text-[#F45B1A] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#F45B1A]/20 text-[#F45B1A] font-mono text-sm">.ONLINE</span>
              <span>— Identitas Eksistensi Digital Modern</span>
            </h3>
            <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
              Termasuk <em>Generic Top-Level Domain</em> (gTLD) modern. Ditujukan untuk bisnis, kreator, dan agensi yang ingin menegaskan kehadiran mereka di internet secara kontemporer, seperti yang digunakan oleh <code className="text-[#F45B1A]">pahamdigital.online</code>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: CUSTOM TLD ─────────────────────────── */}
      <section id="04-custom-tld" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <HelpCircle className="w-4 h-4" />
          <span>BAGIAN 04</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          04. TERUS, KENAPA NGGAK KITA BUAT EKSTENSI SENDIRI AJA?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Misalnya kamu ingin membuat website dengan alamat: <code className="text-[#F45B1A]">namabisnis.paham</code>. Kenapa nggak langsung kita buat saja?
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Jawabannya: karena sistem domain internet mempunyai aturan koordinasi global. Bayangkan sebuah kota yang memiliki ribuan nama jalan. Kita bebas memilih nama rumah kita, tetapi kita tidak bisa sembarangan menciptakan sistem nama jalan baru yang otomatis diakui oleh seluruh kantor pos dan navigasi GPS kota.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Untuk membuat Top-Level Domain baru, sebuah organisasi harus melalui proses registrasi resmi ke <strong>ICANN</strong> (Internet Corporation for Assigned Names and Numbers), memenuhi standar infrastruktur DNS, lolos uji teknis, dan membayar biaya operasional yang sangat besar. Jadi, bukan sekadar mengetik titik lalu menambahkan kata baru.
        </p>

        {/* Subdomain Tip */}
        <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 space-y-2">
          <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
            💡 Solusi Alamat Unik: Manfaatkan Subdomain!
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Setelah kamu memiliki domain induk resmi, kamu bebas membuat alamat cabang (subdomain) tanpa biaya tambahan, misalnya:
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded bg-white/5 font-mono text-xs text-[#F7F1EB]">blog.pahamdigital.online</span>
            <span className="px-3 py-1 rounded bg-white/5 font-mono text-xs text-[#F7F1EB]">layanan.pahamdigital.online</span>
            <span className="px-3 py-1 rounded bg-white/5 font-mono text-xs text-[#F7F1EB]">app.pahamdigital.online</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: PILIH EKSTENSI ──────────────────────── */}
      <section id="05-pilih-ekstensi" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <CheckCircle2 className="w-4 h-4" />
          <span>BAGIAN 05</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          05. JADI, HARUS PAKAI .COM ATAU .ID?
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Jawabannya: <strong>nggak harus selalu .com!</strong> Pemilihan ekstensi domain sebaiknya disesuaikan dengan 4 faktor utama:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-outfit">
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-1.5">
            <span className="font-geom font-bold text-sm text-[#F45B1A]">1. Target Pasar</span>
            <p className="text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Jika bisnismu fokus melayani pelanggan di Indonesia, ekstensi <code className="text-[#F7F1EB]">.id</code> atau <code className="text-[#F7F1EB]">.co.id</code> memberikan sinyal kedekatan geografis yang sangat kuat.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-1.5">
            <span className="font-geom font-bold text-sm text-[#F45B1A]">2. Identitas Brand</span>
            <p className="text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Pilih ekstensi yang selaras dengan positioning bisnismu agar mudah diingat dan terlihat relevan di mata audiens.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-1.5">
            <span className="font-geom font-bold text-sm text-[#F45B1A]">3. Ketersediaan Nama</span>
            <p className="text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Banyak nama bagus di <code className="text-[#F7F1EB]">.com</code> yang sudah diambil orang lain. Ekstensi seperti <code className="text-[#F45B1A]">.online</code> atau <code className="text-[#F7F1EB]">.id</code> seringkali masih menyediakan nama brand idamanmu.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-1.5">
            <span className="font-geom font-bold text-sm text-[#F45B1A]">4. Biaya &amp; Perpanjangan</span>
            <p className="text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Perhatikan biaya registrasi tahun pertama dan biaya perpanjangan tahun berikutnya. Jangan hanya tergiur diskon promo awal.
            </p>
          </div>
        </div>

        {/* Google SEO Fact Callout */}
        <div className="p-5 rounded-2xl bg-[#17100D] border border-amber-500/30 text-sm font-outfit text-[#D5CBC3] leading-relaxed">
          <strong className="text-amber-400 block mb-1 font-geom">📌 Fakta Penting Google SEO:</strong>
          Ekstensi <code className="text-white">.com</code> tidak otomatis membuat website lebih mudah masuk halaman 1 Google dibanding <code className="text-white">.id</code> atau <code className="text-white">.online</code>. Dokumentasi resmi Google Search Central menegaskan bahwa TLD itu sendiri bukan faktor penentu peringkat pencarian algoritma, melainkan kualitas konten, relevansi, dan kecepatan teknis website.
        </div>
      </section>

      {/* ── SECTION 06: GABUNGAN ANALOGI ────────────────────── */}
      <section id="06-gabungan-keduanya" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Home className="w-4 h-4" />
          <span>BAGIAN 06</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          06. SEKARANG, COBA BAYANGKAN KEDUANYA BEKERJA SAMA!
        </h2>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sekarang kita rangkai seluruh analogi rumah tadi menjadi alur yang utuh:
        </p>

        <div className="space-y-3 font-outfit my-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10">
            <MapPin className="w-5 h-5 text-[#F45B1A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F7F1EB] block font-geom">Domain = Alamat Rumah</strong>
              <span className="text-sm text-[#A99A90]">Memberitahu pengunjung ke mana mereka harus pergi.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10">
            <Server className="w-5 h-5 text-[#F45B1A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F7F1EB] block font-geom">Hosting = Bangunan Rumah</strong>
              <span className="text-sm text-[#A99A90]">Tempat fisik penyimpanan yang menampung seluruh isi website.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-[#F45B1A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F7F1EB] block font-geom">File Website = Isi Perabot</strong>
              <span className="text-sm text-[#A99A90]">Sofa, lemari, televisi — ibarat foto produk, teks, database, dan kode program.</span>
            </div>
          </div>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ketika seseorang mengetik nama domain, sistem DNS (Domain Name System) internet akan menerjemahkan nama tersebut ke alamat server hosting yang tepat. Kemudian server hosting mengirimkan file halaman website agar muncul seketika di layar pengunjung.
        </p>
      </section>

      {/* ── RESPONSIVE COMPARISON TABLE ─────────────────────── */}
      <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#140E0B]">
        <div className="p-4 sm:p-5 bg-[#17100D] border-b border-white/10">
          <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB]">
            Tabel Perbandingan Ringkas: Domain vs Hosting
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-outfit text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-[#A99A90] uppercase tracking-wider text-[11px]">
                <th className="p-3.5 sm:p-4">Parameter</th>
                <th className="p-3.5 sm:p-4 text-[#F45B1A]">Domain</th>
                <th className="p-3.5 sm:p-4 text-[#F7F1EB]">Hosting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#D5CBC3]">
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[#F7F1EB]">Analogi Rumah</td>
                <td className="p-3.5 sm:p-4">Nomor &amp; nama jalan rumah</td>
                <td className="p-3.5 sm:p-4">Bangunan fisik rumah</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[#F7F1EB]">Fungsi Utama</td>
                <td className="p-3.5 sm:p-4">Menemukan &amp; mengakses website</td>
                <td className="p-3.5 sm:p-4">Menyimpan file &amp; menjalankan server</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[#F7F1EB]">Wujud</td>
                <td className="p-3.5 sm:p-4">Alamat teks (pahamdigital.online)</td>
                <td className="p-3.5 sm:p-4">Server fisik / cloud aktif 24/7</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[#F7F1EB]">Jika Berdiri Sendiri?</td>
                <td className="p-3.5 sm:p-4">Punya alamat, tapi tak ada rumah dikunjungi</td>
                <td className="p-3.5 sm:p-4">Punya rumah, tapi sulit ditemukan orang</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[#F7F1EB]">Siklus Biaya</td>
                <td className="p-3.5 sm:p-4">Sewa tahunan (registrasi nama)</td>
                <td className="p-3.5 sm:p-4">Sewa bulanan / tahunan (kapasitas server)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── SECTION 07: HANYA PUNYA DOMAIN ──────────────────── */}
      <section id="07-hanya-domain" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <span>BAGIAN 07</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          07. APA YANG TERJADI KALAU HANYA PUNYA DOMAIN?
        </h2>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Misalnya kamu sudah membeli domain <code className="text-[#F7F1EB]">bisniskeren.com</code>, namun belum menyewa layanan hosting atau menghubungkannya ke sistem website apapun.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ibaratnya, kamu sudah memiliki plang alamat jalan, tetapi belum ada rumah fisik yang berdiri di atas tanah tersebut. Saat orang membuka alamat itu, browser akan menampilkan pesan bahwa website tidak dapat dijangkau.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sebaliknya, kamu bisa memiliki server hosting tanpa nama domain kustom (website diakses melalui nomor IP server atau subdomain bawaan). Keduanya memiliki peran masing-masing dan saling melengkapi.
        </p>
      </section>

      {/* ── SECTION 08: TEMPAT BELI SAMA ATAU BEDA ───────────── */}
      <section id="08-tempat-beli" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <span>BAGIAN 08</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          08. APA DOMAIN DAN HOSTING HARUS DIBELI DI TEMPAT YANG SAMA?
        </h2>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          <strong className="text-[#F7F1EB]">Nggak harus!</strong> Kamu bebas membeli domain di registrar A (seperti Hostinger, Niagahoster, atau Namecheap) dan menyewa hosting di provider B. Keduanya dapat dihubungkan dengan mudah melalui pengaturan <em>Nameserver</em> atau DNS Records (A Record &amp; CNAME).
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Membeli keduanya di tempat yang sama memang lebih praktis karena pengaturan otomatis, namun membelinya secara terpisah memberi fleksibilitas penuh jika suatu saat kamu ingin memindahkan server website tanpa harus memindahkan domain.
        </p>
      </section>

      {/* ── SECTION 09: KEBUTUHAN BISNIS ────────────────────── */}
      <section id="09-kebutuhan-bisnis" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <span>BAGIAN 09</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] tracking-tight">
          09. KENAPA BISNIS MEMBUTUHKAN DOMAIN DAN HOSTING?
        </h2>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Bayangkan calon pelanggan ingin mencari produk atau layanan bisnismu melalui internet. Mereka ingin melihat portofolio, katalog, harga transparan, dan cara menghubungi bisnismu secara cepat.
        </p>
        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Dengan website, semua informasi penting tersebut dapat ditampilkan dalam satu wadah profesional yang kamu kendalikan 100%. Domain membantu pelanggan mengingat identitas bisnismu, sedangkan hosting menjamin informasi tersebut selalu siap disajikan kapan saja mereka berkunjung.
        </p>
      </section>

      {/* ── KESIMPULAN ──────────────────────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 pt-8 border-t border-white/10 space-y-5">
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#17100D] to-[#140E0B] border border-[#F45B1A]/40 shadow-xl space-y-4">
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
            KESIMPULAN: TEKNOLOGI ITU TIDAK HARUS RUMIT
          </h2>
          <p className="font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
            Ternyata memahami domain dan hosting nggak sesulit yang dibayangkan, kan? Cukup ingat tiga rumus sederhana ini:
          </p>
          
          <div className="space-y-2 pt-2 text-sm sm:text-base font-geom font-semibold">
            <div className="p-3 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Hosting = Rumah tempat seluruh file website disimpan.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>Domain = Alamat unik untuk menemukan website di internet.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0B0807] border border-white/10 flex items-center gap-2.5 text-[#F7F1EB]">
              <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
              <span>TLD (.com, .id, .online) = Akhiran resmi dalam sistem alamat global.</span>
            </div>
          </div>

          <p className="font-outfit text-base text-[#A99A90] leading-relaxed pt-2">
            Teknologi itu sebenarnya ramah dan logis ketika dijelaskan dengan benar. Yang terpenting adalah kita mau mengenalnya selangkah demi selangkah.
          </p>

          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] pt-2">
            Paham teknologinya, pahami manfaatnya, kuasai masa depan.
          </p>
        </div>
      </section>

      {/* ── NEXT ARTICLE NAVIGATION (SERIES BRIDGE) ─────────── */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#21140F] via-[#17100D] to-[#140E0B] border border-[#F45B1A]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block">
            LANJUT KE ARTIKEL BERIKUTNYA · ARTIKEL 02
          </span>
          <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
            Sudah Punya Website, Kok Belum Ada yang Berkunjung?
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] max-w-xl">
            Punya rumah dan alamat saja belum cukup. Yuk, kenali SEO lewat analogi Pak RT dan Google Search agar bisnismu lebih mudah ditemukan!
          </p>
        </div>

        <Link
          href="/blog/apa-itu-seo-website-sepi-pengunjung/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm transition-all shadow-md shadow-[#F45B1A]/30 shrink-0 group"
        >
          <span>Baca Artikel 02</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            Membantu pemilik bisnis dan UMKM di Aceh Barat serta seluruh Indonesia memahami teknologi secara membumi dan mentransformasi operasional bisnis melalui website modern, AI, dan sistem automasi.
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
              href="https://newgtlds.icann.org/en/applicants/global-support/faqs/faqs-en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>ICANN New gTLD Program Frequently Asked Questions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://www.iana.org/domains/root/db/com.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>IANA Delegation Record for .COM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://www.iana.org/domains/root/db/id.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>IANA Delegation Record for .ID (Indonesia)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://www.iana.org/domains/root/db/online.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>IANA Delegation Record for .ONLINE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a
              href="https://pandi.id/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#F45B1A] transition-colors"
            >
              <span>PANDI (Pengelola Nama Domain Internet Indonesia) FAQ</span>
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
        </ul>
      </section>

      {/* ── RELATED ARTICLES: SEQUENCE 02 & 03 ──────────────── */}
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
            href="/blog/apa-itu-seo-website-sepi-pengunjung/"
            className="p-4 sm:p-5 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block mb-1">
              ARTIKEL 02 · SEO &amp; DIGITAL MARKETING
            </span>
            <h4 className="font-geom font-bold text-sm sm:text-base text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2 mb-2">
              Sudah Punya Website, Kok Belum Ada yang Berkunjung? Kenalan dengan SEO!
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Punya rumah dan alamat saja belum cukup. Kenali SEO melalui analogi Pak RT, warga, dan Google Search dengan bahasa yang gampang dipahami.
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
