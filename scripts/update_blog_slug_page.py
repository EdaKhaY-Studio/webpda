with open('frontend/src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add import
if 'import ArticleApaItuGeo' not in text:
    text = text.replace(
        'import ArticleKenapaBisnisPerluWebsite from "@/components/blog/ArticleKenapaBisnisPerluWebsite";',
        'import ArticleKenapaBisnisPerluWebsite from "@/components/blog/ArticleKenapaBisnisPerluWebsite";\nimport ArticleApaItuGeo from "@/components/blog/ArticleApaItuGeo";'
    )

# 2. Add TOC_GEO_ITEMS
toc_geo = '''const TOC_GEO_ITEMS = [
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
'''

if 'const TOC_GEO_ITEMS' not in text:
    target = 'const TOC_KENAPA_BISNIS_PERLU_WEBSITE_ITEMS = ['
    text = text.replace(target, toc_geo + '\n' + target)

# 3. Update isArticle check
old_check = '''  const isArticle03 = post.slug === "kenapa-bisnis-perlu-website";
  const isArticle02 = post.slug === "apa-itu-seo-website-sepi-pengunjung";

  const tocItems = isArticle03
    ? TOC_KENAPA_BISNIS_PERLU_WEBSITE_ITEMS
    : isArticle02
    ? TOC_SEO_ITEMS
    : TOC_DOMAIN_HOSTING_ITEMS;

  const waConsultMessage = isArticle03
    ? "Halo Tim Paham Digital! Saya membaca artikel 'Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI' dan ingin berdiskusi mengenai pembuatan website bisnis saya."
    : isArticle02
    ? "Halo Tim Paham Digital! Saya membaca artikel SEO 'Cara Agar Website Muncul di Google: Kenali Apa Itu SEO' dan ingin berdiskusi mengenai optimasi dan pembuatan website bisnis saya."
    : "Halo Tim Paham Digital! Saya membaca artikel 'Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya' di website dan ingin berdiskusi mengenai pembuatan website bisnis saya.";'''

new_check = '''  const isArticle04 = post.slug === "apa-itu-geo";
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
    : "Halo Tim Paham Digital! Saya membaca artikel 'Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya' di website dan ingin berdiskusi mengenai pembuatan website bisnis saya.";'''

text = text.replace(old_check, new_check)

# 4. Update figCaption
old_fig = '''  const figCaption = isArticle03
    ? "Ilustrasi visual: Lingkungan bisnis, media sosial (smartphone), pencarian (kaca pembesar), dan toko digital (layar komputer) sebagai gambaran pentingnya website untuk bisnis."'''

new_fig = '''  const figCaption = isArticle04
    ? "Ilustrasi visual: Diorama 3D miniatur komplek perumahan analogi Pak RT dan Tetangga Baru untuk memahami konsep Generative Engine Optimization (GEO) dan AI Search."
    : isArticle03
    ? "Ilustrasi visual: Lingkungan bisnis, media sosial (smartphone), pencarian (kaca pembesar), dan toko digital (layar komputer) sebagai gambaran pentingnya website untuk bisnis."'''

text = text.replace(old_fig, new_fig)

# 5. Update render
old_render = '''            {/* ── Left Column: Editorial Content (Max ~780px) ───────── */}
            <div className="lg:col-span-8">
              {isArticle03 ? (
                <ArticleKenapaBisnisPerluWebsite waShareUrl={waShareUrl} />
              ) : isArticle02 ? (
                <ArticleSeoWebsiteSepi waShareUrl={waShareUrl} />
              ) : (
                <ArticleDomainVsHosting waShareUrl={waShareUrl} />
              )}
            </div>'''

new_render = '''            {/* ── Left Column: Editorial Content (Max ~780px) ───────── */}
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
            </div>'''

text = text.replace(old_render, new_render)

# 6. Update sidebar title & desc
old_side_title = '''                <h3 className="font-geom font-bold text-xl text-[#F7F1EB] leading-snug">
                  {isArticle03
                    ? "Mau Punya Rumah Digital Sendiri untuk Bisnismu?"'''

new_side_title = '''                <h3 className="font-geom font-bold text-xl text-[#F7F1EB] leading-snug">
                  {isArticle04
                    ? "Mau Bisnismu Siap Dikenal & Direkomendasikan AI?"
                    : isArticle03
                    ? "Mau Punya Rumah Digital Sendiri untuk Bisnismu?"'''

text = text.replace(old_side_title, new_side_title)

old_side_desc = '''                <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
                  {isArticle03
                    ? "Paham Digital Agency membantu UMKM membangun website profesional yang siap ditemukan di Google dan sistem pencarian AI, bukan sekadar ramai saat viral."'''

new_side_desc = '''                <p className="font-outfit text-xs sm:text-sm text-[#A99A90] leading-relaxed">
                  {isArticle04
                    ? "Paham Digital Agency membantu bisnis membangun website profesional berarsitektur semantik yang siap dipahami Google dan sistem pencarian AI generasi baru."
                    : isArticle03
                    ? "Paham Digital Agency membantu UMKM membangun website profesional yang siap ditemukan di Google dan sistem pencarian AI, bukan sekadar ramai saat viral."'''

text = text.replace(old_side_desc, new_side_desc)

with open('frontend/src/app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated frontend/src/app/blog/[slug]/page.tsx")
