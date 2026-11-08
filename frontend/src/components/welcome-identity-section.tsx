import { MessageCircle, Quote, HeartHandshake, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { MOCK_IDENTITY, AGENCY_INFO } from "@/data/mock-home";

export default function WelcomeIdentitySection() {
  return (
    <section id="identitas" className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 mb-4 shadow-sm">
            <HeartHandshake className="h-4 w-4 text-blue-600" />
            <span>Sambutan & Identitas Agensi</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            {MOCK_IDENTITY.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {MOCK_IDENTITY.subheadline}
          </p>
        </div>

        {/* Story & Personal Greeting Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 rounded-3xl bg-slate-50/80 p-8 sm:p-10 border border-slate-200/80">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Mengapa Kami Memulai
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Menghubungkan Potensi Hebat Usaha Lokal ke Jangkauan yang Lebih Luas
              </h3>
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                {MOCK_IDENTITY.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Local Badge */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-500">
              <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
              <span>Berbasis di Meulaboh, beroperasi melayani seluruh UMKM di Aceh Barat</span>
            </div>
          </div>

          {/* Right Column: Founder Greeting Card & Values */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Founder Greeting Quote Box */}
            <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 p-8 text-white shadow-xl">
              <Quote className="h-10 w-10 text-blue-400/40 mb-4" />
              <blockquote className="text-base sm:text-lg font-medium text-blue-50 leading-relaxed italic">
                &ldquo;{MOCK_IDENTITY.founderGreeting.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-base">
                    {MOCK_IDENTITY.founderGreeting.name}
                  </div>
                  <div className="text-xs text-blue-200">
                    {MOCK_IDENTITY.founderGreeting.role}
                  </div>
                  <div className="text-[11px] text-blue-300/80 mt-0.5">
                    {MOCK_IDENTITY.founderGreeting.location}
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white font-extrabold text-xl shadow-inner">
                  P
                </div>
              </div>
            </div>

            {/* Contact Direct action */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-emerald-950">
                  Ingin Berbincang Langsung?
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Kami senang mendengar cerita dan impian bisnis Anda.
                </p>
              </div>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors shrink-0"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Sapa Kami</span>
              </a>
            </div>
          </div>
        </div>

        {/* Identity Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_IDENTITY.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4 border border-blue-100">
                {pillar.badge}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

