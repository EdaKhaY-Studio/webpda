import { ExternalLink, MapPin, Sparkles, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";
import { MOCK_RECENT_WORKS } from "@/data/mock-home";

export default function RecentWorksSection() {
  return (
    <section id="portofolio" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-4">
              <span>Bukti Kerja Nyata</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hasil Kerja untuk UMKM Lokal
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Lihat bagaimana kami mentransformasi kehadiran digital usaha lokal di Aceh Barat dari yang sebelumnya belum dikenal menjadi ramai pelanggan.
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/6282272991000?text=Halo%20Paham%20Digital%20Agency,%20saya%20ingin%20melihat%20portofolio%20lainnya%20untuk%20bidang%20usaha%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100 hover:border-slate-400 transition-all"
            >
              <span>Minta Portofolio Sesuai Bidang Anda</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_RECENT_WORKS.map((work) => (
            <div
              key={work.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div>
                {/* Visual Header / Mockup Representation */}
                <div className="relative h-48 w-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-blue-200 border border-blue-400/30">
                      {work.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {work.metrics}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                      <span>{work.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {work.title}
                    </h3>
                    <p className="text-xs text-slate-300">{work.clientName}</p>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {work.description}
                  </p>

                  <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3 mb-5">
                    <div className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                      Hasil Transformasi:
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {work.result}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {work.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="border-t border-slate-100 p-6 pt-4 bg-slate-50/50">
                <a
                  href={`https://wa.me/6282272991000?text=Halo%20Paham%20Digital,%20saya%20tertarik%20solusi%20seperti%20proyek%20${encodeURIComponent(
                    work.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Mau Solusi Seperti Proyek Ini? Konsultasi</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

