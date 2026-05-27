import React, { useState } from 'react';
import { fmtINR } from '../utils/format.js';
import { Button, Pagination, usePagination, EmptyState } from '../components/ui';

const LOANS = [
  { id: 'WGF-L-2840', customer: 'Lakshmi Devi',      location: 'Mylapore',   principal: 35000, outstanding: 26420, emi: 3250, tenure: 12, nextDue: '08 May', status: 'active',  progress: 0.24 },
  { id: 'WGF-L-2839', customer: 'Murugan S.',        location: 'Velachery',  principal: 15000, outstanding: 9800,  emi: 1430, tenure: 6,  nextDue: '04 May', status: 'watch',   progress: 0.35 },
  { id: 'WGF-L-2838', customer: 'Karthik Raja',      location: 'Velachery',  principal: 50000, outstanding: 48200, emi: 2800, tenure: 18, nextDue: '12 May', status: 'active',  progress: 0.04 },
  { id: 'WGF-L-2837', customer: 'Priya Subramaniam', location: 'Anna Nagar', principal: 25000, outstanding: 21400, emi: 2950, tenure: 9,  nextDue: '06 May', status: 'active',  progress: 0.14 },
  { id: 'WGF-L-2836', customer: 'Selvi Maran',       location: 'Tambaram',   principal: 40000, outstanding: 32100, emi: 3700, tenure: 12, nextDue: '03 May', status: 'watch',   progress: 0.20 },
  { id: 'WGF-L-2828', customer: 'Senthil Vel',       location: 'Tambaram',   principal: 20000, outstanding: 18700, emi: 1850, tenure: 12, nextDue: '28 Apr', status: 'overdue', progress: 0.06 },
  { id: 'WGF-L-2902', customer: 'Bhaskar Rao',       location: 'T. Nagar',   principal: 50000, outstanding: 0,     emi: 0,    tenure: 12, nextDue: '—',      status: 'pending', progress: 0 },
  { id: 'WGF-L-2820', customer: 'Anand Pillai',      location: 'Mylapore',   principal: 10000, outstanding: 9100,  emi: 920,  tenure: 12, nextDue: '09 May', status: 'active',  progress: 0.09 },
  // ── Closed loans (paid off in full) ──
  { id: 'WGF-L-2701', customer: 'Vimala Rao',        location: 'Mylapore',   principal: 30000, outstanding: 0,     emi: 0,    tenure: 12, nextDue: '—', closedOn: '12 Apr 2026', status: 'closed', progress: 1 },
  { id: 'WGF-L-2580', customer: 'Subramani N.',      location: 'T. Nagar',   principal: 20000, outstanding: 0,     emi: 0,    tenure: 6,  nextDue: '—', closedOn: '03 Apr 2026', status: 'closed', progress: 1 },
  { id: 'WGF-L-2455', customer: 'Lakshmana A.',      location: 'Velachery',  principal: 50000, outstanding: 0,     emi: 0,    tenure: 18, nextDue: '—', closedOn: '28 Mar 2026', status: 'closed', progress: 1 },
  { id: 'WGF-L-2398', customer: 'Indira Devi',       location: 'Anna Nagar', principal: 15000, outstanding: 0,     emi: 0,    tenure: 12, nextDue: '—', closedOn: '19 Mar 2026', status: 'closed', progress: 1 },
  { id: 'WGF-L-2340', customer: 'Govindan R.',       location: 'Tambaram',   principal: 25000, outstanding: 0,     emi: 0,    tenure: 12, nextDue: '—', closedOn: '05 Mar 2026', status: 'closed', progress: 1 },
];

function pillFor(status) {
  if (status === 'watch')   return <span className="pill warn">Due soon</span>;        // Yellow
  if (status === 'overdue') return <span className="pill danger">Overdue</span>;       // Red
  if (status === 'pending') return <span className="pill warn">Awaiting review</span>; // Yellow
  if (status === 'closed')  return <span className="pill success">Closed</span>;       // Green
  return <span className="pill success">Active</span>;                                  // Green
}

function EmiWidget() {
  const [principal, setPrincipal] = useState(25000);
  const [rate,      setRate]      = useState(18);
  const [months,    setMonths]    = useState(12);

  const r   = rate / 12 / 100;
  const emi = r > 0 ? (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1) : principal / months;
  const total    = emi * months;
  const interest = total - principal;

  return (
    <aside className="emi-widget">
      <div className="emi-eyebrow">A QUIET CALCULATION</div>
      <h3 className="emi-title">What an EMI looks like</h3>

      <div className="emi-row">
        <label>Principal <span>₹{fmtINR(principal)}</span></label>
        <input type="range" min="5000" max="50000" step="1000" value={principal}
          onChange={e => setPrincipal(+e.target.value)} />
      </div>
      <div className="emi-row">
        <label>Interest Rate <span>{rate.toFixed(1)}% p.a.</span></label>
        <input type="range" min="12" max="28" step="0.5" value={rate}
          onChange={e => setRate(+e.target.value)} />
      </div>
      <div className="emi-row">
        <label>Tenure <span>{months} months</span></label>
        <input type="range" min="3" max="24" step="1" value={months}
          onChange={e => setMonths(+e.target.value)} />
      </div>

      <div className="emi-result">
        <div>
          <div className="lbl">Monthly EMI</div>
          <div className="val accent"><span className="pre">₹</span>{fmtINR(emi)}</div>
        </div>
        <div>
          <div className="lbl">Total Interest</div>
          <div className="val"><span className="pre">₹</span>{fmtINR(interest)}</div>
        </div>
        <div>
          <div className="lbl">Total Payable</div>
          <div className="val"><span className="pre">₹</span>{fmtINR(total)}</div>
        </div>
      </div>
    </aside>
  );
}

const PAGE_SIZE = 6;

export default function Loans({ onNewLoan }) {
  const [filter, setFilter] = useState('all');

  const filtered = LOANS.filter(l => {
    if (filter === 'all')     return true;
    if (filter === 'pending') return l.status === 'pending';
    if (filter === 'closed')  return l.status === 'closed';
    if (filter === 'active')  return ['active', 'watch', 'overdue'].includes(l.status);
    return true;
  });

  const { page, setPage, totalPages, pageItems, total, pageSize } =
    usePagination(filtered, PAGE_SIZE);

  // Reset to page 1 when the filter changes so the user always sees the first batch.
  React.useEffect(() => { setPage(1); }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const counts = {
    all:     LOANS.length,
    pending: LOANS.filter(l => l.status === 'pending').length,
    active:  LOANS.filter(l => ['active', 'watch', 'overdue'].includes(l.status)).length,
    closed:  LOANS.filter(l => l.status === 'closed').length,
  };

  return (
    <section id="screen-loans" className="active">
      <div className="page-header">
        <div>
          <h1 className="page-title">Loan <em>book</em></h1>
          <div className="page-sub">847 active · 14 awaiting your review · 3 disbursed today</div>
        </div>
        <div className="page-actions">
          <Button
            variant="primary"
            onClick={onNewLoan}
            leftIcon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            }
          >
            New Loan Application
          </Button>
        </div>
      </div>

      <div className="toolbar">
        <div className="chips">
          {[
            ['all',     'All Loans',       counts.all],
            ['pending', 'Awaiting review', counts.pending],
            ['active',  'Active',          counts.active],
            ['closed',  'Closed',          counts.closed],
          ].map(([v, lbl, ct]) => (
            <button
              key={v}
              className={`chip ${filter === v ? 'active' : ''}`}
              onClick={() => setFilter(v)}
            >
              {lbl} <span className="ct">{ct}</span>
            </button>
          ))}
        </div>
        <div className="search-inline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input placeholder="Loan ID, customer name…" />
        </div>
      </div>

      <div className="loans-layout">
        <div>
          {total === 0 ? (
            <EmptyState
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              }
              title="No loans in this view"
              description="Try a different filter, or create a new loan application."
              action={
                <Button size="sm" variant="primary" onClick={onNewLoan}>
                  New Loan
                </Button>
              }
            />
          ) : (
            <>
              <div className="loans-grid stagger">
                {pageItems.map(l => {
                  const dueClass = l.status === 'warn' ? 'warn' : l.status === 'overdue' ? 'danger' : '';
                  return (
                    <div key={l.id} className="loan-card">
                      <div className="loan-card-h">
                        <div>
                          <div className="loan-id">{l.id}</div>
                          <div className="loan-cust">{l.customer}</div>
                          <div className="loan-loc">{l.location} · {l.tenure} months</div>
                        </div>
                        {pillFor(l.status)}
                      </div>
                      <div className="loan-amt-row">
                        <div>
                          <div className="loan-amt-lbl">Principal</div>
                          <div className="loan-amt-val">₹{fmtINR(l.principal)}</div>
                        </div>
                        <div>
                          <div className="loan-amt-lbl">Outstanding</div>
                          <div className="loan-amt-val outstanding">
                            {l.status === 'pending' ? '—' : `₹${fmtINR(l.outstanding)}`}
                          </div>
                          {l.status !== 'pending' && (
                            <div className="loan-progress">
                              <span style={{ width: `${(l.progress * 100).toFixed(0)}%` }} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="loan-foot">
                        <div className="loan-emi">
                          EMI <strong>{(l.status === 'pending' || l.status === 'closed') ? '—' : `₹${fmtINR(l.emi)}`}</strong>
                        </div>
                        <div className={`loan-due ${dueClass}`}>
                          {l.status === 'closed' ? 'Closed on' : 'Next due'}
                          <strong>{l.status === 'closed' ? l.closedOn : l.nextDue}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
                totalItems={total}
                pageSize={pageSize}
              />
            </>
          )}
        </div>

        <EmiWidget />
      </div>

    </section>
  );
}
