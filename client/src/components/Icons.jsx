import React from 'react';

// Windows 11 Official Fluent Start Logo (4 3D-shaded rounded squares)
export function Win11Logo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="win11GradTL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
        <linearGradient id="win11GradTR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A4EF" />
          <stop offset="100%" stopColor="#0066B2" />
        </linearGradient>
        <linearGradient id="win11GradBL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0091E6" />
          <stop offset="100%" stopColor="#005A9E" />
        </linearGradient>
        <linearGradient id="win11GradBR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#004C87" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="8.5" height="8.5" rx="1.5" fill="url(#win11GradTL)" />
      <rect x="13" y="2.5" width="8.5" height="8.5" rx="1.5" fill="url(#win11GradTR)" />
      <rect x="2.5" y="13" width="8.5" height="8.5" rx="1.5" fill="url(#win11GradBL)" />
      <rect x="13" y="13" width="8.5" height="8.5" rx="1.5" fill="url(#win11GradBR)" />
    </svg>
  );
}

// Windows 11 Search Icon
export function SearchIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7.5"/>
      <line x1="21" y1="21" x2="16.5" y2="16.5"/>
    </svg>
  );
}

// Wi-Fi Icon
export function WifiIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  );
}

// Volume / Speaker Icon
export function VolumeIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}

// Battery Icon
export function BatteryIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="16" height="10" rx="2.5" ry="2.5"/>
      <line x1="22" y1="11" x2="22" y2="13"/>
      <rect x="4.5" y="9.5" width="11" height="5" rx="1" fill="#10B981" stroke="none"/>
    </svg>
  );
}

// Bell / Notification Icon
export function BellIcon({ size = 15, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
}

// Windows 11 Fluent File Explorer Folder Icon
export function FolderIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="folderBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA000" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
        <linearGradient id="docPeek" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E1F5FE" />
          <stop offset="100%" stopColor="#81D4FA" />
        </linearGradient>
      </defs>
      {/* Back tab */}
      <path d="M4 11C4 8.79086 5.79086 7 8 7H18L23 12H40C42.2091 12 44 13.7909 44 16V37C44 39.2091 42.2091 41 40 41H8C5.79086 41 4 39.2091 4 37V11Z" fill="url(#folderBack)" />
      {/* Peeking Document */}
      <rect x="9" y="11" width="30" height="18" rx="2" fill="url(#docPeek)" />
      <line x1="14" y1="16" x2="26" y2="16" stroke="#0288D1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="21" x2="32" y2="21" stroke="#0288D1" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      {/* Front flap */}
      <path d="M4 17C4 14.7909 5.79086 13 8 13H40C42.2091 13 44 14.7909 44 17V37C44 39.2091 42.2091 41 40 41H8C5.79086 41 4 39.2091 4 37V17Z" fill="url(#folderFront)" />
      {/* Drop highlight line */}
      <path d="M6 15H42" stroke="#FFF9C4" strokeWidth="1" opacity="0.6"/>
    </svg>
  );
}

// Windows 11 Fluent This PC / Monitor Icon
export function ThisPCIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="screenBezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A3B50" />
          <stop offset="100%" stopColor="#121C28" />
        </linearGradient>
        <linearGradient id="screenDisplay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1528" />
          <stop offset="50%" stopColor="#0A2540" />
          <stop offset="100%" stopColor="#06101E" />
        </linearGradient>
        <linearGradient id="bloomPill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* Monitor frame */}
      <rect x="4" y="6" width="40" height="27" rx="3.5" fill="url(#screenBezel)" stroke="#4A607A" strokeWidth="1.5" />
      {/* Screen inner */}
      <rect x="7" y="9" width="34" height="21" rx="1.5" fill="url(#screenDisplay)" />
      {/* Bloom preview on screen */}
      <circle cx="24" cy="19" r="6" fill="url(#bloomPill)" opacity="0.85" filter="blur(2px)" />
      <path d="M12 24L17 21L21 23L36 15" stroke="#60CDFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      {/* Stand column */}
      <path d="M21 33H27V38H21V33Z" fill="#3D4D61" />
      {/* Base */}
      <path d="M13 38H35C35.5523 38 36 38.4477 36 39V41C36 41.5523 35.5523 42 35 42H13C12.4477 42 12 41.5523 12 41V39C12 38.4477 12.4477 38 13 38Z" fill="#5A6D85" />
    </svg>
  );
}

// Windows 11 Fluent Terminal Icon
export function TerminalIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#0C0C0C" />
        </linearGradient>
      </defs>
      {/* Container */}
      <rect x="4" y="7" width="40" height="34" rx="5" fill="url(#termBg)" stroke="#383838" strokeWidth="1.5" />
      {/* Title strip */}
      <path d="M4 14H44" stroke="#2D2D2D" strokeWidth="1.2" />
      {/* Tab pill */}
      <rect x="7" y="9" width="14" height="4.5" rx="1.5" fill="#2E2E2E" />
      <circle cx="10" cy="11.2" r="1.2" fill="#0078D4" />
      {/* Prompt symbol */}
      <path d="M12 23L19 28.5L12 34" stroke="#4AF626" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Blinking cursor */}
      <rect x="23" y="32" width="10" height="2.8" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

// Windows 11 Settings / Task Manager / Gear Icon
export function SettingsIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#004E8C" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#gearGrad)" />
      <circle cx="24" cy="24" r="7.5" fill="#141B26" stroke="#60CDFF" strokeWidth="2.5"/>
      {/* Gear teeth */}
      <path d="M24 6V10M24 38V42M6 24H10M38 24H42M11.5 11.5L14.5 14.5M33.5 33.5L36.5 36.5M11.5 36.5L14.5 33.5M33.5 14.5L36.5 11.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="3" fill="#60CDFF" />
    </svg>
  );
}

// Mail / Contact Icon
export function MailIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="mailBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#005A9E" />
        </linearGradient>
        <linearGradient id="mailFlap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2896F3" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      {/* Envelope body */}
      <rect x="4" y="10" width="40" height="28" rx="4" fill="url(#mailBlue)" />
      {/* Back letter paper */}
      <path d="M9 10V8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V10" fill="#E3F2FD" opacity="0.9"/>
      {/* Fold lines */}
      <path d="M4 12L24 27L44 12" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 36L18 24" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4"/>
      <path d="M44 36L30 24" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}

// Graduation / Education Icon
export function EducationIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      {/* Cap diamond */}
      <path d="M24 7L4 17L24 27L44 17L24 7Z" fill="url(#capGrad)" stroke="#A78BFA" strokeWidth="1.5"/>
      {/* Cap base skull */}
      <path d="M10 21V31C10 31 15 37 24 37C33 37 38 31 38 31V21" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Tassel cord and button */}
      <line x1="39" y1="19" x2="39" y2="34" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="39" cy="35" r="2.2" fill="#FBBF24"/>
      <circle cx="24" cy="17" r="2" fill="#FBBF24"/>
    </svg>
  );
}

// Trophy / Competitive Programming Icon
export function TrophyIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="goldCup" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <path d="M14 8H34V22C34 27.5228 29.5228 32 24 32C18.4772 32 14 27.5228 14 22V8Z" fill="url(#goldCup)" stroke="#FDE68A" strokeWidth="1.5"/>
      {/* Left handle */}
      <path d="M14 12H9C7.34315 12 6 13.3431 6 15V19C6 21.7614 8.23858 24 11 24H14" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Right handle */}
      <path d="M34 12H39C40.6569 12 42 13.3431 42 15V19C42 21.7614 39.7614 24 37 24H34" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Stem */}
      <rect x="21" y="32" width="6" height="6" fill="#D97706" />
      {/* Base */}
      <path d="M15 38H33C33.5523 38 34 38.4477 34 39V41C34 41.5523 33.5523 42 33 42H15C14.4477 42 14 41.5523 14 41V39C14 38.4477 14.4477 38 15 38Z" fill="#B45309" />
      {/* Star emblem */}
      <path d="M24 14L25.3 17.5H29L26 19.5L27.2 23L24 21L20.8 23L22 19.5L19 17.5H22.7L24 14Z" fill="#FFFFFF"/>
    </svg>
  );
}

// Certificate / Award Icon
export function AwardIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="medalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="19" r="13" fill="url(#medalGrad)" stroke="#FDE68A" strokeWidth="2"/>
      <path d="M18 29L14 43L24 38L34 43L30 29" fill="#B45309"/>
      <circle cx="24" cy="19" r="7" fill="#FEF3C7"/>
      <path d="M24 15L25 18H28L25.5 19.8L26.5 22.8L24 21L21.5 22.8L22.5 19.8L20 18H23L24 15Z" fill="#D97706"/>
    </svg>
  );
}

// Power Icon
export function PowerIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
      <line x1="12" y1="2" x2="12" y2="12"/>
    </svg>
  );
}

// GitHub Icon
export function GitHubSvg({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

// LinkedIn Icon
export function LinkedInSvg({ size = 18, color = '#0A66C2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.59 1.59 0 0 0-1.6 1.6c0 .88.71 1.6 1.6 1.6a1.6 1.6 0 0 0 1.6-1.6 1.59 1.59 0 0 0-1.6-1.6z"/>
    </svg>
  );
}

// Window Chrome Controls
export function ChromeMinimize({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 1" fill="currentColor">
      <rect width="10" height="1"/>
    </svg>
  );
}

export function ChromeMaximize({ size = 11, isMaximized = false }) {
  if (isMaximized) {
    return (
      <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="2.5" y="0.5" width="7" height="7"/>
        <path d="M0.5 2.5V9.5H7.5"/>
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="0.5" y="0.5" width="9" height="9"/>
    </svg>
  );
}

export function ChromeClose({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <line x1="1" y1="1" x2="9" y2="9"/>
      <line x1="9" y1="1" x2="1" y2="9"/>
    </svg>
  );
}

// LeetCode Icon
export function LeetCodeSvg({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.72-1.797.72s-1.331-.253-1.797-.72L3.6 14.331c-.993-.993-1.54-2.313-1.54-3.717s.547-2.724 1.54-3.717l6.211-6.206c.993-.993 2.313-1.54 3.717-1.54s2.724.547 3.717 1.54l2.697 2.607a1.05 1.05 0 010 1.485 1.05 1.05 0 01-1.485 0l-2.697-2.607c-.596-.596-1.388-.924-2.232-.924s-1.636.328-2.232.924L5.085 8.381c-.596.596-.924 1.388-.924 2.232s.328 1.636.924 2.232l6.211 6.206c.596.596 1.388.924 2.232.924s1.636-.328 2.232-.924l2.697-2.607a1.05 1.05 0 011.485 0 1.05 1.05 0 010 1.485z" fill="#B3B1B0"/>
      <path d="M8 10.5h11a1 1 0 010 2H8a1 1 0 010-2z" fill="#FFA116"/>
      <path d="M15.5 13.5l3.5 3.5a1 1 0 01-1.414 1.414l-3.5-3.5a1 1 0 011.414-1.414z" fill="#FFA116"/>
    </svg>
  );
}

// CodeChef Icon
export function CodeChefSvg({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 .35.03.692.088 1.025C4.28 9.537 3 11.118 3 13c0 2.209 1.791 4 4 4h10c2.209 0 4-1.791 4-4 0-1.882-1.28-3.463-3.088-3.975C17.97 8.692 18 8.35 18 8c0-3.314-2.686-6-6-6z" fill="#5B4638"/>
      <path d="M5 18h14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2z" fill="#D35400"/>
      <circle cx="9" cy="11" r="1.2" fill="#FFFFFF"/>
      <circle cx="15" cy="11" r="1.2" fill="#FFFFFF"/>
      <path d="M10 14c.667.667 3.333.667 4 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Codeforces Icon
export function CodeforcesSvg({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="10" width="5.5" height="11" rx="1.5" fill="#FFD43B"/>
      <rect x="9.25" y="4" width="5.5" height="17" rx="1.5" fill="#1877F2"/>
      <rect x="16.5" y="7.5" width="5.5" height="13.5" rx="1.5" fill="#EF4444"/>
    </svg>
  );
}
