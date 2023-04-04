package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Co2Concentration;
import com.group6.sovellusprojekti.service.Visual2Service;

@RestController
public class Visual2Controller {
    private final Visual2Service service;

    public Visual2Controller(Visual2Service service) {
        this.service = service;
    }

    @GetMapping("/visual2/mauna-loa-monthly")
    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return service.getMaunaLoaMonthlyData();
    }

    @GetMapping("/visual2/mauna-loa-annual")
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return service.getMaunaLoaAnnualData();
    }

    @GetMapping("/visual2/ice-core-1")
    public List<Co2Concentration> getIceCore1Data() {
        return service.getIceCore1Data();
    }

    @GetMapping("/visual2/ice-core-2")
    public List<Co2Concentration> getIceCore2Data() {
        return service.getIceCore2Data();
    }

    @GetMapping("/visual2/ice-core-3")
    public List<Co2Concentration> getIceCore3Data() {
        return service.getIceCore3Data();
    }
}
