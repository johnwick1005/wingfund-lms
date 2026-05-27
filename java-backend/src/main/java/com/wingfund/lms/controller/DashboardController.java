package com.wingfund.lms.controller;

import com.wingfund.lms.data.DataStore;
import com.wingfund.lms.model.Disbursal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DataStore store;

    public DashboardController(DataStore store) {
        this.store = store;
    }

    @GetMapping("/stats")
    public Map<String, Object> stats() {
        return store.dashboardStats;
    }

    @GetMapping("/disbursals")
    public List<Disbursal> disbursals() {
        return store.recentDisbursals;
    }
}
