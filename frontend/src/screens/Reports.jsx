import React from 'react';

export default function Reports() {
  return (
    <section id="screen-reports" className="active">
      <div className="page-header">
        <div>
          <h1 className="page-title">Insights &amp; <em>reports</em></h1>
          <div className="page-sub">FY 2026–27 · Updated 01 May 2026, 11:42 AM</div>
        </div>
        <div className="page-actions">
          <div className="date-range">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <strong>Apr 01 — Apr 30, 2026</strong>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <button className="btn btn-ghost">Compare</button>
        </div>
      </div>

      <div className="reports-grid stagger">
        {/* P&L */}
        <div className="report-card">
          <div><div className="report-eyebrow">FINANCIAL</div><h3>Profit &amp; Loss</h3></div>
          <div className="report-meta">
            <span>Net income</span>
            <span className="v" style={{ color: 'var(--success)' }}>₹14.82 L · +18%</span>
          </div>
          <svg className="report-spark" viewBox="0 0 280 56" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 42 C 30 38, 50 28, 80 32 S 130 18, 160 22 S 220 8, 280 12 L 280 56 L 0 56 Z" fill="url(#g1)"/>
            <path d="M0 42 C 30 38, 50 28, 80 32 S 130 18, 160 22 S 220 8, 280 12" fill="none" stroke="var(--primary)" strokeWidth="1.6"/>
          </svg>
          <div className="report-foot">
            <div className="kv-row" style={{ flex: 1, flexDirection: 'column', gap: 0 }}>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Revenue</span><span className="v">₹38.4 L</span></div>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Costs</span><span className="v">₹23.6 L</span></div>
            </div>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>

        {/* NPA */}
        <div className="report-card">
          <div><div className="report-eyebrow">RISK</div><h3>NPA Analysis</h3></div>
          <div className="report-meta">
            <span>Gross NPA</span>
            <span className="v" style={{ color: 'var(--warning)' }}>2.31% · -0.4pp</span>
          </div>
          <svg className="report-spark" viewBox="0 0 280 56" preserveAspectRatio="none">
            <line x1="0" y1="40" x2="280" y2="40" stroke="var(--line)" strokeDasharray="2 4"/>
            <g fill="var(--danger)">
              <rect x="6"   y="22" width="14" height="18" rx="1"/>
              <rect x="30"  y="20" width="14" height="20" rx="1"/>
              <rect x="54"  y="26" width="14" height="14" rx="1"/>
              <rect x="78"  y="18" width="14" height="22" rx="1"/>
              <rect x="102" y="24" width="14" height="16" rx="1"/>
            </g>
            <g fill="var(--accent)">
              <rect x="126" y="14" width="14" height="26" rx="1"/>
              <rect x="150" y="20" width="14" height="20" rx="1"/>
              <rect x="174" y="22" width="14" height="18" rx="1"/>
              <rect x="198" y="28" width="14" height="12" rx="1"/>
              <rect x="222" y="30" width="14" height="10" rx="1"/>
              <rect x="246" y="32" width="14" height="8"  rx="1"/>
            </g>
          </svg>
          <div className="report-foot">
            <div style={{ flex: 1 }}>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Net NPA</span><span className="v">1.04%</span></div>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Provisions</span><span className="v">₹4.18 L</span></div>
            </div>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>

        {/* Partner Performance */}
        <div className="report-card">
          <div><div className="report-eyebrow">TEAM</div><h3>Partner Performance</h3></div>
          <div className="report-meta">
            <span>Top: Senthil R.</span>
            <span className="v" style={{ color: 'var(--success)' }}>96.4% efficiency</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { name: 'Senthil R.', pct: 96.4, color: 'var(--primary)' },
              { name: 'Mohan K.',   pct: 88.1, color: 'var(--primary)' },
              { name: 'Arun V.',    pct: 81.6, color: '#4F6D58' },
            ].map(p => (
              <div key={p.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '4px' }}>
                  <span>{p.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{p.pct}%</span>
                </div>
                <div className="aging-track" style={{ height: '6px' }}>
                  <div className="aging-fill" style={{ width: `${p.pct}%`, background: p.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="report-foot">
            <span style={{ color: 'var(--muted)', fontSize: '11.5px' }}>3 partners · 847 active accounts</span>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>

        {/* Disbursal Trends */}
        <div className="report-card">
          <div><div className="report-eyebrow">GROWTH</div><h3>Disbursal Trends</h3></div>
          <div className="report-meta">
            <span>Apr disbursals</span>
            <span className="v" style={{ color: 'var(--success)' }}>₹54.2 L · +8%</span>
          </div>
          <svg className="report-spark" viewBox="0 0 280 56" preserveAspectRatio="none">
            <path d="M0 48 L 28 42 L 56 38 L 84 30 L 112 34 L 140 22 L 168 26 L 196 18 L 224 14 L 252 10 L 280 6"
              fill="none" stroke="var(--accent)" strokeWidth="1.8"/>
            <g fill="var(--primary)">
              <circle cx="0"   cy="48" r="2"/>
              <circle cx="56"  cy="38" r="2"/>
              <circle cx="112" cy="34" r="2"/>
              <circle cx="168" cy="26" r="2"/>
              <circle cx="224" cy="14" r="2"/>
            </g>
            <circle cx="280" cy="6" r="2.5" fill="var(--accent)"/>
          </svg>
          <div className="report-foot">
            <div style={{ flex: 1 }}>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Avg ticket</span><span className="v">₹28,400</span></div>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Approval rate</span><span className="v">71%</span></div>
            </div>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>

        {/* Collection Efficiency */}
        <div className="report-card">
          <div><div className="report-eyebrow">OPERATIONS</div><h3>Collection Efficiency</h3></div>
          <div className="report-meta">
            <span>30-day rolling</span>
            <span className="v" style={{ color: 'var(--success)' }}>94.2% · target 92%</span>
          </div>
          <svg className="report-spark" viewBox="0 0 280 56" preserveAspectRatio="none">
            <line x1="0" y1="20" x2="280" y2="20" stroke="var(--accent)" strokeDasharray="3 4" strokeWidth="1"/>
            <path d="M0 30 L 14 26 L 28 22 L 42 28 L 56 18 L 70 22 L 84 16 L 98 14 L 112 18 L 126 12 L 140 16 L 154 10 L 168 14 L 182 8 L 196 12 L 210 14 L 224 8 L 238 10 L 252 6 L 266 12 L 280 8"
              fill="none" stroke="var(--primary)" strokeWidth="1.6"/>
          </svg>
          <div className="report-foot">
            <div style={{ flex: 1 }}>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>UPI share</span><span className="v">58%</span></div>
              <div className="kv-row"><span style={{ color: 'var(--muted)' }}>Cash share</span><span className="v">42%</span></div>
            </div>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>

        {/* Customer Aging */}
        <div className="report-card">
          <div><div className="report-eyebrow">PORTFOLIO</div><h3>Customer Aging</h3></div>
          <div className="report-meta">
            <span>Avg vintage</span>
            <span className="v">14.3 months</span>
          </div>
          <svg className="report-spark" viewBox="0 0 280 56" preserveAspectRatio="none">
            <rect x="0"   y="8"  width="101" height="48" rx="2" fill="var(--primary)"/>
            <rect x="101" y="14" width="78"  height="42" rx="2" fill="var(--primary-tint)"/>
            <rect x="179" y="22" width="56"  height="34" rx="2" fill="#4F6D58"/>
            <rect x="235" y="30" width="45"  height="26" rx="2" fill="var(--accent)"/>
          </svg>
          <div className="report-foot">
            <div style={{ display: 'flex', gap: '12px', fontSize: '11px', flexWrap: 'wrap' }}>
              {[
                { color: 'var(--primary)',      label: '0–6mo · 36%' },
                { color: 'var(--primary-tint)', label: '6–12mo · 28%' },
                { color: 'var(--accent)',        label: '24+mo · 16%' },
              ].map(l => (
                <span key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', background: l.color, borderRadius: '2px' }}/>
                  {l.label}
                </span>
              ))}
            </div>
            <button className="btn btn-sm btn-secondary">Generate</button>
          </div>
        </div>
      </div>

      <div className="foot-mark">Made in Chennai · WingFund · FY 2026–27</div>
    </section>
  );
}
