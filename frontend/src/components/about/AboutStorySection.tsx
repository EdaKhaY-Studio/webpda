"use client";

import { BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutStorySection() {
  const { sectionRef, getRevealClass, isInView } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="cerita-kami"
      aria-labelledby="story-title"
      className="relative section-py bg-[#17100D] border-b border-white/10 overflow-hidden"
    >
      {/* Background glow accents */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F45B1A]/[0.06] pointer-events-none blur-3xl"
      />

      <div className="container-site relative z-10">
        
        {/* Asymmetric 12-Column Editorial Grid: 5 Cols Left, 7 Cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Eyebrow, Main Headline, Pull Quote & Diary Artifact */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 space-y-8 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            <div>
              <div className="eyebrow-label mb-5">
                <span className="eyebrow-dot" />
                <span>EVERYTHING STARTS WITH A DREAM</span>
              </div>

              <h2
                id="story-title"
                className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[52px]"
              >
                Semuanya Berawal dari{" "}
                <span className="text-[#F45B1A]">Sebuah Mimpi.</span>
              </h2>
            </div>

            {/* Stylized Editorial Pull-Quote Card — Clean, uniform border, zero left protrusion */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/40 transition-colors shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0" aria-hidden="true" />
                <span className="text-xs font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
                  PONDASI KEYAKINAN
                </span>
              </div>
              <p className="text-base sm:text-lg text-[#F7F1EB] leading-relaxed font-outfit">
                Ia menyadari bahwa perjalanan tersebut tidak akan selalu mudah. Usianya masih sangat muda, pengalamannya masih terbatas, dan banyak hal yang harus dipelajari. Namun, ada satu hal yang selalu ia yakini:{" "}
                <strong className="text-[#F45B1A] font-semibold">
                  usia bukanlah batasan untuk mulai membangun mimpi.
                </strong>
              </p>
            </div>

            {/* Conceptual Diary & Ideation Artifact */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#21140F] via-[#17100D] to-[#0B0807] border border-white/12 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* Subtle top bookmark glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-8 w-12 h-16 bg-[#F45B1A]/20 blur-md rounded-b-xl"
              />

              {/* Diary Header Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F45B1A]/15 border border-[#F45B1A]/30 flex items-center justify-center text-[#F45B1A] shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0" aria-hidden="true" />
                      <span className="text-xs font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
                        CATATAN IMPIAN
                      </span>
                    </div>
                    <span className="text-xs text-[#A99A90] font-outfit block">
                      Lembaran Awal Sebuah Gagasan
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-[#A99A90]">
                  THE ORIGIN
                </span>
              </div>

              {/* Conceptual Handwritten-feel Note Excerpt */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0807]/80 border border-white/8 relative mb-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
                    PETIKAN DARI BUKU HARIAN
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F7F1EB] font-outfit italic leading-relaxed">
                  Suatu hari nanti, aku ingin membangun sesuatu yang bermanfaat bagi banyak orang. Belajar teknologi, membuat sistem yang memudahkan sesama, dan membuktikan bahwa usia muda bukanlah halangan untuk berkontribusi.”
                </p>
                <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A99A90] font-outfit">
                  <span>Ditulis dengan tekad sederhana</span>
                  <span className="text-[#F45B1A] font-semibold">Cikal Bakal Paham Digital</span>
                </div>
              </div>

              {/* 4 Evolutionary Milestones */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs font-geom font-bold uppercase tracking-wider text-[#A99A90]">
                    EVOLUSI GAGASAN
                  </span>
                </div>

                {[
                  {
                    step: "01",
                    title: "Buku Harian & Imajinasi",
                    sub: "Ide murni dan mimpi menghadirkan dampak nyata.",
                  },
                  {
                    step: "02",
                    title: "Belajar & Eksperimen",
                    sub: "Mempelajari web development, arsitektur, dan kode.",
                  },
                  {
                    step: "03",
                    title: "Keberanian Memulai",
                    sub: "Menerima tantangan proyek nyata UMKM lokal pertama.",
                  },
                  {
                    step: "04",
                    title: "Paham Digital Agency",
                    sub: "Partner transformasi digital andal, amanah, dan modern.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#F45B1A]/30 transition-colors"
                  >
                    <span className="font-geom font-bold text-xs text-[#F45B1A] shrink-0 pt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold font-geom text-[#F7F1EB]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#A99A90] font-outfit leading-tight mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Editorial Storytelling Flow (max-w-[580px] reading width) */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            <div className="max-w-[580px] space-y-7 text-base sm:text-lg text-[#A99A90] font-outfit leading-relaxed">
              
              {/* Opening Lead Paragraph with Larger Visual Scale */}
              <p className="text-xl sm:text-2xl text-[#F7F1EB] font-medium leading-relaxed font-geom tracking-tight">
                Paham Digital Agency berawal dari sebuah mimpi sederhana yang pernah ditulis oleh seorang siswa di halaman buku hariannya.
              </p>

              <p>
                Di sana, ia menuangkan berbagai ide, imajinasi, dan harapan. Ia membayangkan suatu hari bisa membangun sebuah bisnis yang bukan hanya menjadi pencapaian pribadi, tetapi juga membawa manfaat bagi masyarakat di sekitarnya.
              </p>

              <p>
                Dari rasa ingin tahu, keberanian untuk mencoba, dan keinginan untuk terus belajar, sebuah gagasan perlahan tumbuh menjadi Paham Digital Agency.
              </p>

              {/* Solution Focus Card — Clean, uniform border, zero left protrusion */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0807] border border-white/10 hover:border-[#F45B1A]/30 transition-colors shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
                    FOKUS SOLUSI
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#F7F1EB] leading-relaxed font-outfit">
                  Hari ini, Paham Digital Agency hadir sebagai partner transformasi digital yang membantu bisnis dan UMKM memanfaatkan teknologi melalui website profesional, web application, AI Customer Service, dan automasi bisnis.
                </p>
              </div>

              <p>
                Kami percaya bahwa teknologi seharusnya tidak membuat bisnis semakin rumit. Justru sebaliknya, teknologi harus membantu pekerjaan menjadi lebih mudah, membuka peluang baru, dan memberikan manfaat nyata bagi orang-orang yang menggunakannya.
              </p>

              {/* Mandated Grand Quote Box */}
              <div className="relative mt-10 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <span className="font-display font-bold text-5xl sm:text-6xl text-[#F45B1A]/40 leading-none select-none">
                    &ldquo;
                  </span>
                  <div>
                    <blockquote className="font-geom font-bold text-lg sm:text-xl lg:text-2xl text-[#F7F1EB] leading-relaxed italic mb-4">
                      Bagi kami, Paham Digital Agency bukan sekadar tentang membangun sebuah bisnis. Ini adalah perjalanan tentang keberanian memulai, kemauan untuk terus berkembang, dan harapan untuk menciptakan sesuatu yang bermanfaat bagi banyak orang.
                    </blockquote>
                    <div className="text-xs text-[#A99A90] font-outfit tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                      <span>Prinsip Pendirian Paham Digital Agency</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
