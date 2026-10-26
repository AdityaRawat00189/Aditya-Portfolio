import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GitHubSvg, FolderIcon } from '../components/Icons';

export default function ProjectsWindow() {
  const { projects } = portfolioData;
  const [filterTech, setFilterTech] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique tech tags
  const allTechs = ['All', 'FastAPI', 'Node.js', 'Redis', 'RabbitMQ', 'LangGraph', 'Docker'];

  const filteredProjects = filterTech === 'All'
    ? projects
    : projects.filter((p) => p.tech.some((t) => t.toLowerCase().includes(filterTech.toLowerCase())));

  return (
    <div className="explorer-window">
      {/* File Explorer Address Bar & Navigation */}
      <div className="explorer-toolbar">
        <div className="explorer-nav-arrows">
          <button className="exp-nav-btn" disabled>‹</button>
          <button className="exp-nav-btn" disabled>›</button>
          <button className="exp-nav-btn">↑</button>
        </div>

        {/* Breadcrumb Path */}
        <div className="explorer-path-bar">
          <FolderIcon size={16} />
          <span className="exp-path-segment">This PC</span>
          <span className="exp-path-sep">&gt;</span>
          <span className="exp-path-segment">Aditya Rawat</span>
          <span className="exp-path-sep">&gt;</span>
          <span className="exp-path-segment current">Projects</span>
        </div>

        <div className="explorer-item-count">
          {filteredProjects.length} items
        </div>
      </div>

      {/* Filter / Category Ribbon */}
      <div className="explorer-ribbon">
        <span className="ribbon-label">Filter Stack:</span>
        <div className="ribbon-chips">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`ribbon-chip ${filterTech === tech ? 'active' : ''}`}
              onClick={() => setFilterTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="explorer-body">
        {/* Left Tree Sidebar */}
        <div className="explorer-tree-sidebar">
          <div className="tree-section-title">Quick access</div>
          <div className="tree-item active">
            <span className="tree-icon">📂</span>
            <span>All Projects ({projects.length})</span>
          </div>
          <div className="tree-item" onClick={() => window.open(portfolioData.contact.github, '_blank')}>
            <span className="tree-icon">🐙</span>
            <span>GitHub Profile</span>
          </div>
          <div className="tree-item" onClick={() => window.open(portfolioData.contact.linkedin, '_blank')}>
            <span className="tree-icon">💼</span>
            <span>LinkedIn</span>
          </div>

          <div className="tree-section-title" style={{ marginTop: 16 }}>Repositories</div>
          {projects.map((p) => (
            <div
              key={p.id}
              className={`tree-item ${selectedProject === p.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(p.id)}
            >
              <span className="tree-icon">{p.icon}</span>
              <span className="tree-text-truncate">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Right Project Grid */}
        <div className="explorer-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`explorer-card ${selectedProject === proj.id ? 'selected' : ''}`}
              onClick={() => setSelectedProject(proj.id)}
            >
              <div
                className="card-accent-bar"
                style={{ background: proj.color || '#0078D4' }}
              />

              <div className="card-top-row">
                <div className="card-icon-bubble">{proj.icon}</div>
                <div className="card-title-group">
                  <h3 className="card-project-title">{proj.name}</h3>
                  <div className="card-project-sub">{proj.subtitle}</div>
                </div>
              </div>

              <p className="card-description">{proj.description}</p>

              <div className="card-tech-chips">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="card-footer-action">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-github-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHubSvg size={15} />
                  <span>View Repository on GitHub &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
