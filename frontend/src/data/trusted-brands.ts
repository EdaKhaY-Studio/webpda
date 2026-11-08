export interface TrustedBrand {
  id: string;
  name: string;
  logo: string;
  project: string;
  website: string;
  category: string;
  summary: string;
  deliverables: string[];
  verified: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const TRUSTED_BRANDS: TrustedBrand[] = [
  {
    id: "selempang-aceh-barat",
    name: "Selempang Aceh Barat",
    logo: "/images/clients/FHD.png",
    project: "Website & Digital Catalog",
    website: "https://selempangacehbarat.com",
    category: "UMKM Kreatif & Souvenir",
    summary:
      "Digitalisasi katalog produk dan alur pemesanan online untuk produsen selempang wisuda dan suvenir terbesar di Meulaboh, Aceh Barat.",
    deliverables: [
      "Website Katalog Interaktif",
      "Sistem Filter Produk Real-time",
      "Integrasi Format Order Otomatis ke WhatsApp",
      "Optimasi Tampilan Mobile-First",
    ],
    verified: true,
    testimonial: {
      quote:
        "Proses pemesanan jadi jauh lebih rapi. Pelanggan bisa langsung lihat model, bahan, dan harga di website lalu klik pesan langsung ke WhatsApp tanpa kami harus kirim puluhan foto berulang kali.",
      author: "Owner",
      role: "Selempang Aceh Barat",
    },
  },
];

