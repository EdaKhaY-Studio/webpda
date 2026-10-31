import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import ChatGuidance from "@/components/ChatGuidance";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sambutan & Identitas + Ajakan Konsultasi */}
      <HeroSection />

      {/* Sorotan Layanan */}
      <ServicesSection />

      {/* Hasil Kerja Terbaru */}
      <PortfolioSection />

      {/* Bukti Sosial / Testimoni */}
      <TestimonialSection />

      {/* Panduan Sebelum Chat WhatsApp */}
      <ChatGuidance />

      {/* Ajakan Konsultasi Utama */}
      <CtaSection />
    </div>
  );
}
