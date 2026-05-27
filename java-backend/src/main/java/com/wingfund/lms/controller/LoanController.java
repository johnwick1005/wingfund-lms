package com.wingfund.lms.controller;

import com.wingfund.lms.data.DataStore;
import com.wingfund.lms.model.Loan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private final DataStore store;
    private static final Set<String> ACTIVE_STATUSES = Set.of("active", "watch", "overdue");

    public LoanController(DataStore store) {
        this.store = store;
    }

    @GetMapping
    public Map<String, Object> list(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String q) {

        List<Loan> result = store.loans.stream()
            .filter(l -> {
                if (status == null || status.equals("all")) return true;
                if (status.equals("active")) return ACTIVE_STATUSES.contains(l.status());
                return l.status().equals(status);
            })
            .filter(l -> q == null || (l.id() + " " + l.customer() + " " + l.location())
                    .toLowerCase().contains(q.toLowerCase()))
            .toList();

        return Map.of("total", store.loans.size(), "results", result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> get(@PathVariable String id) {
        return store.loans.stream()
            .filter(l -> l.id().equals(id))
            .findFirst()
            .<ResponseEntity<Object>>map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(404).body(Map.of("error", "Loan not found")));
    }

    @PostMapping
    public ResponseEntity<Loan> create(@RequestBody Map<String, Object> body) {
        String newId = "WGF-L-" + System.currentTimeMillis();
        Loan loan = new Loan(
            newId,
            (String) body.getOrDefault("customer", ""),
            (String) body.getOrDefault("location", ""),
            ((Number) body.getOrDefault("principal", 0)).intValue(),
            0,
            ((Number) body.getOrDefault("emi", 0)).intValue(),
            ((Number) body.getOrDefault("tenure", 12)).intValue(),
            "—",
            "pending",
            0.0
        );
        store.loans.add(loan);
        return ResponseEntity.status(201).body(loan);
    }
}
