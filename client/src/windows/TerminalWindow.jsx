import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalWindow({ onOpenWindow }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Windows PowerShell [Version 10.0.22631.3007]\nCopyright (C) Microsoft Corporation. All rights reserved.\n\nType "help" or "commands" to see available commands.\n',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    const cleanCmd = raw.toLowerCase();

    if (!cleanCmd) return;

    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    const newEntries = [{ type: 'command', text: `PS C:\\Users\\Aditya Rawat> ${raw}` }];

    switch (cleanCmd) {
      case 'help':
      case 'commands':
      case '?':
        newEntries.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  neofetch      - Display system specs & ASCII logo
  about         - View profile summary
  cp / dsa      - View LeetCode, CodeChef & Codeforces ratings
  projects      - List all distributed systems & AI projects
  skills        - View tech stack & programming languages
  education     - View academic background
  contact       - Get email, GitHub, and LinkedIn info
  leetcode      - Open LeetCode profile
  codechef      - Open CodeChef profile
  codeforces    - Open Codeforces profile
  github        - Open GitHub profile in new tab
  linkedin      - Open LinkedIn profile in new tab
  date          - Show current system date and time
  clear / cls   - Clear terminal screen
  gui <app>     - Launch GUI window (e.g. 'gui cp', 'gui projects')`,
        });
        break;

      case 'cp':
      case 'dsa':
      case 'ratings':
        newEntries.push({
          type: 'output',
          text: `COMPETITIVE PROGRAMMING & DSA BENCHMARKS:
  [1] LEETCODE:   2090+ Rating · Knight · 950+ Problems · Top 2%
      URL:        https://leetcode.com/u/Aditya_Rawat0101/

  [2] CODECHEF:   1600+ Rating · 3⭐ (Division 2)
      URL:        https://www.codechef.com/users/rawat_aditya4

  [3] CODEFORCES: 1400+ Rating · Specialist (Div 2 / Div 3)
      URL:        https://codeforces.com/profile/rawataditya415`,
        });
        break;

      case 'leetcode':
        window.open('https://leetcode.com/u/Aditya_Rawat0101/', '_blank');
        newEntries.push({ type: 'output', text: 'Opening LeetCode profile (2090+ Knight)...' });
        break;

      case 'codechef':
        window.open('https://www.codechef.com/users/rawat_aditya4', '_blank');
        newEntries.push({ type: 'output', text: 'Opening CodeChef profile (1600+ 3⭐)...' });
        break;

      case 'codeforces':
        window.open('https://codeforces.com/profile/rawataditya415', '_blank');
        newEntries.push({ type: 'output', text: 'Opening Codeforces profile (1400+ Specialist)...' });
        break;

      case 'neofetch':
      case 'whoami':
        newEntries.push({
          type: 'output',
          text: `
  ####      ####   aditya@aditya-pc
  ####      ####   ----------------
  ####      ####   OS: Windows 11 Pro 64-bit
                   Host: Distributed Systems Engineer
  ####      ####   Kernel: Node.js / FastAPI / React
  ####      ####   Uptime: 2024 - Present
  ####      ####   Shell: Windows PowerShell
                   Packages: Python, LangGraph, RabbitMQ, Redis, Docker
                   Memory: Unlimited Curiosity
                   Status: Available for Backend & AI Roles
`,
        });
        break;

      case 'about':
        newEntries.push({
          type: 'output',
          text: `${portfolioData.name}\n${portfolioData.title}\n\n${portfolioData.bio}`,
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'output',
          text: portfolioData.projects
            .map(
              (p, i) =>
                `[${i + 1}] ${p.name.toUpperCase()} - ${p.subtitle}\n    Tech: ${p.tech.join(', ')}\n    URL: ${p.github}\n`
            )
            .join('\n'),
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'output',
          text: `LANGUAGES:\n  ${portfolioData.skills.languages.join('  ·  ')}\n\nFRAMEWORKS & TOOLS:\n  ${portfolioData.skills.tools.join('  ·  ')}`,
        });
        break;

      case 'education':
        newEntries.push({
          type: 'output',
          text: portfolioData.education
            .map((e) => `${e.degree}\n${e.institution} (${e.year})`)
            .join('\n\n'),
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `Email:    ${portfolioData.contact.email}\nGitHub:   ${portfolioData.contact.github}\nLinkedIn: ${portfolioData.contact.linkedin}`,
        });
        break;

      case 'github':
        window.open(portfolioData.contact.github, '_blank');
        newEntries.push({ type: 'output', text: `Opening ${portfolioData.contact.github}...` });
        break;

      case 'linkedin':
        window.open(portfolioData.contact.linkedin, '_blank');
        newEntries.push({ type: 'output', text: `Opening ${portfolioData.contact.linkedin}...` });
        break;

      case 'date':
        newEntries.push({ type: 'output', text: new Date().toString() });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        if (cleanCmd.startsWith('gui ')) {
          const appName = cleanCmd.replace('gui ', '').trim();
          if (onOpenWindow) {
            onOpenWindow(appName);
            newEntries.push({ type: 'output', text: `Launching window '${appName}'...` });
          }
        } else {
          newEntries.push({
            type: 'error',
            text: `'${raw}' is not recognized as an internal or external command.\nType 'help' for a list of available commands.`,
          });
        }
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div
      className="terminal-container"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header-tab">
        <span className="terminal-tab-icon">❯_</span>
        <span className="terminal-tab-title">PowerShell</span>
        <span className="terminal-tab-close">×</span>
      </div>

      <div className="terminal-body">
        {history.map((h, i) => (
          <div key={i} className={`terminal-line terminal-${h.type}`}>
            <pre className="terminal-pre">{h.text}</pre>
          </div>
        ))}

        <div className="terminal-input-row">
          <span className="terminal-prompt">PS C:\Users\Aditya Rawat&gt;&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
