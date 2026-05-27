package com.wingfund.lms.model;

public record Loan(
    String id,
    String customer,
    String location,
    int principal,
    int outstanding,
    int emi,
    int tenure,
    String nextDue,
    String status,
    double progress
) {}
