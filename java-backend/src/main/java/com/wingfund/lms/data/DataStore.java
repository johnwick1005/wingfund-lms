package com.wingfund.lms.data;

import com.wingfund.lms.model.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class DataStore {

    public final List<Customer> customers = new ArrayList<>(List.of(
        new Customer("WGF-2102", "Ravi Kumar",         "+91 98xxx xxx21", "T. Nagar",   2, 38420, "active"),
        new Customer("WGF-1840", "Lakshmi Devi",       "+91 99xxx xxx07", "Mylapore",   1, 26420, "active"),
        new Customer("WGF-1721", "Murugan S.",         "+91 96xxx xxx48", "Velachery",  1, 14200, "overdue"),
        new Customer("WGF-2014", "Priya Subramaniam",  "+91 98xxx xxx33", "Anna Nagar", 1, 21400, "active"),
        new Customer("WGF-1933", "Karthik Raja",       "+91 99xxx xxx12", "Velachery",  2, 48200, "active"),
        new Customer("WGF-1645", "Selvi Maran",        "+91 95xxx xxx18", "Tambaram",   1, 32100, "active"),
        new Customer("WGF-2210", "Anand Pillai",       "+91 90xxx xxx04", "Mylapore",   1,  9100, "new"),
        new Customer("WGF-1488", "Kavitha Ravi",       "+91 98xxx xxx91", "T. Nagar",   1,  5400, "active"),
        new Customer("WGF-1602", "Senthil Vel",        "+91 99xxx xxx55", "Tambaram",   1, 18700, "overdue"),
        new Customer("WGF-1359", "Meena Krishnan",     "+91 96xxx xxx20", "Anna Nagar", 1, 11800, "blocked"),
        new Customer("WGF-1991", "Bhaskar Rao",        "+91 95xxx xxx38", "T. Nagar",   2, 54600, "active"),
        new Customer("WGF-2245", "Rajalakshmi K.",     "+91 98xxx xxx67", "Mylapore",   1,  7900, "new")
    ));

    public final List<Loan> loans = new ArrayList<>(List.of(
        new Loan("WGF-L-2840", "Lakshmi Devi",      "Mylapore",   35000, 26420, 3250, 12, "08 May", "active",  0.24),
        new Loan("WGF-L-2839", "Murugan S.",        "Velachery",  15000,  9800, 1430,  6, "04 May", "watch",   0.35),
        new Loan("WGF-L-2838", "Karthik Raja",      "Velachery",  50000, 48200, 2800, 18, "12 May", "active",  0.04),
        new Loan("WGF-L-2837", "Priya Subramaniam", "Anna Nagar", 25000, 21400, 2950,  9, "06 May", "active",  0.14),
        new Loan("WGF-L-2836", "Selvi Maran",       "Tambaram",   40000, 32100, 3700, 12, "03 May", "watch",   0.20),
        new Loan("WGF-L-2828", "Senthil Vel",       "Tambaram",   20000, 18700, 1850, 12, "28 Apr", "overdue", 0.06),
        new Loan("WGF-L-2902", "Bhaskar Rao",       "T. Nagar",   50000,     0,    0, 12, "—",      "pending", 0.0),
        new Loan("WGF-L-2820", "Anand Pillai",      "Mylapore",   10000,  9100,  920, 12, "09 May", "active",  0.09)
    ));

    public final List<CollectionDue> collectionsDue = List.of(
        new CollectionDue("Murugan S.",        "Velachery",  1800, "Cash", "Mohan",   true,  false, null),
        new CollectionDue("Priya Subramaniam", "Anna Nagar", 2950, "UPI",  "Mohan",   false, true,  null),
        new CollectionDue("Selvi Maran",       "Tambaram",   3300, "Cash", "Mohan",   false, false, "14:00"),
        new CollectionDue("Senthil Vel",       "Tambaram",   1850, "Cash", "Senthil", true,  false, null),
        new CollectionDue("Bhaskar Rao",       "T. Nagar",   4200, "UPI",  "Senthil", false, false, "15:30"),
        new CollectionDue("Anand Pillai",      "Mylapore",   1320, "UPI",  "Arun",    false, false, "16:00")
    );

    public final List<CollectionDone> collectionsDone = List.of(
        new CollectionDone("Ravi Kumar",     "T. Nagar",   2400, "UPI",  "Mohan",   "09:14 AM"),
        new CollectionDone("Lakshmi Devi",   "Mylapore",   3250, "Cash", "Senthil", "10:02 AM"),
        new CollectionDone("Karthik Raja",   "Velachery",  4800, "UPI",  "Senthil", "08:22 AM"),
        new CollectionDone("Kavitha Ravi",   "T. Nagar",   1200, "UPI",  "Mohan",   "08:48 AM"),
        new CollectionDone("Meena Krishnan", "Anna Nagar", 1700, "Cash", "Arun",    "09:33 AM"),
        new CollectionDone("Rajalakshmi K.", "Mylapore",   2100, "UPI",  "Senthil", "10:18 AM")
    );

    public final List<Disbursal> recentDisbursals = List.of(
        new Disbursal("Lakshmi Devi",      "WGF-2840", "Mylapore",   12, 18, 35000),
        new Disbursal("Murugan S.",        "WGF-2839", "T. Nagar",    6, 22, 15000),
        new Disbursal("Karthik Raja",      "WGF-2838", "Velachery",  18, 16, 50000),
        new Disbursal("Priya Subramaniam", "WGF-2837", "Anna Nagar",  9, 20, 25000),
        new Disbursal("Selvi Maran",       "WGF-2836", "Tambaram",   12, 18, 40000)
    );

    public final Map<String, Object> dashboardStats = Map.of(
        "activeLoans",       847,
        "totalDisbursed",    "₹2.18 Cr",
        "todayCollection",   184720,
        "overdueAmount",     428150,
        "overdueCount",      31,
        "collectionTarget",  201540,
        "collectionDate",    "01 May 2026"
    );
}
