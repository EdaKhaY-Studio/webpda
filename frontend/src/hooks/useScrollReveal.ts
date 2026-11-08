"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Universal Smooth Scroll Reveal Hook for Paham Digital Agency
 * 
 * Implements bidirectional scroll entrance:
 * - Scroll Down: Opacity 0 -> 1, translateY 25px -> 0
 * - Scroll Up: Opacity 0 -> 1, translateY -20px -> 0
 * - Respects prefers-reduced-motion
 * - Consistent easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px" } = options;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current + 4) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollYRef.current - 4) {
        setScrollDirection("up");
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Directional anim class for elements inside the section
  const getRevealClass = () => {
    if (isInView) {
      return "opacity-100 translate-y-0";
    }
    return scrollDirection === "down"
      ? "opacity-0 translate-y-[25px]"
      : "opacity-0 -translate-y-[20px]";
  };

  return {
    sectionRef,
    ref: sectionRef,
    isInView,
    scrollDirection,
    getRevealClass,
  };
}
