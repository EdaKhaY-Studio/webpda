"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/site-config";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPreviewSection() {
  const { sectionRef, isInView, getRevealClass } = useScrollReveal({
    threshold: 0.1,
  });

  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.id !== featured.id);

  return (
    <section
      ref={sectionRef}
      id="blog"
      aria-labelledby="blog-title"
      className="relative section-py bg-[#17100D] border-y border-white/10 scroll-mt-20 overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Header with Vertical Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div
              className={`eyebrow-label mb-5 reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "60ms" : "0ms" }}
            >
              <span className="eyebrow-dot" />
              <span>DIGITAL KNOWLEDGE</span>
            </div>
            <h2
              id="blog-title"
              className={`font-geom font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[32px] sm:text-[44px] lg:text-[54px] reveal-heading ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "140ms" : "0ms" }}
            >
              KENALI TEKNOLOGINYA,{" "}
              <span className="text-[#F45B1A]">KUASAI MASA DEPAN.</span>
            </h2>
          </div>

          <Link
            href="/blog/"
            className={`btn-secondary-dark group self-start md:self-auto shrink-0 reveal-button ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
          >
            <span>Koleksi Artikel</span>
            <ArrowUpRight
              size={17}
              className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Editorial Publication Grid with Staggered Cascades */}
        {rest.length === 0 ? (
          /* Single Featured Official Article (Full Width Editorial Showcase) */
          <div
            className={`reveal-card ${getRevealClass()}`}
            style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
          >
            <Link href={`/blog/${featured.slug}/`} className="block group no-underline">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0B0807] border border-white/12 group-hover:border-[#F45B1A]/50 transition-all duration-400 ease-out hover:-translate-y-1.5 shadow-[0_16px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(244,91,26,0.12)]">
                
                {/* Visual Cover (5 cols) */}
                <div className="lg:col-span-5 flex flex-col">
                  {/* Metadata Row Above */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#F45B1A] text-white text-[10px] font-bold uppercase tracking-wider font-geom shadow-md">
                      {featured.category}
                    </span>
                    {featured.articleNumber && (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[10px] font-bold uppercase tracking-wider font-geom">
                        ARTIKEL {featured.articleNumber}
                      </span>
                    )}
                  </div>

                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#17100D] shadow-inner">
                    {featured.coverImage ? (
                      <img
                        src={featured.coverImage}
                        alt={featured.coverAlt || featured.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                        <span className="text-sm font-geom text-[#F45B1A] font-bold">PAHAM DIGITAL</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Block (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#A99A90] font-outfit mb-3">
                      <span>{formatDate(featured.publishedAt)}</span>
                      <span>·</span>
                      <span>{featured.readingTime} menit baca</span>
                      <span>·</span>
                      <span className="text-[#F7F1EB]">Penulis: {featured.author}</span>
                    </div>

                    <h3 className="font-geom font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-tight mb-4">
                      {featured.title}
                    </h3>

                    <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                      <span className="text-xs font-outfit text-[#D5CBC3]">Artikel Edukasi Resmi</span>
                    </div>

                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F45B1A] group-hover:bg-[#FF6A2A] text-white text-xs sm:text-sm font-outfit font-bold transition-all shadow-md shadow-[#F45B1A]/30">
                      <span>Baca Artikel Lengkap</span>
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

              </article>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Article 02 (7 cols) */}
            <div
              className={`lg:col-span-7 reveal-card ${getRevealClass()}`}
              style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
            >
              <Link href={`/blog/${featured.slug}/`} className="block h-full group no-underline">
                <article className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0B0807] border border-white/12 group-hover:border-[#F45B1A]/50 transition-all duration-400 ease-out hover:-translate-y-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(244,91,26,0.12)]">
                  <div>
                    {/* Dedicated Metadata Row ABOVE Cover Image (Normal Document Flow) */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#F45B1A] text-white text-[11px] font-bold uppercase tracking-wider font-geom shadow-md">
                          {featured.category}
                        </span>
                        {featured.articleNumber && (
                          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[11px] font-bold uppercase tracking-wider font-geom">
                            ARTIKEL {featured.articleNumber}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#A99A90] font-outfit">
                        {featured.readingTime} menit baca
                      </span>
                    </div>

                    {/* Visual 16:9 Cover - Clean, 100% Unobstructed Artwork */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#17100D] mb-6 shadow-inner">
                      {featured.coverImage ? (
                        <img
                          src={featured.coverImage}
                          alt={featured.coverAlt || featured.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                          <span className="text-sm font-geom text-[#F45B1A] font-bold">PAHAM DIGITAL</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#A99A90] font-outfit mb-3">
                      <span>{formatDate(featured.publishedAt)}</span>
                      <span>·</span>
                      <span className="text-[#F7F1EB]">{featured.author}</span>
                    </div>

                    <h3 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-tight mb-4">
                      {featured.title}
                    </h3>

                    <p className="font-outfit text-sm sm:text-base text-[#A99A90] leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-outfit text-[#A99A90]">
                    <span className="flex items-center gap-1.5 text-[#16A34A] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                      Artikel Edukasi Utama
                    </span>
                    <span className="text-[#F45B1A] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Baca Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </div>

            {/* Supporting Articles (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {rest.map((post, idx) => (
                <div
                  key={post.id}
                  className={`h-full reveal-card ${getRevealClass()}`}
                  style={{ transitionDelay: isInView ? `${idx * 140 + 380}ms` : "0ms" }}
                >
                  <Link href={`/blog/${post.slug}/`} className="block h-full group no-underline">
                    <article className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-[#0B0807] border border-white/10 group-hover:border-[#F45B1A]/40 transition-all duration-300 ease-out group-hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
                      <div>
                        {/* Dedicated Metadata Row ABOVE Cover Image */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#F45B1A]/20 border border-[#F45B1A]/40 text-[#F45B1A] text-[10px] font-bold uppercase tracking-wider font-geom">
                              {post.category}
                            </span>
                            {post.articleNumber && (
                              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A99A90] text-[10px] font-bold uppercase tracking-wider font-geom">
                                ARTIKEL {post.articleNumber}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#A99A90] font-outfit">
                            {post.readingTime} menit baca
                          </span>
                        </div>

                        {/* Visual 16:9 Cover */}
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#17100D] mb-4 shadow-inner">
                          {post.coverImage ? (
                            <img
                              src={post.coverImage}
                              alt={post.coverAlt || post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#17100D]">
                              <span className="text-xs font-geom text-[#F45B1A] font-bold">PAHAM DIGITAL</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#A99A90] font-outfit mb-2">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>·</span>
                          <span className="text-[#F7F1EB]">{post.author}</span>
                        </div>

                        <h3 className="font-geom font-bold text-xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-3">
                          {post.title}
                        </h3>

                        <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-outfit text-[#A99A90]">
                        <span className="text-xs text-[#A99A90]">
                          Baca selengkapnya
                        </span>
                        <span className="text-[#F45B1A] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Buka</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
