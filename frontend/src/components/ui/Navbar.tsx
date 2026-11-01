"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";

// Exact 4 navigation links strictly ordered as specified
const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar styling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key handler to close mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const waUrl = buildWAUrl(WHATSAPP_MESSAGES.project);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* ── 01. Floating Capsule Navbar Container ───────────────────────── */}
      <header
        role="banner"
        className="fixed top-4 sm:top-5 left-0 right-0 z-50 w-full pointer-events-none transition-all duration-300"
      >
        <div className="w-[88%] sm:w-[85%] max-w-[1320px] mx-auto">
          <div
            className={`pointer-events-auto flex items-center justify-between mx-auto rounded-full px-4 sm:px-6 md:px-7 transition-all duration-300 ${
              scrolled
                ? "bg-[#17100D]/95 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_20px_rgba(244,91,26,0.1)] backdrop-blur-xl"
                : "bg-[#17100D]/85 border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(244,91,26,0.06)] backdrop-blur-md"
            }`}
            style={{
              height: "58px",
              fontFamily: "var(--font-nav)",
            }}
          >
            {/* Logo on Left */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Paham Digital Agency — Beranda"
              className="flex items-center gap-3 shrink-0 focus:outline-none group"
            >
              <div className="relative h-10 sm:h-11 md:h-12 w-auto flex items-center">
                <Image
                  src="/images/logo-paham-light.png"
                  alt="Paham Digital Agency"
                  width={140}
                  height={56}
                  className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Centered (Hidden on mobile) */}
            <nav
              role="navigation"
              aria-label="Navigasi Utama Desktop"
              className="hidden md:flex items-center gap-8 lg:gap-11"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[14px] lg:text-[15px] font-medium tracking-tight text-[#A99A90] hover:text-[#F7F1EB] transition-colors py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F45B1A] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA on Right (Hidden on mobile) */}
            <div className="hidden md:flex items-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-[14px] font-semibold tracking-tight px-6 py-2.5 rounded-full shadow-[0_4px_16px_rgba(244,91,26,0.35)] hover:shadow-[0_6px_22px_rgba(244,91,26,0.5)] transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span>Diskusikan Proyek</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Hamburger / Morphing Toggle Button (Hidden on desktop) */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-dropdown-menu"
              aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full border border-white/12 bg-white/5 hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                {/* Top Bar */}
                <span
                  className={`block h-[2px] bg-[#F7F1EB] rounded-full transition-all duration-300 transform origin-center ${
                    mobileOpen ? "w-5 translate-y-[7px] rotate-45 bg-[#F45B1A]" : "w-5"
                  }`}
                />
                {/* Middle Bar */}
                <span
                  className={`block h-[2px] w-5 bg-[#F7F1EB] rounded-full transition-all duration-200 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                {/* Bottom Bar */}
                <span
                  className={`block h-[2px] bg-[#F7F1EB] rounded-full transition-all duration-300 transform origin-center ${
                    mobileOpen ? "w-5 -translate-y-[7px] -rotate-45 bg-[#F45B1A]" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── 02. Subtle Dimming Backdrop (Page stays partially visible) ─── */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── 03. Mobile Dropdown Panel (Mostu-Inspired Downward Expand) ─── */}
      <div
        className="fixed top-[74px] sm:top-[82px] left-0 right-0 z-50 pointer-events-none flex justify-center md:hidden"
      >
        <div
          id="mobile-dropdown-menu"
          role="navigation"
          aria-label="Navigasi Mobile Dropdown"
          className={`w-[88%] sm:w-[85%] max-w-[440px] mx-auto rounded-[24px] bg-[#17100D]/95 border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(244,91,26,0.12)] backdrop-blur-2xl p-5 transition-all duration-300 ease-out origin-top ${
            mobileOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-90 -translate-y-2 pointer-events-none"
          }`}
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {/* Navigation Items with Horizontal Dividers */}
          <nav className="flex flex-col">
            {NAV_LINKS.map((item, index) => (
              <div
                key={item.label}
                className="border-b border-white/[0.08] last:border-b-0"
                style={{
                  transitionDelay: mobileOpen ? `${index * 40 + 40}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-center min-h-[50px] py-3.5 px-4 text-center text-[16px] font-medium tracking-tight text-[#F7F1EB] hover:text-[#F45B1A] hover:bg-white/[0.04] rounded-xl transition-all active:scale-[0.99]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Bottom Primary CTA Button inside Dropdown */}
          <div
            className="mt-4 pt-4 border-t border-white/10"
            style={{
              transitionDelay: mobileOpen ? "220ms" : "0ms",
            }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white py-3.5 px-6 rounded-full font-semibold text-[15px] tracking-tight shadow-[0_6px_20px_rgba(244,91,26,0.35)] hover:shadow-[0_8px_25px_rgba(244,91,26,0.5)] transition-all active:scale-[0.98]"
            >
              <span>Diskusikan Proyek</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
