import React from "react";
import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

/**
 * SolutionHandBulbIcon
 *
 * Semantic icon for "SOLUSI YANG DIBANGUN" / "Solusi yang Dihadirkan".
 * Depicts a clean, recognizable open hand supporting an illuminated lightbulb,
 * symbolizing delivering real-world problem solving, creative ideas, and practical innovation.
 *
 * System Specs:
 * - Grid: 24x24 viewBox
 * - Stroke: 2px outline, round caps and joins (Feather / Lucide compatible)
 * - Color: Inherits `currentColor` (optimized for brand orange #F45B1A)
 */
export function SolutionHandBulbIcon({
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
      {/* Lightbulb Dome & Neck (Idea / Innovation Focus) */}
      <path d="M12 2a4 4 0 0 0-4 4c0 1.2.6 2.2 1.3 3v1.8h5.4V9c.7-.8 1.3-1.8 1.3-3a4 4 0 0 0-4-4z" />
      {/* Bulb Screw Base */}
      <path d="M10 12.8h4" />
      {/* Subtle Light Rays */}
      <path d="M12 0.5v1" />
      <path d="M6.5 3.5l.8.8" />
      <path d="M17.5 3.5l-.8.8" />
      {/* Supporting Hand Cradle Underneath */}
      <path d="M2 17.5c2.5-1 5-1.5 7.5-1.5h3c1.5 0 2.8.6 3.6 1.6l2 2.2a1.3 1.3 0 0 1-1.9 1.8l-1.9-2c-.5-.5-1.1-.8-1.8-.8H8.5c-2 0-4 .4-6.5 1.5" />
    </svg>
  );
}

export default SolutionHandBulbIcon;
