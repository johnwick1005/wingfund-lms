import React, { createContext, useContext, useEffect, useState } from 'react';

const DEFAULTS = {
  primaryColor:   '#8C5A82',
  accentColor:    '#C9A961',
  density:        'regular',
  denseDashboard: false,
  customerView:   'panel',
  showTamil:      true,
};

const TweaksContext = createContext(null);

export function TweaksProvider({ children }) {
  const [tweaks, setTweaksState] = useState(DEFAULTS);

  function setTweaks(edits) {
    setTweaksState(prev => ({ ...prev, ...edits }));
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    } catch (_) {}
  }

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', tweaks.primaryColor);
    root.style.setProperty('--accent',  tweaks.accentColor);

    const handler = (e) => {
      const t = e.data?.type;
      if (t === '__activate_edit_mode') {
        document.getElementById('twk-fab')?.classList.add('show');
      } else if (t === '__deactivate_edit_mode') {
        document.getElementById('twk-fab')?.classList.remove('show');
        document.getElementById('twk-panel')?.classList.remove('show');
      }
    };
    window.addEventListener('message', handler);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}
    return () => window.removeEventListener('message', handler);
  }, [tweaks.primaryColor, tweaks.accentColor]);

  return (
    <TweaksContext.Provider value={{ tweaks, setTweaks }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks() {
  return useContext(TweaksContext);
}
