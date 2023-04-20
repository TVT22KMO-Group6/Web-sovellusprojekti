package com.group6.sovellusprojekti.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface Temperature_evolutionRepository extends JpaRepository<Temperature_evolution, Integer> {
     List<Temperature_evolution> findAll();
     List<Temperature_evolution> findByType(String type);
}
