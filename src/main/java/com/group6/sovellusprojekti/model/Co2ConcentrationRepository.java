package com.group6.sovellusprojekti.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface Co2ConcentrationRepository extends JpaRepository<Co2Concentration, Integer> {
    List<Co2Concentration> findByTimeframe(String timeframe);
    List<Co2Concentration> findByIceCore(Integer iceCore);
}