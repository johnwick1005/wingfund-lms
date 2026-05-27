package com.wingfund.lms.controller;

import com.wingfund.lms.data.DataStore;
import com.wingfund.lms.model.CollectionDone;
import com.wingfund.lms.model.CollectionDue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    private final DataStore store;

    public CollectionController(DataStore store) {
        this.store = store;
    }

    @GetMapping("/due")
    public List<CollectionDue> due() {
        return store.collectionsDue;
    }

    @GetMapping("/done")
    public List<CollectionDone> done() {
        return store.collectionsDone;
    }

    @GetMapping("/summary")
    public Map<String, Object> summary() {
        int totalDue  = store.collectionsDue.stream().mapToInt(CollectionDue::amount).sum();
        int totalDone = store.collectionsDone.stream().mapToInt(CollectionDone::amount).sum();
        return Map.of(
            "due",        totalDue,
            "collected",  totalDone,
            "pending",    totalDue - totalDone,
            "countDue",   store.collectionsDue.size(),
            "countDone",  store.collectionsDone.size(),
            "efficiency", Math.round((totalDone * 100.0) / (totalDue + totalDone))
        );
    }
}
