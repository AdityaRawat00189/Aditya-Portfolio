import React from 'react';

export default function Wallpaper() {
  return (
    <div className="win-wallpaper-container">
      {/* Windows 11 Signature Dark Bloom Base */}
      <div className="bloom-bg" />
      
      {/* Multi-layered Volumetric Silk Glows with organic breathing motion */}
      <div className="bloom-glow bloom-glow-cyan" />
      <div className="bloom-glow bloom-glow-blue" />
      <div className="bloom-glow bloom-glow-purple" />
      <div className="bloom-glow bloom-glow-center" />

      {/* SVG Petal Mesh Geometry for crisp Windows 11 Silk Folds */}
      <svg className="bloom-mesh" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <radialGradient id="bloomPetal1" cx="52%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#0078D4" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#4F46E5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloomPetal2" cx="44%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#9333EA" stopOpacity="0.5" />
            <stop offset="45%" stopColor="#6366F1" stopOpacity="0.25" />
            <stop offset="85%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#818CF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60CDFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0078D4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Deep Silk Layer 1 */}
        <path
          d="M 640 780 C 820 480, 1140 450, 1340 690 C 1180 850, 840 880, 640 780 Z"
          fill="url(#bloomPetal1)"
          filter="blur(36px)"
        />
        {/* Violet Silk Layer 2 */}
        <path
          d="M 580 620 C 760 380, 1180 340, 1320 590 C 1120 740, 780 760, 580 620 Z"
          fill="url(#bloomPetal2)"
          filter="blur(45px)"
        />
        {/* Crisp Ribbon Curve 1 */}
        <path
          d="M 720 460 C 920 300, 1220 380, 1240 660 C 1060 580, 860 560, 720 460 Z"
          stroke="url(#silkSheen)"
          strokeWidth="3.5"
          filter="blur(10px)"
        />
        {/* Specular Ridge 2 */}
        <path
          d="M 800 500 C 980 360, 1170 430, 1180 630"
          stroke="url(#silkHighlight)"
          strokeWidth="2"
          filter="blur(3px)"
        />
        {/* Soft Ambient Fold */}
        <path
          d="M 860 540 C 1020 420, 1120 480, 1140 600"
          stroke="#E0F2FE"
          strokeWidth="1.2"
          opacity="0.65"
          filter="blur(2px)"
        />
      </svg>

      {/* Subtle vignette for depth */}
      <div className="bloom-vignette" />
    </div>
  );
}
