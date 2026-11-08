import React from "react";
import { mockServices, siteConfig } from "@/data/mockData";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Globe, Bot, TrendingUp, Layers, Check, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="h-6 w-6 text-blue-600" />;
      case "Bot":
        return <Bot className="h-6 w-6 text-emerald-600" />;
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6 text-indigo-600" />;
      default:
        return <Layers className="h-6 w-6 text-amber-600" />;
    }
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50 border-y border-slate-200/60 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Solusi Kami untuk Anda</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Layanan Terpadu Agar Usaha Anda Lebih Menjual & Dipercaya
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Kami rancang seluruh solusi ini secara khusus untuk tantangan pemilik UMKM:
            butuh tampilan modern, ingin melayani pelanggan cepat tanpa repot, dan ingin
            mudah ditemukan di internet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.slice(0, 3).map((service) => {
            const waServiceUrl = buildWhatsAppUrl(
              `Halo Paham Digital Agency! Saya ingin tanya lebih lanjut tentang layanan: *${service.title}* untuk usaha saya di Aceh Barat.`
            );

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 group-hover:scale-110 transition-transform">
                      {getIcon(service.icon)}
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Benefits checklist */}
                  <div className="mt-6 border-t border-slate-100 pt-5 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Keunggulan Utama:
                    </p>
                    {service.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <a
                    href={waServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-800 hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Tanya Layanan Ini via WA</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process / Langkah Kerja Sama Bar */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 sm:p-8 lg:p-10 text-white shadow-xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-200">
              <CheckCircle2 className="h-3 w-3" />
              Mudah & Tanpa Ribet
            </span>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              4 Langkah Mudah Dari Konsultasi Hingga Usaha Anda Tayang Online
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Anda tidak perlu pusing memikirkan coding, hosting, domain, ataupun prompt AI.
              Cukup siapkan materi usaha, selebihnya tim kami yang kerjakan.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="text-2xl font-black text-blue-400">01</span>
              <h4 className="mt-2 text-sm font-bold text-white">Konsultasi Santai</h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Ceritakan kebutuhan bisnis Anda via WhatsApp. Gratis tanpa biaya.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="text-2xl font-black text-indigo-400">02</span>
              <h4 className="mt-2 text-sm font-bold text-white">Penyusunan Konsep</h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Tim kami merancang desain mockup website dan skenario AI sesuai identitas brand.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="text-2xl font-black text-purple-400">03</span>
              <h4 className="mt-2 text-sm font-bold text-white">Pengerjaan & Uji Coba</h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Pengembangan sistem, pengujian respons cepat di HP, dan setting integrasi WhatsApp.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="text-2xl font-black text-emerald-400">04</span>
              <h4 className="mt-2 text-sm font-bold text-white">Go Live & Panduan</h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Website tayang resmi dengan domain pilihan. Kami berikan panduan mudah operasionalnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
