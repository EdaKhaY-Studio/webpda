import Link from "next/link";
import {
  Clock,
  ArrowRight,
  Globe,
  SearchCheck,
  Monitor,
  Brain,
  Cpu,
  Zap,
  Building2,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export interface BlogPostItem {
  id: string;
  articleNumber?: string;
  series?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  coverImage?: string;
  coverAlt?: string;
  author: string;
  authorRole?: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Article-specific semantic icon mapping
 * Reuses the PDA semantic icon standard across the archive.
 */
function getArticleIcon(slug: string, category?: string): LucideIcon {
  switch (slug) {
    case "domain-vs-hosting":
      return Globe;
    case "apa-itu-seo-website-sepi-pengunjung":
    case "apa-itu-seo":
      return SearchCheck;
    case "kenapa-bisnis-perlu-website":
      return Monitor;
    case "apa-itu-geo":
      return Brain;
    case "apa-itu-gemini-4-carbon":
      return Cpu;
    case "apa-itu-gemini-4-hydrogen":
      return Zap;
    case "apa-itu-paham-digital-agency":
      return Building2;
    default:
      if (category) {
        const cat = category.toLowerCase();
        if (
          cat.includes("seo") ||
          cat.includes("search") ||
          cat.includes("marketing")
        ) {
          return SearchCheck;
        }
        if (cat.includes("ai") || cat.includes("kecerdasan")) {
          return Brain;
        }
        if (cat.includes("web") || cat.includes("aplikasi")) {
          return Monitor;
        }
        if (cat.includes("hosting") || cat.includes("domain")) {
          return Globe;
        }
        if (cat.includes("agency") || cat.includes("profil")) {
          return Building2;
        }
      }
      return BookOpen;
  }
}

/**
 * Permanent Reusable Archive Article Card for Paham Digital Agency
 * Conforms strictly to the 4 x 3 grid system with uniform proportions,
 * 16:9 imagery, and robust responsive layout.
 */
export function ArchiveArticleCard({ post }: { post: BlogPostItem }) {
  const ArticleIcon = getArticleIcon(post.slug, post.category);

  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="block group no-underline h-full select-none"
    >
      <article className="flex flex-col justify-between h-full p-4 sm:p-5 rounded-2xl bg-[#17100D] border border-white/10 group-hover:border-[#F45B1A]/45 transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(244,91,26,0.12)]">
        <div>
          {/* Metadata Row ABOVE Thumbnail (Normal Document Flow) */}
          <div className="flex items-center justify-between gap-1.5 mb-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F45B1A] text-white text-[10px] font-bold uppercase tracking-wider font-geom shadow-sm whitespace-nowrap">
                {post.category}
              </span>
              {post.articleNumber && (
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#F7F1EB] text-[10px] font-bold uppercase tracking-wider font-geom whitespace-nowrap">
                  ARTIKEL {post.articleNumber}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#A99A90] font-outfit shrink-0">
              <Clock className="w-3 h-3 text-[#F45B1A] shrink-0" />
              <span>{post.readingTime} mnt</span>
            </div>
          </div>

          {/* 16:9 Cover Artwork (Safe Cover Object-Fit) */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0B0807] mb-4 shadow-inner group/img">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.coverAlt || post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#21140F] to-[#0B0807]">
                <span className="text-xs font-geom text-[#F45B1A] font-bold">
                  PAHAM DIGITAL
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Publication Date & Author */}
          <div className="flex items-center gap-1.5 text-xs text-[#A99A90] font-outfit mb-2.5">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span className="text-[#F7F1EB] truncate">{post.author}</span>
          </div>

          {/* Article Title in Geom */}
          <h3 className="font-geom font-bold text-base sm:text-lg text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug line-clamp-2 mb-2.5 min-h-[46px]">
            {post.title}
          </h3>

          {/* Short Synopsis in Outfit */}
          <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Action Row */}
        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs mt-auto">
          <div className="flex items-center gap-1.5 text-[#A99A90] font-outfit text-[11px] truncate max-w-[140px]">
            <ArticleIcon className="w-3.5 h-3.5 text-[#F45B1A] shrink-0" />
            <span className="truncate">{post.category}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[#F45B1A] font-bold font-outfit group-hover:translate-x-1 transition-transform shrink-0">
            <span>Baca Artikel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
