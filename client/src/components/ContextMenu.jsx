import React, { useEffect, useRef } from 'react';

export default function ContextMenu({ x, y, visible, onClose, onRefresh, onOpenTerminal, onOpenAbout }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (visible) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [visible, onClose]);

  if (!visible) return null;

  // Clamp coordinates within window
  const posX = Math.min(x, window.innerWidth - 220);
  const posY = Math.min(y, window.innerHeight - 300);

  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ left: posX, top: posY }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="context-menu-item" onClick={() => { onRefresh(); onClose(); }}>
        <span className="context-menu-icon">🔄</span>
        <span>Refresh</span>
      </div>

      <div className="context-menu-separator" />

      <div className="context-menu-item" onClick={() => { onOpenTerminal(); onClose(); }}>
        <span className="context-menu-icon">💻</span>
        <span>Open in Windows Terminal</span>
      </div>

      <div className="context-menu-item" onClick={() => { onOpenAbout(); onClose(); }}>
        <span className="context-menu-icon">ℹ️</span>
        <span>System Properties (About)</span>
      </div>

      <div className="context-menu-separator" />

      <div className="context-menu-item" onClick={() => {
        window.open('https://github.com/AdityaRawat00189', '_blank');
        onClose();
      }}>
        <span className="context-menu-icon">🐙</span>
        <span>Open GitHub Profile</span>
      </div>

      <div className="context-menu-item" onClick={() => {
        window.open('https://www.linkedin.com/in/aditya-rawat-6a003532b/', '_blank');
        onClose();
      }}>
        <span className="context-menu-icon">💼</span>
        <span>Open LinkedIn</span>
      </div>

      <div className="context-menu-separator" />

      <div className="context-menu-item" onClick={onClose}>
        <span className="context-menu-icon">🎨</span>
        <span>Personalize</span>
      </div>
    </div>
  );
}
