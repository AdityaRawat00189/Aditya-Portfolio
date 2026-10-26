import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChromeMinimize, ChromeMaximize, ChromeClose } from './Icons';

export default function Window({
  id,
  title,
  icon,
  children,
  isOpen,
  isMinimized,
  isFocused,
  initialPosition,
  initialSize,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}) {
  const windowRef = useRef(null);
  const headerRef = useRef(null);
  const [pos, setPos] = useState(initialPosition || { x: 140, y: 50 });
  const [size, setSize] = useState(initialSize || { w: 780, h: 540 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevState, setPrevState] = useState(null);

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizing = useRef(false);
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });

  // Drag handlers
  const onMouseDownHeader = useCallback(
    (e) => {
      if (isMaximized) return;
      if (e.target.closest('.window-caption-controls')) return;
      dragging.current = true;
      dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      onFocus(id);
      e.preventDefault();
    },
    [isMaximized, pos, id, onFocus]
  );

  const onMouseDownResize = useCallback(
    (e) => {
      resizing.current = true;
      resizeStart.current = { x: e.clientX, y: e.clientY, w: size.w, h: size.h };
      onFocus(id);
      e.preventDefault();
      e.stopPropagation();
    },
    [size, id, onFocus]
  );

  useEffect(() => {
    const onMove = (e) => {
      if (dragging.current) {
        const vw = window.innerWidth;
        const vh = window.innerHeight - 48; // Taskbar height
        let nx = e.clientX - dragOffset.current.x;
        let ny = e.clientY - dragOffset.current.y;
        nx = Math.max(0, Math.min(nx, vw - size.w));
        ny = Math.max(0, Math.min(ny, vh - 40));
        setPos({ x: nx, y: ny });
      }
      if (resizing.current) {
        const dx = e.clientX - resizeStart.current.x;
        const dy = e.clientY - resizeStart.current.y;
        setSize({
          w: Math.max(480, resizeStart.current.w + dx),
          h: Math.max(340, resizeStart.current.h + dy),
        });
      }
    };
    const onUp = () => {
      dragging.current = false;
      resizing.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [size]);

  const toggleMaximize = () => {
    if (isMaximized) {
      setIsMaximized(false);
      if (prevState) {
        setPos(prevState.pos);
        setSize(prevState.size);
      }
    } else {
      setPrevState({ pos, size });
      setIsMaximized(true);
    }
  };

  if (!isOpen) return null;

  const style = isMaximized
    ? {
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 48px)',
        borderRadius: 0,
        zIndex,
      }
    : {
        top: pos.y,
        left: pos.x,
        width: size.w,
        height: size.h,
        zIndex,
      };

  return (
    <div
      ref={windowRef}
      className={`win11-window ${isMinimized ? 'minimized' : ''} ${isFocused ? 'focused' : ''} ${
        isMaximized ? 'maximized' : ''
      }`}
      style={{
        ...style,
        opacity: isMinimized ? 0 : 1,
        pointerEvents: isMinimized ? 'none' : 'all',
      }}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div
        className="win11-titlebar"
        ref={headerRef}
        onMouseDown={onMouseDownHeader}
        onDoubleClick={toggleMaximize}
      >
        <div className="win11-title-left">
          <span className="win11-icon">{icon}</span>
          <span className="win11-title">{title}</span>
        </div>

        <div className="window-caption-controls">
          <button
            className="win11-caption-btn btn-minimize"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize(id);
            }}
            title="Minimize"
            aria-label="Minimize"
          >
            <ChromeMinimize size={10} />
          </button>

          <button
            className="win11-caption-btn btn-maximize"
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            title={isMaximized ? 'Restore' : 'Maximize'}
            aria-label="Maximize"
          >
            <ChromeMaximize size={10} isMaximized={isMaximized} />
          </button>

          <button
            className="win11-caption-btn btn-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            title="Close"
            aria-label="Close"
          >
            <ChromeClose size={10} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="win11-window-body">{children}</div>

      {/* Resize Handle */}
      {!isMaximized && (
        <div className="win11-resize-corner" onMouseDown={onMouseDownResize} />
      )}
    </div>
  );
}
