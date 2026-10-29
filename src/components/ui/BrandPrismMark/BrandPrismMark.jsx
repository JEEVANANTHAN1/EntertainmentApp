import React from 'react';

/**
 * BrandPrismMark
 * Luxury Geometric Prism Emblem for Lumina Entertainments
 * Features an emerald-cut faceted contour, gold gradient strokes, an architectural 'L' beam,
 * and an illuminated brilliance star spark.
 */
export const BrandPrismMark = ({ size = 42, className = '' }) => {
  return (
    <svg
      className={`brand-prism-mark ${className}`}
      viewBox="0 0 44 44"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="prismGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e5c9" />
          <stop offset="45%" stopColor="#c9a96e" />
          <stop offset="100%" stopColor="#8c6d32" />
        </linearGradient>
        <linearGradient id="prismGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f4e46" />
          <stop offset="100%" stopColor="#0e2320" />
        </linearGradient>
      </defs>

      {/* Outer Faceted Geometric Diamond / Octagon Frame */}
      <polygon
        points="22,2 38,9 42,25 31,40 13,40 2,25 6,9"
        fill="url(#prismGreenGrad)"
        stroke="url(#prismGoldGrad)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />

      {/* Precision Internal Facet Lines */}
      <polygon
        points="22,6 35,12 38,24 29,37 15,37 6,24 9,12"
        fill="none"
        stroke="rgba(201, 169, 110, 0.4)"
        strokeWidth="0.8"
      />

      {/* Architectural Faceted 'L' Monogram */}
      <path
        d="M17 11V31H31L29 27H21V11H17Z"
        fill="url(#prismGoldGrad)"
      />

      {/* Lumina Illumination Star Spark */}
      <path
        d="M28 14L29.5 18L33.5 19.5L29.5 21L28 25L26.5 21L22.5 19.5L26.5 18L28 14Z"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <circle cx="28" cy="19.5" r="1.2" fill="#e8d2a7" />
    </svg>
  );
};

export default BrandPrismMark;

