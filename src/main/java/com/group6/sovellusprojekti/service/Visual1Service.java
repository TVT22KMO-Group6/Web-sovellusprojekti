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

    public List<Temperature> getAllTemperatures() {
        return temperatureRepository.findAll();
    }

    public List<Temperature> getAllMonthlyTemperatures() {
        return temperatureRepository.findByTimeframe("Monthly");
    }

    public List<Temperature> getAllAnnualTemperatures() {
        return temperatureRepository.findByTimeframe("Annual");
    }

    public List<Temperature> getAllGlobalHemispheres() {
        return temperatureRepository.findByHemisphere("Global");
    }
}
