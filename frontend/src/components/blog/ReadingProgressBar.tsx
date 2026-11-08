"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setCompletion(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#F45B1A] via-[#FF6A2A] to-[#F7F1EB] transition-all duration-75 ease-out shadow-[0_0_8px_#F45B1A]"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}

