package com.group6.sovellusprojekti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Temperature;
import com.group6.sovellusprojekti.model.TemperatureRepository;

@Service
public class Visual1Service {
    @Autowired
    private TemperatureRepository temperatureRepository;

    /**
     * Get all temperatures
     *
     * @return List<Temperature>
     */
    public List<Temperature> getAllTemperatures() {
        return temperatureRepository.findAll();
    }

    /**
     * Get all monthly temperatures
     *
     * @return List<Temperature>
     */
    public List<Temperature> getAllMonthlyTemperatures() {
        return temperatureRepository.findByTimeframe("Monthly");
    }

    /**
     * Get all annual temperatures
     *
     * @return List<Temperature>
     */
    public List<Temperature> getAllAnnualTemperatures() {
        return temperatureRepository.findByTimeframe("Annual");
    }

    /**
     * Get all global hemispheres
     *
     * @return List<Temperature>
     */
    public List<Temperature> getAllGlobalHemispheres() {
        return temperatureRepository.findByHemisphere("Global");
    }
}
