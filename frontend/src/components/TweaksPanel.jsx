import React, { useState } from 'react';
import { useTweaks } from '../context/TweaksContext.jsx';

export default function TweaksPanel() {
  const { tweaks, setTweaks } = useTweaks();
  const [open, setOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode')   setFabVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') { setFabVisible(false); setOpen(false); }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  function dismiss() {
    setOpen(false);
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (_) {}
  }

  return (
    <>
      <button
        id="twk-fab"
        className={`twk-fab ${fabVisible ? 'show' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="tk-dot" />TWEAKS
      </button>

      <div id="twk-panel" className={`twk-panel ${open ? 'show' : ''}`}>
        <div className="twk-h">
          <h4>Tweaks</h4>
          <button onClick={dismiss} aria-label="Close">×</button>
        </div>
        <div className="twk-body">
          <div className="twk-section-h">Theme</div>

          <div className="twk-row">
            <label>Primary</label>
            <input
              type="color"
              className="twk-color"
              value={tweaks.primaryColor || '#09443F'}
              onChange={e => setTweaks({ primaryColor: e.target.value })}
            />
          </div>
          <div className="twk-row">
            <label>Accent</label>
            <input
              type="color"
              className="twk-color"
              value={tweaks.accentColor || '#2D3748'}
              onChange={e => setTweaks({ accentColor: e.target.value })}
            />
          </div>

          <div className="twk-section-h">Layout</div>

          <div className="twk-row">
            <label>Density</label>
            <div className="twk-seg">
              {['compact', 'regular', 'comfy'].map(v => (
                <button
                  key={v}
                  className={tweaks.density === v ? 'on' : ''}
                  onClick={() => setTweaks({ density: v })}
                  style={{ textTransform: 'capitalize' }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="twk-row">
            <label>Dashboard mode</label>
            <div className="twk-seg">
              {[['false', 'Editorial'], ['true', 'Bloomberg']].map(([v, lbl]) => (
                <button
                  key={v}
                  className={String(tweaks.denseDashboard) === v ? 'on' : ''}
                  onClick={() => setTweaks({ denseDashboard: v === 'true' })}
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>

          <div className="twk-row">
            <label>Customer view</label>
            <div className="twk-seg">
              {[['panel', 'Slide panel'], ['modal', 'Modal']].map(([v, lbl]) => (
                <button
                  key={v}
                  className={tweaks.customerView === v ? 'on' : ''}
                  onClick={() => setTweaks({ customerView: v })}
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>

          <div className="twk-section-h">Locale</div>

          <div className="twk-row">
            <label>Show Tamil accents</label>
            <button
              className={`twk-toggle ${tweaks.showTamil ? 'on' : ''}`}
              aria-label="Toggle Tamil"
              onClick={() => setTweaks({ showTamil: !tweaks.showTamil })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
