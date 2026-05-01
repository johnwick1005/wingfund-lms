import React from 'react';
import { useTweaks } from '../context/TweaksContext.jsx';

const CRUMBS = {
  dashboard:   ['Dashboard',   'Operations overview'],
  customers:   ['Customers',   '2,847 records'],
  loans:       ['Loans',       'Active book'],
  collections: ['Collections', 'Daily sheet'],
  reports:     ['Reports',     'Insights · FY 2026–27'],
};

export default function TopBar({ activeScreen }) {
  const { tweaks, setTweaks } = useTweaks();
  const [title, sub] = CRUMBS[activeScreen] ?? ['', ''];

  return (
    <header className="topbar">
      <div className="crumbs">
        <strong>{title}</strong>
        <span className="sep">/</span>
        <span>{sub}</span>
      </div>

      <div className="tb-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <input placeholder="Search customers, loans, IDs…" />
        <kbd>⌘K</kbd>
      </div>

      <div className="tb-spacer" />

      <button
        className="tb-lang"
        title="Toggle language"
        onClick={() => setTweaks({ showTamil: !tweaks.showTamil })}
      >
        <span>EN</span>
        <span style={{ color: 'var(--line-strong)' }}>/</span>
        <span className="ta">த</span>
      </button>

      <button className="tb-icon" title="Notifications">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        <span className="dot" />
      </button>

      <button className="tb-icon" title="Help">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" />
        </svg>
      </button>

      <div className="tb-user">
        <div className="tb-avatar">SK</div>
        <div>
          <div className="tb-user-name">Sambath Kumar</div>
          <div className="tb-user-meta">Admin · WGF-001</div>
        </div>
      </div>
    </header>
  );
}
