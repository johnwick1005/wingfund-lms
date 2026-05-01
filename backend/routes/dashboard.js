import { Router } from 'express';
import { DASHBOARD_STATS, RECENT_DISBURSALS } from '../data/index.js';

const router = Router();

router.get('/stats', (_req, res) => res.json(DASHBOARD_STATS));
router.get('/disbursals', (_req, res) => res.json(RECENT_DISBURSALS));

export default router;
