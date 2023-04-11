package com.group6.sovellusprojekti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Co2ConcentrationRepository;
import com.group6.sovellusprojekti.model.Co2Concentration;

import java.util.List;

@Service
public class Visual2Service {
    @Autowired
    private Co2ConcentrationRepository repository;


    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return repository.findByTimeframe("Monthly");
    }
    
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return repository.findByTimeframe("Annual");
    }
    
    public List<Co2Concentration> getIceCore1Data() {
        return repository.findByIceCore(1);
    }
    
    public List<Co2Concentration> getIceCore2Data() {
        return repository.findByIceCore(2);
    }
    
    public List<Co2Concentration> getIceCore3Data() {
        return repository.findByIceCore(3);
    }

    public List<Co2Concentration> getAllData() {
        return repository.findAll();
    }
}