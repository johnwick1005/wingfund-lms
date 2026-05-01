import { Router } from 'express';
import { COLLECTIONS_DUE, COLLECTIONS_DONE } from '../data/index.js';

const router = Router();

router.get('/due', (_req, res) => res.json(COLLECTIONS_DUE));
router.get('/done', (_req, res) => res.json(COLLECTIONS_DONE));

router.get('/summary', (_req, res) => {
  const totalDue = COLLECTIONS_DUE.reduce((s, c) => s + c.amount, 0);
  const totalDone = COLLECTIONS_DONE.reduce((s, c) => s + c.amount, 0);
  res.json({
    due: totalDue,
    collected: totalDone,
    pending: totalDue - totalDone,
    countDue: COLLECTIONS_DUE.length,
    countDone: COLLECTIONS_DONE.length,
    efficiency: Math.round((totalDone / (totalDue + totalDone)) * 100),
  });
});

export default router;
