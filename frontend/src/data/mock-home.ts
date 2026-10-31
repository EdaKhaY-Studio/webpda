export interface ServiceHighlight {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
}

export interface RecentWork {
  id: string;
  title: string;
  category: string;
  clientName: string;
  location: string;
  description: string;
  result: string;
  metrics: string;
  tags: string[];
  imageUrl: string;
}

export interface AgencyStat {
  label: string;
  value: string;
  subtext: string;
}

export interface ValueBenefit {
  title: string;
  description: string;
  icon: string;
}

export const AGENCY_INFO = {
  name: "Paham Digital Agency",
  tagline: "Bantu UMKM Aceh Barat Tampil Modern & Naik Level",
  shortDesc:
    "Kami hadir untuk membantu pengusaha lokal di Aceh Barat memiliki website profesional, asisten AI customer service 24 jam, serta optimasi agar mudah ditemukan di Google dan direkomendasikan AI.",
  city: "Meulaboh, Aceh Barat",
  whatsappNumber: "6282272991000",
  whatsappUrl:
    "https://wa.me/6282272991000?text=Halo%20Paham%20Digital%20Agency,%20saya%20ingin%20konsultasi%20website%20dan%20solusi%20digital%20untuk%20usaha%20saya",
  email: "halo@pahamdigital.id",
  operatingHours: "Senin - Sabtu: 08:30 - 18:00 WIB",
};

export const MOCK_STATS: AgencyStat[] = [
  {
    value: "25+",
    label: "UMKM Terbantu",
    subtext: "Di Aceh Barat & sekitarnya",
  },
  {
    value: "24/7",
    label: "Layanan CS AI",
    subtext: "Otomatis respon calon pembeli",
  },
  {
    value: "3x Lipat",
    label: "Lonjakan Visibilitas",
    subtext: "Muncul di Google & pencarian AI",
  },
  {
    value: "100%",
    label: "Pendampingan Penuh",
    subtext: "Tanpa pusing urusan teknis",
  },
];

export const MOCK_SERVICES: ServiceHighlight[] = [
  {
    id: "web-umkm",
    slug: "pembuatan-website-umkm",
    title: "Pembuatan Website UMKM",
    tagline: "Etalase digital elegan, cepat, dan meyakinkan",
    description:
      "Website modern dengan desain khusus untuk bisnis Anda. Tampil sempurna di smartphone pembeli, loading super ngebut, dan siap menerima pesanan langsung via WhatsApp.",
    icon: "globe",
    badge: "Paling Populer",
    features: [
      "Desain responsif mobile & tablet",
      "Katalog produk / menu interaktif",
      "Tombol WhatsApp langsung ke kasir/admin",
      "Gratis domain .com & hosting kencang",
    ],
  },
  {
    id: "cs-ai",
    slug: "customer-service-ai",
    title: "Customer Service AI 24/7",
    tagline: "Asisten cerdas yang melayani pelanggan tanpa jeda",
    description:
      "Jangan biarkan calon pembeli kabur karena respon lambat di malam hari. AI pintar kami siap menjawab pertanyaan harga, stok, alamat, dan info menu secara ramah kapan saja.",
    icon: "bot",
    badge: "Teknologi Terkini",
    features: [
      "Siaga 24 jam nonstop setiap hari",
      "Memahami bahasa percakapan lokal",
      "Otomatis arahkan pesanan ke WhatsApp",
      "Hemat biaya admin operasional",
    ],
  },
  {
    id: "seo-ai",
    slug: "optimasi-google-dan-ai",
    title: "Optimasi Google & Rekomendasi AI",
    tagline: "Mudah ditemukan saat calon pembeli mencari usaha Anda",
    description:
      "Pastikan usaha Anda berada di halaman pertama Google Maps dan Search saat orang mencari di Meulaboh, serta terindeks untuk rekomendasi ChatGPT & Google AI Overviews.",
    icon: "trending-up",
    badge: "Pertumbuhan Bisnis",
    features: [
      "Setup Google Profil Bisnis & Google Maps",
      "Optimasi kata kunci lokal Meulaboh & Aceh",
      "Struktur data siap AI Search & Gemini",
      "Pelaporan pengunjung transparan",
    ],
  },
];

export const MOCK_RECENT_WORKS: RecentWork[] = [
  {
    id: "project-1",
    title: "Kupi Meulaboh Heritage",
    category: "Website & Digital Menu",
    clientName: "Kedai Kopi & Roastery",
    location: "Johan Pahlawan, Meulaboh",
    description:
      "Website profil roastery kopi khas Aceh Barat dengan katalog biji kopi premium dan sistem reservasi meja via WhatsApp otomatis.",
    result: "Pemesanan biji kopi online meningkat 180% dan jangkauan kirim tembus luar daerah.",
    metrics: "+180% Pesanan",
    tags: ["Website UMKM", "Katalog Kopi", "WhatsApp Order"],
    imageUrl: "/projects/kopi-heritage.jpg",
  },
  {
    id: "project-2",
    title: "Rumah Tenun & Songket Meulaboh",
    category: "Katalog Online & AI CS",
    clientName: "Pengrajin Tenun Tradisional",
    location: "Aceh Barat",
    description:
      "Etalase motif tenun khas daerah dilengkapi asisten AI yang menjelaskan filosofi motif, ketersediaan bahan, serta panduan ukuran busana.",
    result: "Pertanyaan pembeli larut malam terjawab instan tanpa kehilangan prospek.",
    metrics: "95% Chat Terjawab",
    tags: ["E-Katalog", "Customer Service AI", "Branding"],
    imageUrl: "/projects/tenun-meulaboh.jpg",
  },
  {
    id: "project-3",
    title: "Bengkel Mandiri Service Mobil",
    category: "Website Service & Google Maps SEO",
    clientName: "Bengkel & Derek 24 Jam",
    location: "Jalan Gajah Mada, Meulaboh",
    description:
      "Peningkatan kehadiran di Google Maps dan website booking darurat untuk pemilik kendaraan yang butuh derek atau ganti oli cepat di Aceh Barat.",
    result: "Menduduki ranking 1 Google Search untuk pencarian service mobil Meulaboh.",
    metrics: "Top 1 Google Maps",
    tags: ["SEO Lokal", "Google Maps", "Website Cepat"],
    imageUrl: "/projects/bengkel-mandiri.jpg",
  },
];

export const MOCK_WHY_US: ValueBenefit[] = [
  {
    title: "Paham Pasar Lokal Aceh Barat",
    description:
      "Kami berbasis di daerah dan mengerti karakter pembeli serta kebiasaan UMKM di Meulaboh dan sekitarnya.",
    icon: "map-pin",
  },
  {
    title: "Bukan Cuma Website, Tapi Solusi Lengkap",
    description:
      "Kombinasi website modern, asisten AI pintar, dan SEO lokal agar toko Anda tidak sekadar online tetapi menghasilkan penjualan.",
    icon: "layers",
  },
  {
    title: "Harga Transparan Sesuai Kantong UMKM",
    description:
      "Pilihan paket terjangkau tanpa biaya tersembunyi, dengan opsi cicilan atau pembayaran bertahap yang fleksibel.",
    icon: "shield-check",
  },
  {
    title: "Pendampingan & Pelatihan Ramah",
    description:
      "Anda tidak ditinggal setelah website jadi. Kami ajarkan cara mengelola dan siap membantu kapan pun ada kendala.",
    icon: "sparkles",
  },
];


export interface AgencyIdentity {
  headline: string;
  subheadline: string;
  story: string[];
  founderGreeting: {
    name: string;
    role: string;
    location: string;
    quote: string;
  };
  pillars: {
    title: string;
    description: string;
    badge: string;
  }[];
}

export const MOCK_IDENTITY: AgencyIdentity = {
  headline: "Kami Hadir Agar UMKM Aceh Barat Tidak Tertinggal di Era Digital",
  subheadline:
    "Paham Digital Agency lahir dari kepedulian mendalam terhadap potensi pengusaha lokal di Meulaboh dan Aceh Barat yang luar biasa namun sering kali belum memiliki kehadiran digital yang meyakinkan.",
  story: [
    "Di Meulaboh dan sekitarnya, banyak sekali UMKM dengan produk luar biasa — dari kuliner khas, pengrajin tenun, jasa bengkel, hingga toko retail keluarga. Sayangnya, calon pembeli dari luar kota atau generasi muda sering kesulitan mencari informasi mereka di internet.",
    "Bukan karena pemilik usaha tidak mau modern, tetapi sering kali solusi digital yang ada terlalu rumit, biayanya tidak masuk akal, atau tidak ada yang mau membimbing sampai benar-benar bisa.",
    "Paham Digital Agency hadir sebagai jembatan. Kami bukan sekadar penyedia kode website, melainkan partner lokal yang mendampingi usaha Anda memiliki identitas digital profesional, asisten AI yang sigap, dan posisi unggul di Google.",
  ],
  founderGreeting: {
    name: "Kholid Yagha & Tim Paham Digital",
    role: "Inisiator Paham Digital Agency",
    location: "Johan Pahlawan, Meulaboh — Aceh Barat",
    quote:
      "Visi kami sederhana: ingin melihat warung, toko, dan jasa lokal di Aceh Barat punya website sekelas brand nasional, dengan biaya yang ramah kantong dan dipandu sampai sukses.",
  },
  pillars: [
    {
      title: "Dekat & Mengerti Bahasa Lokal",
      description:
        "Kami berbasis di Meulaboh, mengerti kultur dan kebiasaan pembeli di Aceh Barat, sehingga konten dan pesan promo terasa alami dan menyentuh.",
      badge: "Kearifan Lokal",
    },
    {
      title: "Teknologi Modern Kelas Atas",
      description:
        "Memanfaatkan Next.js, Cloud Hosting cepat, dan integrasi Artificial Intelligence agar UMKM selangkah lebih maju dari kompetitor.",
      badge: "AI & Modern Tech",
    },
    {
      title: "Fokus Penjualan WhatsApp",
      description:
        "Seluruh alur website dan AI dirancang untuk mempermudah calon pembeli langsung terhubung ke kasir atau WhatsApp pemilik usaha.",
      badge: "Langsung Order",
    },
  ],
};
