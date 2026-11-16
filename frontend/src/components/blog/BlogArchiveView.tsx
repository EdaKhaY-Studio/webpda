"use client";

import { useState, useMemo } from "react";
import {
  ArchiveArticleCard,
  type BlogPostItem,
} from "@/components/blog/ArchiveArticleCard";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface BlogArchiveViewProps {
  initialPosts: BlogPostItem[];
}

const ARTICLES_PER_PAGE = 12;

export function BlogArchiveView({ initialPosts }: BlogArchiveViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract unique categories from real data
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(initialPosts.map((p) => p.category).filter(Boolean))
    );
    return ["Semua", ...unique];
  }, [initialPosts]);

  // Filter and sort articles (newest first)
  const filteredArticles = useMemo(() => {
    return initialPosts
      .filter((post) => {
        const matchesCategory =
          selectedCategory === "Semua" || post.category === selectedCategory;
        const query = searchQuery.trim().toLowerCase();
        const matchesQuery =
          !query ||
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [initialPosts, selectedCategory, searchQuery]);

  // Calculate pagination
  const totalArticles = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / ARTICLES_PER_PAGE));

  // Current page items (max 12)
  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const gridEl = document.getElementById("archive-grid-anchor");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container-site">
      {/* ── 01. EDITORIAL HEADER ────────────────────────────────────────── */}
      <div className="mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs text-[#A99A90] uppercase tracking-wider font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A] animate-pulse" />
            <span>PAHAM DIGITAL — DIGITAL KNOWLEDGE</span>
          </div>

          <h1 className="font-geom font-bold text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#F7F1EB] tracking-tight mb-5">
            Belajar Teknologi,{" "}
            <span className="text-[#F45B1A]">Mulai dari Hal Sederhana.</span>
          </h1>

          <p className="font-outfit text-base sm:text-lg text-[#A99A90] leading-relaxed max-w-2xl">
            Kenali teknologi yang ada di balik bisnis digital. Mulai dari
            website, SEO, Google Search, hingga automasi, kita pelajari
            bersama dengan bahasa sehari-hari yang gampang dipahami.
          </p>
        </div>
      </div>

      {/* ── 02. INTERACTIVE CONTROLS (SEARCH & CATEGORY FILTERS) ────────── */}
      <div
        id="archive-grid-anchor"
        className="mb-10 pt-4 border-t border-white/10 scroll-mt-28"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          {/* Category Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Filter Kategori"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-outfit font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#F45B1A] text-white shadow-md shadow-[#F45B1A]/25"
                      : "bg-[#17100D] text-[#A99A90] border border-white/10 hover:border-[#F45B1A]/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A99A90]" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Cari topik atau artikel..."
              aria-label="Cari artikel"
              className="w-full pl-10 pr-9 py-2 rounded-full bg-[#17100D] border border-white/10 focus:border-[#F45B1A]/60 focus:outline-none text-xs text-[#F7F1EB] placeholder-[#A99A90]/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A99A90] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-[#A99A90] font-outfit px-1">
          <div className="flex items-center gap-2">
            <span className="font-geom font-bold uppercase tracking-wider text-[#F45B1A]">
              ARSIP ARTIKEL
            </span>
            <span>·</span>
            <span>
              Menampilkan {currentArticles.length} dari {totalArticles} artikel
            </span>
          </div>
          {totalPages > 1 && (
            <span className="hidden sm:inline">
              Halaman {currentPage} dari {totalPages}
            </span>
          )}
        </div>
      </div>

      {/* ── 03. PERMANENT 4-COLUMN × 3-ROW GRID (12 MAX) ────────────────── */}
      {currentArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {currentArticles.map((post) => (
            <ArchiveArticleCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        /* Empty Filter Results State */
        <div className="p-12 text-center rounded-3xl bg-[#17100D] border border-white/10 my-8 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#21140F] border border-[#F45B1A]/30 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-5 h-5 text-[#F45B1A]" />
          </div>
          <h3 className="font-geom font-bold text-lg text-[#F7F1EB] mb-2">
            Tidak Ada Artikel Ditemukan
          </h3>
          <p className="font-outfit text-xs text-[#A99A90] leading-relaxed mb-5">
            Tidak ada artikel yang cocok dengan pencarian &quot;{searchQuery}&quot;
            dalam kategori ini.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Semua");
              setSearchQuery("");
              setCurrentPage(1);
            }}
            className="px-4 py-2 rounded-full bg-[#F45B1A] text-white text-xs font-outfit font-bold hover:bg-[#FF6A2A] transition-colors"
          >
            Reset Semua Filter
          </button>
        </div>
      )}

      {/* ── 04. PERMANENT PAGINATION CONTROLS ──────────────────────────── */}
      {totalPages > 1 ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Halaman sebelumnya"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17100D] border border-white/10 text-xs font-outfit font-medium text-[#F7F1EB] hover:border-[#F45B1A]/50 hover:text-[#F45B1A] disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Page Number Pills */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Buka halaman ${pageNum}`}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`w-9 h-9 rounded-full text-xs font-geom font-bold transition-all ${
                      isCurrent
                        ? "bg-[#F45B1A] text-white shadow-md shadow-[#F45B1A]/30"
                        : "bg-[#17100D] border border-white/10 text-[#A99A90] hover:text-white hover:border-[#F45B1A]/40"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Halaman selanjutnya"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17100D] border border-white/10 text-xs font-outfit font-medium text-[#F7F1EB] hover:border-[#F45B1A]/50 hover:text-[#F45B1A] disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Subtle Single Page Indicator */
        <div className="pt-8 border-t border-white/10 text-center text-xs text-[#A99A90] font-outfit">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F45B1A]" />
            Semua artikel edukasi resmi Paham Digital Agency ditampilkan.
          </span>
        </div>
      )}
    </div>
  );
}
