import React, { useState } from 'react';
import {
  ThisPCIcon,
  FolderIcon,
  SettingsIcon,
  EducationIcon,
  MailIcon,
  TerminalIcon,
  GitHubSvg,
  LinkedInSvg,
  PowerIcon,
  SearchIcon,
  LeetCodeSvg,
  TrophyIcon,
} from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function StartMenu({ isOpen, onClose, onOpenWindow }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [powerMenuOpen, setPowerMenuOpen] = useState(false);

  if (!isOpen) return null;

  const pinnedApps = [
    { id: 'about', name: 'About Me', icon: <ThisPCIcon size={32} /> },
    { id: 'projects', name: 'Projects', icon: <FolderIcon size={32} /> },
    { id: 'cp', name: 'CP & DSA', icon: <TrophyIcon size={32} /> },
    { id: 'skills', name: 'Skills & Stack', icon: <SettingsIcon size={32} /> },
    { id: 'education', name: 'Education', icon: <EducationIcon size={32} /> },
    { id: 'contact', name: 'Contact Me', icon: <MailIcon size={32} /> },
    { id: 'terminal', name: 'Terminal', icon: <TerminalIcon size={32} /> },
    {
      id: 'leetcode-ext',
      name: 'LeetCode',
      icon: (
        <div className="start-app-icon-badge" style={{ background: '#2B2B2B' }}>
          <LeetCodeSvg size={20} />
        </div>
      ),
      external: 'https://leetcode.com/u/Aditya_Rawat0101/',
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: (
        <div className="start-app-icon-badge" style={{ background: '#24292e' }}>
          <GitHubSvg size={24} color="#ffffff" />
        </div>
      ),
      external: portfolioData.contact.github,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: (
        <div className="start-app-icon-badge" style={{ background: '#0a66c2' }}>
          <LinkedInSvg size={24} color="#ffffff" />
        </div>
      ),
      external: portfolioData.contact.linkedin,
    },
  ];

  const filteredApps = pinnedApps.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recommendedItems = [
    {
      id: 'cp',
      title: 'LeetCode 2090+ (Knight, 950+ Solved)',
      subtitle: 'CodeChef 1600+ (3★) · Codeforces (Specialist)',
      icon: '🏆',
    },
    {
      id: 'projects',
      title: 'VideX - Video Processing Platform',
      subtitle: 'Node.js, RabbitMQ, FFmpeg, HLS',
      icon: '🎬',
    },
    {
      id: 'projects',
      title: 'QueryWhisper - NL to SQL',
      subtitle: 'LangGraph, FastAPI, Redis, Qdrant',
      icon: '🧠',
    },
    {
      id: 'projects',
      title: 'ResearchOS - Paper Generator',
      subtitle: 'Python, FastAPI, React.js',
      icon: '📄',
    },
    {
      id: 'projects',
      title: 'CampusLink - Rental Marketplace',
      subtitle: 'Redis, BullMQ, Socket.IO',
      icon: '🏠',
    },
  ];

  const handleAppClick = (app) => {
    if (app.external) {
      window.open(app.external, '_blank');
    } else {
      onOpenWindow(app.id);
    }
    onClose();
  };

  return (
    <div className="start-menu-backdrop" onClick={onClose}>
      <div className="start-menu" onClick={(e) => e.stopPropagation()}>
        {/* Search Bar */}
        <div className="start-search-bar">
          <SearchIcon size={16} color="rgba(255,255,255,0.6)" />
          <input
            type="text"
            className="start-search-input"
            placeholder="Type here to search apps, projects, skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        {/* Pinned Section */}
        <div className="start-section-header">
          <span className="start-section-title">Pinned</span>
          <button className="start-all-apps-btn" onClick={() => onOpenWindow('projects')}>
            All apps &gt;
          </button>
        </div>

        <div className="start-pinned-grid">
          {filteredApps.map((app) => (
            <button
              key={app.id}
              className="start-pinned-item"
              onClick={() => handleAppClick(app)}
            >
              <div className="start-pinned-icon">{app.icon}</div>
              <span className="start-pinned-label">{app.name}</span>
            </button>
          ))}
        </div>

        {/* Recommended Section */}
        <div className="start-section-header" style={{ marginTop: 14 }}>
          <span className="start-section-title">Recommended</span>
          <span className="start-section-subtitle">Recent Projects</span>
        </div>

        <div className="start-recommended-list">
          {recommendedItems.map((item, idx) => (
            <button
              key={idx}
              className="start-rec-item"
              onClick={() => {
                onOpenWindow(item.id);
                onClose();
              }}
            >
              <span className="start-rec-icon">{item.icon}</span>
              <div className="start-rec-details">
                <div className="start-rec-title">{item.title}</div>
                <div className="start-rec-sub">{item.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* User Footer */}
        <div className="start-footer">
          <div className="start-user-info" onClick={() => { onOpenWindow('about'); onClose(); }}>
            <div className="start-user-avatar">AR</div>
            <div className="start-user-text">
              <div className="start-user-name">{portfolioData.name}</div>
              <div className="start-user-role">Distributed Systems & AI</div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <button
              className="start-power-btn"
              onClick={() => setPowerMenuOpen(!powerMenuOpen)}
              title="Power Options"
            >
              <PowerIcon size={18} />
            </button>

            {powerMenuOpen && (
              <div className="start-power-dropdown">
                <button
                  className="start-power-option"
                  onClick={() => {
                    alert('Locked Aditya Rawat PC. Click OK to unlock!');
                    setPowerMenuOpen(false);
                  }}
                >
                  🔒 Lock
                </button>
                <button
                  className="start-power-option"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  🔄 Restart
                </button>
                <button
                  className="start-power-option"
                  onClick={() => {
                    alert('Shutting down... Just kidding! Thanks for visiting my portfolio!');
                    setPowerMenuOpen(false);
                  }}
                >
                  ⏻ Shut Down
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
