with open('frontend/src/lib/site-config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_post = '''  {
    id: "apa-itu-geo",
    articleNumber: "04",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI",
    h1: "Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI",
    subtitle:
      "Pahami apa itu GEO (Generative Engine Optimization), cara kerja sistem AI menemukan informasi bisnis, serta panduan praktis agar website mudah dibaca dan direkomendasikan AI.",
    slug: "apa-itu-geo",
    category: "Teknologi Digital & AI",
    excerpt:
      "Dunia pencarian sedang berubah dari daftar tautan menjadi jawaban AI. Pahami apa itu GEO, cara kerja AI mengenali bisnis melalui analogi Pak RT, dan langkah praktis agar website bisnismu mudah dipahami sistem AI.",
    publishedAt: "2026-11-13",
    readingTime: 11,
    coverImage: "/images/blog/apa-itu-geo-cover.webp",
    coverAlt:
      "Ilustrasi diorama 3D miniatur komplek perumahan analogi Pak RT dan Tetangga Baru untuk memahami konsep Generative Engine Optimization (GEO) dan AI Search.",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: true,
    seoTitle: "Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI",
    primaryKeyword: "apa itu GEO",
    additionalKeywords: [
      "Generative Engine Optimization",
      "cara agar bisnis direkomendasikan AI",
      "cara agar bisnis muncul di ChatGPT",
      "optimasi website untuk AI",
      "GEO untuk bisnis",
      "perbedaan SEO dan GEO",
      "cara AI menemukan informasi bisnis",
      "website mudah dibaca AI",
      "strategi GEO untuk UMKM",
    ],
    metaDescription:
      "Pahami apa itu GEO (Generative Engine Optimization), cara kerja sistem AI menemukan informasi bisnis, serta panduan praktis agar website mudah dibaca dan direkomendasikan AI.",
    ogTitle: "Apa Itu GEO? Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI",
    ogDescription:
      "Pahami apa itu GEO (Generative Engine Optimization), cara AI menemukan informasi bisnis, serta panduan praktis membangun website yang mudah dipahami AI.",
  },
'''

if 'id: "apa-itu-geo"' not in content:
    target = 'export const BLOG_POSTS = [\n'
    if target in content:
        content = content.replace(target, target + new_post)
        with open('frontend/src/lib/site-config.ts', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully added apa-itu-geo to BLOG_POSTS in site-config.ts")
    else:
        print("Error: target not found in site-config.ts")
else:
    print("Post already exists in site-config.ts")
