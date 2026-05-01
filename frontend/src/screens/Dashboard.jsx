import React from 'react';
import { fmtINR, initials } from '../utils/format.js';
import { useTweaks } from '../context/TweaksContext.jsx';

const SCHEDULE = [
  { av: 'RK', name: 'Ravi Kumar',        id: 'WGF-2102', loc: 'T. Nagar',   phone: '+91 98xxx xxx21', partner: 'Mohan',   status: 'success', label: 'Collected',  amount: 2400,  sub: 'UPI · 09:14 AM' },
  { av: 'LD', name: 'Lakshmi Devi',      id: 'WGF-1840', loc: 'Mylapore',   phone: '+91 99xxx xxx07', partner: 'Senthil', status: 'success', label: 'Collected',  amount: 3250,  sub: 'Cash · 10:02 AM' },
  { av: 'MS', name: 'Murugan S.',        id: 'WGF-1721', loc: 'Velachery',  phone: '+91 96xxx xxx48', partner: null,      status: 'danger',  label: 'Overdue',    amount: 1800,  sub: 'Due · auto-call sent', overdue: true, meta2: '4 days overdue' },
  { av: 'PS', name: 'Priya Subramaniam', id: 'WGF-2014', loc: 'Anna Nagar', phone: '+91 98xxx xxx33', partner: 'Mohan',   status: 'warn',    label: 'In transit', amount: 2950,  sub: 'Visiting now' },
  { av: 'KR', name: 'Karthik Raja',      id: 'WGF-1933', loc: 'Velachery',  phone: '+91 99xxx xxx12', partner: 'Senthil', status: 'success', label: 'Collected',  amount: 4800,  sub: 'UPI · 08:22 AM', gold: true },
  { av: 'SM', name: 'Selvi Maran',       id: 'WGF-1645', loc: 'Tambaram',   phone: '+91 95xxx xxx18', partner: 'Mohan',   status: 'neutral', label: 'Pending',    amount: 3300,  sub: 'Scheduled · 14:00' },
];

const DISBURSALS = [
  { name: 'Lakshmi Devi',      id: 'WGF-2840', loc: 'Mylapore',   mo: 12, rate: 18, amt: 35000 },
  { name: 'Murugan S.',        id: 'WGF-2839', loc: 'T. Nagar',   mo: 6,  rate: 22, amt: 15000 },
  { name: 'Karthik Raja',      id: 'WGF-2838', loc: 'Velachery',  mo: 18, rate: 16, amt: 50000 },
  { name: 'Priya Subramaniam', id: 'WGF-2837', loc: 'Anna Nagar', mo: 9,  rate: 20, amt: 25000 },
  { name: 'Selvi Maran',       id: 'WGF-2836', loc: 'Tambaram',   mo: 12, rate: 18, amt: 40000 },
];

export default function Dashboard({ onNewLoan, onNavigate }) {
  const { tweaks } = useTweaks();

  return (
    <section id="screen-dashboard" className="active">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            Good morning, <em>Sambath</em>
          </h1>
          <div className="page-sub">
            {tweaks.showTamil && <span className="ta">இன்று</span>}
            {tweaks.showTamil && ' · '}
            01 May 2026 · Friday · Take your time
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export
          </button>
          <button className="btn btn-primary" onClick={onNewLoan}>
            <span className="accent" />New Loan
          </button>
        </div>
      </div>

      <div className="kpi-grid stagger">
        <div className="kpi">
          <div className="kpi-label">Active Loans</div>
          <div className="kpi-value">847</div>
          <div className="kpi-rule" />
          <div className="kpi-trend up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
            <strong>+12.4%</strong><span className="lbl">vs last month</span>
          </div>
          <svg className="kpi-spark" width="80" height="40" viewBox="0 0 80 40">
            <path d="M0 30 L13 24 L26 26 L40 18 L53 20 L66 12 L80 6" fill="none" stroke="var(--primary)" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="kpi">
          <div className="kpi-label">Total Disbursed</div>
          <div className="kpi-value"><span className="unit">₹</span>2.18<span className="unit"> Cr</span></div>
          <div className="kpi-rule" />
          <div className="kpi-trend up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
            <strong>+8.1%</strong><span className="lbl">YTD</span>
          </div>
          <svg className="kpi-spark" width="80" height="40" viewBox="0 0 80 40">
            <path d="M0 32 L13 28 L26 22 L40 24 L53 16 L66 14 L80 8" fill="none" stroke="var(--primary)" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="kpi">
          <div className="kpi-label">Today's Collection</div>
          <div className="kpi-value"><span className="unit">₹</span>{fmtINR(184720)}</div>
          <div className="kpi-rule" />
          <div className="kpi-trend up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
            <strong>92%</strong><span className="lbl">of target</span>
          </div>
          <svg className="kpi-spark" width="80" height="40" viewBox="0 0 80 40">
            <path d="M0 28 L13 14 L26 22 L40 18 L53 26 L66 16 L80 14" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="kpi">
          <div className="kpi-label">Overdue Amount</div>
          <div className="kpi-value"><span className="unit">₹</span>{fmtINR(428150)}</div>
          <div className="kpi-rule" style={{ background: 'var(--danger)' }} />
          <div className="kpi-trend down">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7 17 17"/><path d="M17 8v9H8"/></svg>
            <strong>-3.2%</strong><span className="lbl">31 customers</span>
          </div>
          <svg className="kpi-spark" width="80" height="40" viewBox="0 0 80 40">
            <path d="M0 10 L13 16 L26 14 L40 22 L53 20 L66 26 L80 30" fill="none" stroke="var(--danger)" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      <div className="dash-grid">
        <div className="card">
          <div className="card-h">
            <div>
              <div className="card-eyebrow">Portfolio Aging</div>
              <h2 className="card-title">Outstanding by days past due</h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--muted)' }}>
              Total: <strong style={{ color: 'var(--text)' }}>₹2.61 Cr</strong>
            </div>
          </div>
          <div className="aging">
            {[
              { label: 'Current',       sub: '0–30 days',  cls: '',       fill: '84%', val: '₹2.19 Cr' },
              { label: 'Watch',         sub: '30–60 days', cls: 'warn',   fill: '9%',  val: '₹23.4 L' },
              { label: 'Sub-standard',  sub: '60–90 days', cls: 'danger', fill: '4.6%',val: '₹12.0 L' },
              { label: 'Doubtful',      sub: '90+ days',   cls: 'crit',   fill: '2.4%',val: '₹6.4 L' },
            ].map(r => (
              <div key={r.label} className={`aging-row ${r.cls}`}>
                <div className="aging-lbl">{r.label}<span className="sub">{r.sub}</span></div>
                <div className="aging-track"><div className="aging-fill" style={{ width: r.fill }} /></div>
                <div className="aging-val">{r.val}</div>
              </div>
            ))}
          </div>

          <div className="qa">
            <button className="qa-btn" onClick={onNewLoan}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <div><div className="lbl">New Loan</div><div className="sub">Stepped application form</div></div>
            </button>
            <button className="qa-btn" onClick={() => onNavigate('collections')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M2 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></svg>
              <div><div className="lbl">Record Collection</div><div className="sub">Cash / UPI entry</div></div>
            </button>
            <button className="qa-btn" onClick={() => onNavigate('customers')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M3 21a9 9 0 0 1 18 0"/></svg>
              <div><div className="lbl">Add Customer</div><div className="sub">KYC + onboarding</div></div>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-h">
            <div>
              <div className="card-eyebrow">Recent Disbursals</div>
              <h2 className="card-title">This week</h2>
            </div>
            <button className="btn btn-sm btn-ghost">View all</button>
          </div>
          <div className="list">
            {DISBURSALS.map(d => (
              <div key={d.id} className="disb-row">
                <div>
                  <div className="disb-name">{d.name}</div>
                  <div className="disb-meta">{d.id} · {d.loc} · {d.mo} mo @ {d.rate}%</div>
                </div>
                <div className="disb-amt">₹{fmtINR(d.amt)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-h">
          <div>
            <div className="card-eyebrow">Today's Schedule</div>
            <h2 className="card-title">Collections due — 01 May 2026</h2>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="pill solid">28 due today</span>
            <button className="btn btn-sm btn-secondary">Open sheet</button>
          </div>
        </div>

        <div className="date-strip">
          <div className="calendar">
            <div className="d">01</div>
            <div className="m">MAY</div>
          </div>
          <div className="stat"><span>Expected</span><strong>₹2,01,540</strong></div>
          <div className="stat green"><span>Collected so far</span><strong>₹1,84,720</strong></div>
          <div className="stat gold"><span>Remaining</span><strong>₹16,820</strong></div>
          <div style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--muted)' }}>
            {tweaks.showTamil && <span className="ta" style={{ fontFamily: 'var(--font-tamil)' }}>பகுதி நிறைவு</span>}
            {tweaks.showTamil ? ' · ' : ''}92% complete
          </div>
        </div>

        <div className="list">
          {SCHEDULE.map(row => (
            <div key={row.id} className={`list-row ${row.overdue ? 'overdue' : ''}`}>
              <div className={`av ${row.gold ? 'gold' : ''}`}>{row.av}</div>
              <div>
                <div className="li-name">{row.name}</div>
                <div className="li-meta">
                  {row.id} · {row.loc} · {row.phone}
                  <span className="dot" />
                  {row.overdue ? row.meta2 : `Partner: ${row.partner}`}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className={`pill ${row.status}`}>{row.label}</span>
                <div className="li-amount">₹{fmtINR(row.amount)}<span className="sub">{row.sub}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="foot-mark">Made in Chennai</div>
    </section>
  );
}
