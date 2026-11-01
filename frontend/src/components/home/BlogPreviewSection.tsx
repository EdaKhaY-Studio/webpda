"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-config";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPreviewSection() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative section-py bg-[#17100D] border-y border-white/10 scroll-mt-20 overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow-label mb-5">
              <span className="eyebrow-dot" />
              <span>DIGITAL KNOWLEDGE</span>
            </div>
            <h2
              id="blog-title"
              className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[56px]"
            >
              KENALI TEKNOLOGINYA,{" "}
              <span className="text-[#F45B1A]">KUASAI MASA DEPAN.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="btn-secondary-dark group self-start md:self-auto shrink-0"
          >
            <span>Semua Artikel</span>
            <ArrowUpRight
              size={17}
              className="text-[#F45B1A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Editorial Publication Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Large Article (7 cols) */}
          <div className="lg:col-span-7">
            <Link href={`/blog/${featured.slug}`} className="block h-full group no-underline">
              <article className="flex flex-col justify-between h-full p-8 sm:p-10 rounded-3xl bg-[#0B0807] border border-white/12 group-hover:border-[#F45B1A]/50 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#F45B1A] text-white text-[11px] font-bold uppercase tracking-wider font-display">
                      Pilihan Editor
                    </span>
                    <span className="text-xs text-[#A99A90]">
                      {featured.readingTime} menit baca
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#F45B1A] uppercase tracking-wider block mb-3">
                    {featured.category}
                  </span>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-tight mb-4">
                    {featured.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A99A90] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#A99A90]">
                  <span>{formatDate(featured.publishedAt)} · {featured.author}</span>
                  <span className="text-[#F45B1A] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Baca Artikel →
                  </span>
                </div>
              </article>
            </Link>
          </div>

          {/* Supporting Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group no-underline">
                <article className="p-6 rounded-2xl bg-[#0B0807] border border-white/10 group-hover:border-[#F45B1A]/40 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#F45B1A] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[#A99A90] text-xs">·</span>
                    <span className="text-[11px] text-[#A99A90]">{post.readingTime} mnt baca</span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-3">
                    {post.title}
                  </h4>

                  <p className="text-xs text-[#A99A90] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
