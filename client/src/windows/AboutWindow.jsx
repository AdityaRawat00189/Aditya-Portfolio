import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ThisPCIcon, GitHubSvg, LinkedInSvg, MailIcon } from '../components/Icons';
import CompetitiveProgramming from '../components/CompetitiveProgramming';

export default function AboutWindow() {
  const { name, title, bio, contact, projects, skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('system');

  return (
    <div className="settings-window">
      {/* Settings Left Sidebar */}
      <div className="settings-sidebar">
        <div className="settings-sidebar-header">
          <div className="settings-user-badge">
            <div className="settings-avatar">AR</div>
            <div className="settings-user-info">
              <div className="settings-user-name">{name}</div>
              <div className="settings-user-email">{contact.email}</div>
            </div>
          </div>
        </div>

        <div className="settings-nav-group">
          <button
            className={`settings-nav-item ${activeTab === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTab('system')}
          >
            <span className="settings-nav-icon">💻</span>
            <span>System &amp; About</span>
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'cp' ? 'active' : ''}`}
            onClick={() => setActiveTab('cp')}
          >
            <span className="settings-nav-icon">🏆</span>
            <span>Algorithms &amp; CP</span>
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <span className="settings-nav-icon">⚙️</span>
            <span>Technical Specs</span>
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'bio' ? 'active' : ''}`}
            onClick={() => setActiveTab('bio')}
          >
            <span className="settings-nav-icon">📝</span>
            <span>Full Bio &amp; Vision</span>
          </button>
        </div>
      </div>

      {/* Settings Main Content Area */}
      <div className="settings-content">
        {/* Device Hero Banner */}
        <div className="settings-hero-card">
          <ThisPCIcon size={54} />
          <div className="settings-hero-details">
            <h2 className="settings-hero-title">ADITYA-RAWAT-PC</h2>
            <div className="settings-hero-subtitle">{title}</div>
            <div className="settings-hero-tags">
              <span className="settings-tag">⚡ Backend Engineer</span>
              <span className="settings-tag">🤖 Applied AI</span>
              <span className="settings-tag">🏆 2090+ LeetCode Knight</span>
            </div>
          </div>
        </div>

        {activeTab === 'system' && (
          <>
            {/* Quick Summary Card */}
            <div className="settings-card">
              <h3 className="settings-card-title">Profile Overview</h3>
              <p className="settings-bio-text">{bio}</p>
            </div>

            {/* Quick Metrics */}
            <div className="settings-stats-row">
              <div className="settings-stat-box">
                <div className="stat-number">2090+</div>
                <div className="stat-caption">LeetCode Rating (Knight)</div>
              </div>
              <div className="settings-stat-box">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-caption">Distributed Systems Projects</div>
              </div>
              <div className="settings-stat-box">
                <div className="stat-number">950+</div>
                <div className="stat-caption">Algorithmic Problems Solved</div>
              </div>
            </div>

            {/* Competitive Programming Cards Preview */}
            <CompetitiveProgramming compact={true} />

            {/* Quick Links */}
            <div className="settings-card">
              <h3 className="settings-card-title">Connect &amp; Profiles</h3>
              <div className="settings-links-row">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="settings-action-btn"
                >
                  <GitHubSvg size={16} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="settings-action-btn btn-linkedin"
                >
                  <LinkedInSvg size={16} color="#ffffff" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="settings-action-btn btn-mail"
                >
                  <MailIcon size={16} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </>
        )}

        {activeTab === 'cp' && (
          <div className="settings-cp-tab-pane">
            <CompetitiveProgramming compact={false} />
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="settings-card">
            <h3 className="settings-card-title">Engineering Specifications</h3>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-name">Core Focus:</span>
                <span className="spec-val">Distributed Video Processing, Asynchronous Job Pipelines, LLM Tooling</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Algorithmic Standing:</span>
                <span className="spec-val">LeetCode 2090+ (Knight, Top 2%), CodeChef 1600+ (3★), Codeforces 1400+ (Specialist)</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Languages:</span>
                <span className="spec-val">{skills.languages.join(', ')}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Frameworks &amp; Backend:</span>
                <span className="spec-val">FastAPI, Node.js / Express, LangGraph, LangChain, Hugging Face</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Databases &amp; Queues:</span>
                <span className="spec-val">PostgreSQL, MongoDB, Redis, RabbitMQ, BullMQ, Qdrant</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">DevOps &amp; Infrastructure:</span>
                <span className="spec-val">Docker, AWS, Socket.IO, FFmpeg, HLS Streaming</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bio' && (
          <div className="settings-card">
            <h3 className="settings-card-title">About Me</h3>
            <div className="bio-paragraph">
              {bio}
            </div>
            <div className="bio-highlight-box">
              <strong>Core Philosophy:</strong> Building scalable, reliable, and fault-tolerant software systems with clean architecture, robust asynchronous workers, and modern AI intelligence.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
