import React, { useState, useEffect } from 'react';
import { TweaksProvider, useTweaks } from './context/TweaksContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import CustomerPanel from './components/CustomerPanel.jsx';
import LoanModal from './components/LoanModal.jsx';
import TweaksPanel from './components/TweaksPanel.jsx';
import Dashboard from './screens/Dashboard.jsx';
import Customers from './screens/Customers.jsx';
import Loans from './screens/Loans.jsx';
import Collections from './screens/Collections.jsx';
import Reports from './screens/Reports.jsx';
import Login from './screens/Login.jsx';

function AppShell({ onLogout }) {
  const { tweaks } = useTweaks();
  const [screen,      setScreen]     = useState('dashboard');
  const [loanOpen,    setLoanOpen]   = useState(false);
  const [customer,    setCustomer]   = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        setLoanOpen(false);
        setCustomer(null);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className="app"
      data-density={tweaks.density}
      data-dash-dense={String(tweaks.denseDashboard)}
    >
      <Sidebar activeScreen={screen} onNavigate={setScreen} onLogout={onLogout} />

      <main className="main">
        <TopBar activeScreen={screen} />

        <div className="page page-screens">
          {screen === 'dashboard'   && <Dashboard   onNewLoan={() => setLoanOpen(true)} onNavigate={setScreen} />}
          {screen === 'customers'   && <Customers   onOpenCustomer={setCustomer} />}
          {screen === 'loans'       && <Loans       onNewLoan={() => setLoanOpen(true)} />}
          {screen === 'collections' && <Collections />}
          {screen === 'reports'     && <Reports />}
        </div>
      </main>

      <LoanModal    isOpen={loanOpen} onClose={() => setLoanOpen(false)} />
      <CustomerPanel customer={customer} onClose={() => setCustomer(null)} />
      <TweaksPanel />
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <TweaksProvider>
      <AppShell onLogout={() => setUser(null)} />
    </TweaksProvider>
  );
}
