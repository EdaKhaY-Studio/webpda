import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollRevealManager from "@/components/ui/ScrollRevealManager";
import { SITE_CONFIG } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paham Digital Agency — Modern Creative Technology & Automation",
  description:
    "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL("https://pahamdigital.online"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paham Digital Agency — Paham Bisnisnya, Otomatiskan Sistemnya.",
    description:
      "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    url: "https://pahamdigital.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paham Digital Agency",
    description: "Paham Bisnisnya, Otomatiskan Sistemnya.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      className={`${poppins.variable} font-body scroll-smooth dark`}
    >
      <body
        className="min-h-screen flex flex-col antialiased selection:bg-[#F45B1A] selection:text-white"
        style={{
          backgroundColor: "#0B0807",
          color: "#F7F1EB",
          fontFamily: "var(--font-body)",
        }}
      >
        <Navbar />
        <ScrollRevealManager />
        <main className="flex-1 animate-page-entrance">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
