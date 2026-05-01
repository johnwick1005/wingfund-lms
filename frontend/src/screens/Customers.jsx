import React, { useState } from 'react';
import { fmtINR, initials } from '../utils/format.js';

const CUSTOMERS = [
  { id: 'WGF-2102', name: 'Ravi Kumar',         mobile: '+91 98xxx xxx21', location: 'T. Nagar',    loans: 2, outstanding: 38420, status: 'active' },
  { id: 'WGF-1840', name: 'Lakshmi Devi',       mobile: '+91 99xxx xxx07', location: 'Mylapore',    loans: 1, outstanding: 26420, status: 'active' },
  { id: 'WGF-1721', name: 'Murugan S.',         mobile: '+91 96xxx xxx48', location: 'Velachery',   loans: 1, outstanding: 14200, status: 'overdue' },
  { id: 'WGF-2014', name: 'Priya Subramaniam',  mobile: '+91 98xxx xxx33', location: 'Anna Nagar',  loans: 1, outstanding: 21400, status: 'active' },
  { id: 'WGF-1933', name: 'Karthik Raja',       mobile: '+91 99xxx xxx12', location: 'Velachery',   loans: 2, outstanding: 48200, status: 'active' },
  { id: 'WGF-1645', name: 'Selvi Maran',        mobile: '+91 95xxx xxx18', location: 'Tambaram',    loans: 1, outstanding: 32100, status: 'active' },
  { id: 'WGF-2210', name: 'Anand Pillai',       mobile: '+91 90xxx xxx04', location: 'Mylapore',    loans: 1, outstanding: 9100,  status: 'new' },
  { id: 'WGF-1488', name: 'Kavitha Ravi',       mobile: '+91 98xxx xxx91', location: 'T. Nagar',    loans: 1, outstanding: 5400,  status: 'active' },
  { id: 'WGF-1602', name: 'Senthil Vel',        mobile: '+91 99xxx xxx55', location: 'Tambaram',    loans: 1, outstanding: 18700, status: 'overdue' },
  { id: 'WGF-1359', name: 'Meena Krishnan',     mobile: '+91 96xxx xxx20', location: 'Anna Nagar',  loans: 1, outstanding: 11800, status: 'blocked' },
  { id: 'WGF-1991', name: 'Bhaskar Rao',        mobile: '+91 95xxx xxx38', location: 'T. Nagar',    loans: 2, outstanding: 54600, status: 'active' },
  { id: 'WGF-2245', name: 'Rajalakshmi K.',     mobile: '+91 98xxx xxx67', location: 'Mylapore',    loans: 1, outstanding: 7900,  status: 'new' },
];

const STATUS_PILL = {
  active:  <span className="pill success">Active</span>,
  overdue: <span className="pill danger">Overdue</span>,
  blocked: <span className="pill gold">Blocked</span>,
  new:     <span className="pill neutral">New</span>,
};

export default function Customers({ onOpenCustomer }) {
  const [filter, setFilter] = useState('all');
  const [query,  setQuery]  = useState('');

  const filtered = CUSTOMERS.filter(c => {
    if (filter !== 'all' && c.status !== filter) return false;
    if (query) {
      const q = query.toLowerCase();
      if (![c.name, c.id, c.mobile, c.location].join(' ').toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const counts = {
    all:     CUSTOMERS.length,
    active:  CUSTOMERS.filter(c => c.status === 'active').length,
    overdue: CUSTOMERS.filter(c => c.status === 'overdue').length,
    blocked: CUSTOMERS.filter(c => c.status === 'blocked').length,
    new:     CUSTOMERS.filter(c => c.status === 'new').length,
  };

  return (
    <section id="screen-customers" className="active">
      <div className="page-header">
        <div>
          <h1 className="page-title">Customers <em>directory</em></h1>
          <div className="page-sub">2,847 people · 31 need a call today · 12 new this week</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            Filter
          </button>
          <button className="btn btn-primary">
            <span className="accent" />Add Customer
          </button>
        </div>
      </div>

      <div className="toolbar">
        <div className="chips">
          {[['all', 'All'], ['active', 'Active'], ['overdue', 'Overdue'], ['blocked', 'Blocked'], ['new', 'New']].map(([v, lbl]) => (
            <button
              key={v}
              className={`chip ${filter === v ? 'active' : ''}`}
              onClick={() => setFilter(v)}
            >
              {lbl} <span className="ct">{counts[v]?.toLocaleString('en-IN') ?? 0}</span>
            </button>
          ))}
        </div>
        <div className="search-inline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            placeholder="Search by name, mobile, ID…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Mobile</th>
              <th>Location</th>
              <th className="right">Active Loans</th>
              <th className="right">Outstanding</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                  No customers match this filter.
                </td>
              </tr>
            ) : filtered.map(c => (
              <tr
                key={c.id}
                className={c.status === 'overdue' ? 'overdue' : ''}
                onClick={() => onOpenCustomer(c)}
              >
                <td>
                  <div className="cust">
                    <div className={`av ${c.status === 'new' ? 'gold' : ''}`}>{initials(c.name)}</div>
                    <div className="meta">
                      <span style={{ fontWeight: 600 }}>{c.name}</span>
                      <span className="id">{c.id}</span>
                    </div>
                  </div>
                </td>
                <td><span style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px' }}>{c.mobile}</span></td>
                <td>{c.location}</td>
                <td className="num">{c.loans}</td>
                <td className="num bold">₹{fmtINR(c.outstanding)}</td>
                <td>{STATUS_PILL[c.status]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="foot-mark">Made in Chennai</div>
    </section>
  );
}
