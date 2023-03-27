package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TemperatureRepository extends JpaRepository<Temperature, Integer> {
    List<Temperature> findByTimeframe(String timeframe);
    
    List<Temperature> findByHemisphere(String hemisphere);
}