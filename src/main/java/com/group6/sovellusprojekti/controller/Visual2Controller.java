package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Co2_concentrations;
import com.group6.sovellusprojekti.service.Visual2Service;

@RestController
public class Visual2Controller {
    @Autowired
    private Visual2Service Visual2Service;

    @GetMapping("visual2")
    public List<Co2_concentrations> getData() {
        return Visual2Service.findAll();
    }


    // Endpoint that returns monthly data
    @GetMapping("visual2/timeframe/monthly")
    public List<Co2_concentrations> getAllMonthlyData() {
        return Visual2Service.getAllMonthlyData();
    }

    @GetMapping("visual2/timeframe/annual")
    public List<Co2_concentrations> getAnnualData() {
        return Visual2Service.getAllAnnualData();
    }
}