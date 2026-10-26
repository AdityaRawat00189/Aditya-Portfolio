import React from 'react';
import { AwardIcon } from '../components/Icons';

export default function CertificatesWindow() {
  return (
    <div className="cert-window">
      <div className="cert-hero">
        <AwardIcon size={52} />
        <div className="cert-hero-info">
          <h2 className="cert-title">Certifications &amp; Accreditations</h2>
          <div className="cert-sub">Verified Technical Badges</div>
        </div>
      </div>

      <div className="cert-card-main">
        <div className="cert-status-badge">In Progress · Continuous Learning</div>
        <h3 className="cert-vault-head">Certifications Vault</h3>
        <p className="cert-vault-text">
          Currently focusing on deep-dive cloud architectures and AI engineering specializations.
        </p>

        <div className="cert-grid">
          {[
            { name: 'AWS Solutions Architect & Cloud Operations', status: 'In Preparation', color: '#FF9900' },
            { name: 'LangChain & LangGraph Generative AI Specialization', status: 'Hands-on Projects Completed', color: '#7C3AED' },
            { name: 'Distributed Systems & High-Throughput Processing', status: 'Specialized (VideX & RabbitMQ)', color: '#0078D4' },
          ].map((c) => (
            <div key={c.name} className="cert-item">
              <div className="cert-item-icon" style={{ color: c.color }}>🏅</div>
              <div className="cert-item-text">
                <div className="cert-item-name">{c.name}</div>
                <div className="cert-item-status" style={{ color: c.color }}>{c.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
