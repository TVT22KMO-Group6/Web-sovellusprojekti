package com.group6.sovellusprojekti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Temperature_evolution;
import com.group6.sovellusprojekti.model.Temperature_evolutionRepository;

import java.util.List;

@Service
public class Visual3Service {
    @Autowired
    private Temperature_evolutionRepository teRepository;

    public List<Temperature_evolution> getAllData() {
        return teRepository.findAll();
      }

      public List<Temperature_evolution> getGlobalData() {
        return teRepository.findByType("Global");
      }
      
      public List<Temperature_evolution> getCarbonData() {
        return teRepository.findByType("Carbon");
      }
}
