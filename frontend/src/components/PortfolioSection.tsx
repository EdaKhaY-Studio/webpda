"use client";

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { mockProjects, siteConfig } from "@/data/mockData";
import { Sparkles, MessageCircle, ArrowUpRight, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Website UMKM", "Katalog & Order WA", "AI Chatbot"];

  const filteredProjects = selectedCategory === "Semua"
    ? mockProjects
    : mockProjects.filter((p) =>
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section id="portofolio" className="py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Bukti Nyata Kualitas</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Hasil Kerja Terbaru & Studi Kasus UMKM
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Lihat bagaimana kami mentransformasi kehadiran digital para pelaku usaha lokal
              menjadi lebih rapi, modern, dan menghasilkan penjualan nyata.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const waCaseStudyUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Halo Paham Digital Agency! Saya tertarik dengan contoh proyek: *${project.title}* (${project.clientName}). Ingin konsultasi pembuatan serupa.`
            )}`;

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Showcase */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-900 shadow">
                      {project.category}
                    </span>
                  </div>

                  {/* Client title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-medium text-blue-200">{project.clientName}</p>
                    <h3 className="text-base font-bold leading-snug line-clamp-1">{project.title}</h3>
                  </div>
                </div>

                {/* Content Case Study */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Problem & Solution Mini Bento */}
                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3.5 border border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-700">
                      <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Kendala Awal: </strong>
                        <span className="text-slate-600">{project.problem}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 pt-1 border-t border-slate-200/60">
                      <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Solusi Kami: </strong>
                        <span className="text-slate-600">{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800 border border-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span><strong>Hasil: </strong>{project.result}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={waCaseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Ingin Dibuatkan Seperti Ini? Tanya Tim</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
