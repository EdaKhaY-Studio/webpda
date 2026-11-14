"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildWAUrl, WHATSAPP_MESSAGES } from "@/lib/site-config";

// Exact 4 navigation links strictly ordered as specified: Beranda → Tentang Kami → Layanan Kami → Blog
const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami/" },
  { label: "Layanan Kami", href: "/layanan/" },
  { label: "Blog", href: "/blog/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Passive, lightweight scroll detection at ~50px threshold
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial state
    onScroll();
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
      {/* ── 01. Solid White Navbar Container ─────────────────────────────── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#FFFFFF] transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 sm:py-2.5"
            : "border-b border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] py-2.5 sm:py-3"
        }`}
      >
        <div
          className="w-[92%] sm:w-[92%] md:w-[94%] max-w-[1320px] mx-auto flex items-center justify-between"
          style={{
            fontFamily: "var(--font-nav)",
          }}
        >
          {/* Logo on Left: Transparent PDA Official Logo on Solid White Navbar */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Paham Digital Agency — Beranda"
            className="flex items-center shrink-0 focus:outline-none group py-0.5"
          >
            <Image
              src="/images/logo-paham.png"
              alt="Paham Digital Agency"
              width={160}
              height={55}
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation Centered (Hidden on mobile) */}
          <nav
            role="navigation"
            aria-label="Navigasi Utama Desktop"
            className="hidden md:flex items-center gap-7 lg:gap-10"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[14px] lg:text-[15px] font-semibold tracking-tight text-[#17100D] hover:text-[#F45B1A] transition-colors py-1 group"
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
              className="inline-flex items-center gap-2 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white text-[14px] font-semibold tracking-tight px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_16px_rgba(244,91,26,0.25)] hover:shadow-[0_6px_22px_rgba(244,91,26,0.4)] transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>Diskusikan Proyek</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (Hidden on desktop) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-dropdown-menu"
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all focus:outline-none active:scale-95"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              {/* Top Bar */}
              <span
                className={`block h-[2px] bg-[#17100D] rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen ? "w-5 translate-y-[7px] rotate-45 !bg-[#F45B1A]" : "w-5"
                }`}
              />
              {/* Middle Bar */}
              <span
                className={`block h-[2px] w-5 bg-[#17100D] rounded-full transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              {/* Bottom Bar */}
              <span
                className={`block h-[2px] bg-[#17100D] rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen ? "w-5 -translate-y-[7px] -rotate-45 !bg-[#F45B1A]" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── 02. Subtle Dimming Backdrop (Page stays partially visible) ─── */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── 03. Mobile Dropdown Panel ──────────────────────────────────── */}
      <div
        className="fixed top-[64px] sm:top-[70px] left-0 right-0 z-50 pointer-events-none flex justify-center md:hidden"
      >
        <div
          id="mobile-dropdown-menu"
          role="navigation"
          aria-label="Navigasi Mobile Dropdown"
          className={`w-[92%] sm:w-[90%] max-w-[460px] mx-auto rounded-[20px] bg-[#FFFFFF] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 transition-all duration-300 ease-out origin-top ${
            mobileOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-90 -translate-y-2 pointer-events-none"
          }`}
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {/* Navigation Items with Clean Horizontal Dividers */}
          <nav className="flex flex-col">
            {NAV_LINKS.map((item, index) => (
              <div
                key={item.label}
                className="border-b border-slate-100 last:border-b-0"
                style={{
                  transitionDelay: mobileOpen ? `${index * 40 + 40}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-center min-h-[48px] py-3 px-4 text-center text-[15px] font-semibold tracking-tight text-[#17100D] hover:text-[#F45B1A] hover:bg-slate-50 rounded-xl transition-all active:scale-[0.99]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Bottom Primary CTA Button inside Dropdown */}
          <div
            className="mt-4 pt-4 border-t border-slate-100"
            style={{
              transitionDelay: mobileOpen ? "220ms" : "0ms",
            }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-[#F45B1A] hover:bg-[#FF6A2A] text-white py-3.5 px-6 rounded-full font-semibold text-[15px] tracking-tight shadow-[0_6px_20px_rgba(244,91,26,0.25)] hover:shadow-[0_8px_25px_rgba(244,91,26,0.35)] transition-all active:scale-[0.98]"
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
