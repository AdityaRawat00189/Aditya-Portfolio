import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MailIcon, GitHubSvg, LinkedInSvg } from '../components/Icons';

export default function ContactWindow() {
  const { contact } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mail-window">
      {/* Mail Sidebar */}
      <div className="mail-sidebar">
        <div className="mail-compose-btn" onClick={() => setSent(false)}>
          <span>✏️</span>
          <span>New message</span>
        </div>

        <div className="mail-folder-list">
          <div className="mail-folder-item active">
            <span>📥</span>
            <span>Inbox</span>
            <span className="mail-count">1</span>
          </div>
          <div className="mail-folder-item">
            <span>📤</span>
            <span>Sent</span>
          </div>
        </div>

        <div className="mail-sidebar-title">Direct Profiles</div>
        <div className="mail-profile-links">
          <a
            href={`mailto:${contact.email}`}
            className="mail-profile-item"
            title="Send Email"
          >
            <MailIcon size={18} />
            <div className="mail-profile-text">
              <span className="mail-profile-label">Email</span>
              <span className="mail-profile-val">{contact.email}</span>
            </div>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mail-profile-item"
            title="GitHub"
          >
            <div className="mail-icon-badge" style={{ background: '#24292e' }}>
              <GitHubSvg size={14} color="#ffffff" />
            </div>
            <div className="mail-profile-text">
              <span className="mail-profile-label">GitHub</span>
              <span className="mail-profile-val">AdityaRawat00189</span>
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mail-profile-item"
            title="LinkedIn"
          >
            <div className="mail-icon-badge" style={{ background: '#0a66c2' }}>
              <LinkedInSvg size={14} color="#ffffff" />
            </div>
            <div className="mail-profile-text">
              <span className="mail-profile-label">LinkedIn</span>
              <span className="mail-profile-val">aditya-rawat</span>
            </div>
          </a>
        </div>
      </div>

      {/* Mail Content Pane */}
      <div className="mail-body">
        <div className="mail-header-bar">
          <h3 className="mail-header-title">Send a Direct Message</h3>
          <span className="mail-recipient-badge">To: {contact.email}</span>
        </div>

        {sent ? (
          <div className="mail-success-view">
            <div className="success-icon">✉️</div>
            <h4>Opening your default email client...</h4>
            <p>Your message has been formatted and prepared for Aditya Rawat.</p>
            <button className="mail-send-btn" onClick={() => setSent(false)}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="mail-form" onSubmit={handleSubmit}>
            <div className="mail-input-group">
              <label>Your Name:</label>
              <input
                type="text"
                className="mail-input"
                placeholder="e.g. John Doe / Tech Recruiter"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="mail-input-group">
              <label>Your Email:</label>
              <input
                type="email"
                className="mail-input"
                placeholder="name@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="mail-input-group">
              <label>Subject:</label>
              <input
                type="text"
                className="mail-input"
                placeholder="Opportunity / Collaboration / Distributed Systems"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className="mail-input-group flex-1">
              <label>Message:</label>
              <textarea
                className="mail-textarea"
                placeholder="Hi Aditya, I reviewed your distributed video processing platform and would like to discuss..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <div className="mail-actions">
              <button type="submit" className="mail-send-btn">
                <span>Send Message</span>
                <span>↗</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
