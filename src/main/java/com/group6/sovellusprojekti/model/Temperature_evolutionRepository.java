package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Temperature_evolutionRepository extends JpaRepository<Temperature_evolution, Integer> {
    List<Temperature_evolution> findByYear(int year);
    List<Temperature_evolution> findByEvent(String event);
}
