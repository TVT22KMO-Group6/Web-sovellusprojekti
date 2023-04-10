package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TEmissionRepository extends JpaRepository<TEmission, Integer> {
    List<TEmission> findByEmission(String Emission);
    List<TEmission> findByYear(Integer Year);
    List<TEmission> getAllTEmission(Integer Emission);
    List<TEmission> findByCountry(String Country);
}