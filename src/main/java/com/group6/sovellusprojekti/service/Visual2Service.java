package com.group6.sovellusprojekti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group6.sovellusprojekti.model.Co2_concentrations;
import com.group6.sovellusprojekti.model.Co2_concentrationsRepository;

@Service
public class Visual2Service {
    @Autowired
    private Co2_concentrationsRepository co2_concentrationsRepository;

    public List<Co2_concentrations> findAll() {
        return co2_concentrationsRepository.findAll();
      }

    public List<Co2_concentrations> getAllMonthlyData() {
        return co2_concentrationsRepository.findByTimeframe("Monthly");
    }

    public List<Co2_concentrations> getAllAnnualData() {
        return co2_concentrationsRepository.findByTimeframe("Annual");
    }

    public List<Co2_concentrations> findByIce_core(int ice_core) {
        return co2_concentrationsRepository.findByIceCore(ice_core);
      }
}

