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
    number: "6282272888990",
    display: "+62 822-7288-8990",
    defaultMessage:
      "Halo Tim Paham Digital Agency! Saya ingin konsultasi solusi digital untuk bisnis saya.",
  },
  social: {
    instagram: "https://instagram.com/pahamdigital.id",
    tiktok: "https://tiktok.com/@pahamdigital.id",
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
  { label: "Layanan", href: "/#layanan" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICES = [
  {
    id: "website",
    title: "Website Development",
    shortTitle: "Website",
    category: "Fondasi Digital",
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
    description:
      "Aplikasi web custom yang membantu bisnis mengelola proses, melayani pelanggan, dan mengoperasikan sistem secara lebih efisien.",
    features: [
      "Sistem manajemen & dashboard bisnis",
      "Portal pelanggan & booking system",
      "Integrasi database & API third-party",
      "Autentikasi & manajemen pengguna",
    ],
    waMessage: WHATSAPP_MESSAGES.webApp,
    icon: "LayoutDashboard",
    accent: "#F45B1A",
  },
  {
    id: "ai",
    title: "AI Customer Service & AI Agents",
    shortTitle: "AI Service",
    category: "Kecerdasan Buatan",
    description:
      "Asisten AI yang melayani pertanyaan pelanggan, menjawab chat, dan membantu operasional bisnis secara otomatis 24 jam penuh.",
    features: [
      "Chatbot AI dilatih dengan data bisnis Anda",
      "Respon instan kurang dari 5 detik",
      "Integrasi WhatsApp, Instagram & website",
      "Handover ke admin manusia saat diperlukan",
    ],
    waMessage: WHATSAPP_MESSAGES.aiService,
    icon: "Bot",
    accent: "#F45B1A",
  },
  {
    id: "automation",
    title: "Business Automation",
    shortTitle: "Automasi",
    category: "Efisiensi Operasional",
    description:
      "Otomasi alur kerja bisnis yang berulang agar tim Anda bisa fokus pada hal-hal yang benar-benar penting dan bernilai tinggi.",
    features: [
      "Automasi laporan & notifikasi otomatis",
      "Integrasi antar aplikasi bisnis",
      "Workflow & approval system digital",
      "Scheduled tasks & background jobs",
    ],
    waMessage: WHATSAPP_MESSAGES.automation,
    icon: "Zap",
    accent: "#F45B1A",
  },
  {
    id: "seo",
    title: "Digital Marketing & SEO",
    shortTitle: "Marketing",
    category: "Pertumbuhan Digital",
    description:
      "Strategi digital marketing dan optimasi SEO untuk meningkatkan visibilitas bisnis Anda di Google dan mesin pencari AI.",
    features: [
      "Optimasi Google Business Profile & Maps",
      "SEO on-page & technical SEO",
      "Content strategy & digital branding",
      "Analitik & laporan performa bulanan",
    ],
    waMessage: WHATSAPP_MESSAGES.marketing,
    icon: "TrendingUp",
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
    imageUrl: "/images/JPG.jpg",
    imageAlt: "Website katalog Selempang Wisuda Aceh Barat",
    year: "2024",
  },
];

export const BLOG_CATEGORIES = [
  "Semua",
  "Website & Web App",
  "AI & Kecerdasan Buatan",
  "Automasi Bisnis",
  "SEO & Visibilitas",
  "Transformasi Digital",
  "Edukasi Teknologi",
];

export const BLOG_POSTS = [
  {
    id: "mengapa-umkm-butuh-website",
    title: "Mengapa UMKM di Aceh Barat Butuh Website Profesional di 2025",
    slug: "mengapa-umkm-butuh-website",
    category: "Website & Web App",
    excerpt:
      "Di era digital saat ini, pelanggan pertama kali mencari bisnis secara online. Pelajari mengapa kehadiran digital yang profesional bukan lagi pilihan, melainkan kebutuhan.",
    publishedAt: "2025-01-15",
    readingTime: 5,
    coverImage: null,
    author: "Tim Paham Digital",
    featured: true,
  },
  {
    id: "ai-customer-service-untuk-umkm",
    title: "Bagaimana AI Customer Service Mengubah Cara UMKM Melayani Pelanggan",
    slug: "ai-customer-service-untuk-umkm",
    category: "AI & Kecerdasan Buatan",
    excerpt:
      "Asisten AI bukan hanya untuk perusahaan besar. Pelajari bagaimana teknologi ini bisa membantu usaha kecil melayani pelanggan lebih cepat dan lebih konsisten.",
    publishedAt: "2025-01-08",
    readingTime: 7,
    coverImage: null,
    author: "Tim Paham Digital",
    featured: false,
  },
  {
    id: "panduan-seo-lokal-aceh",
    title: "Panduan Lengkap SEO Lokal untuk Bisnis di Aceh Barat",
    slug: "panduan-seo-lokal-aceh",
    category: "SEO & Visibilitas",
    excerpt:
      "Agar bisnis Anda muncul di halaman pertama Google saat calon pelanggan mencari di Meulaboh dan sekitarnya, berikut strategi SEO lokal yang perlu Anda terapkan.",
    publishedAt: "2024-12-20",
    readingTime: 8,
    coverImage: null,
    author: "Tim Paham Digital",
    featured: false,
  },
  {
    id: "automasi-bisnis-bukan-sekedar-tren",
    title: "Automasi Bisnis: Bukan Sekadar Tren, Tapi Kebutuhan Operasional",
    slug: "automasi-bisnis-bukan-sekedar-tren",
    category: "Automasi Bisnis",
    excerpt:
      "Banyak pemilik bisnis yang masih mengerjakan tugas-tugas berulang secara manual. Pelajari bagaimana automasi bisa menghemat waktu dan mengurangi human error.",
    publishedAt: "2024-12-10",
    readingTime: 6,
    coverImage: null,
    author: "Tim Paham Digital",
    featured: false,
  },
];

