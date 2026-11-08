import React from "react";
import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

/**
 * EducationBookBulbIcon
 *
 * Semantic icon for "ARTIKEL EDUKASI UTAMA" / Educational knowledge sections.
 * Depicts an open book with an illuminated lightbulb emerging from the center binding,
 * symbolizing education, digital understanding, shared insights, and knowledge illumination.
 *
 * System Specs:
 * - Grid: 24x24 viewBox
 * - Stroke: 2px outline, round caps and joins (Feather / Lucide compatible)
 * - Color: Inherits `currentColor` (optimized for brand orange #F45B1A)
 */
export function EducationBookBulbIcon({
  size = 24,
  strokeWidth = 2,
  className = "",
  title,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Emerging Lightbulb (Knowledge & Insight Rising) */}
      <path d="M12 2a3.5 3.5 0 0 0-3.5 3.5c0 1.1.5 1.8 1 2.5V9.5h5V8c.5-.7 1-1.4 1-2.5A3.5 3.5 0 0 0 12 2z" />
      {/* Bulb Base */}
      <path d="M10.5 11.5h3" />
      {/* Radiating Rays of Illumination */}
      <path d="M12 0.5v1" />
      <path d="M7 3.5 5.8 2.3" />
      <path d="M17 3.5l1.2-1.2" />
      {/* Open Book Center Binding / Spine */}
      <path d="M12 14v8" />
      {/* Open Book Left Page */}
      <path d="M12 15c-2.5-1.5-6-1.5-9.5 0v6c3.5-1.5 7-1.5 9.5 0" />
      {/* Open Book Right Page */}
      <path d="M12 15c2.5-1.5 6-1.5 9.5 0v6c-3.5-1.5-7-1.5-9.5 0" />
    </svg>
  );
}

export default EducationBookBulbIcon;
