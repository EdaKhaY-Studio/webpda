import React from "react";
import Link from "next/link";
import {
  Atom,
  Users,
  Workflow,
  Code2,
  ShieldCheck,
  FlaskConical,
  ChartNoAxesCombined,
  Gamepad2,
  Scale,
  Wallet,
  Terminal,
  TriangleAlert,
  MessageSquareCode,
  BookOpen,
  BookText,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Layers,
  Cpu,
  Database,
  Building2,
  FileText,
  Clock,
  Sparkles,
  BookOpenText,
  ListChecks,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleGemini4Carbon({ waShareUrl }: Props) {
  return (
    <div className="space-y-12">
      {/* ── SINOPSIS ARTIKEL ─────────────────────────────────── */}
      <section aria-label="Sinopsis Artikel" className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <BookOpenText className="w-4 h-4" />
          <span>SINOPSIS ARTIKEL</span>
        </div>
        <p className="text-xs font-outfit text-[#A99A90]">
          Kenali apa yang akan kamu pelajari dalam artikel ini.
        </p>
        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Dunia kecerdasan buatan memasuki babak baru dengan diluncurkannya Gemini 4 Carbon oleh Google DeepMind, model frontier yang dirancang khusus untuk pekerjaan kompleks dan penalaran mendalam. Artikel ini mengupas tuntas kapabilitas Carbon secara komprehensif melalui analogi dua petugas keamanan komplek perumahan antara varian Argon yang lincah dan Carbon sang investigator senior. Pembaca akan diajak menelusuri arsitektur agentic workflow berbasis koordinasi /swarm di Google Antigravity, kemampuan pemrograman perangkat lunak, tantangan cybersecurity defensif, hingga demonstrasi prototipe game 3D interaktif. Ulasan ini menyajikan perbandingan objektif skor benchmark terhadap GPT-6 dan Claude Opus 5.5, panduan memilih model yang hemat biaya, rincian paket langganan Google AI Ultra, kalkulasi tarif API resmi, hingga contoh prompt praktis. Panduan ini memberikan perspektif berimbang agar developer dan pemilik bisnis dapat mengadopsi AI secara bijak dan efisien.
        </p>
      </section>

      {/* ── SECTION 00: PENDAHULUAN & STORYTELLING SATPAM ────────── */}
      <section id="pendahuluan" className="scroll-mt-28 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Atom className="w-4 h-4" />
            <span>PENGANTAR · FRONTIER AI GOOGLE DEEPMIND</span>
          </div>

          <h2 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug">
            Kisah Dua Petugas Keamanan di Komplek Digital
          </h2>

          <p className="font-outfit text-base text-[#D5CBC3] leading-relaxed">
            Bayangkan sebuah komplek perumahan yang cukup besar. Di sana ada banyak rumah, kendaraan, warga, dan aktivitas yang berlangsung setiap hari. Komplek tersebut memiliki petugas keamanan yang bertugas menjaga lingkungan, memeriksa tamu, mengawasi CCTV, dan menangani berbagai laporan.
          </p>

          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Sekarang, bayangkan ada dua orang petugas keamanan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-geom text-[#38BDF8] font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#38BDF8]" />
                <span>Petugas Pertama — Junior Terlatih</span>
              </div>
              <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
                Masih tergolong junior, tetapi sudah menjalani pelatihan serius. Dia memahami aturan komplek, mengenali lingkungan, mampu memeriksa CCTV, dan bisa menangani sebagian besar permasalahan harian secara cepat dan efisien.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#140E0B] border border-[#F45B1A]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-geom text-[#F45B1A] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#F45B1A]" />
                <span>Petugas Kedua — Senior Spesialis</span>
              </div>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Senior yang terlatih khusus untuk situasi rumit. Ketika terjadi insiden besar, dia tidak hanya melihat satu CCTV, melainkan mengumpulkan bukti, memeriksa kronologi, mengoordinasikan tim, dan memastikan akar masalah tuntas.
              </p>
            </div>
          </div>

          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Kalau keduanya kita ibaratkan sebagai model kecerdasan buatan, siapa yang akan kamu panggil untuk menangani masalah besar? Kenalkan: <strong className="text-[#38BDF8]">Gemini 4 Argon</strong> dan <strong className="text-[#F45B1A]">Gemini 4 Carbon</strong>.
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed pt-2">
          <p>
            Tapi tunggu dulu. Carbon memang unsur kimia dengan simbol C pada tabel periodik. Bisa ditemukan dalam grafit pensil, intan berlian, hingga menjadi elemen dasar penyusun kehidupan biologis di bumi. Namun kali ini, kita tidak sedang membahas pelajaran kimia SMA.
          </p>
          <p>
            <strong className="text-[#F7F1EB]">Gemini 4 Carbon</strong> adalah model kecerdasan buatan frontier terbaru dari <strong className="text-[#F7F1EB]">Google DeepMind</strong> yang dirancang secara khusus untuk menangani pekerjaan-pekerjaan kompleks: mulai dari software engineering dan coding multi-tahap, audit keamanan siber (cybersecurity), penelitian ilmiah berbasis penalaran mendalam, analisis dokumen teknis berukuran raksasa, hingga perancangan dunia 3D dan game browser interaktif.
          </p>
          <p>
            Menariknya, model ini tidak hanya difokuskan untuk menjawab pertanyaan obrolan singkat. Carbon dirancang untuk menjalankan serangkaian tugas bertahap (multi-step tasks), memanggil dan mengoperasikan tools komputasi, memeriksa hasil pengerjaannya sendiri, dan melakukan iterasi perbaikan hingga tujuan tercapai.
          </p>
          <p>
            Namun, ada satu hal penting yang perlu kamu ketahui sejak awal: akses ke Carbon tidak sama dengan akses Gemini biasa. Model ini menuntut sumber daya komputasi tinggi dan memiliki skema akses tersendiri. Seberapa hebat sebenarnya model ini? Apakah ia lebih unggul dibanding Claude, GPT, atau DeepSeek? Apakah benar bisa membantu membuat game 3D? Dan apakah biayanya sebanding dengan nilainya? Mari kita telusuri secara lengkap dan objektif dari nol.
          </p>
        </div>
      </section>

      {/* ── SECTION 01: APA ITU GEMINI 4 CARBON ────────────────── */}
      <section id="01-apa-itu-gemini-4-carbon" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Atom className="w-4 h-4" />
            <span>BAGIAN 01 · ARSITEKTUR MODEL</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            1. Apa Itu Gemini 4 Carbon?
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4 font-outfit text-base sm:text-lg leading-relaxed text-[#D5CBC3]">
          <p>
            <strong className="text-[#F7F1EB]">Gemini 4 Carbon</strong> merupakan model kecerdasan buatan yang dikembangkan oleh <strong className="text-[#F7F1EB]">Google DeepMind</strong>{" "}
            <a href="#ref-1" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[1]</a>. Google mengumumkan Carbon secara resmi pada 28 Oktober 2026{" "}
            <a href="#ref-2" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[2]</a>{" "}
            dan mulai menyediakannya bagi developer, enterprise, ilmuwan, serta konsumen terpilih pada 10 November 2026{" "}
            <a href="#ref-3" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[3]</a>.
          </p>
          <p className="text-[#A99A90] text-sm sm:text-base">
            Carbon termasuk dalam keluarga frontier model Gemini generasi ke-4. Fokus utamanya bukan sekadar menghasilkan respons teks pendek yang cepat, melainkan menuntaskan pekerjaan yang menuntut penalaran mendalam (deep reasoning), pemanfaatan berbagai tools eksternal secara mandiri, dan siklus pengerjaan berdurasi panjang (long-horizon workflows).
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
            Area Fokus Utama Gemini 4 Carbon
          </h3>
          <p className="font-outfit text-sm text-[#A99A90]">
            Berdasarkan dokumentasi teknis dan model card yang dipublikasikan Google DeepMind, beberapa pilar perhatian utama Carbon mencakup:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { title: "Software Engineering & Coding", desc: "Penalaran kode multi-file, refactoring arsitektur, dan debugging sistemik.", icon: Code2 },
              { title: "Cybersecurity & Defensif", desc: "Audit kerentanan kode, dependency mapping, dan penyusunan vulnerability patches.", icon: ShieldCheck },
              { title: "Scientific Reasoning", desc: "Penalaran matematika tingkat lanjut, hipotesis penelitian, dan verifikasi eksperimen.", icon: FlaskConical },
              { title: "Analisis Dokumen Kompleks", desc: "Membaca blueprint teknis, diagram arsitektur, data keuangan, dan dokumen multimodal.", icon: FileText },
              { title: "Agentic Multi-Step Workflow", desc: "Perencanaan mandiri dengan banyak tahapan eksekusi dan verifikasi berkelanjutan.", icon: Workflow },
              { title: "Pengembangan 3D & Game Web", desc: "Generasi aset, pipeline WebGL/Three.js, physics script, dan audio koordinasi.", icon: Gamepad2 },
              { title: "Pembuatan Artefak Digital", desc: "Generasi spreadsheet formulaik, presentasi terstruktur, dan technical reports.", icon: Layers },
              { title: "Frontier Long-Horizon Reasoning", desc: "Ketahanan mempertahankan konteks dan logika dalam ratusan langkah berurutan.", icon: Cpu },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#17100D] border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-geom text-[#F45B1A] font-bold">
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0E0A08] border border-white/10 space-y-3 font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed">
          <p className="text-[#F7F1EB] font-medium">
            Google menggambarkan Carbon sebagai model dengan kapabilitas frontier pada <em>cybersecurity</em> dan <em>long-horizon agentic workflows</em>. Apa maksud konkretnya?
          </p>
          <p>
            Bayangkan kamu meminta AI membuat satu paragraf kalimat promosi. Pekerjaan tersebut relatif linier: AI mencerna instruksi, menyusun diksi yang menarik, lalu memberikan hasil dalam 3 detik.
          </p>
          <p>
            Sekarang bayangkan kamu meminta AI mengaudit sebuah project website Next.js berskala produksi: memeriksa struktur folder, mendeteksi sumber bug memory leak, menyusun rencana refactoring, memodifikasi 12 file berbeda, menjalankan test runner lokal, memverifikasi tidak ada breaking changes pada API kontrak, dan memastikan hasil akhirnya tampil sempurna di browser.
          </p>
          <p>
            Pekerjaan kedua jauh lebih rumit karena melibatkan puluhan mata rantai sebab-akibat. Satu kesalahan kecil pada file fondasi akan merusak seluruh halaman lainnya. Nah, <strong className="text-[#F45B1A]">Gemini 4 Carbon</strong> dibangun dari dasar untuk menyelesaikan tantangan-tantangan jenis kedua ini.
          </p>
        </div>

        {/* H3 Sub-section */}
        <div className="space-y-3 pt-2">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Bukan Sekadar Model untuk Menjawab Pertanyaan
          </h3>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Mayoritas masyarakat mengenal kecerdasan buatan sebagai chatbot percakapan: kita mengetik pertanyaan atau prompt, AI memberikan jawaban, lalu sesi tanya-jawab berakhir. Namun dalam dunia profesional, hampir tidak ada masalah nyata yang selesai hanya dengan satu kali lemparan jawaban.
          </p>
          <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              Siklus Kerja Software Engineer Nyata:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#D5CBC3] font-outfit list-disc pl-5">
              <li>Membedah dan memahami arsitektur codebase yang sudah berjalan.</li>
              <li>Menemukan akar masalah (root cause) dari sebuah log error atau stack trace.</li>
              <li>Menentukan file dan fungsi spesifik mana yang harus diperbarui.</li>
              <li>Memastikan perubahan tidak merusak modul atau dependency lain.</li>
              <li>Mengeksekusi build dan unit test untuk menguji stabilitas.</li>
              <li>Memeriksa tampilan visual dan alur logika pengguna secara teliti.</li>
            </ul>
          </div>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Carbon dirancang untuk mendampingi alur kerja multi-tahap ini melalui kombinasi penalaran mendalam (thinking process) dan eksekusi alat komputasi (tools execution). Tentu saja, keberhasilannya di dunia nyata tetap dipengaruhi oleh kejelasan instruksi, kualitas tools yang disediakan, izin akses yang aman, dan lingkungan pengerjaan yang terisolasi dengan baik.
          </p>
        </div>
      </section>

      {/* ── SECTION 02: SATPAM ARGON VS SATPAM CARBON ──────────── */}
      <section id="02-argon-vs-carbon-satpam" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Users className="w-4 h-4" />
            <span>BAGIAN 02 · ANALOGI EDUKATIF</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            2. Carbon Memang Unsur Kimia? Kenalan dengan Argon dan Carbon Lewat Cerita Satpam Komplek
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Mari kita kembali ke Komplek Digital untuk memahami mengapa Google merilis dua model dengan nama unsur kimia: <strong className="text-[#38BDF8]">Argon</strong> dan <strong className="text-[#F45B1A]">Carbon</strong>. Keduanya memiliki posisi yang saling melengkapi, bukan saling meniadakan.
        </p>

        {/* H3: Argon */}
        <div className="p-6 rounded-2xl bg-[#0D151D] border border-[#0284C7]/30 space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#38BDF8] font-bold">
            <Users className="w-4 h-4" />
            <span>SUB-BAGIAN 2.1 · MODEL HARIAN ANDAL</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Gemini 4 Argon: Satpam Junior yang Sudah Terlatih
          </h3>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Argon kita ibaratkan sebagai satpam junior yang sudah menjalani pelatihan disiplin militer yang sangat serius{" "}
            <a href="#ref-4" className="text-[#38BDF8] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 transition-colors">[4]</a>. Dia bukan penjaga gerbang amatir yang gagap ketika menghadapi masalah.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8] font-outfit pt-1">
            <div className="flex items-center gap-2 bg-[#091017] p-2.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Memahami seluruh SOP keamanan komplek</span>
            </div>
            <div className="flex items-center gap-2 bg-[#091017] p-2.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Mengenali wajah warga dan tata lingkungan</span>
            </div>
            <div className="flex items-center gap-2 bg-[#091017] p-2.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Memeriksa CCTV dan mendata kendaraan masuk</span>
            </div>
            <div className="flex items-center gap-2 bg-[#091017] p-2.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Menangani 80% laporan warga dengan sigap</span>
            </div>
          </div>
          <p className="font-outfit text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
            Kalau ada warga melapor paket kurir belum sampai, Argon dapat memeriksa catatan gerbang dan rekaman kamera pos masuk dalam hitungan detik. Jika ada mobil parkir menghalangi jalan, dia tahu nomor telepon warga yang bersangkutan.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Dalam dunia kecerdasan buatan nyata, <strong className="text-[#38BDF8]">Gemini 4 Argon</strong> adalah model kerja harian yang sangat kompeten untuk mayoritas kebutuhan software engineering, pembuatan konten, dan pekerjaan pengetahuan. Google bahkan memposisikan Argon sebagai pilihan standar yang paling efisien dari segi kecepatan dan biaya. Jadi, jangan salah paham: <em>Argon bukan model lemah hanya karena Carbon dirilis.</em>
          </p>
        </div>

        {/* H3: Carbon */}
        <div className="p-6 rounded-2xl bg-[#17100D] border border-[#F45B1A]/35 space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>SUB-BAGIAN 2.2 · INVESTIGATOR SPESIALIS</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Gemini 4 Carbon: Satpam Senior Spesialis Investigasi
          </h3>
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Sekarang, bayangkan sebuah insiden yang jauh lebih serius dan pelik terjadi di komplek.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
            Dalam satu malam, terjadi alarm gangguan sensor secara serentak di tiga gedung berbeda, dua kartu akses pintu server dinyatakan tidak valid, dan kabel transmisi kamera utama terputus. Petugas junior bisa saja panik atau hanya fokus pada satu pintu gerbang yang ia jaga.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
            Di sinilah satpam senior spesialis—yaitu <strong className="text-[#F45B1A]">Gemini 4 Carbon</strong>—mengambil alih komando. Dia tidak terburu-buru mengambil kesimpulan. Dia mengumpulkan seluruh log akses, membandingkan timestamp detik demi detik, menganalisis pola anomali, mengoordinasikan petugas lain untuk menyisir perimeter secara paralel, dan memverifikasi apakah ini sabotase terencana atau sekadar korsleting listrik jaringan gardu.
          </p>
          <div className="p-4 rounded-xl bg-[#0F0A08] border border-white/10 space-y-1.5 text-xs text-[#D5CBC3] font-outfit">
            <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block">
              Tugas Khas Gemini 4 Carbon:
            </span>
            <ul className="list-disc pl-5 space-y-1 text-[#A99A90]">
              <li>Menyelesaikan persoalan sistemik dengan rantai dependensi yang panjang.</li>
              <li>Pekerjaan coding yang melibatkan refactoring lintas database, API, dan UI.</li>
              <li>Debugging mendalam yang menuntut penelusuran puluhan berkas error.</li>
              <li>Operasi berbagai tools CLI, browser automation, dan code executor.</li>
              <li>Verifikasi berulang (adversarial testing) sebelum menganggap tugas selesai.</li>
            </ul>
          </div>
        </div>

        {/* ── CATATAN EDITORIAL ANALOGI KREATIF ── */}
        <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 text-xs font-outfit text-[#A99A90] space-y-1">
          <p className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider text-[11px]">
            CATATAN EDITORIAL PAHAM DIGITAL AGENCY:
          </p>
          <p>
            Analogi &ldquo;Satpam Junior Terlatih&rdquo; untuk Gemini 4 Argon dan &ldquo;Satpam Senior Spesialis&rdquo; untuk Gemini 4 Carbon merupakan ilustrasi kreatif dari Paham Digital Agency untuk mempermudah masyarakat memahami perbedaan tingkatan penalaran, bukan klasifikasi atau terminologi resmi dari Google.
          </p>
        </div>

        {/* H3: Biaya */}
        <div className="space-y-3 pt-2">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Mengapa Carbon Membutuhkan Biaya Lebih Besar?
          </h3>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Bayangkan kamu menyewa satpam senior dengan keahlian forensik dan intelijen khusus untuk melakukan investigasi berhari-hari. Tentu gajinya jauh lebih tinggi daripada petugas jaga pos reguler. Pekerjaannya membutuhkan lebih banyak waktu analisis, pengerahan tenaga ahli, pemeriksaan forensik yang cermat, dan koordinasi tim yang intensif.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Pada sistem kecerdasan buatan, hal yang sebanding dengan tenaga dan waktu berpikir tersebut adalah <strong className="text-[#F7F1EB]">compute resources</strong> dan <strong className="text-[#F45B1A]">thinking tokens</strong>.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Sebelum mengeluarkan satu baris jawaban, Carbon dapat menghabiskan ribuan token internal untuk menyusun rencana, memvalidasi asumsi, menjalankan simulasi kode di latar belakang, dan memeriksa potensi celah kesalahan. Inilah alasan mendasar mengapa biaya penggunaan Carbon—baik melalui paket langganan konsumen maupun konsumsi token API—jauh lebih premium dibanding model-model AI standar.
          </p>
        </div>
      </section>

      {/* ── SECTION 03: APA YANG DILAKUKAN CARBON PADA TUGAS KOMPLEKS ── */}
      <section id="03-cara-kerja-tugas-kompleks" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Workflow className="w-4 h-4" />
            <span>BAGIAN 03 · PROSES PENALARAN</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            3. Apa yang Sebenarnya Dilakukan Carbon Ketika Mendapatkan Tugas Kompleks?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Ketika kamu memberikan instruksi yang rumit kepada Gemini 4 Carbon, model ini tidak langsung menyemburkan teks seperti mesin tik otomatis. Google DeepMind membekali Carbon dengan arsitektur penalaran terstruktur yang mensimulasikan pola kerja seorang engineer senior.
        </p>

        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Membedah Tujuan dan Memetakan Cakupan Masalah",
              desc: "Model mengidentifikasi apa yang benar-benar diminta pengguna, batasan teknis yang berlaku, library yang boleh digunakan, dan target akhir yang harus dicapai tanpa merusak bagian lain.",
              icon: FileText,
            },
            {
              step: "02",
              title: "Menyusun Hipotesis dan Rencana Kerja Sistematis",
              desc: "Sebelum mengedit kode, Carbon merancang urutan langkah logis: file apa yang harus dibaca lebih dulu, fungsi apa yang terdampak, dan urutan dependensi yang harus disiapkan.",
              icon: Workflow,
            },
            {
              step: "03",
              title: "Membaca Berkas, Log, dan Konteks Relevan",
              desc: "Melalui integrasi tools, model menjelajahi folder project, membaca baris kode terkait, memeriksa riwayat error, dan mencocokkan tipe data API kontrak.",
              icon: Database,
            },
            {
              step: "04",
              title: "Mengeksekusi Tindakan atau Perubahan Bertahap",
              desc: "Carbon melakukan modifikasi secara presisi. Bukan mengganti keseluruhan file secara serampangan, melainkan menyisipkan atau merevisi baris yang tepat sesuai konvensi codebase.",
              icon: Code2,
            },
            {
              step: "05",
              title: "Menjalankan Pengujian Mandiri (Self-Verification)",
              desc: "Jika tools eksekusi tersedia, model menjalankan linter, build compiler, atau unit test untuk memverifikasi apakah perubahannya berhasil dieksekusi tanpa error baru.",
              icon: ShieldCheck,
            },
            {
              step: "06",
              title: "Iterasi dan Perbaikan Mandiri (Self-Correction)",
              desc: "Jika test runner mengeluarkan pesan error, Carbon tidak menyerah atau bertanya balik kepada pengguna. Ia membaca pesan error tersebut, menyadari letak kekeliruannya, dan langsung memperbaikinya.",
              icon: Cpu,
            },
          ].map((phase, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#140E0B] border border-white/10 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center font-geom font-bold text-sm text-[#F45B1A] shrink-0">
                {phase.step}
              </div>
              <div className="space-y-1">
                <h4 className="font-geom font-bold text-base text-[#F7F1EB]">{phase.title}</h4>
                <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-2 font-outfit text-sm text-[#D5CBC3] leading-relaxed">
          <p className="font-bold text-[#F7F1EB]">
            Catatan Penting Build-and-Verify Workflow:
          </p>
          <p className="text-[#A99A90]">
            Proses iterasi otomatis ini adalah esensi dari <em>build-and-verify workflow</em> yang dibahas Google untuk pengembangan software generasi baru. Namun jangan lupa: proses ini membutuhkan lingkungan eksekusi (sandbox/terminal) dan izin penggunaan tools yang aman. Model AI di atas cloud tidak secara otomatis memiliki akses ke server pribadi milikmu tanpa konfigurasi otorisasi yang sah.
          </p>
        </div>
      </section>

      {/* ── SECTION 04: AGENTIC WORKFLOW & FITUR /SWARM ────────── */}
      <section id="04-agentic-workflow-swarm" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Workflow className="w-4 h-4" />
            <span>BAGIAN 04 · MULTI-AGENT PARADIGM</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            4. Agentic Workflow: Mengapa Google Memperkenalkan Fitur `/swarm`?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Salah satu aspek paling revolusioner dari Gemini 4 Carbon adalah optimalisasinya dalam pola kerja <em>multi-agent</em>. Sebelum melangkah lebih jauh, mari kita samakan pemahaman mengenai istilah-istilah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <span className="text-xs font-geom uppercase tracking-wider text-[#38BDF8] font-bold block">
              Apa Itu AI Agent?
            </span>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
              Sistem perangkat lunak yang menggunakan model AI sebagai otak penalaran untuk mencapai target tertentu secara semi-otonom melalui siklus instruksi, observasi lingkungan, dan pemanggilan alat bantu (tools).
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#140E0B] border border-[#F45B1A]/30 space-y-2">
            <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold block">
              Apa Itu Multi-Agent Workflow?
            </span>
            <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
              Pola kolaborasi yang melibatkan beberapa agent AI terspesialisasi dengan peran, konteks, dan workspace berbeda yang saling bertukar pesan untuk menyelesaikan proyek besar yang mustahil diselesaikan satu agent saja.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Bayangkan sebuah tim pengembang website profesional:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#A99A90] text-xs sm:text-sm">
            <li><strong className="text-[#F7F1EB]">Software Architect:</strong> Merancang skema database dan pola komunikasi sistem.</li>
            <li><strong className="text-[#F7F1EB]">Frontend Engineer:</strong> Membangun antarmuka pengguna yang responsif dan interaktif.</li>
            <li><strong className="text-[#F7F1EB]">Backend Engineer:</strong> Menyusun endpoint API, keamanan autentikasi, dan logika transaksi.</li>
            <li><strong className="text-[#F7F1EB]">Security Reviewer:</strong> Menguji kerentanan kode dan celah kebocoran data.</li>
            <li><strong className="text-[#F7F1EB]">Adversarial QA Tester:</strong> Mencari celah error dan menguji skenario ekstrem (edge cases).</li>
          </ul>
          <p className="text-[#A99A90] pt-1">
            Google memperkenalkan fitur pratinjau <code className="text-[#F45B1A] bg-[#0B0807] px-2 py-0.5 rounded font-mono text-xs">/swarm</code> pada platform developer <strong className="text-[#F7F1EB]">Google Antigravity</strong>{" "}
            <a href="#ref-8" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[8]</a>. Dalam paradigma ini, <strong className="text-[#F45B1A]">Carbon</strong> bertindak sebagai <em>Lead Coordinator</em> atau <em>Architect</em> yang mengemban tugas dengan kebutuhan reasoning tertinggi, sementara model-model yang lebih cepat (seperti Flash atau Argon) ditugaskan untuk eksekusi paralel di cabang workspace terisolasi.
          </p>
        </div>

        {/* H3: Analogi Komplek */}
        <div className="space-y-3 pt-2">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Contoh Analogi di Komplek Perumahan
          </h3>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Satpam senior tidak harus menyusuri setiap jengkal pagar komplek seorang diri sambil membawa senter. Itu pemborosan energi yang tidak efisien.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Sebaliknya, dia membagi tim: Petugas A mengamankan gerbang utama, Petugas B memantau monitor CCTV, Petugas C menyisir area gedung parkir, dan Petugas D mendata laporan tamu. Satpam senior kemudian mengumpulkan semua temuan, mengevaluasi laporan keseluruhan, dan memutuskan tindakan keamanan terpadu.
          </p>
          <p className="font-outfit text-base text-[#A99A90] leading-relaxed">
            Begitulah cara kerja fitur swarm dan agentic workflow. Namun perlu dicatat: melibatkan banyak agent tidak secara otomatis membuat pekerjaan jadi lebih baik jika tidak ada sistem pembagian tugas, koordinasi konteks, dan verifikasi silang yang disiplin. Fitur <code className="text-[#F45B1A] font-mono text-xs">/swarm</code> sendiri berstatus preview dan aksesnya mengikuti kebijakan akun serta ketersediaan produk Google.
          </p>
        </div>
      </section>

      {/* ── SECTION 05: KEMAMPUAN UTAMA ────────────────────────── */}
      <section id="05-kemampuan-utama" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Code2 className="w-4 h-4" />
            <span>BAGIAN 05 · DOMAIN KEUNGGULAN</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            5. Kemampuan Gemini 4 Carbon: Coding, Cybersecurity, dan Penelitian Ilmiah
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sebagai model penalaran frontier, Gemini 4 Carbon dirancang secara spesifik untuk memecahkan persoalan pada domain-domain berisiko tinggi dan bernilai strategis.
        </p>

        <div className="space-y-6">
          {/* A. Software Engineering */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <Code2 className="w-4 h-4" />
              <span>A · SOFTWARE ENGINEERING &amp; CODING</span>
            </div>
            <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
              Navigasi Codebase Besar dan Debugging Sistemik
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Dalam pengujian dan penerapannya, Carbon sangat kompeten untuk membantu engineer dalam:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#D5CBC3] font-outfit">
              <li>Menjelajahi dan memahami codebase besar dengan ribuan baris kode yang saling terpaut.</li>
              <li>Menganalisis stack trace error yang tidak jelas dan menemukan file sumber masalah.</li>
              <li>Merumuskan strategi refactoring arsitektur tanpa merusak API contracts.</li>
              <li>Menyusun rangkaian unit test komprehensif untuk skenario normal maupun edge case.</li>
              <li>Menjalankan workflow pengembangan end-to-end melalui agen otomasi.</li>
            </ul>
            <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/5 text-xs text-[#A99A90] font-outfit">
              <strong className="text-[#F7F1EB]">Contoh Kasus Nyata:</strong> Kamu mengelola website e-commerce yang memiliki katalog produk, sistem keranjang belanja, dashboard admin, dan integrasi WhatsApp gateway. Ketika terjadi kegagalan transaksi pada kondisi diskon tertentu, AI harus memahami relasi antara state management di frontend, middleware otentikasi di backend, dan skema harga di database. Mencari satu typo baris kode biasa tidak akan cukup—dan di sinilah daya penalaran Carbon bersinar.
            </div>
          </div>

          {/* B. Cybersecurity */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>B · CYBERSECURITY &amp; KEAMANAN SIBER</span>
            </div>
            <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
              Penemuan Kerentanan dan Pembuatan Patch Pertahanan
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Google DeepMind memberikan sorotan khusus pada kapabilitas Carbon dalam penemuan kerentanan (vulnerability discovery) dan pembuatan patch perbaikan sistem. Dalam konteks pertahanan siber (defensive security), model ini dapat membantu:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#D5CBC3] font-outfit">
              <li>Meninjau kode sumber untuk mendeteksi celah keamanan klasik seperti SQL injection, SSRF, broken access control, hingga memory corruption.</li>
              <li>Menganalisis pohon dependency pihak ketiga untuk menemukan paket usang yang memiliki CVE aktif.</li>
              <li>Mengidentifikasi miskonfigurasi keamanan pada file deployment Docker atau cloud infrastructure.</li>
              <li>Membantu merancang patch keamanan darurat dan memverifikasi bahwa patch tersebut tidak merusak fungsionalitas normal aplikasi.</li>
            </ul>
            <div className="p-4 rounded-xl bg-[#1B110B] border border-[#F45B1A]/30 text-xs text-[#D5CBC3] font-outfit space-y-1">
              <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block">
                Catatan Regulasi &amp; Fairwind Program:
              </span>
              <p className="text-[#A99A90]">
                Kemampuan siber tingkat lanjut membawa risiko besar jika disalahgunakan. Google menerapkan pagar pengaman ketat dan menyediakan akses riset cyber defensif melalui <strong>Fairwind Program</strong> bagi organisasi dan peneliti keamanan terverifikasi. Akses fitur siber khusus ini tidak dibuka bebas tanpa pembatasan kepada seluruh pengguna publik demi mencegah penyalahgunaan ofensif.
              </p>
            </div>
          </div>

          {/* C. Scientific Reasoning */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>C · SCIENTIFIC REASONING &amp; RISET AKADEMIK</span>
            </div>
            <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
              Penalaran Hipotesis Ilmiah Terbuka
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Riset akademis dan sains membutuhkan lebih dari sekadar merangkum artikel ilmiah. Peneliti dituntut menghubungkan teori lintas disiplin, menantang asumsi awal, mengevaluasi metodologi eksperimen, dan menganalisis kumpulan data mentah. Carbon dirancang untuk membantu memecahkan masalah penelitian ilmiah yang terbuka dan abstrak. Namun demikian, kesimpulan ilmiah yang dihasilkan AI tetap wajib divalidasi oleh peneliti manusia melalui metode empiris dan literatur primer.
            </p>
          </div>

          {/* D. Knowledge Work & Artifacts */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <Layers className="w-4 h-4" />
              <span>D · KNOWLEDGE WORK &amp; ARTEFAK DIGITAL</span>
            </div>
            <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB]">
              Generasi Laporan, Spreadsheet, dan Dokumen Presisi Tinggi
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Dalam operasional korporasi dan konsultan profesional, Carbon difungsikan untuk memproduksi artefak kerja digital yang rapi dan terverifikasi: laporan audit mendalam, model spreadsheet keuangan dengan formula kompleks yang valid, dokumen arsitektur teknis, dan visualisasi data bisnis yang siap dipresentasikan kepada dewan direksi.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: PERBANDINGAN BENCHMARK LENGKAP ─────────── */}
      <section id="06-perbandingan-benchmark" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <ChartNoAxesCombined className="w-4 h-4" />
            <span>BAGIAN 06 · DATA &amp; EVALUASI RESMI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            6. Perbandingan Gemini 4 Carbon dengan Argon, GPT-6 Astra, dan Claude Opus 5.5
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Apakah Carbon benar-benar lebih unggul dibanding pesaing utamanya di industri? Untuk menjawab pertanyaan ini secara objektif, kita merujuk langsung pada data evaluasi yang dipublikasikan oleh <strong className="text-[#F7F1EB]">Google DeepMind dalam Gemini 4 Carbon Model Card</strong>{" "}
            <a href="#ref-1" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[1]</a>{" "}
            dengan periode evaluasi hingga Oktober 2026.
          </p>
          <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/5 text-xs text-[#A99A90] space-y-1">
            <p className="font-bold text-[#F7F1EB]">Catatan Metodologi:</p>
            <p>
              Benchmark menguji model pada kumpulan tugas spesifik dengan parameter pengujian yang terkontrol ketat. Angka benchmark mencerminkan performa pada metodologi tersebut dan tidak otomatis menjamin hasil yang sama persis untuk setiap skenario pekerjaan harian.
            </p>
          </div>
        </div>

        {/* 6A: Kemampuan Umum */}
        <div className="space-y-3 pt-2">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            A. Kemampuan Umum (General Capabilities)
          </h3>
          <p className="font-outfit text-sm text-[#A99A90]">
            Mengukur kecerdasan umum dan evaluasi holistik model frontier:
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">AA Index v5.0</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">59</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">50</td>
                  <td className="py-3 px-4 text-right font-mono">57</td>
                  <td className="py-3 px-4 text-right font-mono">58</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Vals Index v2.2</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">70,4%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">69,2%</td>
                  <td className="py-3 px-4 text-right font-mono">65,0%</td>
                  <td className="py-3 px-4 text-right font-mono">70,2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            *AA Index merupakan skor komposit indeks independen dari Artificial Analysis <a href="#ref-9" className="text-[#F45B1A]">[9]</a>, bukan persentase kelulusan. Pada kedua metrik umum ini, Carbon mencatat angka terdepan, disusul ketat oleh Claude Opus 5.5 dan GPT-6 Astra.
          </p>
        </div>

        {/* 6B: Coding & Software Engineering */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            B. Coding dan Software Engineering
          </h3>
          <p className="font-outfit text-sm text-[#A99A90]">
            Evaluasi penyelesaian issue repository nyata dan interaksi terminal:
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">SWE-sweep</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">9,6%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">4,3%</td>
                  <td className="py-3 px-4 text-right font-mono">9,5%</td>
                  <td className="py-3 px-4 text-right font-mono">3,6%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">FrontierSWE 2</td>
                  <td className="py-3 px-4 text-right font-mono">61,2%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">55,0%</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F7F1EB]">65,5%</td>
                  <td className="py-3 px-4 text-right font-mono">62,3%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Terminal-Bench 4.0</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">65,2%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">57,1%</td>
                  <td className="py-3 px-4 text-right font-mono">59,1%</td>
                  <td className="py-3 px-4 text-right font-mono">59,6%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 text-xs text-[#A99A90] font-outfit space-y-1.5">
            <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block">
              Pelajaran Kritis dari Data Coding:
            </span>
            <ul className="list-disc pl-5 space-y-1">
              <li>Carbon menunjukkan lonjakan performa signifikan dibanding Argon di seluruh benchmark software engineering.</li>
              <li>GPT-6 Astra memimpin pada benchmark <strong>FrontierSWE 2</strong> (65,5%), membuktikan ketangguhannya dalam penyelesaian issue codebase kompleks.</li>
              <li>Carbon mencatatkan skor tertinggi pada <strong>Terminal-Bench 4.0</strong> (65,2%) <a href="#ref-11" className="text-[#F45B1A]">[11]</a>, menunjukkan keunggulan eksekusi perintah shell dan CLI.</li>
              <li>Pada <strong>SWE-sweep</strong> <a href="#ref-10" className="text-[#F45B1A]">[10]</a>, Carbon (9,6%) dan GPT-6 Astra (9,5%) berada pada posisi yang sangat berimbang.</li>
              <li><strong>Kesimpulan:</strong> Tidak ada model tunggal yang memenangkan seluruh pengujian coding secara mutlak.</li>
            </ul>
          </div>
        </div>

        {/* 6C: Computer Use & Agent */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            C. Penggunaan Komputer dan Pekerjaan Berbasis Agent (Computer Use)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Agents' Last Exam v1.1</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">77,4%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">69,0%</td>
                  <td className="py-3 px-4 text-right font-mono">73,1%</td>
                  <td className="py-3 px-4 text-right font-mono">71,6%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">OSWorld-2.1</td>
                  <td className="py-3 px-4 text-right font-mono">81,5%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">74,7%</td>
                  <td className="py-3 px-4 text-right font-mono">80,9%</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F7F1EB]">87,2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            *Fakta menarik: Carbon unggul pada <em>Agents' Last Exam</em>, namun Claude Opus 5.5 mempertahankan keunggulan kuat pada <em>OSWorld-2.1</em> (87,2%). Kemampuan bernavigasi dalam GUI sistem operasi desktop ternyata berbeda dengan kemampuan mengeksekusi pipeline logika murni.
          </p>
        </div>

        {/* 6D: Pekerjaan Harian & Otomasi Bisnis */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            D. Pekerjaan Harian dan Otomasi (Automation &amp; Business Simulation)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">AutomationBench</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">53,9%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">51,3%</td>
                  <td className="py-3 px-4 text-right font-mono">41,4%</td>
                  <td className="py-3 px-4 text-right font-mono">42,5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
            Google Model Card juga mencantumkan evaluasi simulasi pengelolaan vending machine virtual (<strong>Vending-Bench 2</strong>):
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A] max-w-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-2.5 px-4">Model</th>
                  <th className="py-2.5 px-4 text-right">Saldo Simulasi Akhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-2 px-4 font-medium text-[#F45B1A]">Gemini 4 Carbon</td>
                  <td className="py-2 px-4 text-right font-mono font-bold text-[#F45B1A]">US$16.484</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-2 px-4 font-medium text-[#38BDF8]">Gemini 4 Argon</td>
                  <td className="py-2 px-4 text-right font-mono text-[#38BDF8]">US$13.718</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-2 px-4 font-medium text-[#F7F1EB]">GPT-6 Astra</td>
                  <td className="py-2 px-4 text-right font-mono">US$15.515</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-2 px-4 font-medium text-[#F7F1EB]">Claude Opus 5.5</td>
                  <td className="py-2 px-4 text-right font-mono">US$9.235</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            *Catatan: Vending-Bench 2 adalah simulasi pengelolaan inventaris bisnis dalam lingkungan terkontrol. Angka saldo tersebut bukan uang riil atau bukti bahwa AI dapat menjalankan bisnis nyata secara independen tanpa manusia.
          </p>
        </div>

        {/* 6E: Visual & Dokumen */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            E. Pemahaman Visual dan Dokumen Kompleks (Multimodal &amp; Blueprints)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Chartography</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">72,5%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">71,6%</td>
                  <td className="py-3 px-4 text-right font-mono">71,0%</td>
                  <td className="py-3 px-4 text-right font-mono">66,3%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Blueprint-Bench 2</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">58,6%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">54,4%</td>
                  <td className="py-3 px-4 text-right font-mono">49,7%</td>
                  <td className="py-3 px-4 text-right font-mono">51,2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            Kategori ini sangat vital karena pekerjaan profesional arsitek, dokter, dan engineer banyak bertumpu pada diagram CAD, denah teknik, dan bagan visual multimodal. Carbon memimpin pada kedua benchmark pemahaman visual ini.
          </p>
        </div>

        {/* 6F: Long-Context Reasoning */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            F. Long-Context Reasoning (Jendela Konteks Raksasa)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">GraphWalks 256k–1M BFS F1</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">96,2%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">84,2%</td>
                  <td className="py-3 px-4 text-right font-mono">71,8%</td>
                  <td className="py-3 px-4 text-right font-mono">66,8%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            Model card mencantumkan jendela konteks gabungan (input + output) hingga <strong>1 juta token</strong>. Pada pengujian penelusuran graf informasi dalam konteks raksasa (GraphWalks), Carbon mencatatkan skor akurasi 96,2%. Namun perlu diingat: jendela konteks besar tidak menjamin seluruh instruksi di tengah dokumen selalu diingat tanpa degradasi atensi (needle in a haystack effect).
          </p>
        </div>

        {/* 6G: Sains & Matematika */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            G. Penalaran Sains dan Matematika
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">RiemannBench</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">80,0%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">76,0%</td>
                  <td className="py-3 px-4 text-right font-mono">72,0%</td>
                  <td className="py-3 px-4 text-right font-mono">69,6%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">Terminal-Bench-Science 0.1</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">64,8%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">52,9%</td>
                  <td className="py-3 px-4 text-right font-mono">63,3%</td>
                  <td className="py-3 px-4 text-right font-mono">59,0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            Carbon menunjukkan kapabilitas penalaran matematika abstrak dan terminal sains yang solid, mengungguli model-model sekelasnya pada dataset pengujian ini.
          </p>
        </div>

        {/* 6H: Cybersecurity */}
        <div className="space-y-3 pt-4">
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            H. Cybersecurity (Keamanan Siber Defensif)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
              <thead>
                <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-3 px-4">Benchmark</th>
                  <th className="py-3 px-4 text-right text-[#F45B1A]">Carbon</th>
                  <th className="py-3 px-4 text-right text-[#38BDF8]">Argon</th>
                  <th className="py-3 px-4 text-right">GPT-6 Astra</th>
                  <th className="py-3 px-4 text-right">Claude Opus 5.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">CTF Challenges</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">70,7%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">56,9%</td>
                  <td className="py-3 px-4 text-right font-mono">62,8%</td>
                  <td className="py-3 px-4 text-right font-mono">60,2%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">CyberSecBench-Adv</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">58,2%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">51,4%</td>
                  <td className="py-3 px-4 text-right font-mono">49,0%</td>
                  <td className="py-3 px-4 text-right font-mono">52,5%</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-[#F7F1EB]">High-Risk Discovery &amp; Patching</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#F45B1A]">61,0%</td>
                  <td className="py-3 px-4 text-right font-mono text-[#38BDF8]">44,0%</td>
                  <td className="py-3 px-4 text-right font-mono">50,0%</td>
                  <td className="py-3 px-4 text-right font-mono">48,0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A99A90] font-outfit">
            *Hasil cybersecurity pada model card memiliki konteks evaluasi akses aman melalui Fairwind Program. Carbon unggul signifikan pada tantangan Capture The Flag (CTF) dan penambalan kerentanan berisiko tinggi.
          </p>
        </div>
      </section>

      {/* ── SECTION 07: DEEPSEEK, GROK, DAN QWEN ───────────────── */}
      <section id="07-deepseek-grok-qwen" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Scale className="w-4 h-4" />
            <span>BAGIAN 07 · EKOSISTEM KOMPETITOR</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            7. Bagaimana dengan DeepSeek, Grok, dan Qwen?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Model card resmi Google DeepMind berfokus membandingkan Carbon dengan Argon, GPT-6 Astra, dan Claude Opus 5.5 karena ketiganya berada di kelas <em>frontier closed-weights enterprise</em>. Namun di komunitas developer dan open-source, ada pemain-pemain tangguh lain yang patut diperhatikan.
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
            <thead>
              <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                <th className="py-3 px-4">Keluarga AI</th>
                <th className="py-3 px-4">Pengembang</th>
                <th className="py-3 px-4">Fokus &amp; Keunggulan Ekosistem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-4 font-bold text-[#F7F1EB]">DeepSeek</td>
                <td className="py-3 px-4 text-[#A99A90]">DeepSeek AI</td>
                <td className="py-3 px-4">
                  Sangat populer di kalangan pengembang karena efisiensi arsitektur Mixture-of-Experts (MoE), kemampuan coding open-weights yang luar biasa kuat, dan rasio biaya per token yang sangat bersahabat.
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-4 font-bold text-[#F7F1EB]">Grok</td>
                <td className="py-3 px-4 text-[#A99A90]">xAI</td>
                <td className="py-3 px-4">
                  Terintegrasi erat dengan platform X (Twitter), memiliki akses data real-time percakapan global yang cepat, penalaran reasoning tajam, dan gaya komunikasi yang lebih lugas tanpa filter berlebih.
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-4 font-bold text-[#F7F1EB]">Qwen</td>
                <td className="py-3 px-4 text-[#A99A90]">Alibaba Cloud</td>
                <td className="py-3 px-4">
                  Model multilingual yang sangat kuat di pasar Asia, performa luar biasa pada matematika dan coding open-source, serta fleksibilitas tinggi untuk di-deploy di infrastruktur server privat on-premise.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
          Mengapa perbandingan ini penting? Karena dunia AI tidak hanya dihuni oleh Google dan OpenAI. Jika bisnismu membutuhkan hosting model di server sendiri untuk kepatuhan privasi data ketat, keluarga open-weights seperti Qwen atau DeepSeek sering kali menjadi pertimbangan yang jauh lebih realistis dibanding model cloud tertutup.
        </p>
      </section>

      {/* ── SECTION 08: PEMBUATAN 3D DAN GAME ──────────────────── */}
      <section id="08-pembuatan-3d-dan-game" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Gamepad2 className="w-4 h-4" />
            <span>BAGIAN 08 · RISET KREATIF 3D</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            8. Gemini 4 Carbon untuk Pembuatan 3D dan Game: Ini yang Paling Menarik!
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Salah satu aspek demonstrasi yang paling mencuri perhatian dunia teknologi adalah kemampuan Gemini 4 Carbon dalam membantu membangun proyek visual 3D interaktif dan video game berbasis web.
        </p>

        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Google mendemonstrasikan bagaimana Carbon, saat diintegrasikan dengan platform agentic seperti <strong className="text-[#F7F1EB]">Antigravity</strong>, dapat mengorkestrasi pipeline pengembangan game browser menggunakan ekosistem tools nyata: <strong>Blender API (Python scripting)</strong>, <strong>Three.js</strong>, <strong>WebGL</strong>, <strong>Web Audio API</strong>, dan simulasi fisika rigid-body.
        </p>

        <div className="space-y-4 pt-2">
          {/* Demo A */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <Gamepad2 className="w-4 h-4" />
              <span>A · GAME OPEN-WORLD BROWSER</span>
            </div>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              Pelikan Mengendarai GBike di Sekitar Danau
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Google memamerkan demo sebuah game open-world berbasis browser yang menampilkan karakter seekor burung pelikan yang mengendarai sepeda GBike khas kampus Google.
            </p>
            <div className="p-4 rounded-xl bg-[#0B0807] border border-white/5 space-y-1.5 text-xs text-[#D5CBC3] font-outfit">
              <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block">
                Bagaimana Carbon Mengerjakannya?
              </span>
              <ul className="list-disc pl-5 space-y-1 text-[#A99A90]">
                <li>Mengoordinasikan agent untuk membuat script generator mesh 3D di Blender headless.</li>
                <li>Menghasilkan terrain dan lanskap danau menggunakan shader Three.js prosedural.</li>
                <li>Menyusun logika kendali kemudi sepeda, gravitasi, dan deteksi tabrakan (bounding collision).</li>
                <li>Mengintegrasikan efek suara audio sintesis via Web Audio API tanpa aset eksternal berat.</li>
                <li>Menjalankan iterasi perbaikan bug ketika sepeda mengalami glitch pada medan miring.</li>
              </ul>
            </div>
          </div>

          {/* Demo B */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <Building2 className="w-4 h-4" />
              <span>B · REKONSTRUKSI ARSITEKTUR TEKNIS</span>
            </div>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              Rekonstruksi Gedung 3D dari Dokumen Teknik
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Dalam skenario arsitektur sipil, Carbon diberikan dokumen cetak biru (blueprint) PDF gedung dua dimensi yang rumit. Model membaca dimensi angka, ketebalan dinding, dan posisi tangga, lalu menghasilkan kode program yang merekonstruksi model visual 3D bangunan tersebut secara proporsional dan akurat di viewport Three.js.
            </p>
          </div>

          {/* Demo C */}
          <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
              <Sparkles className="w-4 h-4 text-[#F45B1A]" />
              <span>C · VISUALISASI SAINS &amp; TEKSTIL</span>
            </div>
            <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
              Visualisasi Serat Tekstil Berbasis Makalah Penelitian
            </h3>
            <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
              Carbon membaca makalah ilmiah mengenai karakteristik mikrostruktur serat kain tenun, kemudian menyusun shader WebGL khusus yang mensimulasikan pantulan cahaya mikroskopis dan elastisitas kain secara interaktif di layar browser.
            </p>
          </div>

          {/* Demo D */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-2 font-outfit text-sm text-[#D5CBC3] leading-relaxed">
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              D. Mengapa Demonstrasi Ini Menarik?
            </h3>
            <p className="text-[#A99A90]">
              Demonstrasi ini membuktikan bahwa batas kemampuan AI telah melompat: dari sekadar menyusun kata-kata menjadi koordinator sistem grafis komputasi multi-disiplin. Carbon tidak sekadar menggambar ilustrasi flat dua dimensi, melainkan merancang sistem matematika spasial tiga dimensi yang dapat berinteraksi langsung dengan input keyboard dan mouse pengguna.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: APAKAH SELALU TERBAIK UNTUK 3D & GAME ───── */}
      <section id="09-evaluasi-game-dev" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <TriangleAlert className="w-4 h-4" />
            <span>BAGIAN 09 · REALITAS GAME DEV</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            9. Apakah Gemini 4 Carbon Selalu Lebih Baik untuk 3D dan Game?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Jawabannya: <strong className="text-[#F7F1EB]">Belum tentu.</strong> Jangan terkecoh oleh demo visual yang dipoles rapi di panggung peluncuran.
        </p>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Dalam industri pengembangan game profesional, estetika visual hanyalah satu bagian kecil. Kunci utama sebuah game yang sukses terletak pada stabilitas framerate (FPS), optimasi poligon mesh, responsivitas kontrol karakter, efisiensi beban shader pada GPU pengguna, dan gameplay loop yang menyenangkan.
          </p>
          <p className="text-[#A99A90]">
            AI dapat menghasilkan kode Three.js dalam sekejap, namun sering kali kode tersebut tidak teroptimasi: terjadi kebocoran memori (memory leak), jumlah draw calls terlalu banyak, atau sistem tabrakan (physics collision) yang glitchy saat pemain berlari kencang. Game developer manusia tetap memegang peranan krusial untuk profiling performa, tuning gameplay feel, dan pengujian kualitas.
          </p>
          <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/5 text-xs text-[#A99A90]">
            <strong className="text-[#F45B1A]">Prinsip Bijak:</strong> Jangan berasumsi bahwa satu model AI frontier dapat menggantikan satu studio game development yang utuh. Jadikan Carbon sebagai asisten akselerator prototipe tercepat, bukan pengganti engineer manusia.
          </div>
        </div>
      </section>

      {/* ── SECTION 10: KAPAN MEMILIH ARGON ATAU CARBON ────────── */}
      <section id="10-panduan-memilih-model" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Scale className="w-4 h-4" />
            <span>BAGIAN 10 · PANDUAN KEPUTUSAN</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            10. Kapan Sebaiknya Memilih Argon atau Carbon?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Kembali ke analogi pos keamanan komplek: jika ada warga yang sekadar menanyakan letak rumah Pak RT atau meminta bantuan membukakan palang pintu pos gerbang, apakah kamu perlu memanggil investigator forensik senior? Jelas tidak. Itu pemborosan biaya dan waktu.
        </p>

        <p className="font-outfit text-sm text-[#A99A90]">
          Gunakan tabel panduan berikut untuk menentukan kapan model Argon cukup dan kapan Carbon benar-benar layak dipanggil:
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
            <thead>
              <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                <th className="py-3 px-4">Jenis Pekerjaan</th>
                <th className="py-3 px-4 text-[#38BDF8]">Gemini 4 Argon</th>
                <th className="py-3 px-4 text-[#F45B1A]">Gemini 4 Carbon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Penulisan artikel, caption, email bisnis</td>
                <td className="py-2.5 px-4 text-[#38BDF8]">Sangat memadai, cepat, &amp; ekonomis</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Bisa, tetapi berlebihan (overkill)</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Meringkas dokumen 10–50 halaman</td>
                <td className="py-2.5 px-4 text-[#38BDF8]">Sangat cocok &amp; ringkas</td>
                <td className="py-2.5 px-4 text-[#D5CBC3]">Cocok jika butuh penalaran lintas analisis</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Coding harian, membuat helper function</td>
                <td className="py-2.5 px-4 text-[#38BDF8]">Sangat cocok &amp; responsif</td>
                <td className="py-2.5 px-4 text-[#D5CBC3]">Bagus, namun latensi thinking lebih lama</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Membuat komponen UI atau halaman baru</td>
                <td className="py-2.5 px-4 text-[#38BDF8]">Cocok untuk mayoritas antarmuka</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-medium">Cocok jika antarmuka punya state kompleks</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Debugging bug misterius lintas sistem</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Membantu hipotesis awal</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Sangat direkomendasikan</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Audit arsitektur software &amp; refactoring</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Cukup untuk saran umum</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Pilihan ideal untuk investigasi mendalam</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Analisis celah keamanan &amp; vulnerability</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Membantu scanning dasar</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Spesialisasi utama Carbon (Benchmark kuat)</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Pembuatan game 3D &amp; multi-agent swarm</td>
                <td className="py-2.5 px-4 text-[#38BDF8]">Bagus sebagai sub-worker paralel</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Ideal sebagai Coordinator / Lead Architect</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB]">Penelitian ilmiah matematika &amp; sains</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Membantu eksplorasi literatur</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Dirancang untuk penalaran hipotesis terbuka</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H3: Contoh pada bisnis kecil */}
        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3 font-outfit text-sm text-[#D5CBC3] leading-relaxed">
          <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
            Contoh Penerapan Nyata pada Bisnis Kecil &amp; UMKM
          </h3>
          <p>
            Misalnya kamu mengelola bisnis toko oleh-oleh khas Aceh atau fashion lokal. Kebutuhan harianmu berkutat pada: membuat caption Instagram, membalas pesan WhatsApp pelanggan dengan ramah, dan merangkum spreadsheet penjualan mingguan.
          </p>
          <p className="text-[#A99A90]">
            Untuk kebutuhan tersebut, <strong className="text-[#38BDF8]">Argon</strong> atau model bahasa ringan lainnya sudah lebih dari cukup, sangat cepat, dan hemat biaya. Menggunakan Carbon untuk tugas sederhana ini ibarat menyewa helikopter tempur hanya untuk pergi ke minimarket depan komplek.
          </p>
          <p className="text-[#A99A90]">
            Namun jika bisnismu sedang bertransformasi membangun aplikasi inventaris pergudangan multi-cabang terintegrasi, yang memiliki ribuan baris kode transaksi, sinkronisasi payment gateway, dan audit keamanan data nasabah, memanggil <strong className="text-[#F45B1A]">Gemini 4 Carbon</strong> sebagai konsultan arsitektur dan security auditor adalah keputusan yang sangat rasional.
          </p>
        </div>
      </section>

      {/* ── SECTION 11: DI MANA BISA MENGAKSES CARBON ──────────── */}
      <section id="11-cara-mengakses" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Wallet className="w-4 h-4" />
            <span>BAGIAN 11 · JALUR AKSES RESMI</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            11. Di Mana Bisa Mengakses Gemini 4 Carbon?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Penting untuk dipahami bahwa akses ke Gemini 4 Carbon tidak didistribusikan secara seragam. Google menyediakan beberapa jalur resmi dengan persyaratan dan target pengguna yang berbeda:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* A. Gemini App */}
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">A · KONSUMEN &amp; INDIVIDU</span>
              <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#F45B1A] hover:underline flex items-center gap-1 font-mono">gemini.google.com <ExternalLink className="w-3 h-3" /></a>
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">Gemini App — Google AI Ultra</h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Bagi pengguna umum, akses web chat ke Carbon dibuka melalui paket langganan <strong>Google AI Ultra</strong> <a href="#ref-5" className="text-[#F45B1A]">[5]</a>. Paket Google AI Pro hanya mencantumkan akses ke Gemini 4 Argon, sedangkan tingkatan tertinggi Carbon dialokasikan eksklusif untuk tier Ultra sesuai jadwal rollout berkala.
            </p>
          </div>

          {/* B. Google Antigravity */}
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">B · DEVELOPER AGENTIC</span>
              <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#F45B1A] hover:underline flex items-center gap-1 font-mono">antigravity.google <ExternalLink className="w-3 h-3" /></a>
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">Google Antigravity — Developer IDE</h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Platform pengembangan software berbasis agent <a href="#ref-8" className="text-[#F45B1A]">[8]</a>. Developer dapat menggunakan Carbon untuk coding, live debugging, refactoring, pembuatan prototipe game 3D, dan koordinasi swarm. Memerlukan langganan Google AI Ultra yang terhubung dengan akun developer.
            </p>
          </div>

          {/* C. Google AI Studio */}
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">C · DEVELOPER API TIER</span>
              <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#F45B1A] hover:underline flex items-center gap-1 font-mono">aistudio.google.com <ExternalLink className="w-3 h-3" /></a>
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">Google AI Studio — Direct API</h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Developer dapat mengakses model Carbon secara langsung melalui API berbayar (Paid Tier) <a href="#ref-6" className="text-[#F45B1A]">[6]</a> tanpa harus berlangganan Google AI Ultra bulanan. Biaya dihitung berdasarkan meteran konsumsi token riil (pay-as-you-go).
            </p>
          </div>

          {/* D. Gemini API */}
          <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">D · SDK &amp; INTEGRASI</span>
              <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="text-xs text-[#F45B1A] hover:underline flex items-center gap-1 font-mono">ai.google.dev/docs <ExternalLink className="w-3 h-3" /></a>
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">Gemini API SDK Documentation</h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Dokumentasi resmi untuk mengintegrasikan model ke backend sistem <a href="#ref-7" className="text-[#F45B1A]">[7]</a>: Python, TypeScript, Go, REST. Ingat prinsip keamanan: jangan pernah mengekspos API key di frontend client website publik.
            </p>
          </div>
        </div>

        {/* E. Enterprise */}
        <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 space-y-2 font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
          <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block">
            E. Jalur Enterprise, Google Cloud Vertex AI, dan Fairwind Program
          </span>
          <p>
            Bagi korporasi berskala besar, akses Carbon disediakan melalui layanan Google Cloud Vertex AI dengan perjanjian tingkat layanan (SLA), isolasi data enkripsi enterprise, dan kepatuhan privasi (HIPAA, SOC2). Sementara untuk periset keamanan siber defensif, akses khusus disediakan melalui jalur verifikasi Fairwind Program.
          </p>
        </div>
      </section>

      {/* ── SECTION 12: GOOGLE AI PRO VS ULTRA & HARGA API ────── */}
      <section id="12-google-ai-pro-vs-ultra" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Wallet className="w-4 h-4" />
            <span>BAGIAN 12 · HARGA &amp; MODEL BISNIS</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            12. Google AI Pro vs Google AI Ultra: Mengapa Biayanya Tidak Murah?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Sebelum kamu memutuskan untuk menggesek kartu kredit atau berlangganan, pahami struktur paket layanan Google ini secara jernih. <strong className="text-[#F7F1EB]">Google AI Pro</strong> dan <strong className="text-[#F45B1A]">Google AI Ultra</strong> adalah nama paket langganan langganan ekosistem, bukan nama model AI fisik itu sendiri.
        </p>

        <p className="font-outfit text-sm text-[#A99A90]">
          Berikut informasi harga resmi paket langganan Google di Indonesia berdasarkan halaman subscription yang diperiksa per 13 November 2026{" "}
          <a href="#ref-5" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[5]</a>:
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A] max-w-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
            <thead>
              <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                <th className="py-3 px-4">Paket Langganan</th>
                <th className="py-3 px-4 text-right">Harga Bulanan (IDR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#38BDF8]">Google AI Pro</td>
                <td className="py-2.5 px-4 text-right font-mono font-bold text-[#F7F1EB]">Rp309.000 / bulan</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F45B1A]">Google AI Ultra 5x</td>
                <td className="py-2.5 px-4 text-right font-mono font-bold text-[#F45B1A]">Rp1.579.000 / bulan</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-medium text-[#F45B1A]">Google AI Ultra 20x</td>
                <td className="py-2.5 px-4 text-right font-mono font-bold text-[#F45B1A]">Rp3.399.000 / bulan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-3 font-outfit text-sm text-[#A99A90] leading-relaxed">
          <p>
            Mengapa biaya Ultra berada di kisaran Rp1,5 juta hingga Rp3,3 juta per bulan? Karena paket ini memang tidak dirancang untuk pengguna kasual yang hanya butuh hiburan atau menulis email biasa. Tier Ultra diperuntukkan bagi software engineer profesional, arsitek data, periset, dan agensi teknologi yang memanfaatkan model penalaran frontier untuk mempercepat proyek bernilai puluhan hingga ratusan juta rupiah.
          </p>
          <div className="p-3.5 rounded-xl bg-[#0B0807] border border-white/5 text-xs text-[#D5CBC3]">
            <strong className="text-[#F45B1A]">Nasihat Keuangan Digital:</strong> Jangan pernah berlangganan tier Ultra hanya karena termakan gengsi nama model terbaru. Hitung terlebih dahulu secara matematis apakah peningkatan produktivitas yang kamu dapatkan benar-benar menghasilkan Return on Investment (ROI) positif bagi bisnismu.
          </div>
        </div>

        {/* Biaya API */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
            <Terminal className="w-4 h-4" />
            <span>SKEMA BIAYA DEVELOPER API</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Bagaimana dengan Biaya Penggunaan Gemini 4 Carbon API?
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Google mengumumkan skema tarif API Gemini 4 Carbon dengan masa promosi harga pengenalan (introductory pricing) hingga 30 November 2026, yang kemudian beralih ke tarif standar per 1 Desember 2026{" "}
            <a href="#ref-6" className="text-[#F45B1A] font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#F45B1A]/10 hover:bg-[#F45B1A]/20 transition-colors">[6]</a>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Promo */}
            <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <span className="text-xs font-geom text-[#38BDF8] uppercase tracking-wider font-bold block">
                Harga Pengenalan (s.d. 30 Nov 2026)
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-outfit">
                  <tbody className="divide-y divide-white/5 text-[#D5CBC3]">
                    <tr>
                      <td className="py-1.5 font-medium">Input Token</td>
                      <td className="py-1.5 text-right font-mono font-bold text-[#F7F1EB]">US$2 / 1M token</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Output (inc. thinking)</td>
                      <td className="py-1.5 text-right font-mono font-bold text-[#F45B1A]">US$10 / 1M token</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standar */}
            <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <span className="text-xs font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
                Tarif Standar (Mulai 1 Des 2026)
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-outfit">
                  <tbody className="divide-y divide-white/5 text-[#D5CBC3]">
                    <tr>
                      <td className="py-1.5 font-medium">Input Token</td>
                      <td className="py-1.5 text-right font-mono font-bold text-[#F7F1EB]">US$4 / 1M token</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Output (inc. thinking)</td>
                      <td className="py-1.5 text-right font-mono font-bold text-[#F45B1A]">US$20 / 1M token</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0F0A08] border border-white/10 space-y-1.5 text-xs text-[#A99A90] font-outfit">
            <span className="font-geom font-bold text-[#F7F1EB] uppercase tracking-wider block">
              Fakta Krusial Seputar Billing API:
            </span>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gemini 4 Carbon <strong>tidak tersedia pada API Free Tier</strong>.</li>
              <li>Seluruh token input, output, dan <em>thinking tokens</em> internal dihitung ke dalam meteran tagihan.</li>
              <li>Layanan grounding dengan Google Search atau Google Maps dapat dikenakan biaya tambahan setelah kuota batas awal terlampaui.</li>
              <li>Langganan Google AI Ultra konsumen <em>tidak otomatis</em> mencakup saldo API komersial developer.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: APAKAH SELALU LEBIH BAIK ───────────────── */}
      <section id="13-apakah-selalu-lebih-baik" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Scale className="w-4 h-4" />
            <span>BAGIAN 13 · EVALUASI KRITIS</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            13. Apakah Gemini 4 Carbon Selalu Lebih Baik?
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4 font-outfit text-base sm:text-lg leading-relaxed text-[#D5CBC3]">
          <p className="text-xl font-geom font-bold text-[#F45B1A]">
            Jawabannya singkat dan tegas: Tidak.
          </p>
          <p className="text-sm sm:text-base text-[#A99A90]">
            Model yang paling bertenaga tidak otomatis menjadi model yang paling tepat untuk setiap skenario pekerjaan. Carbon dirancang untuk tugas yang mendorong batas penalaran ekstrem. Untuk mencapai hal tersebut, model menghabiskan banyak <em>thinking tokens</em> dalam mengeksplorasi hipotesis dan menjalankan proses verifikasi internal yang mendalam.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D5CBC3] pt-1">
            <div className="p-3.5 rounded-xl bg-[#17100D] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block">Konsekuensi Biaya</span>
              <p className="text-[#A99A90]">Konsumsi token berlipat ganda karena menyerap thinking tokens internal.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#17100D] border border-white/5 space-y-1">
              <span className="font-geom font-bold text-[#F45B1A] uppercase tracking-wider block">Latensi Respon</span>
              <p className="text-[#A99A90]">Waktu tunggu sebelum kata pertama muncul terasa lebih lambat dibanding model instan.</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#A99A90]">
            Bayangkan kamu memanggil satpam senior spesialis investigasi hanya untuk memungut selembar kuitansi parkir di halaman pos. Tentu saja dia bisa melakukannya, tetapi satpam junior sudah lebih dari cukup dan tidak menyita waktu tim ahli. Begitu pula hubungan antara Carbon dan Argon: <strong>Argon bukan untuk ditinggalkan, melainkan untuk dipadukan secara harmonis dalam arsitektur yang cerdas.</strong>
          </p>
        </div>
      </section>

      {/* ── SECTION 14: BATASAN DAN RISIKO ─────────────────────── */}
      <section id="14-batasan-dan-risiko" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <TriangleAlert className="w-4 h-4" />
            <span>BAGIAN 14 · MITIGASI RISIKO</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            14. Apa Batasan dan Risiko Menggunakan Carbon?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Meskipun kemampuan penalarannya sangat impresif, Gemini 4 Carbon tetaplah sebuah model probabilitas statistik berbasis transformer. Model card Google DeepMind secara transparan mencatat sejumlah batasan kritis yang wajib dipahami oleh setiap engineer:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "A. Risiko Halusinasi (Hallucination)",
              desc: "Carbon masih dapat menghasilkan informasi yang tampak sangat meyakinkan namun sebenarnya keliru secara faktual. Selalu lakukan verifikasi silang pada data finansial, medis, dan kutipan peraturan.",
              icon: TriangleAlert,
            },
            {
              title: "B. Konsumsi Token & Variasi Waktu",
              desc: "Pada mode thinking tinggi, model dapat menghabiskan ribuan token hanya untuk menganalisis konteks sebelum menuliskan satu baris jawaban, membuat waktu tunggu dan biaya berfluktuasi.",
              icon: Clock,
            },
            {
              title: "C. Keamanan Agent & Izin Akses",
              desc: "Meskipun dilengkapi filter keamanan ketat, tindakan agent AI di terminal lokal tetap harus diawasi dengan isolasi sandbox agar tidak mengeksekusi perintah file system yang berbahaya.",
              icon: ShieldCheck,
            },
            {
              title: "D. Batas Pengetahuan (Cutoff Date)",
              desc: "Model card mencatat cutoff pengetahuan model hingga Maret 2026. Untuk perkembangan library software atau berita terbaru di akhir 2026, model membutuhkan grounding tools eksternal.",
              icon: Database,
            },
            {
              title: "E. Hasil Coding Wajib Diuji Manusia",
              desc: "Kode program yang dihasilkan model AI tidak boleh langsung di-deploy ke server produksi tanpa review arsitektur, security auditing, dan automated regression test.",
              icon: Code2,
            },
            {
              title: "F. Fragmentasi Fitur Lintas Platform",
              desc: "Fitur seperti /swarm atau tools tertentu baru tersedia di Antigravity dan belum tentu didukung secara identik di Gemini App konsumen atau endpoint API biasa.",
              icon: Layers,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-geom text-[#F45B1A] font-bold">
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 15: CONTOH PROMPT SIAP PAKAI ───────────────── */}
      <section id="15-contoh-prompt" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <MessageSquareCode className="w-4 h-4" />
            <span>BAGIAN 15 · TEMPLATE PRAKTIK</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            15. Contoh Prompt untuk Menggunakan Gemini 4 Carbon
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Untuk memaksimalkan daya penalaran Carbon, berikan instruksi dengan struktur yang jelas: definisikan peran, lampirkan konteks, sebutkan batasan teknis, dan minta rencana bertahap sebelum eksekusi. Berikut beberapa contoh prompt praktis yang dapat kamu jadikan referensi:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Prompt 1 — Audit Project Next.js Berkinerja Tinggi",
              desc: "Untuk menelusuri performa dan struktur routing aplikasi frontend.",
              prompt: `Bertindaklah sebagai Senior Next.js Architect. Periksa struktur komponen dan alur fetching data pada folder app/ berikut.
1. Analisis potensi re-render yang tidak perlu pada Client Component.
2. Identifikasi apakah ada data fetching yang dapat dipindahkan ke Server Component.
3. Berikan saran refactoring modular dengan tetap mempertahankan kontrak props yang ada.
Tuliskan rencana langkah kerja terlebih dahulu sebelum menyajikan perubahan kode.`,
            },
            {
              title: "Prompt 2 — Debugging Sistemik yang Aman",
              desc: "Untuk memecahkan error tersembunyi tanpa merusak fungsionalitas lain.",
              prompt: `Berikut adalah stack trace error dari worker background kami serta cuplikan kode layanan terkait.
1. Temukan akar penyebab (root cause) dari kegagalan transaksi ini.
2. Jelaskan hipotesis mengapa error ini hanya terjadi pada kondisi traffic tinggi (race condition).
3. Buat patch perbaikan minimal yang tidak mengubah skema database yang sudah berjalan.
4. Tuliskan skenario unit test untuk mereproduksi dan membuktikan bug telah teratasi.`,
            },
            {
              title: "Prompt 3 — Perancangan Fondasi Website Bisnis Baru",
              desc: "Mendesain arsitektur semantik yang siap dipahami Google dan AI.",
              prompt: `Kami sedang merancang website baru untuk bisnis agensi digital profesional.
Rancang struktur folder Next.js App Router, integrasi Tailwind CSS, dan komponen metadata semantik.
Pastikan:
- Struktur halaman mendukung SEO teknis dan GEO (Generative Engine Optimization).
- Skema JSON-LD terintegrasi rapi untuk Organization, WebSite, dan BreadcrumbList.
- Antarmuka ramah mobile dengan tata letak dark mode yang elegan.`,
            },
            {
              title: "Prompt 4 — Pembuatan Prototipe Game 3D Berbasis Web",
              desc: "Eksperimen visual interaktif menggunakan Three.js dan WebGL.",
              prompt: `Buat prototipe scene interaktif 3D di browser menggunakan library Three.js tanpa dependensi eksternal berat.
Scene harus menampilkan sebuah pulau terapung dengan tata cahaya ambient, bayangan lembut, dan sebuah objek kendaraan kecil yang dapat dikendalikan dengan tombol panah keyboard (WASD).
Tambahkan deteksi batas tepi pulau agar kendaraan tidak meluncur ke luar arena tanpa gravitasi yang wajar.`,
            },
            {
              title: "Prompt 5 — Audit Keamanan Kode (Defensive Security)",
              desc: "Mendeteksi celah kerentanan sebelum aplikasi diluncurkan ke publik.",
              prompt: `Lakukan security review terhadap file endpoint API autentikasi Node.js berikut.
Periksa kerentanan terhadap:
- Serangan timing attack pada verifikasi token atau hash password.
- Potensi kebocoran session melalui cookie configuration.
- Validasi input dan sanitasi payload JSON untuk mencegah injection.
Berikan rekomendasi perbaikan spesifik dengan standar OWASP Top 10.`,
            },
            {
              title: "Prompt 6 — Analisis Dokumen Finansial & Data Bisnis",
              desc: "Membaca laporan neraca keuangan dan menyusun rekomendasi efisiensi.",
              prompt: `Berikut adalah tabel neraca pengeluaran operasional perusahaan selama 4 kuartal terakhir.
1. Identifikasi tren anomali kenaikan biaya overhead terbesar antarkuartal.
2. Hitung rasio efisiensi biaya terhadap pertumbuhan omzet bersih.
3. Susun 3 skenario mitigasi biaya untuk kuartal mendatang dalam format tabel komparasi yang rapi.`,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-geom font-bold text-sm sm:text-base text-[#F7F1EB]">{item.title}</h3>
                <span className="text-[10px] font-mono text-[#F45B1A] bg-[#F45B1A]/10 px-2 py-0.5 rounded uppercase">PROMPT TEMPLATE</span>
              </div>
              <p className="font-outfit text-xs text-[#A99A90]">{item.desc}</p>
              <pre className="p-4 rounded-xl bg-[#0B0807] border border-white/10 font-mono text-xs text-[#D5CBC3] whitespace-pre-wrap leading-relaxed select-all overflow-x-auto">
                {item.prompt}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 16: SIAPA YANG COCOK MENGGUNAKAN CARBON ────── */}
      <section id="16-siapa-yang-cocok" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Users className="w-4 h-4" />
            <span>BAGIAN 16 · PROFIL PENGGUNA</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            16. Siapa yang Sebaiknya Menggunakan Gemini 4 Carbon?
          </h2>
        </div>

        <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed">
          Tidak setiap orang atau perusahaan memerlukan model sebesar dan semahal ini. Sebelum mengalokasikan anggaran teknologi, periksa tabel kecocokan peran berikut:
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#120D0A]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-outfit">
            <thead>
              <tr className="bg-[#1A120E] text-[#F7F1EB] border-b border-white/10 font-geom uppercase tracking-wider text-[11px] sm:text-xs">
                <th className="py-3 px-4">Profil Pengguna</th>
                <th className="py-3 px-4">Apakah Carbon Relevan?</th>
                <th className="py-3 px-4">Alasan &amp; Pertimbangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#D5CBC3]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Pelajar &amp; Mahasiswa</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Tergantung</td>
                <td className="py-2.5 px-4 text-xs text-[#A99A90]">Model gratis atau tier Pro sudah sangat cukup untuk belajar coding dan mengerjakan tugas kampus.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Content Creator</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Tergantung</td>
                <td className="py-2.5 px-4 text-xs text-[#A99A90]">Hanya relevan jika mengelola workflow konten multi-format yang sangat kompleks dengan scripting terotomasi.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Software Developer</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Sangat Relevan</td>
                <td className="py-2.5 px-4 text-xs">Sangat bernilai untuk debugging mendalam, refactoring arsitektur, dan eksekusi multi-agent di Antigravity.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Software Architect</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Sangat Relevan</td>
                <td className="py-2.5 px-4 text-xs">Membantu mengevaluasi desain sistem terdistribusi, dependency mapping, dan validasi arsitektur cloud.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Peneliti &amp; Akademisi</td>
                <td className="py-2.5 px-4 text-[#38BDF8] font-bold">Relevan</td>
                <td className="py-2.5 px-4 text-xs">Sangat bertenaga untuk penalaran saintifik, sintesis literatur multimodal, dan verifikasi hipotesis terbuka.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Tim Keamanan Siber</td>
                <td className="py-2.5 px-4 text-[#F45B1A] font-bold">Relevan Berizin</td>
                <td className="py-2.5 px-4 text-xs">Sangat kuat untuk audit kerentanan defensif dan pembuatan patch sistem (terutama via Fairwind Program).</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">UMKM &amp; Bisnis Lokal</td>
                <td className="py-2.5 px-4 text-[#A99A90]">Tidak Selalu Perlu</td>
                <td className="py-2.5 px-4 text-xs text-[#A99A90]">Kebutuhan operasional bisnis lokal dapat dipenuhi model yang jauh lebih hemat seperti Argon atau Flash.</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-4 font-bold text-[#F7F1EB]">Studio Game &amp; 3D</td>
                <td className="py-2.5 px-4 text-[#38BDF8] font-bold">Relevan Riset</td>
                <td className="py-2.5 px-4 text-xs">Sangat menarik untuk akselerasi pembuatan prototipe game, shader scripting, dan aset prosedural.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 17: KESIMPULAN ─────────────────────────────── */}
      <section id="17-kesimpulan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>BAGIAN 17 · KESIMPULAN</span>
          </div>

          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            17. Kesimpulan: Bukan Soal Siapa yang Paling Pintar, tetapi Siapa yang Paling Tepat untuk Pekerjaanmu
          </h2>

          <div className="space-y-4 font-outfit text-base sm:text-lg leading-relaxed text-[#D5CBC3]">
            <p>
              Kehadiran Gemini 4 Carbon menegaskan pergeseran paradigma kecerdasan buatan dari sekadar asisten percakapan teks pasif menuju sistem otonom yang mampu mengeksekusi proyek teknis berskala besar. Meski demikian, kecanggihan Carbon bukanlah alasan untuk meninggalkan model yang lebih ringan. Melalui pemahaman yang objektif, kita melihat bahwa varian Argon tetap menjadi pilihan paling rasional dan hemat biaya untuk menangani sebagian besar kebutuhan operasional harian, sedangkan Carbon dialokasikan khusus bagi persoalan arsitektur kritis yang menuntut penalaran berlapis. Evaluasi benchmark independen juga membuktikan bahwa keunggulan model sangat bergantung pada domain pengujian yang spesifik, bukan dominasi mutlak di semua lini. Pada akhirnya, keberhasilan adopsi teknologi frontier tidak ditentukan oleh seberapa besar model yang Anda gunakan, melainkan seberapa cermat Anda menyelaraskan kapabilitas model, efisiensi anggaran token, dan pengawasan manusia demi menghasilkan solusi nyata yang bernilai tinggi.
            </p>
            <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 text-center space-y-2">
              <p className="font-geom font-bold text-lg text-[#F45B1A]">
                "Carbon memang unsur kimia. Tapi Gemini 4 Carbon bukan isi pensil, bro. Ini teknologi komputasi frontier yang wajib kamu pahami sebelum kamu gunakan."
              </p>
              <p className="text-xs text-[#A99A90]">
                Pahami kapabilitasnya, hitung efisiensi biayanya, dan kuasai masa depan digital dengan bijak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RANGKUMAN PEMBAHASAN ───────────────────────────── */}
      <section id="rangkuman-pembahasan" className="scroll-mt-28 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <ListChecks className="w-4 h-4" />
            <span>RANGKUMAN PEMBAHASAN</span>
          </div>

          <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
            Poin-Poin Kunci Pembahasan
          </h3>

          <ul className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3]">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Hakikat Gemini 4 Carbon:</strong> Model frontier AI dari Google DeepMind yang dioptimalkan untuk penalaran mendalam, pemanggilan tools komputasi, dan eksekusi proyek multi-tahap.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Peran Argon dan Carbon:</strong> Argon bertindak sebagai model harian yang cepat dan ekonomis, sementara Carbon hadir sebagai spesialis pemecah krisis sistemik yang rumit.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Alur Kerja Otonom &amp; /swarm:</strong> Integrasi agen otonom memungkinkan pembagian tugas komputasi secara paralel dengan pengawasan kode mandiri di Google Antigravity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Kapabilitas Teknis Unggulan:</strong> Menunjukkan performa tinggi pada software engineering, pemecahan tantangan keamanan siber, dan penalaran saintifik terintegrasi.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Realitas Komparasi Benchmark:</strong> Unggul pada Terminal-Bench dan audit keamanan, bersaing ketat dengan GPT-6 pada FrontierSWE 2 dan Claude Opus pada OSWorld.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Eksplorasi Prototipe 3D &amp; Game:</strong> Mampu merancang alur Three.js dan WebGL, namun tetap memerlukan tuning performa dan logika tabrakan dari developer manusia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Struktur Akses &amp; Skema Biaya:</strong> Tersedia melalui Google AI Ultra untuk konsumen dan Google AI Studio API dengan sistem penagihan berbasis konsumsi token.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0 mt-2" />
              <span>
                <strong className="text-[#F7F1EB]">Prinsip Pemilihan Berkelanjutan:</strong> Efisiensi biaya dan ketepatan fungsi adalah kunci; gunakan model sesuai tingkat kerumitan masalah tanpa memaksakan model terberat.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 18: FAQ — PERTANYAAN UMUM ───────────────────── */}
      <section id="18-faq" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>BAGIAN 18 · TANYA JAWAB</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            18. FAQ — Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-3.5">
          {[
            {
              q: "Apa itu Gemini 4 Carbon?",
              a: "Gemini 4 Carbon adalah model AI frontier terbaru dari Google DeepMind yang diumumkan pada akhir 2026, dirancang secara khusus untuk menyelesaikan pekerjaan kompleks yang membutuhkan penalaran mendalam, penggunaan tools, coding multi-tahap, cybersecurity defensif, dan alur kerja agentic berdurasi panjang.",
            },
            {
              q: "Apa perbedaan Gemini 4 Carbon dan Gemini 4 Argon?",
              a: "Argon diposisikan sebagai model frontier standar yang cepat dan efisien untuk mayoritas pekerjaan software engineering dan penulisan konten harian. Sementara Carbon difokuskan untuk tugas-tugas terberat yang menuntut penalaran lebih dalam, koordinasi multi-agent, analisis dokumen raksasa, dan verifikasi mandiri.",
            },
            {
              q: "Apakah Gemini 4 Carbon gratis digunakan?",
              a: "Tidak. Gemini 4 Carbon tidak tersedia pada tier gratis Gemini API. Bagi pengguna umum, model ini dapat diakses melalui paket langganan Google AI Ultra sesuai jadwal ketersediaan. Developer dapat mengaksesnya melalui Google AI Studio dengan skema tarif API berbayar berbasis pemakaian token.",
            },
            {
              q: "Apakah Gemini 4 Carbon benar-benar bisa membuat game 3D?",
              a: "Ya, dalam demonstrasi resmi Google, Carbon dapat dihubungkan ke platform Antigravity untuk mengorkestrasi pipeline game browser 3D menggunakan Blender API, Three.js, WebGL, dan Web Audio. Namun dalam praktiknya, hasil kode tetap memerlukan tuning performa, collision check, dan optimasi GPU dari developer manusia.",
            },
            {
              q: "Apakah Gemini 4 Carbon lebih baik daripada Claude Opus dan GPT-6?",
              a: "Tidak ada pemenang mutlak di semua kategori. Model card Google menunjukkan Carbon unggul pada benchmark Terminal-Bench, CTF Cybersecurity, dan pemahaman diagram teknis, sementara GPT-6 Astra unggul pada FrontierSWE 2 dan Claude Opus 5.5 unggul pada navigasi desktop OSWorld. Pilihan terbaik tergantung pada kebutuhan spesifik proyekmu.",
            },
            {
              q: "Berapa harga API Gemini 4 Carbon?",
              a: "Harga promosi pengenalan yang diumumkan Google hingga 30 November 2026 adalah US$2 per 1 juta token input dan US$10 per 1 juta token output (termasuk thinking tokens). Mulai 1 Desember 2026, tarif standar resmi berlaku menjadi US$4 untuk input dan US$20 untuk output per 1 juta token.",
            },
            {
              q: "Apakah Carbon bisa menggantikan peran software developer sepenuhnya?",
              a: "Tidak secara otomatis. Carbon adalah alat bantu dan akselerator yang luar biasa kuat untuk menangani tugas rutin dan debugging rumit. Namun, penentuan arsitektur bisnis, etika privasi data, validasi keamanan, dan pengawasan keputusan sistem tetap sepenuhnya membutuhkan kebijaksanaan engineer manusia.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#140E0B] border border-white/10 space-y-2">
              <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] flex items-start gap-2.5">
                <span className="text-[#F45B1A] font-mono text-sm shrink-0">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="font-outfit text-sm text-[#A99A90] leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 19: DAFTAR SUMBER RESMI & RUJUKAN ─────────── */}
      <section id="referensi" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <BookText className="w-4 h-4" />
            <span>BAGIAN 19 · DAFTAR SUMBER RISET</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Daftar Sumber Resmi &amp; Rujukan Ilmiah
          </h2>
          <p className="font-outfit text-sm text-[#A99A90]">
            Seluruh data teknis, skor benchmark, rincian harga langganan, dan spesifikasi arsitektur yang disajikan dalam artikel ini merujuk langsung pada publikasi primer resmi berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {[
            {
              id: "ref-1",
              num: 1,
              org: "Google DeepMind",
              title: "Gemini 4 Carbon Model Card",
              desc: "Dokumen teknis komparasi benchmark, jendela konteks 1 juta token, evaluasi cybersecurity, dan safety card.",
              url: "https://deepmind.google/models/model-cards/gemini-4-carbon/",
            },
            {
              id: "ref-2",
              num: 2,
              org: "Google Official Blog",
              title: "Gemini 4 Carbon Is Now Available",
              desc: "Pengumuman resmi ketersediaan model Carbon untuk enterprise, developer, dan konsumen.",
              url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/",
            },
            {
              id: "ref-3",
              num: 3,
              org: "Google Official Blog",
              title: "Introducing Gemini 4 Carbon",
              desc: "Pengenalan visi frontier model, kemampuan coding multi-agent, dan riset investigatif.",
              url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
            },
            {
              id: "ref-4",
              num: 4,
              org: "Google DeepMind",
              title: "Gemini 4 Argon Model Card",
              desc: "Dokumen model card untuk varian Gemini 4 Argon sebagai fondasi software engineering harian.",
              url: "https://deepmind.google/models/model-cards/gemini-4-argon/",
            },
            {
              id: "ref-5",
              num: 5,
              org: "Google AI",
              title: "Subscription Indonesia — Gemini Google",
              desc: "Informasi harga resmi paket langganan Google AI Pro dan Google AI Ultra untuk wilayah Indonesia.",
              url: "https://gemini.google/id/subscriptions/?hl=id",
            },
            {
              id: "ref-6",
              num: 6,
              org: "Google AI Studio",
              title: "Gemini API Pricing Documentation",
              desc: "Rincian biaya token input, output, thinking tokens, dan paket batching developer API.",
              url: "https://aistudio.google.com/docs/pricing",
            },
            {
              id: "ref-7",
              num: 7,
              org: "Google Gemini API",
              title: "Official Gemini API Documentation",
              desc: "Panduan integrasi SDK, tool calling, grounding, dan parameter thinking level.",
              url: "https://ai.google.dev/gemini-api/docs",
            },
            {
              id: "ref-8",
              num: 8,
              org: "Google Antigravity",
              title: "Google Antigravity Platform",
              desc: "Lingkungan pengembangan perangkat lunak berbasis agen otonom dan koordinasi /swarm.",
              url: "https://antigravity.google/",
            },
            {
              id: "ref-9",
              num: 9,
              org: "Artificial Analysis",
              title: "Independent AI Model Benchmarks",
              desc: "Metrik komparasi kecepatan, indeks kualitas AA Index v5.0, dan latensi frontier model.",
              url: "https://artificialanalysis.ai/",
            },
            {
              id: "ref-10",
              num: 10,
              org: "SWE-bench",
              title: "Software Engineering Benchmark",
              desc: "Standar evaluasi penyelesaian issue bug software repository nyata di GitHub.",
              url: "https://www.swebench.com/",
            },
            {
              id: "ref-11",
              num: 11,
              org: "Terminal-Bench",
              title: "Terminal & CLI Reasoning Benchmark",
              desc: "Pengujian interaksi lingkungan command-line interface dan bash orchestration.",
              url: "https://www.tbench.ai/",
            },
          ].map((ref) => (
            <div
              key={ref.id}
              id={ref.id}
              className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors space-y-1.5 scroll-mt-28"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-geom uppercase tracking-wider text-[#F45B1A] font-bold">
                  [{ref.num}] · {ref.org}
                </span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A99A90] hover:text-[#F45B1A] transition-colors flex items-center gap-1 font-mono"
                >
                  <span>Buka Sumber</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <h3 className="font-geom font-bold text-sm text-[#F7F1EB]">{ref.title}</h3>
              <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">{ref.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 text-xs text-[#A99A90] font-outfit space-y-1">
          <p className="font-bold text-[#F7F1EB]">Catatan Metodologi &amp; Kepatuhan Kebijakan:</p>
          <p>
            "Benchmark yang ditampilkan merujuk pada model card Google DeepMind dengan hasil evaluasi hingga Oktober 2026. Hasil benchmark mencerminkan kinerja pada tugas dan metodologi tertentu, bukan jaminan hasil untuk seluruh penggunaan. Hasil cybersecurity pada model card memiliki konteks akses melalui Fairwind Program. Harga dan akses dapat berubah mengikuti kebijakan penyedia layanan."
          </p>
        </div>
      </section>

      {/* ── SECTION 20: RELATED ARTICLES ──────────────────────── */}
      <section className="space-y-4 border-t border-white/10 pt-10">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
              KNOWLEDGE BASE
            </span>
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
              Artikel Terkait Seputar Teknologi &amp; Website
            </h3>
          </div>
          <Link
            href="/blog/"
            className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] hover:text-[#FF7A3D] flex items-center gap-1 font-semibold"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/blog/apa-itu-geo/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline space-y-2"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
              ARTIKEL 04 · GENERATIVE ENGINE OPTIMIZATION
            </span>
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2">
              Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal &amp; Direkomendasikan AI
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Pahami konsep GEO, analogi Pak RT, dan langkah strategis agar website mudah dikutip mesin pencarian AI.
            </p>
          </Link>

          <Link
            href="/blog/kenapa-bisnis-perlu-website/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all group block no-underline space-y-2"
          >
            <span className="text-[10px] font-geom text-[#F45B1A] uppercase tracking-wider font-bold block">
              ARTIKEL 03 · FONDASI BISNIS DIGITAL
            </span>
            <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors line-clamp-2">
              Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI
            </h4>
            <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
              Media sosial seperti ngekos, website seperti ruko sendiri. Pahami manfaat aset digital jangka panjang.
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
        </div>
      </section>

      {/* ── SECTION 21: SHARE BUTTON ──────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa ulasan mendalam Gemini 4 Carbon ini bermanfaat untuk rekan engineer atau pengusaha lainnya?
        </span>
        <a
          href={waShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-row items-center justify-center flex-nowrap whitespace-nowrap gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold font-outfit transition-all shadow-md shadow-[#16A34A]/25 shrink-0 w-fit max-w-full"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="whitespace-nowrap">Bagikan ke WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
