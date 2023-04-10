package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Temperature;
import com.group6.sovellusprojekti.service.Visual1Service;

@RestController
@RequestMapping("/api/visual1")
public class Visual1Controller {
    
    @Autowired
    private Visual1Service visual1Service;

    @GetMapping
    public List<Temperature> getTemperatures() {
        return visual1Service.getAllTemperatures();
    }

    @GetMapping("/timeframe/annual")
    public List<Temperature> getAnnualTemperatures() {
        return visual1Service.getAllAnnualTemperatures();
    }
}
