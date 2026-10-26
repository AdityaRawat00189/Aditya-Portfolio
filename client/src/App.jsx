import React, { useState, useCallback, useEffect } from 'react';
import Wallpaper from './components/Wallpaper';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import StartMenu from './components/StartMenu';
import { QuickSettingsFlyout, CalendarFlyout } from './components/ActionCenter';
import ContextMenu from './components/ContextMenu';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import EducationWindow from './windows/EducationWindow';
import ContactWindow from './windows/ContactWindow';
import CertificatesWindow from './windows/CertificatesWindow';
import TerminalWindow from './windows/TerminalWindow';
import CPWindow from './windows/CPWindow';
import {
  ThisPCIcon,
  FolderIcon,
  SettingsIcon,
  EducationIcon,
  MailIcon,
  AwardIcon,
  TerminalIcon,
  GitHubSvg,
  LinkedInSvg,
  LeetCodeSvg,
  TrophyIcon,
} from './components/Icons';

/* ── Window Definitions ─────────────────────────────────── */
const WINDOW_DEFS = [
  {
    id: 'about',
    label: 'This PC',
    taskbarLabel: 'About Me',
    icon: <ThisPCIcon size={20} />,
    desktopIcon: <ThisPCIcon size={44} />,
    title: 'Settings – System > About (Aditya Rawat)',
    initialPosition: { x: 120, y: 40 },
    initialSize: { w: 780, h: 540 },
  },
  {
    id: 'projects',
    label: 'Projects',
    taskbarLabel: 'Projects',
    icon: <FolderIcon size={20} />,
    desktopIcon: <FolderIcon size={44} />,
    title: 'File Explorer – Projects (Distributed Systems & AI)',
    initialPosition: { x: 160, y: 50 },
    initialSize: { w: 840, h: 580 },
  },
  {
    id: 'cp',
    label: 'CP & DSA',
    taskbarLabel: 'CP & DSA',
    icon: <TrophyIcon size={20} />,
    desktopIcon: <TrophyIcon size={44} />,
    title: 'Competitive Programming & DSA – LeetCode (2090+ Knight), CodeChef, Codeforces',
    initialPosition: { x: 180, y: 65 },
    initialSize: { w: 820, h: 560 },
  },
  {
    id: 'skills',
    label: 'Task Manager',
    taskbarLabel: 'Skills & Stack',
    icon: <SettingsIcon size={20} />,
    desktopIcon: <SettingsIcon size={44} />,
    title: 'Task Manager – Performance & Stack Services',
    initialPosition: { x: 200, y: 60 },
    initialSize: { w: 720, h: 530 },
  },
  {
    id: 'education',
    label: 'Education',
    taskbarLabel: 'Education',
    icon: <EducationIcon size={20} />,
    desktopIcon: <EducationIcon size={44} />,
    title: 'Education & Credentials – GL Bajaj B.Tech CSE',
    initialPosition: { x: 180, y: 70 },
    initialSize: { w: 680, h: 520 },
  },
  {
    id: 'contact',
    label: 'Mail',
    taskbarLabel: 'Contact Me',
    icon: <MailIcon size={20} />,
    desktopIcon: <MailIcon size={44} />,
    title: 'Windows Mail – Message Aditya Rawat',
    initialPosition: { x: 220, y: 60 },
    initialSize: { w: 760, h: 550 },
  },
  {
    id: 'terminal',
    label: 'Terminal',
    taskbarLabel: 'PowerShell',
    icon: <TerminalIcon size={20} />,
    desktopIcon: <TerminalIcon size={44} />,
    title: 'Windows PowerShell (Administrator)',
    initialPosition: { x: 140, y: 80 },
    initialSize: { w: 740, h: 480 },
  },
  {
    id: 'certificates',
    label: 'Certificates',
    taskbarLabel: 'Certificates',
    icon: <AwardIcon size={20} />,
    desktopIcon: <AwardIcon size={44} />,
    title: 'Certificates & Accreditations Vault',
    initialPosition: { x: 240, y: 90 },
    initialSize: { w: 640, h: 480 },
  },
];

/* ── Windows 11 Desktop Lock / Welcome Screen ────────────── */
function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const dateStr = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="win11-lock-screen" onClick={onUnlock}>
      <div className="lock-time-box">
        <div className="lock-time">{timeStr}</div>
        <div className="lock-date">{dateStr}</div>
      </div>

      <div className="lock-user-box">
        <div className="lock-avatar">AR</div>
        <div className="lock-username">Aditya Rawat</div>
        <div className="lock-userrole">Backend Developer &middot; Distributed Systems</div>
        <button className="lock-signin-btn" onClick={(e) => { e.stopPropagation(); onUnlock(); }}>
          Sign In
        </button>
      </div>

      <div className="lock-hint">Click anywhere or press Enter to enter desktop</div>
    </div>
  );
}

export default function App() {
  const [locked, setLocked] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Context Menu State
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  // Window states (start with 'about' and 'projects' open for immediate engagement!)
  const [windowStates, setWindowStates] = useState({
    about: { isOpen: true, isMinimized: false },
    projects: { isOpen: true, isMinimized: false },
    cp: { isOpen: false, isMinimized: false },
    skills: { isOpen: false, isMinimized: false },
    education: { isOpen: false, isMinimized: false },
    contact: { isOpen: false, isMinimized: false },
    terminal: { isOpen: false, isMinimized: false },
    certificates: { isOpen: false, isMinimized: false },
  });

  const [focusStack, setFocusStack] = useState(['about', 'projects']);

  // Close flyouts when clicking anywhere
  const closeAllFlyouts = useCallback(() => {
    setIsStartOpen(false);
    setIsQuickSettingsOpen(false);
    setIsCalendarOpen(false);
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);

  const openWindow = useCallback((id) => {
    setWindowStates((prev) => ({
      ...prev,
      [id]: { isOpen: true, isMinimized: false },
    }));
    setFocusStack((prev) => [...prev.filter((x) => x !== id), id]);
    closeAllFlyouts();
  }, [closeAllFlyouts]);

  const closeWindow = useCallback((id) => {
    setWindowStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
    setFocusStack((prev) => prev.filter((x) => x !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindowStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
    setFocusStack((prev) => prev.filter((x) => x !== id));
  }, []);

  const focusWindow = useCallback((id) => {
    setWindowStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: false },
    }));
    setFocusStack((prev) => [...prev.filter((x) => x !== id), id]);
    closeAllFlyouts();
  }, [closeAllFlyouts]);

  const handleTaskbarClick = useCallback(
    (id) => {
      const state = windowStates[id];
      if (!state.isOpen) {
        openWindow(id);
      } else if (state.isMinimized) {
        focusWindow(id);
      } else if (focusStack[focusStack.length - 1] === id) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    },
    [windowStates, focusStack, openWindow, focusWindow, minimizeWindow]
  );

  const handleShowDesktop = useCallback(() => {
    const anyOpen = Object.values(windowStates).some((w) => w.isOpen && !w.isMinimized);
    if (anyOpen) {
      // Minimize all
      setWindowStates((prev) => {
        const next = {};
        for (const k in prev) next[k] = { ...prev[k], isMinimized: true };
        return next;
      });
    } else {
      // Restore all that were open
      setWindowStates((prev) => {
        const next = {};
        for (const k in prev) next[k] = { ...prev[k], isMinimized: false };
        return next;
      });
    }
  }, [windowStates]);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
  };

  const activeWindowId = focusStack[focusStack.length - 1];

  const taskbarWindows = WINDOW_DEFS.map((w) => ({
    id: w.id,
    label: w.taskbarLabel,
    icon: w.icon,
    isOpen: windowStates[w.id]?.isOpen,
    isMinimized: windowStates[w.id]?.isMinimized,
  }));

  const renderWindowContent = (id) => {
    switch (id) {
      case 'about':
        return <AboutWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'cp':
        return <CPWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'education':
        return <EducationWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'terminal':
        return <TerminalWindow onOpenWindow={openWindow} />;
      case 'certificates':
        return <CertificatesWindow />;
      default:
        return null;
    }
  };

  return (
    <>
      {locked && <LockScreen onUnlock={() => setLocked(false)} />}

      <div
        className="win11-desktop"
        onClick={closeAllFlyouts}
        onContextMenu={handleContextMenu}
      >
        {/* Windows 11 Signature Dark Bloom Wallpaper */}
        <Wallpaper />

        {/* Desktop Icons */}
        <div className="win11-desktop-icons">
          {WINDOW_DEFS.map((w) => (
            <div
              key={w.id}
              className={`desktop-shortcut ${windowStates[w.id]?.isOpen ? 'active-shortcut' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                openWindow(w.id);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                openWindow(w.id);
              }}
            >
              <div className="shortcut-icon-container">{w.desktopIcon}</div>
              <span className="shortcut-label">{w.label}</span>
            </div>
          ))}

          {/* External Profile Shortcuts */}
          <div
            className="desktop-shortcut"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://github.com/AdityaRawat00189', '_blank');
            }}
          >
            <div className="shortcut-icon-container">
              <div className="ext-icon-badge" style={{ background: '#24292e' }}>
                <GitHubSvg size={30} color="#ffffff" />
              </div>
            </div>
            <span className="shortcut-label">GitHub</span>
          </div>

          <div
            className="desktop-shortcut"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://www.linkedin.com/in/aditya-rawat-6a003532b/', '_blank');
            }}
          >
            <div className="shortcut-icon-container">
              <div className="ext-icon-badge" style={{ background: '#0a66c2' }}>
                <LinkedInSvg size={30} color="#ffffff" />
              </div>
            </div>
            <span className="shortcut-label">LinkedIn</span>
          </div>

          <div
            className="desktop-shortcut"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://leetcode.com/u/Aditya_Rawat0101/', '_blank');
            }}
          >
            <div className="shortcut-icon-container">
              <div className="ext-icon-badge" style={{ background: '#2B2B2B', border: '1px solid rgba(255, 161, 22, 0.4)' }}>
                <LeetCodeSvg size={28} />
              </div>
            </div>
            <span className="shortcut-label">LeetCode</span>
          </div>
        </div>

        {/* Windows 11 Floating Windows */}
        {WINDOW_DEFS.map((w) => {
          const state = windowStates[w.id];
          const zIndex = 100 + focusStack.indexOf(w.id);

          return (
            <Window
              key={w.id}
              id={w.id}
              title={w.title}
              icon={w.icon}
              isOpen={state.isOpen}
              isMinimized={state.isMinimized}
              isFocused={activeWindowId === w.id}
              initialPosition={w.initialPosition}
              initialSize={w.initialSize}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onFocus={focusWindow}
              zIndex={zIndex}
            >
              {renderWindowContent(w.id)}
            </Window>
          );
        })}

        {/* Start Menu */}
        <StartMenu
          isOpen={isStartOpen}
          onClose={() => setIsStartOpen(false)}
          onOpenWindow={openWindow}
        />

        {/* Action Center / Quick Settings Flyout */}
        <QuickSettingsFlyout
          isOpen={isQuickSettingsOpen}
          onClose={() => setIsQuickSettingsOpen(false)}
        />

        {/* Calendar / Clock Flyout */}
        <CalendarFlyout
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
        />

        {/* Desktop Context Menu */}
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          visible={contextMenu.visible}
          onClose={() => setContextMenu({ visible: false, x: 0, y: 0 })}
          onRefresh={() => {
            const body = document.querySelector('.win11-desktop');
            if (body) {
              body.style.opacity = '0.9';
              setTimeout(() => { body.style.opacity = '1'; }, 120);
            }
          }}
          onOpenTerminal={() => openWindow('terminal')}
          onOpenAbout={() => openWindow('about')}
        />

        {/* Windows 11 Taskbar */}
        <Taskbar
          windows={taskbarWindows}
          activeWindowId={activeWindowId}
          onTaskbarClick={handleTaskbarClick}
          onToggleStart={(e) => {
            e.stopPropagation();
            setIsStartOpen(!isStartOpen);
            setIsQuickSettingsOpen(false);
            setIsCalendarOpen(false);
          }}
          isStartOpen={isStartOpen}
          onToggleQuickSettings={(e) => {
            e.stopPropagation();
            setIsQuickSettingsOpen(!isQuickSettingsOpen);
            setIsStartOpen(false);
            setIsCalendarOpen(false);
          }}
          isQuickSettingsOpen={isQuickSettingsOpen}
          onToggleCalendar={(e) => {
            e.stopPropagation();
            setIsCalendarOpen(!isCalendarOpen);
            setIsStartOpen(false);
            setIsQuickSettingsOpen(false);
          }}
          isCalendarOpen={isCalendarOpen}
          onShowDesktop={handleShowDesktop}
        />
      </div>
    </>
  );
}
