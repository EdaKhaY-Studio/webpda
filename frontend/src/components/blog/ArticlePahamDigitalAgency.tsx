"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  UserRound,
  Monitor,
  AppWindow,
  Workflow,
  MessagesSquare,
  Zap,
  SearchCheck,
  Brain,
  BriefcaseBusiness,
  CircleHelp,
  CheckCircle2,
  ListChecks,
  BookOpenText,
  Quote,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Send,
  Sparkles,
  Layers,
  Store,
  Building,
  ShoppingBag,
  Target,
  ArrowUpRight,
  Compass,
  Lightbulb,
} from "lucide-react";

interface Props {
  waShareUrl: string;
}

export default function ArticlePahamDigitalAgency({ waShareUrl }: Props) {
  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Apa itu Paham Digital Agency?",
      a: "Paham Digital Agency (PDA) adalah digital agency asal Aceh yang berbasis di Meulaboh, Aceh Barat. PDA berfokus pada pengembangan website, Web Application, AI Agent, AI Customer Service, Business Automation, SEO, dan GEO.",
    },
    {
      q: "Siapa Founder Paham Digital Agency?",
      a: "Founder Paham Digital Agency adalah Kholid Yagha. Ia mendirikan PDA pada Juli 2026 ketika masih berusia 14 tahun dan berstatus sebagai siswa MTs.",
    },
    {
      q: "Di mana lokasi Paham Digital Agency?",
      a: "PDA berbasis di Kota Meulaboh, Kabupaten Aceh Barat, Provinsi Aceh, Indonesia.",
    },
    {
      q: "Apa saja layanan Paham Digital Agency?",
      a: "Layanan PDA meliputi Website Development, Web Application Development, AI Agent, AI Customer Service, Business Automation, SEO, dan GEO.",
    },
    {
      q: "Apakah PDA hanya menyediakan jasa pembuatan website?",
      a: "Tidak. Selain pengembangan website, PDA juga bergerak dalam pengembangan aplikasi berbasis web, solusi AI, otomatisasi proses digital, dan optimasi visibilitas online.",
    },
    {
      q: "Apakah Paham Digital Agency melayani UMKM?",
      a: "PDA berfokus membantu bisnis dan UMKM yang membutuhkan solusi teknologi digital sesuai kebutuhan mereka.",
    },
    {
      q: "Bagaimana cara mengenal layanan PDA?",
      a: "Kamu dapat mengunjungi website resmi Paham Digital Agency di https://pahamdigital.online/ untuk melihat profil, informasi layanan, dan artikel edukasi teknologi.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* ── SINOPSIS ARTIKEL ─────────────────────────────────── */}
      <section
        aria-label="Sinopsis Artikel"
        className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-3 shadow-lg"
      >
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <BookOpenText className="w-4 h-4" />
          <span>SINOPSIS ARTIKEL</span>
        </div>
        <p className="text-xs font-outfit text-[#A99A90]">
          Kenali apa yang akan kamu pelajari dalam artikel pengenalan ini.
        </p>
        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Bagaimana sebuah digital agency bisa dimulai oleh seorang siswa MTs yang masih berusia 14 tahun? Kenalkan, Paham Digital Agency (PDA), digital agency asal Meulaboh, Aceh Barat, yang didirikan oleh Kholid Yagha pada Juli 2026. PDA hadir untuk membantu bisnis dan UMKM membangun kehadiran digital melalui website profesional, Web Application, AI Agent, AI Customer Service, otomatisasi bisnis, SEO, dan GEO. Dalam artikel ini, kamu akan mengenal perjalanan awal PDA, memahami setiap layanan yang ditawarkan, melihat bagaimana teknologi dapat membantu bisnis, serta mengetahui alasan PDA ingin menjadi partner digital bagi pelaku usaha di Aceh. Bukan sekadar cerita tentang sebuah agency, tetapi juga tentang keberanian memulai, kemauan belajar, dan cita-cita yang tidak harus menunggu usia dewasa.
        </p>
      </section>

      {/* ── PEMBUKAAN ────────────────────────────────────────── */}
      <section id="pembukaan" className="scroll-mt-28 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg space-y-5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Compass className="w-4 h-4" />
            <span>PEMBUKAAN · CERITA AWAL</span>
          </div>

          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Pembukaan: Eh, Kamu Sudah Kenal Paham Digital Agency Belum?
          </h2>

          <div className="space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            <p>
              Coba bayangkan kamu punya bisnis sendiri. Produkmu bagus, pelanggan mulai berdatangan, tetapi informasi usaha masih tersebar di media sosial. Calon pelanggan harus bertanya berkali-kali untuk mengetahui harga, layanan, atau cara pemesanan. Sementara itu, kamu mulai berpikir, &ldquo;Sepertinya bisnis ini sudah waktunya punya website dan sistem digital yang lebih tertata.&rdquo;
            </p>
            <p>
              Lalu, kamu mencari partner untuk membantu mengembangkan kebutuhan tersebut.
            </p>
            <p className="text-[#F7F1EB] font-medium text-base sm:text-lg">
              Pernah terpikir mencari digital agency dari Aceh?
            </p>
            <p>
              Kenalkan, <strong className="text-[#F7F1EB]">Paham Digital Agency</strong>, atau disingkat <strong className="text-[#F45B1A]">PDA</strong>.
            </p>
            <p>
              PDA merupakan digital agency asal Meulaboh, Kabupaten Aceh Barat, yang didirikan pada Juli 2026 oleh <strong className="text-[#F7F1EB]">Kholid Yagha</strong>. Menariknya, ketika mendirikan PDA, Kholid masih berusia 14 tahun dan berstatus sebagai siswa Madrasah Tsanawiyah (MTs).
            </p>
            <p>
              PDA berfokus pada pengembangan website, Web Application, AI Agent, AI Customer Service, otomatisasi bisnis, serta optimasi SEO dan GEO.
            </p>
            <p>
              Namun, sebenarnya apa itu Paham Digital Agency? Apa yang dikerjakan? Dan bagaimana layanan-layanannya bisa membantu bisnis?
            </p>
            <p className="text-[#F45B1A] font-semibold">
              Yuk, kita kenalan lebih dekat.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 01: WHAT IS PDA? ─────────────────────────── */}
      <section id="01-apa-itu-pda" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            01
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Apa Itu Paham Digital Agency?
          </h2>
        </div>

        {/* Two-Column Editorial Intro & Compact Identity Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Narrative */}
          <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                <strong className="text-[#F7F1EB]">
                  Paham Digital Agency (PDA) adalah digital agency yang berasal dari Aceh dan berbasis di Kota Meulaboh, Kabupaten Aceh Barat.
                </strong>
              </p>
              <p>
                PDA berfokus membantu bisnis, UMKM, dan pelaku usaha mengembangkan kebutuhan digital melalui layanan teknologi dan solusi yang disesuaikan dengan tujuan masing-masing bisnis.
              </p>
              <p>
                Sederhananya, PDA menjadi partner digital bagi usaha yang ingin memiliki website, membangun aplikasi, memanfaatkan teknologi AI, mengotomatisasi proses tertentu, serta meningkatkan visibilitas bisnis di internet.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs text-[#A99A90] font-outfit">
              Partner teknologi lokal Aceh dengan standar implementasi modern.
            </div>
          </div>

          {/* Right Column: Identity Card */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#1E1410] to-[#140D0B] border border-[#F45B1A]/30 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#F45B1A]/15 border border-[#F45B1A]/30 text-[10px] font-geom font-bold text-[#F45B1A] uppercase tracking-wider">
                  IDENTITAS RESMI
                </span>
                <Building2 className="w-5 h-5 text-[#F45B1A]" />
              </div>
              <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
                PAHAM DIGITAL AGENCY
              </h3>
              <p className="text-xs font-geom text-[#F45B1A] font-semibold tracking-wider">
                SINGKATAN: PDA
              </p>
            </div>

            <div className="space-y-2.5 text-xs font-outfit text-[#D5CBC3] pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F45B1A] shrink-0" />
                <span>Meulaboh, Kabupaten Aceh Barat, Aceh</span>
              </div>
              <div className="flex items-center gap-2">
                <UserRound className="w-4 h-4 text-[#F45B1A] shrink-0" />
                <span>Didirikan Juli 2026 oleh Kholid Yagha</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F45B1A] shrink-0" />
                <span>Website · AI · Application · SEO · GEO</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-[11px] text-[#A99A90] font-outfit text-center">
              Paham Bisnisnya, Otomatiskan Sistemnya.
            </div>
          </div>
        </div>

        {/* Narrative Continuation */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Ada satu hal yang perlu dipahami: digital agency tidak hanya berarti tempat membuat desain atau website. Sebuah digital agency dapat membantu berbagai kebutuhan digital, mulai dari perencanaan, pengembangan, sampai penerapan teknologi sesuai ruang lingkup layanan yang disediakan.
          </p>

          <p className="text-[#F7F1EB] font-medium">
            Di PDA, bidang yang menjadi fokus utama meliputi:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">Website Development:</strong> pengembangan website profesional untuk memperkenalkan bisnis, produk, dan layanan.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">Web Application Development:</strong> pembuatan aplikasi berbasis web untuk membantu kebutuhan operasional.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">AI Agent:</strong> asisten AI yang dapat menjalankan tugas digital menggunakan instruksi dan tools terkonfigurasi.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">AI Customer Service:</strong> sistem AI untuk membantu menjawab pertanyaan pelanggan 24/7.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">Business Automation:</strong> otomatisasi proses kerja digital sesuai alur bisnis.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] mt-2 shrink-0" />
              <span><strong className="text-[#F7F1EB]">SEO &amp; GEO:</strong> optimasi agar bisnis ditemukan Google dan sistem AI generatif.</span>
            </li>
          </ul>

          <p>
            Jadi, PDA bukan aplikasi AI atau penyedia satu produk digital saja. PDA adalah digital agency yang menawarkan beberapa bidang layanan teknologi untuk membantu kebutuhan bisnis.
          </p>

          {/* Official Tagline Banner */}
          <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1E1410] via-[#241611] to-[#1A110E] border border-[#F45B1A]/40 text-center space-y-2">
            <span className="text-[11px] font-geom font-bold text-[#F45B1A] uppercase tracking-widest block">
              TAGLINE RESMI PAHAM DIGITAL AGENCY
            </span>
            <p className="font-geom font-bold text-xl sm:text-2xl text-[#F7F1EB]">
              &ldquo;Paham Bisnisnya, Otomatiskan Sistemnya.&rdquo;
            </p>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90] max-w-2xl mx-auto">
              Artinya, sebelum memilih teknologi, kebutuhan dan persoalan bisnis perlu dipahami terlebih dahulu. Setelah itu, barulah solusi digital yang sesuai dapat dipertimbangkan.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: FOUNDER SPOTLIGHT ────────────────────── */}
      <section id="02-cerita-founder-kholid-yagha" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            02
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Dari Meulaboh, Aceh: Cerita Kholid Yagha, Founder PDA yang Memulai di Usia 14 Tahun
          </h2>
        </div>

        {/* Compact Horizontal Founder Milestone Card */}
        <div className="rounded-2xl bg-[#17100D] border border-white/10 p-5 sm:p-6 md:px-8 md:py-6 flex items-center gap-5 sm:gap-8 max-w-full">
          {/* Left Area: Bold Orange 14 (~30–35% of card) */}
          <div className="w-[30%] sm:w-[32%] md:w-[30%] flex items-center justify-center shrink-0">
            <span className="font-geom font-black text-[72px] sm:text-[84px] md:text-[96px] leading-none text-[#F45B1A] select-none tracking-tight">
              14
            </span>
          </div>

          {/* Right Area: Supporting Information in a Compact Vertical Group */}
          <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1 sm:space-y-1.5">
            <p className="font-geom font-bold text-sm sm:text-base md:text-lg text-[#F7F1EB] tracking-wide uppercase">
              USIA SAAT MENDIRIKAN PDA
            </p>
            <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
              Siswa MTs di Meulaboh, Aceh
            </p>
            <p className="font-geom font-bold text-xs sm:text-sm text-[#F45B1A] tracking-wider uppercase pt-0.5">
              JULI 2026
            </p>
          </div>
        </div>

        {/* Founder Storytelling Content & Pull Quote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100D] border border-white/10 space-y-5">
          <div className="space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            <p>
              Sebuah digital agency tidak selalu harus lahir dari gedung perkantoran besar di kota metropolitan.
            </p>
            <p>
              Paham Digital Agency memulai perjalanannya dari Meulaboh, Aceh Barat.
            </p>
            <p>
              PDA didirikan pada <strong className="text-[#F7F1EB]">Juli 2026 oleh Kholid Yagha</strong>, seorang siswa MTs yang ketika itu masih berusia <strong className="text-[#F45B1A]">14 tahun</strong>.
            </p>
            <p className="italic text-[#F7F1EB]">
              Mungkin muncul pertanyaan: &ldquo;Usia 14 tahun sudah berani mendirikan digital agency?&rdquo;
            </p>
            <p>
              Tentu, memulai sesuatu pada usia tersebut bukan hal yang selalu mudah. Ada tantangan dalam membangun kemampuan teknis, memahami kebutuhan klien, berkomunikasi secara profesional, mengatur pekerjaan, dan menjaga kualitas hasil.
            </p>
            <p>
              Namun, Kholid memiliki keyakinan bahwa usia tidak seharusnya menjadi penghalang untuk mengejar cita-cita yang tinggi.
            </p>
          </div>

          {/* Editorial Pull Quote */}
          <div className="my-2 p-5 rounded-xl bg-[#110C0A] border border-[#F45B1A]/30 relative overflow-hidden">
            <Quote className="w-8 h-8 text-[#F45B1A]/20 absolute top-2 right-2 pointer-events-none" />
            <p className="font-outfit italic font-medium text-sm sm:text-base text-[#F7F1EB] leading-relaxed">
              &ldquo;Umur tidak seharusnya menjadi penghalang untuk mengejar cita-cita yang tinggi, selama kita mau belajar, berusaha, dan bertanggung jawab atas apa yang sedang dibangun.&rdquo;
            </p>
          </div>

          <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            <p>
              Bukan berarti umur tidak penting atau pengalaman bisa diabaikan. Justru, semakin muda seseorang memulai sesuatu, semakin besar pula kemauan untuk belajar, memperbaiki kesalahan, dan membangun pengalaman secara bertahap.
            </p>
            <p>
              Mendirikan agency juga bukan hanya tentang memiliki nama dan layanan. Kepercayaan harus dibangun melalui komunikasi yang baik, ruang lingkup pekerjaan yang jelas, kemampuan yang terus berkembang, serta hasil yang dapat dipertanggungjawabkan.
            </p>
            <p>
              PDA masih berada pada tahap awal perjalanannya. Karena itu, membangun kualitas layanan, portofolio, pengalaman, dan kepercayaan pelanggan menjadi bagian penting dari proses pengembangannya.
            </p>
          </div>
        </div>

        {/* Closing Inspiring Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-2">
          <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            Ada pesan sederhana yang ingin dibawa dari cerita ini:
          </p>
          <p className="font-geom font-bold text-base sm:text-lg text-[#F45B1A]">
            Jangan menunggu merasa cukup dewasa untuk mulai mengejar cita-cita. Mulailah belajar, berani mencoba, dan bertanggung jawab terhadap setiap langkah yang kamu ambil.
          </p>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
            Dari seorang siswa MTs di Meulaboh, sebuah digital agency mulai dibangun dengan harapan dapat berkembang dan membantu bisnis lain memanfaatkan teknologi.
          </p>
        </div>
      </section>

      {/* ── SECTION 03: SERVICES BENTO GRID ─────────────────── */}
      <section id="03-layanan-pda" className="scroll-mt-28 space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            03
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Apa Saja Layanan Paham Digital Agency?
          </h2>
        </div>

        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          Sekarang kita masuk ke bagian yang mungkin paling ingin kamu ketahui: layanan apa saja yang bisa ditemukan di Paham Digital Agency? PDA memiliki beberapa fokus layanan yang saling berkaitan.
        </p>

        {/* Bento Grid with 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Website Development */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                Website Development
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Pengembangan website profesional untuk memperkenalkan bisnis, produk, dan layanan di internet.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              COMPANY PROFILE · KATALOG · LANDING PAGE
            </div>
          </div>

          {/* Card 2: Web Application */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <AppWindow className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                Web Application
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Pengembangan aplikasi berbasis web untuk mendukung proses operasional, pengelolaan data, dan kebutuhan bisnis tertentu.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              DASHBOARD ADMIN · CUSTOM APP · DATA SISTEM
            </div>
          </div>

          {/* Card 3: AI Agent */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                AI Agent
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Pengembangan asisten AI yang dapat menggunakan instruksi dan tools untuk membantu menjalankan tugas digital.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              AGENTIC WORKFLOW · TOOLS · TASK AUTOMATION
            </div>
          </div>

          {/* Card 4: AI Customer Service */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <MessagesSquare className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                AI Customer Service
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Solusi AI untuk membantu memberikan informasi dan menjawab pertanyaan pelanggan berdasarkan konfigurasi bisnis.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              WHATSAPP BOT · RESPON 24 JAM · HUMAN-LIKE
            </div>
          </div>

          {/* Card 5: SEO */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <SearchCheck className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                SEO
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Optimasi website agar lebih mudah ditemukan dan dipahami mesin pencari seperti Google.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              GOOGLE SEARCH · ON-PAGE · TECHNICAL SEO
            </div>
          </div>

          {/* Card 6: GEO */}
          <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-geom font-bold text-lg text-[#F7F1EB]">
                GEO
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                Optimasi struktur informasi dan konten agar lebih mudah dipahami oleh sistem AI generatif.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/5 text-[11px] font-geom text-[#A99A90] uppercase tracking-wider">
              AI SEARCH · CHATGPT · PERPLEXITY · GEMINI
            </div>
          </div>
        </div>

        {/* Detailed Service Deep-Dives (A to E) */}
        <div className="space-y-6 pt-4">
          {/* Sub A */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB] flex items-center gap-2">
              <span className="text-[#F45B1A]">A.</span> Website Development — Membangun Kehadiran Bisnis di Internet
            </h3>
            <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                Website dapat menjadi pusat informasi resmi sebuah bisnis.
              </p>
              <p>
                Melalui website, calon pelanggan dapat mengenal perusahaan, melihat produk, memahami layanan, dan menemukan informasi kontak tanpa harus mencari dari banyak unggahan media sosial.
              </p>
              <p className="text-[#F7F1EB] font-medium">
                PDA berfokus pada pengembangan berbagai kebutuhan website, seperti:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm pt-1">
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Company Profile</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Katalog Produk</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Landing Page</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Website Bisnis &amp; Layanan</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Desain UI/UX</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center">Responsive Design</li>
                <li className="p-2.5 rounded-lg bg-[#110C0A] border border-white/5 text-center col-span-2">Integrasi Tombol WhatsApp</li>
              </ul>
              <p className="text-xs text-[#A99A90] pt-1">
                Tujuannya bukan sekadar membuat tampilan yang menarik, tetapi juga menyusun informasi agar mudah dipahami dan digunakan pengunjung.
              </p>
            </div>
          </div>

          {/* Sub B */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB] flex items-center gap-2">
              <span className="text-[#F45B1A]">B.</span> Web Application — Membangun Sistem Digital untuk Bisnis
            </h3>
            <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                Web Application merupakan aplikasi berbasis web yang memiliki fungsi lebih interaktif untuk membantu pekerjaan tertentu.
              </p>
              <p>
                Contohnya adalah dashboard admin, sistem pengelolaan data, aplikasi manajemen pelanggan, sistem pemesanan, dan aplikasi internal.
              </p>
              <p>
                Bayangkan sebuah usaha memiliki banyak data pelanggan dan pesanan. Jika semuanya dicatat secara manual, pengelolaannya bisa semakin merepotkan ketika bisnis berkembang.
              </p>
              <p>
                Aplikasi berbasis web dapat dirancang untuk membantu mengatur data dan proses kerja tersebut sesuai kebutuhan.
              </p>
              <div className="p-4 rounded-xl bg-[#110C0A] border border-white/10 text-xs sm:text-sm text-[#F7F1EB]">
                <strong className="text-[#F45B1A]">Perbedaannya sederhana:</strong> website dapat digunakan sebagai pusat informasi bisnis, sedangkan Web Application dapat menjadi alat untuk menjalankan proses tertentu.
              </div>
            </div>
          </div>

          {/* Sub C */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB] flex items-center gap-2">
              <span className="text-[#F45B1A]">C.</span> AI Agent — Asisten Digital untuk Membantu Pekerjaan
            </h3>
            <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                AI Agent merupakan sistem berbasis kecerdasan buatan yang dapat menggunakan instruksi dan tools tertentu untuk membantu menjalankan tugas.
              </p>
              <p>
                Dalam bisnis, penerapannya dapat mencakup pengolahan informasi, klasifikasi data, penyusunan laporan, dan pengelolaan alur kerja tertentu.
              </p>
              <p>
                Bayangkan kamu memiliki asisten digital yang membantu mengerjakan tugas berulang. Sistem tersebut dapat bekerja sesuai instruksi, akses, serta batasan yang telah dikonfigurasi.
              </p>
              <p className="text-xs text-[#A99A90]">
                AI Agent bukan berarti boleh mengakses seluruh sistem bisnis tanpa izin. Pengaturan akses dan keamanan tetap menjadi bagian penting dalam pengembangannya.
              </p>
            </div>
          </div>

          {/* Sub D */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB] flex items-center gap-2">
              <span className="text-[#F45B1A]">D.</span> AI Customer Service — Membantu Menjawab Pertanyaan Pelanggan
            </h3>
            <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                Pernah merasa lelah membalas pertanyaan yang sama berkali-kali?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-outfit italic text-[#F7F1EB]">
                <div className="p-3 rounded-xl bg-[#110C0A] border border-white/5 text-center">&ldquo;Kak, harganya berapa?&rdquo;</div>
                <div className="p-3 rounded-xl bg-[#110C0A] border border-white/5 text-center">&ldquo;Produknya masih tersedia?&rdquo;</div>
                <div className="p-3 rounded-xl bg-[#110C0A] border border-white/5 text-center">&ldquo;Bisa pesan lewat WhatsApp?&rdquo;</div>
              </div>
              <p>
                AI Customer Service dapat membantu menangani pertanyaan umum berdasarkan informasi bisnis yang telah disiapkan dan dikonfigurasi.
              </p>
              <p>
                Sistem ini dapat membantu memberikan informasi produk, menjelaskan layanan, menjawab FAQ, dan mengarahkan pelanggan ke admin manusia apabila dibutuhkan.
              </p>
              <p className="text-xs text-[#A99A90]">
                Tujuannya bukan menghilangkan peran manusia dalam pelayanan, tetapi membantu pekerjaan berulang agar lebih efisien dan terstruktur.
              </p>
            </div>
          </div>

          {/* Sub E */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4">
            <h3 className="font-geom font-bold text-xl text-[#F7F1EB] flex items-center gap-2">
              <span className="text-[#F45B1A]">E.</span> SEO dan GEO — Membantu Informasi Bisnis Lebih Mudah Ditemukan
            </h3>
            <div className="space-y-3 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
              <p>
                PDA juga bergerak dalam bidang optimasi visibilitas digital.
              </p>
              <p>
                <strong className="text-[#F7F1EB]">SEO (Search Engine Optimization)</strong> merupakan upaya mengoptimalkan website agar lebih mudah ditemukan dan dipahami mesin pencari seperti Google.
              </p>
              <p>
                Sementara itu, <strong className="text-[#F7F1EB]">GEO (Generative Engine Optimization)</strong> merupakan pendekatan untuk membantu informasi website lebih mudah dipahami dan berpeluang digunakan sebagai referensi oleh sistem AI generatif.
              </p>
              <p>
                Keduanya dapat menjadi bagian dari strategi digital bisnis.
              </p>
              <div className="p-4 rounded-xl bg-[#110C0A] border border-white/10 text-xs sm:text-sm text-[#A99A90]">
                <strong className="text-[#F7F1EB]">Catatan Realistis:</strong> SEO dan GEO bukan tombol ajaib. Tidak ada jaminan website langsung berada di posisi pertama Google atau otomatis direkomendasikan oleh ChatGPT, Gemini, dan sistem AI lainnya. Hasilnya bergantung pada banyak faktor dan membutuhkan proses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: HOW PDA HELPS BUSINESSES ─────────────── */}
      <section id="04-bagaimana-teknologi-membantu" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            04
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Bagaimana Teknologi PDA Bisa Membantu Bisnismu?
          </h2>
        </div>

        <div className="space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Sekarang coba bayangkan kamu memiliki sebuah toko atau usaha jasa di Aceh.
          </p>
          <p>
            Bisnismu sudah berjalan, tetapi beberapa pekerjaan masih dilakukan secara manual. Informasi produk tersebar di media sosial, pelanggan sering menanyakan hal yang sama, dan data pesanan belum tertata dengan baik.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Apa yang bisa dilakukan?
          </p>
        </div>

        {/* Visual Problem-to-Solution Mapping Layout */}
        <div className="space-y-3">
          {[
            {
              problem: "Belum memiliki pusat informasi online",
              solution: "Website profesional",
              icon: Monitor,
            },
            {
              problem: "Informasi produk belum tertata",
              solution: "Website katalog",
              icon: Store,
            },
            {
              problem: "Data pelanggan masih dikelola manual",
              solution: "Web Application",
              icon: AppWindow,
            },
            {
              problem: "Pertanyaan pelanggan berulang",
              solution: "AI Customer Service",
              icon: MessagesSquare,
            },
            {
              problem: "Pekerjaan digital ingin diotomatisasi",
              solution: "AI Agent dan Business Automation",
              icon: Workflow,
            },
            {
              problem: "Website belum dioptimalkan untuk pencarian",
              solution: "SEO (Search Engine Optimization)",
              icon: SearchCheck,
            },
            {
              problem: "Informasi bisnis ingin lebih mudah dipahami sistem AI",
              solution: "GEO (Generative Engine Optimization)",
              icon: Brain,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#17100D] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-[#F45B1A]/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#110C0A] border border-white/10 flex items-center justify-center text-[#A99A90] group-hover:text-[#F45B1A] transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-geom font-bold text-[#A99A90] uppercase tracking-wider block">
                      TANTANGAN BISNIS
                    </span>
                    <span className="font-outfit text-sm sm:text-base text-[#F7F1EB]">
                      {item.problem}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:pl-4 self-end sm:self-center">
                  <ArrowRight className="w-4 h-4 text-[#F45B1A] hidden sm:block shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 text-xs sm:text-sm font-geom font-bold text-[#F45B1A] whitespace-nowrap">
                    {item.solution}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative Continuation */}
        <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            Misalnya, sebuah toko memiliki website katalog yang menampilkan produk dan informasi bisnis. Pelanggan bisa melihat informasi tersebut sebelum menghubungi penjual.
          </p>
          <p>
            Jika pelanggan memiliki pertanyaan umum, AI Customer Service dapat membantu memberikan jawaban awal berdasarkan informasi yang telah dikonfigurasi.
          </p>
          <p>
            Sementara itu, Web Application dapat membantu pemilik usaha mengelola data melalui sistem yang sesuai kebutuhannya.
          </p>
          <p>
            Namun, tidak semua bisnis membutuhkan seluruh teknologi sekaligus.
          </p>
          <p>
            Ada usaha yang cukup memulai dengan website. Ada yang lebih membutuhkan sistem pengelolaan data. Ada pula yang ingin mengoptimalkan pelayanan pelanggan.
          </p>
          <p>
            Karena itu, solusi digital sebaiknya dimulai dari memahami persoalan yang benar-benar dihadapi bisnis.
          </p>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#1C120D] to-[#140D0B] border border-[#F45B1A]/30 text-center">
            <p className="font-geom font-bold text-sm sm:text-base text-[#F45B1A]">
              &ldquo;Teknologi yang tepat bukan yang paling banyak, tetapi yang benar-benar membantu menyelesaikan kebutuhan bisnis.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: WHO PDA HELPS ────────────────────────── */}
      <section id="05-siapa-partner-pda" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            05
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Siapa yang Bisa Menjadi Partner Paham Digital Agency?
          </h2>
        </div>

        <p className="font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          PDA berfokus membantu bisnis dan UMKM yang ingin mengembangkan kebutuhan digitalnya. Beberapa contoh kebutuhan yang relevan:
        </p>

        {/* 5 Audience Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
              <Store className="w-4 h-4" />
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              UMKM
            </h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Ingin memiliki website profesional untuk memperkenalkan produk dan usahanya secara terpercaya.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              Toko dan Bisnis Lokal
            </h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Membutuhkan katalog online dan informasi produk yang lebih terstruktur untuk pelanggan sekitar.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
              <Building className="w-4 h-4" />
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              Perusahaan
            </h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Memerlukan website company profile resmi atau aplikasi internal untuk efisiensi operasional tim.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
              <MessagesSquare className="w-4 h-4" />
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              Bisnis Online
            </h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Ingin membantu pelayanan pelanggan melalui AI Customer Service otomatis yang ramah 24 jam.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all space-y-2.5 sm:col-span-2 lg:col-span-2">
            <div className="w-8 h-8 rounded-lg bg-[#F45B1A]/10 border border-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A]">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="font-geom font-bold text-base text-[#F7F1EB]">
              Pelaku Usaha, Brand &amp; Penyedia Jasa
            </h3>
            <p className="font-outfit text-xs text-[#A99A90] leading-relaxed">
              Ingin mengotomatisasi pekerjaan tertentu serta memperkuat visibilitas online di Google dan sistem pencarian AI melalui SEO dan GEO.
            </p>
          </div>
        </div>

        {/* 5 Questions to Discuss */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
          <p>
            PDA menggunakan pendekatan partner digital dengan memulai pembicaraan dari kebutuhan bisnis.
          </p>
          <p className="text-[#F7F1EB] font-medium">
            Sebelum menentukan layanan, ada beberapa hal yang sebaiknya dibicarakan:
          </p>

          <ol className="space-y-2 pt-1">
            {[
              "Apa masalah digital yang sedang dihadapi?",
              "Tujuan apa yang ingin dicapai?",
              "Teknologi atau fitur apa yang benar-benar diperlukan?",
              "Bagaimana sistem tersebut akan digunakan?",
              "Apa ruang lingkup pekerjaan, biaya, dan pemeliharaannya?",
            ].map((q, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-[#110C0A] border border-white/5 flex items-center gap-3 text-xs sm:text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-[#F45B1A]/15 border border-[#F45B1A]/30 text-[#F45B1A] font-geom font-bold flex items-center justify-center text-xs shrink-0">
                  {idx + 1}
                </span>
                <span className="text-[#F7F1EB]">{q}</span>
              </li>
            ))}
          </ol>

          <p className="pt-2">
            Dengan pembahasan tersebut, bisnis dapat memahami solusi yang akan dikembangkan sebelum memulai proyek.
          </p>
          <p className="text-xs text-[#A99A90]">
            Menjadi partner digital bukan berarti semua fitur otomatis termasuk dalam satu layanan. Setiap proyek tetap membutuhkan kesepakatan tentang fitur, biaya, akses, dukungan, dan batas pemeliharaan.
          </p>
        </div>
      </section>

      {/* ── SECTION 06: FAQ ACCORDION ────────────────────────── */}
      <section id="06-faq" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            06
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            FAQ — Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <p className="font-outfit text-sm text-[#A99A90]">
          Berikut jawaban ringkas seputar Paham Digital Agency, pendirian, dan layanannya:
        </p>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#17100D] border border-white/10 overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-[#F7F1EB] hover:text-[#F45B1A] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-geom font-bold text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F45B1A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 07: CONCLUSION ───────────────────────────── */}
      <section id="07-kesimpulan" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            07
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Kesimpulan: Sebuah Digital Agency dari Aceh dengan Cita-Cita untuk Terus Berkembang
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1C120D] to-[#140D0B] border border-[#F45B1A]/35 shadow-xl space-y-5">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>EDITORIAL CONCLUSION</span>
          </div>

          <div className="space-y-4 font-outfit text-sm sm:text-base text-[#D5CBC3] leading-relaxed">
            <p>
              Paham Digital Agency adalah digital agency yang berasal dari Meulaboh, Aceh Barat, dan didirikan pada Juli 2026 oleh Kholid Yagha, yang saat itu masih berusia 14 tahun dan berstatus sebagai siswa MTs.
            </p>
            <p>
              PDA berfokus menjadi partner digital bagi bisnis dan UMKM melalui pengembangan website profesional, Web Application, AI Agent, AI Customer Service, Business Automation, SEO, dan GEO.
            </p>
            <p>
              Setiap layanan memiliki fungsi berbeda. Website membantu bisnis membangun kehadiran online, Web Application dapat mendukung proses operasional, AI membantu tugas dan pelayanan tertentu, sedangkan SEO dan GEO menjadi bagian dari strategi visibilitas digital.
            </p>
            <p>
              Cerita pendirian PDA juga membawa pesan bahwa usia bukan penghalang untuk mulai mengejar cita-cita. Namun, keberanian memulai perlu diikuti kemauan belajar, memperbaiki kesalahan, meningkatkan kemampuan, dan bertanggung jawab terhadap pekerjaan.
            </p>
            <p>
              PDA masih berada pada tahap awal perjalanannya. Karena itu, kualitas, pengalaman, dan kepercayaan ingin dibangun secara bertahap melalui proses yang dapat dipertanggungjawabkan.
            </p>
            <p className="text-[#F7F1EB] font-medium text-base sm:text-lg">
              Dari Meulaboh, sebuah digital agency mulai dibangun dengan harapan dapat ikut membantu bisnis di Aceh memahami dan memanfaatkan teknologi.
            </p>
            <p className="text-[#F45B1A] font-bold text-base sm:text-lg">
              Jadi, sekarang sudah kenal Paham Digital Agency, kan?
            </p>
            <p className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] tracking-wide pt-2">
              Kenali teknologinya, pahami manfaatnya, kuasai masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: SUMMARY ──────────────────────────────── */}
      <section id="08-rangkuman-pembahasan" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-geom font-bold text-xl sm:text-2xl text-[#F45B1A]">
            08
          </span>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Rangkuman Pembahasan
          </h2>
        </div>

        <p className="font-outfit text-sm text-[#A99A90]">
          Delapan poin inti pengenalan Paham Digital Agency:
        </p>

        {/* 2-Column Summary Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Paham Digital Agency (PDA) adalah digital agency yang berasal dari Meulaboh, Aceh Barat.",
            "PDA didirikan pada Juli 2026 oleh Kholid Yagha, yang saat itu berusia 14 tahun dan masih menjadi siswa MTs.",
            "PDA berfokus menjadi partner digital bagi bisnis dan UMKM.",
            "Layanan PDA meliputi Website Development dan Web Application Development.",
            "PDA juga mengembangkan AI Agent, AI Customer Service, dan Business Automation.",
            "SEO dan GEO menjadi bagian dari layanan optimasi visibilitas digital.",
            "Solusi teknologi perlu disesuaikan dengan kebutuhan dan kondisi setiap bisnis.",
            "Perjalanan PDA membawa pesan bahwa usia bukan penghalang untuk mengejar cita-cita selama disertai kemauan belajar dan berusaha.",
          ].map((point, idx) => {
            const numStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#17100D] border border-white/10 flex items-start gap-3 hover:border-[#F45B1A]/40 transition-colors"
              >
                <span className="font-geom font-bold text-[#F45B1A] text-sm shrink-0 min-w-[1.6rem] text-left pt-0.5">
                  {numStr}
                </span>
                <span className="font-outfit text-xs sm:text-sm text-[#D5CBC3] leading-relaxed">
                  {point}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── OFFICIAL REFERENCES ──────────────────────────────── */}
      <section id="referensi" className="scroll-mt-28 space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <BookOpenText className="w-4 h-4" />
          <span>REFERENSI DAN KANAL RESMI</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-outfit">
          <a
            href="https://pahamdigital.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex items-center justify-between group"
          >
            <div>
              <strong className="text-[#F7F1EB] block group-hover:text-[#F45B1A] transition-colors">
                Paham Digital Agency — Website Resmi
              </strong>
              <span className="text-xs text-[#A99A90]">https://pahamdigital.online/</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A99A90] group-hover:text-[#F45B1A] transition-colors" />
          </a>

          <a
            href="https://pahamdigital.online/tentang-kami/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex items-center justify-between group"
          >
            <div>
              <strong className="text-[#F7F1EB] block group-hover:text-[#F45B1A] transition-colors">
                Tentang Paham Digital Agency
              </strong>
              <span className="text-xs text-[#A99A90]">https://pahamdigital.online/tentang-kami/</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A99A90] group-hover:text-[#F45B1A] transition-colors" />
          </a>

          <a
            href="https://pahamdigital.online/layanan/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex items-center justify-between group"
          >
            <div>
              <strong className="text-[#F7F1EB] block group-hover:text-[#F45B1A] transition-colors">
                Layanan Paham Digital Agency
              </strong>
              <span className="text-xs text-[#A99A90]">https://pahamdigital.online/layanan/</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A99A90] group-hover:text-[#F45B1A] transition-colors" />
          </a>

          <a
            href="https://pahamdigital.online/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex items-center justify-between group"
          >
            <div>
              <strong className="text-[#F7F1EB] block group-hover:text-[#F45B1A] transition-colors">
                Blog Edukasi Paham Digital Agency
              </strong>
              <span className="text-xs text-[#A99A90]">https://pahamdigital.online/blog/</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A99A90] group-hover:text-[#F45B1A] transition-colors" />
          </a>
        </div>

        <p className="text-xs font-outfit text-[#A99A90] italic pt-2">
          Catatan editorial: Informasi mengenai pendirian, Founder, usia Founder saat mendirikan PDA, lokasi, dan cakupan layanan dalam artikel ini berdasarkan keterangan profil Paham Digital Agency yang diberikan oleh pendirinya.
        </p>

        {/* Founder Signature */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-outfit">
          <div>
            <strong className="text-[#F7F1EB] text-base block font-geom">Kholid Yagha</strong>
            <span className="text-[#A99A90]">Founder Paham Digital Agency</span>
          </div>
          <span className="font-geom font-bold text-[#F45B1A] text-xs uppercase tracking-wider">
            &ldquo;Paham Bisnisnya, Otomatiskan Sistemnya.&rdquo;
          </span>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────── */}
      <section aria-label="Artikel Terkait" className="space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
          <BookOpenText className="w-4 h-4" />
          <span>ARTIKEL EDUKASI TEKNOLOGI LAINNYA</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/blog/apa-itu-gemini-4-hydrogen/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-geom font-bold px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 uppercase">
                Artikel 06
              </span>
              <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug">
                Gemini 4 Hydrogen Itu Apa? AI Lebih Gesit untuk Coding!
              </h4>
              <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
                Eksplorasi model frontier Google 2.5x lebih cepat untuk agentic workflow dan coding.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-geom text-[#F45B1A] pt-3 mt-2 border-t border-white/5">
              <span>Baca Selengkapnya</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/blog/apa-itu-gemini-4-carbon/"
            className="p-4 rounded-xl bg-[#140E0B] border border-white/10 hover:border-[#F45B1A]/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-geom font-bold px-2 py-0.5 rounded bg-[#F45B1A]/10 text-[#F45B1A] border border-[#F45B1A]/20 uppercase">
                Artikel 05
              </span>
              <h4 className="font-geom font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug">
                Gemini 4 Carbon: AI untuk Proyek Kompleks
              </h4>
              <p className="font-outfit text-xs text-[#A99A90] line-clamp-2">
                Analisis mendalam AI penalaran tingkat tinggi untuk coding, cybersecurity, dan 3D.
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
        </div>
      </section>

      {/* ── WHATSAPP SHARE BUTTON ────────────────────────────── */}
      <div className="p-6 rounded-2xl bg-[#17100D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-geom font-bold text-base text-[#F7F1EB]">
            Bagikan Profil &amp; Artikel Ini
          </h4>
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90]">
            Bantu rekan pengusaha dan UMKM di Aceh mengenal solusi digital dan kisah rintisan PDA.
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
