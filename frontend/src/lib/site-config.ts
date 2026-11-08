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
    title: "Paham Digital Agency — Website, AI & Automasi Bisnis di Aceh Barat",
    description:
      "Paham Digital Agency membantu bisnis dan UMKM di Aceh Barat tampil profesional lewat website modern, web application, AI Customer Service, automasi bisnis, dan optimasi SEO.",
    keywords: [
      "Paham Digital Agency",
      "Digital Agency Aceh Barat",
      "Jasa Website Meulaboh",
      "Customer Service AI",
      "Automasi Bisnis",
      "SEO Aceh",
      "Web Application Aceh",
    ],
  },
};

export const WHATSAPP_MESSAGES = {
  general: SITE_CONFIG.whatsapp.defaultMessage,
  project: "Halo Tim Paham Digital Agency! Saya ingin mendiskusikan sebuah proyek digital untuk bisnis saya.",
  website: "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan pembuatan website profesional.",
  webApp: "Halo Tim Paham Digital Agency! Saya ingin berdiskusi tentang pembuatan web application untuk bisnis saya.",
  aiService: "Halo Tim Paham Digital Agency! Saya tertarik dengan layanan AI Customer Service & AI Agents.",
  automation: "Halo Tim Paham Digital Agency! Saya ingin tahu lebih lanjut tentang solusi automasi bisnis.",
  marketing: "Halo Tim Paham Digital Agency! Saya ingin konsultasi Digital Marketing & SEO untuk bisnis saya.",
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
      "Website profesional, responsif, dan cepat untuk memperkuat kehadiran digital bisnis Anda. Dari landing page hingga company profile modern.",
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
    title: "AI Customer Service & AI Agents",
    shortTitle: "AI Service",
    category: "Kecerdasan Buatan",
    href: "/layanan/ai-customer-service/",
    description:
      "Asisten AI yang melayani pertanyaan pelanggan, menjawab chat, dan membantu operasional bisnis secara otomatis 24 jam penuh.",
    features: [
      "Chatbot AI dilatih dengan data bisnis Anda",
      "Respon instan kurang dari 5 detik",
      "Integrasi WhatsApp, Instagram & website",
      "Handover ke admin manusia saat diperlukan",
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
  "SEO & Digital Marketing",
  "Website & Technology",
  "AI & Automasi",
  "Bisnis Digital",
];

export const BLOG_POSTS = [
  {
    id: "kenapa-bisnis-perlu-website",
    articleNumber: "03",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Bisnismu Sudah Ada di Media Sosial, Tapi Apa Sudah Punya Rumah Digital Sendiri?",
    h1: "Bisnismu Sudah Ada di Media Sosial, Tapi Apa Sudah Punya Rumah Digital Sendiri?",
    subtitle:
      "Jangan hanya mengandalkan konten yang sedang viral. Kenali mengapa bisnis kecil maupun besar membutuhkan website di era Google dan AI.",
    slug: "kenapa-bisnis-perlu-website",
    category: "Website & Technology",
    excerpt:
      "Bisnis tak cukup hanya mengandalkan media sosial. Kenali manfaat website untuk UMKM, Google, dan AI melalui analogi sederhana serta data digital 2026.",
    publishedAt: "2026-11-08",
    readingTime: 10,
    coverImage: "/images/blog/kenapa-bisnis-perlu-website-cover.webp",
    coverAlt:
      "Ilustrasi lingkungan bisnis, media sosial, dan toko digital sebagai gambaran pentingnya website untuk bisnis.",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: true,
    seoTitle: "Kenapa Bisnis Perlu Website? Manfaat untuk UMKM di Era AI",
    primaryKeyword: "manfaat website untuk bisnis",
    additionalKeywords: [
      "website untuk UMKM",
      "alasan bisnis perlu website",
      "website bisnis",
      "website vs media sosial",
      "manfaat website profesional",
      "website bisnis di era AI",
      "AI search",
      "digital presence bisnis",
      "website untuk usaha kecil",
      "kehadiran digital bisnis",
    ],
    metaDescription:
      "Bisnis tak cukup hanya mengandalkan media sosial. Kenali manfaat website untuk UMKM, Google, dan AI melalui analogi sederhana serta data digital 2026.",
    ogTitle: "Kenapa Bisnis Perlu Website? Manfaat untuk UMKM di Era AI",
    ogDescription:
      "Bisnis tak cukup hanya mengandalkan media sosial. Kenali manfaat website untuk UMKM, Google, dan AI melalui analogi sederhana serta data digital 2026.",
  },
  {
    id: "apa-itu-seo-website-sepi-pengunjung",
    articleNumber: "02",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Sudah Punya Website, Kok Belum Ada yang Berkunjung?",
    h1: "Sudah Punya Website, Kok Belum Ada yang Berkunjung?",
    subtitle:
      "Punya rumah dan alamat saja ternyata belum cukup. Yuk, kenalan dengan SEO dan cara membuat website lebih mudah ditemukan.",
    slug: "apa-itu-seo-website-sepi-pengunjung",
    category: "SEO & Digital Marketing",
    excerpt:
      "Sudah punya domain dan hosting tapi website masih sepi? Kenali SEO dengan analogi Pak RT, Google Search, dan cara membuat bisnismu lebih mudah ditemukan.",
    publishedAt: "2026-11-04",
    readingTime: 9,
    coverImage: "/images/blog/apa-itu-seo-website-sepi-pengunjung-cover.jpg",
    coverAlt:
      "Ilustrasi analogi Pak RT dan perumahan untuk memahami cara kerja Google Search, Googlebot, Google Index, dan SEO website",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: false,
    seoTitle: "Apa Itu SEO? Cara Membuat Website Ditemukan di Google",
    primaryKeyword: "apa itu SEO",
    additionalKeywords: [
      "cara agar website muncul di Google",
      "cara website ditemukan Google",
      "SEO website untuk pemula",
      "Google Index",
      "Googlebot",
      "optimasi SEO website",
      "SEO lokal untuk bisnis",
      "Google Search Console",
      "cara meningkatkan pengunjung website",
      "cara kerja Google Search",
    ],
    metaDescription:
      "Sudah punya domain dan hosting tapi website masih sepi? Kenali SEO dengan analogi Pak RT, Google Search, dan cara membuat bisnismu lebih mudah ditemukan.",
    ogTitle: "Sudah Punya Website, Kok Belum Ada yang Berkunjung?",
    ogDescription:
      "Punya rumah dan alamat saja belum cukup. Yuk, kenali SEO melalui analogi Pak RT, warga, dan Google Search dengan bahasa yang gampang dipahami.",
  },
  {
    id: "domain-vs-hosting",
    articleNumber: "01",
    series: "PAHAM DIGITAL — DIGITAL KNOWLEDGE",
    title: "Domain vs Hosting: Sebenarnya Apa Bedanya?",
    h1: "Domain vs Hosting: Sebenarnya Apa Bedanya?",
    subtitle:
      "Kenali perbedaan domain dan hosting menggunakan analogi rumah yang sederhana. Pelajari juga arti ekstensi .com, .id, dan .online.",
    slug: "domain-vs-hosting",
    category: "Website & Technology",
    excerpt:
      "Masih bingung domain dan hosting? Pelajari perbedaannya dengan analogi rumah, termasuk arti ekstensi .com, .id, dan .online, dengan bahasa sederhana.",
    publishedAt: "2026-11-03",
    readingTime: 7,
    coverImage: "/images/blog/domain-vs-hosting-cover.jpg",
    coverAlt: "Ilustrasi analogi rumah untuk memahami perbedaan domain dan hosting website",
    author: "Kholid Yagha",
    authorRole: "Founder Paham Digital Agency",
    featured: false,
    seoTitle: "Perbedaan Domain dan Hosting: Pengertian, Fungsi, dan Contohnya",
    primaryKeyword: "perbedaan domain dan hosting",
    additionalKeywords: [
      "apa itu domain",
      "apa itu hosting",
      "fungsi domain dan hosting",
      "perbedaan domain dan hosting",
      "perbedaan .com .id dan .online",
      "apa itu TLD",
      "cara kerja domain dan hosting",
      "hosting website untuk bisnis",
      "domain untuk bisnis",
    ],
    metaDescription:
      "Masih bingung domain dan hosting? Pelajari perbedaannya dengan analogi rumah, termasuk arti ekstensi .com, .id, dan .online, dengan bahasa sederhana.",
    ogTitle: "Domain vs Hosting: Sebenarnya Apa Bedanya?",
    ogDescription:
      "Kenali perbedaan domain dan hosting menggunakan analogi rumah yang sederhana. Pelajari juga arti .com, .id, dan .online.",
  },
];

