package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmissionSubSectorRepository extends JpaRepository<EmissionSubSector, Integer> {
    List<EmissionSubSector> findAll();
    List<EmissionSubSector> findByEmissionSector_Id(Integer co2EmissionSectorId);

}