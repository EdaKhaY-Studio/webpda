import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, buildWAUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Paham Digital Agency`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);
  const articleContent = getArticleContent(post.id);
  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(`${post.title} — Paham Digital Agency\nhttps://pahamdigital.online/blog/${post.slug}`)}`;

  return (
    <div className="bg-[#0B0807] bg-grid-texture min-h-screen text-[#F7F1EB] font-body pt-32 pb-24">
      
      {/* Back button container */}
      <div className="container-site mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#A99A90] hover:text-[#F45B1A] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Indeks Blog</span>
        </Link>
      </div>

      {/* Article Header Container */}
      <div className="container-site mb-12">
        <div className="max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#F45B1A] text-white text-xs font-bold uppercase tracking-wider font-display mb-4">
            {post.category}
          </span>

          <h1 className="font-display font-extrabold text-[32px] sm:text-[46px] lg:text-[54px] text-[#F7F1EB] leading-[1.1] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#A99A90] pb-8 border-b border-white/10">
            <span>Oleh: <strong className="text-[#F7F1EB]">{post.author}</strong></span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingTime} menit baca</span>
          </div>
        </div>
      </div>

      {/* Main Reading Area & Sidebar */}
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Article Main Text (8 cols) */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-[#A99A90] space-y-6">
              <p className="text-lg sm:text-xl font-medium text-[#F7F1EB] leading-relaxed border-l-2 border-[#F45B1A] pl-5 italic">
                {post.excerpt}
              </p>
              <div
                className="article-rich-body space-y-6 text-[#A99A90]"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            </div>

            {/* Share via WhatsApp */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#F7F1EB]">
                Bagikan artikel ini ke rekan bisnis Anda:
              </span>
              <a
                href={waShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold transition-all shadow-md shadow-[#16A34A]/30"
              >
                <MessageCircle size={16} />
                <span>Bagikan via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Consultation Card */}
            <div className="p-7 rounded-3xl bg-[#17100D] border border-white/12 shadow-xl">
              <div className="eyebrow-label mb-3">
                <span className="eyebrow-dot" />
                <span>KONSULTASI GRATIS</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F1EB] mb-3">
                Ingin Menerapkan Solusi Serupa?
              </h3>
              <p className="text-sm text-[#A99A90] leading-relaxed mb-6">
                Tim Paham Digital siap membantu merancang website, AI, atau automasi bisnis yang pas untuk operasional usaha Anda.
              </p>
              <a
                href={buildWAUrl(`Halo Paham Digital! Saya membaca artikel *${post.title}* dan ingin konsultasi solusi untuk bisnis saya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-orange w-full text-sm py-3"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="p-7 rounded-3xl bg-[#17100D] border border-white/10">
                <h4 className="font-display font-bold text-sm text-[#F45B1A] uppercase tracking-wider mb-4">
                  Artikel Rekomendasi
                </h4>
                <div className="space-y-4">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/blog/${rel.slug}`}
                      className="block group no-underline"
                    >
                      <h5 className="font-display font-bold text-sm text-[#F7F1EB] group-hover:text-[#F45B1A] transition-colors leading-snug mb-1">
                        {rel.title}
                      </h5>
                      <span className="text-[11px] text-[#A99A90]">
                        {rel.readingTime} menit baca
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}

function getArticleContent(postId: string): string {
  const contents: Record<string, string> = {
    "mengapa-umkm-butuh-website": `
      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">1. Kredibilitas Instan di Mata Pelanggan Baru</h3>
      <p>Ketika calon pelanggan mendengar tentang usaha Anda, hal pertama yang mereka lakukan adalah mencari nama bisnis Anda di Google. Jika usaha Anda memiliki website profesional, rasa percaya langsung terbentuk. Tanpa website, calon pelanggan seringkali ragu dan beralih ke kompetitor yang tampak lebih mapan.</p>
      
      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">2. Bekerja Nonstop 24 Jam Tanpa Biaya Lembur</h3>
      <p>Website adalah kantor digital Anda yang tidak pernah tutup. Pelanggan dapat mengeksplorasi katalog produk, mengecek daftar harga, dan mempelajari portofolio Anda bahkan di tengah malam saat Anda sedang beristirahat.</p>

      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">3. Landasan Kuat untuk AI dan Automasi</h3>
      <p>Di era AI saat ini, website adalah pusat data yang dapat dihubungkan dengan AI Customer Service otomatis dan sistem pesanan WhatsApp. Anda tidak hanya memiliki website, tetapi ekosistem penjualan yang terautomasi.</p>
    `,
    "ai-customer-service-untuk-umkm": `
      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">Kecepatan Balas Adalah Kunci Konversi</h3>
      <p>Studi menunjukkan bahwa calon pembeli yang menerima respons dalam waktu kurang dari 5 menit memiliki tingkat konversi 4x lebih tinggi dibandingkan mereka yang harus menunggu berjam-jam. Asisten AI Paham Digital merespons dalam 3 detik dengan nada bahasa ramah khas Indonesia.</p>

      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">Dilatih dengan Data Bisnis Anda Sendiri</h3>
      <p>AI Customer Service tidak memberikan jawaban acak. Kami melatihnya khusus dengan daftar menu, spesifikasi produk, ketentuan garansi, dan jadwal buka usaha Anda. Ketika ada pesanan serius, AI langsung mengarahkannya ke kasir manusia dengan format rapi.</p>
    `,
    "panduan-seo-lokal-aceh": `
      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">Mengapa SEO Lokal Sangat Menentukan di Aceh Barat</h3>
      <p>Warga Meulaboh dan Aceh Barat kini mengandalkan smartphone mereka untuk mencari jasa terdekat: "bengkel terbaik Meulaboh", "toko oleh-oleh Aceh Barat", atau "klinik gigi terdekat". Usaha yang dioptimasi dengan SEO lokal akan langsung muncul di 3 besar Google Maps.</p>

      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">Optimasi Google Bisnis & Mesin Pencari AI</h3>
      <p>Selain Google Search, kini mesin pencari AI seperti ChatGPT, Perplexity, dan Gemini merekomendasikan bisnis yang memiliki informasi digital yang terstruktur dan terverifikasi. Kami memastikan brand Anda siap untuk era pencarian masa depan.</p>
    `,
    "automasi-bisnis-bukan-sekedar-tren": `
      <h3 class="font-display font-bold text-2xl text-[#F7F1EB] mt-8 mb-4">Hemat Puluhan Jam Waktu Operasional Setiap Minggu</h3>
      <p>Tugas-tugas berulang seperti mengirim rekap nota, update status order, dan mengirim notifikasi WhatsApp kepada pelanggan dapat dijalankan 100% otomatis. Tim Anda bisa fokus pada pengembangan produk dan pelayanan pelanggan tingkat lanjut.</p>
    `,
  };

  return (
    contents[postId] ||
    `<p>Artikel ini menyajikan panduan mendalam seputar transformasi digital untuk bisnis dan UMKM.</p>`
  );
}
