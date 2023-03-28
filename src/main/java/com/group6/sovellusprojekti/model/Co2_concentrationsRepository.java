package com.group6.sovellusprojekti.model;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Co2_concentrationsRepository extends JpaRepository<Co2_concentrations, Integer> {
    List<Co2_concentrations> findByTimeframe(String timeframe);
    List<Co2_concentrations> findByIceCore(int iceCore);
}