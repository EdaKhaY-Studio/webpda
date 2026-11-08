import Link from "next/link";
import { BLOG_POSTS } from "@/lib/site-config";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Calendar, User, ArrowRight } from "lucide-react";
import { EducationBookBulbIcon } from "@/components/icons/EducationBookBulbIcon";

export const metadata: Metadata = {
  title: "Blog & Digital Knowledge — Paham Digital Agency",
  description:
    "Kenali teknologi yang ada di balik bisnis digital. Mulai dari website, SEO, Google Search, hingga automasi, kita pelajari bersama dengan cara yang lebih mudah.",
  alternates: { canonical: "/blog/" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const allPosts = BLOG_POSTS;

  return (
    <div className="bg-[#0B0807] bg-grid-texture min-h-screen text-[#F7F1EB] font-outfit pt-32 pb-24">
      
      {/* ── 01. PAGE HEADER ─────────────────────────────────────────── */}
      <div className="container-site mb-12 sm:mb-16 sr-auto" style={{ "--sr-duration": "900ms" } as React.CSSProperties}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs text-[#A99A90] uppercase tracking-wider font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] animate-pulse" />
            <span>PAHAM DIGITAL — DIGITAL KNOWLEDGE</span>
          </div>

          {/* Main Title in Geom */}
          <h1 className="font-geom font-bold text-[36px] sm:text-[52px] lg:text-[62px] leading-[1.08] text-[#F7F1EB] tracking-tight mb-5">
            Belajar Teknologi,{" "}
            <span className="text-[#F45B1A]">
              Mulai dari Hal Sederhana.
            </span>
          </h1>

          {/* Supporting Text in Outfit */}
          <p className="font-outfit text-base sm:text-lg lg:text-xl text-[#A99A90] leading-relaxed">
            Kenali teknologi yang ada di balik bisnis digital. Mulai dari website, SEO, Google Search, hingga automasi, kita pelajari bersama dengan bahasa sehari-hari yang gampang dipahami.
          </p>
        </div>
      </div>

      {/* ── 02. FEATURED EDITORIAL ARTICLE ──────────────────────────── */}
      <div className="container-site mb-16 sm:mb-20 sr-auto" style={{ "--sr-duration": "900ms", "--sr-delay": "120ms" } as React.CSSProperties}>
        {featured && (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <EducationBookBulbIcon className="w-4 h-4 text-[#F45B1A]" />
              <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
                ARTIKEL EDUKASI UTAMA
              </span>
            </div>

            <Link href={`/blog/${featured.slug}/`} className="block group no-underline">
              <article className="rounded-3xl bg-gradient-to-b from-[#17100D] to-[#120C09] border border-white/12 group-hover:border-[#F45B1A]/50 transition-all duration-400 p-4 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_30px_rgba(244,91,26,0.15)] group-hover:-translate-y-1">
                
                {/* ── DEDICATED METADATA ROW ABOVE COVER IMAGE (NORMAL FLOW) ── */}
                <div className="flex items-center justify-between gap-1.5 sm:gap-3 mb-4 sm:mb-6 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                    <span className="px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-[#F45B1A] text-white text-[9.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider font-geom shadow-sm sm:shadow-md shadow-[#F45B1A]/25 whitespace-nowrap shrink-0">
                      {featured.category}
                    </span>
                    {featured.articleNumber && (
                      <span className="px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[9.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider font-geom whitespace-nowrap shrink-0">
                        ARTIKEL {featured.articleNumber}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[#A99A90] font-outfit whitespace-nowrap shrink-0">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F45B1A] shrink-0" />
                    <span>{featured.readingTime} menit baca</span>
                  </div>
                </div>

                {/* 16:9 Editorial Cover Visual (NO ABSOLUTE OVERLAY BADGES - 100% UNOBSTRUCTED) */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0B0807] mb-8 shadow-inner">
                  {featured.coverImage ? (
                    <img
                      src={featured.coverImage}
                      alt={featured.coverAlt || featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                      <span className="font-geom text-lg text-[#F45B1A] font-bold">PAHAM DIGITAL</span>
                    </div>
                  )}
                </div>

                {/* Article Meta Header */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#A99A90] font-outfit mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F45B1A]" />
                    <span>{formatDate(featured.publishedAt)}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5 text-[#F7F1EB]">
                    <User className="w-3.5 h-3.5 text-[#F45B1A]" />
                    <span>Penulis: <strong>{featured.author}</strong> ({featured.authorRole})</span>
                  </div>
                </div>

                {/* Article Title in Geom */}
                <h2 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-[1.18] tracking-tight mb-4">
                  {featured.title}
                </h2>

                {/* Article Excerpt in Outfit */}
                <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed mb-8 max-w-3xl">
                  {featured.excerpt}
                </p>

                {/* Action Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                    <span className="text-xs text-[#D5CBC3] font-medium font-outfit">
                      Tersedia untuk dibaca lengkap
                    </span>
                  </div>

                  <span className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F45B1A] group-hover:bg-[#FF6A2A] text-white text-sm font-bold font-outfit transition-all shadow-md shadow-[#F45B1A]/30">
                    <span>Baca Artikel Lengkap</span>
                    <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

              </article>
            </Link>
          </div>
        )}
      </div>

      {/* ── 03. ALL ARTICLES ARCHIVE GRID (NO DUMMY DATA) ──────────── */}
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 sr-auto" style={{ "--sr-duration": "900ms" } as React.CSSProperties}>
            <div>
              <span className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold block mb-1">
                DAFTAR ARTIKEL
              </span>
              <h3 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB]">
                Koleksi Artikel Edukasi
              </h3>
            </div>
            <div className="text-xs font-outfit text-[#A99A90] bg-[#17100D] border border-white/10 px-3.5 py-1.5 rounded-full">
              {allPosts.length} Artikel Resmi
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {allPosts.map((post, postIdx) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="block group no-underline h-full sr-auto"
                style={{ "--sr-duration": "900ms", "--sr-delay": `${postIdx * 140 + 100}ms` } as React.CSSProperties}
              >
                <article className="flex flex-col justify-between h-full p-4 sm:p-7 rounded-2xl bg-[#17100D] border border-white/10 group-hover:border-[#F45B1A]/50 transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.6)] group-hover:shadow-[0_16px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(244,91,26,0.12)]">
                  <div>
                    {/* Metadata Row ABOVE Thumbnail (Normal Document Flow) */}
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-3.5 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#F45B1A] text-white text-[9.5px] sm:text-[10px] font-bold uppercase tracking-normal sm:tracking-wider font-geom shadow-sm whitespace-nowrap shrink-0">
                          {post.category}
                        </span>
                        {post.articleNumber && (
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-normal sm:tracking-wider font-geom whitespace-nowrap shrink-0">
                            ARTIKEL {post.articleNumber}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-[#A99A90] font-outfit whitespace-nowrap shrink-0">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F45B1A] shrink-0" />
                        <span>{post.readingTime} menit baca</span>
                      </div>
                    </div>

                    {/* Visual 16:9 Thumbnail (NO ABSOLUTE OVERLAY BADGES - 100% UNOBSTRUCTED) */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0B0807] mb-5 shadow-inner">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.coverAlt || post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                          <span className="text-xs font-geom text-[#F45B1A] font-bold">PAHAM DIGITAL</span>
                        </div>
                      )}
                    </div>

                    {/* Metadata line */}
                    <div className="flex items-center gap-2 text-xs text-[#A99A90] font-outfit mb-3">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span className="text-[#F7F1EB]">{post.author}</span>
                    </div>

                    {/* Title in Geom */}
                    <h4 className="font-geom font-bold text-lg sm:text-xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-3">
                      {post.title}
                    </h4>

                    {/* Excerpt in Outfit */}
                    <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A99A90]">
                    <span className="font-geom text-[11px] text-[#A99A90] uppercase tracking-wider">
                      {post.series}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#F45B1A] font-bold font-outfit group-hover:translate-x-1 transition-transform">
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
