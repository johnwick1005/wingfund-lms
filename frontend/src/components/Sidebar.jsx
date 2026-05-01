import React from 'react';
import { useTweaks } from '../context/TweaksContext.jsx';

const NAV = [
  {
    section: 'OVERVIEW',
    links: [
      { id: 'dashboard', label: 'Dashboard', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg> },
    ],
  },
  {
    section: 'OPERATIONS',
    links: [
      { id: 'customers',   label: 'Customers',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { id: 'loans',       label: 'Loans',       icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/></svg> },
      { id: 'collections', label: 'Collections', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
    ],
  },
  {
    section: 'INSIGHTS',
    links: [
      { id: 'reports', label: 'Reports', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg> },
    ],
  },
];

export default function Sidebar({ activeScreen, onNavigate }) {
  const { tweaks } = useTweaks();

  return (
    <aside className="sb">
      <div className="sb-brand">
        <div className="sb-mark" aria-label="WingFund">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M5 28 C 12 24, 19 19, 26 14 C 30 11, 33 9.5, 35 8.5" />
            <path d="M10 31 C 16 28, 22 24, 28 20" />
          </svg>
        </div>
        <div>
          <div className="sb-brand-name">WingFund</div>
          {tweaks.showTamil && <div className="sb-brand-tag ta">உங்கள் சிறகுகள்</div>}
        </div>
      </div>

      {NAV.map(({ section, links }) => (
        <React.Fragment key={section}>
          <div className="sb-section">{section}</div>
          <nav className="sb-nav">
            {links.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`sb-link ${activeScreen === id ? 'active' : ''}`}
                onClick={() => onNavigate(id)}
              >
                {icon}
                {label}
              </button>
            ))}
          </nav>
        </React.Fragment>
      ))}

      <div className="sb-spacer" />

      <div className="sb-user">
        <div className="sb-avatar">SK</div>
        <div>
          <div className="sb-user-name">Sambath Kumar</div>
          <div className="sb-user-role">Admin · Chennai</div>
        </div>
        <div className="sb-user-menu">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="6" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="18" r="1" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
