import React, { useState } from 'react';

const STEPS = [
  { num: '01', label: 'Customer' },
  { num: '02', label: 'Loan terms' },
  { num: '03', label: 'KYC docs' },
  { num: '04', label: 'Review' },
];

function Step1() {
  return (
    <div className="field-grid">
      <div className="field">
        <label>Customer type</label>
        <select><option>Existing customer</option><option>New customer</option></select>
      </div>
      <div className="field">
        <label>Customer ID / Search</label>
        <input placeholder="Search by customer ID or name" />
      </div>
      <div className="field">
        <label>Mobile (verified)</label>
        <input placeholder="+91 98xxx xxx21" />
      </div>
      <div className="field">
        <label>Business type</label>
        <select><option>Retail / Vendor</option><option>Tea stall</option><option>Tailoring</option><option>Auto / Cab</option></select>
      </div>
      <div className="field full">
        <label>Address (shop)</label>
        <input placeholder="Shop address with city and PIN code" />
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="field-grid">
      <div className="field"><label>Principal (₹)</label><input placeholder="25,000" /></div>
      <div className="field"><label>Tenure (months)</label><input placeholder="12" /></div>
      <div className="field"><label>Interest rate</label><input placeholder="18% p.a." /></div>
      <div className="field">
        <label>Repayment frequency</label>
        <select><option>Daily</option><option>Weekly</option><option>Monthly</option></select>
      </div>
      <div className="field full">
        <label>Purpose</label>
        <textarea placeholder="Working capital, inventory purchase, equipment upgrade..." />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="field-grid">
      <div className="field"><label>Aadhaar number</label><input placeholder="xxxx xxxx 4912" /></div>
      <div className="field"><label>PAN</label><input placeholder="ABCDE1234F" /></div>
      <div className="field full"><label>Photo + signature</label><input type="file" /></div>
      <div className="field full">
        <label>Reference (other shopkeeper)</label>
        <input placeholder="Reference name or customer ID" />
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '12px', padding: '18px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
        Application summary
      </div>
      {[
        ['Customer',  'Ravi Kumar (WGF-2102)'],
        ['Principal', '₹25,000'],
        ['Tenure',    '12 months'],
        ['Rate',      '18% p.a.'],
        ['Daily EMI', '₹91'],
      ].map(([k, v]) => (
        <div key={k} className="kv-row">
          <span style={{ color: 'var(--muted)' }}>{k}</span>
          <span className="v">{v}</span>
        </div>
      ))}
      <div className="kv-row">
        <span style={{ color: 'var(--muted)' }}>Approval</span>
        <span className="v"><span className="pill success" style={{ verticalAlign: 'middle' }}>Ready to disburse</span></span>
      </div>
    </div>
  );
}

const STEP_CONTENT = [Step1, Step2, Step3, Step4];

export default function LoanModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  function handleClose() {
    setStep(1);
    onClose();
  }

  function next() {
    if (step === 4) { handleClose(); return; }
    setStep(s => s + 1);
  }
  function back() {
    if (step > 1) setStep(s => s - 1);
  }

  const StepContent = STEP_CONTENT[step - 1];

  return (
    <div
      className={`modal-bg ${isOpen ? 'show' : ''}`}
      onClick={e => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal" role="dialog" aria-labelledby="lm-title">
        <div className="modal-h">
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 700 }}>
              NEW APPLICATION
            </div>
            <h2 id="lm-title">Create loan application</h2>
          </div>
          <button className="modal-x" onClick={handleClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="steps">
            {STEPS.map((s, i) => {
              const n = i + 1;
              const cls = n === step ? 'step active' : n < step ? 'step done' : 'step';
              return (
                <div key={s.num} className={cls}>
                  <div className="step-bar" />
                  <div className="step-num">{s.num}</div>
                  <div className="step-label">{s.label}</div>
                </div>
              );
            })}
          </div>
          <StepContent />
        </div>

        <div className="modal-f">
          <button
            className="btn btn-ghost"
            onClick={back}
            style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
          >
            Back
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-ghost" onClick={handleClose}>Cancel</button>
            <button className="btn btn-primary" onClick={next}>
              <span className="accent" />
              {step === 4 ? 'Submit application' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
