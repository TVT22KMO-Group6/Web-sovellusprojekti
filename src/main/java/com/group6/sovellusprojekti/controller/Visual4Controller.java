package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.TEmission;
import com.group6.sovellusprojekti.service.Visual4Service;

@RestController

@RequestMapping("/api/visual4")
public class Visual4Controller {
    @Autowired
    private Visual4Service visual4Service;

    /**
     * Get all territorial emissions endpoint
     * 
     * @return List<TEmission>
     */
     @GetMapping
    public List<TEmission> getTEmissions() {
        return visual4Service.getAllTEmissions();
    }
    
    /**
     * Get territorial emissions by country endpoint
     * 
     * @param country
     * @return List<TEmission>
     */
    @GetMapping("/country")
    public List<TEmission> getTEmissionsByCountry(String country) {
        return visual4Service.getAllTEmissionsByCountry(country);
    }
    
    /**
     * Get territorial emissions by year endpoint
     * 
     * @param year
     * @return List<TEmission>
     */
    @GetMapping("/year")
    public List<TEmission> getTEmissionsByYear(int year) {
        return visual4Service.getAllTEmissionsByYear(year);
    }
  


}
