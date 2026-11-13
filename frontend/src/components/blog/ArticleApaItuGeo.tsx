import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Share2,
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  ShieldCheck,
  Check,
  Building2,
  Users,
  Compass,
  Layers,
  Database,
  Globe2,
  Cpu,
  FileCheck2,
  AlertTriangle,
  Lightbulb,
  FileText,
  BarChart3,
  Network,
  BookOpen,
  Scale,
  Smartphone,
  RefreshCw,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleApaItuGeo({ waShareUrl }: Props) {
  return (
    <div className="space-y-12">
      {/* ── BAGIAN 01: PENDAHULUAN ──────────────────────── */}
      <section id="pendahuluan" className="scroll-mt-28 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border-l-4 border-[#F45B1A] border-y border-r border-white/[0.08] shadow-lg space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Globe2 className="w-4 h-4" />
            <span>BAGIAN 01 · PERUBAHAN PERILAKU PENCARIAN</span>
          </div>
          <h2 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug">
            Dunia Pencarian Sedang Berubah: Dari Mengetik Kata Kunci Menjadi Bertanya ke AI
          </h2>
          <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
            Bayangkan seseorang sedang membutuhkan jasa pembuatan website atau solusi digital untuk usahanya.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Beberapa tahun lalu, alurnya sangat familiar: ia membuka Google, mengetik kata kunci singkat, menelusuri deretan sepuluh tautan biru di halaman pertama, membuka beberapa tab browser, lalu membandingkan halaman kontak satu per satu.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Sekarang, kebiasaan tersebut mengalami pergeseran nyata. Calon pelanggan dapat langsung membuka asisten AI seperti ChatGPT, Google Gemini, atau Microsoft Copilot, lalu bertanya dengan kalimat percakapan yang lengkap:
          </p>
          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 font-outfit text-sm text-[#F7F1EB] italic space-y-1.5">
            <p>"Rekomendasikan jasa pembuatan website untuk UMKM di Aceh yang terpercaya dan paham sistem automasi."</p>
            <p>"Bisnis mana yang menyediakan layanan AI Customer Service dengan pendekatan humanis untuk toko online?"</p>
          </div>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Dalam hitungan detik, sistem kecerdasan buatan menyajikan jawaban berupa rangkuman naratif terintegrasi beserta alasan, ulasan reputasi, dan tautan rujukan. Pertanyaan terbesarnya sekarang: <strong className="text-[#F7F1EB]">ketika calon pelanggan bertanya kepada AI tentang rekomendasi bisnis di bidangmu, apakah AI bisa menemukan, memahami, dan menyebut bisnismu?</strong>
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed pt-2">
          <p>
            Bagi pemilik usaha kecil hingga menengah, fenomena ini melahirkan pertanyaan mendesak: bagaimana <strong className="text-[#F7F1EB]">cara agar bisnis direkomendasikan AI</strong> dan bagaimana sebenarnya <strong className="text-[#F7F1EB]">cara agar bisnis muncul di ChatGPT</strong> ketika orang menanyakan solusi yang kita tawarkan?
          </p>
          <p>
            Di titik inilah konsep <strong className="text-[#F45B1A]">GEO (Generative Engine Optimization)</strong> hadir. Bukan sebagai tombol ajaib atau jalan pintas viral, melainkan strategi sistematis tentang bagaimana informasi bisnismu disusun agar mudah dipahami, diverifikasi, dan dikutip oleh mesin pencarian kecerdasan buatan.
          </p>
        </div>
      </section>

      {/* ── BAGIAN 02: APA ITU GEO ──────────────────────── */}
      <section id="apa-itu-geo" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>BAGIAN 02 · DEFINISI DAN FONDASI ILMIAH</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Apa Itu GEO (Generative Engine Optimization)?
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4 font-outfit text-base sm:text-lg leading-relaxed text-[#D5CBC3]">
          <p>
            Jika dirangkum secara lugas, <strong className="text-[#F7F1EB]">apa itu GEO</strong>? <strong className="text-[#F45B1A]">Generative Engine Optimization (GEO)</strong> adalah pendekatan strategis dan teknis untuk meningkatkan kemungkinan konten atau informasi sebuah website dipahami, ditemukan, diambil, dan dikutip sebagai sumber rujukan oleh mesin pencarian generatif atau sistem AI ketika menyusun jawaban atas pertanyaan pengguna.
          </p>
          <p className="text-[#A99A90] text-sm sm:text-base">
            Konsep ini pertama kali diformulasikan secara akademis oleh Pranjal Aggarwal dkk. dari Princeton University, Georgia Tech, Allen Institute for AI, dan IIT Delhi dalam penelitian berjudul <em>"GEO: Generative Engine Optimization"</em> pada konferensi bergengsi <strong>ACM SIGKDD (KDD 2024)</strong>. Riset tersebut membuktikan bahwa konten yang menyajikan fakta jelas, kutipan otoritatif, dan struktur semantik yang rapi memiliki peluang hingga 30–40% lebih tinggi untuk dikutip oleh sistem AI generatif seperti Perplexity dan Bing Chat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#17100D] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#16A34A] font-geom font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>GEO YANG SEBENARNYA</span>
            </div>
            <ul className="font-outfit text-xs sm:text-sm text-[#A99A90] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Penyajian fakta bisnis secara transparan dan mudah diproses bot.</li>
              <li>Penerapan HTML semantik dan structured data baku (Schema.org).</li>
              <li>Penyelarasan identitas bisnis (nama, layanan, alamat, kontak) di internet.</li>
              <li>Pembangunan reputasi nyata melalui testimoni pelanggan dan portofolio asli.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#17100D] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#EF4444] font-geom font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>YANG BUKAN GEO</span>
            </div>
            <ul className="font-outfit text-xs sm:text-sm text-[#A99A90] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Bukan trik instan atau tombol ajaib agar bisnis otomatis viral.</li>
              <li>Bukan jaminan sepihak bahwa AI pasti mempromosikan tokomu.</li>
              <li>Bukan file teks rahasia yang wajib ditaruh di direktori website.</li>
              <li>Bukan pembunuh SEO tradisional, melainkan kelanjutan alaminya.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── BAGIAN 03: MENGAPA GEO RELEVAN UNTUK BISNIS ── */}
      <section id="mengapa-relevan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Compass className="w-4 h-4" />
            <span>BAGIAN 03 · KEBUTUHAN PASAR</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Mengapa GEO untuk Bisnis Mulai Sangat Relevan?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Penerapan <strong className="text-[#F7F1EB]">GEO untuk bisnis</strong> menjadi sangat relevan karena cara orang mengambil keputusan pembelian telah bergeser ke arah pencarian berbasis percakapan (<em>conversational search</em>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-geom font-bold text-[#D5CBC3]">
              Skenario A · Mesin Pencari Tradisional
            </span>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Pengguna mengetik: <code className="text-[#F45B1A]">"jasa website umkm aceh"</code>. Mesin menampilkan 10 daftar halaman. Pengguna harus membuka satu per satu, menyaring sendiri informasi promosi, dan menilai kredibilitasnya secara mandiri.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17100D] border border-[#F45B1A]/30 space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#F45B1A]/20 text-xs font-geom font-bold text-[#F45B1A]">
              Skenario B · Pencarian Berbasis AI Generatif
            </span>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Pengguna bertanya: <code className="text-[#F45B1A]">"Saya punya usaha klinik di Aceh Barat, butuh website profesional yang terintegrasi WhatsApp bot. Siapa yang kredibel?"</code> AI langsung menyusun jawaban komprehensif, menyebut opsi penyedia yang relevan, dan menyertakan kartu sumber rujukan.
            </p>
          </div>
        </div>

        <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
          Penting untuk digarisbawahi: Google tidak ditinggalkan. Google justru menyematkan fitur kecerdasan buatan seperti <em>AI Overviews</em> dan <em>AI Mode</em> langsung di atas hasil pencariannya. Jika website bisnismu tidak memiliki data faktual yang mudah dipahami, bisnismu tidak hanya berisiko tenggelam di hasil pencarian web biasa, tetapi juga hilang dari rangkuman kecerdasan buatan.
        </p>
      </section>

      {/* ── BAGIAN 04: ANALOGI PAK RT DAN TETANGGA BARU ── */}
      <section id="analogi-pak-rt" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Users className="w-4 h-4" />
            <span>BAGIAN 04 · STORYTELLING ANALOGI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Analogi Pak RT dan Tetangga Baru: Memahami Cara Kerja AI Tanpa Pusing
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A120E] to-[#120C09] border border-[#F45B1A]/30 shadow-xl space-y-5">
          <p className="font-outfit text-base sm:text-lg text-[#F7F1EB] leading-relaxed font-medium">
            Mekanisme AI mungkin terdengar rumit dengan istilah algoritma, tokenisasi, dan embedding. Namun secara logika dasar, cara AI mengenali bisnis sangat mirip dengan kehidupan bertetangga di sebuah komplek perumahan.
          </p>

          <div className="space-y-4 font-outfit text-base text-[#D5CBC3] leading-relaxed">
            <p>
              Bayangkan sebuah komplek perumahan bernama <strong>Komplek Digital</strong>. Suatu hari, datang warga baru yang baru saja pindah bernama <strong>Si AI</strong>.
            </p>
            <p>
              Sebagai tetangga baru, Si AI belum mengenal siapa pun. Ia belum tahu siapa yang tinggal di rumah nomor berapa, siapa yang memiliki usaha konveksi, siapa yang menyediakan jasa pembuatan website, atau bengkel mana yang pelayanannya jujur.
            </p>
            <p>
              Ketika suatu pagi Si AI ingin mencari rekomendasi jasa profesional, ia tidak langsung mengarang jawaban. Ia mendatangi <strong>Pak RT</strong> dan menyimak obrolan warga setempat:
            </p>
            <blockquote className="pl-4 border-l-2 border-[#F45B1A] italic text-[#F7F1EB]">
              "Pak RT, di lingkungan komplek kita ini, siapa yang menyediakan jasa pembuatan website dan AI Customer Service yang terpercaya?"
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
                <Building2 className="w-4 h-4" />
                <span>Pak RT = Perantara Informasi</span>
              </div>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Pak RT memegang buku registrasi warga, peta domisili, dan catatan izin usaha (melambangkan mesin pencari, web crawler, direktori bisnis, dan sistem indeks). Pak RT bertugas mengumpulkan dan merapikan data lingkungan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
                <Globe2 className="w-4 h-4" />
                <span>Rumah Warga = Website Bisnis</span>
              </div>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Rumah dengan papan nama jelas, nomor rumah terpasang rapi, dan pintu terbuka ramah melambangkan website resmi bisnis yang aktif, informatif, dan transparan bagi siapa pun yang berkunjung.
              </p>
            </div>
          </div>

          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Jika bisnismu memasang plang nama yang jelas di depan rumah (website resmi), tercatat rapi di pembukuan Pak RT (terindeks di search engine), serta sering dibicarakan baik oleh warga lain atas pelayanannya yang memuaskan (ulasan pelanggan dan reputasi eksternal), maka ketika Si AI bertanya kepada Pak RT, Pak RT dengan percaya diri akan menjawab:
            <span className="block mt-2 font-semibold text-[#F7F1EB]">
              "Oh, kalau butuh jasa website atau solusi AI untuk bisnis, silakan ke rumah Paham Digital Agency di Blok Barat. Catatan izin usahanya lengkap, portofolionya jelas, dan warga lain banyak yang puas."
            </span>
          </p>

          <div className="p-4 rounded-xl bg-[#17100D] border border-white/10 text-xs text-[#A99A90] font-outfit leading-relaxed">
            <strong className="text-[#F7F1EB]">Catatan Edukasi:</strong> Analogi Pak RT dan Tetangga Baru ini adalah model penalaran intuitif untuk memahami ekosistem penemuan informasi, bukan arsitektur komputasi AI secara harfiah. Di dunia nyata, AI memproses miliaran data digital melalui tahapan teknis terstruktur.
          </div>
        </div>
      </section>

      {/* ── BAGIAN 05: BAGAIMANA AI MENEMUKAN INFORMASI ── */}
      <section id="bagaimana-ai-menemukan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Cpu className="w-4 h-4" />
            <span>BAGIAN 05 · TAHAPAN TEKNIS</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Bagaimana Cara AI Menemukan Informasi Bisnis? 6 Tahapannya
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Banyak orang mengira AI membaca seluruh internet secara gaib dalam sekejap. Sebenarnya, <strong className="text-[#F7F1EB]">cara AI menemukan informasi bisnis</strong> melewati alur pemrosesan data yang teratur:
        </p>

        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Discovery (Penemuan Tautan)",
              desc: "Sistem mendeteksi URL website bisnismu melalui peta situs (sitemap.xml), tautan balik dari situs mitra, profil direktori lokal, atau pembaruan indeks webmaster.",
            },
            {
              step: "02",
              title: "Crawling (Penjelajahan Halaman)",
              desc: "Program penjelajah otomatis (web crawler) seperti Googlebot, OAI-SearchBot, atau Bingbot mengunjungi server webmu untuk mengunduh dokumen HTML, teks isi, dan aset halaman.",
            },
            {
              step: "03",
              title: "Processing & Indexing (Pemrosesan dan Pengindeksan)",
              desc: "Teks diuraikan (parsed), dibersihkan dari kode berlebih, dianalisis topik semantiknya, lalu disimpan ke dalam pangkalan data indeks mesin pencari atau repositori pengetahuan.",
            },
            {
              step: "04",
              title: "Retrieval & Grounding (Penarikan Dokumen Relevan)",
              desc: "Ketika pengguna mengajukan pertanyaan ke AI, sistem melakukan pencarian cepat (sering memakai teknik Retrieval-Augmented Generation / RAG) untuk mengambil kutipan dokumen web yang paling faktual dan relevan.",
            },
            {
              step: "05",
              title: "Synthesis (Penyusunan Rangkuman Jawaban)",
              desc: "Model bahasa (LLM) membaca dokumen yang ditarik tadi, mencocokkannya dengan maksud pertanyaan pengguna, lalu merangkai jawaban bahasa manusia yang mengalir lancar.",
            },
            {
              step: "06",
              title: "Citation & Attribution (Penyematan Sumber Kutipan)",
              desc: "Jika sistem pencarian generatif tersebut mendukung transparansi sumber (seperti ChatGPT Search, Perplexity, atau Google AI Overviews), nama domain dan tautan halamanmu disematkan sebagai referensi resmi.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#140E0B] border border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <span className="px-3 py-1.5 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/30 text-[#F45B1A] font-geom font-bold text-sm shrink-0">
                LANGKAH {item.step}
              </span>
              <div className="space-y-1">
                <h3 className="font-geom font-bold text-base text-[#F7F1EB]">{item.title}</h3>
                <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-[#17100D] border-l-4 border-amber-500 border-y border-r border-white/10 space-y-2 text-xs sm:text-sm font-outfit text-[#D5CBC3] leading-relaxed">
          <p className="font-semibold text-[#F7F1EB] flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Batasan Realistis yang Perlu Diketahui:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#A99A90]">
            <li>Tidak semua platform AI memiliki alur yang identik; sebagian mengandalkan mesin pencari mitra, sebagian menjalankan perayapan web mandiri.</li>
            <li>Halaman yang di-crawl belum tentu diindeks, dan halaman yang terindeks belum tentu ditarik pada setiap pertanyaan serupa.</li>
            <li>Jawaban AI bersifat dinamis dan kontekstual, sehingga tidak ada peringkat statis permanen sebagaimana daftar rangking konvensional.</li>
          </ul>
        </div>
      </section>

      {/* ── BAGIAN 06: ENAM SUMBER BISNIS UNTUK AI ───────── */}
      <section id="enam-sumber" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Database className="w-4 h-4" />
            <span>BAGIAN 06 · EKOSISTEM SUMBER INFORMASI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Enam Sumber Digital yang Membantu AI Mengenali Keberadaan Bisnismu
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          AI tidak hanya bergantung pada satu dokumen saja. Untuk menyusun pemahaman yang meyakinkan, sistem AI memverifikasi data bisnismu dari berbagai sumber digital:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "1. Website Resmi Bisnis",
              icon: Globe2,
              tag: "Pusat Otoritas",
              desc: "Sumber utama identitas bisnismu. Di sinilah nama resmi, detail layanan, spesifikasi produk, kontak, dan jangkauan area kerja dijelaskan secara langsung tanpa perantara.",
            },
            {
              title: "2. Profil Media Sosial",
              icon: Share2,
              tag: "Sinyal Keaktifan",
              desc: "Akun Instagram, TikTok, LinkedIn, dan YouTube menunjukkan bahwa bisnis Anda aktif beroperasi, konsisten menyapa pelanggan, dan memiliki eksistensi terkini.",
            },
            {
              title: "3. Ulasan & Testimoni Pelanggan",
              icon: Users,
              tag: "Validasi Sosial Organik",
              desc: "Ulasan jujur di Google Business Profile, forum, atau platform ulasan independen membantu AI menilai kepuasan pelanggan dan tingkat kepercayaan publik terhadap layanan Anda.",
            },
            {
              title: "4. Direktori Bisnis & Peta Digital",
              icon: Building2,
              tag: "Konsistensi Data NAP",
              desc: "Keseragaman data Name, Address, dan Phone di Google Maps, direktori industri, dan asosiasi usaha memperkuat keabsahan entitas fisik bisnismu di mata algoritma.",
            },
            {
              title: "5. Publikasi Berita & Media Online",
              icon: FileText,
              tag: "Liputan Pihak Ketiga",
              desc: "Artikel liputan media lokal maupun nasional memberikan bukti kuat bahwa bisnis Anda dikenal luas dan diakui kiprahnya di masyarakat.",
            },
            {
              title: "6. Jurnal & Penelitian Ilmiah",
              icon: BookOpen,
              tag: "Rujukan Ilmiah Berbobot",
              desc: "Untuk bisnis di sektor sains, teknologi, atau kesehatan, riset dan publikasi resmi menjadi bahan kutipan paling bernilai tinggi bagi model AI.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-geom font-semibold px-2.5 py-1 rounded-full bg-white/5 text-[#D5CBC3] border border-white/10">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">{item.title}</h3>
                <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── BAGIAN 07: PANDUAN IMPLEMENTASI WEBSITE (A-I) ── */}
      <section id="cara-optimasi-website" className="scroll-mt-28 space-y-8 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Layers className="w-4 h-4" />
            <span>BAGIAN 07 · PANDUAN IMPLEMENTASI TEKNIS</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Cara Agar Website Lebih Mudah Ditemukan dan Dipahami AI: 9 Langkah Praktis
          </h2>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Praktek <strong className="text-[#F7F1EB]">optimasi website untuk AI</strong> berakar dari fondasi teknis yang sehat, keterbukaan akses crawler, dan kejelasan struktur semantik. Berikut sembilan pilar nyata agar websitemu menjadi <strong className="text-[#F45B1A]">website mudah dibaca AI</strong>:
          </p>
        </div>

        {/* 7A: Akses Crawler */}
        <div id="akses-crawler" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>A. Pastikan Website Dapat Diakses Publik oleh Web Crawler</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Buka Pintu Akses Sebelum Mengharapkan Kunjungan AI
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Bot perayap tidak akan pernah bisa membaca informasi bisnismu jika akses jaringannya terblokir. Pengaturan firewall, CDN, WAF (Web Application Firewall), atau plugin proteksi hosting yang terlalu ketat seringkali tanpa sengaja menolak IP resmi bot mesin pencari.
          </p>
          <ul className="font-outfit text-xs sm:text-sm text-[#A99A90] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Pastikan halaman publik utama selalu mengembalikan kode status <strong>HTTP 200 OK</strong>.</li>
            <li>Hindari meletakkan rincian layanan atau kontak penting di balik form login atau popup script.</li>
            <li>Audit file <code className="text-[#F45B1A]">robots.txt</code> di root domain Anda secara berkala.</li>
          </ul>

          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Konseptual robots.txt Ramah AI Search:</span>
              <span className="text-[#16A34A]">200 OK</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed">
{`User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Mengizinkan penelusuran fitur ChatGPT Search
User-agent: OAI-SearchBot
Allow: /

Sitemap: https://pahamdigital.online/sitemap.xml`}
            </pre>
            <p className="text-[11px] font-outfit text-[#A99A90] italic">
              *Contoh ini adalah panduan konseptual. Jangan menimpa aturan keamanan khusus situs Anda tanpa memeriksa konfigurasi lingkungan produksi Anda terlebih dahulu.
            </p>
          </div>
        </div>

        {/* 7B: OAI-SearchBot vs GPTBot */}
        <div id="oai-searchbot-vs-gptbot" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>B. Pahami Perbedaan Antara OAI-SearchBot dan GPTBot</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Bedakan Crawler Fitur Pencarian dan Crawler Pelatihan Model
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Berdasarkan dokumentasi resmi OpenAI (<em>Overview of OpenAI Crawlers</em>), banyak pemilik website keliru mengira seluruh bot OpenAI memiliki tujuan yang sama. Keduanya memiliki fungsi yang terpisah secara independen:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#17100D] border border-emerald-500/30 space-y-2">
              <h4 className="font-geom font-bold text-sm text-emerald-400">OAI-SearchBot (Crawler Pencarian)</h4>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Digunakan untuk fitur <strong>ChatGPT Search</strong>. Bot ini menjelajah web secara aktual untuk merangkum jawaban dan menampilkan tautan sumber website Anda kepada pengguna.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#17100D] border border-blue-500/30 space-y-2">
              <h4 className="font-geom font-bold text-sm text-blue-400">GPTBot (Crawler Pelatihan Model)</h4>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                Digunakan untuk mengumpulkan bahan teks internet skala besar guna melatih model fondasi generasi mendatang. Keduanya dapat diatur secara mandiri.
              </p>
            </div>
          </div>

          <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
            Bagi pemilik usaha yang mencari tahu <strong className="text-[#F7F1EB]">cara agar bisnis muncul di ChatGPT</strong> pada fitur pencariannya, membuka akses bagi OAI-SearchBot adalah langkah utama, meskipun Anda memilih untuk menutup akses GPTBot demi melindungi konten dari pelatihan model.
          </p>
        </div>

        {/* 7C: Google Indexing */}
        <div id="google-indexing" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>C. Pastikan Google Dapat Menemukan dan Mengindeks Website</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Keterindeksan Google Adalah Pintu Masuk AI Overviews
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Sebagaimana ditegaskan panduan Google Search Central (<em>AI Features and Your Website</em>), Google AI Overviews tidak merayapi web secara terpisah dari pangkalan data Google Search. Agar website Anda memenuhi syarat untuk dimunculkan sebagai kartu tautan rujukan di AI Overviews, halaman Anda <strong className="text-[#F7F1EB]">harus sudah terindeks secara sah di Google Index</strong>.
          </p>
          <ul className="font-outfit text-xs sm:text-sm text-[#A99A90] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Daftarkan dan verifikasi properti domain Anda di Google Search Console (GSC).</li>
            <li>Submit file peta situs <code className="text-[#F45B1A]">sitemap.xml</code> yang dinamis dan terstruktur.</li>
            <li>Pastikan tag kanonikal konsisten agar Google tidak bingung dengan duplikasi URL.</li>
            <li>Hindari penggunaan meta tag <code className="text-[#F45B1A]">noindex</code> pada halaman penawaran layanan penting.</li>
          </ul>
        </div>

        {/* 7D: Konten Semantik */}
        <div id="konten-semantik" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>D. Buat Konten yang Dapat Dipahami Mesin dan Manusia</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Kejelasan Semantik: Tulis dengan Terstruktur, Lugas, dan Berisi
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Riset Microsoft Advertising (Krishna Madhavan, Oktober 2025) menegaskan bahwa sistem AI memprioritaskan konten yang memberikan jawaban langsung tanpa jargon pemasaran yang berbelit-belit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#17100D] border border-red-500/20 space-y-2">
              <span className="text-xs font-geom font-bold text-red-400">CONTOH AMBIGU (SULIT DIPAHAMI AI):</span>
              <p className="font-outfit text-xs text-[#A99A90] italic leading-relaxed">
                "Kami menghadirkan sinergi solusi digital paling terdepan dan revolusioner untuk mewujudkan kesuksesan tanpa batas bagi masa depan bisnis Anda."
              </p>
              <p className="text-[11px] text-[#A99A90] font-outfit">
                *(AI bingung: jasanya apa, teknologinya apa, targetnya siapa).*
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#17100D] border border-emerald-500/30 space-y-2">
              <span className="text-xs font-geom font-bold text-emerald-400">CONTOH LUGAS (SANGAT RAMAH AI):</span>
              <p className="font-outfit text-xs text-[#D5CBC3] leading-relaxed">
                "Paham Digital Agency melayani jasa pembuatan website profesional, aplikasi web kustom, sistem AI Customer Service berbasis WhatsApp, serta optimasi SEO dan GEO di Aceh dan seluruh Indonesia."
              </p>
              <p className="text-[11px] text-[#A99A90] font-outfit">
                *(Subjek, spesifikasi layanan, teknologi, dan cakupan wilayah langsung terbaca gamblang).*
              </p>
            </div>
          </div>

          <div className="space-y-2 font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
            <p><strong>Praktik terbaik struktur semantik:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Gunakan satu H1 utama yang mendeskripsikan topik artikel.</li>
              <li>Bagi penjelasan menggunakan subjudul H2 dan H3 secara bertingkat.</li>
              <li>Sediakan jawaban langsung (direct answer) 1–2 kalimat tepat di bawah pertanyaan judul sebelum menjabarkan rinciannya.</li>
              <li>Gunakan tabel untuk komparasi dan daftar berpoin untuk instruksi berurutan.</li>
            </ul>
          </div>
        </div>

        {/* 7E: Entity Consistency */}
        <div id="identitas-konsisten" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>E. Bangun Identitas Bisnis yang Konsisten (Entity Consistency)</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Jaga Keseragaman Data Entitas di Seluruh Platform Web
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Sistem AI mengaitkan fakta melalui grafik pengetahuan (Knowledge Graph). Jika nama tokomu di Instagram tertulis <em>"Kopi Barokah Meulaboh"</em>, di Google Maps tertulis <em>"Barokah Coffee & Roastery"</em>, dan di website tertulis <em>"CV Barokah Abadi Jaya"</em>, algoritma AI akan kesulitan menghubungkannya sebagai satu kesatuan usaha yang sama.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
            Pastikan nama merek dagang, nomor WhatsApp resmi, alamat kantor/toko, domain website, dan kategori usaha diselaraskan secara konsisten di seluruh kanal internet.
          </p>
        </div>

        {/* 7F: Structured Data */}
        <div id="structured-data" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>F. Gunakan Structured Data (Schema Markup) Secara Jujur</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Beri Mesin Label Baku Melalui Format JSON-LD
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Structured data (Schema.org) adalah kode terstandarisasi yang disematkan di balik halaman web untuk memberitahukan mesin pencari makna eksplisit dari isi halaman: apakah ini entitas perusahaan (<em>Organization</em>), profil usaha lokal (<em>LocalBusiness</em>), artikel edukasi (<em>BlogPosting</em>), atau daftar pertanyaan umum (<em>FAQPage</em>).
          </p>
          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Format Schema Organization (JSON-LD):</span>
              <span className="text-[#F45B1A]">schema.org</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Paham Digital Agency",
  "url": "https://pahamdigital.online",
  "logo": "https://pahamdigital.online/paham-logo-512.png",
  "description": "Partner transformasi digital untuk pembuatan website profesional, aplikasi web, dan AI Customer Service di Aceh.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Meulaboh, Aceh Barat",
    "addressRegion": "Aceh",
    "addressCountry": "ID"
  }
}`}
            </pre>
          </div>
          <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/20 text-xs font-outfit text-red-300">
            <strong>Peringatan Etika:</strong> Jangan memalsukan rating bintang, review fiktif, atau alamat rekayasa di structured data. Mesin pencari modern menerapkan sistem pendeteksi spam yang ketat; manipulasi schema dapat berujung sanksi penurunan visibilitas.
          </div>
        </div>

        {/* 7G: Reputasi Eksternal */}
        <div id="reputasi-eksternal" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>G. Bangun Reputasi Organik dari Sumber Eksternal</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Bukti Nyata Selalu Mengalahkan Klaim Sepihak
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Setiap pemilik bisnis bebas menulis di websitenya: <em>"Kami adalah nomor 1 paling terpercaya"</em>. Namun AI tidak menelan klaim itu mentah-mentah. AI mencari sinyal konfirmasi dari luar:
          </p>
          <ul className="font-outfit text-xs sm:text-sm text-[#A99A90] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Apakah ada pelanggan nyata yang memberikan review jujur dengan foto dan studi kasus?</li>
            <li>Apakah brand bisnismu pernah diulas positif di forum diskusi, blog industri, atau media berita lokal?</li>
            <li>Apakah portofolio proyek yang Anda cantumkan benar-benar aktif dan dapat diakses publik?</li>
          </ul>
        </div>

        {/* 7H: Mobile & Core Web Vitals */}
        <div id="mobile-performa" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>H. Perhatikan Kecepatan Akses dan Tampilan Mobile</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Website Cepat Mempermudah Bot Merayapi Seluruh Informasi
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Web crawler memiliki batas anggaran waktu (timeout). Jika website Anda membutuhkan waktu lebih dari 5 detik hanya untuk membuka beranda, bot perayap akan membatasi halaman yang dijelajahi. Website modern berbasis Next.js dengan skor Core Web Vitals tinggi mempermudah pengindeksan data secara menyeluruh.
          </p>
        </div>

        {/* 7I: Pembaruan Berkala */}
        <div id="pembaruan-berkala" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>I. Perbarui Informasi Bisnis Secara Berkala</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            AI Mengutamakan Informasi yang Segar dan Mutakhir
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Jika website bisnismu terakhir kali diperbarui tiga tahun lalu dengan nomor kontak yang mati, AI cenderung enggan merekomendasikannya karena berisiko mengecewakan pengguna. Lakukan pembaruan rutin minimal setiap kuartal agar informasi layanan tetap faktual.
          </p>
        </div>
      </section>

      {/* ── BAGIAN 08: SEO VS GEO (TABEL PERBANDINGAN) ── */}
      <section id="seo-vs-geo" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Scale className="w-4 h-4" />
            <span>BAGIAN 08 · ANALISIS KOMPARASI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Perbedaan SEO dan GEO: Tabel Perbandingan Mendalam
          </h2>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Memahami <strong className="text-[#F7F1EB]">perbedaan SEO dan GEO</strong> membantu kita mengalokasikan strategi secara bijak tanpa mengorbankan salah satunya:
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#140E0B]">
          <table className="w-full text-left font-outfit text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-[#1A120E] text-[#F7F1EB] font-geom">
                <th className="p-4 sm:p-5 w-1/4">Dimensi Penilaian</th>
                <th className="p-4 sm:p-5 w-3/8 text-[#D5CBC3]">SEO Tradisional</th>
                <th className="p-4 sm:p-5 w-3/8 text-[#F45B1A]">GEO (Generative Engine Optimization)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#A99A90]">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Tujuan Utama</td>
                <td className="p-4 sm:p-5">Meraih peringkat tertinggi di daftar halaman penelusuran (SERP).</td>
                <td className="p-4 sm:p-5 text-[#D5CBC3]">Menjadi sumber rujukan informasi yang dipahami dan dikutip dalam jawaban sintesis AI.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Pola Kueri Pengguna</td>
                <td className="p-4 sm:p-5">Kata kunci ringkas (contoh: <em>"jasa website banda aceh"</em>).</td>
                <td className="p-4 sm:p-5 text-[#D5CBC3]">Pertanyaan naratif lengkap (contoh: <em>"Cari agensi website di Aceh yang paham integrasi WhatsApp bot untuk klinik saya"</em>).</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Bentuk Hasil Akhir</td>
                <td className="p-4 sm:p-5">Daftar sepuluh tautan biru dan cuplikan deskripsi meta.</td>
                <td className="p-4 sm:p-5 text-[#D5CBC3]">Rangkuman paragraf terintegrasi, poin perbandingan, dan kartu tautan rujukan.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Fokus Optimasi Konten</td>
                <td className="p-4 sm:p-5">Kepadatan kata kunci, panjang artikel, heading, dan profil backlink.</td>
                <td className="p-4 sm:p-5 text-[#D5CBC3]">Kejelasan semantik, kutipan data faktual, statistik terverifikasi, dan struktur Q&amp;A.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Metrik Keberhasilan</td>
                <td className="p-4 sm:p-5">Organic traffic, ranking posisi keyword, impressions, dan CTR di Google.</td>
                <td className="p-4 sm:p-5 text-[#D5CBC3]">Citation frequency, grounding queries, brand mention share di jawaban AI.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#F7F1EB]">Hubungan Keduanya</td>
                <td className="p-4 sm:p-5 text-[#F7F1EB] font-medium bg-[#17100D]" colSpan={2}>
                  <strong>Kesimpulan:</strong> SEO membangun fondasi keterlihatan dan keterindeksan website di internet. GEO memperluas otoritas konten agar siap diserap dan dirangkum oleh mesin penjawab AI. Tanpa SEO, halaman sulit ditemukan crawler; tanpa GEO, halaman sulit dikutip AI.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── BAGIAN 09: MITOS DAN FAKTA GEO ──────────────── */}
      <section id="mitos-fakta" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>BAGIAN 09 · KLARIFIKASI INFORMASI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Mitos dan Fakta Seputar GEO yang Wajib Diluruskan
          </h2>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Sebagai topik yang sedang naik daun, banyak miskonsepsi yang merugikan pelaku usaha. Mari luruskan enam mitos paling umum:
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              mitos: "Mitos 1: GEO Menjamin Bisnis Pasti Direkomendasikan oleh Setiap AI",
              fakta: "Fakta: Tidak ada pakar atau agensi mana pun yang dapat menjamin rekomendasi 100%. Sistem AI bekerja secara probabilistik berdasarkan konteks prompt, preferensi pengguna, dan ketersediaan data saat itu. GEO memaksimalkan peluang keterpilihan, bukan memanipulasi mesin.",
            },
            {
              mitos: "Mitos 2: Cukup Menambahkan File 'ai.txt' atau 'llms.txt' Maka AI Otomatis Membaca Website",
              fakta: "Fakta: Format seperti llms.txt adalah inisiatif komunitas terbuka, bukan standar web resmi yang diwajibkan oleh Google, OpenAI, atau Microsoft. Crawler resmi tetap berpatokan pada standar protokol robots.txt, sitemap.xml, dan HTML semantik.",
            },
            {
              mitos: "Mitos 3: Semua AI Hanya Mengambil Informasi dari Mesin Pencari Google",
              fakta: "Fakta: Setiap platform memiliki ekosistem grounding masing-masing. Microsoft Copilot berbasis Bing; ChatGPT Search memadukan web crawler mandiri dan kemitraan konten; sedangkan Perplexity mengindeks puluhan juta sumber independen.",
            },
            {
              mitos: "Mitos 4: Akun Instagram yang Ramai Otomatis Membuat Bisnis Dikenal oleh ChatGPT",
              fakta: "Fakta: Sebagian besar konten media sosial berada di dalam ekosistem tertutup (walled garden) yang sulit dijelajahi secara mendalam oleh web crawler publik. Website resmi tetap menjadi sumber informasi publik paling stabil dan terstruktur.",
            },
            {
              mitos: "Mitos 5: Menimbun Banyak Kata Kunci Otomatis Meningkatkan Rekomendasi AI",
              fakta: "Fakta: AI modern berbasis Transformer sangat peka terhadap konteks bahasa alami. Teknik menimbun kata kunci (keyword stuffing) justru membuat teks tidak alami, merusak keterbacaan, dan dihindari oleh sistem sintesis AI.",
            },
            {
              mitos: "Mitos 6: GEO Akan Mematikan dan Menggantikan SEO Tradisional Sepenuhnya",
              fakta: "Fakta: SEO tetap menjadi prasyarat mutlak. Agar sebuah halaman dapat dijadikan kutipan oleh AI, halaman tersebut harus terlebih dahulu lolos tahap crawling, indexing, dan evaluasi kualitas konten teknis yang merupakan ranah utama SEO.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-geom font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{item.mitos}</span>
              </div>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed pl-6">
                {item.fakta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAGIAN 10: CHECKLIST GEO UNTUK UMKM ─────────── */}
      <section id="checklist-umkm" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <FileCheck2 className="w-4 h-4" />
            <span>BAGIAN 10 · TINDAKAN NYATA</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Checklist GEO Praktis untuk Pemilik UMKM dan Bisnis Lokal
          </h2>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Jadikan daftar periksa <strong className="text-[#F7F1EB]">strategi GEO untuk UMKM</strong> ini sebagai panduan audit langsung kesiapan kehadiran digital bisnismu:
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3 font-outfit text-xs sm:text-sm text-[#D5CBC3]">
          {[
            "Website resmi aktif dan dapat diakses publik dengan respon status HTTP 200.",
            "Halaman layanan memiliki deskripsi spesifik, alur kerja, dan informasi harga yang jelas.",
            "File robots.txt diperiksa dan tidak memblokir crawler pencarian penting secara tidak sengaja.",
            "OAI-SearchBot (crawler pencarian) diatur terpisah dari GPTBot (pelatihan model).",
            "Peta situs sitemap.xml selalu diperbarui dan disubmit ke Google Search Console.",
            "Website terdaftar resmi di Google Search Console dan rutin dipantau status pengindeksannya.",
            "Informasi data bisnis (Nama, Alamat, Kontak) konsisten di website, Google Maps, dan media sosial.",
            "Tersedia halaman profil 'Tentang Kami' yang memuat identitas pemilik dan domisili usaha.",
            "Konten menjawab pertanyaan spesifik calon pelanggan dengan gaya bahasa langsung dan lugas.",
            "Setiap klaim keunggulan disertai bukti nyata, foto portofolio, atau referensi sumber kredibel.",
            "Structured Data JSON-LD (Organization, LocalBusiness, atau BlogPosting) dipasang dengan valid.",
            "Tampilan website responsif di smartphone dan lolos uji kecepatan Core Web Vitals.",
            "Terdapat ulasan dan testimoni autentik dari pelanggan nyata yang dapat diverifikasi publik.",
            "Performa penelusuran dan keterlihatan website dipantau berkala minimal setiap kuartal.",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="w-5 h-5 rounded border border-[#F45B1A]/40 bg-[#F45B1A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A]">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAGIAN 11: CARA MENGUKUR HASIL GEO ───────────── */}
      <section id="cara-mengukur" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <BarChart3 className="w-4 h-4" />
            <span>BAGIAN 11 · EVALUASI DAN METRIK</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Cara Mengukur Apakah Upaya GEO Mulai Membuahkan Hasil
          </h2>
          <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
            GEO membutuhkan pemantauan berkala. Untuk mengevaluasi apakah informasi bisnismu mulai diserap sistem AI, terapkan empat metode pengukuran berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
              <Search className="w-4 h-4" />
              <span>1. Google Search Console (GSC)</span>
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Pantau laporan <em>Performance</em> untuk kueri-kueri penelusuran berformat pertanyaan panjang. Lonjakan tayangan pada kueri informatif menandakan konten Anda sering ditarik oleh algoritma Google untuk fitur jawaban terpadu.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
              <BarChart3 className="w-4 h-4" />
              <span>2. Bing Webmaster Tools (AI Performance)</span>
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Microsoft Bing menyediakan laporan resmi <em>AI Performance</em> yang menunjukkan seberapa sering halaman website Anda dikutip dalam pengalaman Microsoft Copilot beserta daftar <em>grounding queries</em> yang memicunya.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
              <Bot className="w-4 h-4" />
              <span>3. Pengujian Manual Terstruktur</span>
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Buka ChatGPT Search, Google Gemini, dan Microsoft Copilot dalam mode penyamaran (incognito). Ajukan pertanyaan wajar seputar industri bisnismu di kota tertentu. Catat apakah merekmu disebut, bagaimana konteks narasinya, dan apakah tautan website bisnismu disematkan.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm">
              <Globe2 className="w-4 h-4" />
              <span>4. Analitik Rujukan Web (Referral Traffic)</span>
            </div>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Periksa log analitik web Anda untuk memantau kunjungan yang bersumber dari domain rujukan AI seperti <code>chatgpt.com</code>, <code>android-app://com.openai.chatgpt</code>, atau <code>copilot.microsoft.com</code>.
            </p>
          </div>
        </div>
      </section>

      {/* ── BAGIAN 12: APAKAH BISNIS KECIL BISA ─────────── */}
      <section id="bisnis-kecil-bisa" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Lightbulb className="w-4 h-4" />
            <span>BAGIAN 12 · REALITAS UMKM</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Apakah Bisnis Kecil dan UMKM Bisa Memanfaatkan GEO?
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4 font-outfit text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Jawabannya sangat tegas: <strong className="text-[#F7F1EB]">Bisa, dan bisnis kecil justru memiliki keunggulan kompetitif lokal!</strong>
          </p>
          <p className="text-[#A99A90]">
            Banyak pemilik UMKM pesimistis karena mengira AI hanya akan merekomendasikan perusahaan multinasional beranggaran raksasa. Kenyataannya, ketika pengguna menanyakan rekomendasi berbasis lokalitas dan spesialisasi—misalnya <em>"siapa penyedia jasa website profesional di Meulaboh yang bisa integrasi WhatsApp bot"</em>—korporasi besar tidak memiliki data lokal yang spesifik dan relevan.
          </p>
          <p className="text-[#A99A90]">
            Sistem AI mencari <strong className="text-[#F7F1EB]">relevansi, kedekatan geografis, dan kejernihan informasi</strong>. Dengan membangun website yang menjelaskan layanan secara jujur, mendokumentasikan hasil kerja lokal, dan mengumpulkan ulasan pelanggan nyata, bisnis UMKM memiliki peluang sangat besar menjadi rujukan utama AI di wilayahnya.
          </p>
        </div>
      </section>

      {/* ── BAGIAN 13: KESIMPULAN ───────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>BAGIAN 13 · PESAN PENUTUP</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Kesimpulan: Membangun Kehadiran Digital yang Nyata di Era AI
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A120E] to-[#120C09] border border-[#F45B1A]/40 space-y-4 font-outfit text-base sm:text-lg text-[#D5CBC3] leading-relaxed">
          <p>
            Dulu, fokus digital kita adalah memastikan agar website ditemukan ketika seseorang mengetikkan kata kunci di Google. Hari ini, lanskap itu meluas: kita juga harus memastikan bahwa informasi bisnis kita cukup jelas, terstruktur, dan dapat dipercaya ketika seseorang meminta rekomendasi kepada asisten AI.
          </p>
          <p className="text-[#A99A90]">
            Ingatlah selalu analogi Pak RT dan Tetangga Baru. GEO bukanlah tentang "mengakali mesin AI" dengan trik tersembunyi atau manipulasi review. <strong className="text-[#F7F1EB]">GEO adalah tentang merapikan rumah bisnismu sendiri</strong>—membangun website profesional yang cepat dan informatif, menyajikan data bisnis yang konsisten, melayani pelanggan dengan tulus hingga mereka sukarela memberikan ulasan positif, serta mendokumentasikan portofoliomu secara terbuka.
          </p>
          <p className="font-semibold text-[#F7F1EB]">
            Ketika rumah bisnismu rapi, catatannya lengkap, dan reputasimu diakui warga sekitar, maka sistem AI mana pun yang bertamu ke lingkungan digital tidak akan ragu memperkenalkan bisnismu kepada calon pelanggan.
          </p>
        </div>
      </section>

      {/* ── DAFTAR SUMBER RISET WAJIB ──────────────────── */}
      <section id="daftar-sumber" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <BookOpen className="w-4 h-4" />
            <span>BAGIAN 14 · DAFTAR SUMBER RISET DAN RUJUKAN RESMI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Referensi Ilmiah dan Dokumentasi Resmi
          </h2>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Seluruh penjelasan teknis dan metodologi dalam artikel ini disusun berpatokan pada riset akademis terpublikasi dan dokumentasi webmaster resmi berikut:
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "1",
              title: "GEO: Generative Engine Optimization",
              author: "Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan, Ameet Deshpande",
              publisher: "Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD 2024)",
              date: "24 Agustus 2024",
              url: "https://doi.org/10.1145/3637528.3671900",
              note: "Mendasari definisi formal GEO, penelitian empiris pengaruh kutipan fakta terhadap keterlihatan di AI, serta bukti bahwa keterbacaan semantik meningkatkan peluang atribusi.",
            },
            {
              num: "2",
              title: "AI Features and Your Website",
              author: "Google Search Central Team",
              publisher: "Google Search Central Documentation",
              date: "Dokumentasi resmi, diakses 13 November 2026",
              url: "https://developers.google.com/search/docs/appearance/ai-features",
              note: "Mendasari penjelasan tentang AI Overviews, kelayakan pengindeksan sebagai syarat muncul sebagai tautan pendukung, dan keterikatan pada fondasi SEO webmaster Google.",
            },
            {
              num: "3",
              title: "Google's Guide to Optimizing for Generative AI Features on Google Search",
              author: "Google Search Central Team",
              publisher: "Google Search Central Fundamentals",
              date: "Dokumentasi resmi, diakses 13 November 2026",
              url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
              note: "Mendasari panduan penelusuran crawler, konten yang dapat diakses publik, penerapan semantic HTML, dan mitigasi barrier rendering JavaScript.",
            },
            {
              num: "4",
              title: "Overview of OpenAI Crawlers",
              author: "OpenAI Developer Platform",
              publisher: "OpenAI Documentation",
              date: "Dokumentasi resmi, diakses 13 November 2026",
              url: "https://developers.openai.com/api/docs/bots",
              note: "Mendasari pemisahan teknis independen antara OAI-SearchBot (crawler pencarian ChatGPT) dan GPTBot (crawler pengumpulan data pelatihan).",
            },
            {
              num: "5",
              title: "Publishers and Developers — FAQ",
              author: "OpenAI Help Center Team",
              publisher: "OpenAI Help Center",
              date: "Dokumentasi resmi, diakses 13 November 2026",
              url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
              note: "Mendasari panduan penemuan situs pada ChatGPT Search, atribusi tautan referensi, dan konfigurasi robots.txt untuk penerbit.",
            },
            {
              num: "6",
              title: "AI Performance in Bing Webmaster Tools",
              author: "Microsoft Bing Webmaster Team",
              publisher: "Bing Webmaster Tools Help Guide",
              date: "Dokumentasi resmi, diakses 13 November 2026",
              url: "https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c",
              note: "Mendasari metodologi pengukuran keterlihatan kutipan AI (citation activity) dan kueri dasar (grounding queries) di Microsoft Copilot.",
            },
            {
              num: "7",
              title: "Optimizing Your Content for Inclusion in AI Search Answers",
              author: "Krishna Madhavan",
              publisher: "Microsoft Advertising Official Blog",
              date: "8 Oktober 2025",
              url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers",
              note: "Mendasari prinsip penulisan terstruktur semantik, direct answers, hierarki heading, serta format tabel perbandingan agar mudah disintesis AI.",
            },
          ].map((src, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="font-geom font-bold text-sm text-[#F7F1EB]">
                  [{src.num}] {src.title}
                </h4>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#F45B1A] hover:underline shrink-0"
                >
                  <span>Buka Sumber</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="font-outfit text-xs text-[#D5CBC3]">
                <strong>Penulis / Penerbit:</strong> {src.author} ({src.publisher}) · <strong>Tanggal:</strong> {src.date}
              </p>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
                <strong>Keterangan Bagian:</strong> {src.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTIKEL TERKAIT (INTERNAL LINKS) ────────────── */}
      <section className="border-t border-white/10 pt-10 space-y-4">
        <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block">
          BACA JUGA ARTIKEL TERKAIT
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/blog/kenapa-bisnis-perlu-website/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline space-y-2"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
              ARTIKEL 03 · WEBSITE &amp; AI
            </span>
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2">
              Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Kenali manfaat website untuk UMKM, Google Search, dan AI melalui analogi rumah yang mudah dipahami.
            </p>
          </Link>

          <Link
            href="/blog/apa-itu-seo-website-sepi-pengunjung/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline space-y-2"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
              ARTIKEL 02 · SEO &amp; GOOGLEBOT
            </span>
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2">
              Cara Agar Website Muncul di Google: Kenali Apa Itu SEO
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Website sepi pengunjung? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.
            </p>
          </Link>

          <Link
            href="/blog/domain-vs-hosting/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline space-y-2"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
              ARTIKEL 01 · DASAR WEBSITE
            </span>
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2">
              Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Masih bingung apa beda antara hosting dan domain? Kenali fungsi dan perbedaannya lewat analogi rumah.
            </p>
          </Link>
        </div>
      </section>

      {/* ── SHARE BUTTON ────────────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa artikel edukasi GEO ini bermanfaat untuk bisnismu atau rekan pengusaha lainnya?
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
