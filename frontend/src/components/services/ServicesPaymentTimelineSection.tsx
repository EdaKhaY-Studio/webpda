"use client";

import { CheckCircle2, ShieldCheck, Clock, MonitorSmartphone, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PaymentMilestone {
  percentage: string;
  stageNumber: string;
  title: string;
  timing: string;
  milestoneDescription: string;
  icon: React.ReactNode;
  requirements: string[];
}

const PAYMENT_STAGES: PaymentMilestone[] = [
  {
    percentage: "50%",
    stageNumber: "TAHAP 01",
    title: "Pembayaran Awal (Down Payment)",
    timing: "Setelah konfirmasi paket & kesepakatan ruang lingkup, sebelum pengerjaan dimulai.",
    milestoneDescription:
      "Pembayaran ini mengonfirmasi pemesanan resmi dan memulai persiapan arsitektur, riset aset brand, serta proses desain dan pengembangan.",
    icon: <Clock className="w-5 h-5 text-[#F45B1A]" />,
    requirements: [
      "Konfirmasi paket dan ruang lingkup proyek disetujui",
      "Pengumpulan materi dan aset bisnis awal dari klien",
      "Penyusunan arsitektur sistem dan persiapan pengembangan dimulai",
    ],
  },
  {
    percentage: "30%",
    stageNumber: "TAHAP 02",
    title: "Setelah Website Online & Diakses Publik",
    timing: "Setelah website selesai dibangun, diuji fungsionalitasnya, dan online di domain resmi.",
    milestoneDescription:
      "Tahapan pembayaran ini baru dilakukan setelah website telah tayang online, terhubung ke domain resmi klien, dan dapat diakses oleh publik.",
    icon: <MonitorSmartphone className="w-5 h-5 text-[#F45B1A]" />,
    requirements: [
      "Website telah selesai dibangun sesuai ruang lingkup yang disepakati",
      "Lolos pengujian fungsionalitas dan tampilan responsif",
      "Terhubung ke domain resmi dan hosting aktif",
      "Website berhasil dipublikasikan dan dapat diakses publik",
    ],
  },
  {
    percentage: "20%",
    stageNumber: "TAHAP 03",
    title: "Setelah Sistem AI Berfungsi Penuh",
    timing: "Setelah WhatsApp AI Customer Service terintegrasi, diuji, dan berfungsi optimal.",
    milestoneDescription:
      "Pembayaran pelunasan akhir baru dibayarkan setelah seluruh sistem AI WhatsApp terbukti berjalan fungsional dan operasional sesuai kesepakatan.",
    icon: <MessageSquare className="w-5 h-5 text-[#F45B1A]" />,
    requirements: [
      "Integrasi workflow n8n berjalan normal tanpa kendala",
      "Integrasi gateway WhatsApp WAHA berfungsi stabil",
      "AI berhasil menerima pesan WhatsApp yang masuk dari pelanggan",
      "AI memproses pesan dengan basis pengetahuan dan instruksi bisnis",
      "AI berhasil membalas pesan secara otomatis dan teruji fungsional",
    ],
  },
];

export default function ServicesPaymentTimelineSection() {
  const { sectionRef, getRevealClass, isInView, scrollDirection } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="skema-pembayaran"
      className="relative section-py bg-[#0B0807] border-b border-white/10 scroll-mt-24"
      aria-labelledby="payment-timeline-title"
    >
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs font-geom uppercase tracking-wider text-[#A99A90] font-medium mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
            <span>PAYMENT MILESTONES — 50% / 30% / 20%</span>
          </div>

          <h2
            id="payment-timeline-title"
            className={`font-geom font-bold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.12] text-[#F7F1EB] tracking-tight mb-5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[100ms] ${getRevealClass()}`}
          >
            Skema Pembayaran Bertahap{" "}
            <span className="text-[#F45B1A]">
              Berbasis Pencapaian Nyata.
            </span>
          </h2>

          <p
            className={`font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[240ms] ${getRevealClass()}`}
          >
            Untuk paket Meugah AI Business Suite, kami menerapkan sistem pembayaran bertahap 3 tahap yang adil, aman, dan transparan. Anda hanya membayar tahapan berikutnya saat pencapaian milestone sebelumnya telah diverifikasi dan berjalan baik.
          </p>
        </div>

        {/* ── DESKTOP HORIZONTAL 3-STEP TIMELINE (lg and above) ── */}
        <div className="hidden lg:block relative mb-6">
          
          {/* Continuous Connecting Track Line behind 3 Steps */}
          <div
            aria-hidden="true"
            className="absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-white/10 z-0"
          >
            <div
              className={`h-full bg-[#F45B1A] origin-left transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            />
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-3 gap-8 relative z-10 items-stretch">
            {PAYMENT_STAGES.map((stage, idx) => {
              const cardDelay = isInView
                ? scrollDirection === "down"
                  ? `${(idx + 1) * 140}ms`
                  : `${(PAYMENT_STAGES.length - idx) * 140}ms`
                : "0ms";

              return (
                <div
                  key={stage.stageNumber}
                  className={`flex flex-col justify-between p-7 rounded-3xl bg-[#17100D] border border-white/10 hover:border-[#F45B1A]/40 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.5)] ${getRevealClass()}`}
                  style={{
                    transitionDelay: cardDelay,
                  }}
                >
                <div>
                  
                  {/* Top Node with Percentage Circle */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/8">
                    <div className="w-16 h-16 rounded-2xl bg-[#0B0807] border-2 border-[#F45B1A] flex items-center justify-center shadow-[0_0_16px_rgba(244,91,26,0.25)]">
                      <span className="font-geom font-extrabold text-2xl text-[#F45B1A]">
                        {stage.percentage}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-geom font-bold text-xs uppercase tracking-wider text-[#A99A90] block">
                        {stage.stageNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-outfit text-[#16A34A] font-semibold mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Milestone Jelas
                      </span>
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-geom font-bold text-lg text-[#F7F1EB] mb-2 leading-snug">
                    {stage.title}
                  </h3>

                  {/* Timing Trigger */}
                  <div className="p-3 rounded-xl bg-[#0B0807] border border-white/5 mb-4">
                    <span className="text-[11px] font-geom uppercase tracking-wider text-[#F45B1A] font-semibold block mb-1">
                      Kapan Dibayarkan:
                    </span>
                    <p className="text-xs font-outfit text-[#D5CBC3] leading-relaxed">
                      {stage.timing}
                    </p>
                  </div>

                  {/* Milestone Description */}
                  <p className="text-xs text-[#A99A90] font-outfit leading-relaxed mb-5">
                    {stage.milestoneDescription}
                  </p>

                  {/* Requirements checklist */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-geom uppercase tracking-wider text-[#A99A90] font-bold">
                      Kriteria Penyelesaian:
                    </div>
                    <ul className="space-y-1.5 text-xs font-outfit text-[#D5CBC3]">
                      {stage.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B1A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer badge */}
                <div className="pt-4 mt-6 border-t border-white/8 flex items-center justify-between text-[11px] font-outfit text-[#A99A90]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                    Proteksi Klien & Agensi
                  </span>
                  <span className="font-geom font-semibold text-[#F7F1EB]">
                    {stage.percentage} Pembayaran
                  </span>
                </div>

              </div>
            );
          })}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE (under lg) ── */}
        <div className="lg:hidden relative">
          {PAYMENT_STAGES.map((stage, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === PAYMENT_STAGES.length - 1;

            return (
              <div
                key={stage.stageNumber}
                className={`grid grid-cols-[28px_minmax(0,1fr)] sm:grid-cols-[32px_minmax(0,1fr)] gap-3.5 sm:gap-4 items-start ${
                  !isLast ? "pb-8" : ""
                }`}
              >
                {/* ── Dedicated Marker & Spine Column ── */}
                <div className="relative flex justify-center h-full self-stretch select-none">
                  {/* Continuous Vertical Timeline Line Segment */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#F45B1A]/40 shadow-[0_0_8px_rgba(244,91,26,0.25)] pointer-events-none ${
                      isFirst
                        ? "top-8 -bottom-[1px]"
                        : isLast
                        ? "top-[-1px] h-[33px]"
                        : "top-[-1px] -bottom-[1px]"
                    }`}
                  />

                  {/* Circular Milestone Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F45B1A] border-4 border-[#0B0807] shadow-[0_0_10px_#F45B1A] z-10 shrink-0"
                  />
                </div>

                {/* ── Content Card ── */}
                <div
                  className={`min-w-0 w-full transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${getRevealClass()}`}
                  style={{
                    transitionDelay: isInView
                      ? scrollDirection === "down"
                        ? `${(idx + 1) * 140}ms`
                        : `${(PAYMENT_STAGES.length - idx) * 140}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex flex-col p-5 sm:p-6 rounded-2xl bg-[#17100D] border border-white/10 shadow-lg">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/8">
                      <div className="flex items-center gap-3">
                        <span className="font-geom font-extrabold text-2xl text-[#F45B1A]">
                          {stage.percentage}
                        </span>
                        <div>
                          <span className="font-geom font-bold text-xs uppercase tracking-wider text-[#A99A90] block">
                            {stage.stageNumber}
                          </span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                        {stage.icon}
                      </div>
                    </div>

                    <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] mb-2 leading-snug">
                      {stage.title}
                    </h3>

                    {/* Timing note */}
                    <div className="p-3 rounded-xl bg-[#0B0807] border border-white/5 mb-3 text-xs font-outfit">
                      <span className="font-geom uppercase text-[10px] text-[#F45B1A] font-bold block mb-1">
                        Kapan Dibayarkan:
                      </span>
                      <p className="text-[#D5CBC3] leading-relaxed">
                        {stage.timing}
                      </p>
                    </div>

                    <p className="text-xs text-[#A99A90] font-outfit leading-relaxed mb-4">
                      {stage.milestoneDescription}
                    </p>

                    {/* Requirements */}
                    <div className="space-y-1.5 pt-3 border-t border-white/8">
                      <div className="text-[11px] font-geom uppercase tracking-wider text-[#A99A90] font-bold">
                        Kriteria Penyelesaian:
                      </div>
                      <ul className="space-y-1.5 text-xs font-outfit text-[#D5CBC3]">
                        {stage.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B1A] shrink-0 mt-0.5" />
                            <span className="leading-snug">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Summary peace of mind note */}
        <div
          className={`mt-10 p-4 sm:p-5 rounded-2xl bg-[#17100D] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms] ${getRevealClass()}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#16A34A]/15 border border-[#16A34A]/30 flex items-center justify-center text-[#16A34A] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-geom font-bold text-xs sm:text-sm text-[#F7F1EB]">
                Keamanan & Kepastian Hasil Tanpa Beban di Awal
              </div>
              <div className="text-xs font-outfit text-[#A99A90]">
                Setiap pembayaran bertahap dihitung proporsional dari paket yang Anda pilih, melindungi hak klien sekaligus memastikan komitmen pengerjaan.
              </div>
            </div>
          </div>
          <span className="text-xs font-geom uppercase tracking-wider text-[#F45B1A] font-bold shrink-0">
            50% → 30% → 20%
          </span>
        </div>

      </div>
    </section>
  );
}
