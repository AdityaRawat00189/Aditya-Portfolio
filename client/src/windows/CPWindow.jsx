import React from 'react';
import CompetitiveProgramming from '../components/CompetitiveProgramming';

export default function CPWindow() {
  return (
    <div className="cp-window-container">
      <div className="cp-window-hero">
        <div className="cp-window-badge">⚡ ALGORITHMIC BENCHMARKS</div>
        <h2 className="cp-window-heading">Competitive Programming &amp; DSA Profiles</h2>
        <p className="cp-window-sub">
          Active problem solver with 950+ algorithmic challenges solved across LeetCode, CodeChef, and Codeforces. Demonstrating strong mastery in advanced data structures, dynamic programming, graph theory, and mathematical problem-solving.
        </p>
      </div>

      <CompetitiveProgramming />

      <div className="cp-focus-footer-box">
        <div className="focus-header">🎯 Core Algorithmic Competencies</div>
        <div className="focus-pills-wrap">
          {['Dynamic Programming', 'Graph Theory & Shortest Path', 'Segment Trees & Fenwick', 'Binary Search & Monotonic Queues', 'Bit Manipulation', 'Tree Re-rooting', 'Greedy Algorithms', 'System Architecture & Concurrency'].map((item) => (
            <span key={item} className="focus-competency-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
