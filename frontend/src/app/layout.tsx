import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paham Digital Agency - Solusi Digital & Website UMKM Aceh Barat",
  description:
    "Membantu UMKM di Aceh Barat tampil modern dan naik level melalui website profesional, Customer Service AI 24/7, dan optimasi SEO Google & rekomendasi AI.",
  keywords: [
    "Paham Digital Agency",
    "Website UMKM Aceh Barat",
    "Jasa Website Meulaboh",
    "Customer Service AI",
    "SEO Google Aceh Barat",
    "Digital Agency Aceh",
  ],
  authors: [{ name: "Paham Digital Agency" }],
  openGraph: {
    title: "Paham Digital Agency - Solusi Digital & Website UMKM Aceh Barat",
    description:
      "Membantu UMKM di Aceh Barat tampil modern dan naik level melalui website profesional, Customer Service AI 24/7, dan optimasi SEO Google & rekomendasi AI.",
    siteName: "Paham Digital Agency",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
