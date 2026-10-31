import React from "react";
import { mockTestimonials } from "@/data/mockData";
import { Star, Quote, Sparkles, MapPin } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-20 bg-slate-50 border-t border-slate-200/60 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Cerita Sukses Pelanggan</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Dipercaya Pelaku Usaha Lokal di Aceh Barat
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dengarkan langsung pengalaman pemilik usaha yang telah meningkatkan performa
            bisnisnya bersama Paham Digital Agency.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-3xl bg-white p-7 shadow-sm hover:shadow-md border border-slate-200/80 transition-shadow"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-slate-300" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.clientName}</h4>
                  <p className="text-xs text-blue-600 font-medium">{t.businessName}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
