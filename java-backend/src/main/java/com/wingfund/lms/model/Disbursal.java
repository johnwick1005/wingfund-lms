package com.wingfund.lms.model;

public record Disbursal(
    String name,
    String id,
    String location,
    int tenure,
    int rate,
    int amount
) {}
