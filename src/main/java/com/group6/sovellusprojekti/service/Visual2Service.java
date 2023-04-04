package com.group6.sovellusprojekti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Co2ConcentrationRepository;
import com.group6.sovellusprojekti.model.Co2Concentration;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;

import java.util.List;

@Service
public class Visual2Service {
    @Autowired
    private Co2ConcentrationRepository repository;

    private Sort sortByYearAndMonth() {
        return Sort.by(Order.asc("year"), Order.asc("month"));
    }

    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return repository.findByTimeframe("Monthly", sortByYearAndMonth());
    }
    
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return repository.findByTimeframe("Annual", sortByYearAndMonth());
    }
    
    public List<Co2Concentration> getIceCore1Data() {
        return repository.findByIceCore(1, sortByYearAndMonth());
    }
    
    public List<Co2Concentration> getIceCore2Data() {
        return repository.findByIceCore(2, sortByYearAndMonth());
    }
    
    public List<Co2Concentration> getIceCore3Data() {
        return repository.findByIceCore(3, sortByYearAndMonth());
    }
}