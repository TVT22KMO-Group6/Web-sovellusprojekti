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

    /**
     * Get all temperature evolutions
     * 
     * @return List<Temperature_evolution>
     */
    public List<Temperature_evolution> getAllData() {
        return teRepository.findAll();
      }

      /**
       * Get global temperature evolutions
       *
       * @return List<Temperature_evolution>
       */
      public List<Temperature_evolution> getGlobalData() {
        return teRepository.findByType("Global");
      }
      
      /**
       * Get all carbon data
       *
       * @return List<Temperature_evolution>
       */
      public List<Temperature_evolution> getCarbonData() {
        return teRepository.findByType("Carbon");
      }

      public List<Temperature_evolution> getEventData() {
        return teRepository.findByType("Event");
      } 
      
}
