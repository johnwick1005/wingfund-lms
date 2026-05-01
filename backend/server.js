import express from 'express';
import cors from 'cors';
import customersRouter from './routes/customers.js';
import loansRouter from './routes/loans.js';
import collectionsRouter from './routes/collections.js';
import reportsRouter from './routes/reports.js';
import dashboardRouter from './routes/dashboard.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/dashboard', dashboardRouter);
app.use('/api/customers', customersRouter);
app.use('/api/loans', loansRouter);
app.use('/api/collections', collectionsRouter);
app.use('/api/reports', reportsRouter);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'WingFund LMS API' }));

app.listen(PORT, () => {
  console.log(`WingFund API running on http://localhost:${PORT}`);
});
