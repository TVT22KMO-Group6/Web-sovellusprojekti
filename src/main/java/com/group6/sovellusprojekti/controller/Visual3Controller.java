package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Temperature_evolution;
import com.group6.sovellusprojekti.service.Visual3Service;

@RestController
@RequestMapping("/api/visual3")
public class Visual3Controller {

    @Autowired
    private Visual3Service visual3Service;

    /**
     * Get all temperature evolutions endpoint
     * 
     * @return List<Temperature_evolution>
     */
    @GetMapping
    public List<Temperature_evolution> getAllData() {
        return visual3Service.getAllData();
    }

    /**
     * Get all global type temperature evolutions endpoint
     * 
     * @return List<Temperature_evolution>
     */
    @GetMapping("/type/Global")
    public List<Temperature_evolution> getGlobalData() {
        return visual3Service.getGlobalData();
    }

    /**
     * Get all carbon type temperature evolutions endpoint
     * 
     * @return List<Temperature_evolution>
     */
    @GetMapping("/type/Carbon")
    public List<Temperature_evolution> getCarbonData() {
        return visual3Service.getCarbonData();
    }

    @GetMapping("/type/Event")
    public List<Temperature_evolution> getEventData() {
        return visual3Service.getEventData();
    }
}
