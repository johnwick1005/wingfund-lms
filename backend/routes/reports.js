import { Router } from 'express';

const router = Router();

router.get('/summary', (_req, res) => {
  res.json({
    period: 'Apr 2026',
    pnl: { revenue: 3840000, costs: 2360000, netIncome: 1482000, growth: 18 },
    npa: { gross: 2.31, net: 1.04, provisions: 418000, change: -0.4 },
    partners: [
      { name: 'Senthil R.', efficiency: 96.4 },
      { name: 'Mohan K.',   efficiency: 88.1 },
      { name: 'Arun V.',    efficiency: 81.6 },
    ],
    disbursals: { total: 5420000, growth: 8, avgTicket: 28400, approvalRate: 71 },
    collections: { efficiency: 94.2, target: 92, upiShare: 58, cashShare: 42 },
    portfolio: { avgVintage: 14.3, segments: [
      { label: '0–6mo',  pct: 36 },
      { label: '6–12mo', pct: 28 },
      { label: '12–24mo',pct: 20 },
      { label: '24+mo',  pct: 16 },
    ]},
  });
});

export default router;
