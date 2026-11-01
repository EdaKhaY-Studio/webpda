import type { Metadata } from "next";
import { Poppins, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { SITE_CONFIG } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paham Digital Agency — Modern Creative Technology & Automation",
  description:
    "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL("https://pahamdigital.id"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paham Digital Agency — Paham Bisnisnya, Otomatiskan Sistemnya.",
    description:
      "Kami membantu bisnis berkembang melalui website profesional, web application, AI, dan sistem automasi yang bekerja lebih cerdas.",
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    url: "https://pahamdigital.id",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${spaceGrotesk.variable} ${manrope.variable} scroll-smooth dark`}
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
        <main className="flex-1 animate-page-entrance">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
