package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Co2Concentration;
import com.group6.sovellusprojekti.service.Visual2Service;

@RestController
@RequestMapping("/api/visual2")
public class Visual2Controller {
    
    @Autowired
    private Visual2Service visual2Service;


    @GetMapping
    public List<Co2Concentration> getAllData() {
        return visual2Service.getAllData();
    }
    @GetMapping("/mauna-loa-monthly")
    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return visual2Service.getMaunaLoaMonthlyData();
    }

    @GetMapping("/mauna-loa-annual")
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return visual2Service.getMaunaLoaAnnualData();
    }

    @GetMapping("/ice-core-1")
    public List<Co2Concentration> getIceCore1Data() {
        return visual2Service.getIceCore1Data();
    }

    @GetMapping("/ice-core-2")
    public List<Co2Concentration> getIceCore2Data() {
        return visual2Service.getIceCore2Data();
    }

    @GetMapping("/ice-core-3")
    public List<Co2Concentration> getIceCore3Data() {
        return visual2Service.getIceCore3Data();
    }
}
