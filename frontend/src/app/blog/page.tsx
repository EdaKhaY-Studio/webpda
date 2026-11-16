import { BLOG_POSTS } from "@/lib/site-config";
import type { Metadata } from "next";
import { BlogArchiveView } from "@/components/blog/BlogArchiveView";

export const metadata: Metadata = {
  title: "Blog & Edukasi Digital Bisnis — Paham Digital Agency Aceh",
  description:
    "Artikel edukasi seputar pembuatan website, SEO, Google Search, AI Customer Service, dan strategi digital untuk bisnis & UMKM di Aceh.",
  keywords: [
    "blog digital agency Aceh",
    "edukasi website bisnis",
    "tips SEO Google",
    "AI Customer Service bisnis",
    "panduan UMKM digital",
    "belajar SEO website",
  ],
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog & Edukasi Digital Bisnis — Paham Digital Agency Aceh",
    description:
      "Artikel edukasi seputar pembuatan website, SEO, Google Search, AI Customer Service, dan strategi digital untuk bisnis & UMKM di Aceh.",
    url: "https://pahamdigital.online/blog/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Edukasi Digital Bisnis — Paham Digital Agency Aceh",
    description:
      "Artikel edukasi seputar pembuatan website, SEO, Google Search, AI Customer Service, dan strategi digital untuk bisnis & UMKM di Aceh.",
  },
};

export default function BlogPage() {
  // Sort articles by publication date, newest first (Standard PDA Rule)
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="bg-[#0B0807] bg-grid-texture min-h-screen text-[#F7F1EB] font-outfit pt-32 pb-24">
      {/* Permanent 4 x 3 Grid System with Search, Category Filter & Pagination */}
      <BlogArchiveView initialPosts={sortedPosts} />
    </main>
  );
}
