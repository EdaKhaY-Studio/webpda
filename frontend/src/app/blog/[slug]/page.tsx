import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, buildWAUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  User,
  MessageSquare,
} from "lucide-react";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleDomainVsHosting from "@/components/blog/ArticleDomainVsHosting";
import ArticleSeoWebsiteSepi from "@/components/blog/ArticleSeoWebsiteSepi";
import ArticleKenapaBisnisPerluWebsite from "@/components/blog/ArticleKenapaBisnisPerluWebsite";
import ArticleApaItuGeo from "@/components/blog/ArticleApaItuGeo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const canonicalUrl = `https://pahamdigital.online/blog/${post.slug}/`;
  const imageUrl = `https://pahamdigital.online${post.coverImage || "/images/blog/domain-vs-hosting-cover.jpg"}`;

  return {
    title: post.seoTitle || `${post.title} — Paham Digital Agency`,
    description: post.metaDescription || post.excerpt,
    keywords: [post.primaryKeyword, ...(post.additionalKeywords || [])].filter(Boolean),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      url: canonicalUrl,
      siteName: "Paham Digital Agency",
      locale: "id_ID",
      type: "article",
      publishedTime: `${post.publishedAt}T08:00:00+07:00`,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.coverAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      images: [imageUrl],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const TOC_DOMAIN_HOSTING_ITEMS = [
  { id: "01-hosting", number: "01", title: "Hosting — Rumah Tempat Website Tinggal" },
  { id: "02-domain", number: "02", title: "Domain — Alamat Rumahnya" },
  { id: "03-tld", number: "03", title: "Kenapa Ada .COM, .ID, dan .ONLINE?" },
  { id: "04-custom-tld", number: "04", title: "Kenapa Nggak Buat Ekstensi Sendiri?" },
  { id: "05-pilih-ekstensi", number: "05", title: "Jadi, Harus Pakai .COM atau .ID?" },
  { id: "06-gabungan-keduanya", number: "06", title: "Sekarang, Coba Bayangkan Keduanya!" },
  { id: "07-hanya-domain", number: "07", title: "Apa yang Terjadi Kalau Hanya Punya Domain?" },
  { id: "08-tempat-beli", number: "08", title: "Harus Dibeli di Tempat yang Sama?" },
  { id: "09-kebutuhan-bisnis", number: "09", title: "Kenapa Bisnis Membutuhkan Keduanya?" },
  { id: "kesimpulan", number: "★", title: "Kesimpulan & Solusi Bisnis" },
];

const TOC_SEO_ITEMS = [
  { id: "01-pak-rt-google-search", number: "01", title: "Kenalan dengan Pak RT — Google Search" },
  { id: "02-cara-pak-rt-tahu", number: "02", title: "Kok Pak RT Bisa Tahu Rumah Kita?" },
  { id: "03-apa-itu-seo", number: "03", title: "Apa Itu SEO?" },
  { id: "04-cara-memilih-rekomendasi", number: "04", title: "Bagaimana Pak RT Memilih Rumah?" },
  { id: "05-pengalaman-pengunjung", number: "05", title: "Kalau Rumah Bagus, tapi Isinya Berantakan?" },
  { id: "06-langkah-optimasi", number: "06", title: "Cara Agar Website Muncul di Google: 5 Langkah" },
  { id: "07-mitos-halaman-pertama", number: "07", title: "Apakah SEO Menjamin Halaman Pertama?" },
  { id: "08-website-baru-butuh-waktu", number: "08", title: "Kenapa Website Baru Belum Ramai?" },
  { id: "kesimpulan", number: "★", title: "Kesimpulan & Solusi Bisnis" },
];

const TOC_GEO_ITEMS = [
  { id: "pendahuluan", number: "01", title: "Dunia Pencarian Sedang Berubah" },
  { id: "apa-itu-geo", number: "02", title: "Apa Itu GEO (Generative Engine Optimization)?" },
  { id: "mengapa-relevan", number: "03", title: "Mengapa GEO Relevan untuk Bisnis?" },
  { id: "analogi-pak-rt", number: "04", title: "Analogi Pak RT dan Tetangga Baru" },
  { id: "bagaimana-ai-menemukan", number: "05", title: "Bagaimana AI Menemukan Informasi Bisnis?" },
  { id: "enam-sumber", number: "06", title: "6 Sumber Informasi Bisnis untuk AI" },
  { id: "cara-optimasi-website", number: "07", title: "Cara Agar Website Dipahami AI (9 Langkah)" },
  { id: "seo-vs-geo", number: "08", title: "Tabel Perbandingan: SEO vs GEO" },
  { id: "mitos-fakta", number: "09", title: "Mitos & Fakta Seputar GEO" },
  { id: "checklist-umkm", number: "10", title: "Checklist Tindakan GEO untuk UMKM" },
  { id: "cara-mengukur", number: "11", title: "Cara Mengukur Hasil GEO" },
  { id: "bisnis-kecil-bisa", number: "12", title: "Peluang Realistis untuk Bisnis Kecil" },
  { id: "kesimpulan", number: "13", title: "Kesimpulan & Pesan Penutup" },
  { id: "daftar-sumber", number: "14", title: "Daftar Sumber Riset & Rujukan Resmi" },
];

const TOC_KENAPA_BISNIS_PERLU_WEBSITE_ITEMS = [
  { id: "pendahuluan", number: "00", title: "Pendahuluan — Tinggal di Kos-Kosan Komplek A" },
  { id: "01-media-sosial-ngekos", number: "01", title: "Media Sosial Seperti Ngekos di Kompleks" },
  { id: "02-website-toko-sendiri", number: "02", title: "Kenapa Bisnis Perlu Website? Seperti Toko Sendiri" },
  { id: "03-aktivitas-digital-2026", number: "03", title: "Aktivitas Digital Indonesia 2026" },
  { id: "04-google-dan-ai", number: "04", title: "Mencari di Google & Bertanya kepada AI" },
  { id: "05-website-dan-rekomendasi-ai", number: "05", title: "Apakah Otomatis Direkomendasikan AI?" },
  { id: "06-langkah-pemilik-bisnis", number: "06", title: "Apa yang Harus Dilakukan Pemilik Bisnis?" },
  { id: "07-website-sesuai-kebutuhan", number: "07", title: "Website Mengikuti Kebutuhan Bisnis" },
  { id: "kesimpulan", number: "★", title: "Kesimpulan & Fondasi Digital" },
  { id: "referensi", number: "★", title: "Referensi dan Sumber Data" },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const canonicalUrl = `https://pahamdigital.online/blog/${post.slug}/`;
  const imageUrl = `https://pahamdigital.online${post.coverImage || "/images/blog/domain-vs-hosting-cover.jpg"}`;
  
  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${post.title} — Paham Digital Agency\n${canonicalUrl}`
  )}`;

  const isArticle04 = post.slug === "apa-itu-geo";
  const isArticle03 = post.slug === "kenapa-bisnis-perlu-website";
  const isArticle02 = post.slug === "apa-itu-seo-website-sepi-pengunjung";

  const tocItems = isArticle04
    ? TOC_GEO_ITEMS
    : isArticle03
    ? TOC_KENAPA_BISNIS_PERLU_WEBSITE_ITEMS
    : isArticle02
    ? TOC_SEO_ITEMS
    : TOC_DOMAIN_HOSTING_ITEMS;

  const waConsultMessage = isArticle04
    ? "Halo Tim Paham Digital! Saya membaca artikel 'Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI' dan ingin berdiskusi mengenai optimasi website dan kehadiran bisnis saya untuk sistem AI."
    : isArticle03
    ? "Halo Tim Paham Digital! Saya membaca artikel 'Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI' dan ingin berdiskusi mengenai pembuatan website bisnis saya."
    : isArticle02
    ? "Halo Tim Paham Digital! Saya membaca artikel SEO 'Cara Agar Website Muncul di Google: Kenali Apa Itu SEO' dan ingin berdiskusi mengenai optimasi dan pembuatan website bisnis saya."
    : "Halo Tim Paham Digital! Saya membaca artikel 'Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya' di website dan ingin berdiskusi mengenai pembuatan website bisnis saya.";

  const waConsultUrl = buildWAUrl(waConsultMessage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://pahamdigital.online/#website",
          "name": "Paham Digital Agency",
          "url": "https://pahamdigital.online"
        },
        "headline": post.title,
        "name": post.seoTitle || post.title,
        "description": post.metaDescription || post.excerpt,
        "image": imageUrl,
        "datePublished": `${post.publishedAt}T08:00:00+07:00`,
        "dateModified": `${post.publishedAt}T08:00:00+07:00`,
        "inLanguage": "id-ID",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": post.authorRole,
          "url": "https://pahamdigital.online",
          "worksFor": {
            "@type": "Organization",
            "name": "Paham Digital Agency",
          },
        },
        "publisher": {
          "@type": "Organization",
          "name": "Paham Digital Agency",
          "url": "https://pahamdigital.online",
          "logo": {
            "@type": "ImageObject",
            "url": "https://pahamdigital.online/paham-logo-512.png",
          },
        },
        "keywords": [post.primaryKeyword, ...(post.additionalKeywords || [])].filter(Boolean).join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://pahamdigital.online/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://pahamdigital.online/blog/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  const figCaption = isArticle04
    ? "Ilustrasi visual: Diorama 3D miniatur komplek perumahan analogi Pak RT dan Tetangga Baru untuk memahami konsep Generative Engine Optimization (GEO) dan AI Search."
    : isArticle03
    ? "Ilustrasi visual: Lingkungan bisnis, media sosial (smartphone), pencarian (kaca pembesar), dan toko digital (layar komputer) sebagai gambaran pentingnya website untuk bisnis."
    : isArticle02
    ? "Ilustrasi visual: Analogi Pak RT (Google Search), warga yang bertanya (pengguna internet), petugas pendata (Googlebot), dan buku catatan warga (Google Index) untuk memahami cara kerja SEO."
    : "Ilustrasi visual: Analogi rumah untuk memahami peran Domain (alamat), Hosting (bangunan server), dan File Website (perabot & isi rumah).";

  return (
    <>
      {/* ── JSON-LD Structured Data ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Reading Progress Bar ──────────────────────────────────── */}
      <ReadingProgressBar />

      <article className="bg-[#0B0807] bg-grid-texture min-h-screen text-[#F7F1EB] font-outfit pt-28 sm:pt-32 pb-24">
        
        {/* ── 01. BREADCRUMB NAVIGATION ─────────────────────────────── */}
        <div className="container-site mb-6 sm:mb-8 sr-auto" style={{ "--sr-duration": "850ms" } as React.CSSProperties}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#A99A90]">
            <Link href="/" className="hover:text-[#F45B1A] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-[#F45B1A] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#F7F1EB] font-medium truncate max-w-[200px] sm:max-w-none">
              {post.articleNumber ? `Artikel ${post.articleNumber}: ${post.title}` : post.title}
            </span>
          </nav>
        </div>

        {/* ── 02. ARTICLE HEADER ────────────────────────────────────── */}
        <header className="container-site mb-10 sm:mb-14 sr-auto" style={{ "--sr-duration": "900ms", "--sr-delay": "100ms" } as React.CSSProperties}>
          <div className="max-w-4xl">
            {/* Category & Series Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17100D] border border-white/10 text-xs text-[#A99A90] uppercase tracking-wider font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45B1A]" />
                <span>{post.category}</span>
              </span>
              {post.articleNumber && (
                <span className="px-3 py-1 rounded-full bg-[#F45B1A]/15 border border-[#F45B1A]/30 text-xs font-geom text-[#F45B1A] font-bold uppercase tracking-wider">
                  ARTIKEL {post.articleNumber}
                </span>
              )}
            </div>

            {/* Title (H1 in Geom) */}
            {isArticle03 ? (
              <h1 className="font-geom font-bold text-[30px] sm:text-[42px] lg:text-[50px] text-[#F7F1EB] leading-[1.14] tracking-tight mb-5">
                Bisnismu Ada di Media Sosial, Tapi{" "}
                <span className="text-[#F45B1A]">
                  Kenapa Bisnis Perlu Website?
                </span>
              </h1>
            ) : isArticle02 ? (
              <h1 className="font-geom font-bold text-[30px] sm:text-[42px] lg:text-[52px] text-[#F7F1EB] leading-[1.14] tracking-tight mb-5">
                Cara Agar Website Muncul di Google:{" "}
                <span className="text-[#F45B1A]">
                  Kenali Apa Itu SEO!
                </span>
              </h1>
            ) : (
              <h1 className="font-geom font-bold text-[32px] sm:text-[44px] lg:text-[54px] text-[#F7F1EB] leading-[1.12] tracking-tight mb-5">
                Apa Beda Hosting dan Domain?{" "}
                <span className="text-[#F45B1A]">
                  Kenali Fungsi &amp; Perbedaannya
                </span>
              </h1>
            )}

            {/* Subtitle */}
            <p className="font-outfit text-base sm:text-lg lg:text-xl text-[#A99A90] leading-relaxed mb-6 max-w-3xl">
              {post.subtitle || post.excerpt}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#A99A90] pt-5 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F45B1A]/20 border border-[#F45B1A]/30 flex items-center justify-center text-[#F45B1A]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#F7F1EB] font-bold">{post.author}</span>
                  <span className="text-[#A99A90] text-xs block sm:inline sm:ml-1">
                    ({post.authorRole})
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline">·</span>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#F45B1A]" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <span>·</span>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F45B1A]" />
                <span>{post.readingTime} menit baca</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── 03. EDITORIAL COVER ILLUSTRATION (16:9) ───────────────── */}
        <div className="container-site mb-12 sm:mb-16 sr-auto" style={{ "--sr-duration": "900ms", "--sr-delay": "150ms" } as React.CSSProperties}>
          <div className="max-w-5xl mx-auto">
            <figure className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/12 bg-[#0B0807] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <img
                src={post.coverImage || "/images/blog/domain-vs-hosting-cover.jpg"}
                alt={post.coverAlt || post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </figure>
            <figcaption className="mt-3 text-center text-xs text-[#A99A90] font-outfit">
              {figCaption}
            </figcaption>
          </div>
        </div>

        {/* ── 04. EDITORIAL BODY & SIDEBAR CONTAINER ────────────────── */}
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            
            {/* ── Left Column: Editorial Content (Max ~780px) ───────── */}
            <div className="lg:col-span-8">
              {isArticle04 ? (
                <ArticleApaItuGeo waShareUrl={waShareUrl} />
              ) : isArticle03 ? (
                <ArticleKenapaBisnisPerluWebsite waShareUrl={waShareUrl} />
              ) : isArticle02 ? (
                <ArticleSeoWebsiteSepi waShareUrl={waShareUrl} />
              ) : (
                <ArticleDomainVsHosting waShareUrl={waShareUrl} />
              )}
            </div>

            {/* ── Right Column: Sticky Sidebar (Desktop Only) ──────── */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              
              {/* Table of Contents Component */}
              <TableOfContents items={tocItems} />

              {/* Branded Consultation Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#17100D] to-[#120C09] border border-[#F45B1A]/35 shadow-xl space-y-4 sr-auto" style={{ "--sr-duration": "900ms", "--sr-delay": "200ms" } as React.CSSProperties}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F45B1A]/10 border border-[#F45B1A]/20 text-xs font-geom text-[#F45B1A] font-semibold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>KONSULTASI GRATIS</span>
                </div>

                <h3 className="font-geom font-bold text-xl text-[#F7F1EB] leading-snug">
                  {isArticle04
                    ? "Mau Bisnismu Siap Dikenal & Direkomendasikan AI?"
                    : isArticle03
                    ? "Mau Punya Rumah Digital Sendiri untuk Bisnismu?"
                    : isArticle02
                    ? "Website Bisnismu Masih Sepi Pengunjung?"
                    : "Mau Membangun Website untuk Bisnismu?"}
                </h3>

                <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
                  {isArticle04
                    ? "Paham Digital Agency membantu bisnis membangun website profesional berarsitektur semantik yang siap dipahami Google dan sistem pencarian AI generasi baru."
                    : isArticle03
                    ? "Paham Digital Agency membantu UMKM membangun website profesional yang siap ditemukan di Google dan sistem pencarian AI, bukan sekadar ramai saat viral."
                    : isArticle02
                    ? "Paham Digital Agency membantu bisnismu membangun website profesional yang cepat, ramah mobile, dan terstruktur rapi untuk mempermudah Google Search mengenali bisnis Anda."
                    : "Paham Digital Agency siap membantu bisnis membangun kehadiran digital melalui website profesional, web application, AI Customer Service, dan automasi bisnis."}
                </p>

                <p className="font-geom font-bold text-xs uppercase tracking-wider text-[#F45B1A]">
                  Paham Bisnisnya, Otomatiskan Sistemnya.
                </p>

                <a
                  href={waConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#F45B1A] hover:bg-[#FF6A2A] text-white font-outfit font-bold text-sm transition-all shadow-lg shadow-[#F45B1A]/30 active:scale-95"
                >
                  <span>Diskusikan Proyek</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </aside>

          </div>
        </div>

      </article>
    </>
  );
}
