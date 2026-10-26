import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import CompetitiveProgramming from '../components/CompetitiveProgramming';

export default function SkillsWindow() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('performance');

  const performanceMetrics = [
    { name: 'Distributed Systems & Microservices', val: 94, color: '#0078D4', desc: 'RabbitMQ, FFmpeg, HLS, Decoupled Architecture' },
    { name: 'Backend Engineering (FastAPI / Node.js)', val: 91, color: '#60CDFF', desc: 'Asynchronous APIs, High-throughput services' },
    { name: 'Algorithms & Problem Solving (LeetCode 2090+)', val: 93, color: '#FFA116', desc: 'Knight Tier, 950+ Problems, Top 2% Globally' },
    { name: 'Applied AI & LLM Tooling', val: 86, color: '#7C3AED', desc: 'LangGraph, LangChain, Schema-aware pipelines' },
    { name: 'Databases & Distributed Caching', val: 88, color: '#10B981', desc: 'Redis, PostgreSQL, MongoDB, Qdrant' },
    { name: 'DevOps & Containerization', val: 82, color: '#F59E0B', desc: 'Docker, AWS, BullMQ queues, Socket.IO' },
  ];

  return (
    <div className="taskmgr-window">
      {/* Top Navigation Tabs */}
      <div className="taskmgr-tabs">
        <button
          className={`taskmgr-tab ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          <span className="taskmgr-tab-icon">📈</span>
          <span>Performance &amp; Engine</span>
        </button>
        <button
          className={`taskmgr-tab ${activeTab === 'cp' ? 'active' : ''}`}
          onClick={() => setActiveTab('cp')}
        >
          <span className="taskmgr-tab-icon">🏆</span>
          <span>Competitive Programming &amp; DSA</span>
        </button>
        <button
          className={`taskmgr-tab ${activeTab === 'languages' ? 'active' : ''}`}
          onClick={() => setActiveTab('languages')}
        >
          <span className="taskmgr-tab-icon">⚙️</span>
          <span>Languages (Core)</span>
        </button>
        <button
          className={`taskmgr-tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          <span className="taskmgr-tab-icon">📦</span>
          <span>Frameworks &amp; Modules</span>
        </button>
      </div>

      <div className="taskmgr-body">
        {activeTab === 'performance' && (
          <div className="taskmgr-perf-panel">
            <div className="taskmgr-summary-bar">
              <div className="taskmgr-badge">
                <span className="live-indicator-dot" />
                <span>All Backend &amp; Algorithmic Services: <strong>Healthy &amp; Optimal</strong></span>
              </div>
              <div className="taskmgr-uptime">Total Stack Modules: {skills.languages.length + skills.tools.length}</div>
            </div>

            <div className="perf-metrics-grid">
              {performanceMetrics.map((m) => (
                <div key={m.name} className="perf-metric-card">
                  <div className="perf-card-header">
                    <span className="perf-card-title">{m.name}</span>
                    <span className="perf-card-val" style={{ color: m.color }}>{m.val}%</span>
                  </div>

                  <div className="perf-progress-track">
                    <div
                      className="perf-progress-fill"
                      style={{
                        width: `${m.val}%`,
                        background: `linear-gradient(90deg, ${m.color}88, ${m.color})`,
                      }}
                    />
                  </div>

                  <div className="perf-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cp' && (
          <div className="taskmgr-cp-panel">
            <CompetitiveProgramming compact={false} />
          </div>
        )}

        {activeTab === 'languages' && (
          <div className="taskmgr-services-panel">
            <table className="taskmgr-table">
              <thead>
                <tr>
                  <th>Language / Core</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {skills.languages.map((lang, idx) => (
                  <tr key={lang}>
                    <td className="table-name-cell">
                      <span className="service-icon">{idx === 0 ? '🐍' : idx === 1 ? '🟨' : idx === 2 ? '⚡' : '🗄️'}</span>
                      <span className="service-name">{lang}</span>
                    </td>
                    <td>
                      <span className="status-pill status-running">Running</span>
                    </td>
                    <td className="table-dim-cell">System Core</td>
                    <td>
                      <div className="mini-bar">
                        <div className="mini-bar-fill" style={{ width: `${95 - idx * 5}%` }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="taskmgr-modules-panel">
            <div className="modules-header-info">
              {skills.tools.length} Frameworks, Libraries &amp; Infrastructure Tools Loaded:
            </div>
            <div className="modules-chips-grid">
              {skills.tools.map((tool) => (
                <div key={tool} className="module-item-card">
                  <span className="module-bullet">❖</span>
                  <span className="module-title">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
