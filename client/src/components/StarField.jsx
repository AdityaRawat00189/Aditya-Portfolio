import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function StarField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = randomBetween(1, 2.5);
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${randomBetween(0, 100)}%;
        left: ${randomBetween(0, 100)}%;
        --dur: ${randomBetween(2, 6)}s;
        --delay: ${randomBetween(0, 6)}s;
        --max-opacity: ${randomBetween(0.3, 0.9)};
      `;
      container.appendChild(star);
    }
  }, []);

  return <div className="desktop-stars" ref={containerRef} />;
}
