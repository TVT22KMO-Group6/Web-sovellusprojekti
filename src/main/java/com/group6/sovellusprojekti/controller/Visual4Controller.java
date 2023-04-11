package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.TEmission;
import com.group6.sovellusprojekti.service.Visual4Service;

@RestController
public class Visual4Controller {
    @Autowired
    private Visual4Service visual4Service;

    @GetMapping("visual4")
    public List<TEmission> getTEmissions() {
        return visual4Service.getAllTEmissions();
    }
    
    @GetMapping("visual4/country")
    public List<TEmission> getTEmissionsByCountry() {
        return visual4Service.getAllTEmissionsByCountry();
    }
    @GetMapping("/test")
    public String test() {
    
         return "test";
    }

}
