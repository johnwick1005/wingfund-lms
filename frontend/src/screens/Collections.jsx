import React from 'react';
import { fmtINR, initials } from '../utils/format.js';
import { useTweaks } from '../context/TweaksContext.jsx';
import { Pagination, usePagination } from '../components/ui';

const DUE = [
  { name: 'Murugan S.',        location: 'Velachery',  amount: 1800, mode: 'Cash',          partner: 'Mohan',   overdue: true,  inTransit: false, scheduled: null },
  { name: 'Priya Subramaniam', location: 'Anna Nagar', amount: 2950, mode: 'UPI',           partner: 'Mohan',   overdue: false, inTransit: true,  scheduled: null },
  { name: 'Selvi Maran',       location: 'Tambaram',   amount: 3300, mode: 'Cash',          partner: 'Mohan',   overdue: false, inTransit: false, scheduled: '14:00' },
  { name: 'Senthil Vel',       location: 'Tambaram',   amount: 1850, mode: 'Cash',          partner: 'Senthil', overdue: true,  inTransit: false, scheduled: null },
  { name: 'Bhaskar Rao',       location: 'T. Nagar',   amount: 4200, mode: 'UPI',           partner: 'Senthil', overdue: false, inTransit: false, scheduled: '15:30' },
  { name: 'Anand Pillai',      location: 'Mylapore',   amount: 1320, mode: 'UPI',           partner: 'Arun',    overdue: false, inTransit: false, scheduled: '16:00' },
  { name: 'Deepa Natarajan',   location: 'Adyar',      amount: 5500, mode: 'Bank Transfer', partner: 'Mohan',   overdue: false, inTransit: false, scheduled: '13:00' },
  { name: 'Vijay Shankar',     location: 'Porur',      amount: 8200, mode: 'NEFT',          partner: 'Arun',    overdue: false, inTransit: false, scheduled: '11:30' },
];

const DONE = [
  { name: 'Ravi Kumar',     location: 'T. Nagar',   amount: 2400, mode: 'UPI',           partner: 'Mohan',   time: '09:14 AM' },
  { name: 'Lakshmi Devi',   location: 'Mylapore',   amount: 3250, mode: 'Cash',          partner: 'Senthil', time: '10:02 AM' },
  { name: 'Karthik Raja',   location: 'Velachery',  amount: 4800, mode: 'UPI',           partner: 'Senthil', time: '08:22 AM' },
  { name: 'Kavitha Ravi',   location: 'T. Nagar',   amount: 1200, mode: 'UPI',           partner: 'Mohan',   time: '08:48 AM' },
  { name: 'Meena Krishnan', location: 'Anna Nagar', amount: 1700, mode: 'Cash',          partner: 'Arun',    time: '09:33 AM' },
  { name: 'Rajalakshmi K.', location: 'Mylapore',   amount: 2100, mode: 'UPI',           partner: 'Senthil', time: '10:18 AM' },
  { name: 'Suresh Babu',    location: 'Adyar',      amount: 6400, mode: 'Bank Transfer', partner: 'Mohan',   time: '07:55 AM' },
  { name: 'Nithya Devi',    location: 'Porur',      amount: 9800, mode: 'NEFT',          partner: 'Arun',    time: '08:10 AM' },
];

const LIST_PAGE_SIZE = 5;

export default function Collections() {
  const { tweaks } = useTweaks();
  const dueP  = usePagination(DUE,  LIST_PAGE_SIZE);
  const doneP = usePagination(DONE, LIST_PAGE_SIZE);

  return (
    <section id="screen-collections" className="active">
      <div className="page-header">
        <div>
          <h1 className="page-title">Daily <em>collections</em></h1>
          <div className="page-sub">
            {tweaks.showTamil && <span className="ta" style={{ fontFamily: 'var(--font-tamil)' }}>இன்றைய வசூல்</span>}
            {tweaks.showTamil && ' · '}
            Sheet for 01 May 2026 · Friday
          </div>
        </div>
        <div className="page-actions">
          <div className="date-range">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <strong>01 May 2026</strong>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <button className="btn btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Excel
          </button>
          <button className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            WhatsApp
          </button>
        </div>
      </div>

      <div className="col-grid stagger">
        <div className="col-card">
          <div className="col-card-h">
            <h3>Due Today <span className="col-count">{DUE.length}</span></h3>
            <span className="pill warn">9 awaiting</span>
          </div>
          <div className="col-list">
            {dueP.pageItems.map((c, i) => {
              let sub = c.scheduled ? `Scheduled · ${c.scheduled}` : 'Due now';
              if (c.overdue)   sub = 'Auto-call sent';
              if (c.inTransit) sub = 'Visiting now';
              return (
                <div key={i} className={`col-row ${c.overdue ? 'overdue' : ''}`}>
                  <div className="av">{initials(c.name)}</div>
                  <div>
                    <div className="li-name">{c.name}</div>
                    <div className="li-meta">{c.location} · {c.partner}</div>
                    <div className="partner">{sub}</div>
                  </div>
                  <span className={`mode-pill ${c.mode.toLowerCase().replace(' ', '-')}`}>{c.mode}</span>
                  <div className="li-amount">₹{fmtINR(c.amount)}</div>
                </div>
              );
            })}
            <Pagination
              page={dueP.page}
              totalPages={dueP.totalPages}
              onPageChange={dueP.setPage}
              totalItems={dueP.total}
              pageSize={dueP.pageSize}
            />
          </div>
          <div className="col-totals">
            <div className="col-total due">
              <div className="lbl">Total Due</div>
              <div className="val">₹2,01,540</div>
            </div>
            <div className="col-total pending">
              <div className="lbl">Pending</div>
              <div className="val">₹16,820</div>
            </div>
            <div className="col-total">
              <div className="lbl">Customers</div>
              <div className="val" style={{ color: 'var(--text)' }}>28</div>
            </div>
          </div>
        </div>

        <div className="col-card">
          <div className="col-card-h">
            <h3>Collected <span className="col-count">{DONE.length}</span></h3>
            <span className="pill success">92% efficiency</span>
          </div>
          <div className="col-list">
            {doneP.pageItems.map((c, i) => (
              <div key={i} className="col-row">
                <div className="av gold">{initials(c.name)}</div>
                <div>
                  <div className="li-name">{c.name}</div>
                  <div className="li-meta">{c.location} · {c.partner}</div>
                  <div className="partner">{c.time}</div>
                </div>
                <span className={`mode-pill ${c.mode.toLowerCase().replace(' ', '-')}`}>{c.mode}</span>
                <div className="li-amount" style={{ color: 'var(--success)' }}>+₹{fmtINR(c.amount)}</div>
              </div>
            ))}
            <Pagination
              page={doneP.page}
              totalPages={doneP.totalPages}
              onPageChange={doneP.setPage}
              totalItems={doneP.total}
              pageSize={doneP.pageSize}
            />
          </div>
          <div className="col-totals">
            <div className="col-total collected">
              <div className="lbl">Total Collected</div>
              <div className="val">₹2,00,920</div>
            </div>
            <div className="col-total">
              <div className="lbl">Cash</div>
              <div className="val" style={{ color: 'var(--primary)' }}>₹49,500</div>
            </div>
            <div className="col-total">
              <div className="lbl">UPI</div>
              <div className="val" style={{ color: 'var(--violet)' }}>₹76,200</div>
            </div>
            <div className="col-total">
              <div className="lbl">Bank Transfer</div>
              <div className="val" style={{ color: 'var(--blue)' }}>₹38,800</div>
            </div>
            <div className="col-total">
              <div className="lbl">NEFT</div>
              <div className="val" style={{ color: 'var(--amber)' }}>₹36,420</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
