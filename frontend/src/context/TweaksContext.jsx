import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'wf-theme';

const DEFAULTS = {
  primaryColor:   null,
  accentColor:    null,
  density:        'regular',
  denseDashboard: false,
  customerView:   'panel',
  showTamil:      true,
  theme:          'light',
};

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (_) {}
  return DEFAULTS.theme;
}

const TweaksContext = createContext(null);

export function TweaksProvider({ children }) {
  const [tweaks, setTweaksState] = useState({ ...DEFAULTS, theme: initialTheme() });

  function setTweaks(edits) {
    setTweaksState(prev => ({ ...prev, ...edits }));
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    } catch (_) {}
  }

  function toggleTheme() {
    setTweaks({ theme: tweaks.theme === 'dark' ? 'light' : 'dark' });
  }

  // Apply light/dark theme + persist.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    try { localStorage.setItem(STORAGE_KEY, tweaks.theme); } catch (_) {}
  }, [tweaks.theme]);

  // Only override brand colors when the edit-mode picker actively sets them,
  // so the theme stylesheet stays authoritative by default.
  useEffect(() => {
    const root = document.documentElement;
    if (tweaks.primaryColor) root.style.setProperty('--primary', tweaks.primaryColor);
    if (tweaks.accentColor)  root.style.setProperty('--accent',  tweaks.accentColor);
  }, [tweaks.primaryColor, tweaks.accentColor]);

  useEffect(() => {
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
  }, []);

  return (
    <TweaksContext.Provider value={{ tweaks, setTweaks, toggleTheme }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks() {
  return useContext(TweaksContext);
}
