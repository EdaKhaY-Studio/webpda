"use client";

import React, { useState } from "react";
import Image from "next/image";
import { mockProjects, Project, siteConfig } from "@/data/mockData";
import { buildWhatsAppUrl, PREFILLED_MESSAGES } from "@/lib/whatsapp";
import {
  Briefcase,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  X,
  ExternalLink,
  TrendingUp,
  History,
  CheckCircle,
} from "lucide-react";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["Semua", "Katalog & Order WA", "AI Chatbot", "Google SEO", "Website UMKM"];

  const filteredProjects =
    selectedCategory === "Semua"
      ? mockProjects
      : mockProjects.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))
        );

  return (
    <section id="portofolio" className="py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-3">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Cuplikan Hasil Kerja Terbaru</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Portofolio Nyata UMKM di Aceh Barat
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Bukan sekadar desain cantik, kami fokus membangun website dan sistem AI yang
              benar-benar mempermudah operasional dan menaikkan omset usaha kecil.
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
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const waCaseStudyUrl = buildWhatsAppUrl(
              PREFILLED_MESSAGES.portfolio(project.title, project.clientName)
            );

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Showcase */}
                <div
                  className="relative h-56 w-full overflow-hidden bg-slate-100 cursor-pointer"
                  style={{ position: "relative" }}
                  onClick={() => setActiveModalProject(project)}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-900 shadow">
                      {project.category}
                    </span>
                    {project.isLatest && (
                      <span className="rounded-full bg-emerald-500 text-white px-2.5 py-0.5 text-[11px] font-bold shadow animate-pulse">
                        Terbaru
                      </span>
                    )}
                  </div>

                  {/* Title overlay on Image */}
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

                  {/* Key Metrics Bento */}
                  <div className="grid grid-cols-2 gap-2 bg-blue-50/70 p-3 rounded-2xl border border-blue-100/70">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="block text-base font-extrabold text-blue-700">{m.value}</span>
                        <span className="block text-[11px] font-medium text-slate-600">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Solution Snippet */}
                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3.5 border border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-700">
                      <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Kendala: </strong>
                        <span className="text-slate-600 line-clamp-2">{project.problem}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 pt-1.5 border-t border-slate-200/60">
                      <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Solusi: </strong>
                        <span className="text-slate-600 line-clamp-2">{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Result Box */}
                  <div className="flex items-start gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800 border border-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hasil: </strong>{project.result}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 rounded-xl bg-slate-100 py-2.5 px-3 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Detail Studi Kasus
                    </button>
                    <a
                      href={waCaseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shrink-0"
                      title="Konsultasi proyek serupa via WA"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Tanya WA</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Studi Kasus Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Tutup Detail"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-2">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  Klien: <strong className="text-slate-700">{activeModalProject.clientName}</strong> • Aceh Barat
                </p>
              </div>

              {/* Image Preview */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mt-5 bg-slate-100" style={{ position: "relative" }}>
                <Image
                  src={activeModalProject.imageUrl}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {activeModalProject.metrics.map((m, idx) => (
                  <div key={idx} className="rounded-2xl bg-blue-50 p-3.5 text-center border border-blue-100">
                    <span className="block text-lg font-black text-blue-700">{m.value}</span>
                    <span className="block text-xs font-medium text-slate-600 mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Before vs After Comparison */}
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <History className="h-4 w-4 text-blue-600" />
                  <span>Perbandingan Sebelum vs Sesudah</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-rose-50/60 p-4 border border-rose-100 text-xs">
                    <span className="font-bold text-rose-800 block mb-1">❌ Sebelum Dibantu:</span>
                    <p className="text-slate-700 leading-relaxed">{activeModalProject.beforeState}</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50/60 p-4 border border-emerald-100 text-xs">
                    <span className="font-bold text-emerald-800 block mb-1">✅ Setelah Dibantu Paham Digital:</span>
                    <p className="text-slate-700 leading-relaxed">{activeModalProject.afterState}</p>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="mt-6 space-y-3 text-xs leading-relaxed text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Ringkasan Masalah:</strong>
                  <p>{activeModalProject.problem}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60">
                  <strong className="text-slate-900 block mb-0.5">Solusi yang Diterapkan:</strong>
                  <p>{activeModalProject.solution}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60">
                  <strong className="text-slate-900 block mb-0.5">Hasil Akhir:</strong>
                  <p className="font-medium text-emerald-800">{activeModalProject.result}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((tag, idx) => (
                  <span key={idx} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Direct CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl(
                    `Halo Paham Digital! Saya membaca detail studi kasus *${activeModalProject.title}* (${activeModalProject.clientName}) dan ingin membuat sistem/website serupa untuk usaha saya di Aceh Barat.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 px-6 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Konsultasikan Proyek Serupa via WA</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-2xl border border-slate-200 px-5 py-3.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
