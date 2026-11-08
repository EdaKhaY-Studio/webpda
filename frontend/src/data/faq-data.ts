export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  cta?: {
    text: string;
    action: "whatsapp" | "link";
    link?: string;
  };
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "about-agency",
    category: "Tentang Kami",
    question: "Paham Digital Agency itu sebenarnya ngapain, sih?",
    answer:
      "Paham Digital Agency adalah partner solusi digital yang membantu bisnis membangun kehadiran online dan sistem kerja yang lebih praktis. Mulai dari website profesional, web application, AI Customer Service, hingga automasi bisnis. Fokus kami bukan sekadar membuat teknologi terlihat keren, tetapi memastikan solusinya sesuai kebutuhan bisnismu.",
  },
  {
    id: "available-services",
    category: "Layanan",
    question: "Layanan apa saja yang bisa saya dapatkan?",
    answer:
      "Kami menyediakan beberapa solusi digital: Website Development, Web Application Development, AI Customer Service & AI Agents, Business Automation, serta Digital Marketing & SEO. Kamu nggak harus mengambil semuanya sekaligus. Kita bisa mulai dari kebutuhan yang paling penting untuk bisnismu.",
  },
  {
    id: "umkm-compatibility",
    category: "UMKM",
    question: "Apakah layanan Paham Digital cocok untuk UMKM?",
    answer:
      "Banget! Justru kami ingin membantu UMKM tampil lebih profesional dan mulai memanfaatkan teknologi tanpa harus ribet memahami semua hal teknis. Solusinya akan disesuaikan dengan kebutuhan, tujuan, dan anggaran bisnis.",
  },
  {
    id: "pricing",
    category: "Biaya",
    question: "Berapa biaya untuk membuat website atau sistem digital?",
    answer:
      "Biayanya tergantung kebutuhan proyek, fitur, tingkat kompleksitas, dan layanan yang dipilih. Ceritakan dulu kebutuhan bisnismu melalui WhatsApp. Kami akan membantu menyusun solusi dan penawaran yang lebih jelas sebelum pengerjaan dimulai.",
  },
  {
    id: "timeline",
    category: "Timeline",
    question: "Berapa lama website bisa selesai?",
    answer:
      "Waktunya bergantung pada jenis website, fitur, kelengkapan materi, dan tingkat kompleksitas proyek. Setelah kebutuhan dipetakan, kami akan memberikan estimasi pengerjaan dan tahapan yang lebih jelas supaya kamu tahu prosesnya.",
  },
  {
    id: "custom-design",
    category: "Desain",
    question: "Bisa request desain sesuai identitas brand saya?",
    answer:
      "Tentu. Kami akan menyesuaikan arah visual website dengan identitas brand, karakter bisnis, target pelanggan, dan referensi desain yang kamu sukai. Jadi, hasilnya bukan sekadar template yang diganti logo.",
  },
  {
    id: "ai-cs-hours",
    category: "AI & Automasi",
    question: "AI Customer Service bisa membalas chat 24 jam?",
    answer:
      "AI Customer Service dapat dirancang untuk merespons pertanyaan pelanggan sepanjang waktu selama layanan AI, server, koneksi, dan integrasi pendukungnya aktif. Respons serta alurnya juga bisa disesuaikan dengan informasi dan karakter bisnismu.",
  },
  {
    id: "whatsapp-integration",
    category: "Integrasi",
    question: "Bisa dihubungkan dengan WhatsApp dan automasi bisnis?",
    answer:
      "Bisa dirancang sesuai kebutuhan integrasi. Misalnya membantu pengelolaan pesan pelanggan, alur pemesanan, dan automasi operasional melalui platform yang kompatibel. Detail integrasi akan ditentukan berdasarkan kebutuhan serta akses API yang tersedia.",
  },
  {
    id: "ai-credits",
    category: "AI & Token",
    question: "Kalau kredit atau token AI habis, bagaimana?",
    answer:
      "Kredit AI awal mengikuti ketentuan paket yang kamu ambil. Ketika kredit tersebut habis, penggunaan AI selanjutnya membutuhkan pengisian kredit tambahan sesuai pemakaian. Biaya dan ketentuannya akan dijelaskan sejak awal supaya tidak ada biaya yang mengejutkan.",
  },
  {
    id: "maintenance",
    category: "Pemeliharaan",
    question: "Setelah website selesai, masih ada maintenance?",
    answer:
      "Ada layanan maintenance sesuai paket dan kesepakatan proyek. Untuk cakupan maintenance dasar, fokusnya pada perbaikan bug tampilan dan bug teknis tertentu. Penambahan halaman, fitur baru, atau pengembangan besar termasuk pekerjaan tambahan kecuali sudah disepakati dalam kontrak.",
  },
  {
    id: "seo-guarantee",
    category: "SEO",
    question: "Apakah website saya bisa langsung muncul di halaman pertama Google?",
    answer:
      "Kami dapat membantu menyiapkan fondasi SEO, struktur halaman, metadata, dan optimasi teknis website. Namun, posisi Google tidak bisa dijamin karena dipengaruhi persaingan, kualitas konten, perkembangan algoritma, dan banyak faktor lainnya.",
  },
  {
    id: "start-project",
    category: "Mulai Kerja Sama",
    question: "Kalau tertarik, bagaimana cara mulai kerja sama?",
    answer:
      "Gampang! Klik tombol konsultasi WhatsApp, ceritakan sedikit tentang bisnismu dan kebutuhan yang ingin diselesaikan. Kita diskusikan dulu solusinya, kemudian kamu bisa mempertimbangkan penawaran yang sesuai.",
    cta: {
      text: "Mulai Diskusi",
      action: "whatsapp",
    },
  },
];

