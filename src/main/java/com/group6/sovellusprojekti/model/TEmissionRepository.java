package com.group6.sovellusprojekti.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TEmissionRepository extends JpaRepository<TEmission, Integer> {
    List<TEmission> findByEmission(int Emission);
    List<TEmission> findByYear(int Year);
    List<TEmission> findByCountry(String Country);
}