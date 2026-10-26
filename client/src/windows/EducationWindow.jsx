import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { EducationIcon } from '../components/Icons';

export default function EducationWindow() {
  const { education } = portfolioData;

  const focusAreas = [
    { title: 'Distributed Systems & Microservices Architecture', icon: '📡', desc: 'Asynchronous queues, high throughput, and decoupled services.' },
    { title: 'Applied AI & Schema-Aware Agentic Pipelines', icon: '🤖', desc: 'LangGraph, LangChain, semantic retrieval, and self-correcting agents.' },
    { title: 'Database Optimization & Distributed Caching', icon: '⚡', desc: 'PostgreSQL, Redis TTL strategies, BullMQ, and event-driven patterns.' },
    { title: 'Competitive Programming & System Design', icon: '🏆', desc: 'Data structures, algorithm optimization, and production-grade architectures.' },
  ];

  return (
    <div className="edu-window">
      {/* Education Header Banner */}
      <div className="edu-hero">
        <EducationIcon size={48} />
        <div className="edu-hero-text">
          <h2 className="edu-hero-title">Academic Background</h2>
          <div className="edu-hero-sub">Computer Science &amp; Engineering</div>
        </div>
      </div>

      {/* Main Degree Card */}
      {education.map((edu, i) => (
        <div key={i} className="edu-main-card">
          <div className="edu-badge-icon">🎓</div>
          <div className="edu-details">
            <h3 className="edu-degree-title">{edu.degree}</h3>
            <div className="edu-institution-name">{edu.institution}</div>
            <div className="edu-timeline">
              <span className="timeline-badge">📅 {edu.year}</span>
              <span className="timeline-badge status">Active Undergrad</span>
            </div>
          </div>
        </div>
      ))}

      {/* Focus & Research Areas */}
      <div className="edu-section-title">Areas of Continuous Study &amp; Engineering</div>
      <div className="edu-focus-grid">
        {focusAreas.map((f) => (
          <div key={f.title} className="edu-focus-card">
            <span className="focus-card-icon">{f.icon}</span>
            <div className="focus-card-info">
              <h4 className="focus-card-title">{f.title}</h4>
              <p className="focus-card-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
