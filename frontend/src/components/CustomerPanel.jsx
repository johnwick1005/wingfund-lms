import React from 'react';
import { fmtINR } from '../utils/format.js';

export default function CustomerPanel({ customer, onClose }) {
  const isOpen = !!customer;

  return (
    <>
      <div
        className={`cust-panel-bg ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />
      <aside className={`cust-panel ${isOpen ? 'show' : ''}`} aria-hidden={!isOpen}>
        <div className="cp-h">
          <button className="cp-x" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="cp-id">{customer?.id}</div>
          <div className="cp-name">{customer?.name}</div>
          <div className="cp-loc">{customer?.location} · Customer since Aug 2023</div>
          <div className="cp-pills">
            <span className="pill solid">Active</span>
            <span className="pill gold">VIP · 14 cycles</span>
          </div>
        </div>

        <div className="cp-stats">
          <div className="cp-stat">
            <div className="lbl">Active loans</div>
            <div className="val">{customer?.loans ?? 0}</div>
          </div>
          <div className="cp-stat">
            <div className="lbl">Outstanding</div>
            <div className="val">₹{fmtINR(customer?.outstanding ?? 0)}</div>
          </div>
          <div className="cp-stat">
            <div className="lbl">Credit score</div>
            <div className="val" style={{ color: 'var(--success)' }}>A+</div>
          </div>
        </div>

        <div className="cp-body">
          <div className="cp-section">
            <h4>Active loans</h4>
            <div className="list-row" style={{ padding: '12px 0' }}>
              <div className="av av-lg">L1</div>
              <div>
                <div className="li-name">Working capital · WGF-L-2840</div>
                <div className="li-meta">₹35,000 · 12 mo · 18% · Disbursed 14 Mar 2026</div>
              </div>
              <div className="li-amount">₹26,420<span className="sub">Outstanding</span></div>
            </div>
            <div className="list-row" style={{ padding: '12px 0', borderBottom: 'none' }}>
              <div className="av av-lg">L2</div>
              <div>
                <div className="li-name">Top-up · WGF-L-2102</div>
                <div className="li-meta">₹15,000 · 6 mo · 22% · Disbursed 02 Feb 2026</div>
              </div>
              <div className="li-amount">₹12,000<span className="sub">Outstanding</span></div>
            </div>
          </div>

          <div className="cp-section">
            <h4>Recent activity</h4>
            <div className="cp-tl">
              {[
                { month: 'May', day: '01', event: 'Collection received',  meta: 'UPI · Partner: Mohan',    amount: '+₹2,400',  color: 'var(--success)' },
                { month: 'Apr', day: '30', event: 'Collection received',  meta: 'Cash · Partner: Mohan',   amount: '+₹2,400',  color: 'var(--success)' },
                { month: 'Apr', day: '26', event: 'SMS reminder sent',    meta: 'EMI due notification',    amount: '—',        color: 'var(--muted)' },
                { month: 'Mar', day: '14', event: 'Loan disbursed',       meta: 'Working capital · WGF-L-2840', amount: '+₹35,000', color: 'var(--primary)' },
              ].map((row, i) => (
                <div key={i} className="cp-tl-row">
                  <div className="cp-tl-date">{row.month}<strong>{row.day}</strong></div>
                  <div>
                    <div className="li-name">{row.event}</div>
                    <div className="li-meta">{row.meta}</div>
                  </div>
                  <div className="li-amount" style={{ color: row.color, fontSize: row.amount === '—' ? '12px' : undefined }}>
                    {row.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" style={{ flex: 1 }}>Record payment</button>
            <button className="btn btn-primary" style={{ flex: 1 }}>
              <span className="accent" />New top-up
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
