export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  icon: string;
  highlight: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  businessName: string;
  city: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  role: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: string;
  whatsappNumber: string; // international format e.g. 6281234567890
  whatsappDisplay: string;
  defaultMessage: string;
  email: string;
  chatGuidanceItems: {
    title: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Paham Digital Agency",
  tagline: "Mitra Digital UMKM Aceh Barat Naik Level",
  description:
    "Kami membantu usaha kecil & menengah di Aceh Barat tampil profesional lewat website modern, Customer Service AI 24/7, dan optimasi Google & rekomendasi AI.",
  location: "Meulaboh, Aceh Barat, Nanggroe Aceh Darussalam",
  whatsappNumber: "6282272888990",
  whatsappDisplay: "+62 822-7288-8990",
  defaultMessage:
    "Halo Tim Paham Digital Agency! Saya tertarik ingin konsultasi pembuatan website / AI Customer Service untuk usaha saya di Aceh Barat.",
  email: "halo@pahamdigital.com",
  chatGuidanceItems: [
    {
      title: "Nama & Jenis Usaha Anda",
      description: "Contoh: Kuliner Khas Meulaboh, Konveksi Baju, Toko Kelontong Modern, dll.",
    },
    {
      title: "Tujuan yang Ingin Dicapai",
      description: "Apakah butuh website profil, toko online, chat otomatis 24/7, atau ingin usaha muncul di Google?",
    },
    {
      title: "Referensi / Contoh yang Disukai",
      description: "Bila ada contoh tampilan website atau akun bisnis yang Anda sukai, silakan simpan tautannya.",
    },
    {
      title: "Estimasi Jadwal Rilis",
      description: "Beri tahu kami kapan Anda ingin website atau sistem digital Anda mulai aktif digunakan.",
    },
  ],
};

export const mockServices: Service[] = [
  {
    id: "1",
    slug: "pembuatan-website-umkm",
    title: "Pembuatan Website UMKM",
    shortDesc: "Website profesional yang cepat, ramah HP, dan siap pakai meningkatkan gengsi & penjualan bisnis Anda.",
    description:
      "Tinggalkan era bisnis tanpa identitas. Kami bangun website modern yang cepat dibuka di semua jenis ponsel, menampilkan katalog produk/jasa secara elegan, dan langsung mengarahkan pembeli ke WhatsApp Anda.",
    benefits: [
      "Desain custom modern & responsif (nyaman di HP)",
      "Loading super cepat & bebas lemot",
      "Katalog produk / portofolio yang mudah dipahami",
      "Tombol WhatsApp langsung dengan pesan otomatis",
      "Domain .com/.id & hosting aman siap pakai",
    ],
    icon: "Globe",
    highlight: "Favorit UMKM Baru",
  },
  {
    id: "2",
    slug: "customer-service-ai",
    title: "Customer Service AI 24/7",
    shortDesc: "Asisten cerdas otomatis yang sigap menjawab pertanyaan calon pembeli kapan pun, siang maupun malam.",
    description:
      "Tidak ada lagi calon pembeli kabur karena chat lama dibalas saat Anda istirahat. AI kami dilatih memahami produk, harga, jam buka, dan FAQ bisnis Anda secara ramah dan natural.",
    benefits: [
      "Balas chat instan kurang dari 5 detik",
      "Bekerja 24 jam nonstop tanpa lelah",
      "Paham katalog produk, harga, dan promo usaha Anda",
      "Hemat biaya gaji staf admin customer service",
      "Mudah dialihkan ke admin manusia saat transaksi penting",
    ],
    icon: "Bot",
    highlight: "Teknologi Canggih",
  },
  {
    id: "3",
    slug: "optimasi-google-dan-ai",
    title: "Optimasi Google & AI (SEO)",
    shortDesc: "Usaha Anda mudah ditemukan di Google Search, Google Maps, dan direkomendasikan oleh mesin AI.",
    description:
      "Pastikan saat warga Aceh Barat mencari produk atau jasa Anda di internet, nama usaha Andalah yang muncul di peringkat atas dan direkomendasikan oleh sistem AI generasi baru.",
    benefits: [
      "Pendaftaran & verifikasi Google Bisnisku / Google Maps",
      "Struktur SEO ramah mesin pencari lokal",
      "Muncul di pencarian Google untuk kata kunci Aceh Barat & sekitarnya",
      "Optimasi agar brand direkomendasikan AI (ChatGPT, Gemini, Perplexity)",
      "Laporan perkembangan keterlihatan online bisnis",
    ],
    icon: "TrendingUp",
    highlight: "Pertumbuhan Jangka Panjang",
  },
  {
    id: "4",
    slug: "langkah-kerja-sama",
    title: "Pendampingan Digital Menyeluruh",
    shortDesc: "Proses mudah dari konsultasi santai sampai website siap jalan tanpa membuat Anda pusing hal teknis.",
    description:
      "Kami paham pemilik usaha sibuk mengurus operasional. Kami yang urus seluruh aspek teknis, Anda cukup beri materi dan terima beres.",
    benefits: [
      "Konsultasi santai via WhatsApp atau tatap muka",
      "Draft konsep cepat dalam hitungan hari",
      "Revisi hingga sesuai karakter brand Anda",
      "Panduan pemakaian sederhana untuk pemilik & tim",
      "Dukungan teknis berkala tanpa biaya tersembunyi",
    ],
    icon: "Sparkles",
    highlight: "Bebas Pusing",
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    slug: "selempang-aceh-barat",
    title: "Selempang Wisuda & Souvenir Aceh Barat",
    clientName: "Selempang Meulaboh Official",
    category: "Website Katalog & Order WA",
    summary: "Transformasi toko souvenir wisuda dari hanya jualan lewat status WA menjadi website katalog terstruktur.",
    problem:
      "Klien kewalahan mengirim foto contoh selempang berulang kali ke setiap calon pembeli di chat WhatsApp, sering membuat pembeli bingung memilih model.",
    solution:
      "Dibuatkan website katalog digital interaktif dengan filter model selempang, kalkulator perkiraan harga, dan tombol 'Pesan Model Ini' yang langsung mengirim detail ke WhatsApp admin.",
    result: "Waktu admin membalas berkurang 70%, konversi pesanan naik 2.5x lipat dalam bulan pertama.",
    imageUrl: "/images/JPG.jpg",
    tags: ["Katalog Online", "Aceh Barat", "WhatsApp Order", "Website UMKM"],
    projectUrl: "https://selempang-aceh.example.com",
  },
  {
    id: "2",
    slug: "kupi-khop-samudra",
    title: "Warung Kupi Khop Meulaboh Modern",
    clientName: "Kupi Khop Samudra",
    category: "Website Profil & AI Assistant",
    summary: "Website profil cagar kuliner khas Aceh Barat dengan asisten AI penjawab menu & reservasi meja.",
    problem:
      "Wisatawan luar daerah sering bingung lokasi dan jam buka, serta admin cafe lambat menjawab tanya jawab reservasi di malam hari.",
    solution:
      "Menghadirkan landing page bilingual dengan storytelling sejarah Kupi Khop, peta interaktif, serta AI Assistant yang siap menjawab harga menu dan reservasi meja 24 jam.",
    result: "Kunjungan wisatawan naik 40% dan reservasi meja malam hari terlayani 100% tanpa admin begadang.",
    imageUrl: "/images/JPG.jpg",
    tags: ["Kuliner Khas", "AI Chatbot", "Google Maps SEO", "Profil Bisnis"],
    projectUrl: "https://kupikhop-samudra.example.com",
  },
  {
    id: "3",
    slug: "klinik-gigi-sehat-meulaboh",
    title: "Klinik Pratama & Perawatan Gigi Sehat",
    clientName: "Klinik Gigi Meulaboh Care",
    category: "Website Jasa & Jadwal Dokter",
    summary: "Sistem jadwal konsultasi dan profil dokter ramah pasien untuk layanan kesehatan di Aceh Barat.",
    problem:
      "Pasien sering datang tanpa tahu jadwal dokter yang sedang bertugas, menyebabkan antrean menumpuk dan ketidaknyamanan.",
    solution:
      "Website profil klinik dengan info jadwal dokter real-time, artikel tips kesehatan gigi, dan tombol janji temu WhatsApp otomatis.",
    result: "Antrean klinik lebih teratur, dan klinik menempati peringkat 1 di Google Search 'Klinik Gigi Aceh Barat'.",
    imageUrl: "/images/JPG.jpg",
    tags: ["Layanan Kesehatan", "Jadwal Online", "Local SEO Google"],
    projectUrl: "https://gigisehat-meulaboh.example.com",
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Teuku Ryan Iskandar",
    businessName: "Owner Selempang Meulaboh",
    city: "Meulaboh",
    quote:
      "Sebelum dibantu Paham Digital, saya capek tiap hari kirim foto-foto produk satu per satu di WA. Sekarang tinggal kasih link website, pembeli langsung milih dan chat sudah rapi formatnya. Sangat recommended untuk UMKM Aceh!",
    rating: 5,
    role: "Pemilik Usaha Souvenir",
  },
  {
    id: "2",
    clientName: "Cut Nurul Annisa",
    businessName: "Boutique & Hijab Aceh Barat",
    city: "Aceh Barat",
    quote:
      "Fitur AI Customer Service-nya luar biasa cerdas! Tengah malam pas saya tidur ada pelanggan tanya stok dan ukuran baju, langsung dijawab dengan sopan. Pas pagi saya bangun, pesanannya tinggal difollow up transfer.",
    rating: 5,
    role: "Founder Brand Fashion",
  },
  {
    id: "3",
    clientName: "Munawar Zaki",
    businessName: "Bengkel AC Mobil Barona",
    city: "Johan Pahlawan",
    quote:
      "Usaha saya sekarang muncul paling atas kalau orang cari di Google Maps. Banyak pelanggan baru datang bilang nemu bengkel saya dari internet. Terima kasih tim Paham Digital!",
    rating: 5,
    role: "Pengelola Bengkel Jasa",
  },
];
