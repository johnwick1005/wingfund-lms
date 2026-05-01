const BASE = '/api';

async function get(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const api = {
  dashboard: {
    stats:      () => get('/dashboard/stats'),
    disbursals: () => get('/dashboard/disbursals'),
  },
  customers: {
    list:   (params = {}) => get('/customers?' + new URLSearchParams(params)),
    get:    (id)          => get('/customers/' + id),
  },
  loans: {
    list:   (params = {}) => get('/loans?' + new URLSearchParams(params)),
    get:    (id)          => get('/loans/' + id),
  },
  collections: {
    due:     () => get('/collections/due'),
    done:    () => get('/collections/done'),
    summary: () => get('/collections/summary'),
  },
  reports: {
    summary: () => get('/reports/summary'),
  },
};
