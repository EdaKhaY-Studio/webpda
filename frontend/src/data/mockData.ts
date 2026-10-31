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
  beforeState: string;
  afterState: string;
  metrics: { label: string; value: string }[];
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  isLatest?: boolean;
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
  whatsappNumber: string;
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
    title: "Selempang Wisuda & Souvenir Khas Aceh Barat",
    clientName: "Selempang Meulaboh Official",
    category: "Katalog & Order WA",
    summary:
      "Transformasi toko souvenir wisuda dari hanya jualan lewat status WhatsApp menjadi website katalog interaktif siap pesan.",
    problem:
      "Klien kewalahan mengirim puluhan foto contoh selempang berulang kali ke setiap calon pembeli di chat, membuat pembeli sering ragu dan lambat memutuskan.",
    solution:
      "Membangun website katalog digital interaktif dengan filter model selempang, kalkulator perkiraan harga, dan tombol 'Pesan Model Ini' yang langsung mengirim format pesanan lengkap ke WhatsApp admin.",
    result: "Waktu admin membalas berkurang 70%, konversi pesanan naik 2.5x lipat dalam bulan pertama rilis.",
    beforeState: "Hanya status WA seadanya, foto tercecer, pembeli bingung memilih jenis bahan dan tulisan.",
    afterState: "Website katalog rapi dengan foto tajam, pilihan warna instan, dan pesanan masuk format rapi.",
    metrics: [
      { label: "Peningkatan Konversi", value: "+150%" },
      { label: "Hemat Waktu Admin", value: "70%" },
      { label: "Pengunjung Unik / Bln", value: "3.200+" },
    ],
    imageUrl: "/images/JPG.jpg",
    tags: ["Katalog Digital", "Aceh Barat", "WhatsApp Order", "UMKM Souvenir"],
    projectUrl: "https://selempang-aceh.example.com",
    isLatest: true,
  },
  {
    id: "2",
    slug: "kupi-khop-samudra",
    title: "Warung Kupi Khop Meulaboh Modern",
    clientName: "Kupi Khop Samudra Meulaboh",
    category: "AI Chatbot",
    summary:
      "Website profil cagar kuliner khas kopi terbalik Aceh Barat dengan asisten AI penjawab daftar menu & reservasi meja 24 jam.",
    problem:
      "Wisatawan luar daerah sering bingung mencari titik lokasi tepat dan daftar harga menu, serta pesan reservasi di malam hari sering lambat direspon admin cafe.",
    solution:
      "Menghadirkan landing page bilingual dengan storytelling sejarah Kupi Khop, rute peta Google Maps, serta Customer Service AI yang siap menjawab pertanyaan menu dan reservasi meja 24 jam tanpa jeda.",
    result:
      "Kunjungan wisatawan naik 40% dan pertanyaan menu malam hari terlayani 100% otomatis tanpa admin lembur.",
    beforeState: "Tidak punya website resmi, chat malam sering terabaikan hingga calon pelanggan pindah warung.",
    afterState: "Website elegan dengan asisten virtual cerdas yang membalas dalam 3 detik dan mencatat reservasi.",
    metrics: [
      { label: "Respon Chat Reservasi", value: "< 4 Detik" },
      { label: "Kunjungan Wisatawan", value: "+40%" },
      { label: "Kepuasan Tamu", value: "4.9 / 5" },
    ],
    imageUrl: "/images/JPG.jpg",
    tags: ["Kuliner Khas", "AI Chatbot", "Google Maps SEO", "Profil Bisnis"],
    projectUrl: "https://kupikhop-samudra.example.com",
    isLatest: true,
  },
  {
    id: "3",
    slug: "klinik-gigi-sehat-meulaboh",
    title: "Klinik Pratama & Perawatan Gigi Sehat",
    clientName: "Klinik Gigi Meulaboh Care",
    category: "Google SEO",
    summary:
      "Website profil klinik modern dengan jadwal praktek dokter real-time dan optimasi ranking #1 di Google Search Aceh Barat.",
    problem:
      "Pasien sering datang tanpa tahu dokter gigi spesialis yang bertugas hari itu, menyebabkan antrean menumpuk dan ketidakpuasan pasien di ruang tunggu.",
    solution:
      "Website profil klinik dengan fitur cek jadwal dokter real-time, tips kesehatan gigi, form pendaftaran janji temu WhatsApp, dan optimasi SEO lokal Google Bisnis.",
    result:
      "Antrean klinik lebih teratur, dan nama klinik menempati peringkat 1 di Google Search saat orang mengetik 'Dokter Gigi Aceh Barat'.",
    beforeState: "Jadwal hanya ditulis di papan tulis klinik, tidak bisa dicari di Google.",
    afterState: "Website terverifikasi Google Bisnis, pasien bisa cek jadwal dari HP sebelum berangkat.",
    metrics: [
      { label: "Peringkat Google Lokal", value: "Rank #1" },
      { label: "Pengurangan Antrean", value: "45%" },
      { label: "Pasien Baru / Bln", value: "120+" },
    ],
    imageUrl: "/images/JPG.jpg",
    tags: ["Layanan Kesehatan", "Jadwal Online", "Local SEO Google"],
    projectUrl: "https://gigisehat-meulaboh.example.com",
    isLatest: true,
  },
  {
    id: "4",
    slug: "hijab-butik-johan-pahlawan",
    title: "Butik Hijab & Busana Muslimah Meulaboh",
    clientName: "Zahra Boutique Aceh",
    category: "Website UMKM",
    summary:
      "Toko busana muslimah lokal bertransformasi menjadi brand terpercaya dengan website katalog modern.",
    problem:
      "Peminat dari luar kecamatan Johan Pahlawan kesulitan melihat koleksi terbaru secara detail dan ragu belanja karena belum ada website resmi.",
    solution:
      "Mendesain website showcase busana dengan foto berkualitas tinggi, filter ukuran busana, dan sistem checkout langsung ke WhatsApp CS.",
    result:
      "Kepercayaan pembeli meningkat drastis, kini melayani pengiriman ke seluruh Aceh dan Sumatra.",
    beforeState: "Mengandalkan postingan Instagram yang cepat tenggelam.",
    afterState: "Website permanen yang profesional dan mudah diakses siapa saja.",
    metrics: [
      { label: "Jangkauan Daerah", value: "Seluruh Aceh" },
      { label: "Pertumbuhan Omset", value: "+80%" },
    ],
    imageUrl: "/images/JPG.jpg",
    tags: ["Fashion Muslim", "Website UMKM", "Katalog Busana"],
    projectUrl: "https://zahra-boutique.example.com",
    isLatest: false,
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
