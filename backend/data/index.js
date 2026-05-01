export const CUSTOMERS = [
  { id: 'WGF-2102', name: 'Ravi Kumar',         mobile: '+91 98xxx xxx21', location: 'T. Nagar',    loans: 2, outstanding: 38420, status: 'active' },
  { id: 'WGF-1840', name: 'Lakshmi Devi',       mobile: '+91 99xxx xxx07', location: 'Mylapore',    loans: 1, outstanding: 26420, status: 'active' },
  { id: 'WGF-1721', name: 'Murugan S.',         mobile: '+91 96xxx xxx48', location: 'Velachery',   loans: 1, outstanding: 14200, status: 'overdue' },
  { id: 'WGF-2014', name: 'Priya Subramaniam',  mobile: '+91 98xxx xxx33', location: 'Anna Nagar',  loans: 1, outstanding: 21400, status: 'active' },
  { id: 'WGF-1933', name: 'Karthik Raja',       mobile: '+91 99xxx xxx12', location: 'Velachery',   loans: 2, outstanding: 48200, status: 'active' },
  { id: 'WGF-1645', name: 'Selvi Maran',        mobile: '+91 95xxx xxx18', location: 'Tambaram',    loans: 1, outstanding: 32100, status: 'active' },
  { id: 'WGF-2210', name: 'Anand Pillai',       mobile: '+91 90xxx xxx04', location: 'Mylapore',    loans: 1, outstanding: 9100,  status: 'new' },
  { id: 'WGF-1488', name: 'Kavitha Ravi',       mobile: '+91 98xxx xxx91', location: 'T. Nagar',    loans: 1, outstanding: 5400,  status: 'active' },
  { id: 'WGF-1602', name: 'Senthil Vel',        mobile: '+91 99xxx xxx55', location: 'Tambaram',    loans: 1, outstanding: 18700, status: 'overdue' },
  { id: 'WGF-1359', name: 'Meena Krishnan',     mobile: '+91 96xxx xxx20', location: 'Anna Nagar',  loans: 1, outstanding: 11800, status: 'blocked' },
  { id: 'WGF-1991', name: 'Bhaskar Rao',        mobile: '+91 95xxx xxx38', location: 'T. Nagar',    loans: 2, outstanding: 54600, status: 'active' },
  { id: 'WGF-2245', name: 'Rajalakshmi K.',     mobile: '+91 98xxx xxx67', location: 'Mylapore',    loans: 1, outstanding: 7900,  status: 'new' },
];

export const LOANS = [
  { id: 'WGF-L-2840', customer: 'Lakshmi Devi',      location: 'Mylapore',   principal: 35000, outstanding: 26420, emi: 3250, tenure: 12, nextDue: '08 May', status: 'active',  progress: 0.24 },
  { id: 'WGF-L-2839', customer: 'Murugan S.',        location: 'Velachery',  principal: 15000, outstanding: 9800,  emi: 1430, tenure: 6,  nextDue: '04 May', status: 'watch',   progress: 0.35 },
  { id: 'WGF-L-2838', customer: 'Karthik Raja',      location: 'Velachery',  principal: 50000, outstanding: 48200, emi: 2800, tenure: 18, nextDue: '12 May', status: 'active',  progress: 0.04 },
  { id: 'WGF-L-2837', customer: 'Priya Subramaniam', location: 'Anna Nagar', principal: 25000, outstanding: 21400, emi: 2950, tenure: 9,  nextDue: '06 May', status: 'active',  progress: 0.14 },
  { id: 'WGF-L-2836', customer: 'Selvi Maran',       location: 'Tambaram',   principal: 40000, outstanding: 32100, emi: 3700, tenure: 12, nextDue: '03 May', status: 'watch',   progress: 0.20 },
  { id: 'WGF-L-2828', customer: 'Senthil Vel',       location: 'Tambaram',   principal: 20000, outstanding: 18700, emi: 1850, tenure: 12, nextDue: '28 Apr', status: 'overdue', progress: 0.06 },
  { id: 'WGF-L-2902', customer: 'Bhaskar Rao',       location: 'T. Nagar',   principal: 50000, outstanding: 0,     emi: 0,    tenure: 12, nextDue: '—',      status: 'pending', progress: 0 },
  { id: 'WGF-L-2820', customer: 'Anand Pillai',      location: 'Mylapore',   principal: 10000, outstanding: 9100,  emi: 920,  tenure: 12, nextDue: '09 May', status: 'active',  progress: 0.09 },
];

export const COLLECTIONS_DUE = [
  { name: 'Murugan S.',        location: 'Velachery',  amount: 1800, mode: 'Cash', partner: 'Mohan',   overdue: true,  inTransit: false, scheduled: null },
  { name: 'Priya Subramaniam', location: 'Anna Nagar', amount: 2950, mode: 'UPI',  partner: 'Mohan',   overdue: false, inTransit: true,  scheduled: null },
  { name: 'Selvi Maran',       location: 'Tambaram',   amount: 3300, mode: 'Cash', partner: 'Mohan',   overdue: false, inTransit: false, scheduled: '14:00' },
  { name: 'Senthil Vel',       location: 'Tambaram',   amount: 1850, mode: 'Cash', partner: 'Senthil', overdue: true,  inTransit: false, scheduled: null },
  { name: 'Bhaskar Rao',       location: 'T. Nagar',   amount: 4200, mode: 'UPI',  partner: 'Senthil', overdue: false, inTransit: false, scheduled: '15:30' },
  { name: 'Anand Pillai',      location: 'Mylapore',   amount: 1320, mode: 'UPI',  partner: 'Arun',    overdue: false, inTransit: false, scheduled: '16:00' },
];

export const COLLECTIONS_DONE = [
  { name: 'Ravi Kumar',     location: 'T. Nagar',   amount: 2400, mode: 'UPI',  partner: 'Mohan',   time: '09:14 AM' },
  { name: 'Lakshmi Devi',   location: 'Mylapore',   amount: 3250, mode: 'Cash', partner: 'Senthil', time: '10:02 AM' },
  { name: 'Karthik Raja',   location: 'Velachery',  amount: 4800, mode: 'UPI',  partner: 'Senthil', time: '08:22 AM' },
  { name: 'Kavitha Ravi',   location: 'T. Nagar',   amount: 1200, mode: 'UPI',  partner: 'Mohan',   time: '08:48 AM' },
  { name: 'Meena Krishnan', location: 'Anna Nagar', amount: 1700, mode: 'Cash', partner: 'Arun',    time: '09:33 AM' },
  { name: 'Rajalakshmi K.', location: 'Mylapore',   amount: 2100, mode: 'UPI',  partner: 'Senthil', time: '10:18 AM' },
];

export const DASHBOARD_STATS = {
  activeLoans: 847,
  totalDisbursed: '₹2.18 Cr',
  todayCollection: 184720,
  overdueAmount: 428150,
  overdueCount: 31,
  collectionTarget: 201540,
  collectionDate: '01 May 2026',
};

export const RECENT_DISBURSALS = [
  { name: 'Lakshmi Devi',      id: 'WGF-2840', location: 'Mylapore',   tenure: 12, rate: 18, amount: 35000 },
  { name: 'Murugan S.',        id: 'WGF-2839', location: 'T. Nagar',   tenure: 6,  rate: 22, amount: 15000 },
  { name: 'Karthik Raja',      id: 'WGF-2838', location: 'Velachery',  tenure: 18, rate: 16, amount: 50000 },
  { name: 'Priya Subramaniam', id: 'WGF-2837', location: 'Anna Nagar', tenure: 9,  rate: 20, amount: 25000 },
  { name: 'Selvi Maran',       id: 'WGF-2836', location: 'Tambaram',   tenure: 12, rate: 18, amount: 40000 },
];
