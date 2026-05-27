package com.wingfund.lms.model;

public record Customer(
    String id,
    String name,
    String mobile,
    String location,
    int loans,
    int outstanding,
    String status
) {}
