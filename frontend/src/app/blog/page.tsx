import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/site-config";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Digital Knowledge — Paham Digital Agency",
  description:
    "Edukasi dan panduan seputar website, web application, AI, automasi bisnis, SEO, dan transformasi digital untuk UMKM dan bisnis modern.",
  alternates: { canonical: "/blog" },
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
  const articles = BLOG_POSTS;

  return (
    <div className="bg-[#0B0807] bg-grid-texture min-h-screen text-[#F7F1EB] font-body pt-32 pb-24">
      
      {/* Page Header */}
      <div className="container-site mb-14">
        <div className="max-w-3xl">
          <div className="eyebrow-label mb-5">
            <span className="eyebrow-dot" />
            <span>DIGITAL KNOWLEDGE</span>
          </div>

          <h1 className="font-display font-extrabold uppercase tracking-tight text-[#F7F1EB] text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.04] mb-6">
            KENALI TEKNOLOGINYA,{" "}
            <span className="text-[#F45B1A]">KUASAI MASA DEPAN.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#A99A90] leading-relaxed">
            Wawasan terkurasi seputar website modern, asisten AI, automasi bisnis, dan SEO lokal
            untuk mendorong akselerasi bisnis Anda.
          </p>
        </div>
      </div>

      {/* Category Pills Filter Bar */}
      <div className="border-y border-white/10 bg-[#17100D]/80 backdrop-blur-md mb-16 overflow-x-auto">
        <div className="container-site flex items-center gap-2 py-3 whitespace-nowrap">
          {BLOG_CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${
                i === 0
                  ? "bg-[#F45B1A] text-white shadow-md shadow-[#F45B1A]/30"
                  : "bg-white/5 text-[#A99A90] hover:text-[#F7F1EB] hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Articles Container */}
      <div className="container-site">
        
        {/* Editor's Choice Featured Article */}
        {featured && (
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F45B1A] mb-4 block font-display">
              Pilihan Editor
            </span>

            <Link href={`/blog/${featured.slug}`} className="block group no-underline">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#17100D] border border-white/12 group-hover:border-[#F45B1A]/50 transition-all duration-300 shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
                
                {/* Visual Placeholder Block (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#21140F] to-[#0B0807] border border-white/10 flex flex-col justify-between p-6 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-[#F45B1A]/20 flex items-center justify-center text-[#F45B1A] font-display font-bold text-xs">
                    PD
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#F45B1A] text-white text-[10px] font-bold uppercase tracking-wider">
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content Block (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#A99A90] mb-3">
                      <span>{formatDate(featured.publishedAt)}</span>
                      <span>·</span>
                      <span>{featured.readingTime} menit baca</span>
                    </div>

                    <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-tight mb-4">
                      {featured.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#A99A90] leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#A99A90]">
                    <span>Penulis: {featured.author}</span>
                    <span className="text-[#F45B1A] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Baca Lengkap</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>

              </article>
            </Link>
          </div>
        )}

        {/* Regular Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group no-underline">
              <article className="flex flex-col justify-between h-full p-7 rounded-3xl bg-[#17100D] border border-white/10 group-hover:border-[#F45B1A]/40 transition-all duration-300 group-hover:-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[11px] font-bold text-[#F45B1A] uppercase tracking-wider font-display">
                      {post.category}
                    </span>
                    <span className="text-[#A99A90]">{post.readingTime} mnt</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A99A90] leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A99A90]">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="text-[#F45B1A] font-bold">Baca →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}
