package com.wingfund.lms.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @GetMapping("/summary")
    public Map<String, Object> summary() {
        return Map.of(
            "period", "Apr 2026",
            "pnl", Map.of(
                "revenue",   3840000,
                "costs",     2360000,
                "netIncome", 1482000,
                "growth",    18
            ),
            "npa", Map.of(
                "gross",      2.31,
                "net",        1.04,
                "provisions", 418000,
                "change",     -0.4
            ),
            "partners", List.of(
                Map.of("name", "Senthil R.", "efficiency", 96.4),
                Map.of("name", "Mohan K.",   "efficiency", 88.1),
                Map.of("name", "Arun V.",    "efficiency", 81.6)
            ),
            "disbursals", Map.of(
                "total",        5420000,
                "growth",       8,
                "avgTicket",    28400,
                "approvalRate", 71
            ),
            "collections", Map.of(
                "efficiency", 94.2,
                "target",     92,
                "upiShare",   58,
                "cashShare",  42
            ),
            "portfolio", Map.of(
                "avgVintage", 14.3,
                "segments", List.of(
                    Map.of("label", "0–6mo",   "pct", 36),
                    Map.of("label", "6–12mo",  "pct", 28),
                    Map.of("label", "12–24mo", "pct", 20),
                    Map.of("label", "24+mo",   "pct", 16)
                )
            )
        );
    }
}
