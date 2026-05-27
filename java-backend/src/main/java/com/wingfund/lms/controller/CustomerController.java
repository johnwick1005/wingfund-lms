package com.wingfund.lms.controller;

import com.wingfund.lms.data.DataStore;
import com.wingfund.lms.model.Customer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final DataStore store;

    public CustomerController(DataStore store) {
        this.store = store;
    }

    @GetMapping
    public Map<String, Object> list(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String q) {

        List<Customer> result = store.customers.stream()
            .filter(c -> status == null || status.equals("all") || c.status().equals(status))
            .filter(c -> q == null || (c.name() + " " + c.id() + " " + c.mobile() + " " + c.location())
                    .toLowerCase().contains(q.toLowerCase()))
            .toList();

        return Map.of("total", store.customers.size(), "results", result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> get(@PathVariable String id) {
        return store.customers.stream()
            .filter(c -> c.id().equals(id))
            .findFirst()
            .<ResponseEntity<Object>>map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(404).body(Map.of("error", "Customer not found")));
    }
}
