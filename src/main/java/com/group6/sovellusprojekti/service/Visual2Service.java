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


    /**
     * Get mauna monthly data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getMaunaLoaMonthlyData() {
        return repository.findByTimeframe("Monthly");
    }
    
    /**
     * Get mauna annual data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getMaunaLoaAnnualData() {
        return repository.findByTimeframe("Annual");
    }
    
    /**
     * Get ice core 1 data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getIceCore1Data() {
        return repository.findByIceCore(1);
    }
    
    /**
     * Get ice core 2 data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getIceCore2Data() {
        return repository.findByIceCore(2);
    }
    
    /**
     * Get ice core 3 data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getIceCore3Data() {
        return repository.findByIceCore(3);
    }

    /**
     * Get all data
     * 
     * @return List<Co2Concentration>
     */
    public List<Co2Concentration> getAllData() {
        return repository.findAll();
    }
}