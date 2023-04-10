package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmissionSectorRepository extends JpaRepository<EmissionSector, Integer> {
    List<EmissionSector> findAll();
}