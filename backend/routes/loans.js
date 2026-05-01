import { Router } from 'express';
import { LOANS } from '../data/index.js';

const router = Router();

router.get('/', (req, res) => {
  const { status, q } = req.query;
  let list = [...LOANS];

  if (status && status !== 'all') {
    if (status === 'active') {
      list = list.filter(l => ['active', 'watch', 'overdue'].includes(l.status));
    } else {
      list = list.filter(l => l.status === status);
    }
  }
  if (q) {
    const search = q.toLowerCase();
    list = list.filter(l =>
      [l.id, l.customer, l.location].join(' ').toLowerCase().includes(search)
    );
  }

  res.json({ total: LOANS.length, results: list });
});

router.get('/:id', (req, res) => {
  const loan = LOANS.find(l => l.id === req.params.id);
  if (!loan) return res.status(404).json({ error: 'Loan not found' });
  res.json(loan);
});

router.post('/', (req, res) => {
  const newLoan = { id: `WGF-L-${Date.now()}`, ...req.body, status: 'pending', progress: 0 };
  LOANS.push(newLoan);
  res.status(201).json(newLoan);
});

export default router;
