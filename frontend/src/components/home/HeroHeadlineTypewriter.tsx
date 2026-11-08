"use client";

import { useState, useEffect, useRef } from "react";

// Line 1 remains completely static throughout the entire lifecycle
const LINE_1 = "PAHAM BISNISNYA.";

// Lines 2 and 3 are generated from ONE continuous sentence
const ANIMATED_SENTENCE = "OTOMATISKAN SISTEMNYA.";
const WORD_1 = "OTOMATISKAN"; // 11 characters (Line 2)
const WORD_2 = "SISTEMNYA."; // 10 characters (Line 3, starts at index 12 after the space)
const TOTAL_LENGTH = ANIMATED_SENTENCE.length; // 22 characters

// Strict animation speed specifications
const TYPE_SPEED = 85; // 85ms per character
const DELETE_SPEED = 55; // 55ms per character
const COMPLETED_PAUSE = 2000; // 2000ms pause when full sentence is visible
const RESTART_PAUSE = 500; // 500ms pause when sentence is completely deleted

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.82em] bg-[#F45B1A] ml-1.5 self-center rounded-[1px] shadow-[0_0_8px_#F45B1A] animate-cursor-blink"
    />
  );
}

export default function HeroHeadlineTypewriter() {
  // Static SSR fallback so SEO crawlers and static export find the full headline
  const [isClient, setIsClient] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Single shared character index controlling the entire continuous sentence
  const [charIndex, setCharIndex] = useState(TOTAL_LENGTH);

  const charIndexRef = useRef(0);
  const modeRef = useRef<"typing" | "deleting">("typing");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    // Initialize typing loop from index 0
    charIndexRef.current = 0;
    modeRef.current = "typing";
    setCharIndex(0);

    const step = () => {
      if (modeRef.current === "typing") {
        if (charIndexRef.current < TOTAL_LENGTH) {
          charIndexRef.current += 1;
          setCharIndex(charIndexRef.current);

          if (charIndexRef.current === TOTAL_LENGTH) {
            // Full sentence reached: hold complete text with cursor for 2000ms
            modeRef.current = "deleting";
            timeoutRef.current = setTimeout(step, COMPLETED_PAUSE);
          } else {
            timeoutRef.current = setTimeout(step, TYPE_SPEED);
          }
        }
      } else if (modeRef.current === "deleting") {
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setCharIndex(charIndexRef.current);

          if (charIndexRef.current === 0) {
            // Sentence completely deleted: wait 500ms before restarting typing
            modeRef.current = "typing";
            timeoutRef.current = setTimeout(step, RESTART_PAUSE);
          } else {
            timeoutRef.current = setTimeout(step, DELETE_SPEED);
          }
        }
      }
    };

    // Short initial delay before typing commences
    timeoutRef.current = setTimeout(step, 180);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Reduced motion: complete static headline without animation
  if (reducedMotion) {
    return (
      <div
        className="font-display font-extrabold uppercase tracking-tight leading-[0.96] text-[clamp(2.35rem,4.5vw,4.85rem)] select-none"
        aria-label="PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA."
      >
        <span className="sr-only">PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA.</span>
        <div className="text-[#F7F1EB]">{LINE_1}</div>
        <div className="text-[#F45B1A]">{WORD_1}</div>
        <div className="text-[#F7F1EB]">{WORD_2}</div>
      </div>
    );
  }

  // SSR or non-hydrated fallback: static full headline for search crawlers & initial paint
  if (!isClient) {
    return (
      <div
        className="font-display font-extrabold uppercase tracking-tight leading-[0.96] text-[clamp(2.35rem,4.5vw,4.85rem)] select-none"
        aria-label="PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA."
      >
        <span className="sr-only">PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA.</span>
        <div className="text-[#F7F1EB]">{LINE_1}</div>
        <div className="text-[#F45B1A]">{WORD_1}</div>
        <div className="text-[#F7F1EB]">{WORD_2}</div>
      </div>
    );
  }

  // Derive visual text segments from the single continuous charIndex
  const line2Text =
    charIndex <= 11
      ? ANIMATED_SENTENCE.slice(0, charIndex)
      : ANIMATED_SENTENCE.slice(0, 11); // "OTOMATISKAN"

  const line3Text =
    charIndex > 12
      ? ANIMATED_SENTENCE.slice(12, charIndex)
      : "";

  // The slim orange cursor follows the active typing position
  const isCursorOnLine2 = charIndex <= 11;
  const isCursorOnLine3 = charIndex >= 12;

  return (
    <div
      className="font-display font-extrabold uppercase tracking-tight leading-[0.96] text-[clamp(2.35rem,4.5vw,4.85rem)] select-none"
      aria-label="PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA."
    >
      <span className="sr-only">PAHAM BISNISNYA. OTOMATISKAN SISTEMNYA.</span>

      {/* Line 01: PAHAM BISNISNYA. (Completely static, warm white #F7F1EB) */}
      <div className="overflow-hidden text-[#F7F1EB]">
        {LINE_1}
      </div>

      {/* Line 02: OTOMATISKAN (First word of animated sentence, brand orange #F45B1A) */}
      <div
        aria-hidden="true"
        className="relative min-h-[1.02em] flex items-baseline overflow-hidden text-[#F45B1A]"
      >
        {/* Phantom text: locks layout height and line metrics permanently */}
        <span className="invisible select-none pointer-events-none" aria-hidden="true">
          {WORD_1}
        </span>
        <div className="absolute inset-0 flex items-baseline text-[#F45B1A]">
          <span>{line2Text}</span>
          {isCursorOnLine2 && <Cursor />}
        </div>
      </div>

      {/* Line 03: SISTEMNYA. (Second word of animated sentence, warm white #F7F1EB) */}
      <div
        aria-hidden="true"
        className="relative min-h-[1.02em] flex items-baseline overflow-hidden text-[#F7F1EB]"
      >
        {/* Phantom text: locks layout height and line metrics permanently */}
        <span className="invisible select-none pointer-events-none" aria-hidden="true">
          {WORD_2}
        </span>
        <div className="absolute inset-0 flex items-baseline text-[#F7F1EB]">
          <span>{line3Text}</span>
          {isCursorOnLine3 && <Cursor />}
        </div>
      </div>
    </div>
  );
}
