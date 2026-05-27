package com.wingfund.lms.model;

public record CollectionDue(
    String name,
    String location,
    int amount,
    String mode,
    String partner,
    boolean overdue,
    boolean inTransit,
    String scheduled
) {}
