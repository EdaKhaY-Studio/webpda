import React from "react";
import Link from "next/link";
import {
  Zap,
  Workflow,
  Code2,
  ShieldCheck,
  Scale,
  ChartNoAxesCombined,
  Gamepad2,
  Wallet,
  Terminal,
  TriangleAlert,
  MessageSquareCode,
  BookOpenText,
  CheckCircle2,
  ListChecks,
  BookText,
  HelpCircle,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Clock,
  Send,
  Atom,
  Users,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticleGemini4Hydrogen({ waShareUrl }: Props) {
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
    <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">Bayangkan sebuah komplek perumahan yang memiliki tiga petugas keamanan dengan kemampuan berbeda. Ada satpam junior yang sudah terlatih, satpam senior muda yang gesit dan cepat bertindak, serta satpam senior veteran yang memiliki pengalaman dan keahlian mendalam untuk menangani kasus paling rumit. Siapa yang akan kamu panggil ketika ada masalah? Jawabannya tergantung situasi.</p>
<p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">Analogi tersebut membantu kita memahami Gemini 4 Argon, Gemini 4 Hydrogen, dan Gemini 4 Carbon. Baru dua hari setelah Carbon mulai tersedia, Google memperkenalkan Hydrogen, model AI yang berfokus pada kecepatan dan efisiensi untuk coding sehari-hari serta agentic workflow. Artikel ini membahas hubungan ketiga model, teknologi Orchestrator, benchmark melawan Claude dan GPT, demonstrasi game 3D, keamanan AI agent, harga API, hingga cara mengaksesnya. Pertanyaan besarnya: <strong className="text-[#F7F1EB]">apakah AI masa depan harus selalu menjadi yang paling kuat, atau justru harus tahu kapan bergerak cepat dan kapan membutuhkan keahlian mendalam?</strong></p>
  </section>

      
  {/* ── SECTION 00: PENDAHULUAN ───────────────────────────── */}
  <section id="pendahuluan" className="scroll-mt-28 space-y-4">
    <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-4">
      <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
        <Atom className="w-4 h-4" />
        <span>PENGANTAR · FRONTIER AI GOOGLE DEEPMIND</span>
      </div>

      <h2 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB] leading-snug">
        Google, Kita Baru Selesai Membahas Carbon!
      </h2>

      
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Belum lama kita membahas Gemini 4 Carbon. Model yang dirancang Google DeepMind untuk menangani pekerjaan kompleks, mulai dari coding, cybersecurity, penelitian, sampai workflow yang membutuhkan penalaran panjang.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Baru saja orang-orang mulai memahami apa itu Carbon, bagaimana dengan Hydrogen?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pada 10 November 2026, Gemini 4 Carbon mulai tersedia. Lalu, pada 12 November 2026, Google memperkenalkan Gemini 4 Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dua hari.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Iya, dua hari.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kita saja kadang butuh dua hari untuk menyelesaikan satu tugas sekolah. Google malah sudah memperkenalkan model AI baru. 😭
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tapi ada sesuatu yang lebih menarik daripada sekadar tanggal peluncurannya.
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            Carbon dan Hydrogen ternyata punya peran yang berbeda.
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyebut Carbon dan Argon sebagai model frontier untuk penalaran mendalam dan persoalan berat. Sementara Hydrogen dirancang untuk eksekusi cepat dan efisien dalam berbagai agentic workflow.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, Google tidak hanya berusaha membuat satu AI yang paling pintar untuk semua pekerjaan. Google juga sedang membangun ekosistem model yang bisa bekerja bersama sesuai kebutuhan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk memahami hal ini, bayangkan sebuah komplek perumahan besar yang punya tiga petugas keamanan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada satpam junior yang sudah terlatih, satpam senior muda yang gesit, dan satpam senior veteran yang memiliki ilmu serta pengalaman mendalam.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ketiganya sama-sama penting, tetapi tidak selalu menangani pekerjaan yang sama.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dan di sinilah pertanyaan menariknya muncul:
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            Untuk apa memiliki AI yang mampu berpikir sangat dalam, kalau sebagian besar pekerjaan sehari-hari sebenarnya membutuhkan kecepatan, ketepatan, dan eksekusi yang efisien?
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Mari kita bongkar.
      </p>
    
    </div>
  </section>

      
    {/* ── SECTION 01: 01-APA-ITU-GEMINI-4-HYDROGEN ────────────────── */}
    <section id="01-apa-itu-gemini-4-hydrogen" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 01 · ARSITEKTUR MODEL</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          1. Apa Itu Gemini 4 Hydrogen?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Gemini 4 Hydrogen adalah model kecerdasan buatan dari Google DeepMind yang dirancang untuk menghadirkan kecepatan dan efisiensi dalam coding sehari-hari, pekerjaan profesional, serta agentic workflow.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google memperkenalkannya pada 12 November 2026 melalui pengumuman berjudul <em className="text-[#E5DCD5] italic">Introducing Gemini 4 Hydrogen</em>.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Berbeda dari fokus utama Gemini 4 Carbon dan Argon yang diarahkan pada penalaran mendalam untuk persoalan paling sulit, Hydrogen lebih difokuskan pada pelaksanaan tugas secara cepat dan terarah.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Beberapa bidang penggunaan yang menjadi fokusnya:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Coding dan software development.</li>
<li>Debugging dan perbaikan repository.</li>
<li>Web development.</li>
<li>Agentic execution.</li>
<li>Analisis dokumen dan data.</li>
<li>Pekerjaan multimodal.</li>
<li>Pembuatan prototipe aplikasi.</li>
<li>Penulisan, riset, dan produktivitas sehari-hari.</li>
<li>Penggunaan tools secara bertahap.</li>
<li>Pembuatan dan pengujian perubahan software.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menggambarkan Hydrogen sebagai model yang membawa kecerdasan tingkat tinggi dengan fokus pada kecepatan dan efisiensi untuk pekerjaan sehari-hari.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sederhananya, Hydrogen bukan hanya dibuat untuk menjawab pertanyaan. Model ini ditujukan untuk membantu menyelesaikan pekerjaan yang mempunyai beberapa langkah.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Contohnya, kamu meminta AI memperbaiki website.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pekerjaan tersebut tidak hanya mencakup menulis kode. AI perlu memahami file, menemukan bagian yang bermasalah, membuat perubahan, menjalankan pemeriksaan, lalu memastikan perubahan tersebut tidak merusak bagian lain.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dirancang untuk membantu proses semacam itu dengan fokus pada kecepatan dan penggunaan sumber daya yang lebih efisien.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Mengapa namanya Hydrogen?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen adalah nama unsur kimia dengan simbol H dan nomor atom 1. Unsur ini dikenal sebagai unsur paling ringan dalam tabel periodik.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara itu, Carbon merupakan unsur dengan simbol C dan nomor atom 6.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Nama tersebut bisa menjadi analogi menarik untuk memahami identitas seri model ini. Tetapi jangan langsung menyimpulkan bahwa Hydrogen pasti memiliki jumlah parameter lebih sedikit hanya berdasarkan nama kimianya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google secara resmi menjelaskan bahwa Gemini 4 Hydrogen diadaptasi dari Gemini 4 Carbon. Detail ukuran parameter atau mekanisme internal yang tidak diungkapkan tidak boleh kita tebak sendiri.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, yang bisa kita pegang adalah fokus produk dan karakteristik yang dijelaskan Google: kecepatan, efisiensi, eksekusi, dan workflow agentic.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 02: 02-ANALOGI-SATPAM ────────────────── */}
    <section id="02-analogi-satpam" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 02 · ANALOGI TIGA SATPAM</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          2. Analogi Komplek Keamanan: Argon Junior, Hydrogen Senior Muda, Carbon Senior Veteran
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang kita kembali ke Komplek Digital.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan sebuah komplek perumahan besar dengan tiga petugas keamanan yang memiliki kemampuan dan pengalaman berbeda.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Masing-masing mempunyai tugas penting. Tidak ada yang benar-benar tidak berguna, tetapi ada pekerjaan yang lebih cocok ditangani oleh petugas tertentu.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Gemini 4 Argon: Satpam Junior yang Sudah Terlatih</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kita mulai dari Argon.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam analogi artikel kelima, Argon adalah satpam junior yang sudah menjalani pelatihan serius.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia bukan orang baru yang tidak memahami pekerjaan. Dia sudah mengenali lingkungan, memahami SOP keamanan, mampu memeriksa CCTV, dan bisa menangani berbagai laporan sehari-hari.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya, ada warga kehilangan paket.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Argon dapat:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Memeriksa catatan penerimaan.</li>
<li>Mengecek lokasi penyimpanan.</li>
<li>Melihat rekaman CCTV.</li>
<li>Menghubungi petugas yang berjaga.</li>
<li>Mengumpulkan informasi yang dibutuhkan.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk masalah umum, dia sudah cukup kompeten.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam dunia AI, Gemini 4 Argon tetap merupakan model frontier yang ditujukan untuk pekerjaan profesional, termasuk software engineering dan knowledge work.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, jangan menganggap Argon sebagai model buruk hanya karena kita sedang membahas Hydrogen dan Carbon.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Gemini 4 Hydrogen: Satpam Senior Muda yang Gesit</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang kita bertemu Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia bukan satpam junior seperti Argon dalam analogi kita. Hydrogen sudah naik menjadi satpam senior muda.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Walaupun belum memiliki pengalaman sepanjang petugas veteran, dia sudah terlatih, memahami berbagai prosedur, mempunyai kemampuan operasional yang matang, dan sangat gesit ketika harus menyelesaikan pekerjaan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan ada laporan bahwa beberapa kendaraan parkir tidak sesuai area.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen langsung bergerak.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia memeriksa lokasi, mencocokkan laporan, menghubungi petugas terkait, lalu memastikan masalah selesai.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia tidak harus menunggu rapat besar untuk setiap masalah operasional.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Nah, inilah karakter Gemini 4 Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google merancangnya untuk membantu:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Menulis kode.</li>
<li>Memperbaiki bug.</li>
<li>Membuat komponen website.</li>
<li>Menjalankan pengujian.</li>
<li>Menelusuri repository.</li>
<li>Membuat prototipe.</li>
<li>Melakukan iterasi.</li>
<li>Menjalankan berbagai tugas agentic.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen memiliki fokus pada rapid execution, yaitu kemampuan menjalankan tugas dengan cepat dan terarah.
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            Hydrogen adalah satpam senior muda yang sudah berpengalaman, tetapi masih sangat gesit ketika harus bergerak dari satu pekerjaan ke pekerjaan berikutnya.
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Gemini 4 Carbon: Satpam Senior Veteran dengan Ilmu Mendalam</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Lalu, siapa Carbon?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam analogi kita, Carbon adalah satpam senior veteran sekaligus spesialis.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia sudah sangat berpengalaman. Banyak masalah rumit pernah ditanganinya. Dia tidak hanya mengandalkan prosedur standar, tetapi juga mampu menganalisis situasi yang mempunyai banyak kemungkinan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya, terjadi gangguan keamanan di beberapa gedung sekaligus.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada rekaman CCTV dari banyak sudut, akses pintu yang tidak biasa, laporan warga, dan beberapa informasi yang saling berkaitan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Carbon akan mengumpulkan semuanya, membandingkan kronologi, menelusuri hubungan antarkejadian, dan melakukan investigasi mendalam sebelum mengambil keputusan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam dunia AI, karakter ini menggambarkan fokus Gemini 4 Carbon pada:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Complex reasoning.</li>
<li>Deep analysis.</li>
<li>Arsitektur software.</li>
<li>Investigasi bug lintas sistem.</li>
<li>Scientific reasoning.</li>
<li>Cybersecurity.</li>
<li>Long-horizon agentic workflow.</li>
<li>Pekerjaan kompleks yang membutuhkan verifikasi panjang.</li>
        </ul>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Kenapa kemampuan Carbon bisa terasa lebih mahal?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan sebuah perusahaan keamanan memanggil spesialis veteran untuk menangani investigasi besar.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Keahliannya sangat bernilai karena pekerjaan yang ditangani lebih rumit dan membutuhkan sumber daya lebih besar.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam dunia AI, analoginya berkaitan dengan kebutuhan komputasi, penalaran yang lebih dalam, penggunaan token, serta waktu pemrosesan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menjelaskan bahwa Carbon menggunakan lebih banyak thinking tokens daripada Argon untuk mengeksplorasi berbagai kemungkinan, melakukan penalaran mendalam, dan menjalankan proses verifikasi yang lebih panjang.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hal ini dapat membuat biaya penggunaan Carbon lebih tinggi pada jalur API.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tetapi ingat, Carbon bukan benar-benar manusia tua, dan Hydrogen bukan manusia muda. Usia dalam cerita ini hanya analogi untuk menjelaskan perbedaan karakter dan fokus kerja.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Biaya model bukan ditentukan oleh umur. Biaya ditentukan oleh struktur harga layanan, token, komputasi, serta cara model digunakan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Perbandingan ketiga model</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Model</th><th className="py-3 px-4 text-right sm:text-left">Analogi</th><th className="py-3 px-4 text-right sm:text-left">Karakter pekerjaan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Argon
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Satpam junior terlatih
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Kompeten untuk banyak pekerjaan profesional
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Hydrogen
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Satpam senior muda
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Gesit, cepat, dan efisien dalam eksekusi
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Carbon
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Satpam senior veteran spesialis
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  Penalaran mendalam untuk kasus kompleks
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dari sini kita bisa memahami satu hal penting:
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            Hydrogen bukan Argon yang hanya diberi nama baru, dan Hydrogen juga bukan Carbon yang harus menggantikan seluruh pekerjaannya.
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ketiganya memiliki peran berbeda.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 03: 03-HUBUNGAN-HYDROGEN-CARBON ────────────────── */}
    <section id="03-hubungan-hydrogen-carbon" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 03 · KELUARGA GEMINI 4</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          3. Apa Hubungan Gemini 4 Hydrogen dengan Carbon?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini salah satu fakta teknis yang menarik.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam Model Card resminya, Google DeepMind menyatakan bahwa Gemini 4 Hydrogen merupakan model yang diadaptasi dari Gemini 4 Carbon.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara itu, Model Card Carbon menyatakan bahwa Carbon dibangun berdasarkan Gemini 4 Argon.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, hubungan ketiganya memiliki jalur ketergantungan model yang saling berkaitan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, Google tidak mengungkapkan semua detail arsitektur internal Hydrogen secara lengkap dalam Model Card tersebut.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Karena itu, kita tidak boleh langsung mengklaim bahwa Hydrogen adalah Carbon yang dipangkas ukurannya, versi mini, atau hasil kompresi tertentu tanpa bukti resmi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Yang dijelaskan secara resmi adalah:
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Model</th><th className="py-3 px-4 text-left">Fokus utama</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Argon
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Model frontier untuk software engineering dan knowledge work
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Carbon
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Penalaran mendalam dan tugas kompleks dengan proses panjang
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Hydrogen
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Eksekusi cepat dan efisien untuk coding serta agentic workflow
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Mengapa Google membuat model dengan fokus berbeda?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan kamu sedang membangun gedung perkantoran.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada pekerjaan yang membutuhkan keputusan arsitektur besar, misalnya menentukan struktur gedung, jalur listrik, sistem keamanan, dan pembagian ruangan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, ada juga pekerjaan yang lebih rutin:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Memasang pintu.</li>
<li>Memeriksa lampu.</li>
<li>Memperbaiki keran.</li>
<li>Mengecek kabel.</li>
<li>Menyesuaikan interior.</li>
<li>Melakukan pemeriksaan akhir.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Apakah seluruh pekerjaan tersebut harus dilakukan oleh arsitek utama?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tentu tidak.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Arsitek tetap penting, tetapi pekerjaan operasional dapat ditangani oleh tim yang terlatih.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Begitu juga dengan AI.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model yang digunakan untuk penalaran berat tidak selalu perlu dipakai untuk setiap tugas sederhana.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dengan pendekatan multi-model, pekerjaan bisa dialihkan sesuai kebutuhan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Itulah alasan mengapa Hydrogen menarik.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 04: 04-ORCHESTRATOR ────────────────── */}
    <section id="04-orchestrator" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 04 · ORCHESTRATOR & MULTI-AGENT</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          4. Orchestrator: Kepala Operasional yang Membagi Pekerjaan AI
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang kita bertemu satu komponen penting lainnya: <strong className="text-[#F7F1EB]">Orchestrator di Google Antigravity</strong>.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kembali ke Komplek Digital.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan ada seorang kepala operasional yang bertanggung jawab mengatur seluruh petugas.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia tidak harus memeriksa semua gedung sendiri.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tugasnya adalah menentukan siapa yang paling tepat untuk mengerjakan masalah tertentu.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ketika ada laporan rutin, dia bisa mengirim Argon atau Hydrogen sesuai kebutuhan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ketika muncul masalah yang membutuhkan penalaran dan investigasi lebih mendalam, Carbon dapat mengambil peran.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Itulah analogi Orchestrator.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Bagaimana cara kerja Orchestrator?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google memperkenalkan Orchestrator di Antigravity agar sistem dapat berpindah secara dinamis antara model seperti Carbon dan Hydrogen dalam satu sesi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, developer tidak harus selalu memaksa satu model mengerjakan seluruh rangkaian pekerjaan dari awal sampai akhir.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Contoh kasus: membangun website bisnis</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya kamu ingin membangun aplikasi bisnis dengan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Homepage.</li>
<li>Dashboard admin.</li>
<li>Database pelanggan.</li>
<li>Sistem autentikasi.</li>
<li>Katalog produk.</li>
<li>Integrasi API.</li>
<li>Halaman transaksi.</li>
<li>Sistem laporan.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kamu memulai dengan perencanaan arsitektur.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pada tahap ini, Carbon bisa berperan sebagai spesialis yang membantu mempertimbangkan struktur dan risiko.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Setelah rencana dibuat, Hydrogen dapat membantu menjalankan pekerjaan yang lebih berorientasi eksekusi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya:
      </p>
    

        <ol className="space-y-2 list-decimal pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Membuat komponen frontend.</li>
<li>Mengimplementasikan halaman dashboard.</li>
<li>Menjalankan unit test.</li>
<li>Memeriksa hasil perubahan.</li>
<li>Memperbaiki error yang ditemukan.</li>
<li>Mengulang pengujian.</li>
        </ol>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau ada masalah arsitektur yang membutuhkan analisis mendalam, pekerjaan dapat kembali melibatkan Carbon.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini merupakan pendekatan yang lebih fleksibel daripada memaksa satu model mengerjakan seluruh pekerjaan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Hasil pengujian Orchestrator</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google melaporkan hasil pengujian pada Terminal-Bench 4.0.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam evaluasi tersebut, Orchestrator mencapai tingkat keberhasilan tugas yang mendekati Carbon, dengan rata-rata:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Menggunakan kuota 24% lebih sedikit.</li>
<li>Menyelesaikan pekerjaan 19% lebih cepat.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Angka tersebut merupakan hasil evaluasi yang dilaporkan Google. Bukan jaminan bahwa setiap project akan selalu mendapatkan penghematan dan kecepatan yang sama.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Carbon sebagai koordinator, Hydrogen sebagai worker dan verifier</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menjelaskan penggunaan beberapa agent secara paralel.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam skenario tersebut:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Carbon dapat menjadi koordinator.</li>
<li>Hydrogen dapat menjalankan tugas worker.</li>
<li>Hydrogen juga dapat membantu sebagai verifier.</li>
<li>Beberapa agent dapat mengerjakan dan menguji perubahan secara bersamaan di workspace terisolasi.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan satu tim mengembangkan aplikasi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agent pertama membuat komponen login.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agent kedua membuat dashboard.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agent ketiga menjalankan pengujian.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agent keempat memeriksa perubahan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara itu, Carbon membantu mengoordinasikan pekerjaan agar seluruh bagian tetap sesuai rencana.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, multi-agent bukan berarti semakin banyak agent selalu semakin bagus. Koordinasi, pembagian tugas, biaya, dan validasi tetap menentukan kualitas pekerjaan.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 05: 05-CODING ────────────────── */}
    <section id="05-coding" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 05 · CODING & SOFTWARE ENGINEERING</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          5. Gemini 4 Hydrogen untuk Coding: Bukan Sekadar Menulis Kode
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Banyak orang menilai AI coding berdasarkan satu pertanyaan:
      </p>
    

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Apakah AI bisa menulis kode?"
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Padahal, kemampuan coding yang berguna dalam pekerjaan nyata jauh lebih luas.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Developer tidak hanya perlu membuat kode baru. Mereka juga harus memahami kode lama, menemukan masalah, memperbaiki bug, dan menjaga agar fitur lainnya tidak rusak.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyoroti kemampuan Hydrogen dalam iterative repository coding dan debugging.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>A. Memahami repository</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Repository adalah kumpulan file dan riwayat kode sebuah project.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan kamu memiliki project Next.js dengan ratusan file.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau ada masalah, kamu tidak bisa asal mengubah file yang namanya terlihat mencurigakan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        AI perlu memahami struktur folder, mencari file yang relevan, serta menelusuri hubungan antarbagian.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menjelaskan bahwa Hydrogen dapat menjalankan pembacaan dan pencarian file secara paralel melalui batching, sehingga proses eksplorasi repository besar bisa lebih efisien.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>B. Debugging tanpa merombak seluruh project</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Satu masalah developer yang sering terjadi adalah AI mengubah terlalu banyak bagian.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya, kamu hanya meminta memperbaiki tombol yang tidak berfungsi, tetapi AI malah mengubah navbar, layout, komponen footer, dan struktur halaman.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Lah, yang diminta memperbaiki tombol, kok satu rumah ikut direnovasi? 😭
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menjelaskan bahwa Hydrogen dirancang untuk melakukan focused, surgical edits.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Maksudnya, perubahan diarahkan pada bagian yang relevan tanpa harus menulis ulang file atau komponen lain yang tidak berkaitan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tentu, hasil akhirnya tetap perlu diperiksa dan diuji.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>C. Iterasi kode</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pekerjaan coding biasanya berlangsung dalam siklus:
      </p>
    

        <ol className="space-y-2 list-decimal pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Membaca kode.</li>
<li>Memahami masalah.</li>
<li>Membuat perubahan.</li>
<li>Menjalankan pengujian.</li>
<li>Menemukan error.</li>
<li>Memperbaiki hasil.</li>
<li>Menguji kembali.</li>
        </ol>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dirancang untuk membantu proses iteratif ini dengan lebih cepat.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>D. Pengujian dan verifikasi</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Menulis kode bukan akhir pekerjaan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sistem harus diuji.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya, setelah memperbaiki halaman login, developer perlu memastikan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Form dapat dikirim.</li>
<li>Validasi berjalan.</li>
<li>Pesan error sesuai.</li>
<li>Autentikasi tidak terganggu.</li>
<li>Halaman tetap responsive.</li>
<li>Build tetap berhasil.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dapat berperan sebagai bagian dari workflow implementasi dan verifikasi.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 06: 06-KECEPATAN ────────────────── */}
    <section id="06-kecepatan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 06 · KECEPATAN & EFISIENSI</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          6. Seberapa Cepat Gemini 4 Hydrogen?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menempatkan kecepatan sebagai salah satu fokus utama Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam pengumumannya, Google menyebut Hydrogen dapat menyelesaikan tugas 2,5 kali lebih cepat dibanding Gemini 3.8 Flash pada konfigurasi High default yang diuji.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menyebut:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Terminal-Bench 4.1 mencapai 57%, dibanding 18,2% pada Gemini 3.8 Flash.</li>
<li>Klaim fabrikasi informasi turun lebih dari lima kali dalam evaluasi yang disebutkan.</li>
<li>Model lebih baik dalam menangani kegagalan tool call atau hasil pencarian kosong.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Selain itu, dalam pengujian awal mitra Google pada workflow data kompleks, Hydrogen dilaporkan bekerja 2 sampai 2,8 kali lebih cepat daripada Gemini 3.8 Flash, dengan pengurangan penggunaan token sekitar 12% sampai 23%.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Angka tersebut merupakan hasil dan klaim yang dipublikasikan Google. Tidak berarti setiap permintaan pengguna akan selalu 2,5 kali lebih cepat.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kecepatan juga dipengaruhi oleh:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Kompleksitas prompt.</li>
<li>Panjang konteks.</li>
<li>Jumlah tool call.</li>
<li>Kualitas koneksi.</li>
<li>Beban layanan.</li>
<li>Tingkat thinking.</li>
<li>Jenis pekerjaan yang dikerjakan.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, jangan mengira semua pertanyaan akan langsung dijawab dalam hitungan sepersekian detik.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 07: 07-BENCHMARK ────────────────── */}
    <section id="07-benchmark" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 07 · BENCHMARK & EVALUASI</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          7. Benchmark Gemini 4 Hydrogen: Melawan Claude Sonnet dan GPT
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang kita masuk ke bagian yang selalu ditunggu penggemar AI: benchmark.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google DeepMind mempublikasikan hasil evaluasi Gemini 4 Hydrogen pada November 2026.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model Card mencantumkan sejumlah perbandingan dengan Claude Sonnet 5.5 dan GPT-6.1 Terra.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Berikut beberapa hasilnya.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>A. Agentic coding</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Benchmark</th><th className="py-3 px-4 text-right sm:text-left">Hydrogen</th><th className="py-3 px-4 text-right sm:text-left">Claude Sonnet 5.5</th><th className="py-3 px-4 text-right sm:text-left">GPT-6.1 Terra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  SWE-sweep
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  13,5%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  3,1%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  5,8%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Terminal-Bench 4.1 (cheating-adjusted)
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  57,0%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  63,9%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  —
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Apa yang menarik?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen unggul pada SWE-sweep dalam tabel ini, tetapi Claude Sonnet 5.5 lebih tinggi pada Terminal-Bench 4.1.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, kemampuan coding tidak bisa disimpulkan dari satu angka.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        SWE-sweep dan Terminal-Bench menguji jenis pekerjaan yang berbeda.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>B. Knowledge work</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Benchmark</th><th className="py-3 px-4 text-right sm:text-left">Hydrogen</th><th className="py-3 px-4 text-right sm:text-left">Claude Sonnet 5.5</th><th className="py-3 px-4 text-right sm:text-left">GPT-6.1 Terra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Agents' Last Exam v1.1
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  71,6%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  60,4%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  69,8%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  AutomationBench-AA
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  76,1%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  71,8%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  60,2%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Vending-Bench 2 (saldo simulasi)
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$14.549
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$11.165
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$9.107
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen memperlihatkan hasil tinggi pada beberapa pengujian knowledge work.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Perlu diingat, saldo Vending-Bench merupakan hasil simulasi dalam lingkungan benchmark, bukan pendapatan nyata yang diperoleh model.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>C. Computer use</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Benchmark</th><th className="py-3 px-4 text-right sm:text-left">Hydrogen</th><th className="py-3 px-4 text-right sm:text-left">Claude Sonnet 5.5</th><th className="py-3 px-4 text-right sm:text-left">GPT-6.1 Terra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  OSWorld-2.1 (offline subset)
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  77,6%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  83,9%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  74,2%
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pada pengujian ini, Claude Sonnet 5.5 memperoleh hasil lebih tinggi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekali lagi, Hydrogen tidak memenangkan semua kategori.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>D. Multimodal understanding</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Benchmark</th><th className="py-3 px-4 text-right sm:text-left">Hydrogen</th><th className="py-3 px-4 text-right sm:text-left">Claude Sonnet 5.5</th><th className="py-3 px-4 text-right sm:text-left">GPT-6.1 Terra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  MKA (Climb WSR accuracy)
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  53,4%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  52,0%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  43,8%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Chartography
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  66,6%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  61,6%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  63,2%
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hasilnya memperlihatkan kemampuan Hydrogen dalam memahami pekerjaan multimodal, khususnya dokumen dan konten visual yang kompleks.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>E. Science dan reasoning</span>
        </h3>
      

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Benchmark</th><th className="py-3 px-4 text-right sm:text-left">Hydrogen</th><th className="py-3 px-4 text-right sm:text-left">Claude Sonnet 5.5</th><th className="py-3 px-4 text-right sm:text-left">GPT-6.1 Terra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Terminal-Bench-Science 0.1
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  51,4%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  59,9%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  58,3%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  HLE-Diamond
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  58,8%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  53,3%
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  47,3%
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen memperoleh skor tertinggi pada HLE-Diamond dalam perbandingan ini, tetapi tidak pada Terminal-Bench-Science.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>F. Artificial Analysis Intelligence Index</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menyebut Hydrogen melampaui Argon pada Artificial Analysis Intelligence Index:
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Model dan konfigurasi</th><th className="py-3 px-4 text-left">Skor indeks</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Hydrogen — High (default)
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  51
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Argon
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  50
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Hydrogen — XHigh
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  54
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Skor ini adalah indeks evaluasi, bukan persentase keberhasilan tugas.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Apa kesimpulan dari benchmark tersebut?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kita dapat melihat bahwa:
      </p>
    

        <ol className="space-y-2 list-decimal pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Hydrogen sangat kompetitif pada beberapa pengujian agentic coding.</li>
<li>Hydrogen mencatat hasil kuat pada beberapa kategori knowledge work.</li>
<li>Claude Sonnet 5.5 masih unggul pada beberapa benchmark, termasuk OSWorld dan Terminal-Bench 4.1.</li>
<li>GPT-6.1 Terra unggul pada beberapa hasil tertentu, tetapi tidak pada seluruh kategori.</li>
<li>Hydrogen melampaui Argon pada Artificial Analysis Intelligence Index di konfigurasi High dan XHigh.</li>
<li>Tidak ada satu model yang otomatis menjadi pemenang universal.</li>
        </ol>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Penting: angka di atas bersumber dari Model Card Google DeepMind. Hasil benchmark bergantung pada metodologi, versi pengujian, konfigurasi model, dan lingkungan evaluasi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jangan menyamakan seluruh benchmark seolah-olah mengukur pekerjaan yang sama.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 08: 08-THINKING-LEVELS ────────────────── */}
    <section id="08-thinking-levels" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 08 · THINKING LEVELS</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          8. Empat Thinking Levels: Pengguna Bisa Memilih Kecepatan atau Kedalaman?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bagian ini menarik karena Google menyediakan empat tingkat thinking pada Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namanya:
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Thinking level</th><th className="py-3 px-4 text-left">Fokus umum</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Low
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Respons lebih ringan dan cepat
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Medium
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Keseimbangan antara kecepatan dan kualitas
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  High
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Default untuk pekerjaan yang membutuhkan penalaran lebih
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  XHigh
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Penalaran lebih mendalam untuk tugas yang lebih berat
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan tiga petugas di Komplek Digital.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Argon, Hydrogen, dan Carbon mempunyai pekerjaan berbeda. Bahkan ketika satu petugas mengerjakan tugasnya, kedalaman pemeriksaan masih bisa disesuaikan dengan tingkat masalah.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau hanya ada laporan paket tertukar, Hydrogen tidak harus melakukan investigasi besar.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, kalau ada laporan kehilangan barang yang melibatkan beberapa lokasi dan banyak saksi, proses pemeriksaan harus lebih mendalam.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Begitu juga dengan konfigurasi thinking.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk tugas ringan, tingkat penalaran yang lebih rendah bisa lebih efisien.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk tugas yang lebih kompleks, tingkat penalaran yang lebih tinggi mungkin diperlukan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Kenapa ini penting?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Karena semakin dalam proses penalaran, penggunaan token dan waktu bisa ikut meningkat.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menjelaskan bahwa empat level tersebut dirancang untuk memberikan pilihan yang lebih terukur antara kualitas, latensi, dan biaya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dengan begitu, tidak semua pekerjaan harus menggunakan konfigurasi paling berat.
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            AI yang efisien bukan berarti selalu berpikir paling sedikit, melainkan tahu kapan harus berpikir lebih dalam dan kapan harus segera mengeksekusi.
          </p>
        </div>
      
      </div>
    </section>
  

    {/* ── SECTION 09: 09-GAME-3D-WEBSITE ────────────────── */}
    <section id="09-game-3d-website" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 09 · GAME 3D & WEB DEVELOPMENT</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          9. Gemini 4 Hydrogen untuk Pembuatan Game 3D dan Website
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang masuk ke salah satu bagian paling menarik.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google tidak hanya membahas Hydrogen sebagai model untuk coding terminal atau membuat dokumen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga memperlihatkan demonstrasi pengembangan proyek interaktif berbasis web.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>A. Geminisland: Voxel Island dari Satu Prompt</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan kamu memiliki sebuah pulau virtual.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kamu dapat menambahkan bangunan ke pulau tersebut hanya dengan memberikan prompt.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google memperkenalkan demonstrasi bernama Geminisland.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dengan menggunakan Hydrogen untuk coding 3D secara langsung, pengguna dapat menambahkan struktur voxel khusus ke pulau bersama.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pemain kemudian bisa berjalan dan menjelajahi pulau tersebut dari sudut pandang first-person.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini menarik karena pekerjaan bukan berhenti pada menghasilkan gambar 3D.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model membantu menghasilkan struktur yang dapat menjadi bagian dari lingkungan interaktif.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Teknologi seperti ini membuka peluang eksperimen untuk:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Game browser.</li>
<li>Dunia voxel.</li>
<li>Simulasi interaktif.</li>
<li>Prototipe game.</li>
<li>Visualisasi arsitektur.</li>
<li>Lingkungan digital.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Lihat demonstrasi yang disediakan Google:
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        https://aistudio.google.com/
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>B. Website E-commerce dengan 3D dan WebGL2</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga memperlihatkan Hydrogen membangun sebuah storefront e-commerce dengan bantuan Gemini Front End Design Skill di Antigravity.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam demonstrasi tersebut, website dilengkapi:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>WebGL2 topographic shader.</li>
<li>Empat tahap scrollytelling.</li>
<li>Thermal split-slider.</li>
<li>Kartu spesifikasi wireframe 3D.</li>
<li>Live finish configurator.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, Hydrogen bukan cuma membuat halaman produk dengan gambar dan tombol beli.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model ini membantu membuat pengalaman produk yang lebih interaktif dan kompleks.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, hasil tersebut tetap perlu diperiksa dari sisi performa, aksesibilitas, responsive design, dan pengalaman pengguna.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>C. Google Sheets Menjadi Kanvas Pixel Animasi</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini salah satu demonstrasi yang cukup unik.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menunjukkan Hydrogen mengubah ribuan sel Google Sheets menjadi kanvas pixel yang dapat menampilkan animasi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Prosesnya memanfaatkan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Python.</li>
<li>Formula native <code className="px-1.5 py-0.5 rounded bg-white/10 text-[#F45B1A] font-mono text-xs">=LET(...)</code>.</li>
<li>Conditional formatting.</li>
<li>Ribuan sel spreadsheet.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, Google Sheets bukan hanya dipakai untuk menghitung angka, tetapi juga menjadi medium eksperimen visual.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan spreadsheet yang biasanya digunakan untuk menghitung pengeluaran malah menjadi layar animasi. Agak tidak sesuai ekspektasi, tetapi justru menarik.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>D. Presentasi Google Slides dengan Audit Otomatis</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga memperlihatkan Hydrogen membuat presentasi multi-slide berdasarkan video keynote YouTube dan template desain di Antigravity.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Setelah menghasilkan presentasi, sistem menjalankan siklus audit dan perbaikan otomatis untuk mendeteksi:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Teks yang bertumpuk.</li>
<li>Layout slide yang tidak rapi.</li>
<li>Masalah penempatan elemen.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini menunjukkan bagaimana workflow AI dapat mencakup pembuatan sekaligus pemeriksaan hasil.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>E. Globe 3D dengan Data Petir Real-Time</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen juga membantu membangun globe 3D interaktif yang menampilkan sambaran petir di seluruh dunia.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Setiap sambaran dipetakan menjadi efek visual berupa riak dan terhubung dengan sistem musik berbasis Web Audio.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, data real-time bukan hanya ditampilkan sebagai angka, tetapi diubah menjadi pengalaman visual dan audio.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>F. Water and Glass Visualizer</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google memperlihatkan demonstrasi visualizer air dan kaca berbasis WebGL2.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen membangunnya menggunakan perhitungan matematika dan SDF textures untuk mensimulasikan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Refraction.</li>
<li>Reflection.</li>
<li>Dispersion.</li>
<li>Absorption.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Empat konsep tersebut berkaitan dengan bagaimana cahaya berinteraksi dengan material.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bagi developer web, ini contoh menarik tentang penggunaan AI untuk mempercepat pembuatan visual interaktif.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>G. Video Dokumenter tentang Unsur Hydrogen</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dan ini bagian yang cukup lucu.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menunjukkan Hydrogen membuat sebuah video sizzle reel arsip tentang unsur kimia Hydrogen.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Prosesnya menggunakan custom skill untuk perakitan video, mengikuti creative brief, mengambil footage public-domain, lalu menyatukannya menjadi satu edit lengkap dengan narasi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, Google bahkan memperlihatkan model bernama Hydrogen membuat video tentang unsur kimia Hydrogen itu sendiri.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agak meta, ya. AI bernama Hydrogen membuat video tentang Hydrogen. 😭
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 10: 10-HYDROGEN-VS-CARBON ────────────────── */}
    <section id="10-hydrogen-vs-carbon" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 10 · EVALUASI PERAN</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          10. Apakah Gemini 4 Hydrogen Lebih Baik daripada Carbon?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini pertanyaan yang pasti muncul.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau Carbon merupakan satpam senior veteran dengan keahlian mendalam, apakah Hydrogen lebih lemah?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tidak sesederhana itu.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kita harus membedakan antara:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Kedalaman penalaran.</li>
<li>Kecepatan eksekusi.</li>
<li>Efisiensi penggunaan token.</li>
<li>Kualitas hasil.</li>
<li>Jenis pekerjaan.</li>
<li>Penggunaan tools.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dirancang agar cepat menjalankan pekerjaan dan dapat berkolaborasi dengan model frontier.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Carbon lebih diarahkan untuk penalaran mendalam pada persoalan paling berat.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Argon juga tetap memiliki posisi sebagai model frontier untuk banyak pekerjaan profesional.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Coba lihat tabel berikut.
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Kebutuhan</th><th className="py-3 px-4 text-left">Model yang relevan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Menulis kode dan menjalankan perubahan rutin
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hydrogen
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Memperbaiki bug secara iteratif
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hydrogen
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Prototipe web secara cepat
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hydrogen
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Analisis arsitektur yang sangat kompleks
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Carbon
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Investigasi masalah lintas sistem
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Carbon atau Argon
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pekerjaan profesional yang membutuhkan penalaran mendalam
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Argon atau Carbon
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Workflow multi-agent
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Carbon + Hydrogen
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Coding cepat disertai verifikasi
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hydrogen
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Mengatur pembagian tugas antarmodel
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Orchestrator
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tabel ini adalah panduan pemilihan berdasarkan peran yang dijelaskan Google, bukan klaim bahwa satu model pasti mengalahkan model lain dalam semua situasi.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Jadi, apakah Hydrogen menggantikan Carbon?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tidak.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Justru strategi Google menunjukkan bahwa kedua model dapat digunakan secara bersamaan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Carbon dapat membantu mengoordinasikan pekerjaan yang kompleks, sementara Hydrogen membantu melakukan implementasi dan verifikasi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam cerita komplek kita, satpam senior muda tidak perlu menggantikan satpam senior veteran.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sebaliknya, satpam veteran juga tidak harus menangani setiap laporan kecil.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara Argon tetap dapat menangani pekerjaan yang sesuai dengan kemampuan profesionalnya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ketiganya dapat saling melengkapi.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 11: 11-KONTEKS-1-JUTA-TOKEN ────────────────── */}
    <section id="11-konteks-1-juta-token" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 11 · CONTEXT WINDOW</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          11. Apakah Hydrogen Memiliki Konteks 1 Juta Token?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ya. Model Card Google DeepMind mencantumkan jendela konteks gabungan input dan output hingga 1 juta token.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen mendukung input:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Teks.</li>
<li>Gambar.</li>
<li>Audio.</li>
<li>Video.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk output, Model Card mencantumkan hingga 64 ribu token pada mode synchronous secara default, dan hingga 1 juta token melalui background long decode.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menjelaskan kemampuan multimodal knowledge work untuk mengolah PDF, spreadsheet, chart, audio, dan video menjadi laporan serta deliverable terstruktur.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Apa manfaatnya?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan kamu memiliki:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Beberapa dokumen PDF.</li>
<li>Spreadsheet keuangan.</li>
<li>Diagram proyek.</li>
<li>Rekaman rapat.</li>
<li>Video presentasi.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Daripada menganalisis semuanya secara terpisah, Hydrogen dapat membantu menghubungkan informasi tersebut dalam satu workflow.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google bahkan menunjukkan kemampuan untuk menggabungkan dokumen, spreadsheet, chart, audio, dan video menjadi laporan yang memiliki referensi serta deliverable terstruktur.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, kapasitas konteks bukan jaminan bahwa seluruh isi dokumen akan dipahami dengan sempurna.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dokumen tetap perlu diperiksa, terutama jika berisi angka, kontrak, atau informasi penting.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 12: 12-KEAMANAN-SOP ────────────────── */}
    <section id="12-keamanan-sop" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 12 · KEAMANAN & SOP</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          12. Keamanan Hydrogen: Satpam Senior Muda Tetap Harus Mengikuti SOP
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Satu persoalan besar pada AI agent adalah keamanan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan kamu memberikan satpam senior muda akses ke seluruh area komplek.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dia memang terlatih dan gesit, tetapi bukan berarti boleh masuk ke semua ruangan tanpa izin.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara itu, satpam senior veteran juga tidak bisa bertindak tanpa mengikuti aturan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam dunia AI, situasinya serupa.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        AI agent bisa diberikan akses ke repository, terminal, browser, file bisnis, dan berbagai tools.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau agent melakukan tindakan di luar instruksi, akibatnya bisa cukup serius.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Karena itu, model yang cepat tetap membutuhkan batasan izin dan sistem keamanan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Apa yang diklaim Google?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyatakan bahwa Hydrogen mendapatkan peningkatan pada sistem safety dan security Gemini 4.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dalam pengujian internal yang diumumkan Google, beberapa hasil yang dilaporkan antara lain:
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Evaluasi internal Google</th><th className="py-3 px-4 text-left">Hasil yang diumumkan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pengurangan overreach pada agentic task
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hingga 81%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pengurangan under-service
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hingga 79%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pengurangan misaligned actions dan task shortcutting dalam evaluasi tool-use dan coding
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  12 kali
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Lebih kecil kemungkinan melewati batas izin pada tugas yang terblokir
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Hingga 2 kali
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Agent honesty evaluation
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  94%
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Ketahanan terhadap indirect prompt injection pada Gray Swan IPI
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Lebih dari 2,3 kali
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Angka tersebut merupakan hasil evaluasi internal yang dipublikasikan Google, bukan jaminan keamanan mutlak atau audit independen untuk setiap lingkungan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Apa itu overreach?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Overreach terjadi ketika agent melakukan tindakan yang melampaui kebutuhan atau izin yang seharusnya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya kamu meminta AI memeriksa satu file, tetapi agent malah mencoba mengubah file lain yang tidak berhubungan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Apa itu indirect prompt injection?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Bayangkan sebuah website berisi instruksi tersembunyi yang mencoba memengaruhi AI ketika sedang melakukan pencarian.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Instruksi tersebut mungkin mencoba membuat agent mengabaikan perintah awal atau membocorkan informasi yang tidak seharusnya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Serangan seperti ini dikenal sebagai indirect prompt injection.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyatakan Hydrogen memiliki ketahanan lebih dari 2,3 kali pada benchmark Gray Swan IPI dibandingkan pembanding yang digunakan dalam evaluasinya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, keamanan tetap membutuhkan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Pembatasan akses.</li>
<li>Pemeriksaan izin.</li>
<li>Validasi tindakan.</li>
<li>Pengamanan API key.</li>
<li>Human oversight.</li>
<li>Monitoring.</li>
<li>Pengujian sistem.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jangan memberikan izin administrator ke agent hanya karena modelnya diklaim lebih aman.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 13: 13-HARGA-API ────────────────── */}
    <section id="13-harga-api" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 13 · HARGA & BIAYA API</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          13. Harga Gemini 4 Hydrogen API: Lebih Terjangkau daripada Carbon?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sekarang kita membahas bagian yang ditunggu developer.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google mengumumkan harga Gemini 4 Hydrogen melalui API sebesar:
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Jenis token</th><th className="py-3 px-4 text-left">Harga per 1 juta token</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Input
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  US$1,50
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Output
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  US$7,50
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyatakan tarif tersebut berlaku secara flat di seluruh jendela konteks 1 juta token.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, biaya aktual tetap bergantung pada jumlah token yang diproses.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Contoh perhitungan sederhana</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Misalnya sebuah aplikasi menggunakan:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>100.000 token input.</li>
<li>50.000 token output.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Perkiraan biaya berdasarkan harga yang diumumkan:
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Input:
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        100.000 / 1.000.000 × US$1,50 = US$0,15
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Output:
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        50.000 / 1.000.000 × US$7,50 = US$0,375
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Total:
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            US$0,525
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini hanya ilustrasi perhitungan berdasarkan harga dasar yang diumumkan. Penggunaan tools, layanan tambahan, atau ketentuan billing tertentu dapat memengaruhi biaya akhir.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Perbandingan dengan Carbon</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google mengumumkan harga API Carbon sebesar US$2 untuk input dan US$10 untuk output per satu juta token selama periode pengenalan sampai 30 November 2026.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Setelah periode tersebut berakhir, tarif publik yang diumumkan menjadi US$4 untuk input dan US$20 untuk output per satu juta token mulai 1 Desember 2026.
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Model</th><th className="py-3 px-4 text-right sm:text-left">Input/1 juta token</th><th className="py-3 px-4 text-right sm:text-left">Output/1 juta token</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Hydrogen
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$1,50
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$7,50
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Carbon — harga pengenalan
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$2
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$10
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Gemini 4 Carbon — harga setelah pengenalan
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$4
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] text-right sm:text-left font-mono text-xs">
                  US$20
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dengan struktur tarif tersebut, Hydrogen lebih ekonomis untuk banyak skenario API.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kita bisa menghubungkannya dengan analogi satpam tadi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen adalah satpam senior muda yang dapat menyelesaikan banyak pekerjaan operasional dengan cepat.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Carbon adalah satpam senior veteran yang memiliki keahlian lebih mendalam dan cocok untuk investigasi kompleks. Pada penggunaan API, kemampuan penalaran tambahan tersebut dapat melibatkan kebutuhan komputasi dan biaya yang lebih tinggi.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tetapi jangan hanya melihat harga per token.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model yang lebih murah belum tentu menghasilkan biaya total terendah apabila membutuhkan banyak percobaan, lebih banyak output, atau proses perbaikan berulang.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Untuk developer, ukuran yang lebih penting adalah biaya untuk menyelesaikan satu pekerjaan dengan kualitas yang memadai.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dokumentasi harga:
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        https://aistudio.google.com/docs/pricing
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 14: 14-CARA-MENGAKSES ────────────────── */}
    <section id="14-cara-mengakses" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 14 · AKSES & INTEGRASI</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          14. Cara Mengakses Gemini 4 Hydrogen
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google mengumumkan bahwa Hydrogen tersedia secara global melalui beberapa produk dan platform.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Berikut jalur aksesnya.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>A. Gemini App</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Website: https://gemini.google.com/
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pengguna dapat menggunakan Hydrogen melalui pemilih model di aplikasi Gemini.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google juga menyatakan bahwa pengguna gratis mendapatkan akses melalui auto model selection ketika Hydrogen dinilai sesuai untuk prompt yang diberikan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, pengguna gratis tidak harus selalu memilih model tersebut secara manual.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>B. Google Search</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google mengintegrasikan Hydrogen ke Search untuk pengguna secara global sesuai rollout layanan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Fokusnya adalah:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Memahami maksud pertanyaan dengan lebih baik.</li>
<li>Memberikan jawaban visual yang lebih mudah dipahami.</li>
<li>Menampilkan tautan relevan yang lebih luas.</li>
<li>Memahami pertanyaan kompleks dengan bahasa alami.</li>
<li>Menyajikan informasi yang lebih sesuai dengan konteks pencarian.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dengan kata lain, Google juga membawa kemampuan model ini ke pengalaman pencarian sehari-hari.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>C. Google AI Studio</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Website: https://aistudio.google.com/
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Developer dapat mencoba Hydrogen melalui Google AI Studio.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        AI Studio cocok bagi pengguna yang ingin bereksperimen dengan prompt dan membangun aplikasi menggunakan Gemini API.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyebut Hydrogen tersedia pada seluruh tingkatan Google AI Studio.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>D. Gemini API</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dokumentasi: https://ai.google.dev/gemini-api/docs
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Developer dapat menggunakan API untuk mengintegrasikan Hydrogen ke:
      </p>
    

        <ul className="space-y-2 list-disc pl-5 text-[#D5CBC3] font-outfit text-sm sm:text-base leading-relaxed">
          <li>Chatbot.</li>
<li>Aplikasi web.</li>
<li>Sistem analisis.</li>
<li>Workflow otomatis.</li>
<li>AI customer service.</li>
<li>Aplikasi internal bisnis.</li>
        </ul>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Gunakan API key dengan aman dan jangan menyimpannya di frontend publik.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>E. Google Antigravity</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Website: https://antigravity.google/
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dapat dicoba di Antigravity oleh pelanggan Google AI Pro dan Ultra.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Antigravity relevan untuk pekerjaan coding berbasis agent, pengembangan website, pengujian, dan workflow multi-model.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>F. Android Studio</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google menyebut dukungan Gemini API dan penggunaan di Android Studio untuk developer.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ini dapat menjadi bagian dari workflow pengembangan aplikasi Android.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>G. Google Sheets dan Gemini for Business</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen juga didistribusikan melalui Google Sheets dan Gemini for Business.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Akses fitur Gemini di Sheets untuk konsumen dimulai dari pelanggan Google AI Pro dan Ultra, sedangkan ketersediaan enterprise mengikuti kelayakan langganan bisnis.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 15: 15-KETERBATASAN ────────────────── */}
    <section id="15-keterbatasan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 15 · KETERBATASAN & RISIKO</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          15. Keterbatasan Gemini 4 Hydrogen: Jangan Terlalu Cepat Menganggapnya Sempurna
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Walaupun memiliki banyak kemampuan, Hydrogen tetap memiliki keterbatasan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model Card Google mencatat beberapa hal yang perlu diperhatikan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>A. Masih bisa mengalami halusinasi</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dapat memberikan informasi yang salah atau tidak didukung bukti.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jadi, tetap periksa sumber, kode, dan hasil analisisnya.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>B. Bisa mengalami timeout atau lambat</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Walaupun dirancang cepat, model tetap dapat mengalami keterlambatan atau timeout dalam kondisi tertentu.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>C. Thinking level memengaruhi penggunaan</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pada tingkat penalaran yang lebih tinggi, Hydrogen dapat menggunakan lebih banyak token untuk memaksimalkan hasil.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Karena itu, biaya dan latensi dapat berubah mengikuti kebutuhan pekerjaan.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>D. Knowledge cutoff</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model Card mencatat batas pengetahuan Hydrogen hingga Maret 2026.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Artinya, jangan menganggap model otomatis mengetahui semua informasi terbaru setelah tanggal tersebut tanpa pencarian atau sumber eksternal.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>E. Keamanan bukan jaminan mutlak</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Peningkatan safety tidak menghapus kebutuhan pengawasan manusia.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Jangan membiarkan agent mengakses database produksi, repository sensitif, atau sistem pembayaran tanpa kontrol yang tepat.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>F. Benchmark tidak menggambarkan semua pekerjaan</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Nilai benchmark merupakan hasil pengujian dalam kondisi tertentu.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hasil pengguna sehari-hari bisa berbeda tergantung prompt, tools, lingkungan, dan kompleksitas tugas.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 16: 16-CONTOH-PROMPT ────────────────── */}
    <section id="16-contoh-prompt" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 16 · CONTOH PROMPT</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          16. Contoh Prompt untuk Menggunakan Gemini 4 Hydrogen
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Supaya tidak hanya tahu namanya, berikut beberapa contoh penggunaan yang bisa dicoba.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 1 — Membuat Komponen Website</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Kamu bertindak sebagai frontend developer senior. Periksa project yang tersedia, pahami struktur komponen, lalu buat komponen pricing card yang responsive. Ikuti design system yang sudah ada. Jangan mengubah komponen lain yang tidak berhubungan. Setelah implementasi, jalankan pemeriksaan build."
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 2 — Memperbaiki Bug</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Periksa masalah pada fungsi ini. Cari penyebabnya, identifikasi file yang berkaitan, lalu buat perubahan sekecil mungkin untuk memperbaikinya. Pertahankan perilaku fitur lainnya. Jalankan test yang tersedia dan jelaskan perubahan yang kamu lakukan."
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 3 — Audit UI Website</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Analisis halaman website ini dari sisi visual. Periksa hierarchy typography, spacing, alignment, responsive layout, dan accessibility. Buat daftar masalah berdasarkan prioritas. Jangan langsung mengubah file sebelum memberikan rencana perbaikan."
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 4 — Membuat Prototipe 3D</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Buat prototipe lingkungan 3D berbasis browser menggunakan Three.js. Buat objek voxel yang dapat ditambahkan ke lingkungan virtual, kontrol karakter first-person, collision sederhana, dan sistem pencahayaan. Pastikan struktur kode modular dan dapat dikembangkan."
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 5 — Membuat Laporan dari Dokumen</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Analisis dokumen dan spreadsheet yang tersedia. Hubungkan informasi yang relevan, buat ringkasan, identifikasi anomali, dan susun laporan dengan tabel. Pisahkan fakta, asumsi, dan rekomendasi. Jangan mengarang data yang tidak tersedia."
          </p>
        </div>
      

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Prompt 6 — Workflow Coding dan Verifikasi</span>
        </h3>
      

        <div className="p-4 sm:p-5 rounded-xl bg-[#120D0A] border border-[#F45B1A]/20 font-mono text-xs sm:text-sm text-[#D5CBC3] leading-relaxed shadow-sm relative group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-geom uppercase tracking-wider text-[#F45B1A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Template</span>
            </span>
            <span className="text-white/40">Siap Digunakan</span>
          </div>
          <p className="font-outfit text-[#E5DCD5] italic text-sm sm:text-base leading-relaxed">
            "Bantu kerjakan issue pada repository ini. Baca struktur project, identifikasi file yang berkaitan, buat rencana perubahan, implementasikan perubahan yang disetujui, jalankan test, perbaiki kegagalan, dan berikan laporan akhir. Jangan mengubah file yang tidak relevan."
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Prompt tersebut bukan jaminan hasil sempurna. Berikan akses tools yang sesuai dan batasi hak eksekusi agent.
      </p>
    
      </div>
    </section>
  

    {/* ── SECTION 17: 17-SIAPA-YANG-COCOK ────────────────── */}
    <section id="17-siapa-yang-cocok" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <Zap className="w-4 h-4" />
          <span>BAGIAN 17 · TARGET PENGGUNA</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
          17. Siapa yang Paling Cocok Menggunakan Gemini 4 Hydrogen?
        </h2>
      </div>

      <div className="space-y-4 font-outfit">
        
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen dapat relevan untuk banyak tipe pengguna.
      </p>
    

    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#140E0B] shadow-inner my-4">
      <table className="w-full text-left text-xs sm:text-sm text-[#D5CBC3] border-collapse">
        <thead>
          <tr className="bg-[#1C1410] border-b border-white/10 text-[#F7F1EB] font-geom">
            <th className="py-3 px-4 text-left">Pengguna</th><th className="py-3 px-4 text-left">Kegunaan utama</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-outfit">
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pelajar
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Menulis, merangkum, riset, dan belajar
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Content creator
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Menyusun konten dan prototipe kreatif
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Developer
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Coding, debugging, dan iterasi repository
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Frontend developer
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Prototipe UI dan implementasi web
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Tim software
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Eksekusi pekerjaan dan verifikasi
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  UMKM
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Produktivitas, dokumen, dan eksperimen otomasi
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Peneliti
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Analisis dokumen multimodal
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Pengembang game
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Prototipe 3D dan eksperimen interaktif
                </td>
              
            </tr>
          
            <tr className="hover:bg-white/[0.02] transition-colors">
              
                <td className="py-2.5 px-4 font-medium text-[#F7F1EB] ">
                  Perusahaan
                </td>
              
                <td className="py-2.5 px-4 text-[#A99A90] ">
                  Workflow berbasis agent dan otomatisasi
                </td>
              
            </tr>
          
        </tbody>
      </table>
    </div>
  

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Namun, pilihan terbaik bergantung pada kebutuhan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau hanya ingin menulis caption, model yang lebih ringan sudah cukup.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau sedang mengembangkan aplikasi dan membutuhkan proses coding berulang, Hydrogen bisa menjadi pilihan yang menarik.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kalau pekerjaan membutuhkan penalaran arsitektur sangat mendalam, Carbon atau Argon masih memiliki peran penting.
      </p>
    

        <h3 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] pt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A] shrink-0" />
          <span>Jadi, siapa yang harus dipanggil?</span>
        </h3>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kembali ke Komplek Digital.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada laporan rutin yang perlu ditangani dengan cepat? Panggil Hydrogen, satpam senior muda yang gesit.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada pekerjaan profesional yang memerlukan pemeriksaan dan pemahaman mendalam? Argon, satpam junior terlatih, tetap dapat membantu sesuai kapasitasnya.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada kasus yang sangat rumit dan membutuhkan investigasi panjang? Carbon, satpam senior veteran spesialis, bisa turun tangan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dan siapa yang mengatur semuanya?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Orchestrator.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Itulah gambaran bagaimana beberapa model AI dapat saling melengkapi.
      </p>
    
      </div>
    </section>
  
      
  {/* ── SECTION 18: KESIMPULAN ───────────────────────────── */}
  <section id="kesimpulan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
        <CheckCircle2 className="w-4 h-4" />
        <span>BAGIAN 18 · KESIMPULAN &amp; REFLEKSI</span>
      </div>
      <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
        18. Kesimpulan: Google Tidak Hanya Membuat AI yang Pintar, tetapi Juga AI yang Tahu Kapan Harus Bergerak Cepat
      </h2>
    </div>

    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#17100D] to-[#120C09] border border-[#F45B1A]/30 shadow-lg space-y-4 font-outfit">
      
      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Gemini 4 Hydrogen memperlihatkan bahwa perkembangan AI tidak selalu tentang siapa yang memiliki kemampuan paling besar.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Ada persoalan lain yang sama pentingnya: bagaimana AI dapat menyelesaikan pekerjaan dengan lebih cepat, efisien, dan tetap terarah.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Melalui Hydrogen, Google memperkenalkan model yang berfokus pada eksekusi cepat untuk coding, debugging, web development, pekerjaan multimodal, dan agentic workflow.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Model ini diadaptasi dari Gemini 4 Carbon, tetapi diarahkan untuk peran yang berbeda.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Agar lebih mudah dipahami, ingat kembali tiga petugas di Komplek Digital.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Argon adalah satpam junior yang sudah terlatih dan mampu menangani berbagai pekerjaan profesional.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Hydrogen adalah satpam senior muda yang sudah berpengalaman, gesit, dan cocok untuk pekerjaan yang membutuhkan eksekusi cepat.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Sementara Carbon adalah satpam senior veteran sekaligus spesialis, yang memiliki ilmu mendalam dan lebih relevan ketika menghadapi persoalan paling rumit. Penggunaan Carbon dapat membutuhkan komputasi dan biaya API lebih besar, terutama ketika pekerjaan menuntut penalaran serta verifikasi panjang.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Orchestrator di Google Antigravity menjadi bagian menarik dari strategi ini karena memungkinkan sistem berpindah secara dinamis antara model sesuai kebutuhan pekerjaan.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dari benchmark, Hydrogen menunjukkan hasil kuat pada sejumlah pengujian, meskipun Claude Sonnet 5.5 dan GPT-6.1 Terra tetap unggul pada beberapa kategori.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Demonstrasi pembuatan game voxel, website e-commerce interaktif, spreadsheet animasi, presentasi, hingga globe 3D memperlihatkan bahwa Hydrogen tidak hanya ditujukan untuk percakapan biasa.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Tetapi, jangan lupa bahwa AI masih dapat mengalami halusinasi, timeout, dan kesalahan eksekusi. Hasil pekerjaan tetap membutuhkan verifikasi manusia.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Pada akhirnya, perkembangan yang paling menarik bukan hanya munculnya satu model baru setelah Carbon.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Melainkan perubahan cara kita menggunakan AI.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dari satu model yang dipaksa mengerjakan semuanya, menuju beberapa model yang bekerja sesuai keahlian dan kebutuhan.
      </p>
    

        <div className="p-4 rounded-xl bg-[#17100D] border border-[#F45B1A]/30 text-center">
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A] leading-snug">
            Mungkin masa depan AI bukan tentang memiliki satu model yang paling pintar, tetapi tentang memiliki tim AI yang tahu siapa harus mengerjakan apa.
          </p>
        </div>
      

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Google baru saja memperlihatkan satu gambaran ke arah sana.
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Dan pertanyaannya sekarang: kalau AI bisa membagi pekerjaan, menulis kode, menjalankan tes, dan memperbaiki hasil, pekerjaan apa yang sebaiknya tetap kita kendalikan sendiri?
      </p>
    

      <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
        Kenali teknologinya, pahami manfaatnya, kuasai masa depan.
      </p>
    
    </div>
  </section>

      
  {/* ── SECTION 19: RANGKUMAN PEMBAHASAN ─────────────────── */}
  <section id="rangkuman-pembahasan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
    <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <ListChecks className="w-4 h-4" />
          <span>RINGKASAN EKSEKUTIF · 10 POIN KUNCI</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
          19. Rangkuman Pembahasan
        </h2>
        <p className="font-outfit text-sm text-[#A99A90]">
          Poin-poin utama yang perlu kamu bawa pulang dari pembahasan Gemini 4 Hydrogen:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 pt-2">
        
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              1
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Gemini 4 Hydrogen diumumkan pada 12 November 2026, dua hari setelah Carbon mulai tersedia pada 10 November.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              2
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Hydrogen dirancang untuk kecepatan dan efisiensi dalam coding sehari-hari serta agentic workflow.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              3
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Menurut Google DeepMind, Hydrogen diadaptasi dari Gemini 4 Carbon.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              4
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Argon adalah satpam junior terlatih, Hydrogen adalah satpam senior muda yang gesit, dan Carbon adalah satpam senior veteran spesialis dengan keahlian mendalam.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              5
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Orchestrator di Antigravity dapat berpindah secara dinamis antara model seperti Carbon dan Hydrogen.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              6
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Hydrogen menyediakan empat thinking levels: Low, Medium, High, dan XHigh.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              7
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Google mempublikasikan demonstrasi game voxel, website e-commerce interaktif, spreadsheet animasi, presentasi, dan visualisasi 3D.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              8
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Harga API yang diumumkan adalah US$1,50 per juta token input dan US$7,50 per juta token output.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              9
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Benchmark memperlihatkan Hydrogen unggul pada beberapa kategori, tetapi tidak memenangkan semua pengujian.
            </p>
          </div>
        

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#F45B1A] font-geom font-bold text-xs">
              10
            </div>
            <p className="font-outfit text-sm text-[#D5CBC3] leading-relaxed">
              Hydrogen tetap memiliki keterbatasan seperti halusinasi, timeout, dan kebutuhan pengawasan manusia.
            </p>
          </div>
        
      </div>
    </div>
  </section>

      
  {/* ── SECTION 20: FAQ ─────────────────────────────────── */}
  <section id="faq" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
        <HelpCircle className="w-4 h-4" />
        <span>PERTANYAAN POPULER</span>
      </div>
      <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
        20. FAQ — Pertanyaan yang Sering Ditanyakan
      </h2>
      <p className="font-outfit text-sm sm:text-base text-[#A99A90]">
        Jawaban cepat dan ringkas atas pertanyaan yang paling sering muncul seputar Gemini 4 Hydrogen.
      </p>
    </div>

    <div className="space-y-3 pt-2">
      
        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q1
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apa itu Gemini 4 Hydrogen?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Gemini 4 Hydrogen adalah model AI dari Google DeepMind yang dirancang untuk kecepatan dan efisiensi dalam coding sehari-hari, pengembangan aplikasi, serta agentic workflow.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q2
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apa perbedaan Gemini 4 Hydrogen dan Gemini 4 Carbon?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Hydrogen difokuskan pada eksekusi cepat dan efisien, sedangkan Carbon diarahkan untuk penalaran mendalam dan tugas kompleks. Keduanya dapat bekerja bersama melalui workflow multi-model.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q3
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apa perbedaan Argon, Hydrogen, dan Carbon dalam analogi artikel ini?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Argon diibaratkan sebagai satpam junior terlatih, Hydrogen sebagai satpam senior muda yang gesit, dan Carbon sebagai satpam senior veteran dengan keahlian mendalam untuk persoalan yang lebih rumit.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q4
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apakah Gemini 4 Hydrogen merupakan versi murah dari Carbon?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Jangan langsung menyebutnya versi murah atau versi mini. Google menjelaskan bahwa Hydrogen diadaptasi dari Carbon, tetapi memiliki fokus penggunaan dan harga API yang berbeda.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q5
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Kenapa Hydrogen diibaratkan sebagai satpam senior muda?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Analogi tersebut menggambarkan Hydrogen sebagai model yang sudah kompeten dan berpengalaman, tetapi memiliki fokus pada kecepatan dan efisiensi. Ini bukan berarti Hydrogen belum berpengalaman atau hanya mampu mengerjakan tugas sederhana.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q6
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apakah Carbon selalu lebih pintar daripada Hydrogen?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Tidak tepat menyimpulkan kemampuan model hanya dari analogi. Keduanya dirancang untuk kebutuhan berbeda. Carbon menonjol untuk penalaran mendalam pada tugas berat, sedangkan Hydrogen menekankan eksekusi cepat.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q7
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apa fungsi Orchestrator di Google Antigravity?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Orchestrator memungkinkan sistem berpindah secara dinamis antara model seperti Carbon dan Hydrogen dalam satu sesi, sehingga pekerjaan dapat dibagi sesuai kebutuhan.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q8
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apakah Gemini 4 Hydrogen bisa membuat game 3D?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Google menunjukkan demonstrasi Geminisland, sebuah pulau voxel interaktif yang dapat dikembangkan melalui prompt dan dijelajahi pemain dalam sudut pandang first-person.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q9
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apakah Gemini 4 Hydrogen gratis?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Google mengumumkan distribusi Hydrogen melalui Gemini App, Google Search, Google AI Studio, dan Gemini API, selain layanan bisnis serta Antigravity. Syarat dan batas penggunaan berbeda pada setiap produk.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q10
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Berapa harga Gemini 4 Hydrogen API?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Harga yang diumumkan Google adalah US$1,50 per satu juta token input dan US$7,50 per satu juta token output.</p>
          </div>
        </div>
      

        <div className="p-5 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 hover:border-[#F45B1A]/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="font-geom font-bold text-xs px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 shrink-0 mt-0.5">
              Q11
            </span>
            <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] leading-snug">
              Apakah Hydrogen bisa menggantikan developer?
            </h3>
          </div>
          <div className="pl-9 font-outfit text-sm text-[#A99A90] leading-relaxed space-y-2">
            <p>Tidak secara otomatis. Hydrogen dapat membantu coding, debugging, dan verifikasi, tetapi pengembangan software tetap membutuhkan perancangan, evaluasi, pengawasan, serta pengujian manusia.</p>
          </div>
        </div>
      
    </div>
  </section>

      
  {/* ── SECTION 21: REFERENSI ───────────────────────────── */}
  <section id="referensi" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
    <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <BookText className="w-4 h-4" />
          <span>DAFTAR SUMBER &amp; RUJUKAN RESMI</span>
        </div>
        <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
          21. Referensi dan Sumber
        </h2>
        <p className="font-outfit text-sm text-[#A99A90]">
          Seluruh informasi dalam artikel ini diverifikasi langsung dari sumber resmi dan dokumentasi teknis berikut:
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-geom font-bold text-base text-[#F7F1EB] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
          <span>Sumber Resmi Google</span>
        </h3>
        <ol className="space-y-2 text-xs sm:text-sm font-outfit list-decimal pl-5 text-[#A99A90]">
          <li>
            <strong className="text-[#F7F1EB]">Google — Introducing Gemini 4 Hydrogen</strong>, 12 November 2026.{" "}
            <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>blog.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google DeepMind — Gemini 4 Hydrogen Model Card</strong>, November 2026.{" "}
            <a href="https://deepmind.google/models/model-cards/gemini-4-hydrogen/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>deepmind.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google DeepMind — Gemini 4 Carbon Model Card</strong>, November 2026.{" "}
            <a href="https://deepmind.google/models/model-cards/gemini-4-carbon/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>deepmind.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google DeepMind — Gemini 4 Argon Model Card</strong>, Oktober 2026.{" "}
            <a href="https://deepmind.google/models/model-cards/gemini-4-argon/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>deepmind.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google — Gemini 4 Carbon Is Now Available</strong>, 10 November 2026.{" "}
            <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>blog.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google — Google Search and Gemini 4 Hydrogen</strong>, November 2026.{" "}
            <a href="https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>blog.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ol>

        <h3 className="font-geom font-bold text-base text-[#F7F1EB] flex items-center gap-2 pt-2">
          <span className="w-2 h-2 rounded-full bg-[#F45B1A]" />
          <span>Dokumentasi dan Benchmark</span>
        </h3>
        <ol start={7} className="space-y-2 text-xs sm:text-sm font-outfit list-decimal pl-5 text-[#A99A90]">
          <li>
            <strong className="text-[#F7F1EB]">Google AI Studio</strong>.{" "}
            <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>aistudio.google.com</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google — Gemini API Documentation</strong>.{" "}
            <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>ai.google.dev</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google — Gemini API Pricing</strong>.{" "}
            <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>aistudio.google.com/pricing</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Google Antigravity Platform</strong>.{" "}
            <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>antigravity.google</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Artificial Analysis Intelligence Index</strong>.{" "}
            <a href="https://artificialanalysis.ai/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>artificialanalysis.ai</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">Terminal-Bench Framework</strong>.{" "}
            <a href="https://www.tbench.ai/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>tbench.ai</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <strong className="text-[#F7F1EB]">SWE-bench Benchmark</strong>.{" "}
            <a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" className="text-[#F45B1A] hover:underline inline-flex items-center gap-1">
              <span>swebench.com</span> <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ol>

        <div className="p-4 rounded-xl bg-[#140E0B] border border-white/10 space-y-2 mt-4">
          <h4 className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A]">
            Catatan Metodologi
          </h4>
          <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
            Informasi kemampuan, ketersediaan, harga API, dan demonstrasi produk merujuk pada pengumuman Google tanggal 12 November 2026 serta Gemini 4 Hydrogen Model Card yang dipublikasikan pada November 2026. Angka benchmark merupakan hasil evaluasi yang dicantumkan dalam Model Card Google dan tidak menjamin hasil identik pada setiap penggunaan. Klaim peningkatan kecepatan dan keamanan yang berasal dari Google harus dipahami sebagai hasil pengujian yang dilaporkan oleh Google, bukan jaminan universal.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#A99A90] font-outfit">
          <div>
            <span className="text-[#F7F1EB] font-bold block sm:inline">Kholid Yagha</span>
            <span className="sm:ml-1">— Founder Paham Digital Agency</span>
          </div>
          <p className="text-[#F45B1A] font-geom font-bold uppercase tracking-wider">
            Paham Bisnisnya, Otomatiskan Sistemnya.
          </p>
        </div>
      </div>
    </div>
  </section>

      
  {/* ── RELATED ARTICLES ─────────────────────────────────── */}
  <section className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-5">
    <div className="space-y-1">
      <div className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
        ARTIKEL TERKAIT
      </div>
      <h3 className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
        Perdalam Wawasan Teknologi &amp; Digital Bisnismu
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link
        href="/blog/apa-itu-gemini-4-carbon/"
        className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group"
      >
        <div className="space-y-2">
          <span className="text-[10px] font-geom font-bold px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 uppercase">
            Artikel 05
          </span>
          <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug">
            Gemini 4 Carbon: AI untuk Proyek Kompleks, Bukan Sekadar Chatbot
          </h4>
          <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
            Pelajari model frontier Carbon yang berfokus pada penalaran mendalam dan tantangan berat.
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs font-geom text-[#F45B1A] pt-3 mt-2 border-t border-white/5">
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      <Link
        href="/blog/apa-itu-geo/"
        className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group"
      >
        <div className="space-y-2">
          <span className="text-[10px] font-geom font-bold px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 uppercase">
            Artikel 04
          </span>
          <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug">
            Apa Itu GEO? Cara Agar Bisnis Direkomendasikan AI
          </h4>
          <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
            Strategi agar kehadiran bisnismu mudah dipahami dan direferensikan oleh AI Search engine.
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs font-geom text-[#F45B1A] pt-3 mt-2 border-t border-white/5">
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      <Link
        href="/blog/apa-itu-seo-website-sepi-pengunjung/"
        className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group"
      >
        <div className="space-y-2">
          <span className="text-[10px] font-geom font-bold px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 uppercase">
            Artikel 02
          </span>
          <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug">
            Cara Agar Website Muncul di Google: Kenali Apa Itu SEO!
          </h4>
          <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
            Panduan dasar SEO melalui analogi Pak RT agar website bisnismu ramai pengunjung.
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs font-geom text-[#F45B1A] pt-3 mt-2 border-t border-white/5">
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  </section>

      
  {/* ── WHATSAPP SHARE BUTTON ────────────────────────────── */}
  <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="space-y-1 text-center sm:text-left">
      <h4 className="font-geom font-bold text-base text-[#F7F1EB]">
        Bagikan Artikel Ini
      </h4>
      <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
        Bantu rekan developer dan pelaku bisnis lain memahami perkembangan terbaru AI Google.
      </p>
    </div>
    <a
      href={waShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
    >
      <Send className="w-4 h-4" />
      <span>Bagikan ke WhatsApp</span>
    </a>
  </div>

    </div>
  );
}
