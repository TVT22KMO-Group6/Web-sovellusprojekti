package com.group6.sovellusprojekti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Temperature_evolution;
import com.group6.sovellusprojekti.model.Temperature_evolutionRepository;

@Service
public class Visual3Service {
    @Autowired
    private Temperature_evolutionRepository temperature_evolutionRepository;

    public List<Temperature_evolution> getAllData() {
        return temperature_evolutionRepository.findAll();
      }
      
}
