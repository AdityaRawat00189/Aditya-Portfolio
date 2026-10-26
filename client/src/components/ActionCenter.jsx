import React, { useState } from 'react';
import { WifiIcon, VolumeIcon, BatteryIcon, BellIcon } from './Icons';

export function QuickSettingsFlyout({ isOpen, onClose }) {
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(true);
  const [nightLight, setNightLight] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [volume, setVolume] = useState(85);
  const [brightness, setBrightness] = useState(90);

  if (!isOpen) return null;

  return (
    <div className="flyout-backdrop" onClick={onClose}>
      <div className="quick-settings-flyout" onClick={(e) => e.stopPropagation()}>
        {/* Quick Toggles Grid */}
        <div className="qs-grid">
          <button
            className={`qs-tile ${wifiOn ? 'active' : ''}`}
            onClick={() => setWifiOn(!wifiOn)}
          >
            <div className="qs-tile-icon">
              <WifiIcon size={18} />
            </div>
            <div className="qs-tile-label">
              <span className="qs-tile-title">Wi-Fi</span>
              <span className="qs-tile-status">{wifiOn ? 'Aditya-5G' : 'Off'}</span>
            </div>
          </button>

          <button
            className={`qs-tile ${bluetoothOn ? 'active' : ''}`}
            onClick={() => setBluetoothOn(!bluetoothOn)}
          >
            <div className="qs-tile-icon">ᛒ</div>
            <div className="qs-tile-label">
              <span className="qs-tile-title">Bluetooth</span>
              <span className="qs-tile-status">{bluetoothOn ? 'Connected' : 'Off'}</span>
            </div>
          </button>

          <button
            className={`qs-tile ${airplaneMode ? 'active' : ''}`}
            onClick={() => setAirplaneMode(!airplaneMode)}
          >
            <div className="qs-tile-icon">✈</div>
            <div className="qs-tile-label">
              <span className="qs-tile-title">Airplane</span>
              <span className="qs-tile-status">{airplaneMode ? 'On' : 'Off'}</span>
            </div>
          </button>

          <button
            className={`qs-tile ${nightLight ? 'active' : ''}`}
            onClick={() => setNightLight(!nightLight)}
          >
            <div className="qs-tile-icon">🌙</div>
            <div className="qs-tile-label">
              <span className="qs-tile-title">Night Light</span>
              <span className="qs-tile-status">{nightLight ? 'On' : 'Off'}</span>
            </div>
          </button>
        </div>

        {/* Sliders */}
        <div className="qs-sliders">
          <div className="qs-slider-row">
            <span className="qs-slider-icon">☀️</span>
            <input
              type="range"
              min="10"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="qs-slider"
            />
            <span className="qs-slider-val">{brightness}%</span>
          </div>

          <div className="qs-slider-row">
            <VolumeIcon size={16} />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="qs-slider"
            />
            <span className="qs-slider-val">{volume}%</span>
          </div>
        </div>

        {/* Bottom Battery Info */}
        <div className="qs-footer">
          <div className="qs-battery-info">
            <BatteryIcon size={18} color="#60cdff" />
            <span>100% · Plugged In · High Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CalendarFlyout({ isOpen, onClose }) {
  if (!isOpen) return null;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const timeStr = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentDay = now.getDate();

  return (
    <div className="flyout-backdrop" onClick={onClose}>
      <div className="calendar-flyout" onClick={(e) => e.stopPropagation()}>
        <div className="cal-header">
          <div className="cal-time">{timeStr}</div>
          <div className="cal-date">{dateStr}</div>
        </div>

        <div className="cal-grid-header">
          {daysOfWeek.map((d) => (
            <div key={d} className="cal-dow">{d}</div>
          ))}
        </div>

        <div className="cal-grid">
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`cal-day ${day === currentDay ? 'today' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="cal-notifications">
          <div className="cal-notif-title">
            <BellIcon size={13} />
            <span>Notifications</span>
          </div>
          <div className="cal-notif-card">
            <div className="cal-notif-head">Aditya Rawat OS · Just now</div>
            <div className="cal-notif-body">Welcome to the portfolio! Check out projects in File Explorer or open PowerShell.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
