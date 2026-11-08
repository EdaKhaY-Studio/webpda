"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global Scroll Reveal Manager
 * Coordinates page-wide smooth scroll reveals, detects scroll direction (down vs up),
 * and activates .sr-auto elements across all pages (including Blog and Footer).
 */
export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect accessibility settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollDirection: "down" | "up" = "down";

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 4) {
        scrollDirection = "down";
        document.documentElement.setAttribute("data-scroll-dir", "down");
      } else if (currentScrollY < lastScrollY - 4) {
        scrollDirection = "up";
        document.documentElement.setAttribute("data-scroll-dir", "up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    updateScrollDirection();

    // Observe all .sr-auto elements on the current page
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("sr-visible");
            el.classList.remove("sr-from-below", "sr-from-above");
          } else {
            // When exiting viewport, prepare for re-entry based on scroll direction
            el.classList.remove("sr-visible");
            if (scrollDirection === "down") {
              el.classList.add("sr-from-above");
              el.classList.remove("sr-from-below");
            } else {
              el.classList.add("sr-from-below");
              el.classList.remove("sr-from-above");
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Initial query of elements
    const elements = document.querySelectorAll(".sr-auto");
    elements.forEach((el) => {
      // Set initial state: below viewport or in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.classList.add("sr-from-below");
      } else if (rect.bottom < 0) {
        el.classList.add("sr-from-above");
      } else {
        el.classList.add("sr-visible");
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
