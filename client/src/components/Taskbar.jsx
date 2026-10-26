import React, { useState, useEffect } from 'react';
import {
  Win11Logo,
  SearchIcon,
  WifiIcon,
  VolumeIcon,
  BatteryIcon,
  BellIcon,
} from './Icons';

export default function Taskbar({
  windows,
  activeWindowId,
  onTaskbarClick,
  onToggleStart,
  isStartOpen,
  onToggleQuickSettings,
  isQuickSettingsOpen,
  onToggleCalendar,
  isCalendarOpen,
  onShowDesktop,
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (d) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const formatDate = (d) =>
    d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className="taskbar" role="navigation" aria-label="Windows 11 Taskbar">
      {/* Left side empty for centering balance */}
      <div className="taskbar-left" />

      {/* Center Windows 11 App Icons */}
      <div className="taskbar-center">
        {/* Windows Start Button */}
        <button
          className={`taskbar-btn taskbar-start-btn ${isStartOpen ? 'active' : ''}`}
          onClick={onToggleStart}
          title="Start"
          aria-label="Start Menu"
        >
          <Win11Logo size={20} />
        </button>

        {/* Search Bar Pill */}
        <button
          className="taskbar-search-pill"
          onClick={onToggleStart}
          title="Search"
          aria-label="Search"
        >
          <SearchIcon size={14} color="rgba(255,255,255,0.7)" />
          <span className="taskbar-search-text">Search</span>
        </button>

        {/* Task View Icon */}
        <button
          className="taskbar-btn taskbar-util-btn"
          title="Task View"
          onClick={onShowDesktop}
          aria-label="Task View"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="13" height="14" rx="2" stroke="white" strokeWidth="1.6" opacity="0.8"/>
            <rect x="9" y="5" width="13" height="14" rx="2" stroke="#60CDFF" strokeWidth="1.6"/>
          </svg>
        </button>

        {/* App Windows */}
        {windows.map((w) => {
          const isActive = activeWindowId === w.id && w.isOpen && !w.isMinimized;
          const isOpened = w.isOpen;

          return (
            <button
              key={w.id}
              className={`taskbar-btn ${isActive ? 'focused' : ''} ${isOpened ? 'opened' : ''}`}
              onClick={() => onTaskbarClick(w.id)}
              title={w.label}
              aria-label={`Open ${w.label}`}
            >
              <span className="taskbar-btn-icon">{w.icon}</span>

              {/* Windows 11 Running Indicator Bar */}
              {isOpened && (
                <span className={`taskbar-indicator ${isActive ? 'active-bar' : 'min-dot'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Right Side System Tray */}
      <div className="taskbar-right">
        {/* Hidden Icons Arrow */}
        <button className="tray-item tray-icon-btn" title="Show hidden icons">
          <span>⌃</span>
        </button>

        {/* Language */}
        <div className="tray-item tray-text">ENG</div>

        {/* Quick Settings Pill (WiFi + Volume + Battery) */}
        <button
          className={`tray-item tray-pill ${isQuickSettingsOpen ? 'active' : ''}`}
          onClick={onToggleQuickSettings}
          title="Internet, Sound, Battery"
        >
          <WifiIcon size={14} />
          <VolumeIcon size={14} />
          <BatteryIcon size={16} />
        </button>

        {/* Clock & Date */}
        <button
          className={`tray-item tray-clock ${isCalendarOpen ? 'active' : ''}`}
          onClick={onToggleCalendar}
          title={dateDateTooltip(time)}
        >
          <div className="tray-time">{formatTime(time)}</div>
          <div className="tray-date">{formatDate(time)}</div>
        </button>

        {/* Notification Bell */}
        <button
          className="tray-item tray-icon-btn tray-bell"
          onClick={onToggleCalendar}
          title="Notifications"
        >
          <BellIcon size={14} />
          <span className="tray-badge">1</span>
        </button>

        {/* Windows 11 Show Desktop vertical line */}
        <div
          className="tray-show-desktop"
          onClick={onShowDesktop}
          title="Show Desktop"
        />
      </div>
    </div>
  );
}

function dateDateTooltip(d) {
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
