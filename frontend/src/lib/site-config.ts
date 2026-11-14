// ============================================================
// SITE CONFIGURATION — Centralized data for all site content
// ============================================================

export const SITE_CONFIG = {
  name: "Paham Digital Agency",
  tagline: "Paham Bisnisnya, Otomatiskan Sistemnya.",
  shortDescription:
    "Kami membantu bisnis membangun kehadiran digital yang lebih profesional melalui website, web application, AI, dan automasi bisnis.",
  location: "Meulaboh, Aceh Barat, Aceh",
  email: "halo@pahamdigital.id",
  whatsapp: {
    number: "6282311307556",
    display: "082311307556",
    defaultMessage:
      "Halo Tim Paham Digital Agency! Saya ingin konsultasi solusi digital untuk bisnis saya.",
  },
  social: {
    instagram: "https://www.instagram.com/pahamdigitall.id/",
    tiktok: "https://www.tiktok.com/@pahamdigitall.id",
    youtube: "",
    linkedin: "",
  },
  seo: {
    title: "Paham Digital Agency Aceh | Website, AI & Automasi Bisnis",
    description:
      "Paham Digital Agency membantu bisnis dan UMKM di Aceh melalui jasa pembuatan website profesional, Web Application, AI Customer Service humanis, dan automasi bisnis.",
    keywords: [
      "Paham Digital Agency Aceh",
      "Paham Digital Agency di Aceh",
      "Digital Agency Aceh",
      "Jasa digital agency Aceh",
      "Agency website dan AI di Aceh",
      "jasa pembuatan website",
      "jasa pembuatan website profesional",
      "jasa website untuk UMKM",
      "jasa pembuatan website bisnis",
      "jasa website perusahaan",
      "jasa web development Aceh",
      "jasa pembuatan website di Aceh",
      "website profesional untuk bisnis lokal",
      "AI Customer Service humanis di Aceh",
      "AI Customer Service human-centered",
      "human-centered AI",
      "AI customer service untuk bisnis",
      "AI Customer Service WhatsApp",
      "AI pelayanan pelanggan yang humanis",
      "chatbot bisnis dengan pendekatan humanis",
      "Web Application Development",
      "automasi bisnis",
      "SEO Aceh",
      "GEO Optimization",
      "Digital Agency Aceh Barat",
      "Jasa Website Meulaboh",
    ],
  },
};

export const WHATSAPP_MESSAGES = {
  general: SITE_CONFIG.whatsapp.defaultMessage,
  project: "Halo Tim Paham Digital Agency! Saya ingin mendiskusikan sebuah proyek digital untuk bisnis saya di Aceh.",
  website: "Halo Tim Paham Digital Agency! Saya tertarik dengan jasa pembuatan website profesional untuk bisnis saya.",
  webApp: "Halo Tim Paham Digital Agency! Saya ingin berdiskusi tentang pembuatan web application untuk bisnis saya.",
  aiService: "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan AI Customer Service humanis & AI Agents WhatsApp.",
  automation: "Halo Tim Paham Digital Agency! Saya ingin tahu lebih lanjut tentang solusi automasi bisnis.",
  marketing: "Halo Tim Paham Digital Agency! Saya ingin konsultasi Digital Marketing, SEO & GEO untuk bisnis saya.",
};

export function buildWAUrl(message?: string): string {
  const msg = message || SITE_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami/" },
  { label: "Layanan Kami", href: "/layanan/" },
  { label: "Paket & Harga", href: "/layanan/harga-paket/" },
  { label: "Blog", href: "/blog/" },
];

export const SERVICES = [
  {
    id: "website",
    title: "Website Development",
    shortTitle: "Website",
    category: "Fondasi Digital",
    href: "/layanan/website-development/",
    description:
      "Jasa pembuatan website profesional, responsif, dan cepat untuk memperkuat kehadiran digital bisnis dan UMKM di Aceh. Dari landing page hingga company profile modern.",
    features: [
      "Desain custom sesuai identitas brand",
      "Mobile-first & responsif di semua perangkat",
      "Loading cepat & SEO-ready dari awal",
      "Tombol WhatsApp & integrasi Google Maps",
    ],
    waMessage: WHATSAPP_MESSAGES.website,
    icon: "Monitor",
    accent: "#F45B1A",
  },
  {
    id: "webapp",
    title: "Web Application Development",
    shortTitle: "Web App",
    category: "Solusi Bisnis Digital",
    href: "/layanan/web-application/",
    description:
      "Aplikasi web custom yang membantu bisnis mengelola proses, melayani pelanggan, dan mengoperasikan sistem secara lebih efisien.",
    features: [
      "Sistem manajemen & dashboard bisnis",
      "Portal pelanggan & booking system",
      "Integrasi database & API third-party",
      "Autentikasi & manajemen pengguna",
    ],
    waMessage: WHATSAPP_MESSAGES.webApp,
    icon: "AppWindow",
    accent: "#F45B1A",
  },
  {
    id: "ai",
    title: "AI Customer Service Humanis & AI Agents",
    shortTitle: "AI Humanis",
    category: "Kecerdasan Buatan",
    href: "/layanan/ai-customer-service/",
    description:
      "Asisten AI Customer Service humanis terintegrasi WhatsApp yang melayani pertanyaan pelanggan, menjawab chat secara natural, dan membantu operasional bisnis 24 jam penuh.",
    features: [
      "Chatbot AI dikonfigurasi knowledge base bisnis Anda",
      "Respon natural mengikuti karakter brand",
      "Integrasi WhatsApp resmi via n8n & WAHA",
      "Handover cerdas ke admin manusia saat diperlukan",
    ],
    waMessage: WHATSAPP_MESSAGES.aiService,
    icon: "MessagesSquare",
    accent: "#F45B1A",
  },
  {
    id: "automation",
    title: "Business Automation",
    shortTitle: "Automasi",
    category: "Efisiensi Operasional",
    href: "/layanan/ai-customer-service/",
    description:
      "Otomasi alur kerja bisnis yang berulang agar tim Anda bisa fokus pada hal-hal yang benar-benar penting dan bernilai tinggi.",
    features: [
      "Automasi laporan & notifikasi otomatis",
      "Integrasi antar aplikasi bisnis",
      "Workflow & approval system digital",
      "Scheduled tasks & background jobs",
    ],
    waMessage: WHATSAPP_MESSAGES.automation,
    icon: "Workflow",
    accent: "#F45B1A",
  },
  {
    id: "seo",
    title: "Digital Marketing & SEO",
    shortTitle: "Marketing",
    category: "Pertumbuhan Digital",
    href: "/layanan/seo-geo/",
    description:
      "Strategi digital marketing dan optimasi SEO untuk meningkatkan visibilitas bisnis Anda di Google dan mesin pencari AI.",
    features: [
      "Optimasi Google Business Profile & Maps",
      "SEO on-page & technical SEO",
      "Content strategy & digital branding",
      "Analitik & laporan performa bulanan",
    ],
    waMessage: WHATSAPP_MESSAGES.marketing,
    icon: "SearchCheck",
    accent: "#F45B1A",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Kami mulai dengan memahami bisnis, tantangan, dan tujuan Anda secara mendalam sebelum mengusulkan solusi apapun.",
  },
  {
    number: "02",
    title: "Perencanaan",
    description:
      "Mendefinisikan kebutuhan, menyusun strategi, dan merancang arsitektur solusi yang paling tepat untuk konteks bisnis Anda.",
  },
  {
    number: "03",
    title: "Pengembangan",
    description:
      "Mendesain dan membangun solusi digital yang disepakati dengan standar kualitas yang tinggi dan komunikasi yang transparan.",
  },
  {
    number: "04",
    title: "Peluncuran & Pendampingan",
    description:
      "Meluncurkan solusi dan memberikan pendampingan sesuai scope layanan yang disepakati agar bisnis Anda berjalan lancar.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "selempang-aceh-barat",
    title: "Selempang Wisuda Aceh Barat",
    client: "Selempang Meulaboh Official",
    category: "Website & Katalog Digital",
    industry: "Souvenir & Produk Lokal",
    challenge:
      "Pemilik usaha kewalahan mengirim puluhan foto produk berulang kali ke setiap calon pembeli via chat, membuat proses penjualan tidak efisien.",
    solution:
      "Website katalog digital interaktif dengan filter produk, informasi lengkap per item, dan tombol pesan yang langsung mengirim format order ke WhatsApp admin.",
    services: ["Website Development", "WhatsApp Integration"],
    imageUrl: "/images/selempang-aceh-barat-hero.png",
    imageAlt: "Website katalog Selempang Wisuda Aceh Barat",
    year: "2026",
  },
];

export const BLOG_CATEGORIES = [
  "Semua",
  "Teknologi AI",
  "AI & Technology",
  "SEO & Digital Marketing",
  "Website & Technology",
  "AI & Automasi",
  "Bisnis Digital",
];

export const BLOG_POSTS = [
  {
    id: "apa-itu-gemini-4-hydrogen",
    articleNumber: "06",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title:
      "Gemini 4 Hydrogen Itu Apa? Baru 2 Hari Setelah Carbon, Google Hadirkan AI yang Lebih Gesit!",
    h1: "Gemini 4 Hydrogen Itu Apa? Baru 2 Hari Setelah Carbon, Google Hadirkan AI yang Lebih Gesit!",
    subtitle:
      "Google baru saja memperkenalkan Gemini 4 Hydrogen, model AI yang berfokus pada kecepatan dan efisiensi untuk coding sehari-hari serta agentic workflow. Kenali hubungan Hydrogen, Carbon, dan Argon, teknologi Orchestrator, benchmark, demonstrasi game 3D, hingga biaya API-nya.",
    slug: "apa-itu-gemini-4-hydrogen",
    category: "Teknologi AI",
    excerpt:
      "Google baru saja memperkenalkan Gemini 4 Hydrogen, model AI yang berfokus pada kecepatan dan efisiensi untuk coding sehari-hari serta agentic workflow. Kenali hubungan Hydrogen, Carbon, dan Argon, teknologi Orchestrator, benchmark, demonstrasi game 3D, hingga biaya API-nya.",
    publishedAt: "2026-11-14",
    readingTime: 22,
    coverImage: "/images/blog/apa-itu-gemini-4-hydrogen-cover.webp",
    coverAlt:
      "Ilustrasi Gemini 4 Hydrogen, Carbon, dan Argon sebagai tiga model AI dengan peran berbeda dalam workflow coding dan agentic.",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: true,
    seoTitle: "Gemini 4 Hydrogen Itu Apa? AI Google untuk Coding Lebih Gesit",
    primaryKeyword: "apa itu Gemini 4 Hydrogen",
    additionalKeywords: [
      "Gemini 4 Hydrogen Google",
      "Gemini 4 Hydrogen vs Carbon",
      "Gemini 4 Hydrogen coding",
      "benchmark Gemini 4 Hydrogen",
      "harga API Gemini 4 Hydrogen",
      "model AI untuk coding",
      "Gemini 4 Argon Hydrogen Carbon",
      "Google AI untuk programmer",
      "agentic workflow Gemini",
    ],
    metaDescription:
      "Google baru saja memperkenalkan Gemini 4 Hydrogen, model AI yang berfokus pada kecepatan dan efisiensi untuk coding sehari-hari serta agentic workflow. Kenali hubungan Hydrogen, Carbon, dan Argon, teknologi Orchestrator, benchmark, demonstrasi game 3D, hingga biaya API-nya.",
    ogTitle:
      "Gemini 4 Hydrogen Itu Apa? Baru 2 Hari Setelah Carbon, Google Hadirkan AI yang Lebih Gesit!",
    ogDescription:
      "Pelajari Gemini 4 Hydrogen dari Google DeepMind: AI yang 2.5x lebih cepat dari Carbon untuk coding sehari-hari, agentic workflow, dan orchestrator multi-agent. Dilengkapi benchmark lengkap, perbandingan harga API, dan contoh prompt praktis.",
  },
  {
    id: "apa-itu-gemini-4-carbon",
    articleNumber: "05",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title:
      "Gemini 4 Carbon: AI untuk Proyek Kompleks, Bukan Sekadar Chatbot",
    h1: "Gemini 4 Carbon: AI untuk Proyek Kompleks, Bukan Sekadar Chatbot",
    subtitle:
      "Mengenal perbedaan Gemini 4 Argon dan Carbon, serta bagaimana AI generasi baru menangani coding, agentic workflow, cybersecurity, dan proyek yang membutuhkan penalaran mendalam.",
    slug: "apa-itu-gemini-4-carbon",
    category: "AI & Technology",
    excerpt:
      "Mengenal perbedaan Gemini 4 Argon dan Carbon, serta bagaimana AI generasi baru menangani coding, agentic workflow, cybersecurity, dan proyek yang membutuhkan penalaran mendalam.",
    publishedAt: "2026-11-14",
    readingTime: 27,
    coverImage: "/images/blog/gemini-4-carbon-article-05.png",
    coverAlt:
      "Poster edukasi Paham Digital Agency tentang Gemini 4 Argon dan Gemini 4 Carbon untuk coding, cybersecurity, agentic workflow, dan pengembangan 3D.",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: false,
    seoTitle: "Gemini 4 Carbon: AI untuk Proyek Kompleks | Paham Digital",
    primaryKeyword: "Gemini 4 Carbon",
    additionalKeywords: [
      "Gemini 4 Carbon",
      "apa itu Gemini 4 Carbon",
      "Gemini 4 Argon dan Carbon",
      "cara menggunakan Gemini 4 Carbon",
      "Gemini 4 Carbon Google AI Ultra",
      "perbedaan Google AI Pro dan Ultra",
      "Gemini 4 Carbon untuk coding",
      "Gemini 4 Carbon API",
      "Google Antigravity AI",
      "Gemini 4 Carbon vs Gemini 4 Argon",
      "AI untuk membuat game 3D",
    ],
    metaDescription:
      "Kenali Gemini 4 Carbon, perbedaannya dengan Argon, serta kemampuannya dalam coding, agentic workflow, cybersecurity dan proyek kompleks.",
    ogTitle: "Gemini 4 Carbon: AI untuk Proyek Kompleks | Paham Digital",
    ogDescription:
      "Kenali Gemini 4 Carbon, perbedaannya dengan Argon, serta kemampuannya dalam coding, agentic workflow, cybersecurity dan proyek kompleks.",
  },
  {
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
  {
    id: "kenapa-bisnis-perlu-website",
    articleNumber: "03",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI",
    h1: "Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI",
    subtitle:
      "Kenapa bisnis perlu website meskipun sudah punya media sosial? Kenali manfaat website untuk UMKM, Google Search, dan AI melalui analogi sederhana.",
    slug: "kenapa-bisnis-perlu-website",
    category: "Website & Technology",
    excerpt:
      "Kenapa bisnis perlu website meskipun sudah punya media sosial? Kenali manfaat website untuk UMKM, Google Search, dan AI melalui analogi sederhana.",
    publishedAt: "2026-11-08",
    readingTime: 10,
    coverImage: "/images/blog/kenapa-bisnis-perlu-website-cover.webp",
    coverAlt:
      "Ilustrasi lingkungan bisnis, media sosial, dan toko digital sebagai gambaran pentingnya website untuk bisnis.",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: true,
    seoTitle: "Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI",
    primaryKeyword: "kenapa bisnis perlu website",
    additionalKeywords: [
      "manfaat website untuk bisnis",
      "apakah UMKM perlu website",
      "manfaat website untuk UMKM",
      "website vs media sosial",
      "alasan bisnis harus punya website",
      "pentingnya website untuk usaha kecil",
      "website bisnis di era AI",
      "apakah bisnis cukup dengan Instagram",
      "manfaat website profesional",
    ],
    metaDescription:
      "Kenapa bisnis perlu website meskipun sudah punya media sosial? Kenali manfaat website untuk UMKM, Google Search, dan AI melalui analogi sederhana.",
    ogTitle: "Kenapa Bisnis Perlu Website? Manfaatnya untuk UMKM di Era AI",
    ogDescription:
      "Kenapa bisnis perlu website meskipun sudah punya media sosial? Kenali manfaat website untuk UMKM, Google Search, dan AI melalui analogi sederhana.",
  },
  {
    id: "apa-itu-seo-website-sepi-pengunjung",
    articleNumber: "02",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Cara Agar Website Muncul di Google: Kenali Apa Itu SEO",
    h1: "Cara Agar Website Muncul di Google: Kenali Apa Itu SEO",
    subtitle:
      "Website sudah online tetapi belum ditemukan pelanggan? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.",
    slug: "apa-itu-seo-website-sepi-pengunjung",
    category: "SEO & Digital Marketing",
    excerpt:
      "Website sudah online tetapi belum ditemukan pelanggan? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.",
    publishedAt: "2026-11-04",
    readingTime: 9,
    coverImage: "/images/blog/apa-itu-seo-website-sepi-pengunjung-cover.jpg",
    coverAlt:
      "Ilustrasi analogi Pak RT dan perumahan untuk memahami cara kerja Google Search, Googlebot, Google Index, dan SEO website",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: false,
    seoTitle: "Cara Agar Website Muncul di Google: Kenali Apa Itu SEO",
    primaryKeyword: "cara agar website muncul di Google",
    additionalKeywords: [
      "kenapa website tidak muncul di Google",
      "apa itu SEO",
      "cara Google menemukan website",
      "cara mengindeks website di Google",
      "Googlebot adalah",
      "Google Index",
      "Google Search Console",
      "cara meningkatkan pengunjung website",
      "SEO website untuk pemula",
    ],
    metaDescription:
      "Website sudah online tetapi belum ditemukan pelanggan? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.",
    ogTitle: "Cara Agar Website Muncul di Google: Kenali Apa Itu SEO",
    ogDescription:
      "Website sudah online tetapi belum ditemukan pelanggan? Pelajari cara agar website muncul di Google, memahami SEO, Googlebot, dan indexing.",
  },
  {
    id: "domain-vs-hosting",
    articleNumber: "01",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya",
    h1: "Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya",
    subtitle:
      "Masih bingung apa beda antara hosting dan domain? Kenali fungsi, cara kerja, dan perbedaannya melalui analogi rumah yang mudah dipahami.",
    slug: "domain-vs-hosting",
    category: "Website & Technology",
    excerpt:
      "Masih bingung apa beda antara hosting dan domain? Kenali fungsi, cara kerja, dan perbedaannya melalui analogi rumah yang mudah dipahami.",
    publishedAt: "2026-11-03",
    readingTime: 7,
    coverImage: "/images/blog/domain-vs-hosting-cover.jpg",
    coverAlt: "Ilustrasi analogi rumah untuk memahami perbedaan domain dan hosting website",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: false,
    seoTitle: "Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya",
    primaryKeyword: "apa beda antara hosting dan domain",
    additionalKeywords: [
      "apa perbedaan domain dan hosting",
      "apa itu domain",
      "apa itu hosting",
      "fungsi domain dan hosting",
      "contoh domain dan hosting",
      "apakah domain dan hosting berbeda",
      "apakah domain dan hosting harus dibeli bersamaan",
      "perbedaan ekstensi .com dan .id",
    ],
    metaDescription:
      "Masih bingung apa beda antara hosting dan domain? Kenali fungsi, cara kerja, dan perbedaannya melalui analogi rumah yang mudah dipahami.",
    ogTitle: "Apa Beda Hosting dan Domain? Kenali Fungsi dan Perbedaannya",
    ogDescription:
      "Masih bingung apa beda antara hosting dan domain? Kenali fungsi, cara kerja, dan perbedaannya melalui analogi rumah yang mudah dipahami.",
  },
];

