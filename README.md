# WingFund LMS

Microfinance loan management system — editorial fintech aesthetic, built for Chennai.

## Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | Vite + React 18               |
| Backend  | Node.js + Express             |
| Fonts    | Fraunces · Plus Jakarta Sans · JetBrains Mono |

---

## Quick start

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd wingfund-lms
```

### 2. Install all dependencies

```bash
npm run install:all
```

This installs packages for both `frontend/` and `backend/` in one shot.

### 3. Start both servers

```bash
npm run dev
```

| Service  | URL                        |
|----------|----------------------------|
| Frontend | http://localhost:5173      |
| API      | http://localhost:3001      |

The frontend dev server automatically proxies `/api/*` requests to the backend, so no CORS config needed during development.

---

## Project structure

```
wingfund-lms/
├── package.json          # root — runs both servers via concurrently
│
├── frontend/             # Vite + React
│   ├── src/
│   │   ├── api/          # fetch wrapper for all backend routes
│   │   ├── context/      # TweaksContext — theme/density/locale state
│   │   ├── utils/        # fmtINR (Indian number formatting), initials
│   │   ├── components/   # Sidebar, TopBar, CustomerPanel, LoanModal, TweaksPanel
│   │   ├── screens/      # Dashboard, Customers, Loans, Collections, Reports
│   │   ├── App.jsx       # layout + navigation state
│   │   └── index.css     # full design system (CSS variables, no framework)
│   └── vite.config.js    # /api proxy → localhost:3001
│
└── backend/              # Express REST API
    ├── data/index.js     # seed data (swap for a real DB later)
    ├── routes/           # customers, loans, collections, reports, dashboard
    └── server.js         # CORS, JSON body parser, route mounts
```

---

## Available API routes

```
GET  /api/health
GET  /api/dashboard/stats
GET  /api/dashboard/disbursals

GET  /api/customers            ?status=active|overdue|blocked|new  &q=search
GET  /api/customers/:id

GET  /api/loans                ?status=active|pending|closed       &q=search
GET  /api/loans/:id
POST /api/loans

GET  /api/collections/due
GET  /api/collections/done
GET  /api/collections/summary

GET  /api/reports/summary
```

---

## Production build

```bash
npm run build          # builds frontend/dist/
```

Serve `frontend/dist/` with any static host (Vercel, Netlify, nginx).
Run `backend/server.js` on any Node.js host (Railway, Render, Fly.io).

---

## Next steps to scale

- Replace `backend/data/index.js` with a real database (PostgreSQL recommended)
- Add auth middleware to Express routes (JWT or sessions)
- Wire `frontend/src/api/index.js` calls into screen components (currently screens use local data for fast rendering)
- Add `.env` for `PORT`, `DATABASE_URL`, `JWT_SECRET`
