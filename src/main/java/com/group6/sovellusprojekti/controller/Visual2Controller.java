package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Co2Concentration;
import com.group6.sovellusprojekti.service.Visual2Service;

@RestController
@RequestMapping("/api/visual2")
public class Visual2Controller {
    private final Visual2Service service;

    public Visual2Controller(Visual2Service service) {
        this.service = service;
    }

    @GetMapping("/mauna-loa-monthly")
    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return service.getMaunaLoaMonthlyData();
    }

    @GetMapping("/mauna-loa-annual")
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return service.getMaunaLoaAnnualData();
    }

    @GetMapping("/ice-core-1")
    public List<Co2Concentration> getIceCore1Data() {
        return service.getIceCore1Data();
    }

    @GetMapping("/ice-core-2")
    public List<Co2Concentration> getIceCore2Data() {
        return service.getIceCore2Data();
    }

    @GetMapping("/ice-core-3")
    public List<Co2Concentration> getIceCore3Data() {
        return service.getIceCore3Data();
    }
}
