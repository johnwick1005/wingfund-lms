package com.wingfund.lms.model;

public record CollectionDone(
    String name,
    String location,
    int amount,
    String mode,
    String partner,
    String time
) {}
