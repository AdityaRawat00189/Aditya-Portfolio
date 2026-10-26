import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { LeetCodeSvg, CodeChefSvg, CodeforcesSvg } from './Icons';

export default function CompetitiveProgramming({ compact = false }) {
  const { competitiveProgramming } = portfolioData;

  const getPlatformIcon = (id) => {
    switch (id) {
      case 'leetcode':
        return <LeetCodeSvg size={26} />;
      case 'codechef':
        return <CodeChefSvg size={26} />;
      case 'codeforces':
        return <CodeforcesSvg size={26} />;
      default:
        return <span>🏆</span>;
    }
  };

  return (
    <div className={`cp-section ${compact ? 'cp-compact' : ''}`}>
      <div className="cp-section-header">
        <div className="cp-title-wrap">
          <span className="cp-header-badge">ALGORITHMS &amp; DATA STRUCTURES</span>
          <h3 className="cp-main-title">Competitive Programming Highlights</h3>
        </div>
        <div className="cp-header-sub">
          Continuous algorithmic training &amp; high-percentile contest finishes
        </div>
      </div>

      <div className="cp-cards-grid">
        {competitiveProgramming.map((cp) => (
          <a
            key={cp.id}
            href={cp.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
            style={{
              '--card-accent': cp.accentColor,
              '--card-glow': cp.bgGlow,
              '--card-border': cp.borderColor,
            }}
            title={`View Aditya's ${cp.platform} Profile`}
            aria-label={`${cp.platform} profile: ${cp.rank}, ${cp.rating} rating`}
          >
            {/* Top Row: Icon + Platform & Tag */}
            <div className="cp-card-top">
              <div className="cp-icon-wrap" style={{ background: cp.bgGlow }}>
                {getPlatformIcon(cp.id)}
              </div>
              <div className="cp-platform-info">
                <span className="cp-platform-name">{cp.platform}</span>
                <span className="cp-tag" style={{ color: cp.accentColor, borderColor: cp.borderColor }}>
                  {cp.tag}
                </span>
              </div>
              <div className="cp-arrow-icon" aria-hidden="true">↗</div>
            </div>

            {/* Metric Row: Primary Rating */}
            <div className="cp-rating-row">
              <div className="cp-rating-val" style={{ color: cp.accentColor }}>
                {cp.rating}
              </div>
              <div className="cp-rating-label">Contest Rating</div>
            </div>

            {/* Badges / Highlights */}
            <div className="cp-badges-row">
              <span className="cp-metric-pill rank">
                <span className="pill-dot" style={{ background: cp.accentColor }} />
                {cp.rank}
              </span>

              <span className="cp-metric-pill">
                {cp.problemsSolved}
              </span>

              <span className="cp-metric-pill highlight">
                {cp.percentile}
              </span>
            </div>

            {/* Card Footer Link Hint */}
            <div className="cp-card-footer">
              <span className="cp-footer-link">Verify Profile on {cp.platform} &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
