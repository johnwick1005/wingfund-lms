import { Router } from 'express';
import { CUSTOMERS } from '../data/index.js';

const router = Router();

router.get('/', (req, res) => {
  const { status, q } = req.query;
  let list = [...CUSTOMERS];

  if (status && status !== 'all') {
    list = list.filter(c => c.status === status);
  }
  if (q) {
    const search = q.toLowerCase();
    list = list.filter(c =>
      [c.name, c.id, c.mobile, c.location].join(' ').toLowerCase().includes(search)
    );
  }

  res.json({ total: CUSTOMERS.length, results: list });
});

router.get('/:id', (req, res) => {
  const customer = CUSTOMERS.find(c => c.id === req.params.id);
  if (!customer) return res.status(404).json({ error: 'Customer not found' });
  res.json(customer);
});

export default router;
